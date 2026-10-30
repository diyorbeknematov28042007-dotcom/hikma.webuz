import { notFound } from "next/navigation";
import { personalOg } from "@/components/personal/PersonalOg";
import { isLocale } from "@/lib/i18n";
export const alt = "Diyorbek Ne’matov. LegalTech.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return personalOg(locale);
}
