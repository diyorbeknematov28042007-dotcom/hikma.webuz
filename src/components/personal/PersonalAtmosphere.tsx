"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

export function PersonalAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    const syncVisibility = () => {
      layer.dataset.running = String(document.visibilityState === "visible");
    };
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  return (
    <div ref={ref} className="dn-atmosphere" aria-hidden="true">
      <span className="dn-ambient-layer dn-ambient-glow" />
      <span className="dn-ambient-layer dn-ambient-pane dn-ambient-pane-far" />
      <span className="dn-ambient-layer dn-ambient-pane dn-ambient-pane-near" />
    </div>
  );
}

export function PersonalAmbientToggle({ pauseLabel, resumeLabel }: { pauseLabel: string; resumeLabel: string }) {
  const [paused, setPaused] = useState(false);
  const label = paused ? resumeLabel : pauseLabel;

  return (
    <button type="button" className="dn-ambient-toggle" data-paused={paused}
      aria-label={label} title={label} onClick={() => setPaused((value) => !value)}>
      {paused ? <Play size={15} weight="fill" aria-hidden="true" /> : <Pause size={15} weight="fill" aria-hidden="true" />}
    </button>
  );
}
