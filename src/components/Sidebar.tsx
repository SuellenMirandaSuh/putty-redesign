import { ExternalLink, FileText } from "lucide-react";

const sections = [
  { id: "package", label: "Package files", icon: "📦" },
  { id: "binaries", label: "Alternative binary files", icon: "⚙️" },
  { id: "docs", label: "Documentation", icon: "📚" },
  { id: "source", label: "Source code", icon: "💻" },
  { id: "arm32", label: "Windows ARM 32-bit", icon: "🔧" },
  { id: "checksums", label: "Checksum files", icon: "🔐" },
];

export default function Sidebar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-28 space-y-6">
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Quick Navigation</h3>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Useful Links
          </h3>
          <div className="space-y-1">
            <a
              href="https://the.earth.li/~sgtatham/putty/latest/htmldoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              <ExternalLink className="w-3 h-3 shrink-0" />
              Online Documentation
            </a>
            <a
              href="https://git.tartarus.org/?p=simon/putty.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              <ExternalLink className="w-3 h-3 shrink-0" />
              Git Repository
            </a>
            <a
              href="https://apps.microsoft.com/detail/xpfnzksklbp7rj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              <ExternalLink className="w-3 h-3 shrink-0" />
              Microsoft Store
            </a>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-xs text-foreground leading-relaxed">
            <strong>Tip:</strong> Most users prefer the <strong>64-bit x86</strong>{" "}
            version. 32-bit versions are only for compatibility with very old PCs.
          </p>
        </div>
      </div>
    </aside>
  );
}
