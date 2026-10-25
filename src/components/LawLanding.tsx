import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { LanguageSwitch } from "./LanguageSwitch";
import { LawInquiry } from "./LawInquiry";
import { lawCopy } from "@/lib/law-copy";
import { localePath, type Locale } from "@/lib/i18n";

const imageRoot = "/images/advokat/";

export function LawLanding({ locale = "uz" }: { locale?: Locale }) {
  const c = lawCopy(locale);
  return (
    <div className="law-page">
      <header className="law-header">
        <div className="law-shell law-header-inner">
          <Link href={localePath(locale, "/advokat")} className="law-header-brand" aria-label={c.person}>
            <span className="law-person-mark" aria-hidden="true">X<span>.</span></span>
            <span className="law-header-divider" aria-hidden="true" />
            <span className="law-header-identity"><strong>{c.person}</strong><small>{c.role}</small></span>
          </Link>
          <nav className="law-header-nav" aria-label={locale === "uz" ? "Sahifa bo‘limlari" : locale === "ru" ? "Разделы страницы" : "Page sections"}>
            <a href="#xizmatlar">{c.nav[0]}</a>
            <a href="#men-haqimda">{c.nav[1]}</a>
            <a href="#savollar">{c.nav[2]}</a>
            <a href="#boglanish">{c.nav[3]}</a>
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
                <a className="law-button law-button-light" href="#boglanish">
                  {c.contactAction}<ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="law-text-link" href="#xizmatlar">
                  {c.explore}<ArrowDown size={18} aria-hidden="true" />
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

        <section className="law-about law-section" id="men-haqimda" aria-labelledby="law-about-title">
          <div className="law-shell law-about-grid">
            <div className="law-about-monogram" aria-hidden="true"><span>X.</span></div>
            <div>
              <p className="law-kicker">{c.aboutEyebrow}</p>
              <h2 id="law-about-title">{c.aboutTitle}</h2>
              <p className="law-about-body">{c.aboutBody}</p>
              <p className="law-about-quote">“{c.aboutQuote}”</p>
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

        <section className="law-cta" id="boglanish" aria-labelledby="law-cta-title">
          <div className="law-shell law-cta-grid">
            <div>
              <p className="law-kicker">{c.ctaEyebrow}</p>
              <h2 id="law-cta-title">{c.ctaTitle}</h2>
              <p>{c.ctaBody}</p>
              <LawInquiry
                label={c.draftLabel}
                placeholder={c.draftPlaceholder}
                button={c.draftButton}
                copied={c.draftCopied}
                error={c.draftError}
                note={c.draftNote}
              />
            </div>
            <Image src={`${imageRoot}08-contact.webp`} alt="" width={1000} height={1000} sizes="(max-width: 860px) 65vw, 29vw" loading="lazy" />
          </div>
        </section>
      </main>
      <footer className="law-footer">
        <div className="law-shell law-footer-inner">
          <div><strong>{c.person}</strong><p>{c.footerNote}</p></div>
          <a href="#main">{c.person}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
