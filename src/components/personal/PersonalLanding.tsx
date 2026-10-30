import Image from "next/image";
import localFont from "next/font/local";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import { PersonalReveal as Reveal } from "@/components/personal/PersonalReveal";
import { PersonalAccordion } from "@/components/personal/PersonalAccordion";
import { StructuredData } from "@/components/StructuredData";
import { PersonalMenu } from "@/components/personal/PersonalMenu";
import { telegramUrl } from "@/lib/site";
import "../../app/personal.css";
import { localePath, type Locale } from "@/lib/i18n";
import { personalText, personalDescription } from "@/lib/personal-copy";
import { PersonalLanguageSwitch } from "./PersonalLanguageSwitch";
import { PersonalEffects, MagneticLink } from "./PersonalEffects";
import { PersonalHeading } from "./PersonalHeading";
import { PersonalAtmosphere, PersonalAmbientToggle } from "./PersonalAtmosphere";

const manrope = localFont({
  src: "../../../public/fonts/manrope-latin.woff",
  display: "swap",
  variable: "--dn-font",
  weight: "200 800",
});

const origin = "https://hikmaweb.uz";
const github = "https://github.com/diyorbeknematov28042007-dotcom";

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

export function PersonalLanding({ locale = "uz" }: { locale?: Locale }) {
  const t = (text: string) => personalText(locale, text);
  const path = localePath(locale, "/diyorbeknematov");
  const description = t(personalDescription);
  return (
    <div className={`dn-page ${manrope.variable}`} lang={locale}>
      <PersonalAtmosphere />
      <PersonalEffects />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Diyorbek Ne’matov",
        url: `${origin}${path}`,
        image: `${origin}/images/diyorbek/portrait-hero.webp`,
        jobTitle: t("Huquq talabasi, LegalTech product builder"),
        description,
        sameAs: [github],
        affiliation: { "@type": "CollegeOrUniversity", name: t("Toşkent davlat yuridik universiteti") },
        knowsAbout: ["LegalTech", "Huquqiy tadqiqot", "Jinoyat huquqi", "Fuqarolik huquqi", "Ma’muriy huquq", "Product building"].map(t),
      }} />

      <header className="dn-header dn-container">
        <a className="dn-wordmark" href="#main" aria-label={t("Diyorbek Ne’matov, boş sahifa")}>
          <span className="dn-monogram" aria-hidden="true">{t("d")}<span>{t("n")}</span>{t(".")}</span>
          <span>{t("Diyorbek")}<br />{t("Ne’matov")}</span>
        </a>
        <nav className="dn-nav" aria-label={t("Asosiy navigatsiya")}>
          <a className="dn-nav-featured" href="#haqimda">{t("Men haqimda")}</a>
          <a href="#konikmalar">{t("Könikmalar")}</a>
          <a href="#yuristim">{t("YURISTIM")}</a>
          <a href="#tajriba">{t("Tajriba")}</a>
        </nav>
        <div className="dn-header-actions">
          <PersonalLanguageSwitch current={locale} />
          <a href={github} target="_blank" rel="noopener noreferrer" className="dn-icon-button dn-github" aria-label={t("GitHub profilim (yangi oynada)")}>
            <GithubLogo size={20} aria-hidden="true" />
          </a>
          <a href="#aloqa" className="dn-button dn-button-white dn-header-contact">{t("Boğlaniş")}<ArrowUpRight size={17} aria-hidden="true" /></a>
          <PersonalMenu labels={{open:t("Menyuni oçiş"),close:t("Menyuni yopiş"),navigation:t("Mobil navigatsiya"),about:t("Men haqimda"),skills:t("Könikmalar"),experience:t("Tajriba"),contact:t("Boğlaniş")}} />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="dn-hero" aria-labelledby="dn-name">
          <div className="dn-stage">
            <div className="dn-hero-light" aria-hidden="true" />
            <div className="dn-hero-letter" aria-hidden="true">{t("n")}</div>
            <div className="dn-hero-intro">
              <p className="dn-hero-role">{t("Huquq talabasi / Product builder")}</p>
              <PersonalHeading as="p" className="dn-hero-statement" lines={[t("Huquqni anglaş."),t("Texnologiya bilan"),t("yeçim yaratiş.")]} accentIndices={[2]} hero />
              <p className="dn-hero-bio">{t("TDYU Ommaviy huquq, 3-kurs.")}<br />{t("YURISTIM asosçisi.")}</p>
            </div>

            <div className="dn-portrait">
              <Image src="/images/diyorbek/portrait-hero.webp" alt={t("Diyorbek Ne’matov")} width={1200} height={1499} sizes="(max-width: 767px) 100vw, 52vw" unoptimized preload />
            </div>

            <a href="#yuristim" className="dn-hero-project">
              <div><span>{t("HUQUQ + TEXNOLOGIYA")}</span><strong>{t("LegalTech")}</strong><p>{t("Huquqiy jarayondan")}<br />{t("raqamli mahsulotga.")}</p><ArrowUpRight size={21} aria-hidden="true" /></div>
              <Sticker name="legaltech-product" alt="" sizes="140px" />
            </a>

            <PersonalHeading as="h1" id="dn-name" className="dn-name" lines={[t("Diyorbek"),t("Ne’matov")]} accentIndices={[]} hero />
            <MagneticLink href="#aloqa" className="dn-button dn-button-orange dn-hero-contact">{t("Boğlaniş")}<ArrowUpRight size={20} aria-hidden="true" /></MagneticLink>
          </div>

          <div className="dn-shortcuts">
            <a className="dn-course-card" href="#tajriba"><span>{t("3")}<span>{t("-kurs")}</span></span><p>{t("Toşkent davlat")}<br />{t("yuridik universiteti")}</p><ArrowDownRight size={21} aria-hidden="true" /></a>
            <a className="dn-profile-card" href="#haqimda"><div><strong>{t("Profil")}</strong><span>{t("Huquq / LegalTech")}</span><span className="dn-profile-view">{t("Men haqimda")}<ArrowUpRight size={16} aria-hidden="true" /></span></div><Sticker name="education" alt="" sizes="130px" /></a>
          </div>
        </section>

        <section className="dn-about dn-container dn-section" id="haqimda" aria-labelledby="dn-about-title">
          <p className="dn-section-label">{t("Men haqimda")}</p>
          <div className="dn-about-content">
            <PersonalHeading as="h2" id="dn-about-title" lines={[t("Huquqni tuşuniş."),t("Insonlar uçun qulay"),t("yeçimlar yaratiş.")]} accentIndices={[1]} />
            <div className="dn-about-copy">
              <p>{t("Toşkent davlat yuridik universitetida Ommaviy huquq yönalişida tahsil olaman. Huquqiy vaziyatlarni tahlil qiliş va asosli pozitsiya şakllantiriş ustida işlayman.")}</p>
              <p>{t("LegalTech va raqamli vositalar yordamida huquqiy jarayonlarni soddalaştirişga qiziqaman. Huquqiy mantiqni foydalanuvçiga tuşunarli mahsulot tajribasiga aylantiraman.")}</p>
            </div>
          </div>
        </section>

        <section className="dn-legal dn-container dn-section" id="konikmalar" aria-labelledby="dn-legal-title">
          <div className="dn-legal-visual">
            <PersonalHeading as="h2" id="dn-legal-title" lines={[t("Huquqiy fikr."),t("Aniq asos.")]} accentIndices={[1]} />
            <Sticker name="legal-research" alt={t("Huquqiy tadqiqot ramzi: kitob, hujjatlar va lupa")} />
            <p>{t("Manbani tekşiriş.")}<br />{t("Faktlarni tahlil qiliş.")}<br />{t("Pozitsiyani asoslaş.")}</p>
          </div>
          <Reveal className="dn-legal-content">
            <p className="dn-legal-intro">{t("Qiziqiş yönalişlarim va amaliy könikmalarim.")}</p>
            <div className="dn-accordions">
              {legalAreas.map((area, index) => (
                <PersonalAccordion key={area.title} title={t(area.title)} text={t(area.text)} note={t(area.note)} defaultOpen={index === 0} />
              ))}
            </div>
            <div className="dn-method" aria-label={t("Huquqiy tahlil usuli")}><span>{t("Fakt")}</span><ArrowRight size={17} aria-hidden="true" /><span>{t("Norma")}</span><ArrowRight size={17} aria-hidden="true" /><span>{t("Tahlil")}</span><ArrowRight size={17} aria-hidden="true" /><span>{t("Xulosa")}</span></div>
          </Reveal>
        </section>

        <section className="dn-project dn-container dn-section" id="yuristim" aria-labelledby="dn-project-title">
          <div>
            <p className="dn-section-label">{t("Tanlangan loyiha")}</p>
            <PersonalHeading as="h2" id="dn-project-title" className="dn-section-title" lines={[t("Huquq va texnologiya"),t("bir mahsulotda.")]} accentIndices={[1]} />
          </div>
          <Reveal className="dn-project-showcase">
            <div className="dn-project-copy">
              <p className="dn-project-type">{t("LegalTech platforma")}</p>
              <h3>{t("YURISTIM")}<span>{t(".")}</span></h3>
              <p className="dn-project-description">{t("AI konsultatsiya, yuristlar marketplace’i va huquqiy xizmat jarayonlarini yagona mahsulot tizimiga birlaştiriş.")}</p>
              <div className="dn-project-features"><span>{t("AI konsultatsiya")}</span><span>{t("Marketplace")}</span><span>{t("Verifikatsiya")}</span></div>
              <p className="dn-project-role">{t("Mening rolim")}<span>{t("Founder / Product builder")}</span></p>
            </div>
            <div className="dn-project-art"><Sticker name="legaltech-product" alt={t("YURISTIM konsepsiyasi: adolat tarozisi va özaro boğlangan raqamli modullar")} /></div>
          </Reveal>
          <div className="dn-project-notes">
            <div><h3>{t("Jarayondan mahsulotga")}</h3><p>{t("Yuridik xizmat jarayonlarini user flow va texnik biznes-qoidalarga aylantiriş.")}</p></div>
            <div><h3>{t("Huquqiy arxitektura")}</h3><p>{t("Ommaviy oferta, foydalanuvçi roziligi va marketplace qoidalarini integratsiya qiliş.")}</p></div>
            <div><h3>{t("Rollar va ruxsatlar")}</h3><p>{t("Role-based access va huquqiy çeklovlarni mahsulot arxitekturasida hisobga oliş.")}</p></div>
          </div>
        </section>

        <section className="dn-tech dn-container dn-section" aria-labelledby="dn-tech-title">
          <div className="dn-tech-intro">
            <PersonalHeading as="h2" id="dn-tech-title" className="dn-section-title" lines={[t("Ğoyani işlaydigan"),t("mahsulotga.")]} accentIndices={[1]} />
            <p>{t("Huquqiy bilimlarimni dasturlaş, sun’iy intellekt va raqamli vositalar bilan birga qöllayman.")}</p>
            <Sticker name="digital-builder" alt={t("Noutbuk va raqamli mahsulot interfeyslari tasviri")} />
          </div>
          <div className="dn-tool-groups">
            {tools.map((group) => (
              <div className="dn-tool-group" key={group.title}><h3>{t(group.title)}</h3><ul>{group.items.map((item) => <li key={item}>{t(item)}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <section className="dn-experience dn-container dn-section" id="tajriba" aria-labelledby="dn-experience-title">
          <div><PersonalHeading as="h2" id="dn-experience-title" className="dn-section-title" lines={[t("Örganiş. Qöllaş."),t("Tajriba orttiriş.")]} accentIndices={[1]} /></div>
          <Reveal className="dn-academy">
            <div><span className="dn-academy-category">{t("Ta’lim")}</span><h3>{t("Toşkent davlat")}<br />{t("yuridik universiteti")}</h3><p>{t("Ommaviy huquq, bakalavr")}</p><span className="dn-academy-year">{t("3-kurs")}</span></div>
            <Sticker name="education" alt={t("Ta’lim ramzi: kitoblar va akademik qalpoq")} />
          </Reveal>
          <Reveal className="dn-experience-grid" stagger>
            <article className="dn-experience-card dn-mentoring"><Sticker name="mentoring" alt={t("Bilim ulaşiş ramzi: kitob va muloqot kartalari")} /><div><p className="dn-card-meta">{t("3 oy / “Ideal”")}</p><h3>{t("Yordamçi öqituvçi")}</h3><p>{t("Materiallarni tuşuntiriş, öquvçilar bilan işlaş va taşkiliy vazifalar.")}</p></div></article>
            <article className="dn-experience-card dn-achievement"><Sticker name="achievement" alt={t("Kutubxona kubogi yutuğini ifodalovçi dekorativ kubok")} /><div><p className="dn-card-meta">{t("Yutuq / 2026")}</p><h3>{t("Kutubxona kubogi")}<br />{t("ğolibi")}</h3><p>{t("TDYU Public Law kutubxonasi kubogi.")}</p></div></article>
          </Reveal>
          <div className="dn-language-row">
            <h3>{t("Tillar")}</h3><dl><div><dt>{t("Özbek tili")}</dt><dd>{t("Ona tili")}</dd></div><div><dt>{t("Ingliz tili")}</dt><dd>{t("B2-C1")}</dd></div><div><dt>{t("Rus tili")}</dt><dd>{t("B1")}</dd></div></dl>
          </div>
          <div className="dn-principles"><p>{t("Analitik fikrlaş")}</p><span aria-hidden="true">{t("/")}</span><p>{t("Mas’uliyat")}</p><span aria-hidden="true">{t("/")}</span><p>{t("Aniq kommunikatsiya")}</p><span aria-hidden="true">{t("/")}</span><p>{t("Tez örganiş")}</p></div>
        </section>

        <section className="dn-contact" id="aloqa" aria-labelledby="dn-contact-title">
          <div className="dn-contact-inner dn-container">
            <div><p className="dn-section-label">{t("Hamkorlik uçun")}</p><PersonalHeading as="h2" id="dn-contact-title" lines={[t("Birga yeçim"),t("yarataylik.")]} accentIndices={[1]} /></div>
            <div className="dn-contact-links"><p>{t("LegalTech, raqamli mahsulot yoki hamkorlik haqida gaplaşamiz. HIKMA orqali murojaat qoldirişingiz mumkin.")}</p><MagneticLink className="dn-button dn-button-orange" href={telegramUrl} target="_blank" rel="noopener noreferrer">{t("HIKMA orqali yoziş")}<ArrowUpRight size={20} aria-hidden="true" /></MagneticLink><a className="dn-text-link" href={github} target="_blank" rel="noopener noreferrer"><GithubLogo size={20} aria-hidden="true" />{t("GitHub profilim")}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>

      <footer className="dn-footer dn-container"><a className="dn-footer-name" href="#main">{t("Diyorbek Ne’matov")}<span>{t("Huquq va LegalTech")}</span></a><div className="dn-footer-meta"><p>{t("© 2026")}</p><PersonalAmbientToggle pauseLabel={t("Fon harakatini töxtatiş")} resumeLabel={t("Fon harakatini yoqiş")} /></div><a className="dn-hikma" href={localePath(locale, "/")}>{t("HIKMA")}<ArrowUpRight size={16} aria-hidden="true" /></a></footer>
    </div>
  );
}
