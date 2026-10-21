import { notFound } from "next/navigation";
import { HomeContent } from "@/app/(uz)/page";
import { isLocale } from "@/lib/i18n";

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <HomeContent locale={locale} />;
}
