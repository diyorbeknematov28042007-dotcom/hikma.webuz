import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function ProjectSpotlight() {
  return (
    <section
      id="loyihalar"
      className="section container"
      aria-labelledby="projects-title"
    >
      <Reveal className="project-spotlight">
        <div>
          <p className="eyebrow">Amaldagi loyiha / O‘z brendimiz uchun</p>
          <h2 id="projects-title" className="section-title">
            HIKMA’ning
            <br />
            raqamli manzili.
          </h2>
          <p className="section-description">
            Hikmaweb.uz — xizmatlarimizni tanishtiradigan va loyiha haqida
            suhbat boshlashga yordam beradigan sayt.
          </p>
          <Link className="text-link" href="/loyihalar">
            Loyiha bilan tanishish <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-facts">
          <span className="project-domain">hikmaweb.uz</span>
          <dl>
            <div>
              <dt>Vazifa</dt>
              <dd>Brend va xizmatlarni aniq tanishtirish</dd>
            </div>
            <div>
              <dt>Yechim</dt>
              <dd>Mobilga mos sayt va xizmat sahifalari</dd>
            </div>
            <div>
              <dt>Murojaat</dt>
              <dd>Loyiha tavsifi va bevosita aloqa kanallari</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
