"use client";

import { usePathname, useRouter } from "next/navigation";
import { localePath, type Locale } from "@/lib/i18n";

const names: Record<Locale, string> = {
  uz: "Özbekça",
  ru: "Русский",
  en: "English",
};

export function LanguageSwitch({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="language-switch" aria-label="Language / Язык / Til">
      {(["uz", "ru", "en"] as const).map((locale) => (
        <a
          key={locale}
          href={localePath(locale, pathname || "/")}
          hrefLang={locale}
          lang={locale}
          aria-label={names[locale]}
          aria-current={current === locale ? "page" : undefined}
          onClick={(event) => {
            if (window.location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              event.preventDefault();
              router.push(`${localePath(locale, pathname || "/")}${window.location.hash}`);
            }
          }}
        >
          {locale.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
