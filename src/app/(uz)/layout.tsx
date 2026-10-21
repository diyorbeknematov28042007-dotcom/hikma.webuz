import type { Metadata, Viewport } from "next";
import { siteOrigin } from "@/lib/site";
import "../globals.css";
import "../experience.css";
import "../details.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "HIKMA — Landing page, Telegram bot va reklama xizmatlari",
    template: "%s | HIKMA",
  },
  description:
    "HIKMA: landing page, Telegram bot, Instagram Ads va Telegram Ads. Biznesingiz uchun dizayn, avtomatlashtirish va maqsadli reklama yeçimlari.",
  alternates: { canonical: "/", languages: { "uz-UZ": "/", "ru-RU": "/ru", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: "HIKMA",
    title: "HIKMA — Millat uçun zamonaviy yeçimlar",
    description:
      "Veb-sahifa. Telegram bot. Maqsadli reklama. Ğoyadan amaliy yeçimgacha.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HIKMA. Millat uçun zamonaviy yeçimlar.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101816",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body id="top">
        <a className="skip-link" href="#main">
          Asosiy kontentga ötish
        </a>
        {children}
      </body>
    </html>
  );
}
