import HtmlContent from "@/components/HtmlContent";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

interface ContentPageProps {
  page: string;
  wide?: boolean;
  hero?: boolean;
  sidebar?: boolean;
}

export default function ContentPage({
  page,
  wide,
  hero = false,
  sidebar = false,
}: ContentPageProps) {
  const [heroHtml, setHeroHtml] = useState<string | null>(null);

  return (
    <PageLayout wide={wide} heroHtml={hero ? heroHtml : null} sidebar={sidebar}>
      <HtmlContent
        page={page}
        extractHero={hero}
        onHeroExtracted={setHeroHtml}
      />
    </PageLayout>
  );
}
