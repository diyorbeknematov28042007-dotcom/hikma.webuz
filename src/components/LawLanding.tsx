import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { LanguageSwitch } from "./LanguageSwitch";
import { StaticLogo } from "./Brand";
import { StructuredData } from "./StructuredData";
import { lawCopy } from "@/lib/law-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { siteOrigin, telegramUrl } from "@/lib/site";
import { breadcrumbStructuredData } from "@/lib/seo";

const imageRoot = "/images/advokat/";

export function LawLanding({ locale = "uz" }: { locale?: Locale }) {
  const c = lawCopy(locale);
  const home = localePath(locale, "/");
  const projects = localePath(locale, "/loyihalar");
  const breadcrumbs = [
    { label: c.home, href: home },
    { label: c.projectLink, href: projects },
    { label: c.concept, href: localePath(locale, "/advokat") },
  ];
  return (
    <div className="law-page">
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            name: c.concept,
            description: c.conceptNote,
            url: `${siteOrigin()}${localePath(locale, "/advokat")}`,
            inLanguage: locale,
            creator: { "@id": `${siteOrigin()}/#organization` },
          },
          breadcrumbStructuredData(breadcrumbs),
        ],
      }} />
      <div className="law-concept-bar">
        <div className="law-shell">
          <span className="law-concept-dot" aria-hidden="true" />
          <strong>{c.concept}</strong>
          <span>{c.conceptNote}</span>
        </div>
      </div>
      <header className="law-header">
        <div className="law-shell law-header-inner">
          <Link href={home} className="law-header-brand" aria-label={c.home}>
            <StaticLogo compact />
            <span className="law-header-divider" aria-hidden="true" />
            <span className="law-header-tag">{c.brandTag}</span>
          </Link>
          <nav className="law-header-nav" aria-label={locale === "uz" ? "Sahifa bo‘limlari" : locale === "ru" ? "Разделы страницы" : "Page sections"}>
            <a href="#xizmatlar">{c.nav[0]}</a>
            <a href="#yondashuv">{c.nav[1]}</a>
            <a href="#savollar">{c.nav[2]}</a>
          </nav>
          <LanguageSwitch current={locale} />
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="law-hero" aria-labelledby="law-title">
          <div className="law-shell law-hero-grid">
            <div className="law-hero-copy">
              <p className="law-overline"><span className="law-overline-line" />{c.eyebrow}</p>
              <h1 id="law-title">{c.title} <em>{c.accent}</em></h1>
              <p className="law-lead">{c.lead}</p>
              <div className="law-hero-actions">
                <a className="law-button law-button-light" href="#xizmatlar">
                  {c.explore}<ArrowDown size={18} aria-hidden="true" />
                </a>
                <a className="law-text-link" href="#namuna-haqida">
                  {c.order}<ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="law-hero-art">
              <div className="law-hero-ring" aria-hidden="true" />
              <Image
                src={`${imageRoot}01-hero-legal-folio.webp`}
                alt={locale === "uz" ? "Hujjatlar, ruchka va ochiq huquqiy ish jildi" : locale === "ru" ? "Документы, ручка и открытая папка" : "Documents, pen and an open legal folio"}
                width={1600}
                height={1600}
                sizes="(max-width: 860px) 90vw, 46vw"
                priority
              />
              <span className="law-hero-art-caption">{c.heroCaption}</span>
            </div>
          </div>
          <div className="law-shell law-hero-markers" aria-label={locale === "uz" ? "Jarayon" : locale === "ru" ? "Процесс" : "Process"}>
            {c.markers.map((marker, index) => (
              <span key={marker}><b>0{index + 1}</b>{marker}</span>
            ))}
          </div>
        </section>

        <section className="law-services law-section" id="xizmatlar" aria-labelledby="law-services-title">
          <div className="law-shell">
            <div className="law-section-head">
              <p className="law-kicker">{c.servicesEyebrow}</p>
              <h2 id="law-services-title">{c.servicesTitle}</h2>
              <p>{c.servicesIntro}</p>
            </div>
            <div className="law-services-grid">
              {c.services.map((service, index) => (
                <article className="law-service" key={service.image}>
                  <div className="law-service-top">
                    <span className="law-index">0{index + 1} / 04</span>
                    <span className="law-service-line" aria-hidden="true" />
                  </div>
                  <div className="law-service-main">
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.body}</p>
                    </div>
                    <Image src={`${imageRoot}${service.image}`} alt={service.alt} width={1000} height={1000} sizes="(max-width: 640px) 36vw, (max-width: 1024px) 23vw, 180px" loading="lazy" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="law-approach law-section" id="yondashuv" aria-labelledby="law-approach-title">
          <div className="law-shell law-approach-grid">
            <div className="law-approach-art">
              <Image className="law-strategy-art" src={`${imageRoot}07-case-strategy.webp`} alt={locale === "uz" ? "Ish strategiyasi aks etgan hujjatlar" : locale === "ru" ? "Документы с планом работы" : "Documents illustrating a case plan"} width={1000} height={1000} sizes="(max-width: 860px) 80vw, 37vw" loading="lazy" />
              <div className="law-confidential">
                <Image src={`${imageRoot}06-confidentiality.webp`} alt="" width={1000} height={1000} sizes="120px" loading="lazy" />
                <p>{c.confidential}</p>
              </div>
            </div>
            <div className="law-approach-copy">
              <p className="law-kicker">{c.approachEyebrow}</p>
              <h2 id="law-approach-title">{c.approachTitle}</h2>
              <p className="law-approach-intro">{c.approachIntro}</p>
              <ol className="law-steps">
                {c.steps.map((step, index) => (
                  <li key={step.title}>
                    <span className="law-index">0{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="law-questions law-section" id="savollar" aria-labelledby="law-questions-title">
          <div className="law-shell law-questions-grid">
            <div>
              <p className="law-kicker">{c.questionsEyebrow}</p>
              <h2 id="law-questions-title">{c.questionsTitle}</h2>
              <Image src={`${imageRoot}03-court-representation.webp`} alt="" width={1000} height={1000} sizes="(max-width: 860px) 40vw, 220px" loading="lazy" />
            </div>
            <div className="law-accordion">
              {c.questions.map((item, index) => (
                <details key={item.title}>
                  <summary><span className="law-index">0{index + 1}</span><span>{item.title}</span><span className="law-plus" aria-hidden="true">+</span></summary>
                  <p>{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="law-cta" id="namuna-haqida" aria-labelledby="law-cta-title">
          <div className="law-shell law-cta-grid">
            <div>
              <p className="law-kicker">{c.ctaEyebrow}</p>
              <h2 id="law-cta-title">{c.ctaTitle}</h2>
              <p>{c.ctaBody}</p>
              <div className="law-cta-actions">
                <a className="law-button law-button-dark" href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  {c.ctaButton}<ArrowUpRight size={19} aria-hidden="true" />
                  <span className="sr-only">({c.newTab})</span>
                </a>
                <Link className="law-text-link law-text-link-dark" href={localePath(locale, "/xizmatlar/landing-page")}>
                  {c.ctaSecondary}<ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <Image src={`${imageRoot}08-contact.webp`} alt="" width={1000} height={1000} sizes="(max-width: 860px) 65vw, 29vw" loading="lazy" />
          </div>
        </section>
      </main>
      <footer className="law-footer">
        <div className="law-shell law-footer-inner">
          <div><strong>HIKMA</strong><p>{c.footerNote}</p></div>
          <Link href={projects}>{c.projectLink}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </footer>
    </div>
  );
}
