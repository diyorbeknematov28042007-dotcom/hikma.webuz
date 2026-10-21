import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Locale } from "@/lib/i18n";

export function InnerPage({ children, locale = "uz" }: { children: React.ReactNode; locale?: Locale }) {
  return (
    <>
      <Header innerPage locale={locale} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer instagramVerified locale={locale} />
    </>
  );
}

export function Breadcrumbs({
  items,
  locale = "uz",
}: {
  items: { label: string; href: string }[];
  locale?: Locale;
}) {
  return (
    <nav aria-label={locale === "uz" ? "Sahifa yöli" : locale === "ru" ? "Навигационная цепочка" : "Breadcrumbs"} className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
