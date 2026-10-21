import { notFound } from "next/navigation";
import { ServiceIndexContent } from "@/app/(uz)/xizmatlar/page";
import { interfaceCopy } from "@/lib/interface-copy";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return pageMetadata(
    locale === "ru" ? "Цифровые услуги" : "Digital services",
    interfaceCopy(locale).details.directoryIntro,
    "/xizmatlar", locale,
  );
}
export default async function LocalizedServiceIndex({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <ServiceIndexContent locale={locale} />;
}
