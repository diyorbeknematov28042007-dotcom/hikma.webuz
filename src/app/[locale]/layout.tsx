import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteOrigin } from "@/lib/site";
import "../globals.css";
import "../experience.css";
import "../details.css";

type Props = Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>;

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  const ru = locale === "ru";
  const title = ru ? "HIKMA — сайты, Telegram-боты и реклама" : "HIKMA — landing pages, Telegram bots and ads";
  const description = ru
    ? "HIKMA создаёт лендинги и Telegram-ботов, настраивает Instagram Ads и Telegram Ads для вашего бизнеса."
    : "HIKMA builds landing pages and Telegram bots and manages Instagram and Telegram Ads for your business.";
  return {
    metadataBase: new URL(siteOrigin()),
    title: { default: title, template: "%s | HIKMA" },
    description,
    alternates: { canonical: `/${locale}`, languages: { "uz-UZ": "/", "ru-RU": "/ru", en: "/en" } },
    openGraph: {
      type: "website", locale: ru ? "ru_RU" : "en_US", siteName: "HIKMA",
      title, description, url: `/${locale}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HIKMA digital solutions" }],
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101816" };

export default async function LocalizedLayout({ children, params }: Props) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  return (
    <html lang={locale}>
      <body id="top">
        <a className="skip-link" href="#main">
          {locale === "ru" ? "К основному содержимому" : "Skip to main content"}
        </a>
        {children}
      </body>
    </html>
  );
}
