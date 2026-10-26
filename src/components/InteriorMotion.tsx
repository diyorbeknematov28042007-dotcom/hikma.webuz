"use client";

import { useEffect } from "react";

export function InteriorMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".interior-page");
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;
    if (!reduced && "IntersectionObserver" in window) {
      const elements = [...root.querySelectorAll<HTMLElement>("[data-interior-reveal]")];
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("int-visible");
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });
      elements.forEach((element) => observer?.observe(element));
      root.classList.add("int-ready");
    }

    const hero = root.querySelector<HTMLElement>(".int-hero-image");
    const art = root.querySelector<HTMLElement>(".int-hero-art");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onMove = (event: PointerEvent) => {
      if (!hero || !art) return;
      const box = hero.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 20;
      const y = ((event.clientY - box.top) / box.height - 0.5) * 16;
      art.style.setProperty("--int-parallax-x", `${x.toFixed(1)}px`);
      art.style.setProperty("--int-parallax-y", `${y.toFixed(1)}px`);
    };
    const onLeave = () => {
      art?.style.setProperty("--int-parallax-x", "0px");
      art?.style.setProperty("--int-parallax-y", "0px");
    };
    if (!reduced && finePointer) {
      hero?.addEventListener("pointermove", onMove);
      hero?.addEventListener("pointerleave", onLeave);
    }
    return () => {
      observer?.disconnect();
      root.classList.remove("int-ready");
      hero?.removeEventListener("pointermove", onMove);
      hero?.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return null;
}
