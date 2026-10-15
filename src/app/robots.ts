import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === "preview";
  return {
    rules: {
      userAgent: "*",
      allow: preview ? undefined : "/",
      disallow: preview ? "/" : "/api/",
    },
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
