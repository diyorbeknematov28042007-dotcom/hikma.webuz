import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Browser,
  Robot,
  InstagramLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { primaryCta, services } from "@/lib/content";
import { DepthStage } from "./DepthStage";
import heroArtwork from "../../public/images/emerald-panels.webp";
const icons = [Browser, Robot, InstagramLogo, TelegramLogo];

export function Hero() {
  return (
    <section
      className="hero container hero-updated"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">HIKMA / Raqamli yechimlar</p>
        <h1 id="hero-title">
          Raqamli dunyoda <span className="hero-accent">o‘z o‘rningiz.</span>
        </h1>
        <p className="hero-description">
          Veb-sahifa, Telegram bot va maqsadli reklama. G‘oyangizni
          biznesingizga mos raqamli yechimga aylantiramiz.
        </p>
        <div className="hero-actions">
          <a href="#aloqa" className="button">
            {primaryCta}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="#xizmatlar" className="text-link">
            Xizmatlarni ko‘rish
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <DepthStage>
        <Image
          src={heroArtwork}
          alt=""
          className="stage-environment"
          sizes="(min-width: 1024px) 48vw, 100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className="stage-halo" aria-hidden="true" />
        <div className="stage-identity" aria-hidden="true">
          <div className="stage-mark">
            <Image
              src="/brand/hikma-mark-reference.png"
              alt=""
              width={384}
              height={447}
              sizes="96px"
            />
          </div>
          <span className="stage-wordmark">HIKMA</span>
          <span className="stage-motto">Ideas to impact</span>
        </div>
        <nav className="stage-services" aria-label="Xizmatlarni tez tanlash">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <a
                href={`#service-${service.id}`}
                className={`stage-tile stage-tile-${index + 1}`}
                key={service.id}
              >
                <span className="stage-tile-icon">
                  <Icon size={24} weight="light" aria-hidden="true" />
                </span>
                <span>{service.short}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            );
          })}
        </nav>
        <p className="stage-caption">Xizmatni tanlang</p>
      </DepthStage>
    </section>
  );
}
