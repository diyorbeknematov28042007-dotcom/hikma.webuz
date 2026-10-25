import { modernUzbek, type Locale } from "./i18n";

type LawCopy = {
  concept: string;
  conceptNote: string;
  brandTag: string;
  nav: [string, string, string];
  home: string;
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  explore: string;
  order: string;
  heroCaption: string;
  markers: [string, string, string];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; body: string; image: string; alt: string }[];
  approachEyebrow: string;
  approachTitle: string;
  approachIntro: string;
  steps: { title: string; body: string }[];
  confidential: string;
  questionsEyebrow: string;
  questionsTitle: string;
  questions: { title: string; body: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  ctaSecondary: string;
  footerNote: string;
  projectLink: string;
  newTab: string;
};

const content: Record<Locale, LawCopy> = {
  uz: {
    concept: "HIKMA konsept loyihasi",
    conceptNote: "Bu advokatlik idorasi emas. Sahifa dizayn namunasi sifatida yaratilgan.",
    brandTag: "ADVOKATLIK / NAMUNA",
    nav: ["Xizmatlar", "Yondashuv", "Savollar"],
    home: "HIKMA bosh sahifasi",
    eyebrow: "01 / Advokatlik uchun sahifa namunasi",
    title: "Huquqiy masalada",
    accent: "yo‘lingiz aniq bo‘lsin.",
    lead: "Birinchi suhbatdan keyingi qadamgacha — murakkab vaziyatni tushunarli tartibda ko‘rsatadigan advokatlik sahifasi konsepti.",
    explore: "Yo‘nalishlar bilan tanishing",
    order: "Shunday sahifa buyurtma qilish",
    heroCaption: "Aniqlik. E’tibor. Ishonch.",
    markers: ["Vaziyatni tushunish", "Yo‘nalishni belgilash", "Keyingi qadam"],
    servicesEyebrow: "Yo‘nalishlar / 01—04",
    servicesTitle: "Har bir masala o‘z yechimini talab qiladi.",
    servicesIntro: "Mijoz o‘ziga kerakli yordamni tez topishi uchun xizmatlar qisqa va ravshan ko‘rsatilgan.",
    services: [
      { title: "Huquqiy maslahat", body: "Vaziyatni muhokama qilish, savollarni aniqlashtirish va keyingi qadamlar haqida suhbat.", image: "02-consultation.webp", alt: "Huquqiy maslahatni ifodalovchi suhbat stikeri" },
      { title: "Sudda vakillik", body: "Nizo bilan bog‘liq jarayonni tushuntirish va ish yo‘nalishini belgilashga qaratilgan xizmat namunasi.", image: "03-court-representation.webp", alt: "Sud binosi va ish jildini ifodalovchi stiker" },
      { title: "Hujjatlar bilan ishlash", body: "Shartnoma, murojaat va boshqa hujjatlarni ko‘rib chiqish yo‘nalishini tanishtirish.", image: "04-documents.webp", alt: "Hujjatlar va ruchka stikeri" },
      { title: "Biznes masalalari", body: "Tadbirkorlik faoliyatida uchraydigan huquqiy savollar uchun alohida murojaat yo‘li.", image: "05-business-law.webp", alt: "Biznes binosi va hujjatlar stikeri" },
    ],
    approachEyebrow: "Yondashuv / 03 qadam",
    approachTitle: "Suhbatdan aniq rejagacha.",
    approachIntro: "Yaxshi sahifa mijozga jarayon qanday boshlanishini ham ko‘rsatadi. Bu yerda uch qadamli namunaviy yo‘l tasvirlangan.",
    steps: [
      { title: "Vaziyatni tinglash", body: "Murojaat mazmuni va asosiy savollar aniqlanadi." },
      { title: "Ma’lumotni ko‘rib chiqish", body: "Tegishli hujjatlar va holatlar tartibga solinadi." },
      { title: "Yo‘nalishni tushuntirish", body: "Mumkin bo‘lgan keyingi qadamlar haqida suhbat qilinadi." },
    ],
    confidential: "Muloqotda ishonch va ehtiyotkorlik muhim.",
    questionsEyebrow: "Savollar",
    questionsTitle: "Murojaat qilishdan oldin.",
    questions: [
      { title: "Birinchi suhbat qanday boshlanadi?", body: "Avval masalaning qisqacha mazmuni va kerakli yo‘nalish aniqlanadi. Ushbu sahifa faqat ko‘rgazmali konsept bo‘lgani uchun bu yerda yuridik qabul olib borilmaydi." },
      { title: "Hujjatlarni yuborish kerakmi?", body: "Bu namunada hujjat yuklash funksiyasi yo‘q. Maxfiy fayllarni HIKMA’ga yubormang. Haqiqiy xizmat sahifasida murojaat tartibi advokat bilan kelishiladi." },
      { title: "Natija kafolatlanadimi?", body: "Har bir vaziyat alohida ko‘rib chiqiladi. Ushbu namuna sahifada natija yoki yuridik xizmat va’da qilinmaydi." },
    ],
    ctaEyebrow: "HIKMA / Sizning loyihangiz",
    ctaTitle: "Shunday ta’sirli sahifa sizning amaliyotingizga ham mos keladi.",
    ctaBody: "Bu ko‘rgazmali loyiha HIKMA’ning advokatlik sohasiga mos landing page yondashuvini ko‘rsatadi. O‘z brendingiz va xizmatlaringiz uchun alohida sahifa yaratishni muhokama qilaylik.",
    ctaButton: "HIKMA bilan bog‘lanish",
    ctaSecondary: "Landing page xizmati",
    footerNote: "Dizayn namunasi. HIKMA advokatlik yoki yuridik maslahat xizmati ko‘rsatmaydi.",
    projectLink: "Loyihalarga qaytish",
    newTab: "yangi sahifada ochiladi",
  },
  ru: {
    concept: "Концепт-проект HIKMA",
    conceptNote: "Это не адвокатское бюро. Страница создана как пример дизайна.",
    brandTag: "АДВОКАТ / ПРИМЕР",
    nav: ["Услуги", "Подход", "Вопросы"],
    home: "Главная HIKMA",
    eyebrow: "01 / Пример сайта для адвоката",
    title: "Правовой вопрос?",
    accent: "Начните с ясности.",
    lead: "От первой беседы до следующих шагов — концепция адвокатского сайта, которая делает сложный процесс понятнее.",
    explore: "Посмотреть направления",
    order: "Заказать похожий сайт",
    heroCaption: "Ясность. Внимание. Доверие.",
    markers: ["Понять ситуацию", "Определить направление", "Следующий шаг"],
    servicesEyebrow: "Направления / 01—04",
    servicesTitle: "Каждому вопросу нужен свой подход.",
    servicesIntro: "Услуги изложены кратко и ясно, чтобы посетитель мог быстро найти нужное направление.",
    services: [
      { title: "Правовая консультация", body: "Обсуждение ситуации, уточнение вопросов и разговор о следующих шагах.", image: "02-consultation.webp", alt: "Иллюстрация консультации" },
      { title: "Представительство в суде", body: "Пример представления услуги по вопросам судебного спора и выбора направления работы.", image: "03-court-representation.webp", alt: "Иллюстрация здания суда и папки с делом" },
      { title: "Работа с документами", body: "Раздел для договоров, обращений и других документов, требующих внимания.", image: "04-documents.webp", alt: "Иллюстрация документов и ручки" },
      { title: "Вопросы бизнеса", body: "Отдельный путь обращения по правовым вопросам предпринимательской деятельности.", image: "05-business-law.webp", alt: "Иллюстрация офиса и деловой папки" },
    ],
    approachEyebrow: "Подход / 03 шага",
    approachTitle: "От разговора к понятному плану.",
    approachIntro: "Сайт показывает, как может начаться работа. Здесь представлен пример пути из трёх шагов.",
    steps: [
      { title: "Выслушать", body: "Определить суть обращения и главные вопросы." },
      { title: "Изучить информацию", body: "Упорядочить обстоятельства и относящиеся к ним документы." },
      { title: "Объяснить направление", body: "Обсудить возможные следующие шаги." },
    ],
    confidential: "В общении важны доверие и бережное отношение к информации.",
    questionsEyebrow: "Вопросы",
    questionsTitle: "Перед обращением.",
    questions: [
      { title: "Как начинается первая беседа?", body: "Обычно сначала кратко описывают вопрос и нужное направление. Эта страница — только концепция; юридический приём здесь не ведётся." },
      { title: "Нужно отправлять документы?", body: "Загрузка документов в этом примере не предусмотрена. Не отправляйте HIKMA конфиденциальные файлы. На реальном сайте порядок обращения согласуется с адвокатом." },
      { title: "Результат гарантирован?", body: "Каждая ситуация индивидуальна. Этот пример не обещает результата или юридической услуги." },
    ],
    ctaEyebrow: "HIKMA / Ваш проект",
    ctaTitle: "Подобный сайт может работать и для вашей практики.",
    ctaBody: "Этот концепт показывает, как HIKMA может представить адвокатскую практику онлайн. Давайте обсудим сайт, созданный под ваш бренд и услуги.",
    ctaButton: "Связаться с HIKMA",
    ctaSecondary: "Разработка лендинга",
    footerNote: "Пример дизайна. HIKMA не оказывает адвокатские услуги и юридические консультации.",
    projectLink: "Вернуться к проектам",
    newTab: "открывается в новой вкладке",
  },
  en: {
    concept: "HIKMA concept project",
    conceptNote: "This is not a law practice. The page is a design example.",
    brandTag: "LEGAL / CONCEPT",
    nav: ["Services", "Approach", "Questions"],
    home: "HIKMA home",
    eyebrow: "01 / A sample page for legal practices",
    title: "Legal questions deserve",
    accent: "a clear next step.",
    lead: "From the first conversation to the next steps, this sample legal landing page makes a complex journey easier to understand.",
    explore: "Explore services",
    order: "Request a page like this",
    heroCaption: "Clarity. Care. Confidence.",
    markers: ["Understand the issue", "Find a direction", "Plan the next step"],
    servicesEyebrow: "Areas / 01—04",
    servicesTitle: "Every matter needs its own approach.",
    servicesIntro: "Short, clear service descriptions help visitors find the right area quickly.",
    services: [
      { title: "Legal consultation", body: "A conversation about the situation, the questions involved and possible next steps.", image: "02-consultation.webp", alt: "Illustration of a consultation" },
      { title: "Court representation", body: "An example of how a practice might introduce support for disputes and court proceedings.", image: "03-court-representation.webp", alt: "Illustration of a courthouse and case file" },
      { title: "Documents", body: "A clear place to introduce work with contracts, applications and other documents.", image: "04-documents.webp", alt: "Illustration of documents and a pen" },
      { title: "Business matters", body: "A dedicated path for questions related to running a business.", image: "05-business-law.webp", alt: "Illustration of a business building and file" },
    ],
    approachEyebrow: "Approach / 03 steps",
    approachTitle: "From a conversation to a clear plan.",
    approachIntro: "A useful landing page explains how an enquiry begins. This is a sample three-step journey.",
    steps: [
      { title: "Listen", body: "Understand the enquiry and the main questions." },
      { title: "Review the information", body: "Organize the relevant circumstances and documents." },
      { title: "Explain a direction", body: "Talk through possible next steps." },
    ],
    confidential: "Trust and care with information matter in every conversation.",
    questionsEyebrow: "Questions",
    questionsTitle: "Before you reach out.",
    questions: [
      { title: "How does an initial conversation start?", body: "It generally starts with a short description of the matter. This page is a design concept and does not accept legal enquiries." },
      { title: "Should I send documents?", body: "This sample has no document upload. Do not send confidential files to HIKMA. A real practice would set out its own enquiry process." },
      { title: "Is an outcome guaranteed?", body: "Every situation is different. This example does not promise any legal outcome or service." },
    ],
    ctaEyebrow: "HIKMA / Your project",
    ctaTitle: "A page with this impact can be built for your practice.",
    ctaBody: "This concept shows how HIKMA can present a legal practice online. Let's discuss a landing page tailored to your brand and services.",
    ctaButton: "Contact HIKMA",
    ctaSecondary: "Landing page service",
    footerNote: "Design example. HIKMA does not provide legal representation or advice.",
    projectLink: "Back to projects",
    newTab: "opens in a new tab",
  },
};

export function lawCopy(locale: Locale): LawCopy {
  if (locale !== "uz") return content[locale];
  const translateAlphabet = (value: unknown): unknown => {
    if (typeof value === "string") return modernUzbek(value);
    if (Array.isArray(value)) return value.map(translateAlphabet);
    if (value && typeof value === "object")
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateAlphabet(item)]));
    return value;
  };
  return translateAlphabet(content.uz) as LawCopy;
}
