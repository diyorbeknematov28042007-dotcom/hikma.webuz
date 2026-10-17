import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLogo } from "./Brand";
import { instagramUrl, telegramUrl } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
export function Footer({ instagramVerified }: { instagramVerified: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link href="/#top" aria-label="HIKMA bosh sahifa">
            <StaticLogo />
          </Link>
          <p>Millat uchun zamonaviy yechimlar.</p>
          <a href="#top" className="back-top" aria-label="Yuqoriga qaytish">
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
        <nav className="footer-services" aria-label="Xizmat sahifalari">
          {servicePages.map((service) => (
            <Link key={service.id} href={service.href}>
              {service.title}
            </Link>
          ))}
          <Link href="/loyihalar">Loyihalar</Link>
          <Link href="/xizmatlar">Barcha xizmatlar</Link>
        </nav>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} HIKMA. Barcha huquqlar himoyalangan.
          </small>
          <div>
            <Link href="/privacy">Maxfiylik</Link>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              Telegram
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (yangi sahifada ochiladi)</span>
            </a>
            {instagramVerified && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> (yangi sahifada ochiladi)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
