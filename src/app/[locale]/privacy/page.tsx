import { notFound } from "next/navigation";
import { PrivacyContent } from "@/app/(uz)/privacy/page";
import { interfaceCopy } from "@/lib/interface-copy";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  const c = interfaceCopy(locale).privacy;
  return pageMetadata(c.title, c.intro, "/privacy", locale);
}
export default async function LocalizedPrivacy({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <PrivacyContent locale={locale} />;
}
