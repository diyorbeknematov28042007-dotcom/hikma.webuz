"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    // Content starts visible. WAAPI only animates a visible entry, never hides
    // server-rendered content when scripting, observation or hydration fails.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        node.animate(
          [
            { opacity: 0.35, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 520, easing: "cubic-bezier(.22,1,.36,1)" },
        );
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.getAnimations().forEach((animation) => animation.cancel());
    };
  }, []);
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
