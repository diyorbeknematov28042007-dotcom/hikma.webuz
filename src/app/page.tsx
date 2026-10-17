import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services, Approach, Process, About, FAQ } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { isContactEnabled } from "@/lib/site";
export default function Home() {
  const enabled = isContactEnabled();
  // The owner supplied the current brand profile as the new source of truth.
  const instagramVerified = true;
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
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
