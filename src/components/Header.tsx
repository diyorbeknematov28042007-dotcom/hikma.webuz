"use client";
import { useEffect, useRef } from "react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { getHomeCopy } from "@/lib/localized-content";
import { localePath, type Locale } from "@/lib/i18n";
import { StaticLogo } from "./Brand";
import { LanguageSwitch } from "./LanguageSwitch";
export function Header({ innerPage = false, locale = "uz" }: { innerPage?: boolean; locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const navigation = ["#xizmatlar", "#loyihalar", "#yondashuv", "#haqimizda"].map((href, index) => ({ href, label: copy.nav[index] }));
  const anchorHref = (href: string) => (innerPage ? `${localePath(locale, "/")}${href}` : href);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sentinel.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) =>
      header.current?.classList.toggle("is-scrolled", !entry.isIntersecting),
    );
    observer.observe(sentinel.current);
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = () => {
      if (wide.matches) dialog.current?.close();
    };
    wide.addEventListener("change", onWide);
    return () => {
      observer.disconnect();
      wide.removeEventListener("change", onWide);
      document.body.style.overflow = "";
    };
  }, []);
  function open() {
    dialog.current?.showModal();
    trigger.current?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function close() {
    dialog.current?.close();
  }
  function afterClose() {
    document.body.style.overflow = "";
    trigger.current?.setAttribute("aria-expanded", "false");
    trigger.current?.focus();
  }
  function followAnchor() {
    close();
  }
  return (
    <>
      <div className="header-sentinel" ref={sentinel} aria-hidden="true" />
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <a href={innerPage ? localePath(locale, "/") : "#top"} aria-label={`HIKMA — ${copy.nav[3]}`}>
            <StaticLogo />
          </a>
          <nav className="desktop-nav" aria-label={locale === "uz" ? "Asosiy navigatsiya" : locale === "ru" ? "Основная навигация" : "Main navigation"}>
            {navigation.map((item) => (
              <a key={item.href} href={anchorHref(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitch current={locale} />
          <a
            className="button button-small header-cta"
            href={anchorHref("#aloqa")}
          >
            {copy.cta}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            ref={trigger}
            onClick={open}
            className="menu-trigger"
            aria-label={locale === "uz" ? "Menyuni oçiş" : locale === "ru" ? "Открыть меню" : "Open menu"}
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <List size={26} aria-hidden="true" />
          </button>
        </div>
        <noscript>
          <nav className="nojs-nav" aria-label={locale === "uz" ? "Navigatsiya" : locale === "ru" ? "Навигация" : "Navigation"}>
            {navigation.map((item) => (
              <a key={item.href} href={anchorHref(item.href)}>
                {item.label}
              </a>
            ))}
            <a href={anchorHref("#aloqa")}>{copy.contactNav}</a>
          </nav>
        </noscript>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog"
        onClose={afterClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-labelledby="menu-title"
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-head">
            <span id="menu-title">HIKMA</span>
            <button
              onClick={close}
              className="menu-trigger"
              aria-label={locale === "uz" ? "Menyuni yopiş" : locale === "ru" ? "Закрыть меню" : "Close menu"}
              autoFocus
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={locale === "uz" ? "Mobil navigatsiya" : locale === "ru" ? "Мобильная навигация" : "Mobile navigation"}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={anchorHref(item.href)}
                onClick={followAnchor}
              >
                {item.label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            ))}
            <a href={anchorHref("#aloqa")} onClick={followAnchor}>
              {copy.contactNav}
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </nav>
          <p>{copy.tagline}</p>
        </div>
      </dialog>
    </>
  );
}
