import { modernUzbek, type Locale } from "./i18n";

type LawCopy = {
  person: string; role: string; nav: [string, string, string, string];
  eyebrow: string; title: string; accent: string; lead: string; contactAction: string; explore: string;
  heroCaption: string; markers: [string, string, string];
  servicesEyebrow: string; servicesTitle: string; servicesIntro: string;
  services: { title: string; body: string; image: string; alt: string }[];
  aboutEyebrow: string; aboutTitle: string; aboutBody: string; aboutQuote: string;
  resultsEyebrow: string; resultsTitle: string; resultsIntro: string;
  results: { label: string; title: string; body: string }[];
  approachEyebrow: string; approachTitle: string; approachIntro: string;
  steps: { title: string; body: string }[]; confidential: string;
  promisesEyebrow: string; promisesTitle: string; promisesIntro: string;
  promises: { title: string; body: string }[];
  questionsEyebrow: string; questionsTitle: string; questions: { title: string; body: string }[];
  ctaEyebrow: string; ctaTitle: string; ctaBody: string;
  socialTitle: string; socialIntro: string; socialPending: string;
  mapEyebrow: string; mapTitle: string; mapBody: string; mapBodyLive: string; mapNote: string; mapLink: string; mapPin: string;
  draftLabel: string; draftPlaceholder: string; draftButton: string; draftCopied: string; draftError: string; draftNote: string;
  footerNote: string;
};

const content: Record<Locale, LawCopy> = {
  uz: {
    person: "Advokat X", role: "Shaxsiy advokatlik amaliyoti",
    nav: ["Xizmatlar", "Biz haqimizda", "Qanday ishlaymiz", "Bog‘lanish"],
    eyebrow: "Advokat X / Huquqiy amaliyot",
    title: "Huquqiy masalada", accent: "aniq yo‘l topamiz.",
    lead: "Murakkab vaziyatda aniq tushuntirish va puxta yondashuv muhim. Masalangizni tinglaymiz, imkoniyatlarni birgalikda ko‘rib chiqamiz.",
    contactAction: "Masalamni muhokama qilish", explore: "Xizmatlar bilan tanishish",
    heroCaption: "Aniqlik. E’tibor. Ishonch.",
    markers: ["Sizni tinglaymiz", "Holatni o‘rganamiz", "Keyingi qadamni tushuntiramiz"],
    servicesEyebrow: "Faoliyat yo‘nalishlari / 01—04", servicesTitle: "Har bir masalaga alohida e’tibor.",
    servicesIntro: "Kerakli yo‘nalishni tanlang. Murojaatingizning tafsilotlarini dastlabki suhbatda aniqlashtiramiz.",
    services: [
      { title: "Huquqiy maslahat", body: "Savolingizni muhokama qilamiz, vaziyatga ta’sir qiladigan holatlarni aniqlaymiz va mumkin bo‘lgan qadamlarni ko‘rib chiqamiz.", image: "02-consultation.webp", alt: "Huquqiy suhbat tasviri" },
      { title: "Sudda vakillik", body: "Nizo va sud jarayoniga oid hujjatlar, pozitsiya hamda ishning keyingi bosqichlari yuzasidan ishlaymiz.", image: "03-court-representation.webp", alt: "Sud binosi va ish jildi tasviri" },
      { title: "Hujjatlar bilan ishlash", body: "Shartnoma, ariza va boshqa muhim hujjatlarni ko‘rib chiqish, tayyorlash yoki tartibga solish.", image: "04-documents.webp", alt: "Hujjatlar va ruchka tasviri" },
      { title: "Biznes masalalari", body: "Tadbirkorlik faoliyatida yuzaga keladigan huquqiy savollarni muhokama qilish va mos yo‘nalishni belgilash.", image: "05-business-law.webp", alt: "Biznes binosi va hujjatlar tasviri" },
    ],
    aboutEyebrow: "Biz haqimizda", aboutTitle: "Avval tinglaymiz. Keyin yo‘lni aniqlaymiz.",
    aboutBody: "Har bir murojaat ortida inson va uning muhim qarori turadi. Yondashuvimizning boshlanish nuqtasi — vaziyatni tushunish, savollarni aniq qo‘yish va keyingi qadamlarni sizga sodda tilda izohlash.",
    aboutQuote: "Huquqiy yordam avvalo tushunarli muloqotdan boshlanadi.",
    resultsEyebrow: "Erishadigan natijamiz", resultsTitle: "Ishni aniqlik sari olib boramiz.",
    resultsIntro: "Har bir ishning yakuni vaziyatga bog‘liq. Murojaat davomida erishishga intiladigan amaliy natijalarimiz esa quyidagilar.",
    results: [
      { label: "01 / TUSHUNCHA", title: "Vaziyatning aniq manzarasi", body: "Asosiy savol va e’tibor talab qiladigan holatlar ajratib olinadi." },
      { label: "02 / TARTIB", title: "Hujjatlar bir joyda", body: "Mavjud ma’lumotlar va kerakli hujjatlar izchil ko‘rib chiqiladi." },
      { label: "03 / YO‘NALISH", title: "Keyingi qadamlar", body: "Mumkin bo‘lgan variantlar va ularning xavflari tushunarli tilda muhokama qilinadi." },
    ],
    approachEyebrow: "Ish tartibi / 03 qadam", approachTitle: "Suhbatdan aniq rejagacha.",
    approachIntro: "Murojaatdan keyin ish qanday davom etishini oldindan bilishingiz uchun jarayonni sodda bosqichlarga ajratdik.",
    steps: [
      { title: "Vaziyatni tinglash", body: "Masalaning mazmuni va asosiy savollaringizni aniqlaymiz." },
      { title: "Ma’lumotni ko‘rib chiqish", body: "Tegishli hujjatlar va holatlarni o‘rganib chiqamiz." },
      { title: "Yo‘nalishni tushuntirish", body: "Mumkin bo‘lgan keyingi qadamlar haqida gaplashamiz." },
    ],
    confidential: "Ishonch va ma’lumotga ehtiyotkor munosabat.",
    promisesEyebrow: "Sizga va’damiz", promisesTitle: "Natijani emas, yondashuvni va’da qilamiz.",
    promisesIntro: "Huquqiy masalada oldindan kafolat berish mumkin emas. Biz muloqot va ish tartibida quyidagilarga amal qilamiz.",
    promises: [
      { title: "Diqqat bilan tinglash", body: "Vaziyatingizni shoshirmasdan tushunishga vaqt ajratamiz." },
      { title: "Oddiy tilda izohlash", body: "Murakkab tushunchalarni aniq va tushunarli qilib tushuntiramiz." },
      { title: "Xavflarni yashirmaslik", body: "Mumkin bo‘lgan cheklov va noaniqliklarni ham ochiq muhokama qilamiz." },
      { title: "Ehtiyotkor muloqot", body: "Ma’lumot almashishda ortiqcha hujjat va tafsilotlarni so‘ramaymiz." },
    ],
    questionsEyebrow: "Ko‘p so‘raladigan savollar", questionsTitle: "Murojaatdan oldin bilib oling.",
    questions: [
      { title: "Dastlabki suhbat qanday o‘tadi?", body: "Avval masalangizni qisqacha aytib berasiz. Keyin aniqlashtiruvchi savollar va zarur bo‘lishi mumkin bo‘lgan ma’lumotlarni muhokama qilamiz." },
      { title: "Hujjatlarni oldindan yuborishim kerakmi?", body: "Dastlab savolingizni qisqacha bayon qiling. Qaysi hujjatlar zarurligi vaziyat aniqlangach ma’lum bo‘ladi. Bu sahifada hujjat yuklash mavjud emas." },
      { title: "Natija kafolatlanadimi?", body: "Har bir vaziyat alohida baholanadi. Muayyan natijani oldindan kafolatlab bo‘lmaydi; ehtimoliy yo‘llar va xavflarni tushuntirib berish muhim." },
    ],
    ctaEyebrow: "Bog‘lanish", ctaTitle: "Masalangizni birgalikda ko‘rib chiqamiz.",
    ctaBody: "Savolingizni qisqacha yozing. Dastlabki suhbatda vaziyatni aniqlashtirishdan boshlaymiz.",
    socialTitle: "Qulay kanalda yozing", socialIntro: "Telegram yoki Instagram orqali murojaat qilish imkoniyati.",
    socialPending: "Profil manzili kiritilgach faollashadi",
    mapEyebrow: "Qayerdamiz", mapTitle: "Uchrashuv uchun manzil.",
    mapBody: "Xaritada Toshkent markazidagi namunaviy joy ko‘rsatilgan. Bu advokatning haqiqiy ofisi emas.",
    mapBodyLive: "Uchrashuv manzili va yo‘nalishni xaritada ko‘ring.",
    mapNote: "Namuna: Amir Temur xiyoboni atrofi, Toshkent. Haqiqiy manzil bilan almashtiriladi.",
    mapLink: "Google Maps’da ko‘rish", mapPin: "Namuna joylashuv",
    draftLabel: "Savolingizning qisqacha mazmuni", draftPlaceholder: "Masalan, shartnoma bo‘yicha savolim bor...",
    draftButton: "Xabar matnini nusxalash",
    draftCopied: "Xabar nusxalandi. Uni o‘zingiz tanlagan aloqa kanalida ishlatishingiz mumkin.",
    draftError: "Avtomatik nusxalab bo‘lmadi. Matnni belgilab nusxalang.",
    draftNote: "Hozircha qabul kanali ulanmagan. Bu shakl xabarni hech qayerga yubormaydi; maxfiy hujjat yoki shaxsiy ma’lumot kiritmang.",
    footerNote: "Har bir huquqiy masala o‘ziga xos. Saytdagi umumiy ma’lumot individual yuridik xulosa o‘rnini bosmaydi.",
  },
  ru: {
    person: "Адвокат X", role: "Индивидуальная адвокатская практика",
    nav: ["Услуги", "О нас", "Как мы работаем", "Контакт"],
    eyebrow: "Адвокат X / Юридическая практика", title: "Правовой вопрос?", accent: "Найдём ясный путь.",
    lead: "В сложной ситуации важны ясное объяснение и внимательный подход. Мы выслушаем вас и обсудим возможные шаги.",
    contactAction: "Обсудить вопрос", explore: "Посмотреть услуги", heroCaption: "Ясность. Внимание. Доверие.",
    markers: ["Выслушаем", "Изучим обстоятельства", "Объясним следующий шаг"],
    servicesEyebrow: "Направления / 01—04", servicesTitle: "Каждому вопросу — своё внимание.",
    servicesIntro: "Выберите подходящее направление. Детали вашего обращения обсудим во время первой беседы.",
    services: [
      { title: "Правовая консультация", body: "Обсудим ваш вопрос, уточним обстоятельства и рассмотрим возможные следующие шаги.", image: "02-consultation.webp", alt: "Иллюстрация правовой беседы" },
      { title: "Представительство в суде", body: "Разберём документы, позицию и дальнейшие этапы спора или судебного процесса.", image: "03-court-representation.webp", alt: "Здание суда и папка с делом" },
      { title: "Работа с документами", body: "Изучение, подготовка и упорядочивание договоров, заявлений и других важных документов.", image: "04-documents.webp", alt: "Документы и ручка" },
      { title: "Вопросы бизнеса", body: "Обсудим правовые вопросы предпринимательской деятельности и определим подходящий путь.", image: "05-business-law.webp", alt: "Офисное здание и документы" },
    ],
    aboutEyebrow: "О нас", aboutTitle: "Сначала выслушать. Затем найти направление.",
    aboutBody: "За каждым обращением стоит человек и важное для него решение. Наш подход начинается с понимания ситуации, точных вопросов и простого объяснения дальнейших шагов.",
    aboutQuote: "Правовая помощь начинается с понятного разговора.",
    resultsEyebrow: "К чему мы стремимся", resultsTitle: "Двигаемся к ясности.",
    resultsIntro: "Итог каждого дела зависит от обстоятельств. Вот практические результаты, к которым мы стремимся в работе над обращением.",
    results: [
      { label: "01 / ЯСНОСТЬ", title: "Картина ситуации", body: "Выделяем главный вопрос и обстоятельства, требующие внимания." },
      { label: "02 / ПОРЯДОК", title: "Документы по порядку", body: "Последовательно изучаем имеющиеся сведения и необходимые документы." },
      { label: "03 / НАПРАВЛЕНИЕ", title: "Следующие шаги", body: "Понятно обсуждаем варианты, ограничения и возможные риски." },
    ],
    approachEyebrow: "Порядок работы / 03 шага", approachTitle: "От беседы к понятному плану.",
    approachIntro: "Чтобы вы понимали, как может развиваться работа после обращения, мы разделили процесс на три шага.",
    steps: [
      { title: "Выслушать", body: "Определим суть вопроса и ваши основные запросы." },
      { title: "Изучить информацию", body: "Рассмотрим обстоятельства и относящиеся к ним документы." },
      { title: "Объяснить направление", body: "Обсудим возможные следующие шаги." },
    ],
    confidential: "Доверие и бережное отношение к информации.",
    promisesEyebrow: "Наши обещания", promisesTitle: "Обещаем подход, а не исход.",
    promisesIntro: "Невозможно заранее гарантировать исход правового вопроса. В общении и работе мы придерживаемся следующих принципов.",
    promises: [
      { title: "Внимательно слушать", body: "Уделяем время, чтобы понять вашу ситуацию без спешки." },
      { title: "Говорить ясно", body: "Объясняем сложные вопросы простыми словами." },
      { title: "Не скрывать риски", body: "Открыто обсуждаем ограничения и неопределённость." },
      { title: "Бережно общаться", body: "Не просим лишние документы и детали в первом сообщении." },
    ],
    questionsEyebrow: "Частые вопросы", questionsTitle: "Перед обращением.",
    questions: [
      { title: "Как проходит первая беседа?", body: "Вы кратко рассказываете о вопросе. Затем мы уточняем обстоятельства и обсуждаем, какие сведения могут понадобиться." },
      { title: "Нужно заранее отправлять документы?", body: "Сначала кратко опишите вопрос. Какие документы понадобятся, станет понятно после уточнения ситуации. Загрузка файлов на этой странице не предусмотрена." },
      { title: "Можно ли гарантировать результат?", body: "Каждая ситуация оценивается отдельно. Нельзя заранее гарантировать определённый исход; важно обсудить возможные пути и риски." },
    ],
    ctaEyebrow: "Контакт", ctaTitle: "Давайте разберём ваш вопрос.",
    ctaBody: "Кратко опишите ситуацию. Начнём с уточнения обстоятельств.",
    socialTitle: "Напишите удобным способом", socialIntro: "Возможность обратиться через Telegram или Instagram.",
    socialPending: "Ссылка появится после подключения профиля",
    mapEyebrow: "Где мы", mapTitle: "Место для встречи.",
    mapBody: "На карте показано примерное место в центре Ташкента. Это не адрес реального офиса адвоката.",
    mapBodyLive: "Посмотрите адрес встречи и маршрут на карте.",
    mapNote: "Пример: район сквера Амира Темура, Ташкент. Будет заменён на фактический адрес.",
    mapLink: "Открыть в Google Maps", mapPin: "Пример расположения",
    draftLabel: "Краткое описание вопроса", draftPlaceholder: "Например, у меня вопрос по договору...",
    draftButton: "Скопировать текст сообщения",
    draftCopied: "Сообщение скопировано. Вы можете использовать его в выбранном вами канале связи.",
    draftError: "Не удалось скопировать автоматически. Выделите и скопируйте текст.",
    draftNote: "Канал для приёма обращений пока не подключён. Эта форма ничего не отправляет; не вводите конфиденциальные документы и личные данные.",
    footerNote: "Каждый правовой вопрос индивидуален. Общая информация на сайте не заменяет персональную юридическую консультацию.",
  },
  en: {
    person: "Advocate X", role: "Independent legal practice",
    nav: ["Services", "About us", "How we work", "Contact"],
    eyebrow: "Advocate X / Legal practice", title: "Legal questions deserve", accent: "a clear next step.",
    lead: "A difficult situation calls for clarity and care. We listen to your concern and help you understand the possible ways forward.",
    contactAction: "Discuss my matter", explore: "Explore services", heroCaption: "Clarity. Care. Confidence.",
    markers: ["We listen", "We review the facts", "We explain what comes next"],
    servicesEyebrow: "Practice areas / 01—04", servicesTitle: "Every matter deserves attention.",
    servicesIntro: "Find the relevant area. We can clarify the details of your enquiry in an initial conversation.",
    services: [
      { title: "Legal consultation", body: "We discuss your concern, identify the relevant circumstances and consider possible next steps.", image: "02-consultation.webp", alt: "Illustration of a legal conversation" },
      { title: "Court representation", body: "We review documents, your position and the stages ahead in a dispute or court matter.", image: "03-court-representation.webp", alt: "Courthouse and case file illustration" },
      { title: "Documents", body: "Reviewing, preparing and organizing contracts, applications and other important documents.", image: "04-documents.webp", alt: "Documents and pen illustration" },
      { title: "Business matters", body: "A conversation about legal questions arising in business and the appropriate direction to take.", image: "05-business-law.webp", alt: "Business building and documents" },
    ],
    aboutEyebrow: "About us", aboutTitle: "Listen first. Find the way forward together.",
    aboutBody: "Behind every enquiry is a person making an important decision. Our approach starts with understanding the situation, asking the right questions and explaining the next steps in plain language.",
    aboutQuote: "Good legal support begins with a conversation you understand.",
    resultsEyebrow: "What we work toward", resultsTitle: "Progress starts with clarity.",
    resultsIntro: "The outcome of each matter depends on its circumstances. These are the practical results we work toward in every enquiry.",
    results: [
      { label: "01 / CLARITY", title: "A clear picture", body: "Identify the central question and circumstances that need attention." },
      { label: "02 / ORDER", title: "Documents in order", body: "Review the information available and the documents that may be needed." },
      { label: "03 / DIRECTION", title: "Next steps", body: "Discuss options, limitations and possible risks in plain language." },
    ],
    approachEyebrow: "How I work / 03 steps", approachTitle: "From conversation to a clear plan.",
    approachIntro: "Knowing what happens next matters. Here is how an initial enquiry can move forward.",
    steps: [
      { title: "Listen", body: "Understand your concern and the main questions." },
      { title: "Review information", body: "Consider relevant circumstances and documents." },
      { title: "Explain a direction", body: "Talk through possible next steps." },
    ],
    confidential: "Trust and care with information matter.",
    promisesEyebrow: "Our commitments", promisesTitle: "We promise an approach, not an outcome.",
    promisesIntro: "No legal outcome can be guaranteed in advance. Here is what guides our conversations and work.",
    promises: [
      { title: "Listen with care", body: "Make time to understand your situation without rushing." },
      { title: "Speak clearly", body: "Explain complex questions in words you can use." },
      { title: "Discuss the risks", body: "Be open about limitations and uncertainty." },
      { title: "Handle details with care", body: "Avoid requesting unnecessary documents in an initial message." },
    ],
    questionsEyebrow: "Frequently asked questions", questionsTitle: "Before you reach out.",
    questions: [
      { title: "How does an initial conversation work?", body: "You briefly describe your concern. We then clarify the circumstances and discuss what information might be relevant." },
      { title: "Should I send documents first?", body: "Start with a short description. We can determine which documents are needed once the matter is clearer. This page does not accept file uploads." },
      { title: "Is an outcome guaranteed?", body: "Each matter is assessed individually. No particular outcome can be guaranteed in advance; discussing the possible paths and risks is essential." },
    ],
    ctaEyebrow: "Contact", ctaTitle: "Let's talk through your concern.",
    ctaBody: "Describe your question briefly. The first step is understanding the situation.",
    socialTitle: "Reach out your way", socialIntro: "An option to connect through Telegram or Instagram.",
    socialPending: "Available once a profile is connected",
    mapEyebrow: "Find us", mapTitle: "A place to meet.",
    mapBody: "The map shows a sample point in central Tashkent. It is not a real lawyer's office address.",
    mapBodyLive: "View the meeting address and route on the map.",
    mapNote: "Sample: near Amir Temur Square, Tashkent. Replace with the actual address.",
    mapLink: "View in Google Maps", mapPin: "Sample location",
    draftLabel: "Briefly describe your concern", draftPlaceholder: "For example, I have a question about a contract...",
    draftButton: "Copy message draft", draftCopied: "Message copied. You can use it in your chosen contact channel.",
    draftError: "Automatic copying failed. Select and copy the text instead.",
    draftNote: "The enquiry channel is not connected yet. This form does not send anything; do not enter confidential documents or personal details.",
    footerNote: "Every legal matter is different. General information on this page does not replace individual legal advice.",
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
