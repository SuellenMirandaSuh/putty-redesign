import { writeFileSync } from "fs";
import { parseHTML } from "linkedom";

const url = "https://www.chiark.greenend.org.uk/~sgtatham/putty/changes.html";
const res = await fetch(url);
if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
const raw = await res.text();

const { document } = parseHTML(raw);
const body = document.body;

// Parser corrige aninhamento inválido; serializamos só os filhos diretos do body.
function indentHtml(html, spaces = 2) {
  const pad = " ".repeat(spaces);
  return html
    .replace(/></g, ">\n<")
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      const depth =
        (trimmed.match(/^<\/?(?:html|head|body|ul|ol|li|p|h1|h2|h3|div|section)/) &&
          !trimmed.startsWith("</") &&
          !trimmed.endsWith("/>") &&
          !/^<(br|hr|img|input|meta|link)\b/i.test(trimmed)
          ? 0
          : 0);
      void depth;
      if (/^<\/?(ul|ol)\b/.test(trimmed)) return `${pad}${trimmed}`;
      if (/^<li\b/.test(trimmed) || /^<\/li>/.test(trimmed)) return `${pad}${pad}${trimmed}`;
      if (/^<p\b/.test(trimmed) || /^<\/p>/.test(trimmed)) return `${pad}${trimmed}`;
      if (/^<h[1-6]\b/.test(trimmed)) return `${pad}${trimmed}`;
      if (/^<hr\b/.test(trimmed)) return `${pad}${trimmed}`;
      return `${pad}${pad}${trimmed}`;
    })
    .filter(Boolean)
    .join("\n");
}

let inner = body.innerHTML;

// Remove bloco comentado legado (continha tags que confundem validadores)
inner = inner.replace(
  /<!--\s*<p>\s*These features are planned[\s\S]*?-->\s*/g,
  ""
);

// Rodapé: HTML5 válido (hr fora de p, parágrafo fechado)
inner = inner.replace(
  /<p>\s*<\/p>\s*<hr>\s*If you want to comment on this web site, see the\s*<a href="feedback\.html">Feedback page<\/a>\.\s*<br>\s*\(last modified on\s*<!--LASTMOD-->(.*?)<!--END-->\)\s*/s,
  `<hr>\n<p>\nIf you want to comment on this web site, see the <a href="feedback.html">Feedback page</a>.\n<br>\n(last modified on $1)\n</p>\n`
);

// Remove comentário HTML obsoleto se ainda existir
inner = inner.replace(/<!--LASTMOD-->|<!--END-->/g, "");

// Normaliza espaços em branco excessivos entre tags
inner = inner.replace(/\n\s*\n\s*\n/g, "\n\n");

const headTitle = document.querySelector("title")?.textContent?.trim() ?? "PuTTY Change Log";
const canonical =
  document.querySelector('link[rel="canonical"]')?.getAttribute("href") ??
  "https://www.chiark.greenend.org.uk/~sgtatham/putty/changes.html";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${headTitle}</title>
  <link rel="canonical" href="${canonical}">
  <link rel="shortcut icon" href="putty.ico">
</head>
<body>
${indentHtml(inner, 2)}
</body>
</html>
`;

const outPath = new URL("../public/content/changes.html", import.meta.url);
writeFileSync(outPath, html, "utf8");

// Validação
const { document: check } = parseHTML(html);
const pInP = check.body.querySelectorAll("p ul, p ol").length;
const liDiff =
  (html.match(/<li\b/g) || []).length - (html.match(/<\/li>/g) || []).length;
const pDiff = (html.match(/<p\b/g) || []).length - (html.match(/<\/p>/g) || []).length;
const ulDiff =
  (html.match(/<ul\b/g) || []).length - (html.match(/<\/ul>/g) || []).length;

console.log(`Wrote changes.html (${html.length} bytes)`);
console.log(`p contains list: ${pInP}, li: ${liDiff}, p: ${pDiff}, ul: ${ulDiff}`);
