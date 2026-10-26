"use client";

import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef, type PointerEvent } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  src: string;
  alt: string;
  label: string;
  locale: Locale;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
};

const directions: Record<Locale, [string, string]> = {
  uz: ["çapga buriş", "öngga buriş"],
  ru: ["повернуть влево", "повернуть вправо"],
  en: ["rotate left", "rotate right"],
};

const limit = (value: number) => Math.max(-32, Math.min(32, value));

export function InteriorTiltImage({ src, alt, label, locale, width, height, sizes, className = "", priority = false }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const visual = useRef<HTMLDivElement>(null);
  const rotation = useRef(0);
  const drag = useRef<{ pointerId: number; startX: number; angle: number } | null>(null);
  const dragValue = useRef(0);

  function apply(y: number, x = 0) {
    visual.current?.style.setProperty("--int-tilt-y", `${y.toFixed(1)}deg`);
    visual.current?.style.setProperty("--int-tilt-x", `${x.toFixed(1)}deg`);
  }

  function turn(direction: -1 | 1) {
    const next = rotation.current + direction * 16;
    rotation.current = Math.abs(next) > 32 ? 0 : next;
    apply(rotation.current);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button") || (event.pointerType === "mouse" && event.button !== 0)) return;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, angle: rotation.current };
    dragValue.current = rotation.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId === event.pointerId) {
      const width = Math.max(1, frame.current?.clientWidth ?? 1);
      dragValue.current = limit(drag.current.angle + (event.clientX - drag.current.startX) / width * 80);
      apply(dragValue.current);
      return;
    }
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    apply(limit(rotation.current + x * 12), -y * 8);
  }

  function finishPointer(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    if (drag.current?.pointerId !== event.pointerId) return;
    if (!cancelled) rotation.current = limit(Math.round(dragValue.current / 8) * 8);
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    apply(rotation.current);
  }

  return (
    <div
      ref={frame}
      className={`int-tilt ${className}`.trim()}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={(event) => finishPointer(event, true)}
      onPointerLeave={() => { if (!drag.current) apply(rotation.current); }}
    >
      <div className="int-tilt-visual" ref={visual}>
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"} draggable={false} />
      </div>
      <div className="int-tilt-controls">
        <button type="button" className="int-tilt-control int-tilt-control--left" aria-label={`${label}: ${directions[locale][0]}`} onClick={() => turn(-1)}><CaretLeft size={20} weight="bold" aria-hidden="true" /></button>
        <button type="button" className="int-tilt-control int-tilt-control--right" aria-label={`${label}: ${directions[locale][1]}`} onClick={() => turn(1)}><CaretRight size={20} weight="bold" aria-hidden="true" /></button>
      </div>
    </div>
  );
}
