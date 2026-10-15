import type { Metadata, Viewport } from "next";
import { siteOrigin } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "HIKMA — Biznesingiz uchun zamonaviy raqamli yechimlar",
    template: "%s | HIKMA",
  },
  description:
    "HIKMA bizneslar va mutaxassislar uchun zamonaviy landing page hamda qulay veb-sahifalar yaratishga yo‘naltirilgan. Loyihangizni birga muhokama qilamiz.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: "HIKMA",
    title: "HIKMA — Millat uchun zamonaviy yechimlar",
    description: "Aniq maqsad. Puxta dizayn. Qulay raqamli tajriba.",
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
