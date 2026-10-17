"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Reveal({
  children,
  className = "",
  id,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
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
        const targets = stagger ? Array.from(node.children) : [node];
        targets.forEach((target, index) =>
          target.animate(
            [
              { opacity: 0.35, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 640,
              delay: index * 75,
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "backwards",
            },
          ),
        );
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node
        .getAnimations({ subtree: true })
        .forEach((animation) => animation.cancel());
    };
  }, [stagger]);
  return (
    <div className={className} ref={ref} id={id}>
      {children}
    </div>
  );
}
