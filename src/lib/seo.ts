import type { Metadata } from "next";
import { instagramUrl, siteOrigin, telegramUrl } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "uz_UZ",
      siteName: "HIKMA",
      title: `${title} | HIKMA`,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "HIKMA — Millat uchun zamonaviy yechimlar",
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

export function brandStructuredData() {
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
        slogan: "Millat uchun zamonaviy yechimlar",
        description:
          "Landing page, Telegram bot, Instagram Ads va Telegram Ads xizmatlari.",
        sameAs: [instagramUrl, telegramUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: "HIKMA",
        alternateName: "hikmaweb.uz",
        url: `${origin}/`,
        inLanguage: "uz",
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
