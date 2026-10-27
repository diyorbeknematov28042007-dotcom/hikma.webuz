"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, InstagramLogo,
  MapPin, Phone, Scissors, TelegramLogo,
} from "@phosphor-icons/react";
import { LanguageSwitch } from "./LanguageSwitch";
import { barberCopy, styles, type HairStyle } from "@/lib/barber-copy";
import { localePath, type Locale } from "@/lib/i18n";

type View = "left30" | "front" | "right30";
const views: View[] = ["left30", "front", "right30"];
const asset = "/images/sartarosh";
const portrait = (view: View, style: HairStyle | null) => `${asset}/portraits/${view}/${style ?? "bald"}.webp`;

function validSocial(input: string | undefined, service: "instagram" | "telegram") {
  if (!input) return null;
  try {
    const url = new URL(input);
    if (url.protocol !== "https:") return null;
    const hosts = service === "instagram" ? ["instagram.com", "www.instagram.com"] : ["t.me", "www.t.me"];
    return hosts.includes(url.hostname) && url.pathname.length > 1 ? url.toString() : null;
  } catch { return null; }
}

function validPhone(input: string | undefined) {
  if (!input || !/^\+?[0-9\s()-]{9,22}$/.test(input)) return null;
  return { display: input, href: `tel:${input.replace(/[^+0-9]/g, "")}` };
}

export function BarberLanding({ locale = "uz" }: { locale?: Locale }) {
  const c = barberCopy(locale);
  const [style, setStyle] = useState<HairStyle | null>("textured-crop");
  const [viewIndex, setViewIndex] = useState(1);
  const [displaySrc, setDisplaySrc] = useState(portrait("front", "textured-crop"));
  const [previousSrc, setPreviousSrc] = useState<string | null>(null);
  const dragStart = useRef<number | null>(null);
  const activeView = views[viewIndex];
  const desiredSrc = portrait(activeView, style);
  const instagram = validSocial(process.env.NEXT_PUBLIC_BARBER_INSTAGRAM_URL, "instagram");
  const telegram = validSocial(process.env.NEXT_PUBLIC_BARBER_TELEGRAM_URL, "telegram");
  const phone = validPhone(process.env.NEXT_PUBLIC_BARBER_PHONE);

  useEffect(() => {
    const root = document.querySelector(".barber-page");
    if (!root || !("IntersectionObserver" in window)) return;
    const elements = root.querySelectorAll("[data-barber-reveal]");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("barber-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.01, rootMargin: "0px 0px 110px 0px" });
    elements.forEach((element) => {
      // Items in the first viewport must never disappear after hydration.
      if (element.getBoundingClientRect().top < window.innerHeight + 110) element.classList.add("barber-visible");
      else observer.observe(element);
    });
    root.classList.add("barber-ready");
    return () => { observer.disconnect(); root.classList.remove("barber-ready"); };
  }, []);

  useEffect(() => {
    if (desiredSrc === displaySrc) return;
    let cancelled = false;
    const next = new window.Image();
    next.src = desiredSrc;
    const show = () => {
      if (cancelled) return;
      setPreviousSrc(displaySrc);
      setDisplaySrc(desiredSrc);
    };
    if (next.complete && next.naturalWidth > 0) show();
    else next.addEventListener("load", show, { once: true });
    return () => { cancelled = true; next.removeEventListener("load", show); };
  }, [desiredSrc, displaySrc]);

  const changeView = (direction: -1 | 1) => setViewIndex((current) => Math.max(0, Math.min(2, current + direction)));
  const selectedName = style ? c.hair[style] : c.noHair;

  return (
    <div className="barber-page" id="top">
      <header className="barber-header">
        <div className="barber-container barber-header-inner">
          <Link className="barber-logo" href={localePath(locale, "/sartarosh")} aria-label="FORMA Barber">
            <span className="barber-mark" aria-hidden="true"><Scissors size={22} weight="light" /></span>
            <span>FORMA<small>BARBER / CONCEPT</small></span>
          </Link>
          <nav className="barber-nav" aria-label={locale === "uz" ? "Sahifa bölimlari" : locale === "ru" ? "Разделы" : "Sections"}>
            {c.navigation.map((label, i) => <a key={label} href={`#${["turmaklar", "xizmatlar", "narxlar", "manzil"][i]}`}>{label}</a>)}
          </nav>
          <div className="barber-header-actions"><LanguageSwitch current={locale} /><a className="barber-header-cta" href="#aloqa">{c.book}<ArrowUpRight size={16} /></a></div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="barber-hero" aria-labelledby="barber-title">
          <div className="barber-container barber-hero-grid">
            <div className="barber-hero-copy" data-barber-reveal>
              <p className="barber-kicker"><span />{c.eyebrow}</p>
              <h1 id="barber-title">{c.heroTop} <em>{c.heroAccent}</em></h1>
              <p className="barber-hero-lead">{c.heroBody}</p>
              <div className="barber-hero-actions">
                <a className="barber-button" href="#turmaklar">{c.explore}<ArrowUpRight size={19} /></a>
                <a className="barber-text-link" href="#xizmatlar">{c.servicesLink}<ArrowDownRight size={18} /></a>
              </div>
              <p className="barber-hero-caption"><span>01 — 08</span>{c.demo}</p>
            </div>
            <div className="barber-hero-art">
              <div className="barber-hero-orbit" aria-hidden="true" />
              <Image src={portrait("front", "textured-crop")} alt="" fill sizes="(max-width: 850px) 90vw, 50vw" priority unoptimized className="barber-hero-person" />
              <span className="barber-hero-stamp" aria-hidden="true">THE<br />STYLE<br />LAB<span>↗</span></span>
            </div>
          </div>
          <div className="barber-hero-bottom" aria-hidden="true"><span>FORMA / YOUR LOOK, YOUR WAY</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="barber-picker barber-section" id="turmaklar" aria-labelledby="picker-title">
          <div className="barber-container">
            <div className="barber-section-head" data-barber-reveal><p className="barber-eyebrow">{c.pickerEyebrow}</p><h2 id="picker-title">{c.pickerTitle}</h2><p>{c.pickerBody}</p></div>
            <div className="barber-picker-grid">
              <div className="barber-stage-wrap" data-barber-reveal>
                <div className="barber-stage" tabIndex={0} role="group" aria-label={`${selectedName}. ${c.view}: ${viewIndex + 1}/3`}
                  onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); changeView(-1); } if (event.key === "ArrowRight") { event.preventDefault(); changeView(1); } }}
                  onPointerDown={(event) => { if (event.pointerType !== "mouse" || event.button === 0) dragStart.current = event.clientX; }}
                  onPointerUp={(event) => { if (dragStart.current !== null) { const delta = event.clientX - dragStart.current; if (Math.abs(delta) > 40) changeView(delta < 0 ? 1 : -1); dragStart.current = null; } }}
                  onPointerCancel={() => { dragStart.current = null; }}>
                  <span className="barber-stage-index">0{viewIndex + 1} / 03</span>
                  <div className="barber-stage-images" role="img" aria-label={`${selectedName} — ${c.view} ${viewIndex + 1}/3`} data-loading={displaySrc !== desiredSrc}>
                    {previousSrc && <Image key={previousSrc} className="barber-portrait barber-portrait-old" src={previousSrc} alt="" fill sizes="(max-width: 850px) 94vw, 48vw" unoptimized onAnimationEnd={() => setPreviousSrc((current) => current === previousSrc ? null : current)} />}
                    <Image key={displaySrc} className={`barber-portrait${previousSrc ? " barber-portrait-new" : ""}`} src={displaySrc} alt="" fill sizes="(max-width: 850px) 94vw, 48vw" priority={displaySrc === portrait("front", "textured-crop")} unoptimized />
                  </div>
                  <button className="barber-turn barber-turn-left" type="button" aria-label={c.turnLeft} onClick={() => changeView(-1)} disabled={viewIndex === 0}><ArrowLeft size={21} aria-hidden="true" /></button>
                  <button className="barber-turn barber-turn-right" type="button" aria-label={c.turnRight} onClick={() => changeView(1)} disabled={viewIndex === 2}><ArrowRight size={21} aria-hidden="true" /></button>
                  <span className="barber-stage-hint">{c.swipeHint}</span>
                </div>
                <div className="barber-angle-dots" aria-label={c.view}>{views.map((view, index) => <button key={view} type="button" aria-label={`${c.view} ${index + 1}/3`} aria-pressed={viewIndex === index} onClick={() => setViewIndex(index)} />)}</div>
              </div>
              <div className="barber-choice" data-barber-reveal>
                <p className="barber-choice-small">FORMA / STYLE SELECTION</p>
                <div className="barber-choice-title"><span>{c.selected}</span><h3 aria-live="polite">{selectedName}</h3></div>
                <div className="barber-style-list" aria-label={c.pickerTitle}>
                  {styles.map((item, index) => <button type="button" className="barber-style-option" aria-pressed={style === item} key={item} onClick={() => setStyle(item)}>
                    <span className="barber-style-thumb"><Image src={`${asset}/thumbs/front-${item}.webp`} alt="" fill sizes="72px" unoptimized /></span>
                    <span className="barber-style-number">{String(index + 1).padStart(2, "0")}</span><strong>{c.hair[item]}</strong><ArrowUpRight size={17} aria-hidden="true" />
                  </button>)}
                </div>
                <button type="button" className="barber-bald" aria-pressed={style === null} onClick={() => setStyle(null)}>{c.noHair}<ArrowRight size={17} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="barber-studio" aria-labelledby="studio-title">
          <div className="barber-studio-photo" data-barber-reveal><Image src={`${asset}/photos/barbershop-interior.webp`} alt="" fill sizes="(max-width: 850px) 100vw, 55vw" /></div>
          <div className="barber-studio-content" data-barber-reveal><p className="barber-eyebrow">{c.studioEyebrow}</p><h2 id="studio-title">{c.studioTitle}</h2><p>{c.studioBody}</p><span className="barber-studio-monogram" aria-hidden="true">F<span>.</span></span></div>
        </section>

        <section className="barber-services barber-section" id="xizmatlar" aria-labelledby="services-title">
          <div className="barber-container"><div className="barber-section-head" data-barber-reveal><p className="barber-eyebrow">{c.serviceEyebrow}</p><h2 id="services-title">{c.serviceTitle}</h2><p>{c.serviceBody}</p></div>
            <div className="barber-services-grid">{c.services.map((service, index) => <article key={service.title} className="barber-service" data-barber-reveal>
              <div className="barber-service-art"><Image src={`${asset}/photos/${["barber-at-work", "straight-razor", "hair-styling"][index]}.webp`} alt="" fill sizes="(max-width: 850px) 90vw, 30vw" /></div>
              <div className="barber-service-text"><span>0{index + 1} / 03</span><h3>{service.title}</h3><p>{service.body}</p></div>
            </article>)}</div>
          </div>
        </section>

        <section className="barber-prices barber-section" id="narxlar" aria-labelledby="prices-title"><div className="barber-container barber-prices-grid">
          <div data-barber-reveal><p className="barber-eyebrow">{c.priceEyebrow}</p><h2 id="prices-title">{c.priceTitle}</h2><p>{c.priceBody}</p><div className="barber-price-tool" aria-hidden="true"><Scissors size={240} weight="thin" /></div></div>
          <div className="barber-price-list" data-barber-reveal><p className="barber-price-label">{c.samplePrice}</p>{c.prices.map((item, index) => <div className="barber-price-row" key={item.name}><span className="barber-price-index">0{index + 1}</span><div><strong>{item.name}</strong><small>{item.duration}</small></div><span className="barber-price-value">{item.price} <small>{c.currency}</small></span></div>)}<p className="barber-price-disclaimer">{c.priceBody}</p></div>
        </div></section>

        <section className="barber-location barber-section" id="manzil" aria-labelledby="location-title"><div className="barber-container barber-location-grid">
          <div className="barber-location-copy" data-barber-reveal><p className="barber-eyebrow">{c.locationEyebrow}</p><h2 id="location-title">{c.locationTitle}</h2><p>{c.locationBody}</p><div className="barber-address"><MapPin size={26} weight="light" aria-hidden="true" /><div><strong>{c.address}</strong><span>{c.addressHint}</span></div></div></div>
          <div className="barber-map" role="img" aria-label={`${c.mapLabel}: ${c.addressHint}`} data-barber-reveal><span className="barber-map-road road-one" /><span className="barber-map-road road-two" /><span className="barber-map-road road-three" /><span className="barber-map-road road-four" /><div className="barber-map-pin"><MapPin size={29} weight="fill" aria-hidden="true" /><strong>FORMA</strong><span>{c.addressHint}</span></div><span className="barber-map-coord">41°18′ N &nbsp; 69°16′ E / DEMO</span></div>
        </div></section>

        <section className="barber-contact barber-section" id="aloqa" aria-labelledby="contact-title"><div className="barber-container barber-contact-grid">
          <div data-barber-reveal><p className="barber-eyebrow">{c.contactEyebrow}</p><h2 id="contact-title">{c.contactTitle}</h2><p>{c.contactBody}</p></div>
          <div className="barber-contact-links" data-barber-reveal>
            {([ { label: "Instagram", Icon: InstagramLogo, href: instagram }, { label: "Telegram", Icon: TelegramLogo, href: telegram }, { label: phone?.display || c.phone, Icon: Phone, href: phone?.href || null } ]).map(({label, Icon, href}) => href ? <a key={label} href={href} rel={href.startsWith("https") ? "noopener noreferrer" : undefined} target={href.startsWith("https") ? "_blank" : undefined}><Icon size={25} aria-hidden="true" />{label}<ArrowUpRight size={19} aria-hidden="true" /></a> : <div className="barber-contact-pending" key={label}><Icon size={25} aria-hidden="true" /><span>{label}<small>{c.channelPending}</small></span></div>)}
          </div>
        </div></section>
      </main>
      <footer className="barber-footer"><div className="barber-container barber-footer-inner"><div><strong>FORMA<span>.</span></strong><p>{c.conceptNote}</p></div><a href="#top">{c.backTop}<ArrowUpRight size={17} aria-hidden="true" /></a></div></footer>
    </div>
  );
}
