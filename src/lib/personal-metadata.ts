import type { Metadata } from "next";
import { localePath, type Locale } from "./i18n";
import { personalDescription, personalText } from "./personal-copy";
export function personalMetadata(locale: Locale): Metadata {
  const title = personalText(locale, "Diyorbek Ne’matov | Huquq va LegalTech");
  const description = personalText(locale, personalDescription);
  const path = localePath(locale, "/diyorbeknematov");
  return {
    metadataBase: new URL("https://hikmaweb.uz"), title: { absolute: title }, description,
    alternates: { canonical: path, languages: { "uz-UZ": "/diyorbeknematov", "ru-RU": "/ru/diyorbeknematov", en: "/en/diyorbeknematov", "x-default": "/diyorbeknematov" } },
    openGraph: { type: "profile", title, description, url: path, locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US", siteName: "Diyorbek Ne’matov" },
    twitter: { card: "summary_large_image", title, description },
  };
}
