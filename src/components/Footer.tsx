import SiteColumn from "@/components/SiteColumn";
import { Link } from "wouter";

interface FooterProps {
  wide?: boolean;
}

export default function Footer({ wide = false }: FooterProps) {
  return (
    <footer className="border-t border-border bg-white mt-auto font-sans">
      <div className="container py-6">
        <SiteColumn wide={wide} className="text-center text-sm text-muted-foreground">
          <p>
            If you want to comment on this web site, see the{" "}
            <Link href="/feedback" className="text-primary hover:underline">
              Feedback
            </Link>{" "}
            page.
          </p>
        </SiteColumn>
      </div>
    </footer>
  );
}
