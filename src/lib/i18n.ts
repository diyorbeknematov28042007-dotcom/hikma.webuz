export type Locale = "uz" | "ru" | "en";

export const locales: Locale[] = ["uz", "ru", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Keep the same page and anchor when a visitor changes language. */
export function localePath(locale: Locale, pathname: string) {
  const suffix = pathname.replace(/^\/(ru|en)(?=\/|$)/, "") || "/";
  return locale === "uz" ? suffix : `/${locale}${suffix === "/" ? "" : suffix}`;
}

/** Display copy only: URLs, service IDs and form protocol values stay unchanged. */
export function modernUzbek(text: string) {
  return text
    .replace(/Search Console/g, "\u0001")
    .replace(/O[ʻ‘’']/g, "Ö")
    .replace(/o[ʻ‘’']/g, "ö")
    .replace(/G[ʻ‘’']/g, "Ğ")
    .replace(/g[ʻ‘’']/g, "ğ")
    .replace(/SH|Sh/g, "Ş")
    .replace(/sh/g, "ş")
    .replace(/CH|Ch/g, "Ç")
    .replace(/ch/g, "ç")
    .replace(/\u0001/g, "Search Console");
}

export function uz(text: string) {
  return modernUzbek(text);
}
