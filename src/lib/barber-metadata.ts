import type { Metadata } from "next";
import { barberCopy } from "./barber-copy";
import { localePath, type Locale } from "./i18n";
import { siteOrigin } from "./site";

export function barberMetadata(locale: Locale): Metadata {
  const c = barberCopy(locale);
  const title = `FORMA Barber — ${c.heroTop} ${c.heroAccent}`;
  const path = localePath(locale, "/sartarosh");
  return {
    metadataBase: new URL(siteOrigin()),
    title: { absolute: title }, description: c.heroBody,
    robots: { index: false, follow: true },
    alternates: { canonical: path, languages: { "uz-UZ": "/sartarosh", "ru-RU": "/ru/sartarosh", en: "/en/sartarosh" } },
    openGraph: { type: "website", siteName: "FORMA Barber", title, description: c.heroBody, url: path,
      images: [{ url: "/images/sartarosh/photos/barbershop-interior.webp", width: 2400, height: 1500, alt: "FORMA Barber concept" }] },
    twitter: { card: "summary_large_image", title, description: c.heroBody },
  };
}
