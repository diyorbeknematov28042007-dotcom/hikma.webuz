"use client";
import { useEffect, useRef, type ReactNode } from "react";

/** Decorative depth follows a fine pointer, never React state or a scroll loop. */
export function DepthStage({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const surface = root.current,
      target = scene.current;
    if (!surface || !target) return;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      target.style.removeProperty("--tilt-x");
      target.style.removeProperty("--tilt-y");
    };
    const move = (event: PointerEvent) => {
      if (!allowed.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = surface.getBoundingClientRect();
        const x = Math.max(
          -0.5,
          Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5),
        );
        const y = Math.max(
          -0.5,
          Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5),
        );
        target.style.setProperty("--tilt-x", `${-y * 9}deg`);
        target.style.setProperty("--tilt-y", `${x * 11}deg`);
      });
    };
    const onVisibility = () => {
      if (document.hidden) reset();
    };
    surface.addEventListener("pointermove", move, { passive: true });
    surface.addEventListener("pointerleave", reset);
    allowed.addEventListener("change", reset);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      reset();
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", reset);
      allowed.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <div className="depth-stage" ref={root}>
      <div className="depth-scene" ref={scene}>
        {children}
      </div>
    </div>
  );
}
