import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import { getHomeCopy, getHomeLists, getServicePages } from "@/lib/localized-content";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { LogoAssembly } from "./Brand";
export function Services({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const servicePages = getServicePages(locale);
  return (
    <section
      id="xizmatlar"
      className="section container"
      aria-labelledby="services-title"
    >
      <Reveal>
        <h2 id="services-title" className="section-title">
          {copy.servicesTitle}
        </h2>
        <p className="section-description">
          {copy.servicesDescription}
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
              aria-label={`${copy.serviceMore}: ${service.title}`}
            >
              <span>{copy.serviceMore}</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
export function Approach({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const { values } = getHomeLists(locale);
  return (
    <section
      id="yondashuv"
      className="section approach"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">{copy.approachEyebrow}</p>
          <h2 className="section-title" id="approach-title">
            {copy.approachTitle}
          </h2>
          <p className="section-description">
            {copy.approachDescription}
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
export function Process({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const { steps: processSteps } = getHomeLists(locale);
  return (
    <section
      id="jarayon"
      className="section container"
      aria-labelledby="process-title"
    >
      <Reveal>
        <h2 id="process-title" className="section-title">
          {copy.processTitle}
          <br />
          <span className="muted-title">{copy.processAccent}</span>
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
        {copy.processNote}
      </p>
    </section>
  );
}
export function About({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
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
            {copy.tagline}
          </p>
        </Reveal>
        <Reveal className="about-copy">
          <h2 id="about-title" className="section-title">
            {copy.aboutTitle}
          </h2>
          <p>
            {copy.aboutDescription}
          </p>
          <p className="about-mission">
            {copy.aboutMission}
          </p>
          <p>
            {copy.aboutVision}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
export function FAQ({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const { faqs } = getHomeLists(locale);
  return (
    <section className="section container faq" aria-labelledby="faq-title">
      <Reveal>
        <h2 id="faq-title" className="section-title">
          {copy.faqTitle}
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
