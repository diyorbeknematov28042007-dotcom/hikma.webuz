import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { getHomeCopy } from "@/lib/localized-content";
import { interfaceCopy } from "@/lib/interface-copy";
import { localePath, type Locale } from "@/lib/i18n";

export function ProjectSpotlight({ locale = "uz" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const concept = interfaceCopy(locale).projects;
  return (
    <section
      id="loyihalar"
      className="section container"
      aria-labelledby="projects-title"
    >
      <Reveal className="project-spotlight">
        <div>
          <p className="eyebrow">{copy.projectEyebrow}</p>
          <h2 id="projects-title" className="section-title">
            {copy.projectTitle}
          </h2>
          <p className="section-description">
            {copy.projectDescription}
          </p>
          <Link className="text-link" href={localePath(locale, "/loyihalar")}>
            {copy.projectLink} <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-facts">
          <span className="project-domain">hikmaweb.uz</span>
          <dl>
            {copy.projectFacts.map(([term, definition]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{definition}</dd>
              </div>
            ))}
          </dl>
          <Link className="project-concept-link" href={localePath(locale, "/advokat")}>
            <span><small>{concept.conceptEyebrow}</small><strong>{concept.conceptView}</strong></span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
