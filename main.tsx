import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import DownloadCard from "@/components/DownloadCard";
import { Package, Terminal, FileText, Code, Cpu, Lock, Shield } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("info");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="heading-display mb-4 text-foreground">
                Download PuTTY: latest release (0.84)
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Free and open-source SSH, Telnet and Rlogin client
              </p>
              <p className="text-base text-muted-foreground">
                Currently this is 0.84, released on 2026-05-22. This page contains download links for the latest released version of PuTTY.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-12">
          <div className="flex gap-8">
            {/* Sidebar */}
            <Sidebar activeSection={activeSection} />

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {/* Info Section */}
              <section id="info" className="mb-12">
                <h2 className="heading-lg mb-6 text-foreground">
                  About This Release
                </h2>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-body text-foreground">
                    This page contains download links for the latest released version of PuTTY. When new releases come out, this page will update to contain the latest, so this is a good page to bookmark or link to.
                  </p>
                  <p className="text-body text-foreground">
                    Alternatively, here is a{" "}
                    <a
                      href="https://the.earth.li/~sgtatham/putty/latest/putty-0.84.tar.gz"
                      className="text-primary hover:underline font-medium"
                    >
                      permanent link to the 0.84 release
                    </a>
                    .
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-small text-foreground">
                      <strong>Note:</strong> Release versions of PuTTY are versions we think are reasonably likely to work well. However, they are often not the most up-to-date version of the code available. If you have a problem with this release, then it might be worth trying out the{" "}
                      <a
                        href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
                        className="text-primary hover:underline"
                      >
                        development snapshots
                      </a>
                      , to see if the problem has already been fixed in those versions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Package Files Section */}
              <section id="package" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  Package files
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  You probably want one of these. They include versions of all the PuTTY utilities (except the new and slightly experimental Windows pterm).
                </p>
                <div className="space-y-4">
                  <DownloadCard
                    title="64-bit x86"
                    description="Recommended for most users"
                    architecture="64-bit x86"
                    icon={<Package className="w-6 h-6" />}
                    downloads={[
                      {
                        name: "putty-64bit-0.84-installer.msi",
                        url: "https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.84-installer.msi",
                        signature:
                          "https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.84-installer.msi.gpg",
                      },
                    ]}
                  />

                  <DownloadCard
                    title="64-bit Arm"
                    description="For 64-bit ARM processors"
                    architecture="64-bit Arm"
                    icon={<Cpu className="w-6 h-6" />}
                    downloads={[
                      {
                        name: "putty-arm64-0.84-installer.msi",
                        url: "https://the.earth.li/~sgtatham/putty/latest/wa64/putty-arm64-0.84-installer.msi",
                        signature:
                          "https://the.earth.li/~sgtatham/putty/latest/wa64/putty-arm64-0.84-installer.msi.gpg",
                      },
                    ]}
                  />

                  <DownloadCard
                    title="32-bit x86"
                    description="Only for backward compatibility with very old PCs"
                    architecture="32-bit x86"
                    icon={<Package className="w-6 h-6" />}
                    downloads={[
                      {
                        name: "putty-0.84-installer.msi",
                        url: "https://the.earth.li/~sgtatham/putty/latest/w32/putty-0.84-installer.msi",
                        signature:
                          "https://the.earth.li/~sgtatham/putty/latest/w32/putty-0.84-installer.msi.gpg",
                      },
                    ]}
                  />

                  <DownloadCard
                    title="Unix source archive"
                    description="Compressed source code for Unix/Linux compilation"
                    architecture="Unix/Linux"
                    icon={<Code className="w-6 h-6" />}
                    downloads={[
                      {
                        name: "putty-0.84.tar.gz",
                        url: "https://the.earth.li/~sgtatham/putty/latest/putty-0.84.tar.gz",
                        signature:
                          "https://the.earth.li/~sgtatham/putty/latest/putty-0.84.tar.gz.gpg",
                      },
                    ]}
                  />
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-small text-blue-900">
                    <strong>Microsoft Store:</strong> We also publish the latest PuTTY installers for all Windows architectures as a free-of-charge download at the{" "}
                    <a
                      href="https://apps.microsoft.com/detail/xpfnzksklbp7rj"
                      className="text-blue-700 hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Store
                    </a>
                    ; they usually take a few days to appear there after we release them.
                  </p>
                </div>
              </section>

              {/* Binary Files Section */}
              <section id="binaries" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <Terminal className="w-8 h-8 text-primary" />
                  Alternative binary files
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  The installer packages above will provide versions of all of these (except PuTTYtel and pterm), but you can download standalone binaries one by one if you prefer.
                </p>

                <div className="space-y-6">
                  {/* putty.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      putty.exe (the SSH and Telnet client itself)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "putty.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "putty.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/putty.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/putty.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "putty.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/putty.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/putty.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* pscp.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      pscp.exe (an SCP client, i.e. command-line secure file copy)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "pscp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/pscp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/pscp.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "pscp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/pscp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/pscp.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "pscp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/pscp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/pscp.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* psftp.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      psftp.exe (an SFTP client, i.e. general file transfer sessions much like FTP)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "psftp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/psftp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/psftp.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "psftp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/psftp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/psftp.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "psftp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/psftp.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/psftp.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* puttytel.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      puttytel.exe (a Telnet-only client)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "puttytel.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/puttytel.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/puttytel.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "puttytel.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/puttytel.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/puttytel.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "puttytel.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/puttytel.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/puttytel.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* plink.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      plink.exe (a command-line interface to the PuTTY back ends)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "plink.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/plink.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/plink.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "plink.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/plink.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/plink.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "plink.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/plink.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/plink.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* pageant.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      pageant.exe (an SSH authentication agent for PuTTY, PSCP, PSFTP, and Plink)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "pageant.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/pageant.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/pageant.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "pageant.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/pageant.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/pageant.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "pageant.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/pageant.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/pageant.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* puttygen.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      puttygen.exe (a RSA and DSA key generation utility)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "puttygen.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "puttygen.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/puttygen.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/puttygen.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "puttygen.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/puttygen.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/puttygen.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* pterm.exe */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      pterm.exe (a PuTTY-style wrapper for Windows command prompts)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "pterm.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/pterm.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/pterm.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "pterm.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/pterm.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/pterm.exe.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "pterm.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/pterm.exe",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/pterm.exe.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* putty.zip */}
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">
                      putty.zip (a .ZIP archive of all the above except PuTTYtel and pterm)
                    </h3>
                    <div className="space-y-3">
                      <DownloadCard
                        title="64-bit x86"
                        description="Recommended version"
                        architecture="64-bit x86"
                        downloads={[
                          {
                            name: "putty.zip",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w64/putty.zip",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w64/putty.zip.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="64-bit Arm"
                        description="For ARM processors"
                        architecture="64-bit Arm"
                        downloads={[
                          {
                            name: "putty.zip",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa64/putty.zip",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/wa64/putty.zip.gpg",
                          },
                        ]}
                      />
                      <DownloadCard
                        title="32-bit x86"
                        description="For old PCs"
                        architecture="32-bit x86"
                        downloads={[
                          {
                            name: "putty.zip",
                            url: "https://the.earth.li/~sgtatham/putty/latest/w32/putty.zip",
                            signature:
                              "https://the.earth.li/~sgtatham/putty/latest/w32/putty.zip.gpg",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Documentation Section */}
              <section id="docs" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  Documentation
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  Access PuTTY documentation in various formats.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">Browse the documentation on the web</h3>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-small text-muted-foreground mb-4">HTML Contents page</p>
                      <a
                        href="https://the.earth.li/~sgtatham/putty/latest/htmldoc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150"
                      >
                        View Documentation
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">Downloadable documentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-small text-muted-foreground mb-4">Zipped HTML</p>
                        <a
                          href="https://the.earth.li/~sgtatham/putty/latest/puttydoc.zip"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150"
                        >
                          puttydoc.zip
                        </a>
                      </div>

                      <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-small text-muted-foreground mb-4">Plain text</p>
                        <a
                          href="https://the.earth.li/~sgtatham/putty/latest/puttydoc.txt"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150"
                        >
                          puttydoc.txt
                        </a>
                      </div>

                      <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-small text-muted-foreground mb-4">Windows HTML Help</p>
                        <a
                          href="https://the.earth.li/~sgtatham/putty/latest/putty.chm"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150"
                        >
                          putty.chm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Source Code Section */}
              <section id="source" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <Code className="w-8 h-8 text-primary" />
                  Source code
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  Access the PuTTY source code for compilation or development.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">Unix source archive</h3>
                    <DownloadCard
                      title=".tar.gz"
                      description="Compressed source code for Unix/Linux"
                      architecture="Unix/Linux"
                      downloads={[
                        {
                          name: "putty-0.84.tar.gz",
                          url: "https://the.earth.li/~sgtatham/putty/latest/putty-0.84.tar.gz",
                          signature:
                            "https://the.earth.li/~sgtatham/putty/latest/putty-0.84.tar.gz.gpg",
                        },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">Windows source archive</h3>
                    <DownloadCard
                      title=".zip"
                      description="Source code in ZIP format"
                      architecture="Windows"
                      downloads={[
                        {
                          name: "putty-src.zip",
                          url: "https://the.earth.li/~sgtatham/putty/latest/putty-src.zip",
                          signature:
                            "https://the.earth.li/~sgtatham/putty/latest/putty-src.zip.gpg",
                        },
                      ]}
                    />
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="heading-sm mb-4 text-foreground">
                      git repository
                    </h3>
                    <p className="text-small text-muted-foreground mb-4">
                      Clone the Git repository to follow development.
                    </p>
                    <code className="code-inline block mb-4">
                      Clone: https://git.tartarus.org/simon/putty.git
                    </code>
                    <div className="flex gap-2">
                      <a
                        href="https://git.tartarus.org/?p=simon/putty.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150"
                      >
                        main
                      </a>
                      <a
                        href="https://git.tartarus.org/?p=simon/putty.git;a=commit;h=refs/tags/0.84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors duration-150"
                      >
                        0.84 release tag
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* ARM 32-bit Section */}
              <section id="arm32" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-primary" />
                  Downloads for 32-bit Windows on Arm
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  Compiled executable files for 32-bit Windows on Arm. We've had reports that these can be useful on Windows IoT Core.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">32-bit Windows on Arm installer</h3>
                    <DownloadCard
                      title="32-bit Arm"
                      description="For Windows IoT Core and 32-bit ARM systems"
                      architecture="32-bit Arm"
                      downloads={[
                        {
                          name: "putty-arm32-0.84-installer.msi",
                          url: "https://the.earth.li/~sgtatham/putty/latest/wa32/putty-arm32-0.84-installer.msi",
                          signature:
                            "https://the.earth.li/~sgtatham/putty/latest/wa32/putty-arm32-0.84-installer.msi.gpg",
                        },
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">32-bit Windows on Arm individual executables</h3>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="space-y-2 text-small">
                        {[
                          {
                            name: "putty.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/putty.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/putty.exe.gpg",
                          },
                          {
                            name: "pscp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/pscp.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/pscp.exe.gpg",
                          },
                          {
                            name: "psftp.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/psftp.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/psftp.exe.gpg",
                          },
                          {
                            name: "puttytel.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/puttytel.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/puttytel.exe.gpg",
                          },
                          {
                            name: "plink.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/plink.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/plink.exe.gpg",
                          },
                          {
                            name: "pageant.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/pageant.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/pageant.exe.gpg",
                          },
                          {
                            name: "puttygen.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/puttygen.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/puttygen.exe.gpg",
                          },
                          {
                            name: "pterm.exe",
                            url: "https://the.earth.li/~sgtatham/putty/latest/wa32/pterm.exe",
                            sig: "https://the.earth.li/~sgtatham/putty/latest/wa32/pterm.exe.gpg",
                          },
                        ].map((file) => (
                          <div
                            key={file.name}
                            className="flex items-center justify-between py-2 px-3 bg-muted rounded"
                          >
                            <code className="code-inline text-xs">{file.name}</code>
                            <div className="flex gap-2">
                              <a
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-xs font-medium"
                              >
                                Download
                              </a>
                              <a
                                href={file.sig}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-xs font-medium"
                              >
                                Sig
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4 text-foreground">Zip file of all 32-bit Windows on Arm executables</h3>
                    <DownloadCard
                      title="32-bit Arm"
                      description="All executables compressed"
                      architecture="32-bit Arm"
                      downloads={[
                        {
                          name: "putty.zip",
                          url: "https://the.earth.li/~sgtatham/putty/latest/wa32/putty.zip",
                          signature:
                            "https://the.earth.li/~sgtatham/putty/latest/wa32/putty.zip.gpg",
                        },
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Checksums Section */}
              <section id="checksums" className="mb-12">
                <h2 className="heading-lg mb-2 text-foreground flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  Checksum files
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  Cryptographic checksums for all the above files
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "MD5",
                      file: "md5sums",
                      url: "https://the.earth.li/~sgtatham/putty/latest/md5sums",
                      sig: "https://the.earth.li/~sgtatham/putty/latest/md5sums.gpg",
                    },
                    {
                      name: "SHA-1",
                      file: "sha1sums",
                      url: "https://the.earth.li/~sgtatham/putty/latest/sha1sums",
                      sig: "https://the.earth.li/~sgtatham/putty/latest/sha1sums.gpg",
                    },
                    {
                      name: "SHA-256",
                      file: "sha256sums",
                      url: "https://the.earth.li/~sgtatham/putty/latest/sha256sums",
                      sig: "https://the.earth.li/~sgtatham/putty/latest/sha256sums.gpg",
                    },
                    {
                      name: "SHA-512",
                      file: "sha512sums",
                      url: "https://the.earth.li/~sgtatham/putty/latest/sha512sums",
                      sig: "https://the.earth.li/~sgtatham/putty/latest/sha512sums.gpg",
                    },
                  ].map((checksum) => (
                    <div
                      key={checksum.name}
                      className="bg-card border border-border rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-foreground mb-3">
                        {checksum.name}
                      </h4>
                      <div className="flex gap-2">
                        <a
                          href={checksum.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150 text-sm font-medium"
                        >
                          {checksum.file}
                        </a>
                        <a
                          href={checksum.sig}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GPG Signature"
                          className="inline-flex items-center justify-center px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors duration-150"
                        >
                          <Shield className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer Note */}
              <section className="mt-12 pt-8 border-t border-border">
                <p className="text-small text-muted-foreground">
                  If you want to comment on this web site, see the{" "}
                  <a
                    href="https://www.chiark.greenend.org.uk/~sgtatham/putty/feedback.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Feedback page
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
