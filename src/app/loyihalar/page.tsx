import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { InnerPage, Breadcrumbs } from "@/components/InnerPage";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbStructuredData, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Loyihalar — Hikmaweb.uz sayti",
  "HIKMA’ning o‘z brendi uchun yaratilgan hikmaweb.uz loyihasi: mobilga mos dizayn, xizmat sahifalari, murojaat yo‘li va SEO asoslari. Amaldagi ish bilan tanishing.",
  "/loyihalar",
);
const crumbs = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Loyihalar", href: "/loyihalar" },
];
const work = [
  {
    title: "Brendga mos ko‘rinish",
    body: "Qora va emerald ranglar, original HIKMA logotipi, o‘qilishi qulay matn va xizmatlarni tez tanlash imkoniyati. Bosh sahifadagi harakatli kompozitsiya xizmat bo‘limlariga olib boradi.",
  },
  {
    title: "Mobil foydalanuvchi yo‘li",
    body: "Telefon va desktop uchun mos tuzilma, mobil menyu va aniq murojaat tugmalari. Harakatni kamaytirish sozlamasi yoqilgan qurilmalarda animatsiyasiz ko‘rinish saqlanadi.",
  },
  {
    title: "Xizmatlar va murojaat",
    body: "Landing page, Telegram bot, Instagram Ads va Telegram Ads uchun alohida sahifalar. Loyiha tavsifini tayyorlash, nusxalash va rasmiy Telegram yoki Instagram orqali bog‘lanish yo‘li.",
  },
  {
    title: "Qidiruv uchun texnik asos",
    body: "Sahifalarga mos sarlavha va tavsiflar, canonical havolalar, sitemap, robots.txt hamda brend va xizmatlarni tushuntiradigan strukturali ma’lumotlar.",
  },
];

export default function ProjectsPage() {
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
          <p className="eyebrow">HIKMA / Loyihalar</p>
          <h1>
            Amalda ko‘rish
            <br />
            mumkin bo‘lgan ish.
          </h1>
          <p className="detail-lead">
            Loyihaning vazifasi, tanlangan yechim va bajarilgan ishlar. Birinchi
            namuna — o‘z brendimizning sayti.
          </p>
        </header>
        <article id="hikmaweb" className="case-study">
          <header className="case-heading">
            <p className="eyebrow">O‘z brendimiz loyihasi / Veb-sayt</p>
            <h2>Hikmaweb.uz</h2>
            <p>HIKMA xizmatlarini bitta raqamli manzilda tanishtirish.</p>
            <div className="detail-actions">
              <Link href="/" className="button">
                Saytni ko‘rish <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <a
                className="text-link"
                href="https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ochiq kod{" "}
                <span className="sr-only">(yangi sahifada ochiladi)</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </header>
          <section
            className="detail-section detail-intro"
            aria-labelledby="task-title"
          >
            <h3 id="task-title">Vazifa</h3>
            <p>
              HIKMA’ning amaldagi to‘rtta xizmatini tushunarli ko‘rsatish, brend
              uslubini saqlash va tashrifchiga o‘z loyihasi haqida murojaat
              qilish uchun qulay yo‘l yaratish.
            </p>
          </section>
          <section className="detail-section" aria-labelledby="work-title">
            <h3 id="work-title">Bajarilgan ishlar</h3>
            <div className="deliverables-grid">
              {work.map((item, index) => (
                <div key={item.title}>
                  <span className="detail-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>
          <section
            className="detail-section detail-intro"
            aria-labelledby="result-title"
          >
            <h3 id="result-title">Amaldagi natija</h3>
            <div>
              <p>
                Sayt ochiq ishlayapti. Xizmatlar bilan tanishish, loyiha
                tavsifini tayyorlash va HIKMA’ning aloqa kanallariga o‘tish
                mumkin.
              </p>
            </div>
          </section>
        </article>
        <section
          className="detail-example"
          aria-labelledby="your-project-title"
        >
          <div>
            <h2 id="your-project-title">Sizning loyihangiz qanday bo‘ladi?</h2>
            <p>
              Taklifingiz va auditoriyangizni tushunib, sizga mos sahifa
              tuzilmasi va funksiyalarni kelishamiz.
            </p>
          </div>
          <Link className="text-link" href="/xizmatlar/landing-page">
            Landing page xizmati <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </InnerPage>
  );
}
