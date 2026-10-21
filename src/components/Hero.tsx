import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { getHomeCopy, getServicePages } from "@/lib/localized-content";
import type { Locale } from "@/lib/i18n";
import { DepthStage } from "./DepthStage";
import { ServicePlatformIcon } from "./ServicePlatformIcon";

export function Hero({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  return (
    <section
      className="hero container hero-updated"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">{copy.heroEyebrow}</p>
        <h1 id="hero-title">
          {copy.heroTitle} <span className="hero-accent">{copy.heroAccent}</span>
        </h1>
        <p className="hero-description">
          {copy.heroDescription}
        </p>
        <div className="hero-actions">
          <a href="#aloqa" className="button">
            {copy.cta}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="#xizmatlar" className="text-link">
            {copy.viewServices}
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <DepthStage>
        <div className="stage-halo" aria-hidden="true" />
        <div className="stage-identity-motion" aria-hidden="true">
          <div className="stage-identity">
            <div className="stage-identity-front">
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
            <div className="stage-identity-back">
              <Image
                src="/brand/hikma-mark-reference.png"
                alt=""
                width={384}
                height={447}
                sizes="72px"
              />
              <span>HIKMA</span>
            </div>
          </div>
        </div>
        <nav className="stage-services" aria-label={copy.quickServices}>
          <div className="stage-orbit">
            {getServicePages(locale).map((service, index) => (
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
                  <ServicePlatformIcon service={service.id} />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </DepthStage>
    </section>
  );
}
