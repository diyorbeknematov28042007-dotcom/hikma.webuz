export function motionDurationMs(value: string): number {
  const match = /^(\d+(?:\.\d+)?|\.\d+)(ms|s)$/i.exec(value.trim());
  if (!match) return 420;

  // CSS optimization can rewrite 420ms as .42s. WAAPI always expects ms.
  const duration = Number(match[1]) * (match[2].toLowerCase() === "s" ? 1000 : 1);
  return Number.isFinite(duration) ? duration : 420;
}
