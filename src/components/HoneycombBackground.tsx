"use client";

import { useEffect, useRef } from "react";

// A viewport-sized canvas follows document coordinates, so the hive is continuous
// down the page without a page-sized bitmap or hundreds of animated DOM nodes.
export function HoneycombBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const colors = getComputedStyle(canvas);
    const brand = colors.getPropertyValue("--color-brand").trim() || "#00875a";
    const accent = colors.getPropertyValue("--color-accent-text").trim() || "#5bd6a1";
    const started = new Map<string, number>();
    const vertices = Array.from({ length: 7 }, (_, index) => {
      const angle = (index * Math.PI) / 3;
      return { x: Math.cos(angle), y: Math.sin(angle) };
    });
    let width = 0;
    let height = 0;
    let radius = 0;
    let frame = 0;

    const schedule = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
    };

    function draw(now: number) {
      frame = 0;
      if (document.hidden) return;
      const bounds = canvas!.getBoundingClientRect();
      const nextRadius = bounds.width < 768 ? 44 : 68;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      if (width !== bounds.width || height !== bounds.height || radius !== nextRadius) {
        if (radius !== nextRadius) started.clear();
        width = bounds.width;
        height = bounds.height;
        radius = nextRadius;
        canvas!.width = Math.round(width * ratio);
        canvas!.height = Math.round(height * ratio);
        context!.setTransform(ratio, 0, 0, ratio, 0, 0);
      }
      context!.clearRect(0, 0, width, height);

      const scroll = window.scrollY;
      const rowHeight = Math.sqrt(3) * radius;
      const columnWidth = radius * 1.5;
      const firstRow = Math.floor(scroll / rowHeight) - 1;
      const lastRow = Math.ceil((scroll + height) / rowHeight);
      const lastColumn = Math.ceil(width / columnWidth) + 1;
      const originX = width * 0.78;
      const originY = scroll + Math.min(height * 0.28, 240);
      let building = false;

      for (let row = firstRow; row <= lastRow; row++) {
        for (let column = -1; column <= lastColumn; column++) {
          const x = column * columnWidth;
          const documentY = row * rowHeight + (Math.abs(column) % 2) * rowHeight * 0.5;
          const y = documentY - scroll;
          const key = `${column}:${row}`;
          if (!started.has(key)) {
            // Neighbouring cells begin in a short wave from the upper right.
            const distance = Math.hypot((x - originX) / columnWidth, (documentY - originY) / rowHeight);
            started.set(key, now + Math.min(distance * 90, 1100));
          }
          const progress = motion.matches ? 1 : Math.max(0, Math.min(1, (now - started.get(key)!) / 900));
          if (progress < 1) building = true;
          if (progress === 0) continue;

          const seed = Math.abs((column * 17 + row * 29) % 19) / 19;
          const edge = Math.abs(x - width * 0.5) / (width * 0.5);
          const strength = 0.72 + Math.min(edge, 1) * 0.28;
          const size = radius - 1;
          const traced = (1 - Math.pow(1 - progress, 3)) * 6;
          const head = Math.min(5, Math.floor(traced));
          const fraction = traced - head;
          const tipX = x + (vertices[head].x + (vertices[head + 1].x - vertices[head].x) * fraction) * size;
          const tipY = y + (vertices[head].y + (vertices[head + 1].y - vertices[head].y) * fraction) * size;

          context!.beginPath();
          vertices.slice(0, 6).forEach((vertex, index) => {
            if (index === 0) context!.moveTo(x + vertex.x * size, y + vertex.y * size);
            else context!.lineTo(x + vertex.x * size, y + vertex.y * size);
          });
          context!.closePath();
          context!.fillStyle = brand;
          context!.globalAlpha = (seed > 0.72 ? 0.085 : 0.018) * progress * strength;
          context!.fill();

          context!.beginPath();
          context!.moveTo(x + size, y);
          for (let point = 1; point <= head; point++) {
            context!.lineTo(x + vertices[point].x * size, y + vertices[point].y * size);
          }
          context!.lineTo(tipX, tipY);
          context!.lineWidth = 0.8;
          context!.lineJoin = "round";
          context!.strokeStyle = brand;
          context!.globalAlpha = (0.2 + seed * 0.13) * strength;
          context!.stroke();

          if (progress < 1 && !motion.matches) {
            context!.strokeStyle = accent;
            context!.globalAlpha = Math.sin(progress * Math.PI) * 0.38 * strength;
            context!.stroke();
            context!.beginPath();
            context!.arc(tipX, tipY, 1.6, 0, Math.PI * 2);
            context!.fillStyle = accent;
            context!.globalAlpha = Math.sin(progress * Math.PI) * 0.65;
            context!.fill();
          }
        }
      }
      context!.globalAlpha = 1;
      canvas!.dataset.state = motion.matches ? "static" : building ? "building" : "idle";
      // Once the visible cells have settled, drawing stops until scroll/resize.
      if (building) schedule();
    }

    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", visibility);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <div className="honeycomb-background" aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
