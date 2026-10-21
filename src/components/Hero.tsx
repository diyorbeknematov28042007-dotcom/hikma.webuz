import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { primaryCta } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";
import { DepthStage } from "./DepthStage";

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
          <div className="stage-orbit">
            {servicePages.map((service, index) => (
              <a
                href={`#service-${service.id}`}
                className={`stage-satellite stage-satellite-${index + 1}`}
                aria-label={service.short}
                key={service.id}
              >
                <span className="stage-satellite-face">
                  <Image
                    src={service.sticker}
                    alt=""
                    width={512}
                    height={512}
                    sizes="(min-width: 1440px) 82px, (min-width: 640px) 76px, (min-width: 375px) 60px, 54px"
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </DepthStage>
    </section>
  );
}
