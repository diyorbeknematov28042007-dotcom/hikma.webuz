"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";

export function PersonalEffects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const page = ref.current?.closest(".dn-page");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!page || preference.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || document.visibilityState !== "visible") continue;
        entry.target.querySelectorAll(".dn-mask-text").forEach((line, index) => {
          const animation = line.animate([{ transform: "translateY(110%)" }, { transform: "translateY(0)" }], {
            duration: 600, delay: Math.min(index * 65, 130), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards",
          });
          animations.add(animation);
          const forget = () => { animations.delete(animation); };
          animation.finished.then(forget, forget);
        });
      }
    }, { threshold: .15 });
    page.querySelectorAll('[data-mask="section"]').forEach((heading) => observer.observe(heading));
    const stop = () => {
      if (!preference.matches) return;
      observer.disconnect(); animations.forEach((animation) => animation.cancel()); animations.clear();
    };
    preference.addEventListener("change", stop);
    return () => { observer.disconnect(); preference.removeEventListener("change", stop); animations.forEach((animation) => animation.cancel()); };
  }, []);
  return <motion.div ref={ref} className="dn-scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

export function MagneticLink({ children, className = "", href, target, rel }: { children: ReactNode; className?: string; href: string; target?: string; rel?: string }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: .35 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: .35 });
  const reset = () => { x.set(0); y.set(0); };
  return <motion.a href={href} target={target} rel={rel} className={`${className} dn-magnetic`}
    style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }} whileTap={reduced ? undefined : { scale: .99 }}
    onPointerMove={(event) => {
      if (reduced || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      const box = event.currentTarget.getBoundingClientRect();
      x.set(Math.max(-3, Math.min(3, (event.clientX - box.left - box.width / 2) * .035)));
      y.set(Math.max(-3, Math.min(3, (event.clientY - box.top - box.height / 2) * .06)));
    }} onPointerLeave={reset} onBlur={reset} onClick={reset}>{children}</motion.a>;
}
