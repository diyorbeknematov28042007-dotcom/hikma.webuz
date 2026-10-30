import type { Metadata, Viewport } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { StructuredData } from "@/components/StructuredData";
import { PersonalMenu } from "@/components/personal/PersonalMenu";
import { telegramUrl } from "@/lib/site";
import "../../personal.css";

const manrope = localFont({
  src: "../../../../public/fonts/manrope-latin.woff",
  display: "swap",
  variable: "--dn-font",
  weight: "200 800",
});

const origin = "https://hikmaweb.uz";
const path = "/diyorbeknematov";
const github = "https://github.com/diyorbeknematov28042007-dotcom";
const description = "Diyorbek Ne’matov: TDYU Ommaviy huquq 3-kurs talabasi, YURISTIM asosçisi va LegalTech product builder. Huquqiy tahlil, AI va raqamli mahsulotlar.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { absolute: "Diyorbek Ne’matov | Huquq va LegalTech" },
  description,
  alternates: { canonical: `${origin}${path}`, languages: { "uz-UZ": `${origin}${path}` } },
  openGraph: {
    type: "profile",
    title: "Diyorbek Ne’matov | Huquq va LegalTech",
    description,
    url: `${origin}${path}`,
    locale: "uz_UZ",
    siteName: "Diyorbek Ne’matov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyorbek Ne’matov | Huquq va LegalTech",
    description,
  },
};

export const viewport: Viewport = { themeColor: "#080808" };

const legalAreas = [
  {
    title: "Jinoyat huquqi",
    text: "Jinoyat tarkibi, ayb şakli, kvalifikatsiya va javobgarlik asoslarini tahlil qiliş. Vaziyatdagi yuridik ahamiyatga ega faktlarni ajratib, tegişli normani aniqlaş.",
    note: "Faktlarni ajratiş va huquqiy baholaş",
  },
  {
    title: "Fuqarolik huquqi",
    text: "Şartnomalar, majburiyatlar, mulkiy munosabatlar va javobgarlik masalalarini tahlil qiliş. Huquqiy risklarni aniqlaş va huquqiy pozitsiyani asoslaş.",
    note: "Şartnoma, majburiyat va mulkiy munosabatlar",
  },
  {
    title: "Ma’muriy huquq",
    text: "Ma’muriy huquq va ma’muriy huquqbuzarliklar doirasida vakolat, tartib-taomil, huquq hamda javobgarlik masalalarini tahlil qiliş.",
    note: "Vakolat va tartib-taomillarni örganiş",
  },
  {
    title: "Huquqiy tadqiqot",
    text: "LexUZ va boşqa birlamçi huquqiy manbalar asosida normativ-huquqiy hujjatlarni topiş, öqiş, özaro soliştiriş va amaldagi holatini tekşiriş. Xulosani tuşunarli matnga aylantiriş.",
    note: "Birlamçi manba va huquqiy argumentatsiya",
  },
];

const tools = [
  { title: "Development", items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js"] },
  { title: "Sun’iy intellekt", items: ["AI", "Prompt Engineering"] },
  { title: "Infratuzilma", items: ["Git", "GitHub", "Vercel", "Railway"] },
  { title: "Raqamli vositalar", items: ["Canva", "CapCut", "Microsoft Word"] },
  { title: "Marketing", items: ["Instagram Ads", "Telegram Ads"] },
];

function Sticker({ name, alt, className = "", sizes = "(max-width: 767px) 80vw, 40vw" }: { name: string; alt: string; className?: string; sizes?: string }) {
  return <Image className={className} src={`/images/diyorbek/${name}.webp`} alt={alt} width={800} height={800} sizes={sizes} unoptimized />;
}

export default function DiyorbekPersonalPage() {
  return (
    <div className={`dn-page ${manrope.variable}`}>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Diyorbek Ne’matov",
        url: `${origin}${path}`,
        image: `${origin}/images/diyorbek/portrait-hero.webp`,
        jobTitle: "Huquq talabasi, LegalTech product builder",
        description,
        sameAs: [github],
        affiliation: { "@type": "CollegeOrUniversity", name: "Toşkent davlat yuridik universiteti" },
        knowsAbout: ["LegalTech", "Huquqiy tadqiqot", "Jinoyat huquqi", "Fuqarolik huquqi", "Ma’muriy huquq", "Product building"],
      }} />

      <header className="dn-header dn-container">
        <a className="dn-wordmark" href="#main" aria-label="Diyorbek Ne’matov, boş sahifa">
          <span className="dn-monogram" aria-hidden="true">d<span>n</span>.</span>
          <span>Diyorbek<br />Ne’matov</span>
        </a>
        <nav className="dn-nav" aria-label="Asosiy navigatsiya">
          <a className="dn-nav-featured" href="#haqimda">Men haqimda</a>
          <a href="#konikmalar">Könikmalar</a>
          <a href="#yuristim">YURISTIM</a>
          <a href="#tajriba">Tajriba</a>
        </nav>
        <div className="dn-header-actions">
          <a href={github} target="_blank" rel="noopener noreferrer" className="dn-icon-button dn-github" aria-label="GitHub profilim (yangi oynada)">
            <GithubLogo size={20} aria-hidden="true" />
          </a>
          <a href="#aloqa" className="dn-button dn-button-white dn-header-contact">Boğlaniş<ArrowUpRight size={17} aria-hidden="true" /></a>
          <PersonalMenu />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="dn-hero" aria-labelledby="dn-name">
          <div className="dn-stage">
            <div className="dn-hero-light" aria-hidden="true" />
            <div className="dn-hero-orbit" aria-hidden="true" />
            <div className="dn-hero-letter" aria-hidden="true">n</div>
            <div className="dn-hero-intro">
              <p className="dn-hero-role">Huquq talabasi / Product builder</p>
              <p className="dn-hero-statement">Huquqni anglaş.<br />Texnologiya bilan<br /><span>yeçim yaratiş.</span></p>
              <p className="dn-hero-bio">TDYU Ommaviy huquq, 3-kurs.<br />YURISTIM asosçisi.</p>
            </div>

            <div className="dn-portrait">
              <Image src="/images/diyorbek/portrait-hero.webp" alt="Diyorbek Ne’matov" width={1200} height={1499} sizes="(max-width: 767px) 100vw, 52vw" unoptimized preload />
            </div>

            <a href="#yuristim" className="dn-hero-project">
              <div><span>HUQUQ + TEXNOLOGIYA</span><strong>LegalTech</strong><p>Huquqiy jarayondan<br />raqamli mahsulotga.</p><ArrowUpRight size={21} aria-hidden="true" /></div>
              <Sticker name="legaltech-product" alt="" sizes="140px" />
            </a>

            <h1 id="dn-name" className="dn-name"><span>Diyorbek</span><span>Ne’matov</span></h1>
            <a href="#aloqa" className="dn-button dn-button-orange dn-hero-contact">Boğlaniş<ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>

          <div className="dn-shortcuts">
            <a className="dn-course-card" href="#tajriba"><span>3<span>-kurs</span></span><p>Toşkent davlat<br />yuridik universiteti</p><ArrowDownRight size={21} aria-hidden="true" /></a>
            <a className="dn-profile-card" href="#haqimda"><div><strong>Profil</strong><span>Huquq / LegalTech</span><span className="dn-profile-view">Men haqimda<ArrowUpRight size={16} aria-hidden="true" /></span></div><Sticker name="education" alt="" sizes="130px" /></a>
          </div>
        </section>

        <section className="dn-about dn-container dn-section" id="haqimda" aria-labelledby="dn-about-title">
          <p className="dn-section-label">Men haqimda</p>
          <Reveal className="dn-about-content">
            <h2 id="dn-about-title">Huquqni tuşuniş.<br /><span>Insonlar uçun qulay</span><br />yeçimlar yaratiş.</h2>
            <div className="dn-about-copy">
              <p>Toşkent davlat yuridik universitetida Ommaviy huquq yönalişida tahsil olaman. Huquqiy vaziyatlarni tahlil qiliş va asosli pozitsiya şakllantiriş ustida işlayman.</p>
              <p>LegalTech va raqamli vositalar yordamida huquqiy jarayonlarni soddalaştirişga qiziqaman. Huquqiy mantiqni foydalanuvçiga tuşunarli mahsulot tajribasiga aylantiraman.</p>
            </div>
          </Reveal>
        </section>

        <section className="dn-legal dn-container dn-section" id="konikmalar" aria-labelledby="dn-legal-title">
          <Reveal className="dn-legal-visual">
            <h2 id="dn-legal-title">Huquqiy fikr.<br /><span>Aniq asos.</span></h2>
            <Sticker name="legal-research" alt="Huquqiy tadqiqot ramzi: kitob, hujjatlar va lupa" />
            <p>Manbani tekşiriş.<br />Faktlarni tahlil qiliş.<br />Pozitsiyani asoslaş.</p>
          </Reveal>
          <Reveal className="dn-legal-content">
            <p className="dn-legal-intro">Qiziqiş yönalişlarim va amaliy könikmalarim.</p>
            <div className="dn-accordions">
              {legalAreas.map((area, index) => (
                <details className="dn-accordion" key={area.title} open={index === 0}>
                  <summary>{area.title}<Plus size={22} aria-hidden="true" /></summary>
                  <div className="dn-accordion-content"><p>{area.text}</p><span>{area.note}</span></div>
                </details>
              ))}
            </div>
            <div className="dn-method" aria-label="Huquqiy tahlil usuli"><span>Fakt</span><ArrowRight size={17} aria-hidden="true" /><span>Norma</span><ArrowRight size={17} aria-hidden="true" /><span>Tahlil</span><ArrowRight size={17} aria-hidden="true" /><span>Xulosa</span></div>
          </Reveal>
        </section>

        <section className="dn-project dn-container dn-section" id="yuristim" aria-labelledby="dn-project-title">
          <Reveal>
            <p className="dn-section-label">Tanlangan loyiha</p>
            <h2 className="dn-section-title" id="dn-project-title">Huquq va texnologiya<br /><span>bir mahsulotda.</span></h2>
          </Reveal>
          <Reveal className="dn-project-showcase">
            <div className="dn-project-copy">
              <p className="dn-project-type">LegalTech platforma</p>
              <h3>YURISTIM<span>.</span></h3>
              <p className="dn-project-description">AI konsultatsiya, yuristlar marketplace’i va huquqiy xizmat jarayonlarini yagona mahsulot tizimiga birlaştiriş.</p>
              <div className="dn-project-features"><span>AI konsultatsiya</span><span>Marketplace</span><span>Verifikatsiya</span></div>
              <p className="dn-project-role">Mening rolim<span>Founder / Product builder</span></p>
            </div>
            <div className="dn-project-art"><Sticker name="legaltech-product" alt="YURISTIM konsepsiyasi: adolat tarozisi va özaro boğlangan raqamli modullar" /></div>
          </Reveal>
          <Reveal className="dn-project-notes" stagger>
            <div><h3>Jarayondan mahsulotga</h3><p>Yuridik xizmat jarayonlarini user flow va texnik biznes-qoidalarga aylantiriş.</p></div>
            <div><h3>Huquqiy arxitektura</h3><p>Ommaviy oferta, foydalanuvçi roziligi va marketplace qoidalarini integratsiya qiliş.</p></div>
            <div><h3>Rollar va ruxsatlar</h3><p>Role-based access va huquqiy çeklovlarni mahsulot arxitekturasida hisobga oliş.</p></div>
          </Reveal>
        </section>

        <section className="dn-tech dn-container dn-section" aria-labelledby="dn-tech-title">
          <Reveal className="dn-tech-intro">
            <h2 className="dn-section-title" id="dn-tech-title">Ğoyani işlaydigan<br /><span>mahsulotga.</span></h2>
            <p>Huquqiy bilimlarimni dasturlaş, sun’iy intellekt va raqamli vositalar bilan birga qöllayman.</p>
            <Sticker name="digital-builder" alt="Noutbuk va raqamli mahsulot interfeyslari tasviri" />
          </Reveal>
          <Reveal className="dn-tool-groups" stagger>
            {tools.map((group) => (
              <div className="dn-tool-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            ))}
          </Reveal>
        </section>

        <section className="dn-experience dn-container dn-section" id="tajriba" aria-labelledby="dn-experience-title">
          <Reveal><h2 className="dn-section-title" id="dn-experience-title">Örganiş. Qöllaş.<br /><span>Tajriba orttiriş.</span></h2></Reveal>
          <Reveal className="dn-academy">
            <div><span className="dn-academy-category">Ta’lim</span><h3>Toşkent davlat<br />yuridik universiteti</h3><p>Ommaviy huquq, bakalavr</p><span className="dn-academy-year">3-kurs</span></div>
            <Sticker name="education" alt="Ta’lim ramzi: kitoblar va akademik qalpoq" />
          </Reveal>
          <Reveal className="dn-experience-grid" stagger>
            <article className="dn-experience-card dn-mentoring"><Sticker name="mentoring" alt="Bilim ulaşiş ramzi: kitob va muloqot kartalari" /><div><p className="dn-card-meta">3 oy / “Ideal”</p><h3>Yordamçi öqituvçi</h3><p>Materiallarni tuşuntiriş, öquvçilar bilan işlaş va taşkiliy vazifalar.</p></div></article>
            <article className="dn-experience-card dn-achievement"><Sticker name="achievement" alt="Kutubxona kubogi yutuğini ifodalovçi dekorativ kubok" /><div><p className="dn-card-meta">Yutuq / 2026</p><h3>Kutubxona kubogi<br />ğolibi</h3><p>TDYU Public Law kutubxonasi kubogi.</p></div></article>
          </Reveal>
          <Reveal className="dn-language-row">
            <h3>Tillar</h3><dl><div><dt>Özbek tili</dt><dd>Ona tili</dd></div><div><dt>Ingliz tili</dt><dd>B2-C1</dd></div><div><dt>Rus tili</dt><dd>B1</dd></div></dl>
          </Reveal>
          <Reveal className="dn-principles"><p>Analitik fikrlaş</p><span aria-hidden="true">/</span><p>Mas’uliyat</p><span aria-hidden="true">/</span><p>Aniq kommunikatsiya</p><span aria-hidden="true">/</span><p>Tez örganiş</p></Reveal>
        </section>

        <section className="dn-contact" id="aloqa" aria-labelledby="dn-contact-title">
          <Reveal className="dn-contact-inner dn-container">
            <div><p className="dn-section-label">Hamkorlik uçun</p><h2 id="dn-contact-title">Birga yeçim<br /><span>yarataylik.</span></h2></div>
            <div className="dn-contact-links"><p>LegalTech, raqamli mahsulot yoki hamkorlik haqida gaplaşamiz. HIKMA orqali murojaat qoldirişingiz mumkin.</p><a className="dn-button dn-button-orange" href={telegramUrl} target="_blank" rel="noopener noreferrer">HIKMA orqali yoziş<ArrowUpRight size={20} aria-hidden="true" /></a><a className="dn-text-link" href={github} target="_blank" rel="noopener noreferrer"><GithubLogo size={20} aria-hidden="true" />GitHub profilim<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          </Reveal>
        </section>
      </main>

      <footer className="dn-footer dn-container"><a className="dn-footer-name" href="#main">Diyorbek Ne’matov<span>Huquq va LegalTech</span></a><p>© 2026</p><a className="dn-hikma" href="/">HIKMA<ArrowUpRight size={16} aria-hidden="true" /></a></footer>
    </div>
  );
}
