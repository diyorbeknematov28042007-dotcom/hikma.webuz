import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { findService, servicePages } from "@/lib/service-pages";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";
import { siteOrigin, telegramUrl } from "@/lib/site";

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

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const crumbs = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Xizmatlar", href: "/xizmatlar" },
    { label: service.title, href: service.href },
  ];
  return (
    <InnerPage>
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
        <Breadcrumbs items={crumbs} />
        <header className="detail-hero detail-hero-with-sticker">
          <div className="detail-hero-copy">
            <p className="eyebrow">HIKMA / {service.category}</p>
            <h1>
              {service.heading}
              <span className="detail-title-dot">.</span>
            </h1>
            <p className="detail-lead">{service.intro}</p>
            <div className="detail-actions">
              <Link href="/#aloqa" className="button">
                Loyihani muhokama qilish{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <a
                href={telegramUrl}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegramda bog‘lanish{" "}
                <span className="sr-only">(yangi sahifada ochiladi)</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <Image
            src={service.sticker}
            alt={`${service.title} xizmatini ifodalovchi HIKMA stikeri`}
            width={512}
            height={512}
            sizes="(min-width: 900px) 320px, 220px"
            className="detail-hero-sticker"
            loading="eager"
            fetchPriority="high"
          />
        </header>
        <section
          className="detail-section detail-intro"
          aria-labelledby="audience-title"
        >
          <h2 id="audience-title">Bu xizmat kimga mos?</h2>
          <p>{service.audience}</p>
        </section>
        <section className="detail-section" aria-labelledby="scope-title">
          <p className="eyebrow">Xizmat tarkibi</p>
          <h2 id="scope-title">Nimalarni tayyorlaymiz?</h2>
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
            Yakuniy ish tarkibi, narx va muddat loyiha talablari aniqlangach
            kelishiladi.
          </p>
        </section>
        <section className="detail-section" aria-labelledby="steps-title">
          <h2 id="steps-title">Qanday ishlaymiz?</h2>
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
            <p className="eyebrow">Birinchi suhbat uchun</p>
            <h2 id="prepare-title">Nimalar kerak bo‘ladi?</h2>
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
            aria-label="Amaldagi loyiha namunasi"
          >
            <div>
              <p className="eyebrow">O‘z brendimiz loyihasi</p>
              <h2>Hikmaweb.uz</h2>
              <p>
                Hozir ko‘rib turgan saytingiz: xizmatlar, mobil navigatsiya va
                aniq murojaat yo‘li.
              </p>
            </div>
            <Link href="/loyihalar" className="text-link">
              Bajarilgan ishlarni ko‘rish{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </aside>
        )}
        <section className="detail-section" aria-labelledby="questions-title">
          <h2 id="questions-title">Ko‘p so‘raladigan savollar</h2>
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
          <h2 id="related-title">Boshqa xizmatlar</h2>
          <nav aria-label="Boshqa xizmatlar" className="related-services">
            {servicePages
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
