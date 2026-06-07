import { FileText, ExternalLink } from "lucide-react";

interface SidebarProps {
  activeSection?: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const sections = [
    { id: "info", label: "Information", icon: "ℹ️" },
    { id: "package", label: "Installers", icon: "📦" },
    { id: "binaries", label: "Executables", icon: "⚙️" },
    { id: "docs", label: "Documentation", icon: "📚" },
    { id: "source", label: "Source Code", icon: "💻" },
    { id: "arm32", label: "Windows ARM 32-bit", icon: "🔧" },
    { id: "checksums", label: "Checksums", icon: "🔐" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Quick Navigation */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>📍</span> Quick Navigation
          </h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Useful Links */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Useful Links
          </h3>
          <div className="space-y-2">
            <a
              href="https://the.earth.li/~sgtatham/putty/latest/htmldoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-md transition-colors duration-150"
            >
              <ExternalLink className="w-3 h-3" />
              Online Documentation
            </a>
            <a
              href="https://git.tartarus.org/?p=simon/putty.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-md transition-colors duration-150"
            >
              <ExternalLink className="w-3 h-3" />
              Git Repository
            </a>
            <a
              href="https://apps.microsoft.com/detail/xpfnzksklbp7rj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-md transition-colors duration-150"
            >
              <ExternalLink className="w-3 h-3" />
              Microsoft Store
            </a>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="text-xs text-foreground leading-relaxed">
            <strong>Tip:</strong> Most users prefer the <strong>64-bit x86</strong> version. 32-bit versions are only for compatibility with very old PCs.
          </p>
        </div>
      </div>
    </aside>
  );
}
