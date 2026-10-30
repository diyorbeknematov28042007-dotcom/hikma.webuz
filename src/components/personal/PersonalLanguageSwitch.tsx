"use client";
import { localePath, type Locale } from "@/lib/i18n";
const labels = { uz: ["ÖZB", "Özbekça"], ru: ["РУС", "Русский"], en: ["ENG", "English"] } as const;
export function PersonalLanguageSwitch({ current }: { current: Locale }) {
  return <nav className="dn-languages" aria-label="Til / Язык / Language">
    {(["uz", "ru", "en"] as const).map((locale) => <a key={locale} href={localePath(locale, "/diyorbeknematov")} hrefLang={locale} lang={locale} aria-label={labels[locale][1]} aria-current={current === locale ? "page" : undefined}
      onClick={(event) => { event.currentTarget.hash = window.location.hash; }}>{labels[locale][0]}</a>)}
  </nav>;
}
