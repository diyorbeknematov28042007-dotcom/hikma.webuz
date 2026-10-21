import type { Metadata } from "next";
import { instagramUrl, siteOrigin, telegramUrl } from "./site";
import { localePath, modernUzbek, type Locale } from "./i18n";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale = "uz",
): Metadata {
  if (locale === "uz") {
    title = modernUzbek(title);
    description = modernUzbek(description);
  }
  const localizedPath = localePath(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: { "uz-UZ": localePath("uz", path), "ru-RU": localePath("ru", path), en: localePath("en", path) },
    },
    openGraph: {
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "HIKMA",
      title: `${title} | HIKMA`,
      description,
      url: localizedPath,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: locale === "uz" ? "HIKMA — Millat uçun zamonaviy yeçimlar" : "HIKMA digital solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HIKMA`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function brandStructuredData(locale: Locale = "uz") {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: "HIKMA",
        url: `${origin}/`,
        logo: `${origin}/brand/hikma-mark-reference.png`,
        slogan: locale === "uz" ? "Millat uçun zamonaviy yeçimlar" : locale === "ru" ? "Современные решения для общества" : "Modern solutions for our community",
        description:
          "Landing page, Telegram bot, Instagram Ads va Telegram Ads xizmatlari.",
        sameAs: [instagramUrl, telegramUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}${localePath(locale, "/")}#website`,
        name: "HIKMA",
        alternateName: "hikmaweb.uz",
        url: `${origin}${localePath(locale, "/")}`,
        inLanguage: locale,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };
}

export function breadcrumbStructuredData(
  items: { label: string; href: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteOrigin()}${item.href}`,
    })),
  };
}
