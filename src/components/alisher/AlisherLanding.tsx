import Image from "next/image";
import localFont from "next/font/local";
import { ArrowDown, ArrowUpRight, Asterisk, Check, TelegramLogo } from "@phosphor-icons/react/dist/ssr";
import { StructuredData } from "@/components/StructuredData";
import { alisherBrand, alisherCopy, alisherName, alisherPath, alisherTelegram } from "@/lib/alisher-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { AlisherAction, AlisherAreas, AlisherEffects, AlisherLanguages, AlisherMenu, AlisherMotionToggle } from "./AlisherInteractions";
import "../../app/alisher.css";

const serif = localFont({ src: [
  { path: "../../../public/fonts/alisher/cormorant-garamond.woff", weight: "300 700", style: "normal" },
  { path: "../../../public/fonts/alisher/cormorant-garamond-italic.woff", weight: "300 700", style: "italic" },
], display: "swap", variable: "--as-serif" });
const sans = localFont({ src: "../../../public/fonts/manrope-latin.woff", display: "swap", variable: "--as-sans", weight: "200 800" });

function Heading({ start, accent, id, className = "" }: { start: string; accent: string; id: string; className?: string }) {
  return <h2 className={`as-heading ${className}`} id={id} data-as-reveal="mask"><span className="as-mask"><span className="as-mask-text">{start}</span></span><span className="as-mask"><span className="as-mask-text as-heading-accent">{accent}</span></span></h2>;
}

function Sticker({ name, className = "", sizes = "(max-width: 767px) 50vw, 25vw" }: { name: string; className?: string; sizes?: string }) {
  return <Image className={className} src={`/images/alisher/${name}.webp`} alt="" width={1536} height={1536} sizes={sizes} unoptimized />;
}

function Arch() {
  return <svg className="as-arch" viewBox="0 0 440 620" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="as-arch-front" x1="100" y1="20" x2="380" y2="600" gradientUnits="userSpaceOnUse"><stop stopColor="#c6b9d3" stopOpacity=".32" /><stop offset="1" stopColor="#42314f" stopOpacity=".06" /></linearGradient>
      <linearGradient id="as-arch-edge" x1="0" y1="0" x2="200" y2="600" gradientUnits="userSpaceOnUse"><stop stopColor="#6f4b70" stopOpacity=".26" /><stop offset="1" stopColor="#25182a" stopOpacity=".03" /></linearGradient>
      <linearGradient id="as-arch-stroke" x1="40" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse"><stop stopColor="#e7d8ee" stopOpacity=".36" /><stop offset="1" stopColor="#bda2d2" stopOpacity=".04" /></linearGradient>
    </defs>
    <path d="M25 620V205C25 120 76 65 170 12L223 20L388 620H25Z" fill="url(#as-arch-edge)" />
    <path d="M77 620V218C77 126 133 63 223 20C313 63 369 126 369 218V620H77Z" fill="url(#as-arch-front)" stroke="url(#as-arch-stroke)" />
    <path d="M25 205C25 120 76 65 170 12L223 20" stroke="#bda2d2" strokeOpacity=".12" />
  </svg>;
}

export function AlisherLanding({ locale }: { locale: Locale }) {
  const c = alisherCopy(locale);
  return <div className={`as-page ${serif.variable} ${sans.variable}`} lang={locale}>
    <div className="as-atmosphere" aria-hidden="true"><span className="as-ambient-light" /><span className="as-glass as-glass-far" /><span className="as-glass as-glass-near" /></div>
    <AlisherEffects />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Person", name: alisherName, alternateName: alisherBrand, url: `https://hikmaweb.uz${localePath(locale, alisherPath)}`, image: "https://hikmaweb.uz/images/alisher/portrait.webp", jobTitle: c.factValues[0], description: c.description, sameAs: [alisherTelegram], affiliation: { "@type": "CollegeOrUniversity", name: c.university }, knowsAbout: c.areas.map((area) => area.title) }} />

    <header className="as-header">
      <div className="as-container as-header-inner">
        <a href="#main" className="as-wordmark" aria-label={alisherBrand}><span>Yurist</span> Shukrulloyev<span className="as-wordmark-dot">.</span></a>
        <nav className="as-nav" aria-label={c.navigation}>{c.nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="as-header-actions"><AlisherLanguages current={locale} /><a className="as-header-contact" href="#aloqa">{c.contact}<ArrowUpRight size={16} aria-hidden="true" /></a><AlisherMenu copy={c} /></div>
      </div>
    </header>

    <main id="main" tabIndex={-1}>
      <section className="as-hero as-container" aria-labelledby="as-hero-title">
        <div className="as-hero-stage">
          <div className="as-hero-scene" aria-hidden="true"><div className="as-hero-halo" /><Arch /><div className="as-portrait"><Image src="/images/alisher/portrait.webp" alt="" width={1133} height={1388} sizes="(max-width: 767px) 95vw, 48vw" preload unoptimized /></div></div>
          <div className="as-hero-copy">
            <div className="as-hero-identity"><p className="as-hero-name">{alisherName}</p><p className="as-eyebrow as-hero-role">{c.role}</p></div>
            <h1 id="as-hero-title" aria-label={`${c.heroStart} ${c.heroAccent} ${c.heroEnd}`} className="as-hero-title" data-as-reveal="mask"><span className="as-mask"><span className="as-mask-text">{c.heroStart}</span></span><span className="as-mask"><span className="as-mask-text"><em>{c.heroAccent}</em>{" "}{c.heroEnd}</span></span></h1>
            <p className="as-hero-description">{c.heroBio}</p>
            <div className="as-hero-cta"><AlisherAction href="#aloqa">{c.contact}</AlisherAction><a className="as-text-link" href="#yonalishlar">{c.explore}<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          </div>
          <a className="as-scroll-link" href="#haqimda"><span>{c.scroll}</span><span className="as-scroll-circle"><ArrowDown size={18} aria-hidden="true" /></span></a>
        </div>
        <dl className="as-facts">{c.factLabels.map((label, index) => <div key={label}><dt>{label}</dt><dd>{c.factValues[index]}</dd></div>)}</dl>
      </section>

      <section id="haqimda" className="as-about as-container as-section" aria-labelledby="as-about-title">
        <div><p className="as-eyebrow">{c.aboutLabel}</p><Heading id="as-about-title" start={c.aboutTitle} accent={c.aboutAccent} /><div className="as-about-sign"><Asterisk size={28} weight="light" aria-hidden="true" /><p>{c.signature}<span>{c.signatureRole}</span></p></div></div>
        <div className="as-about-copy" data-as-reveal="soft">{c.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section id="yonalishlar" className="as-expertise as-container as-section" aria-labelledby="as-areas-title">
        <div className="as-expertise-intro"><p className="as-eyebrow">{c.areasLabel}</p><Heading id="as-areas-title" start={c.areasTitle} accent={c.areasAccent} /><p className="as-section-description">{c.areasIntro}</p></div>
        <AlisherAreas areas={c.areas} />
      </section>

      <section id="yondashuv" className="as-process as-container as-section" aria-labelledby="as-process-title">
        <div className="as-process-heading"><div><p className="as-eyebrow">{c.processLabel}</p><Heading id="as-process-title" start={c.processTitle} accent={c.processAccent} /><p className="as-section-description">{c.processIntro}</p></div><Sticker name="work-process" className="as-process-art" sizes="220px" /></div>
        <ol className="as-process-steps">{c.steps.map((step, index) => <li key={step.title} data-as-reveal="soft"><span className="as-step-number" aria-hidden="true">0{index + 1}<ArrowUpRight size={17} aria-hidden="true" /></span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>

      <section id="media" className="as-media-section as-container" aria-labelledby="as-media-title">
        <div className="as-media-panel"><div className="as-media-visual"><div className="as-media-orbit" aria-hidden="true" /><Sticker name="legal-media" sizes="(max-width: 767px) 70vw, 38vw" /><p>{alisherBrand}<span>LEGAL MEDIA</span></p></div><div className="as-media-copy"><p className="as-eyebrow">{c.mediaLabel}</p><Heading id="as-media-title" start={c.mediaTitle} accent={c.mediaAccent} /><p className="as-section-description">{c.mediaIntro}</p><ul className="as-media-topics">{c.mediaTopics.map((topic) => <li key={topic}><Check size={14} aria-hidden="true" />{topic}</li>)}</ul><a className="as-text-link" href={alisherTelegram} target="_blank" rel="noopener noreferrer">{c.mediaCta}<ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
      </section>

      <section id="talim" className="as-education as-container as-section" aria-labelledby="as-education-title">
        <p className="as-eyebrow">{c.educationLabel}</p><h2 className="as-education-heading" id="as-education-title" data-as-reveal="soft">{c.educationTitle}</h2>
        <div className="as-education-grid"><div className="as-university" data-as-reveal="soft"><div><span className="as-course">{c.course}</span><h3>{c.university}</h3><p>{c.faculty}</p></div><Sticker name="legal-education" sizes="180px" /><div className="as-interests"><p className="as-eyebrow">{c.interestsLabel}</p><p>{c.interests}</p></div></div><div className="as-principles">{c.principles.map((principle, index) => <div key={principle.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{principle.title}</h3><p>{principle.text}</p></div></div>)}</div></div>
      </section>

      <section id="aloqa" className="as-contact" aria-labelledby="as-contact-title">
        <div className="as-container as-contact-inner"><div className="as-contact-copy"><p className="as-eyebrow">{c.contactLabel}</p><Heading id="as-contact-title" start={c.contactTitle} accent={c.contactAccent} /><p className="as-section-description">{c.contactIntro}</p><AlisherAction href={alisherTelegram} external><TelegramLogo size={20} weight="fill" aria-hidden="true" />{c.telegramCta}</AlisherAction><a className="as-handle" href={alisherTelegram} target="_blank" rel="noopener noreferrer">@Yurist_Shukrulloyev</a></div><div className="as-contact-art"><span className="as-contact-ring" aria-hidden="true" /><Sticker name="contact" sizes="(max-width: 767px) 60vw, 30vw" /></div></div>
      </section>
    </main>

    <footer className="as-footer as-container"><div className="as-footer-top"><a href="#main" className="as-wordmark"><span>Yurist</span> Shukrulloyev<span className="as-wordmark-dot">.</span></a><a href="#main" className="as-back-top">{c.backToTop}<ArrowUpRight size={18} aria-hidden="true" /></a></div><p className="as-disclaimer">{c.disclaimer}</p><div className="as-footer-bottom"><p>© 2026 {alisherBrand}. {c.copyright}</p><AlisherMotionToggle copy={c} /><a className="as-hikma" href={`https://hikmaweb.uz${localePath(locale, "/")}`}>HIKMA<ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
  </div>;
}
