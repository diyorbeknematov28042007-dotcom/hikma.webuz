"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy } from "@phosphor-icons/react";
import type { InteriorCopy } from "@/lib/interior-copy";

type Props = Pick<InteriorCopy, "placeLabel" | "placeOptions" | "areaLabel" | "areaPlaceholder" | "goalLabel" | "goalPlaceholder" | "copyAction" | "copied" | "copyError" | "briefHeading">;

export function InteriorBrief(copy: Props) {
  const [place, setPlace] = useState(copy.placeOptions[0]);
  const [area, setArea] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState("");

  async function copyBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [copy.briefHeading, `${copy.placeLabel}: ${place}`, area.trim() && `${copy.areaLabel}: ${area.trim()}`, `${copy.goalLabel}: ${goal.trim()}`].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setStatus(copy.copied);
    } catch {
      setStatus(copy.copyError);
    }
  }

  return (
    <form className="int-brief" onSubmit={copyBrief}>
      <label htmlFor="int-place">{copy.placeLabel}</label>
      <select id="int-place" value={place} onChange={(event) => setPlace(event.target.value)}>
        {copy.placeOptions.map((option) => <option key={option}>{option}</option>)}
      </select>
      <label htmlFor="int-area">{copy.areaLabel}</label>
      <input id="int-area" type="number" inputMode="numeric" min="1" max="100000" placeholder={copy.areaPlaceholder} value={area} onChange={(event) => setArea(event.target.value)} />
      <label htmlFor="int-goal">{copy.goalLabel}</label>
      <textarea id="int-goal" rows={4} maxLength={1000} required placeholder={copy.goalPlaceholder} value={goal} onChange={(event) => setGoal(event.target.value)} />
      <button type="submit" className="int-button int-button-dark"><Copy size={19} aria-hidden="true" />{copy.copyAction}<ArrowUpRight size={19} aria-hidden="true" /></button>
      <p className="int-brief-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
