export function PersonalHeading({ as: Tag = "h2", id, className = "", lines, accentIndices = [], hero = false }: {
  as?: "h1" | "h2" | "p"; id?: string; className?: string; lines: string[]; accentIndices?: number[]; hero?: boolean;
}) {
  return <Tag id={id} className={className} data-mask={hero ? "hero" : "section"}>
    {lines.map((line, index) => <span className="dn-mask-line" key={`${index}-${line}`}><span className={`dn-mask-text${accentIndices.includes(index) ? " dn-accent" : ""}`}>{line}</span></span>)}
  </Tag>;
}
