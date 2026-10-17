import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services, Approach, Process, About, FAQ } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { isContactEnabled } from "@/lib/site";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { StructuredData } from "@/components/StructuredData";
import { brandStructuredData } from "@/lib/seo";
export default function Home() {
  const enabled = isContactEnabled();
  // The owner supplied the current brand profile as the new source of truth.
  const instagramVerified = true;
  return (
    <>
      <StructuredData data={brandStructuredData()} />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <ProjectSpotlight />
        <Approach />
        <Process />
        <About />
        <FAQ />
        <Contact
          enabled={enabled}
          siteKey={
            enabled ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY : undefined
          }
          instagramVerified={instagramVerified}
        />
      </main>
      <Footer instagramVerified={instagramVerified} />
    </>
  );
}
