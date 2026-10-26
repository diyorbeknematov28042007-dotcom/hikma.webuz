import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";
import { interfaceCopy } from "@/lib/interface-copy";
import { localePath, type Locale } from "@/lib/i18n";

export const metadata = pageMetadata(
  "Loyihalar — Hikmaweb.uz sayti",
  "HIKMA’ning o‘z brendi uchun yaratilgan hikmaweb.uz loyihasi: mobilga mos dizayn, xizmat sahifalari, murojaat yo‘li va SEO asoslari. Amaldagi ish bilan tanishing.",
  "/loyihalar",
);
export function ProjectsContent({ locale = "uz" }: { locale?: Locale }) {
  const copy = interfaceCopy(locale);
  const c = copy.projects;
  const crumbs = [
    { label: copy.details.home, href: localePath(locale, "/") },
    { label: copy.details.projects, href: localePath(locale, "/loyihalar") },
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
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="detail-lead">{c.intro}</p>
        </header>
        <article id="hikmaweb" className="case-study">
          <header className="case-heading">
            <p className="eyebrow">{c.caseEyebrow}</p>
            <h2>Hikmaweb.uz</h2>
            <p>{c.caseIntro}</p>
            <div className="detail-actions">
              <Link href={localePath(locale, "/")} className="button">
                {c.view} <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <a
                className="text-link"
                href="https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.source}{" "}
                <span className="sr-only">({copy.details.newTab})</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </header>
          <section
            className="detail-section detail-intro"
            aria-labelledby="task-title"
          >
            <h3 id="task-title">{c.task}</h3>
            <p>{c.taskBody}</p>
          </section>
          <section className="detail-section" aria-labelledby="work-title">
            <h3 id="work-title">{c.work}</h3>
            <div className="deliverables-grid">
              {c.workItems.map(([title, body], index) => (
                <div key={title}>
                  <span className="detail-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>
          <section
            className="detail-section detail-intro"
            aria-labelledby="result-title"
          >
            <h3 id="result-title">{c.result}</h3>
            <div>
              <p>{c.resultBody}</p>
            </div>
          </section>
        </article>
        <section className="portfolio-concept" aria-labelledby="advokat-concept-title">
          <div>
            <p className="eyebrow">{c.conceptEyebrow}</p>
            <h2 id="advokat-concept-title">{c.conceptTitle}</h2>
            <p>{c.conceptDescription}</p>
            <Link className="button" href={localePath(locale, "/advokat")}>
              {c.conceptView} <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <Image src="/images/advokat/01-hero-legal-folio.webp" alt="" width={1600} height={1600} sizes="(max-width: 768px) 75vw, 360px" loading="lazy" />
        </section>
        <section className="portfolio-concept portfolio-concept--interior" aria-labelledby="interior-concept-title">
          <div>
            <p className="eyebrow">{c.interiorEyebrow}</p>
            <h2 id="interior-concept-title">{c.interiorTitle}</h2>
            <p>{c.interiorDescription}</p>
            <Link className="button" href={localePath(locale, "/interyer")}>
              {c.interiorView} <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <Image src="/images/interyer/hero.webp" alt="" width={1672} height={941} sizes="(max-width: 768px) 100vw, 520px" loading="lazy" />
        </section>
        <section
          className="detail-example"
          aria-labelledby="your-project-title"
        >
          <div>
            <h2 id="your-project-title">{c.nextTitle}</h2>
            <p>{c.nextBody}</p>
          </div>
          <Link className="text-link" href={localePath(locale, "/xizmatlar/landing-page")}>
            {c.nextLink} <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </InnerPage>
  );
}

export default function ProjectsPage() {
  return <ProjectsContent />;
}
