"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PersonalReveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (preference.matches || document.visibilityState !== "visible") return;

        const tokens = getComputedStyle(node);
        const duration = Number.parseFloat(tokens.getPropertyValue("--dn-motion-reveal")) || 420;
        const easing = tokens.getPropertyValue("--dn-ease").trim() || "cubic-bezier(.22,1,.36,1)";
        const targets = stagger ? Array.from(node.children) : [node];

        // Server-rendered content is always visible. Only selected sections get
        // one short entrance, and each instance owns only its own animations.
        targets.forEach((target, index) => {
          const animation = target.animate(
            [
              { opacity: 0.86, transform: "translateY(8px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration, easing, delay: Math.min(index * 40, 80), fill: "backwards" },
          );
          animations.add(animation);
          const forget = () => { animations.delete(animation); };
          animation.finished.then(forget, forget);
        });
      },
      { threshold: 0.12 },
    );

    const stop = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    observer.observe(node);
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stop);
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
  }, [stagger]);

  return <div className={className} ref={ref}>{children}</div>;
}
