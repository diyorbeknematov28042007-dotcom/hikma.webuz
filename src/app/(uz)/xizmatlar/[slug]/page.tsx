import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { findService, servicePages } from "@/lib/service-pages";
import { getService, getServicePages } from "@/lib/localized-content";
import { interfaceCopy } from "@/lib/interface-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";
import { siteOrigin, telegramUrl } from "@/lib/site";
import { ServicePlatformIcon } from "@/components/ServicePlatformIcon";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  if (!service) notFound();
  return pageMetadata(service.heading, service.seoDescription, service.href);
}

export function ServicePageContent({ slug, locale = "uz" }: { slug: string; locale?: Locale }) {
  const service = getService(locale, slug);
  if (!service) notFound();
  const copy = interfaceCopy(locale).details;
  const localizedServices = getServicePages(locale);
  const crumbs = [
    { label: copy.home, href: localePath(locale, "/") },
    { label: copy.services, href: localePath(locale, "/xizmatlar") },
    { label: service.title, href: service.href },
  ];
  return (
    <InnerPage locale={locale}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${siteOrigin()}${service.href}#service`,
              name: service.heading,
              serviceType: service.title,
              description: service.seoDescription,
              url: `${siteOrigin()}${service.href}`,
              provider: {
                "@id": `${siteOrigin()}/#organization`,
                "@type": "Organization",
                name: "HIKMA",
                url: `${siteOrigin()}/`,
              },
            },
            breadcrumbStructuredData(crumbs),
          ],
        }}
      />
      <div className="container detail-page">
        <Breadcrumbs items={crumbs} locale={locale} />
        <header className="detail-hero detail-hero-with-sticker">
          <div className="detail-hero-copy">
            <p className="eyebrow">HIKMA / {service.category}</p>
            <h1>
              {service.heading}
              <span className="detail-title-dot">.</span>
            </h1>
            <p className="detail-lead">{service.intro}</p>
            <div className="detail-actions">
              <Link href={`${localePath(locale, "/")}#aloqa`} className="button">
                {copy.discuss}{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <a
                href={telegramUrl}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.telegram}{" "}
                <span className="sr-only">({copy.newTab})</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="detail-hero-art">
            <Image
              src={service.sticker}
              alt={`${service.title} ${copy.sticker}`}
              width={512}
              height={512}
              sizes="(min-width: 900px) 320px, 220px"
              className="detail-hero-sticker"
              loading="eager"
              fetchPriority="high"
            />
            <ServicePlatformIcon service={service.id} />
          </div>
        </header>
        <section
          className="detail-section detail-intro"
          aria-labelledby="audience-title"
        >
          <h2 id="audience-title">{copy.audience}</h2>
          <p>{service.audience}</p>
        </section>
        <section className="detail-section" aria-labelledby="scope-title">
          <p className="eyebrow">{copy.scope}</p>
          <h2 id="scope-title">{copy.deliverables}</h2>
          <div className="deliverables-grid">
            {service.deliverables.map((item, index) => (
              <article key={item.title}>
                <span className="detail-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="detail-note">
            {copy.scopeNote}
          </p>
        </section>
        <section className="detail-section" aria-labelledby="steps-title">
          <h2 id="steps-title">{copy.steps}</h2>
          <ol className="detail-steps">
            {service.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="detail-section detail-preparation"
          aria-labelledby="prepare-title"
        >
          <div>
            <p className="eyebrow">{copy.firstCall}</p>
            <h2 id="prepare-title">{copy.preparation}</h2>
          </div>
          <ul>
            {service.preparation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {service.id === "landing" && (
          <aside
            className="detail-example"
            aria-label={copy.sample}
          >
            <div>
              <p className="eyebrow">{copy.ownProject}</p>
              <h2>Hikmaweb.uz</h2>
              <p>
                {copy.sampleBody}
              </p>
            </div>
            <Link href={localePath(locale, "/loyihalar")} className="text-link">
              {copy.sampleLink}{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </aside>
        )}
        <section className="detail-section" aria-labelledby="questions-title">
          <h2 id="questions-title">{copy.questions}</h2>
          <div className="faq-list detail-faq">
            {service.faqs.map((faq) => (
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
        <section className="detail-section" aria-labelledby="related-title">
          <h2 id="related-title">{copy.related}</h2>
          <nav aria-label={copy.related} className="related-services">
            {localizedServices
              .filter((item) => item.id !== service.id)
              .map((item) => (
                <Link key={item.id} href={item.href}>
                  {item.title}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
          </nav>
        </section>
      </div>
    </InnerPage>
  );
}

export default async function ServicePage({ params }: Props) {
  return <ServicePageContent slug={(await params).slug} />;
}
