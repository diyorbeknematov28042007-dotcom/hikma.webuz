import type { Metadata, Viewport } from "next";
import { siteOrigin } from "@/lib/site";
import "./globals.css";
import "./experience.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "HIKMA — Biznesingiz uchun zamonaviy raqamli yechimlar",
    template: "%s | HIKMA",
  },
  description:
    "HIKMA: landing page, Telegram bot, Instagram Ads va Telegram Ads. Biznesingiz uchun dizayn, avtomatlashtirish va maqsadli reklama yechimlari.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: "HIKMA",
    title: "HIKMA — Millat uchun zamonaviy yechimlar",
    description:
      "Veb-sahifa. Telegram bot. Maqsadli reklama. G‘oyadan amaliy yechimgacha.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HIKMA. Millat uchun zamonaviy yechimlar.",
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
          Asosiy kontentga o‘tish
        </a>
        {children}
      </body>
    </html>
  );
}
