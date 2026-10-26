import { notFound } from "next/navigation";
import { BarberLanding } from "@/components/BarberLanding";
import { barberMetadata } from "@/lib/barber-metadata";
import { isLocale } from "@/lib/i18n";
import "../../barber.css";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return barberMetadata(locale);
}
export default async function LocalizedBarberPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <BarberLanding locale={locale} />;
}
