"use client";

import { useEffect } from "react";

export function InteriorMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver) return;
    const elements = [...document.querySelectorAll<HTMLElement>("[data-interior-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("int-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });
    elements.forEach((element) => observer.observe(element));
    document.querySelector(".interior-page")?.classList.add("int-ready");
    return () => {
      observer.disconnect();
      document.querySelector(".interior-page")?.classList.remove("int-ready");
    };
  }, []);
  return null;
}
