import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services, Approach, Process, About, FAQ } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { isContactEnabled } from "@/lib/site";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { StructuredData } from "@/components/StructuredData";
import { brandStructuredData } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { HoneycombBackground } from "@/components/HoneycombBackground";
import "../honeycomb.css";

export function HomeContent({ locale = "uz" }: { locale?: Locale }) {
  const enabled = isContactEnabled();
  // The owner supplied the current brand profile as the new source of truth.
  const instagramVerified = true;
  return (
    <div className="honeycomb-home">
      <HoneycombBackground />
      <StructuredData data={brandStructuredData(locale)} />
      <Header locale={locale} />
      <main id="main" tabIndex={-1}>
        <Hero locale={locale} />
        <Services locale={locale} />
        <ProjectSpotlight locale={locale} />
        <Approach locale={locale} />
        <Process locale={locale} />
        <About locale={locale} />
        <FAQ locale={locale} />
        <Contact
          enabled={enabled}
          siteKey={
            enabled ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY : undefined
          }
          instagramVerified={instagramVerified}
          locale={locale}
        />
      </main>
      <Footer instagramVerified={instagramVerified} locale={locale} />
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
