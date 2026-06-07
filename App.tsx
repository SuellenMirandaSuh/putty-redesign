import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ChangeVersion {
  version: string;
  date: string;
  features: string[];
}

const versions: ChangeVersion[] = [
  {
    version: "0.84",
    date: "2026-05-22",
    features: [
      "Security issue: fixed a remotely triggerable double-free in RSA key exchange",
      "Minor security issue: fixed a remotely triggerable crash in NIST ECDSA signature verification",
      "Minor security issue: fixed marking of Telnet and Rlogin session data with a trust sigil after proxy authentication",
      "Ability to run a specified command before starting the connection (e.g., for wake-on-LAN or port knock)",
      "On Unix: display 'pre-edit text' showing progress of using multiple keystrokes to compose a single Unicode character",
      "On Unix: improved support for running the GUI tools on Wayland",
      "Bug fix: configuring a SSH certificate authority on Unix would fail unless you manually made a config directory",
      "Bug fix: spurious 'Network error: Socket is not connected' when authenticating to some HTTP proxies",
      "Bug fix: disabling cursor blinking in the Windows Control Panel but enabling it in PuTTY would lead to a tight loop",
    ],
  },
  {
    version: "0.83",
    date: "2025-02-08",
    features: [
      "Support for ML-KEM, the NIST-standardised post-quantum key exchange mechanism",
      "Support for full Unicode file names in Windows file selector dialogs",
      "Bug fix: psftp -b works again",
      "Bug fix: assertion failure if an SSH connection times out at the login prompt",
      "Bug fix: crash in Pageant if an SSH connection is abandoned while waiting for a deferred decryption passphrase",
      "Bug fix: tight loop if PuTTY tried to send an empty answerback string",
      "Bug fix: accidental truncation of some configuration edit boxes' contents to 127 characters",
      "Bug fix: Windows XP support was accidentally broken, and now reinstated",
      "Bug fix: restored interoperation with third-party tools that auto-fill login prompts",
      "Bug fix: confusion when terminal window resized by tools like FancyZones",
      "Bug fix: the small keypad keys didn't reliably work in the terminal on Unix",
    ],
  },
  {
    version: "0.82",
    date: "2024-11-27",
    features: [
      "Major refactoring of Unicode handling to allow the use of 'foreign' Unicode characters",
      "Unicode version update: all character analysis is updated to Unicode 16.0.0",
      "Unicode terminal rendering: national and regional flags are now understood by PuTTY's terminal emulator",
      "The Event Log mentions the local address and port number of the outgoing connection socket",
      "Bracketed paste mode can now be turned off in the Terminal > Features panel",
      "Unix Pageant: new --foreground mode for running as a subprocess",
      "Bug fix: the 'border width' configuration option is now honoured even when the window is maximised",
      "Bug fix: SHA-2 based RSA signatures are now sent with correct zero padding",
      "Bug fix: terminal wrap mishandling caused occasional incorrect redraws in curses-based applications",
      "Bug fix: Alt + function key in 'Xterm 216+' mode sent a spurious extra escape character",
    ],
  },
  {
    version: "0.81",
    date: "2024-04-15",
    features: [
      "Security fix for CVE-2024-31497: NIST P521 / ecdsa-sha2-nistp521 signatures are no longer generated with biased values of k",
    ],
  },
  {
    version: "0.80",
    date: "2023-12-18",
    features: [
      "Security fix: support for OpenSSH's new kex-strict protocol modification",
      "Bug fix: the MSI-installed version of putty.exe can now find its help file again",
      "Bug fix: a server sending non-displaying terminal escape sequences no longer resets the scrollback",
    ],
  },
];

export default function Changes() {
  const [expandedVersions, setExpandedVersions] = useState<Set<string>>(
    new Set(["0.84"])
  );

  const toggleVersion = (version: string) => {
    const newExpanded = new Set(expandedVersions);
    if (newExpanded.has(version)) {
      newExpanded.delete(version);
    } else {
      newExpanded.add(version);
    }
    setExpandedVersions(newExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="heading-display mb-4 text-foreground">
                PuTTY Change Log
              </h1>
              <p className="text-lg text-muted-foreground">
                Recent changes and improvements to PuTTY
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl">
            <div className="space-y-4">
              {versions.map((versionInfo) => {
                const isExpanded = expandedVersions.has(versionInfo.version);

                return (
                  <div
                    key={versionInfo.version}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleVersion(versionInfo.version)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 hover:bg-secondary transition-colors duration-150 bg-card"
                    >
                      <div className="text-left flex-1">
                        <h3 className="heading-sm text-foreground">
                          Version {versionInfo.version}
                        </h3>
                        <p className="text-small text-muted-foreground">
                          Released {versionInfo.date}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-6 py-4 bg-muted border-t border-border">
                        <ul className="space-y-2">
                          {versionInfo.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-small text-foreground"
                            >
                              <span className="text-primary font-bold flex-shrink-0">
                                •
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
              <p className="text-small text-foreground">
                <strong>Note:</strong> For the complete changelog and planned features for the next release, visit the{" "}
                <a
                  href="https://www.chiark.greenend.org.uk/~sgtatham/putty/changes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  full Change Log page
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
