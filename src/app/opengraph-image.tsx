import { ImageResponse } from "next/og";
export const alt = "HIKMA. Millat uchun zamonaviy yechimlar.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  // Native type-led artwork, no substituted logo geometry or fictional screenshot.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#101816",
          color: "#f7faf8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          HIKMA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            letterSpacing: "-3px",
            lineHeight: 1.1,
          }}
        >
          <span>Millat uchun</span>
          <span style={{ color: "#5bd6a1" }}>zamonaviy yechimlar.</span>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#adbbb3" }}>
          Landing page va zamonaviy veb-sahifalar.
        </div>
      </div>
    ),
    size,
  );
}
