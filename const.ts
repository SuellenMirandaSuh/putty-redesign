import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1.1",
    question: "What is PuTTY?",
    answer:
      "PuTTY is a client program for the SSH network protocol, usually used to run terminal sessions over a network. It also supports running terminal sessions over a serial port, and a variety of older legacy network protocols such as Telnet, Rlogin, and SUPDUP. These protocols are all used to run a remote session on a computer, over a network. PuTTY implements the client end of that session: the end at which the session is displayed, rather than the end at which it runs.",
  },
  {
    id: "1.2",
    question: "Why use PuTTY when I could use OpenSSH?",
    answer:
      "Windows comes with a version of OpenSSH as an optional component, and its command prompt windows are much more like Unix terminals than they used to be. PuTTY and OpenSSH have different feature sets and ways of doing things. PuTTY offers a range of built-in options to log sessions, configurable terminal emulation tweaks, a unified saved-session system, and access to mid-session configuration via the GUI instead of stealing key sequences from your remote terminal session.",
  },
  {
    id: "2.1",
    question: "Does PuTTY support storing its settings in a disk file?",
    answer:
      "Not at present, although the documentation provides a method of achieving the same effect.",
  },
  {
    id: "2.2",
    question:
      "Does PuTTY have the ability to remember my password so I don't have to type it every time?",
    answer:
      "No, it doesn't. Remembering your password is a bad plan for obvious security reasons. Additionally, it's not even possible for PuTTY to automatically send your password in a Telnet session, because Telnet doesn't give the client software any indication of which part of the login process is the password prompt.",
  },
  {
    id: "2.3",
    question: "Is there an option to turn off the annoying host key prompts?",
    answer:
      "No, there isn't. And there won't be. Those annoying host key prompts are the whole point of SSH. Without them, all the cryptographic technology SSH uses to secure your session is doing nothing more than making an attacker's job slightly harder.",
  },
  {
    id: "2.4",
    question:
      "Will you write an SSH server for the PuTTY suite, to go with the client?",
    answer:
      "No. We don't have the time or motivation to do this. If you want an SSH server, there are already plenty of them available.",
  },
  {
    id: "3.1",
    question: "What ports of PuTTY exist?",
    answer:
      "PuTTY is available for Windows and Unix. There are also various third-party ports to other operating systems.",
  },
  {
    id: "3.2",
    question: "Will there ever be a Mac version of PuTTY?",
    answer:
      "There is a Mac version of PuTTY available. Check the download page for more information.",
  },
  {
    id: "3.3",
    question: "Is there a version of PuTTY for mobile operating systems?",
    answer:
      "There are various third-party ports of PuTTY to mobile operating systems. Check the Links page for more information.",
  },
];

const categories = [
  { id: "intro", label: "Introduction", items: ["1.1", "1.2"] },
  { id: "features", label: "Features Supported", items: ["2.1", "2.2", "2.3", "2.4"] },
  { id: "ports", label: "Ports to Other OSes", items: ["3.1", "3.2", "3.3"] },
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
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
                PuTTY FAQ
              </h1>
              <p className="text-lg text-muted-foreground">
                Frequently Asked Questions about PuTTY
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl">
            {categories.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="heading-lg mb-6 text-foreground">
                  {category.label}
                </h2>

                <div className="space-y-3">
                  {category.items.map((itemId) => {
                    const item = faqItems.find((i) => i.id === itemId);
                    if (!item) return null;

                    const isExpanded = expandedItems.has(item.id);

                    return (
                      <div
                        key={item.id}
                        className="border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-secondary transition-colors duration-150 text-left"
                        >
                          <span className="font-semibold text-foreground flex-1">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-6 py-4 bg-card border-t border-border">
                            <p className="text-body text-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
              <p className="text-small text-foreground">
                <strong>Note:</strong> This is a selection of frequently asked questions. For the complete FAQ, visit the{" "}
                <a
                  href="https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  full FAQ page
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
