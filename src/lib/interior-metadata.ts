import type { Metadata } from "next";
import { interiorCopy } from "./interior-copy";
import { localePath, type Locale } from "./i18n";
import { siteOrigin } from "./site";

export function interiorMetadata(locale: Locale): Metadata {
  const c = interiorCopy(locale);
  const title = `${c.brand} — ${c.title} ${c.accent}`;
  const path = localePath(locale, "/interyer");
  return {
    metadataBase: new URL(siteOrigin()),
    title: { absolute: title }, description: c.lead,
    alternates: { canonical: path, languages: { "uz-UZ": "/interyer", "ru-RU": "/ru/interyer", en: "/en/interyer" } },
    robots: { index: false, follow: true },
    openGraph: { type: "website", locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US", siteName: c.brand, title, description: c.lead, url: path,
      images: [{ url: "/images/interyer/hero.webp", width: 1672, height: 941, alt: c.brand }] },
    twitter: { card: "summary_large_image", title, description: c.lead },
  };
}
