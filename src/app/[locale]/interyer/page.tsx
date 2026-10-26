import { notFound } from "next/navigation";
import { InteriorLanding } from "@/components/InteriorLanding";
import { interiorMetadata } from "@/lib/interior-metadata";
import { isLocale } from "@/lib/i18n";
import "../../interior.css";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return interiorMetadata(locale);
}
export default async function LocalizedInteriorPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <InteriorLanding locale={locale} />;
}
