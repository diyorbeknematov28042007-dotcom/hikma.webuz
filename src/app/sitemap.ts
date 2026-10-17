import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteOrigin(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteOrigin()}/xizmatlar`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages.map((service) => ({
      url: `${siteOrigin()}${service.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteOrigin()}/loyihalar`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteOrigin()}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
