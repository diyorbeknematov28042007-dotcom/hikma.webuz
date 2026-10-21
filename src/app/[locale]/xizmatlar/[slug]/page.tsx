import { notFound } from "next/navigation";
import { ServicePageContent } from "@/app/(uz)/xizmatlar/[slug]/page";
import { getService } from "@/lib/localized-content";
import { isLocale } from "@/lib/i18n";
import { servicePages } from "@/lib/service-pages";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  const service = getService(locale, slug);
  if (!service) notFound();
  return pageMetadata(service.heading, service.seoDescription, `/xizmatlar/${slug}`, locale);
}
export default async function LocalizedService({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <ServicePageContent slug={slug} locale={locale} />;
}
