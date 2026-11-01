import type { Metadata } from "next";
import { alisherBrand, alisherCopy, alisherPath } from "./alisher-copy";
import { localePath, type Locale } from "./i18n";

export function alisherMetadata(locale: Locale): Metadata {
  const copy = alisherCopy(locale);
  const title = `${alisherBrand} — ${locale === "uz" ? "Yuriskonsult va huquqiy tahlil" : locale === "ru" ? "Юрисконсульт и правовой анализ" : "Legal counsel and analysis"}`;
  const path = localePath(locale, alisherPath);
  return {
    metadataBase: new URL("https://hikmaweb.uz"),
    title: { absolute: title }, description: copy.description,
    alternates: { canonical: path, languages: { "uz-UZ": alisherPath, "ru-RU": `/ru${alisherPath}`, en: `/en${alisherPath}`, "x-default": alisherPath } },
    openGraph: { type: "profile", title, description: copy.description, url: path, siteName: alisherBrand, locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US", images: [{ url: "/images/alisher/social.jpg", width: 1200, height: 630, alt: alisherBrand }] },
    twitter: { card: "summary_large_image", title, description: copy.description, images: ["/images/alisher/social.jpg"] },
  };
}
