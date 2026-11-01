"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, List, Pause, Play, Plus, X } from "@phosphor-icons/react";
import { alisherPath, type AlisherCopy } from "@/lib/alisher-copy";
import { localePath, type Locale } from "@/lib/i18n";

export function AlisherEffects() {
  const progress = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const page = progress.current?.closest<HTMLElement>(".as-page");
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let disposed = false;
    const started = performance.now();
    const syncVisibility = () => {
      page.dataset.visible = String(document.visibilityState === "visible");
      if (document.visibilityState !== "visible") animations.forEach((animation) => animation.cancel());
    };
    const stopAnimations = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches || document.visibilityState !== "visible" || (entry.target.classList.contains("as-hero-title") && performance.now() - started > 800)) return;
        const mode = entry.target.getAttribute("data-as-reveal");
        const masked = mode === "mask";
        const portal = mode === "portal";
        const order = Number(entry.target.getAttribute("data-as-order") || 0);
        entry.target.setAttribute("data-as-entered", "true");
        const targets = masked ? entry.target.querySelectorAll(".as-mask-text") : [entry.target];
        targets.forEach((target, index) => {
          const frames = portal
            ? [{ opacity: .25, transform: "perspective(1000px) rotateY(-16deg) translate3d(0,24px,0) scale(.94)" }, { opacity: 1, transform: "perspective(1000px) rotateY(0deg) translate3d(0,0,0) scale(1)" }]
            : masked
              ? [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }]
              : [{ opacity: .86, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }];
          const animation = target.animate(frames,
          { duration: portal ? 1000 : masked ? 600 : 420, delay: portal ? 80 : masked ? Math.min(index * 65, 130) : Math.min(order * 40, 80), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        });
      });
    }, { threshold: 0.12 });
    // Keep server-rendered copy readable during slow font loads. Reveal only after
    // metrics settle, and never replay a delayed hero entrance over text being read.
    const observe = () => {
      if (disposed) return;
      page.querySelectorAll("[data-as-reveal]").forEach((element) => observer.observe(element));
    };
    if (document.fonts.status === "loaded") observe();
    else document.fonts.ready.then(observe);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    preference.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect(); animations.forEach((animation) => animation.cancel());
      disposed = true;
      document.removeEventListener("visibilitychange", syncVisibility);
      preference.removeEventListener("change", stopAnimations);
    };
  }, []);
  return <motion.div className="as-progress" ref={progress} style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

export function AlisherHeroStage({ children, arch, portrait }: { children: ReactNode; arch: ReactNode; portrait: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end start"] });
  // Scroll changes the glass depth, while the supplied portrait stays still.
  const depthY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const depthScale = useTransform(scrollYProgress, [0, 1], [1, .94]);
  const pointer = useMotionValue(0);
  const softened = useSpring(pointer, { stiffness: 140, damping: 26, mass: .6 });
  const tilt = useTransform(softened, [-1, 1], [-3, 3]);
  const shift = useTransform(softened, [-1, 1], [-7, 7]);
  return <div className="as-hero-stage" ref={stage}
    onPointerMove={(event) => {
      if (reduced || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      const box = event.currentTarget.getBoundingClientRect();
      pointer.set(Math.max(-1, Math.min(1, (event.clientX - box.left) / box.width * 2 - 1)));
    }} onPointerLeave={() => pointer.set(0)}>
    <div className="as-hero-scene" aria-hidden="true">
      <div className="as-hero-halo" />
      <motion.div className="as-portal" style={{ y: reduced ? 0 : depthY, scale: reduced ? 1 : depthScale, x: reduced ? 0 : shift, rotateY: reduced ? 0 : tilt, transformPerspective: 1000 }}>
        <div className="as-portal-panel" data-as-reveal="portal">{arch}</div>
      </motion.div>
      <div className="as-hero-floor" />
      <div className="as-portrait">{portrait}</div>
    </div>
    {children}
  </div>;
}

export function AlisherAction({ children, href, className = "", external = false }: { children: ReactNode; href: string; className?: string; external?: boolean }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: .35 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: .35 });
  const reset = () => { x.set(0); y.set(0); };
  return <motion.a href={href} className={`as-button ${className}`} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
    style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }} whileTap={reduced ? undefined : { scale: .99 }}
    onPointerMove={(event) => {
      if (reduced || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      const box = event.currentTarget.getBoundingClientRect();
      x.set(Math.max(-3, Math.min(3, (event.clientX - box.left - box.width / 2) * .035)));
      y.set(Math.max(-3, Math.min(3, (event.clientY - box.top - box.height / 2) * .06)));
    }} onPointerLeave={reset} onBlur={reset} onClick={reset}>{children}<ArrowUpRight size={19} aria-hidden="true" /></motion.a>;
}

export function AlisherLanguages({ current }: { current: Locale }) {
  const languages = [{ locale: "uz", label: "ÖZB", name: "Özbekça" }, { locale: "ru", label: "РУС", name: "Русский" }, { locale: "en", label: "ENG", name: "English" }] as const;
  return <nav className="as-languages" aria-label="Til / Язык / Language">
    {languages.map(({ locale, label, name }) => <a key={locale} href={localePath(locale, alisherPath)} hrefLang={locale} lang={locale} aria-label={name} aria-current={current === locale ? "page" : undefined}
      onClick={(event) => { event.currentTarget.hash = window.location.hash; }}>{label}</a>)}
  </nav>;
}

export function AlisherMenu({ copy }: { copy: Pick<AlisherCopy, "openMenu" | "closeMenu" | "navigation" | "nav" | "contact"> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => { dialog.current?.close(); setOpen(false); };
  return <>
    <button className="as-menu-trigger as-icon-button" type="button" aria-label={copy.openMenu} aria-haspopup="dialog" aria-expanded={open} aria-controls="as-menu"
      onClick={() => { dialog.current?.showModal(); setOpen(true); }}><List size={23} aria-hidden="true" /></button>
    <dialog id="as-menu" ref={dialog} className="as-menu" aria-labelledby="as-menu-title" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="as-menu-inner">
        <div className="as-menu-top"><p id="as-menu-title">Yurist Shukrulloyev</p><button className="as-icon-button" type="button" onClick={close} aria-label={copy.closeMenu}><X size={23} aria-hidden="true" /></button></div>
        <nav aria-label={copy.navigation}>{copy.nav.map((item) => <a href={item.href} key={item.href} onClick={close}>{item.label}<ArrowUpRight size={22} aria-hidden="true" /></a>)}</nav>
        <a className="as-button" href="#aloqa" onClick={close}>{copy.contact}<ArrowUpRight size={19} aria-hidden="true" /></a>
      </div>
    </dialog>
  </>;
}

export function AlisherAreas({ areas }: { areas: AlisherCopy["areas"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="as-areas">
    {areas.map((area, index) => <article className="as-area" data-open={open === index} data-as-reveal="soft" data-as-order={index % 3} key={area.image}>
      <h3><button id={`as-trigger-${index}`} className="as-area-trigger" type="button" aria-expanded={open === index} aria-controls={`as-panel-${index}`} onClick={() => setOpen(open === index ? null : index)}>
        <span className="as-area-number" aria-hidden="true">0{index + 1}</span>
        {/* A small, supplied WebP is already optimized; keep it independent of text. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="as-area-icon" src={`/images/alisher/${area.image}.webp`} alt="" width={100} height={100} loading="lazy" />
        <span className="as-area-title">{area.title}</span><Plus className="as-area-plus" size={22} aria-hidden="true" />
      </button></h3>
      <div id={`as-panel-${index}`} className="as-area-panel" role="region" aria-labelledby={`as-trigger-${index}`} aria-hidden={open !== index} inert={open !== index}>
        <div className="as-area-clip"><div className="as-area-content"><p>{area.text}</p><span>{area.note}</span></div></div>
      </div>
    </article>)}
  </div>;
}

export function AlisherMotionToggle({ copy }: { copy: Pick<AlisherCopy, "motion" | "pause" | "resume"> }) {
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const page = ref.current?.closest<HTMLElement>(".as-page");
    if (page) page.dataset.paused = String(paused);
  }, [paused]);
  return <button ref={ref} type="button" className="as-motion" aria-pressed={paused} aria-label={paused ? copy.resume : copy.pause} title={paused ? copy.resume : copy.pause} onClick={() => setPaused(!paused)}>
    {paused ? <Play size={14} weight="fill" aria-hidden="true" /> : <Pause size={14} weight="fill" aria-hidden="true" />}<span>{copy.motion}</span>
  </button>;
}
