import { toSitePath } from "@/lib/paths";
import { useEffect, useState } from "react";

interface HtmlContentProps {
  page: string;
  extractHero?: boolean;
  onHeroExtracted?: (hero: string | null) => void;
}

const ROUTE_MAP: Record<string, string> = {
  "./": "/",
  "index.html": "/",
  "faq.html": "/faq",
  "feedback.html": "/feedback",
  "licence.html": "/licence",
  "maillist.html": "/updates",
  "mirrors.html": "/mirrors",
  "keys.html": "/keys",
  "links.html": "/links",
  "team.html": "/team",
  "latest.html": "/latest",
  "snapshot.html": "/snapshot",
  "docs.html": "/docs",
  "privacy.html": "/privacy",
  "changes.html": "/changes",
  "wishlist/": "/wishlist",
  "wishlist/index.html": "/wishlist",
};

const SECTION_IDS: Record<string, string> = {
  "Package files": "package",
  "Alternative binary files": "binaries",
  Documentation: "docs",
  "Source code": "source",
  "Downloads for 32-bit Windows on Arm": "arm32",
  "Checksum files": "checksums",
};

function rewriteHref(href: string): string {
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) return href;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    const chiark = href.match(
      /^https?:\/\/www\.chiark\.greenend\.org\.uk\/~sgtatham\/putty\/(.*)$/
    );
    if (chiark) {
      const tail = chiark[1] || "";
      if (ROUTE_MAP[tail]) return toSitePath(ROUTE_MAP[tail]);
      if (tail.endsWith(".html")) return toSitePath(`/${tail.replace(/\.html$/, "")}`);
      if (tail.startsWith("wishlist")) return toSitePath("/wishlist");
      return toSitePath(`/${tail}`);
    }
    return href;
  }

  const cleaned = href.replace(/^\.\//, "");
  if (ROUTE_MAP[cleaned]) return toSitePath(ROUTE_MAP[cleaned]);
  if (cleaned.endsWith(".html") || cleaned.includes("/")) {
    return `https://www.chiark.greenend.org.uk/~sgtatham/putty/${cleaned}`;
  }
  return href;
}

function isHeroBoundary(el: Element): boolean {
  const tag = el.tagName.toLowerCase();
  if (tag === "h2" || tag === "ul" || tag === "ol") return true;
  if (tag === "div") {
    return (
      el.classList.contains("putty-section-wrap") ||
      el.classList.contains("downloadbottom") ||
      el.classList.contains("putty-section-panel")
    );
  }
  return false;
}

function splitHero(body: HTMLElement): { hero: string | null; rest: HTMLElement } {
  const clone = body.cloneNode(true) as HTMLElement;
  const h1 = clone.querySelector("h1");
  if (!h1) return { hero: null, rest: clone };

  const heroNodes: Element[] = [h1];
  let sibling = h1.nextElementSibling;

  while (sibling) {
    if (isHeroBoundary(sibling)) break;
    if (sibling.tagName.toLowerCase() === "p") heroNodes.push(sibling);
    sibling = sibling.nextElementSibling;
  }

  heroNodes.forEach((node) => node.remove());
  return {
    hero: heroNodes.map((n) => n.outerHTML).join(""),
    rest: clone,
  };
}

function enhanceDocument(body: HTMLElement, page: string) {
  body.querySelectorAll("p[align=center], p[align='center']").forEach((el) => {
    const text = el.textContent ?? "";
    if (text.includes("Home") && text.includes("FAQ") && text.includes("Download:")) {
      el.remove();
    }
  });

  body.querySelectorAll("p").forEach((el) => {
    const text = el.textContent ?? "";
    if (text.includes("If you want to comment on this web site")) {
      el.remove();
    }
  });
  body.querySelectorAll("hr").forEach((el) => el.remove());

  body.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href) a.setAttribute("href", rewriteHref(href));
  });

  body.querySelectorAll("h2").forEach((h2) => {
    const title = h2.textContent?.trim() ?? "";
    if (SECTION_IDS[title]) h2.id = SECTION_IDS[title];
    h2.classList.add("putty-section-title");
  });

  if (page === "home") {
    const newsHeading = Array.from(body.querySelectorAll("h2")).find(
      (h) => h.textContent?.trim() === "Latest news"
    );
    if (newsHeading) newsHeading.classList.add("putty-news-heading");
  }

  body.querySelectorAll(".downloadtop, h2.putty-section-title").forEach((h2) => {
    h2.classList.add("putty-section-heading");
  });

  body.querySelectorAll(".downloadbottom").forEach((section) => {
    section.classList.add("putty-section-panel");
  });

  // Agrupa título azul + conteúdo em container quadrado com borda
  body.querySelectorAll("h2.putty-section-heading").forEach((h2) => {
    if (h2.classList.contains("putty-news-heading")) return;
    const panel = h2.nextElementSibling;
    if (
      panel &&
      (panel.classList.contains("putty-section-panel") ||
        panel.classList.contains("downloadbottom"))
    ) {
      const wrap = body.ownerDocument.createElement("div");
      wrap.className = "putty-section-wrap";
      h2.parentNode?.insertBefore(wrap, h2);
      wrap.appendChild(h2);
      wrap.appendChild(panel);
    }
  });

  if (page === "home") {
    const newsHeading = body.querySelector("h2.putty-news-heading");
    if (newsHeading && !newsHeading.closest(".putty-section-wrap")) {
      const wrap = body.ownerDocument.createElement("div");
      wrap.className = "putty-section-wrap putty-news-wrap";
      const panel = body.ownerDocument.createElement("div");
      panel.className = "putty-section-panel putty-news-panel";

      newsHeading.parentNode?.insertBefore(wrap, newsHeading);
      wrap.appendChild(newsHeading);
      wrap.appendChild(panel);

      let node = wrap.nextElementSibling;
      while (node) {
        if (node.tagName.toLowerCase() === "h2") break;
        if (node.tagName.toLowerCase() === "p") {
          const next = node.nextElementSibling;
          panel.appendChild(node);
          node = next;
          continue;
        }
        node = node.nextElementSibling;
      }
    }
  }

  body.querySelectorAll(".downloadheading").forEach((heading) => {
    heading.classList.add("putty-download-group-title");
  });

  body.querySelectorAll(".downloadrow").forEach((row) => {
    row.classList.add("putty-download-row");
    const fileLink = row.querySelector(".downloadfile a");
    const sigLink = row.querySelector(".downloadsig a");
    if (fileLink) fileLink.classList.add("putty-btn", "putty-btn-primary", "putty-download-link");
    if (sigLink) sigLink.classList.add("putty-btn", "putty-btn-outline");
  });

  body.querySelectorAll('form[action*="google.com/search"]').forEach((form) => {
    form.classList.add("putty-google-search");
  });

  body.querySelectorAll("p").forEach((p) => {
    const html = p.innerHTML;
    if (html.includes("<b>LEGAL WARNING</b>") || html.includes("<strong>LEGAL WARNING</strong>")) {
      p.classList.add("putty-callout", "putty-callout-warning");
    }
    if (html.includes("<b>Note:</b>") || html.includes("<strong>Note:</strong>")) {
      p.classList.add("putty-callout", "putty-callout-info");
    }
  });

  body.querySelectorAll("ul").forEach((ul) => {
    const prev = ul.previousElementSibling;
    if (prev?.tagName.toLowerCase() === "h2" && prev.textContent?.trim() === "Site map") {
      ul.classList.add("putty-sitemap");
    }
  });
}

function serializeBody(body: HTMLElement): string {
  return body.innerHTML.replace(
    /<\/?(H[1-6]|P|UL|OL|LI|DL|DT|DD|B|I|EM|STRONG|CODE|PRE|TABLE|TR|TD|TH|HR|BR|DIV|SPAN)\b/gi,
    (m) => m.toLowerCase()
  );
}

function processHtml(html: string, page: string, extractHero: boolean) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const body = doc.body;
  if (!body) return { hero: null, content: html };

  enhanceDocument(body, page);

  if (extractHero) {
    const { hero, rest } = splitHero(body);
    return { hero, content: serializeBody(rest) };
  }

  return { hero: null, content: serializeBody(body) };
}

export default function HtmlContent({
  page,
  extractHero = false,
  onHeroExtracted,
}: HtmlContentProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const url = `${import.meta.env.BASE_URL}content/${page}.html`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${page}`);
        return res.text();
      })
      .then((html) => {
        if (cancelled) return;
        const { hero, content: processed } = processHtml(html, page, extractHero);
        onHeroExtracted?.(hero);
        setContent(processed);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [page, extractHero, onHeroExtracted]);

  if (loading) {
    return <p className="text-muted-foreground animate-pulse">Loading…</p>;
  }

  if (error) {
    return <p className="text-destructive">{error}</p>;
  }

  return (
    <article
      className="putty-content max-w-none
        [&_h1]:heading-display [&_h1]:mb-6 [&_h1]:text-foreground [&_h1]:text-center
        [&_h2]:scroll-mt-28
        [&_h3]:heading-sm [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-foreground
        [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2
        [&_p]:text-body [&_p]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-left
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
        [&_li]:text-body [&_li]:text-foreground
        [&_a]:text-primary [&_a]:hover:underline
        [&_b]:font-semibold [&_strong]:font-semibold
        [&_code]:code-inline [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto
        [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:bg-muted
        [&_td]:border [&_td]:border-border [&_td]:p-2
        [&_dt]:font-semibold [&_dt]:mt-4
        [&_dd]:ml-4 [&_dd]:mb-2 [&_dd]:text-muted-foreground"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
