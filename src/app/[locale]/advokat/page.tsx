import { notFound } from "next/navigation";
import { LawLanding } from "@/components/LawLanding";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import "../../law.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return locale === "ru"
    ? pageMetadata("Пример лендинга для адвоката", "Концепция лендинга адвокатских услуг от HIKMA. Это пример дизайна, а не действующее адвокатское бюро.", "/advokat", locale)
    : pageMetadata("Legal services landing page concept", "A legal practice landing page concept by HIKMA. A design example, not an active law firm.", "/advokat", locale);
}

export default async function LocalizedLawSample({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <LawLanding locale={locale} />;
}
