import type { Metadata } from "next";
import { localePath, type Locale } from "./i18n";
import { lawCopy } from "./law-copy";
import { siteOrigin } from "./site";

export function lawMetadata(locale: Locale): Metadata {
  const copy = lawCopy(locale);
  const title = `${copy.person} — ${copy.title} ${copy.accent}`;
  const path = localePath(locale, "/advokat");
  return {
    metadataBase: new URL(siteOrigin()),
    title: { absolute: title },
    description: copy.lead,
    alternates: {
      canonical: path,
      languages: {
        "uz-UZ": localePath("uz", "/advokat"),
        "ru-RU": localePath("ru", "/advokat"),
        en: localePath("en", "/advokat"),
      },
    },
    // A fictional portfolio persona should not be presented as a real lawyer in search.
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: copy.person,
      title,
      description: copy.lead,
      url: path,
      images: [{ url: "/images/advokat/01-hero-legal-folio.webp", width: 1600, height: 1600, alt: copy.person }],
    },
    twitter: { card: "summary_large_image", title, description: copy.lead },
  };
}
