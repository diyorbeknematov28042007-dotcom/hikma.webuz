import type { Viewport } from "next";
import { notFound } from "next/navigation";
import { AlisherLanding } from "@/components/alisher/AlisherLanding";
import { alisherMetadata } from "@/lib/alisher-metadata";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };
export const viewport: Viewport = { themeColor: "#100e17" };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return alisherMetadata(locale);
}
export default async function AlisherPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <AlisherLanding locale={locale} />;
}
