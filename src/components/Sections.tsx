import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import { values, processSteps, faqs } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";
import { Reveal } from "./Reveal";
import { LogoAssembly } from "./Brand";
export function Services() {
  return (
    <section
      id="xizmatlar"
      className="section container"
      aria-labelledby="services-title"
    >
      <Reveal>
        <h2 id="services-title" className="section-title">
          Sizga kerakli
          <br className="desktop-break" /> raqamli yechim.
        </h2>
        <p className="section-description">
          Tanishtiring. Avtomatlashtiring. Auditoriyangizga yetib boring.
        </p>
      </Reveal>
      <Reveal className="services-grid" stagger>
        {servicePages.map((service, index) => (
          <article
            key={service.title}
            className={`service service-${index + 1}`}
            id={`service-${service.id}`}
          >
            <div className="service-top">
              <span className="service-category">{service.category}</span>
              <Image
                src={service.sticker}
                alt=""
                width={512}
                height={512}
                sizes="(min-width: 1024px) 144px, 120px"
                className="service-sticker"
                loading="lazy"
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {service.note && <p className="service-note">{service.note}</p>}
            <Link
              className="service-link"
              href={service.href}
              aria-label={`${service.title} haqida batafsil`}
            >
              <span>Xizmat haqida batafsil</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
export function Approach() {
  return (
    <section
      id="yondashuv"
      className="section approach"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">Yondashuvimiz</p>
          <h2 className="section-title" id="approach-title">
            Bir maqsad.
            <br className="desktop-break" /> Bir-birini to‘ldiradigan yechimlar.
          </h2>
          <p className="section-description">
            Sayt, bot va reklama mijozingizga kerakli ma’lumotni topish va
            keyingi qadamni tushunishga yordam bersin.
          </p>
        </Reveal>
        <div className="values-grid">
          {values.map((value, index) => (
            <Reveal className="value" key={value.title}>
              <span className="value-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section
      id="jarayon"
      className="section container"
      aria-labelledby="process-title"
    >
      <Reveal>
        <h2 id="process-title" className="section-title">
          G‘oyadan amaliy yechimgacha.
          <br />
          <span className="muted-title">Aniq bosqichlar.</span>
        </h2>
      </Reveal>
      <ol className="process-list">
        {processSteps.map((step, index) => (
          <li key={step.label}>
            <Reveal>
              <div className="process-rail">
                <span className="process-number">0{index + 1}</span>
                <span className="process-label">{step.label}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="process-note">
        Aniq ish hajmi va muddat loyiha talablariga qarab kelishiladi.
      </p>
    </section>
  );
}
export function About() {
  return (
    <section
      id="haqimizda"
      className="section container"
      aria-labelledby="about-title"
    >
      <div className="about-grid">
        <Reveal className="about-brand">
          <LogoAssembly />
          <p>
            Millat uchun
            <br /> zamonaviy yechimlar.
          </p>
        </Reveal>
        <Reveal className="about-copy">
          <h2 id="about-title" className="section-title">
            Bir brend.
            <br />
            Zamonaviy yechimlarga
            <br className="desktop-break" /> keng qarash.
          </h2>
          <p>
            HIKMA raqamli xizmatlar va texnologik g‘oyalarni birlashtiradigan
            brend. Landing page, Telegram bot, Instagram Ads va Telegram Ads
            orqali bizneslarga raqamli ishtirokini shakllantirishda yordam
            beramiz.
          </p>
          <p className="about-mission">
            Texnologiya va dizaynni sodda, tushunarli va amaliy yechimlarga
            aylantirish.
          </p>
          <p>
            Sun’iy intellekt, avtomatlashtirish va startaplar ekotizimi
            brendimizning kengroq qarashiga kiradi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section container faq" aria-labelledby="faq-title">
      <Reveal>
        <h2 id="faq-title" className="section-title">
          Ko‘p so‘raladigan
          <br /> savollar.
        </h2>
      </Reveal>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>
              {faq.q}
              <CaretDown size={20} aria-hidden="true" />
            </summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
