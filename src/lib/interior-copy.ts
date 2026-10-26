import { modernUzbek, type Locale } from "./i18n";

export type InteriorCopy = {
  brand: string; descriptor: string; nav: [string, string, string, string];
  eyebrow: string; title: string; accent: string; lead: string; primary: string; secondary: string;
  projectsTitle: string; projectsIntro: string; projectType: string;
  projects: { title: string; kind: string; description: string; alt: string }[];
  aboutTitle: string; aboutBody: string; aboutNote: string;
  servicesTitle: string; servicesIntro: string; services: { title: string; body: string }[];
  processTitle: string; processIntro: string; steps: { title: string; body: string }[];
  contactTitle: string; contactIntro: string; placeLabel: string; placeOptions: [string, string, string];
  areaLabel: string; areaPlaceholder: string; goalLabel: string; goalPlaceholder: string;
  copyAction: string; copied: string; copyError: string; briefHeading: string;
  channelNote: string; sampleNote: string; backTop: string;
};

const raw: Record<Locale, InteriorCopy> = {
  uz: {
    brand: "MAKON", descriptor: "interyer studiyasi",
    nav: ["Loyihalar", "Biz haqimizda", "Xizmatlar", "Bog‘lanish"],
    eyebrow: "Sizga mos makonlar",
    title: "Sizga mos", accent: "makon.",
    lead: "Makonni chiroyli ko‘rsatish bilan cheklanmaymiz. Unda yashash va ishlash qanday bo‘lishini birga o‘ylaymiz.",
    primary: "Loyihani muhokama qilish", secondary: "Konseptlarni ko‘rish",
    projectsTitle: "Makonning yangi ko‘rinishi.",
    projectsIntro: "Har bir loyiha odam, joy va kundalik odatlardan boshlanadi. Quyidagi tasvirlar sahifa uchun yaratilgan konseptlardir.",
    projectType: "Konsept vizual",
    projects: [
      { title: "Yashash uchun joy", kind: "Turar joy interyeri", description: "Yorug‘lik, tabiiy materiallar va erkin harakat bir ritmda.", alt: "Yorug‘ turar joy interyerining konsept tasviri" },
      { title: "Suhbat uchun joy", kind: "Jamoat makoni", description: "Mehmon qayta kelishni istaydigan osoyishta muhit.", alt: "Kafe interyerining konsept tasviri" },
    ],
    aboutTitle: "Avval hayotingizni tinglaymiz.",
    aboutBody: "Qulay makon chizmadan oldin savoldan boshlanadi: kim foydalanadi, nimalar muhim va qayerda yengillik kerak? Shu javoblardan reja, material va kayfiyat shakllanadi.",
    aboutNote: "Bu studiya va portfoliodagi ishlar namuna. Haqiqiy ism, jamoa va bajarilgan loyihalar bilan almashtiriladi.",
    servicesTitle: "G‘oyadan aniq rejagacha.",
    servicesIntro: "Loyiha hajmi va vazifasiga qarab kerakli bosqichlarni birga tanlaymiz.",
    services: [
      { title: "Reja va konsept", body: "Makonni qanday ishlatishingizni aniqlab, rejalashtirish va vizual yo‘nalishni belgilaymiz." },
      { title: "To‘liq dizayn loyihasi", body: "Tanlangan g‘oyani chizmalar, materiallar va ishlab chiqishga qulay hujjatlar bilan davom ettiramiz." },
      { title: "Jarayonga hamrohlik", body: "Loyihani amalga oshirish paytida yechimlar va o‘zgarishlarni birga ko‘rib chiqamiz." },
    ],
    processTitle: "Har qadam o‘z o‘rnida.",
    processIntro: "Ish boshlanishidan oldin yo‘lni ko‘rish oson bo‘lsin.",
    steps: [
      { title: "Suhbat", body: "Ehtiyoj, makon va kutgan natijangizni tushunamiz." },
      { title: "Yo‘nalish", body: "Reja va vizual kayfiyatni birga tanlaymiz." },
      { title: "Loyiha", body: "Kelishilgan yechimlarni aniq hujjatlarga aylantiramiz." },
      { title: "Amalga oshirish", body: "Zarur bo‘lsa, loyiha ijrosidagi savollarga hamrohlik qilamiz." },
    ],
    contactTitle: "Sizning makoningizdan boshlaymiz.",
    contactIntro: "Bir necha jumlada niyatingizni yozing. Quyidagi brif matni qurilmangizga nusxalanadi; bu sahifa uni hech kimga yubormaydi.",
    placeLabel: "Qanday makon?", placeOptions: ["Kvartira yoki uy", "Tijorat makoni", "Boshqa makon"],
    areaLabel: "Taxminiy maydon (m²)", areaPlaceholder: "Masalan, 80",
    goalLabel: "Nimani o‘zgartirmoqchisiz?", goalPlaceholder: "Makon va xohishingiz haqida qisqacha...",
    copyAction: "Brifni nusxalash", copied: "Brif nusxalandi. Uni o‘zingiz tanlagan aloqa kanalida yuborishingiz mumkin.",
    copyError: "Avtomatik nusxalab bo‘lmadi. Matnni belgilab nusxalang.", briefHeading: "Interyer loyihasi haqida so‘rov",
    channelNote: "Instagram va Telegram havolalari haqiqiy studiya profillari ulangach paydo bo‘ladi.",
    sampleNote: "Portfel uchun namunaviy sahifa. Tasvirlar konsept sifatida yaratilgan; real bajarilgan loyihalar emas.",
    backTop: "Yuqoriga qaytish",
  },
  ru: {
    brand: "MAKON", descriptor: "студия интерьера",
    nav: ["Проекты", "О студии", "Услуги", "Контакт"],
    eyebrow: "Пространства для вашей жизни", title: "Интерьер", accent: "под вас.",
    lead: "Мы думаем не только о красоте пространства, но и о том, как вам будет в нём жить и работать.",
    primary: "Обсудить проект", secondary: "Посмотреть концепции",
    projectsTitle: "Новый взгляд на пространство.",
    projectsIntro: "Каждый проект начинается с человека, места и привычек. Эти изображения созданы как концепции для демонстрации страницы.",
    projectType: "Концептуальная визуализация",
    projects: [
      { title: "Пространство для жизни", kind: "Жилой интерьер", description: "Свет, натуральные материалы и свобода движения в одном ритме.", alt: "Концептуальная визуализация светлого жилого интерьера" },
      { title: "Пространство для встреч", kind: "Общественный интерьер", description: "Спокойная атмосфера, в которую хочется вернуться.", alt: "Концептуальная визуализация интерьера кафе" },
    ],
    aboutTitle: "Сначала мы узнаём, как вы живёте.",
    aboutBody: "Удобное пространство начинается с вопросов: кто им пользуется, что важно и где нужна простота? Из ответов рождаются планировка, материалы и настроение.",
    aboutNote: "Студия и работы в портфолио демонстрационные. Замените их реальным именем, командой и проектами.",
    servicesTitle: "От идеи к ясному плану.",
    servicesIntro: "Вместе выбираем этапы с учётом масштаба и задачи проекта.",
    services: [
      { title: "План и концепция", body: "Изучаем ваш сценарий жизни, разрабатываем планировку и визуальное направление." },
      { title: "Полный дизайн-проект", body: "Дополняем концепцию чертежами, материалами и документами для реализации." },
      { title: "Сопровождение", body: "Помогаем обсуждать решения и изменения в ходе реализации проекта." },
    ],
    processTitle: "У каждого шага своё место.", processIntro: "Понятный путь ещё до начала работы.",
    steps: [
      { title: "Разговор", body: "Узнаём ваши задачи, пространство и ожидания." },
      { title: "Направление", body: "Вместе выбираем планировку и настроение." },
      { title: "Проект", body: "Превращаем решения в понятные документы." },
      { title: "Реализация", body: "При необходимости сопровождаем вопросы по ходу работ." },
    ],
    contactTitle: "Начнём с вашего пространства.",
    contactIntro: "Опишите идею в нескольких строках. Текст сохранится в буфер обмена вашего устройства; страница никому его не отправляет.",
    placeLabel: "Какое пространство?", placeOptions: ["Квартира или дом", "Коммерческое помещение", "Другое"],
    areaLabel: "Примерная площадь (м²)", areaPlaceholder: "Например, 80",
    goalLabel: "Что вы хотите изменить?", goalPlaceholder: "Кратко о пространстве и пожеланиях...",
    copyAction: "Скопировать описание", copied: "Описание скопировано. Вы можете отправить его выбранным способом.",
    copyError: "Не удалось скопировать автоматически. Выделите и скопируйте текст.", briefHeading: "Запрос на дизайн интерьера",
    channelNote: "Ссылки на Instagram и Telegram появятся после подключения настоящих профилей студии.",
    sampleNote: "Демонстрационная страница портфолио. Изображения созданы как концепции и не являются выполненными проектами.",
    backTop: "Наверх",
  },
  en: {
    brand: "MAKON", descriptor: "interior studio",
    nav: ["Projects", "About", "Services", "Contact"],
    eyebrow: "Spaces shaped around you", title: "Interiors", accent: "for you.",
    lead: "We think beyond how a space looks to how it feels to live and work there.",
    primary: "Discuss a project", secondary: "Explore concepts",
    projectsTitle: "A fresh perspective on space.",
    projectsIntro: "Every project begins with people, place and daily routines. These images are concepts created for this page.",
    projectType: "Concept visual",
    projects: [
      { title: "Room to live", kind: "Residential interior", description: "Light, natural materials and effortless movement in balance.", alt: "Concept image of a bright residential interior" },
      { title: "Room to gather", kind: "Commercial interior", description: "A quiet atmosphere people want to return to.", alt: "Concept image of a café interior" },
    ],
    aboutTitle: "First, we listen to your life.",
    aboutBody: "A good space begins with questions: who uses it, what matters and where could life feel easier? The answers shape the plan, materials and mood.",
    aboutNote: "This studio and portfolio are illustrative. Replace them with the real name, team and completed work.",
    servicesTitle: "From idea to a clear plan.",
    servicesIntro: "We choose the right stages together based on your project and its scope.",
    services: [
      { title: "Plan and concept", body: "We learn how you use the space, then shape its layout and visual direction." },
      { title: "Complete design project", body: "We develop the concept into drawings, materials and documents ready for implementation." },
      { title: "Project guidance", body: "We help review decisions and changes while the design comes to life." },
    ],
    processTitle: "Every step has its place.", processIntro: "A clear journey from the very beginning.",
    steps: [
      { title: "Conversation", body: "We understand your needs, space and expectations." },
      { title: "Direction", body: "Together we choose the layout and visual mood." },
      { title: "Design", body: "Agreed decisions become practical documents." },
      { title: "Implementation", body: "If needed, we support questions during delivery." },
    ],
    contactTitle: "Let's begin with your space.",
    contactIntro: "Describe your idea in a few lines. The brief is copied on your device; this page sends nothing to anyone.",
    placeLabel: "What kind of space?", placeOptions: ["Home or apartment", "Commercial space", "Other space"],
    areaLabel: "Approximate area (m²)", areaPlaceholder: "For example, 80",
    goalLabel: "What would you change?", goalPlaceholder: "A little about your space and goals...",
    copyAction: "Copy project brief", copied: "Brief copied. You can send it through a channel of your choice.",
    copyError: "Could not copy automatically. Select and copy the text instead.", briefHeading: "Interior design enquiry",
    channelNote: "Instagram and Telegram links will appear when the real studio profiles are connected.",
    sampleNote: "Portfolio concept page. Images are generated concepts, not completed client projects.",
    backTop: "Back to top",
  },
};

export function interiorCopy(locale: Locale): InteriorCopy {
  if (locale !== "uz") return raw[locale];
  const transform = (value: unknown): unknown => {
    if (typeof value === "string") return modernUzbek(value);
    if (Array.isArray(value)) return value.map(transform);
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, transform(item)]));
    return value;
  };
  return transform(raw.uz) as InteriorCopy;
}
