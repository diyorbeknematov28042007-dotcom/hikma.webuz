"use client";
import { useEffect, useRef } from "react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { navigation, primaryCta } from "@/lib/content";
import { StaticLogo } from "./Brand";
export function Header() {
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
          <a href="#top" aria-label="HIKMA bosh sahifa">
            <StaticLogo />
          </a>
          <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-small header-cta" href="#aloqa">
            {primaryCta}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            ref={trigger}
            onClick={open}
            className="menu-trigger"
            aria-label="Menyuni ochish"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <List size={26} aria-hidden="true" />
          </button>
        </div>
        <noscript>
          <nav className="nojs-nav" aria-label="Navigatsiya">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#aloqa">Bog‘lanish</a>
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
              aria-label="Menyuni yopish"
              autoFocus
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobil navigatsiya">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={followAnchor}>
                {item.label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            ))}
            <a href="#aloqa" onClick={followAnchor}>
              Bog‘lanish
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </nav>
          <p>Millat uchun zamonaviy yechimlar.</p>
        </div>
      </dialog>
    </>
  );
}
