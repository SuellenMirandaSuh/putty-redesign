import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SiteColumn from "@/components/SiteColumn";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  wide?: boolean;
  heroHtml?: string | null;
  sidebar?: boolean;
}

export default function PageLayout({
  children,
  wide = false,
  heroHtml,
  sidebar = false,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {heroHtml && (
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-10 md:py-14 border-b border-border/40">
          <div className="container">
            <SiteColumn wide={wide || sidebar}>
              <div
                className="putty-hero max-w-none text-center
                  [&_h1]:heading-display [&_h1]:mb-4 [&_h1]:text-foreground
                  [&_p]:text-lg [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-2
                  [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline
                  [&_b]:text-foreground [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: heroHtml }}
              />
            </SiteColumn>
          </div>
        </section>
      )}

      <main className="flex-1">
        <div className="container py-8 md:py-12">
          {sidebar ? (
            <div className="flex gap-8 lg:gap-10">
              <Sidebar />
              <SiteColumn wide className="flex-1 min-w-0">
                {children}
              </SiteColumn>
            </div>
          ) : (
            <SiteColumn wide={wide}>{children}</SiteColumn>
          )}
        </div>
      </main>

      <Footer wide={wide || sidebar} />
    </div>
  );
}
