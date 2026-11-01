import { modernUzbek, type Locale } from "./i18n";

export const alisherPath = "/alishershukurulloyev";
export const alisherTelegram = "https://t.me/Yurist_Shukrulloyev";
export const alisherName = "Alisher Shukrulloyev";
export const alisherBrand = "Yurist Shukrulloyev";

type Area = { title: string; text: string; note: string; image: string };
type Step = { title: string; text: string };
type Principle = { title: string; text: string };
export type AlisherCopy = {
  nav: { href: string; label: string }[];
  contact: string; openMenu: string; closeMenu: string; navigation: string;
  role: string; heroStart: string; heroAccent: string; heroEnd: string; heroBio: string;
  explore: string; scroll: string; factLabels: string[]; factValues: string[];
  aboutLabel: string; aboutTitle: string; aboutAccent: string; about: string[];
  signature: string; signatureRole: string;
  areasLabel: string; areasTitle: string; areasAccent: string; areasIntro: string; areas: Area[];
  processLabel: string; processTitle: string; processAccent: string; processIntro: string; steps: Step[];
  mediaLabel: string; mediaTitle: string; mediaAccent: string; mediaIntro: string; mediaTopics: string[]; mediaCta: string;
  educationLabel: string; educationTitle: string; university: string; faculty: string; course: string;
  interestsLabel: string; interests: string; principles: Principle[];
  contactLabel: string; contactTitle: string; contactAccent: string; contactIntro: string; telegramCta: string;
  backToTop: string; pause: string; resume: string; motion: string; copyright: string; disclaimer: string;
  description: string;
};

const uz: AlisherCopy = {
  nav: [{ href: "#haqimda", label: "Men haqimda" }, { href: "#yonalishlar", label: "Yo‘nalishlar" }, { href: "#yondashuv", label: "Yondashuv" }, { href: "#media", label: "Legal media" }],
  contact: "Bog‘lanish", openMenu: "Menyuni ochish", closeMenu: "Menyuni yopish", navigation: "Asosiy navigatsiya",
  role: "Yuriskonsult · Huquqiy tahlil · Legal media",
  heroStart: "Huquqni", heroAccent: "tushunarli", heroEnd: "qilaman.",
  heroBio: "Qonunchilikni sodda, aniq va amaliy tilda tushuntiraman. Yuridik hujjatlar, huquqiy tahlil va foydali kontent ustida ishlayman.",
  explore: "Faoliyatimni ko‘rish", scroll: "Yaqinroq tanishing",
  factLabels: ["Amaliy faoliyat", "Ta’lim", "Shaxsiy loyiha"],
  factValues: ["Yuriskonsult", "TDYU · Ommaviy huquq · 3-kurs", "Huquqiy media va ta’lim"],
  aboutLabel: "01 / Men haqimda", aboutTitle: "Qonundan —", aboutAccent: "amaliy yechimga.",
  about: ["Men — Alisher Shukrulloyev. Yuridik ta’limni amaliy ish bilan birga olib boraman: shartnomalar, korporativ va mehnat hujjatlari, huquqiy xulosalar hamda biznesdagi yuridik masalalar bilan ishlayman.", "Maqsadim — murakkab huquqiy axborotni odam foydalanishi mumkin bo‘lgan aniq bilimga aylantirish. Har bir masalada huquqiy asos, mantiq va tushunarli izohga tayanaman."],
  signature: "Huquqiy aniqlik. Amaliy foyda.", signatureRole: "Mening ish tamoyilim",
  areasLabel: "02 / Ekspertiza va amaliyot", areasTitle: "Ishlaydigan", areasAccent: "yo‘nalishlarim.",
  areasIntro: "Hujjatdan huquqiy xulosagacha — masalaga mos, asosli va tartibli yondashuv.",
  areas: [
    { title: "Korporativ va shartnoma huquqi", text: "Shartnomalar, qo‘shimcha kelishuvlar, rasmiy xatlar, tijorat takliflari va kompaniya faoliyatiga oid huquqiy hujjatlarni tayyorlash hamda tahlil qilish.", note: "Biznes · Shartnomalar · Hujjatlar", image: "corporate-contracts" },
    { title: "Mehnat huquqi va HR hujjatlari", text: "Mehnat shartnomalari, buyruqlar, ishga qabul qilish va mehnat munosabatlarini rasmiylashtirish bo‘yicha hujjatlarni tayyorlash va tekshirish.", note: "Mehnat munosabatlari · HR", image: "labor-hr" },
    { title: "Fuqarolik va majburiyat huquqi", text: "Majburiyatlar, xizmat ko‘rsatish, pudrat, iste’molchi huquqlari, mulkiy va shartnomaviy munosabatlarga oid masalalarni tahlil qilish.", note: "Majburiyatlar · Mulk · Iste’molchi", image: "civil-obligations" },
    { title: "Ommaviy va ma’muriy huquq", text: "Davlat organlari faoliyati, ma’muriy huquq, prokuratura va huquqni muhofaza qiluvchi organlar faoliyatiga oid huquqiy mavzularni o‘rganish va tushuntirish.", note: "Davlat · Ma’muriy masalalar", image: "public-administrative" },
    { title: "Huquqiy tahlil va hujjatlar", text: "Kazuslar, normativ-huquqiy hujjatlar, huquqiy savollar va amaliy vaziyatlar bo‘yicha strukturali tahlil, huquqiy xulosa va yozma material tayyorlash.", note: "Manba · Tahlil · Xulosa", image: "legal-analysis" },
    { title: "Legal media va huquqiy ta’lim", text: "Instagram, Telegram va qisqa video formatlari uchun rasmiy manbalarga asoslangan, sodda va professional huquqiy kontent yaratish.", note: "Kontent · Huquqiy ma’rifat", image: "legal-media" },
  ],
  processLabel: "03 / Ish jarayoni", processTitle: "Har bir masalada", processAccent: "aniq mantiq.",
  processIntro: "Vaziyatni tushunishdan natijani tushuntirishgacha bo‘lgan to‘rt bosqich.",
  steps: [
    { title: "Masalani aniqlash", text: "Vaziyat, maqsad va mavjud hujjatlarni tushunish." },
    { title: "Huquqiy asos", text: "Tegishli qonunchilik va rasmiy manbalarni aniqlash." },
    { title: "Tahlil", text: "Huquqiy risk, variant va amaliy yechimlarni solishtirish." },
    { title: "Natija", text: "Aniq hujjat, xulosa yoki tushunarli tavsiya taqdim etish." },
  ],
  mediaLabel: "04 / Shaxsiy media loyiham", mediaTitle: "Huquq.", mediaAccent: "Oddiy tilda.",
  mediaIntro: "Kundalik huquqlar, qonunchilikdagi muhim qoidalar va amaliy vaziyatlarni rasmiy manbalarga tayangan holda yoritaman. Murakkab mavzuni foydali bilimga aylantiraman.",
  mediaTopics: ["Kundalik huquqlar", "Qonunchilik izohlari", "Yuridik ta’lim va karyera"], mediaCta: "Telegramda materiallarni ko‘rish",
  educationLabel: "05 / Ta’lim va prinsiplar", educationTitle: "Nazariya va amaliyot — birga.",
  university: "Toshkent davlat yuridik universiteti", faculty: "Ommaviy huquq fakulteti", course: "3-kurs",
  interestsLabel: "Akademik qiziqishlar", interests: "Xalqaro ommaviy va gumanitar huquq, inson huquqlari, LegalTech, ma’muriy va fuqarolik huquqi.",
  principles: [
    { title: "Rasmiy manba", text: "Muhim xulosalarni qonunchilik va ishonchli manbalarga bog‘lash." },
    { title: "Tushunarli izoh", text: "Murakkab masalani mazmunini yo‘qotmagan holda sodda tushuntirish." },
    { title: "Mas’uliyat", text: "Faktlarni tekshirish, aniq yozish va doimiy rivojlanish." },
  ],
  contactLabel: "Muloqot shu yerdan boshlanadi", contactTitle: "Huquqiy savolingiz", contactAccent: "bormi?",
  contactIntro: "Masalangizni qisqacha yozing. Mavzuni tushunib, uni qaysi huquqiy yo‘nalishda ko‘rib chiqish kerakligini aniqlashga yordam beraman.", telegramCta: "Telegram orqali yozish",
  backToTop: "Yuqoriga qaytish", pause: "Fon harakatini to‘xtatish", resume: "Fon harakatini yoqish", motion: "Fon harakati",
  copyright: "Barcha huquqlar himoyalangan.",
  disclaimer: "Materiallar umumiy axborot va huquqiy ma’rifat uchun tayyorlangan. Ular individual yuridik xulosa yoki advokatlik yordami o‘rnini bosmaydi. Muhim masalalarda qonunchilikning amaldagi tahririni tekshiring.",
  description: "Yuriskonsult, huquqiy tahlil va legal media. Shartnomalar, mehnat va korporativ hujjatlar, huquqiy ta’lim hamda O‘zbekiston qonunchiligini sodda tilda tushuntirish.",
};

const ru: AlisherCopy = {
  nav: [{ href: "#haqimda", label: "Обо мне" }, { href: "#yonalishlar", label: "Направления" }, { href: "#yondashuv", label: "Подход" }, { href: "#media", label: "Правовое медиа" }],
  contact: "Связаться", openMenu: "Открыть меню", closeMenu: "Закрыть меню", navigation: "Основная навигация",
  role: "Юрисконсульт · Правовой анализ · Медиа",
  heroStart: "О праве", heroAccent: "понятным", heroEnd: "языком.",
  heroBio: "Объясняю законодательство просто, точно и на практике. Работаю с юридическими документами, правовым анализом и полезным контентом.",
  explore: "Мои направления", scroll: "Познакомимся ближе",
  factLabels: ["Практика", "Образование", "Личный проект"], factValues: ["Юрисконсульт", "ТГЮУ · Публичное право · 3-й курс", "Правовое медиа и образование"],
  aboutLabel: "01 / Обо мне", aboutTitle: "От закона —", aboutAccent: "к решению.",
  about: ["Я — Алишер Шукруллоев. Совмещаю юридическое образование с практикой: работаю с договорами, корпоративными и кадровыми документами, правовыми заключениями и юридическими вопросами бизнеса.", "Моя цель — превращать сложную правовую информацию в понятные знания, которыми можно пользоваться. В каждом вопросе опираюсь на правовое основание, логику и ясное объяснение."],
  signature: "Юридическая точность. Практическая польза.", signatureRole: "Мой принцип работы",
  areasLabel: "02 / Экспертиза и практика", areasTitle: "Направления", areasAccent: "моей работы.", areasIntro: "От документа до правового заключения — обоснованный и последовательный подход к задаче.",
  areas: [
    { title: "Корпоративное и договорное право", text: "Подготовка и анализ договоров, дополнительных соглашений, официальных писем, коммерческих предложений и правовых документов компании.", note: "Бизнес · Договоры · Документы", image: "corporate-contracts" },
    { title: "Трудовое право и кадровые документы", text: "Подготовка и проверка трудовых договоров, приказов и документов по приёму на работу и оформлению трудовых отношений.", note: "Трудовые отношения · HR", image: "labor-hr" },
    { title: "Гражданское и обязательственное право", text: "Анализ обязательств, услуг, подряда, защиты прав потребителей, имущественных и договорных отношений.", note: "Обязательства · Имущество · Потребитель", image: "civil-obligations" },
    { title: "Публичное и административное право", text: "Изучение и объяснение правовых вопросов деятельности государственных органов, административного права, прокуратуры и правоохранительных органов.", note: "Государство · Административные вопросы", image: "public-administrative" },
    { title: "Правовой анализ и документы", text: "Структурированный анализ казусов, нормативных актов, правовых вопросов и практических ситуаций; подготовка заключений и письменных материалов.", note: "Источник · Анализ · Заключение", image: "legal-analysis" },
    { title: "Правовое медиа и образование", text: "Создание понятного профессионального правового контента для Instagram, Telegram и коротких видео на основе официальных источников.", note: "Контент · Правовое просвещение", image: "legal-media" },
  ],
  processLabel: "03 / Процесс работы", processTitle: "В каждом вопросе —", processAccent: "ясная логика.", processIntro: "Четыре этапа от понимания ситуации до объяснения результата.",
  steps: [
    { title: "Понять задачу", text: "Изучить ситуацию, цель и имеющиеся документы." },
    { title: "Найти основание", text: "Определить применимые нормы и официальные источники." },
    { title: "Проанализировать", text: "Сравнить правовые риски, варианты и практические решения." },
    { title: "Представить результат", text: "Подготовить документ, заключение или понятную рекомендацию." },
  ],
  mediaLabel: "04 / Мой медиапроект", mediaTitle: "Право.", mediaAccent: "Простым языком.", mediaIntro: "Рассказываю о повседневных правах, важных нормах и практических ситуациях с опорой на официальные источники. Превращаю сложную тему в полезные знания.",
  mediaTopics: ["Повседневные права", "Объяснение законодательства", "Юридическое образование и карьера"], mediaCta: "Материалы в Telegram",
  educationLabel: "05 / Образование и принципы", educationTitle: "Теория и практика — вместе.", university: "Ташкентский государственный юридический университет", faculty: "Факультет публичного права", course: "3-й курс",
  interestsLabel: "Академические интересы", interests: "Международное публичное и гуманитарное право, права человека, LegalTech, административное и гражданское право.",
  principles: [
    { title: "Официальный источник", text: "Обосновывать важные выводы законодательством и надёжными источниками." },
    { title: "Понятное объяснение", text: "Объяснять сложные вопросы просто, сохраняя их правовой смысл." },
    { title: "Ответственность", text: "Проверять факты, точно формулировать и постоянно развиваться." },
  ],
  contactLabel: "Начнём с разговора", contactTitle: "Есть правовой", contactAccent: "вопрос?", contactIntro: "Кратко опишите ситуацию. Помогу понять тему и определить правовое направление для её рассмотрения.", telegramCta: "Написать в Telegram",
  backToTop: "Вернуться наверх", pause: "Приостановить движение фона", resume: "Включить движение фона", motion: "Движение фона", copyright: "Все права защищены.",
  disclaimer: "Материалы предназначены для общего информирования и правового просвещения. Они не заменяют индивидуальное юридическое заключение или адвокатскую помощь. По важным вопросам проверяйте актуальную редакцию законодательства.",
  description: "Юрисконсульт, правовой анализ и медиа. Договоры, кадровые и корпоративные документы, юридическое образование и понятное объяснение законодательства Узбекистана.",
};

const en: AlisherCopy = {
  nav: [{ href: "#haqimda", label: "About" }, { href: "#yonalishlar", label: "Practice areas" }, { href: "#yondashuv", label: "Approach" }, { href: "#media", label: "Legal media" }],
  contact: "Get in touch", openMenu: "Open menu", closeMenu: "Close menu", navigation: "Main navigation",
  role: "Legal counsel · Legal analysis · Media", heroStart: "Making law", heroAccent: "easier", heroEnd: "to understand.",
  heroBio: "I explain legislation in clear, practical language. I work with legal documents, legal analysis and useful educational content.", explore: "Explore my work", scroll: "Get to know me",
  factLabels: ["Practice", "Education", "Personal project"], factValues: ["Legal counsel", "TSUL · Public Law · Year 3", "Legal media and education"],
  aboutLabel: "01 / About me", aboutTitle: "From legislation", aboutAccent: "to practical insight.",
  about: ["I’m Alisher Shukrulloyev. I combine my legal education with hands-on work on contracts, corporate and employment documents, legal opinions and legal matters in business.", "My aim is to turn complex legal information into clear, usable knowledge. I approach each question with legal reasoning, a sound basis and an understandable explanation."],
  signature: "Legal clarity. Practical value.", signatureRole: "My working principle",
  areasLabel: "02 / Expertise and practice", areasTitle: "The areas", areasAccent: "I work in.", areasIntro: "From documents to legal opinions — a structured, well-grounded approach to each task.",
  areas: [
    { title: "Corporate and contract law", text: "Preparing and analysing contracts, supplementary agreements, formal correspondence, commercial proposals and company-related legal documents.", note: "Business · Contracts · Documents", image: "corporate-contracts" },
    { title: "Employment law and HR documents", text: "Preparing and reviewing employment contracts, orders, recruitment documents and records formalising employment relationships.", note: "Employment relationships · HR", image: "labor-hr" },
    { title: "Civil law and obligations", text: "Analysing obligations, services, works contracts, consumer rights, property matters and contractual relationships.", note: "Obligations · Property · Consumers", image: "civil-obligations" },
    { title: "Public and administrative law", text: "Studying and explaining legal topics concerning public bodies, administrative law, prosecution services and law enforcement.", note: "Public bodies · Administrative matters", image: "public-administrative" },
    { title: "Legal analysis and documents", text: "Structured analysis of case studies, legislation, legal questions and practical situations; preparing legal opinions and written materials.", note: "Sources · Analysis · Conclusions", image: "legal-analysis" },
    { title: "Legal media and education", text: "Creating clear, professional legal content for Instagram, Telegram and short video formats, grounded in official sources.", note: "Content · Legal education", image: "legal-media" },
  ],
  processLabel: "03 / The working process", processTitle: "Clear reasoning.", processAccent: "At every step.", processIntro: "Four steps from understanding the situation to explaining the outcome.",
  steps: [
    { title: "Understand the issue", text: "Identify the situation, the goal and the available documents." },
    { title: "Find the legal basis", text: "Identify applicable legislation and official sources." },
    { title: "Analyse the options", text: "Compare legal risks, alternatives and practical solutions." },
    { title: "Present the result", text: "Deliver a clear document, opinion or understandable recommendation." },
  ],
  mediaLabel: "04 / My media project", mediaTitle: "The law.", mediaAccent: "In plain language.", mediaIntro: "I cover everyday rights, important legal rules and practical situations using official sources. I turn complex topics into useful knowledge.",
  mediaTopics: ["Everyday rights", "Legislation explained", "Legal education and careers"], mediaCta: "Explore materials on Telegram",
  educationLabel: "05 / Education and principles", educationTitle: "Theory meets practice.", university: "Tashkent State University of Law", faculty: "Faculty of Public Law", course: "Year 3",
  interestsLabel: "Academic interests", interests: "Public international and humanitarian law, human rights, LegalTech, administrative law and civil law.",
  principles: [
    { title: "Official sources", text: "Grounding important conclusions in legislation and reliable sources." },
    { title: "Clear explanations", text: "Making complex questions understandable without losing their legal meaning." },
    { title: "Responsibility", text: "Checking facts, writing precisely and continuing to develop." },
  ],
  contactLabel: "A conversation is the first step", contactTitle: "Have a legal", contactAccent: "question?", contactIntro: "Briefly describe your situation. I’ll help clarify the topic and identify the legal area relevant to your question.", telegramCta: "Message on Telegram",
  backToTop: "Back to top", pause: "Pause background motion", resume: "Resume background motion", motion: "Background motion", copyright: "All rights reserved.",
  disclaimer: "These materials provide general information and legal education. They do not replace an individual legal opinion or legal representation. Check the current version of the relevant legislation for important decisions.",
  description: "Legal counsel, legal analysis and media. Contracts, employment and corporate documents, legal education and clear explanations of Uzbekistan’s legislation.",
};

// Convert display copy only. Proper names, image names and anchors keep their spelling.
function modernize(copy: AlisherCopy): AlisherCopy {
  const transform = (value: unknown, key = ""): unknown => {
    if (typeof value === "string") {
      if (key === "image" || key === "href") return value;
      return modernUzbek(value.replaceAll(alisherName, "\u0002").replaceAll("LegalTech", "\u0003")).replaceAll("\u0002", alisherName).replaceAll("\u0003", "LegalTech");
    }
    if (Array.isArray(value)) return value.map((item) => transform(item));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([name, item]) => [name, transform(item, name)]));
    return value;
  };
  return transform(copy) as AlisherCopy;
}

const copy: Record<Locale, AlisherCopy> = { uz: modernize(uz), ru, en };
export function alisherCopy(locale: Locale): AlisherCopy { return copy[locale]; }
