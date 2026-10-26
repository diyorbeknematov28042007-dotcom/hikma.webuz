import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, InstagramLogo, TelegramLogo } from "@phosphor-icons/react/dist/ssr";
import { LanguageSwitch } from "./LanguageSwitch";
import { InteriorMotion } from "./InteriorMotion";
import { InteriorBrief } from "./InteriorBrief";
import { interiorCopy } from "@/lib/interior-copy";
import { localePath, type Locale } from "@/lib/i18n";

const imageRoot = "/images/interyer/";

function socialUrl(value: string | undefined, service: "instagram" | "telegram") {
  if (!value) return null;
  try {
    const url = new URL(value);
    const hosts = service === "instagram" ? ["instagram.com", "www.instagram.com"] : ["t.me", "www.t.me"];
    if (url.protocol === "https:" && hosts.includes(url.hostname) && url.pathname.length > 1) return url.toString();
  } catch { /* The concept uses a non-clickable placeholder until a real URL is configured. */ }
  return null;
}

export function InteriorLanding({ locale = "uz" }: { locale?: Locale }) {
  const c = interiorCopy(locale);
  const socials = [
    { title: "Instagram", Icon: InstagramLogo, href: socialUrl(process.env.NEXT_PUBLIC_INTERIOR_INSTAGRAM_URL, "instagram") },
    { title: "Telegram", Icon: TelegramLogo, href: socialUrl(process.env.NEXT_PUBLIC_INTERIOR_TELEGRAM_URL, "telegram") },
  ];
  return (
    <div className="interior-page" id="interior-top">
      <InteriorMotion />
      <div className="int-progress" aria-hidden="true" />
      <header className="int-header">
        <div className="int-shell int-header-inner">
          <Link className="int-brand" href={localePath(locale, "/interyer")} aria-label={c.brand}>
            <strong>{c.brand}<span>.</span></strong><small>{c.descriptor}</small>
          </Link>
          <nav className="int-nav" aria-label={locale === "uz" ? "Sahifa bo‘limlari" : locale === "ru" ? "Разделы страницы" : "Page sections"}>
            <a href="#loyihalar">{c.nav[0]}</a><a href="#haqimizda">{c.nav[1]}</a>
            <a href="#xizmatlar">{c.nav[2]}</a><a href="#aloqa">{c.nav[3]}</a>
          </nav>
          <LanguageSwitch current={locale} />
        </div>
        <nav className="int-mobile-nav" aria-label={locale === "uz" ? "Bo‘limlarga o‘tish" : locale === "ru" ? "Перейти к разделам" : "Jump to sections"}>
          <a href="#loyihalar">{c.nav[0]}</a><a href="#haqimizda">{c.nav[1]}</a><a href="#xizmatlar">{c.nav[2]}</a><a href="#aloqa">{c.nav[3]}</a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="int-hero" aria-labelledby="int-title">
          <div className="int-hero-copy">
            <div className="int-hero-copy-inner" data-interior-reveal>
              <p className="int-overline">{c.eyebrow}</p>
              <h1 id="int-title">{c.title} <em>{c.accent}</em></h1>
              <p className="int-hero-lead">{c.lead}</p>
              <div className="int-actions"><a className="int-button" href="#aloqa">{c.primary}<ArrowUpRight size={20} aria-hidden="true" /></a><a className="int-plain-link" href="#loyihalar">{c.secondary}<ArrowDownRight size={20} aria-hidden="true" /></a></div>
            </div>
          </div>
          <div className="int-hero-image" data-interior-reveal>
            <Image src={`${imageRoot}hero.webp`} alt={locale === "uz" ? "Zamonaviy turar joy interyerining konsept tasviri" : locale === "ru" ? "Концептуальная визуализация современного жилого интерьера" : "Concept image of a contemporary residential interior"} width={1672} height={941} sizes="(max-width: 800px) 100vw, 55vw" priority />
          </div>
        </section>

        <section className="int-projects int-section" id="loyihalar" aria-labelledby="int-projects-title">
          <div className="int-shell">
            <div className="int-section-head" data-interior-reveal><h2 id="int-projects-title">{c.projectsTitle}</h2><p>{c.projectsIntro}</p></div>
            <div className="int-project-grid">
              {c.projects.map((project, index) => (
                <figure className="int-project" key={project.title} data-interior-reveal>
                  <div className="int-project-image"><Image src={`${imageRoot}${index === 0 ? "residential" : "cafe"}.webp`} alt={project.alt} width={1448} height={1086} sizes="(max-width: 760px) 100vw, 48vw" loading="lazy" /></div>
                  <figcaption><div><p className="int-project-kind">{project.kind} · {c.projectType}</p><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight size={25} aria-hidden="true" /></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="int-about int-section" id="haqimizda" aria-labelledby="int-about-title">
          <div className="int-shell int-about-grid">
            <div className="int-about-image" data-interior-reveal><Image src={`${imageRoot}hero.webp`} alt="" width={1672} height={941} sizes="(max-width: 800px) 100vw, 43vw" loading="lazy" /></div>
            <div className="int-about-copy" data-interior-reveal><span className="int-section-mark" aria-hidden="true">M.</span><h2 id="int-about-title">{c.aboutTitle}</h2><p>{c.aboutBody}</p><p className="int-about-note">{c.aboutNote}</p></div>
          </div>
        </section>

        <section className="int-services int-section" id="xizmatlar" aria-labelledby="int-services-title">
          <div className="int-shell"><div className="int-section-head" data-interior-reveal><h2 id="int-services-title">{c.servicesTitle}</h2><p>{c.servicesIntro}</p></div>
            <div className="int-services-grid">{c.services.map((item, index) => <article className="int-service" key={item.title} data-interior-reveal><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.body}</p><ArrowRight size={21} aria-hidden="true" /></article>)}</div>
          </div>
        </section>

        <section className="int-process int-section" id="jarayon" aria-labelledby="int-process-title">
          <div className="int-shell int-process-grid"><div data-interior-reveal><h2 id="int-process-title">{c.processTitle}</h2><p>{c.processIntro}</p></div><ol>{c.steps.map((step,index) => <li key={step.title} data-interior-reveal><span>{String(index+1).padStart(2,"0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol></div>
        </section>

        <section className="int-contact int-section" id="aloqa" aria-labelledby="int-contact-title">
          <div className="int-shell int-contact-grid"><div className="int-contact-copy" data-interior-reveal><h2 id="int-contact-title">{c.contactTitle}</h2><p>{c.contactIntro}</p><div className="int-contact-socials">{socials.map(({title,Icon,href}) => href ? <a key={title} href={href} target="_blank" rel="noopener noreferrer"><Icon size={24} aria-hidden="true" />{title}<ArrowUpRight size={18} aria-hidden="true" /></a> : <div key={title} className="int-channel-pending"><Icon size={24} aria-hidden="true" />{title}</div>)}</div><p className="int-contact-note">{c.channelNote}</p></div>
            <div data-interior-reveal><InteriorBrief {...c} /></div>
          </div>
        </section>
      </main>
      <footer className="int-footer"><div className="int-shell int-footer-inner"><div><strong>{c.brand}<span>.</span></strong><p>{c.sampleNote}</p></div><a href="#interior-top">{c.backTop}<ArrowUpRight size={17} aria-hidden="true" /></a></div></footer>
    </div>
  );
}
