"use client";

import { useEffect } from "react";

export function LawMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".law-page");
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panels = root.querySelectorAll<HTMLElement>("[data-law-reveal]");
    let observer: IntersectionObserver | undefined;

    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }, { rootMargin: "0px 0px -35px 0px", threshold: 0.08 });
      panels.forEach((panel) => observer?.observe(panel));
      root.classList.add("law-motion-ready");
    }

    const progress = root.querySelector<HTMLElement>(".law-scroll-progress");
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progress) progress.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    const hero = root.querySelector<HTMLElement>(".law-hero");
    const art = root.querySelector<HTMLElement>(".law-hero-art");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onMove = (event: PointerEvent) => {
      if (!hero || !art) return;
      const box = hero.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 18;
      const y = ((event.clientY - box.top) / box.height - 0.5) * 14;
      art.style.setProperty("--law-parallax-x", `${x.toFixed(1)}px`);
      art.style.setProperty("--law-parallax-y", `${y.toFixed(1)}px`);
    };
    const onLeave = () => {
      art?.style.setProperty("--law-parallax-x", "0px");
      art?.style.setProperty("--law-parallax-y", "0px");
    };
    if (!reduced && finePointer) {
      hero?.addEventListener("pointermove", onMove);
      hero?.addEventListener("pointerleave", onLeave);
    }

    return () => {
      observer?.disconnect();
      root.classList.remove("law-motion-ready");
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      hero?.removeEventListener("pointermove", onMove);
      hero?.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return null;
}
