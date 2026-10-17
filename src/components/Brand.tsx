import Image from "next/image";
// Unaltered raster extracted from the supplied V2 atlas. This is not a master SVG.
// Do not trace it, split it into guessed fragments or invent replacement geometry.
export function StaticLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand${compact ? " brand-compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <Image
          src="/brand/hikma-mark-reference.png"
          alt=""
          width={384}
          height={447}
          sizes="25px"
        />
      </span>
      <span>
        HIKMA<span className="sr-only"> bosh sahifa</span>
      </span>
    </span>
  );
}
export function LogoAssembly() {
  // Honest static fallback until an approved vector/fragment map is supplied.
  return (
    <div className="brand-signature" aria-label="HIKMA">
      <span className="brand-signature-mark">
        <Image
          src="/brand/hikma-mark-reference.png"
          alt="HIKMA logotipi"
          width={384}
          height={447}
          sizes="120px"
        />
      </span>
      <span aria-hidden="true">HIKMA</span>
    </div>
  );
}
