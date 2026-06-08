import SiteColumn from "@/components/SiteColumn";
import { useLocation, Link } from "wouter";
import type { ReactNode } from "react";

const logoUrl = `${import.meta.env.BASE_URL}putty-logo.ico`;

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Feedback", href: "/feedback" },
  { label: "Licence", href: "/licence" },
  { label: "Updates", href: "/updates" },
  { label: "Mirrors", href: "/mirrors" },
  { label: "Keys", href: "/keys" },
  { label: "Links", href: "/links" },
  { label: "Team", href: "/team" },
];

const secondaryNav = [
  { label: "Docs", href: "/docs" },
  { label: "Privacy", href: "/privacy" },
  { label: "Changes", href: "/changes" },
  { label: "Wishlist", href: "/wishlist" },
];

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "font-semibold text-primary"
          : "text-foreground hover:text-primary transition-colors"
      }
    >
      {label}
    </Link>
  );
}

function NavRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm leading-relaxed">
      {children}
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location === href || location.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm font-sans">
      <div className="container py-4 md:py-5">
        <SiteColumn wide className="text-center space-y-3">
          <Link
            href="/"
            className="inline-flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center gap-3">
              <img
                src={logoUrl}
                alt="PuTTY logo"
                className="h-14 w-14 object-contain shrink-0"
                width={56}
                height={56}
              />
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-foreground leading-tight">PuTTY</p>
                <p className="text-xs text-muted-foreground">a free SSH and Telnet client</p>
              </div>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="space-y-2">
            <NavRow>
              {primaryNav.map((link, i) => (
                <span key={link.href} className="inline-flex items-center">
                  {i > 0 && <span className="text-muted-foreground mx-1.5">|</span>}
                  <NavLink {...link} active={isActive(link.href)} />
                </span>
              ))}
            </NavRow>

            <NavRow>
              <span className="text-foreground">Download:</span>
              <NavLink label="Stable" href="/latest" active={isActive("/latest")} />
              <span className="text-muted-foreground mx-1">·</span>
              <NavLink label="Snapshot" href="/snapshot" active={isActive("/snapshot")} />
              {secondaryNav.map((link) => (
                <span key={link.href} className="inline-flex items-center">
                  <span className="text-muted-foreground mx-1.5">|</span>
                  <NavLink {...link} active={isActive(link.href)} />
                </span>
              ))}
            </NavRow>
          </nav>
        </SiteColumn>
      </div>
    </header>
  );
}
