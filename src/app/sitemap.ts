import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
import { localePath, locales } from "@/lib/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/xizmatlar", ...servicePages.map((service) => service.href), "/loyihalar", "/advokat", "/privacy"];
  return paths.flatMap((path) => locales.map((locale) => ({
    url: `${siteOrigin()}${localePath(locale, path) === "/" ? "" : localePath(locale, path)}`,
    changeFrequency: path === "/privacy" ? "yearly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/privacy" ? 0.2 : 0.8,
    alternates: {
      languages: {
        "uz-UZ": `${siteOrigin()}${localePath("uz", path) === "/" ? "" : localePath("uz", path)}`,
        "ru-RU": `${siteOrigin()}${localePath("ru", path)}`,
        en: `${siteOrigin()}${localePath("en", path)}`,
      },
    },
  })));
}
