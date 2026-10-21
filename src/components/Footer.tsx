import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLogo } from "./Brand";
import { instagramUrl, telegramUrl } from "@/lib/site";
import { getHomeCopy, getServicePages } from "@/lib/localized-content";
import { localePath, type Locale } from "@/lib/i18n";
export function Footer({ instagramVerified, locale = "uz" }: { instagramVerified: boolean; locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const labels = locale === "uz" ? {
    services: "Xizmat sahifalari", projects: "Loyihalar", all: "Barça xizmatlar", privacy: "Maxfiylik",
    rights: "Barça huquqlar himoyalangan.", top: "Yuqoriga qaytish", newTab: "yangi sahifada oçiladi",
  } : locale === "ru" ? {
    services: "Страницы услуг", projects: "Проекты", all: "Все услуги", privacy: "Конфиденциальность",
    rights: "Все права защищены.", top: "Наверх", newTab: "открывается в новой вкладке",
  } : {
    services: "Service pages", projects: "Projects", all: "All services", privacy: "Privacy",
    rights: "All rights reserved.", top: "Back to top", newTab: "opens in a new tab",
  };
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link href={`${localePath(locale, "/")}#top`} aria-label={`HIKMA — ${locale === "uz" ? "boş sahifa" : locale === "ru" ? "главная" : "home"}`}>
            <StaticLogo />
          </Link>
          <p>{copy.tagline}</p>
          <a href="#top" className="back-top" aria-label={labels.top}>
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
        <nav className="footer-services" aria-label={labels.services}>
          {getServicePages(locale).map((service) => (
            <Link key={service.id} href={service.href}>
              {service.title}
            </Link>
          ))}
          <Link href={localePath(locale, "/loyihalar")}>{labels.projects}</Link>
          <Link href={localePath(locale, "/xizmatlar")}>{labels.all}</Link>
        </nav>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} HIKMA. {labels.rights}
          </small>
          <div>
            <Link href={localePath(locale, "/privacy")}>{labels.privacy}</Link>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              Telegram
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> ({labels.newTab})</span>
            </a>
            {instagramVerified && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> ({labels.newTab})</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
