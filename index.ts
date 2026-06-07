import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

interface LinkCategory {
  title: string;
  description: string;
  links: { name: string; url: string; description: string }[];
}

const linkCategories: LinkCategory[] = [
  {
    title: "Clients for Various Operating Systems",
    description: "PuTTY ports and related SSH clients for different platforms",
    links: [
      {
        name: "NettleSSH",
        url: "http://nettlessh.mine.nu/",
        description: "SSH client for RISC OS",
      },
      {
        name: "WinSCP",
        url: "http://winscp.net/",
        description: "GUI SFTP and SCP client",
      },
      {
        name: "FileZilla",
        url: "http://filezilla.sourceforge.net/",
        description: "GUI file transfer client with SFTP support",
      },
      {
        name: "PuTTY Tray",
        url: "https://puttytray.goeswhere.com/",
        description:
          "Minimising to system tray, transparency, URL hyperlinks, and more",
      },
      {
        name: "KiTTY",
        url: "http://kitty.9bis.com/",
        description:
          "Windows-only fork with password storage, system tray, and more",
      },
      {
        name: "SuperPutty",
        url: "http://code.google.com/p/superputty/",
        description: "Tabbed/docking interface for PuTTY sessions",
      },
    ],
  },
  {
    title: "Session Management",
    description: "Tools for organizing and launching PuTTY sessions",
    links: [
      {
        name: "QuickPutty",
        url: "http://www.deckmyn.org/olivier/software",
        description: "Quickly launch PuTTY saved sessions",
      },
      {
        name: "PuTTY Session Manager",
        url: "http://puttysm.sourceforge.net/",
        description: "Organize and launch saved sessions",
      },
      {
        name: "PuTTY Manager",
        url: "http://puttymanager.sourceforge.net/",
        description: "Tabbed interface and dockable windows for PuTTY",
      },
      {
        name: "Launchy with PuTTY Plugin",
        url: "http://www.launchy.net/",
        description: "Launch PuTTY sessions by typing their names",
      },
    ],
  },
  {
    title: "Tunneling and VPN",
    description: "Tools for SSH tunneling and port forwarding",
    links: [
      {
        name: "CallingHome",
        url: "http://callinghome.sourceforge.net/",
        description: "Maintain long-running SSH tunnels using PuTTY",
      },
      {
        name: "PuTTY Tunnel Manager",
        url: "http://code.google.com/p/putty-tunnel-manager/",
        description: "Maintain multiple long-running tunnel sessions",
      },
      {
        name: "Wintunnel",
        url: "http://sourceforge.net/projects/wintunnel",
        description: "Front end for creating SSH tunnels",
      },
    ],
  },
  {
    title: "SSH Specifications",
    description: "RFCs and standards implemented by PuTTY",
    links: [
      {
        name: "RFC 4250 - SSH Assigned Numbers",
        url: "https://www.rfc-editor.org/rfc/rfc4250",
        description: "SSH protocol assigned numbers",
      },
      {
        name: "RFC 4251 - SSH Architecture",
        url: "https://www.rfc-editor.org/rfc/rfc4251",
        description: "SSH protocol architecture",
      },
      {
        name: "RFC 4252 - SSH Authentication",
        url: "https://www.rfc-editor.org/rfc/rfc4252",
        description: "SSH authentication protocol",
      },
      {
        name: "RFC 4253 - SSH Transport Layer",
        url: "https://www.rfc-editor.org/rfc/rfc4253",
        description: "SSH transport layer protocol",
      },
      {
        name: "RFC 4254 - SSH Connection Protocol",
        url: "https://www.rfc-editor.org/rfc/rfc4254",
        description: "SSH connection protocol",
      },
    ],
  },
];

export default function Links() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="heading-display mb-4 text-foreground">
                PuTTY Links
              </h1>
              <p className="text-lg text-muted-foreground">
                Related software, tools, and specifications
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl space-y-12">
            {linkCategories.map((category, idx) => (
              <section key={idx}>
                <h2 className="heading-lg mb-2 text-foreground">
                  {category.title}
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all duration-150"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="heading-sm text-foreground flex-1">
                          {link.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-small text-muted-foreground">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            ))}

            {/* Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-small text-foreground">
                <strong>Note:</strong> These links are provided for reference. We have no control over third-party code, so we can't vouch for either its quality or its security. For more links and resources, visit the{" "}
                <a
                  href="https://www.chiark.greenend.org.uk/~sgtatham/putty/links.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  full Links page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
