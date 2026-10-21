import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { getServicePages } from "@/lib/localized-content";
import { interfaceCopy } from "@/lib/interface-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Raqamli xizmatlar",
  "HIKMA xizmatlari: landing page yaratish, Telegram bot ishlab chiqish, Instagram Ads va Telegram Ads reklamasini sozlash. Vazifangizga mos yechimni tanlang.",
  "/xizmatlar",
);
export function ServiceIndexContent({ locale = "uz" }: { locale?: Locale }) {
  const copy = interfaceCopy(locale).details;
  const servicePages = getServicePages(locale);
  const crumbs = [
    { label: copy.home, href: localePath(locale, "/") },
    { label: copy.services, href: localePath(locale, "/xizmatlar") },
  ];
  return (
    <InnerPage locale={locale}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          ...breadcrumbStructuredData(crumbs),
        }}
      />
      <div className="container detail-page">
        <Breadcrumbs items={crumbs} locale={locale} />
        <header className="detail-hero">
          <p className="eyebrow">HIKMA / {copy.services}</p>
          <h1>{copy.directoryTitle}</h1>
          <p className="detail-lead">{copy.directoryIntro}</p>
        </header>
        <div className="service-directory">
          {servicePages.map((service, index) => (
            <article key={service.id}>
              <span className="detail-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h2>
                  <Link href={service.href}>{service.heading}</Link>
                </h2>
                <p>{service.intro}</p>
                <Link className="text-link" href={service.href}>
                  {service.title} {copy.directoryMore}{" "}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <section className="detail-example" aria-labelledby="choose-title">
          <div>
            <h2 id="choose-title">
              {copy.directoryQuestion}
            </h2>
            <p>
              {copy.directoryAnswer}
            </p>
          </div>
          <Link className="button" href={`${localePath(locale, "/")}#aloqa`}>
            {copy.discuss}{" "}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </InnerPage>
  );
}

export default function ServiceIndex() {
  return <ServiceIndexContent />;
}
