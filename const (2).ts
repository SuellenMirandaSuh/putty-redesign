import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Server } from "lucide-react";

interface Mirror {
  name: string;
  url: string;
  country: string;
  type: "HTTP" | "FTP";
}

const httpMirrors: Mirror[] = [
  { name: "putty.md5.com.ar", url: "http://putty.md5.com.ar/", country: "Argentina", type: "HTTP" },
  { name: "putty.daemon.am", url: "http://putty.daemon.am/", country: "Armenia", type: "HTTP" },
  { name: "mirror.afoyi.com", url: "http://mirror.afoyi.com/putty/", country: "Australia", type: "HTTP" },
  { name: "putty.taslug.org.au", url: "http://putty.taslug.org.au/", country: "Australia", type: "HTTP" },
  { name: "putty.4any.org", url: "http://putty.4any.org/", country: "Austria", type: "HTTP" },
  { name: "putty.be", url: "http://www.putty.be/", country: "Belgium", type: "HTTP" },
  { name: "putty.portalinux.org", url: "http://putty.portalinux.org/", country: "Belgium", type: "HTTP" },
  { name: "putty.scarlet.be", url: "http://putty.scarlet.be/", country: "Belgium", type: "HTTP" },
  { name: "putty.ehdbrasil.net", url: "http://putty.ehdbrasil.net/", country: "Brazil", type: "HTTP" },
  { name: "putty.kinghost.net", url: "http://putty.kinghost.net/", country: "Brazil", type: "HTTP" },
  { name: "putty.paracoda.com", url: "http://putty.paracoda.com/", country: "Canada", type: "HTTP" },
  { name: "mirror.nucleardog.com", url: "http://mirror.nucleardog.com/putty/", country: "Canada", type: "HTTP" },
  { name: "putty.sh.cvut.cz", url: "http://putty.sh.cvut.cz/", country: "Czech Republic", type: "HTTP" },
  { name: "putty.tanis.dk", url: "http://putty.tanis.dk/", country: "Denmark", type: "HTTP" },
  { name: "mirrors.dotsrc.org", url: "http://mirrors.dotsrc.org/putty/", country: "Denmark", type: "HTTP" },
  { name: "mirror.cedratnet.com", url: "http://mirror.cedratnet.com/putty/", country: "France", type: "HTTP" },
  { name: "putty.miroir-francais.fr", url: "http://putty.miroir-francais.fr/", country: "France", type: "HTTP" },
  { name: "putty.linux4all.homelinux.net", url: "http://putty.linux4all.homelinux.net/", country: "Germany", type: "HTTP" },
  { name: "putty.bemirror.org", url: "http://putty.bemirror.org/", country: "Germany", type: "HTTP" },
  { name: "putty.linux-mirror.org", url: "http://putty.linux-mirror.org/", country: "Germany", type: "HTTP" },
  { name: "very-clever.com", url: "http://www.very-clever.com/putty/", country: "Germany", type: "HTTP" },
  { name: "putty.spiegelserver.org", url: "http://putty.spiegelserver.org/", country: "Germany", type: "HTTP" },
  { name: "netmirror.org", url: "http://netmirror.org/mirror/putty/", country: "Germany", type: "HTTP" },
  { name: "mirrors.ee.teiath.gr", url: "http://mirrors.ee.teiath.gr/putty/", country: "Greece", type: "HTTP" },
  { name: "putty.in51.com", url: "http://putty.in51.com/", country: "Hong Kong", type: "HTTP" },
  { name: "putty.internet.bs", url: "http://putty.internet.bs/", country: "Hong Kong", type: "HTTP" },
  { name: "putty.udstudio.hu", url: "http://putty.udstudio.hu/", country: "Hungary", type: "HTTP" },
  { name: "putty.cbn.net.id", url: "http://putty.cbn.net.id/", country: "Indonesia", type: "HTTP" },
  { name: "putty.oss-mirror.org", url: "http://putty.oss-mirror.org/", country: "Ireland", type: "HTTP" },
  { name: "heanet.ie", url: "http://ftp.heanet.ie/pub/putty/", country: "Ireland", type: "HTTP" },
  { name: "putty.fagioli.biz", url: "http://putty.fagioli.biz/", country: "Italy", type: "HTTP" },
  { name: "putty.stoic.jp", url: "http://putty.stoic.jp/", country: "Japan", type: "HTTP" },
  { name: "kaist.ac.kr", url: "http://ftp.kaist.ac.kr/pub/putty/", country: "Korea", type: "HTTP" },
  { name: "putty.nedzone.nl", url: "http://putty.nedzone.nl/", country: "Netherlands", type: "HTTP" },
  { name: "putty.imtek.nl", url: "http://putty.imtek.nl/", country: "Netherlands", type: "HTTP" },
  { name: "putty.osmirror.nl", url: "http://putty.osmirror.nl/", country: "Netherlands", type: "HTTP" },
  { name: "putty.nedmirror.nl", url: "http://putty.nedmirror.nl/", country: "Netherlands", type: "HTTP" },
  { name: "wigen.net", url: "http://wigen.net/putty/", country: "Norway", type: "HTTP" },
  { name: "putty.net.pl", url: "http://www.putty.net.pl/", country: "Poland", type: "HTTP" },
  { name: "piotrkosoft.net", url: "http://piotrkosoft.net/pub/mirrors/putty/", country: "Poland", type: "HTTP" },
  { name: "putty.dcc.fc.up.pt", url: "http://putty.dcc.fc.up.pt/", country: "Portugal", type: "HTTP" },
  { name: "mirrors.ptm.ro", url: "http://mirrors.ptm.ro/putty/", country: "Romania", type: "HTTP" },
  { name: "putty.n9.ru", url: "http://putty.n9.ru/", country: "Russia", type: "HTTP" },
  { name: "putty.lxnt.info", url: "http://putty.lxnt.info/", country: "Russia", type: "HTTP" },
  { name: "putty.lamer.sk", url: "http://putty.lamer.sk/", country: "Slovakia", type: "HTTP" },
  { name: "putty.paknet.org", url: "http://putty.paknet.org/", country: "Slovenia", type: "HTTP" },
  { name: "putty.nightlight.biz", url: "http://putty.nightlight.biz/", country: "Spain", type: "HTTP" },
  { name: "putty.tx.se", url: "http://putty.tx.se/", country: "Sweden", type: "HTTP" },
  { name: "kos.li", url: "http://kos.li/putty/", country: "Switzerland", type: "HTTP" },
  { name: "putty.vargonen.net", url: "http://putty.vargonen.net/", country: "Turkey", type: "HTTP" },
  { name: "mirrors.xifos.net", url: "http://mirrors.xifos.net/putty/", country: "UK", type: "HTTP" },
  { name: "putty.carbonstudios.co.uk", url: "http://putty.carbonstudios.co.uk/", country: "UK", type: "HTTP" },
  { name: "putty.mirror.facebook.com", url: "http://putty.mirror.facebook.com/", country: "US", type: "HTTP" },
  { name: "mirrors.bbnx.net", url: "http://mirrors.bbnx.net/putty/", country: "US", type: "HTTP" },
  { name: "putty.leetnet.com", url: "http://putty.leetnet.com/", country: "US", type: "HTTP" },
  { name: "ftp.wayne.edu", url: "http://ftp.wayne.edu/putty/", country: "US", type: "HTTP" },
  { name: "putty.hoxt.com", url: "http://putty.hoxt.com/", country: "US", type: "HTTP" },
  { name: "putty.cs.utah.edu", url: "http://putty.cs.utah.edu/", country: "US", type: "HTTP" },
  { name: "putty.jwenet.net", url: "http://putty.jwenet.net/", country: "US", type: "HTTP" },
  { name: "mirrormonster.com", url: "http://www.mirrormonster.com/putty-ssh/", country: "US", type: "HTTP" },
  { name: "putty.omnitech.net", url: "http://putty.omnitech.net/", country: "US", type: "HTTP" },
  { name: "silvertree.org", url: "http://www.silvertree.org/mirror/putty/", country: "US", type: "HTTP" },
  { name: "puttymirror.rowehost.com", url: "http://puttymirror.rowehost.com/", country: "US", type: "HTTP" },
  { name: "putty.nobandwidth.net", url: "http://putty.nobandwidth.net/", country: "US", type: "HTTP" },
  { name: "diis.net", url: "http://diis.net/putty/", country: "US", type: "HTTP" },
  { name: "puttyssh.org", url: "http://www.puttyssh.org/", country: "US", type: "HTTP" },
];

const ftpMirrors: Mirror[] = [
  { name: "ftp.wiretapped.net", url: "ftp://ftp.wiretapped.net", country: "Australia", type: "FTP" },
  { name: "ftp.samurai.com", url: "ftp://ftp.samurai.com", country: "Canada", type: "FTP" },
  { name: "cdot.senecac.on.ca", url: "ftp://cdot.senecac.on.ca", country: "Canada", type: "FTP" },
  { name: "miroir-francais.fr", url: "ftp://miroir-francais.fr", country: "France", type: "FTP" },
  { name: "netmirror.org", url: "ftp://netmirror.org", country: "Germany", type: "FTP" },
  { name: "totem.fix.no", url: "ftp://totem.fix.no", country: "Norway", type: "FTP" },
  { name: "piotrkosoft.net", url: "ftp://piotrkosoft.net", country: "Poland", type: "FTP" },
  { name: "ftp.mipt.ru", url: "ftp://ftp.mipt.ru", country: "Russia", type: "FTP" },
  { name: "putty.cs.utah.edu", url: "ftp://putty.cs.utah.edu", country: "US", type: "FTP" },
  { name: "diis.net", url: "ftp://diis.net", country: "US", type: "FTP" },
];

export default function Mirrors() {
  const groupedByCountry = httpMirrors.reduce(
    (acc, mirror) => {
      if (!acc[mirror.country]) {
        acc[mirror.country] = [];
      }
      acc[mirror.country].push(mirror);
      return acc;
    },
    {} as Record<string, Mirror[]>
  );

  const countries = Object.keys(groupedByCountry).sort();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="heading-display mb-4 text-foreground">
                PuTTY Mirrors
              </h1>
              <p className="text-lg text-muted-foreground">
                Download PuTTY from a mirror near you
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl space-y-12">
            {/* Info Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-body text-foreground">
                The mirrors listed below provide access to PuTTY files. Please note that mirrors are not updated instantly, so you may not always find the very latest version on every mirror.
              </p>
            </div>

            {/* HTTP Mirrors */}
            <section>
              <h2 className="heading-lg mb-6 text-foreground flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                HTTP Mirrors by Country
              </h2>

              <div className="space-y-8">
                {countries.map((country) => (
                  <div key={country}>
                    <h3 className="heading-sm mb-4 text-foreground">{country}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {groupedByCountry[country].map((mirror) => (
                        <a
                          key={mirror.url}
                          href={mirror.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all duration-150"
                        >
                          <p className="font-semibold text-foreground text-small mb-1">
                            {mirror.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {mirror.url}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FTP Mirrors */}
            <section>
              <h2 className="heading-lg mb-6 text-foreground flex items-center gap-3">
                <Server className="w-8 h-8 text-primary" />
                FTP Mirrors
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ftpMirrors.map((mirror) => (
                  <a
                    key={mirror.url}
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all duration-150"
                  >
                    <p className="font-semibold text-foreground text-small mb-1">
                      {mirror.name}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {mirror.country}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {mirror.url}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Mirroring Guidelines */}
            <section>
              <h2 className="heading-lg mb-6 text-foreground">
                Want to Set Up a Mirror?
              </h2>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <p className="text-body text-foreground">
                  If you want to set up a mirror of the PuTTY website, you're welcome to do so. You don't need to ask for permission—you already have it.
                </p>
                <p className="text-body text-foreground">
                  The preferred way to mirror PuTTY is to use <code className="bg-muted px-2 py-1 rounded text-small">rsync</code> from:
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-small text-foreground overflow-auto">
                  rsync://rsync.chiark.greenend.org.uk/ftp/users/sgtatham/putty-website-mirror
                </div>
                <p className="text-body text-foreground">
                  Once your mirror is set up and working, you can email the PuTTY team with the mirror details to be listed on this page. However, please note that we don't promise to list every mirror—we receive many notifications and yours may take time to be added.
                </p>
              </div>
            </section>

            {/* Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-small text-foreground">
                <strong>Note:</strong> For the complete list of mirrors and additional information, visit the{" "}
                <a
                  href="https://www.chiark.greenend.org.uk/~sgtatham/putty/mirrors.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  full Mirrors page
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
