import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
    { label: "Feedback", href: "/feedback" },
    { label: "Licence", href: "/licence" },
    { label: "Changes", href: "/changes" },
    { label: "Links", href: "/links" },
  ];

  const externalLinks = [
    { label: "Mirrors", href: "/mirrors" },
    { label: "Keys", href: "/keys" },
    { label: "Team", href: "/team" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PuTTY</h1>
              <p className="text-xs text-muted-foreground">SSH Client</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="border-l border-border mx-2"></div>
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-border pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border my-2"></div>
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
