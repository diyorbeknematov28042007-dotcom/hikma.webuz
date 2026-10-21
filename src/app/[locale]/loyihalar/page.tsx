import { notFound } from "next/navigation";
import { ProjectsContent } from "@/app/(uz)/loyihalar/page";
import { interfaceCopy } from "@/lib/interface-copy";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  const c = interfaceCopy(locale).projects;
  return pageMetadata(c.title, c.intro, "/loyihalar", locale);
}
export default async function LocalizedProjects({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "uz") notFound();
  return <ProjectsContent locale={locale} />;
}
