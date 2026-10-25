import { notFound } from "next/navigation";
import { LawLanding } from "@/components/LawLanding";
import { isLocale } from "@/lib/i18n";
import { lawMetadata } from "@/lib/law-metadata";
import "../../law.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return lawMetadata(locale);
}

export default async function LocalizedLawSample({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <LawLanding locale={locale} />;
}
