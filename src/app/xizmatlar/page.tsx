import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { servicePages } from "@/lib/service-pages";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Raqamli xizmatlar",
  "HIKMA xizmatlari: landing page yaratish, Telegram bot ishlab chiqish, Instagram Ads va Telegram Ads reklamasini sozlash. Vazifangizga mos yechimni tanlang.",
  "/xizmatlar",
);
const crumbs = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Xizmatlar", href: "/xizmatlar" },
];

export default function ServiceIndex() {
  return (
    <InnerPage>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          ...breadcrumbStructuredData(crumbs),
        }}
      />
      <div className="container detail-page">
        <Breadcrumbs items={crumbs} />
        <header className="detail-hero">
          <p className="eyebrow">HIKMA / Xizmatlar</p>
          <h1>
            Vazifangizga mos
            <br />
            raqamli yechim.
          </h1>
          <p className="detail-lead">
            Biznesingizni tanishtirish, kundalik ishlarni soddalashtirish yoki
            yangi auditoriyaga chiqish. Maqsadingizdan boshlaymiz.
          </p>
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
                  {service.title} haqida batafsil{" "}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <section className="detail-example" aria-labelledby="choose-title">
          <div>
            <h2 id="choose-title">
              Qaysi xizmat kerakligini hali bilmaysizmi?
            </h2>
            <p>
              Biznesingizdagi vazifani yozing. Suhbat davomida kerakli yo‘nalish
              va ish hajmini aniqlashtiramiz.
            </p>
          </div>
          <Link className="button" href="/#aloqa">
            Loyihani muhokama qilish{" "}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </InnerPage>
  );
}
