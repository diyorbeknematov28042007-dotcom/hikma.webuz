import {
  ArrowUpRight,
  Browser,
  DeviceMobile,
  PlugsConnected,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import {
  services,
  values,
  processSteps,
  faqs,
  primaryCta,
} from "@/lib/content";
import { Reveal } from "./Reveal";
import { LogoAssembly } from "./Brand";
const serviceIcons = [Browser, DeviceMobile, PlugsConnected];
export function Services() {
  return (
    <section
      id="xizmatlar"
      className="section container"
      aria-labelledby="services-title"
    >
      <Reveal>
        <h2 id="services-title" className="section-title">
          Raqamli ishtirokingizni
          <br className="desktop-break" /> kuchaytiradigan yechimlar.
        </h2>
        <p className="section-description">
          Har bir loyiha maqsadi, auditoriyasi va kerakli funksiyalaridan
          boshlanadi.
        </p>
      </Reveal>
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <Reveal
              key={service.title}
              className={`service service-${index + 1}`}
            >
              <div className="service-top">
                <Icon size={32} weight="light" aria-hidden="true" />
                {service.tag && (
                  <span className="service-tag">{service.tag}</span>
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.note && <p className="service-note">{service.note}</p>}
              <a
                className="service-link"
                href="#aloqa"
                aria-label={`${service.title}: ${primaryCta}`}
              >
                <span>{primaryCta}</span>
                <ArrowUpRight size={21} aria-hidden="true" />
              </a>
            </Reveal>
          );
        })}
      </div>
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
            Dizayn chiroyli bo‘lishi bilan
            <br className="desktop-break" /> birga ishlashi ham kerak.
          </h2>
          <p className="section-description">
            Saytning har bir qismi kerakli ma’lumotni topish va keyingi qadamni
            tushunishga yordam berishi kerak.
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
          G‘oyadan tayyor sahifagacha.
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
            HIKMA odamlar va bizneslar uchun raqamli mahsulotlar va xizmatlarni
            rivojlantirishga qaratilgan brend. Bugun asosiy amaliy
            yo‘nalishlarimizdan biri professional veb-sahifalar yaratish.
          </p>
          <p className="about-mission">
            Texnologiya va dizaynni sodda, tushunarli va amaliy yechimlarga
            aylantirish.
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
