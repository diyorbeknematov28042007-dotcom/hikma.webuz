import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { primaryCta } from "@/lib/content";
import heroArtwork from "../../public/images/emerald-panels.webp";
export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">HIKMA / Raqamli yechimlar</p>
        <h1 id="hero-title">
          <span className="hero-desktop-title">
            Biznesingizning <span>raqamli qiyofasini</span> yarating.
          </span>
          <span className="hero-mobile-title">
            Biznesingiz uchun <span>zamonaviy</span> veb-sahifa.
          </span>
        </h1>
        <p className="hero-description">
          <span className="hero-desktop-title">
            Biznesingizni internetda aniq, zamonaviy va ishonchli namoyish
            etishga yordam beradigan landing page va veb-sahifalar.
          </span>
          <span className="hero-mobile-title">
            Tushunarli taklif, qulay foydalanish va professional ko‘rinish.
            Barchasi bir sahifada.
          </span>
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
      <figure className="hero-visual">
        <Image
          src={heroArtwork}
          alt=""
          sizes="(min-width: 1024px) 48vw, 100vw"
          preload
          quality={85}
        />
        <figcaption>Raqamli aniqlik. Konseptual vizual.</figcaption>
      </figure>
    </section>
  );
}
