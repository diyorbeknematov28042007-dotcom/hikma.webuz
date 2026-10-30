import type { Viewport } from "next";
import { notFound } from "next/navigation";
import { PersonalLanding } from "@/components/personal/PersonalLanding";
import { personalMetadata } from "@/lib/personal-metadata";
import { isLocale } from "@/lib/i18n";
type Props = { params: Promise<{ locale: string }> };
export const viewport: Viewport = { themeColor: "#080808" };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return personalMetadata(locale);
}
export default async function LocalizedPersonalPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <PersonalLanding locale={locale} />;
}
