import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { personalText } from "@/lib/personal-copy";
import { localePath, type Locale } from "@/lib/i18n";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function personalOg(locale: Locale) {
  const t = (text: string) => personalText(locale, text);
  const [font, portrait] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/manrope-medium.ttf")),
    readFile(join(process.cwd(), "public/images/diyorbek/portrait-social.png")),
  ]);
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#080808", color: "#f4f3f0", fontFamily: "Manrope", overflow: "hidden" }}>
      <div style={{ display: "flex", position: "absolute", inset: 0, background: "radial-gradient(ellipse at 72% 55%,#8b3a17 0%,#351a0e 30%,#080808 68%)" }} />
      {/* The supplied portrait is embedded locally, with no external image fetch. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${portrait.toString("base64")}`} width={530} height={662} alt="" style={{ position: "absolute", right: 0, bottom: -95, objectFit: "contain" }} />
      <div style={{ display: "flex", flexDirection: "column", position: "relative", padding: "62px 64px", width: 850 }}>
        <span style={{ color: "#ff9b38", fontSize: 21, letterSpacing: -0.5 }}>{t("Huquq va LegalTech").toUpperCase()}</span>
        <span style={{ marginTop: 95, fontSize: 91, letterSpacing: -5, lineHeight: 1.04 }}>Diyorbek</span>
        <span style={{ fontSize: 91, letterSpacing: -5, lineHeight: 1.04 }}>Ne’matov</span>
        <span style={{ marginTop: 35, fontSize: 21, color: "#b5a99d" }}>{t("Huquq talabasi / Product builder")}</span>
        <span style={{ marginTop: 58, fontSize: 17, color: "#c5b5a4" }}>{`hikmaweb.uz${localePath(locale, "/diyorbeknematov")}`}</span>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Manrope", data: font, weight: 500, style: "normal" }] },
  );
}
