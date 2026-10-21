import { faqs, processSteps, values } from "./content";
import { servicePages } from "./service-pages";
import { localePath, modernUzbek, type Locale } from "./i18n";

const localizeUz = <T>(value: T): T => {
  if (typeof value === "string") return modernUzbek(value) as T;
  if (Array.isArray(value)) return value.map(localizeUz) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) =>
        ["href", "slug", "id", "sticker"].includes(key)
          ? [key, item]
          : [key, localizeUz(item)],
      ),
    ) as T;
  return value;
};

export const homeCopy = {
  uz: {
    nav: ["Xizmatlar", "Loyihalar", "Yondashuv", "Biz haqimizda"],
    cta: "Loyihani muhokama qilish",
    contactNav: "Bog‘lanish",
    tagline: "Millat uchun zamonaviy yechimlar.",
    heroEyebrow: "HIKMA / Raqamli yechimlar",
    heroTitle: "Raqamli dunyoda",
    heroAccent: "o‘z o‘rningiz.",
    heroDescription: "Veb-sahifa, Telegram bot va maqsadli reklama. G‘oyangizni biznesingizga mos raqamli yechimga aylantiramiz.",
    viewServices: "Xizmatlarni ko‘rish",
    quickServices: "Xizmatlarni tez tanlash",
    servicesTitle: "Sizga kerakli raqamli yechim.",
    servicesDescription: "Tanishtiring. Avtomatlashtiring. Auditoriyangizga yetib boring.",
    serviceMore: "Xizmat haqida batafsil",
    approachEyebrow: "Yondashuvimiz",
    approachTitle: "Bir maqsad. Bir-birini to‘ldiradigan yechimlar.",
    approachDescription: "Sayt, bot va reklama mijozingizga kerakli ma’lumotni topish va keyingi qadamni tushunishga yordam bersin.",
    processTitle: "G‘oyadan amaliy yechimgacha.",
    processAccent: "Aniq bosqichlar.",
    processNote: "Aniq ish hajmi va muddat loyiha talablariga qarab kelishiladi.",
    aboutTitle: "Bir brend. Zamonaviy yechimlarga keng qarash.",
    aboutDescription: "HIKMA raqamli xizmatlar va texnologik g‘oyalarni birlashtiradigan brend. Landing page, Telegram bot, Instagram Ads va Telegram Ads orqali bizneslarga raqamli ishtirokini shakllantirishda yordam beramiz.",
    aboutMission: "Texnologiya va dizaynni sodda, tushunarli va amaliy yechimlarga aylantirish.",
    aboutVision: "Sun’iy intellekt, avtomatlashtirish va startaplar ekotizimi brendimizning kengroq qarashiga kiradi.",
    faqTitle: "Ko‘p so‘raladigan savollar.",
    projectEyebrow: "Amaldagi loyiha / O‘z brendimiz uchun",
    projectTitle: "HIKMA’ning raqamli manzili.",
    projectDescription: "Hikmaweb.uz — xizmatlarimizni tanishtiradigan va loyiha haqida suhbat boshlashga yordam beradigan sayt.",
    projectLink: "Loyiha bilan tanishish",
    projectFacts: [
      ["Vazifa", "Brend va xizmatlarni aniq tanishtirish"],
      ["Yechim", "Mobilga mos sayt va xizmat sahifalari"],
      ["Murojaat", "Loyiha tavsifi va bevosita aloqa kanallari"],
    ],
  },
  ru: {
    nav: ["Услуги", "Проекты", "Подход", "О нас"],
    cta: "Обсудить проект",
    contactNav: "Связаться",
    tagline: "Современные решения для общества.",
    heroEyebrow: "HIKMA / Цифровые решения",
    heroTitle: "Ваше место",
    heroAccent: "в цифровом мире.",
    heroDescription: "Сайты, Telegram-боты и таргетированная реклама. Превращаем вашу идею в цифровое решение для бизнеса.",
    viewServices: "Смотреть услуги",
    quickServices: "Быстрый выбор услуги",
    servicesTitle: "Цифровое решение для вашей задачи.",
    servicesDescription: "Представьте бренд. Автоматизируйте процессы. Найдите аудиторию.",
    serviceMore: "Подробнее об услуге",
    approachEyebrow: "Наш подход",
    approachTitle: "Одна цель. Решения, которые усиливают друг друга.",
    approachDescription: "Сайт, бот и реклама помогают клиенту найти нужную информацию и понять следующий шаг.",
    processTitle: "От идеи к реализации.",
    processAccent: "Понятные этапы.",
    processNote: "Объём и сроки работы согласовываются после изучения задачи.",
    aboutTitle: "Один бренд. Широкий взгляд на цифровые решения.",
    aboutDescription: "HIKMA объединяет цифровые услуги и технологические идеи. Мы помогаем бизнесу укреплять присутствие в сети с помощью сайтов, Telegram-ботов и рекламы в Instagram и Telegram.",
    aboutMission: "Делаем технологии и дизайн простыми, понятными и полезными.",
    aboutVision: "Искусственный интеллект, автоматизация и стартап-экосистема входят в наше более широкое видение.",
    faqTitle: "Частые вопросы.",
    projectEyebrow: "Реальный проект / Для собственного бренда",
    projectTitle: "Цифровой дом HIKMA.",
    projectDescription: "Hikmaweb.uz знакомит с нашими услугами и помогает начать разговор о вашем проекте.",
    projectLink: "Посмотреть проект",
    projectFacts: [
      ["Задача", "Понятно представить бренд и услуги"],
      ["Решение", "Адаптивный сайт и страницы услуг"],
      ["Контакт", "Описание проекта и прямые каналы связи"],
    ],
  },
  en: {
    nav: ["Services", "Projects", "Approach", "About us"],
    cta: "Discuss a project",
    contactNav: "Get in touch",
    tagline: "Modern solutions for our community.",
    heroEyebrow: "HIKMA / Digital solutions",
    heroTitle: "Find your place",
    heroAccent: "in the digital world.",
    heroDescription: "Web pages, Telegram bots and targeted ads. We turn your idea into a digital solution shaped around your business.",
    viewServices: "Explore services",
    quickServices: "Jump to a service",
    servicesTitle: "A digital solution for your next move.",
    servicesDescription: "Introduce your brand. Automate the routine. Reach the right people.",
    serviceMore: "Explore this service",
    approachEyebrow: "Our approach",
    approachTitle: "One goal. Solutions that work together.",
    approachDescription: "Your site, bot and ads should help customers find what they need and know what to do next.",
    processTitle: "From idea to impact.",
    processAccent: "Clear steps.",
    processNote: "Scope and timing are agreed once we understand your project.",
    aboutTitle: "One brand. A broader view of digital solutions.",
    aboutDescription: "HIKMA brings digital services and technology ideas together. We help businesses build their online presence through landing pages, Telegram bots, Instagram Ads and Telegram Ads.",
    aboutMission: "We make technology and design simple, clear and practical.",
    aboutVision: "AI, automation and the startup ecosystem are part of our broader outlook.",
    faqTitle: "Frequently asked questions.",
    projectEyebrow: "Live project / Made for our brand",
    projectTitle: "HIKMA’s digital home.",
    projectDescription: "Hikmaweb.uz introduces our services and helps start a conversation about your project.",
    projectLink: "View the project",
    projectFacts: [
      ["Goal", "Present our brand and services clearly"],
      ["Solution", "Responsive site and dedicated service pages"],
      ["Contact", "Project brief and direct contact channels"],
    ],
  },
} as const;

const homeLists = {
  ru: {
    values: [
      ["Чёткая цель", "Сначала разбираемся в задаче бизнеса, затем выбираем подходящий сайт, бот или рекламное решение."],
      ["Удобный опыт", "Клиенту должно быть легко найти информацию, оставить заявку и связаться с вами."],
      ["Единый подход", "Визуальный стиль, текст и путь пользователя работают на одну цель бренда."],
      ["Прозрачный процесс", "Заранее согласовываем состав услуг, необходимые функции и следующие шаги."],
    ],
    steps: [
      ["Понимаем", "Определяем цель", "Обсуждаем ваш бизнес, аудиторию и ожидаемый результат."],
      ["Планируем", "Выбираем решение", "Согласовываем объём, контент и план работ для сайта, бота или рекламы."],
      ["Создаём", "Запускаем идею", "По утверждённому плану готовим страницу, бота или рекламную кампанию."],
      ["Проверяем", "Следим за результатом", "Тестируем функции или анализируем статистику рекламы и определяем следующие шаги."],
    ],
    faqs: [
      ["Какая услуга мне подойдёт?", "Лендинг помогает представить бренд, Telegram-бот — принимать заявки, а реклама — выходить на аудиторию. Выбор зависит от вашей цели."],
      ["Сайт будет работать на телефоне?", "Да. Мы проектируем лендинги для мобильных и настольных экранов и проверяем разные размеры."],
      ["Как определяется стоимость?", "Она зависит от вида услуги, объёма работ, контента и функций. Рекламный бюджет обсуждается отдельно."],
      ["Что умеет Telegram-бот?", "В зависимости от проекта он может принимать заявки, отвечать на вопросы, показывать информацию и автоматизировать повторяющиеся действия."],
      ["Вы гарантируете результат рекламы?", "Конкретное число продаж или процент роста гарантировать нельзя. Результат зависит от предложения, аудитории, креатива и бюджета; статистику кампании мы анализируем."],
    ],
  },
  en: {
    values: [
      ["A clear goal", "We start with the business problem, then choose the right site, bot or advertising solution."],
      ["Effortless experience", "Customers should easily find information, place an order and get in touch."],
      ["One coherent approach", "Visual identity, copy and the user journey all serve the same brand goal."],
      ["A transparent process", "We agree on scope, features and next steps before work begins."],
    ],
    steps: [
      ["Understand", "Define the goal", "We discuss your business, audience and desired outcome."],
      ["Plan", "Choose the solution", "We agree on scope, content and a plan for the site, bot or campaign."],
      ["Create", "Bring the idea to life", "We build the page, bot or campaign around the agreed plan."],
      ["Review", "Track the result", "We test features or analyse campaign data and decide what comes next."],
    ],
    faqs: [
      ["Which service is right for me?", "A landing page introduces your brand, a Telegram bot handles requests, and Instagram or Telegram Ads help you reach people. Your goal decides the mix."],
      ["Will the site work on phones?", "Yes. Landing pages are designed and checked for mobile and desktop screens."],
      ["How is pricing decided?", "It depends on the service, scope, content and features. Advertising spend is discussed separately."],
      ["What can a Telegram bot do?", "Depending on your needs, it can accept orders, answer questions, provide information and automate repeated steps."],
      ["Do you guarantee ad results?", "We cannot guarantee a specific number of sales or growth rate. Results depend on your offer, audience, creative and budget; we analyse the campaign data."],
    ],
  },
};

export function getHomeLists(locale: Locale) {
  if (locale === "uz") return {
    values: localizeUz(values),
    steps: localizeUz(processSteps),
    faqs: localizeUz(faqs),
  };
  const list = homeLists[locale];
  return {
    values: list.values.map(([title, body]) => ({ title, body })),
    steps: list.steps.map(([label, title, body]) => ({ label, title, body })),
    faqs: list.faqs.map(([q, a]) => ({ q, a })),
  };
}

export function getHomeCopy(locale: Locale) {
  return locale === "uz" ? localizeUz(homeCopy.uz) : homeCopy[locale];
}

export function getServicePages(locale: Locale) {
  if (locale === "uz") return localizeUz(servicePages);
  return servicePages.map((service) => ({
    ...service,
    ...translatedServices[locale][service.id as keyof typeof translatedServices.en],
    href: localePath(locale, service.href),
  }));
}

export function getService(locale: Locale, slug: string) {
  return getServicePages(locale).find((service) => service.slug === slug);
}

const translatedServices = {
  en: {
    landing: {
      title: "Landing page", short: "Web page", category: "Digital presence", heading: "Landing page design",
      description: "A responsive, brand-led page that clearly presents your offer and makes it easy to get in touch.",
      features: ["Design aligned with your brand", "Mobile and desktop layouts", "SEO basics, domain and hosting setup"],
      note: "Domain, hosting and ongoing support are scoped separately.",
      seoDescription: "Responsive landing pages for businesses: brand design, clear content, a contact path and SEO foundations. Discuss your project with HIKMA.",
      intro: "One focused page to explain your service and invite enquiries. We shape it around your offer, audience and visual identity.",
      audience: "For a business launching a new service, an expert building a personal brand or a campaign that needs a clear destination. Larger catalogues and account features are scoped separately.",
      deliverables: [
        { title: "Offer and page structure", body: "We plan the hero message, service story, trust signals and contact journey. Copy responsibilities are agreed upfront." },
        { title: "Brand-led design", body: "A visual system based on your logo and colours, with readable mobile and desktop layouts and clear calls to action." },
        { title: "Contact and integrations", body: "We connect agreed contact channels. Forms, bots and other systems are scoped according to your needs and data handling requirements." },
        { title: "Launch and SEO foundations", body: "We prepare page titles, descriptions, indexing settings and internal links. Domain, hosting and Search Console work depend on the agreed scope." },
      ],
      steps: [
        { title: "Define the offer", body: "We identify your audience, the service you offer and the action visitors should take." },
        { title: "Design and build", body: "Once structure and content are agreed, we build and review the page and its main user journey." },
        { title: "Test and hand over", body: "We check links, mobile layout and agreed features, then clarify domain and support arrangements." },
      ],
      preparation: ["A brief description of your business or service", "Logo, brand colours and existing assets", "Service details, contact channels and real work examples"],
      faqs: [
        { q: "How much does a landing page cost and how long does it take?", a: "Both depend on the number of sections, design, copy, integrations and readiness of your materials. We agree on scope before work begins." },
        { q: "Are domain and hosting included?", a: "Purchasing, hosting fees, setup and future support are discussed separately. Account ownership is clarified before handover." },
        { q: "Will the site appear in Google?", a: "We add technical foundations for indexing. Google decides when and where pages appear; ranking or timing cannot be guaranteed." },
        { q: "Can I see an example?", a: "Hikmaweb.uz is a live site built for our own brand. Its scope and outcome are shown on the Projects page." },
      ],
    },
    bot: {
      title: "Telegram bot", short: "Telegram bot", category: "Automation", heading: "Telegram bot development",
      description: "A Telegram bot tailored to your orders, questions and everyday workflows.",
      features: ["Accept orders and enquiries", "Simple customer conversations", "Features shaped around your needs"],
      note: "Bot features are defined around your project goals.",
      seoDescription: "A Telegram bot for orders, information and business automation. Explore HIKMA's custom bot development.",
      intro: "A straightforward Telegram bot that helps customers order or find information. We study the process first, then choose the functions that simplify it.",
      audience: "For businesses answering repeated questions, taking orders in chat or organising incoming requests. Features and integrations depend on your workflow.",
      deliverables: [
        { title: "Conversation flow", body: "We plan the welcome message, menus, questions and next steps so visitors know what to do." },
        { title: "Orders and requests", body: "The bot can collect agreed details, provide information and pass requests to an administrator." },
        { title: "Useful integrations", body: "We assess connections to a site, spreadsheet or another service before agreeing on technical scope and costs." },
        { title: "Testing and launch", body: "We test key paths and error states, then agree on hosting, access and ongoing support." },
      ],
      steps: [
        { title: "Understand the workflow", body: "We map how orders arrive today and which tasks repeat." },
        { title: "Build the bot", body: "We implement the agreed menu, flow and necessary integrations." },
        { title: "Test and hand over", body: "We try both customer and admin journeys and agree on support terms." },
      ],
      preparation: ["The problem the bot should solve", "Your current order or enquiry process", "Menu copy, services and integration requirements"],
      faqs: [
        { q: "Can a bot replace an operator entirely?", a: "It handles agreed repetitive tasks. Complex cases should still have a path to a person." },
        { q: "Can it take payments or connect to a CRM?", a: "These are optional features; provider support, permissions, security and scope must be assessed separately." },
        { q: "What about hosting and maintenance?", a: "Infrastructure and support depend on the project. Costs and responsibilities are agreed in advance." },
      ],
    },
    instagram: {
      title: "Instagram Ads", short: "Instagram Ads", category: "Audience growth", heading: "Instagram Ads management",
      description: "Campaign strategy and management to introduce your business to a relevant Instagram audience.",
      features: ["Audience and ad strategy", "Creative and campaign setup", "Management and performance review"],
      note: "Ad spend and service scope are agreed separately.",
      seoDescription: "Instagram Ads audience selection, creative, campaign setup and performance analysis with HIKMA.",
      intro: "Strategy and campaign management to reach a relevant audience on Instagram. We start with your offer, customer and advertising goal.",
      audience: "For businesses aiming to build awareness, attract profile visits or receive enquiries. Your profile, offer and response process also need to be ready.",
      deliverables: [
        { title: "Goal and audience", body: "We define the desired action and build audience hypotheses around your business, location and offer." },
        { title: "Ad creative", body: "We plan messages, visuals and calls to action. Asset production is agreed beforehand." },
        { title: "Campaign setup", body: "We check account access, then configure the agreed audience, spend and schedule subject to platform review." },
        { title: "Analysis and next steps", body: "We review campaign metrics alongside real enquiries and plan the next tests." },
      ],
      steps: [
        { title: "Assess the offer", body: "We review your product, profile and enquiry flow, then agree on goals and budget." },
        { title: "Prepare and launch", body: "We set up creative, audience and campaign settings; platform moderation applies." },
        { title: "Review and refine", body: "Once enough data is available, we discuss changes to budget and creative." },
      ],
      preparation: ["Your Instagram profile and offer", "Target customer, location and advertising budget", "Existing photos or video and your enquiry process"],
      faqs: [
        { q: "Is ad spend included in the fee?", a: "Platform spend and HIKMA's service fee are separate. Creative and management scope are defined in the proposal." },
        { q: "How many customers or sales will I get?", a: "No exact number can be guaranteed. Results depend on offer, audience, creative, budget and follow-up." },
        { q: "Do I need to send my password?", a: "No. Do not share passwords in ordinary chat; use the platform's access controls." },
      ],
    },
    telegram: {
      title: "Telegram Ads", short: "Telegram Ads", category: "New opportunities", heading: "Telegram Ads management",
      description: "Targeted Telegram campaigns that bring your brand to the right audience, with setup and analysis.",
      features: ["Define your target audience", "Set up creative and campaign", "Statistics and reporting"],
      note: "Results depend on your offer, audience and ad spend.",
      seoDescription: "Telegram Ads audience targeting, ad copy, campaign setup and reporting with HIKMA.",
      intro: "We plan, prepare and analyse Telegram campaigns to reach a relevant audience. The destination—channel, bot or other agreed path—is part of the plan.",
      audience: "For projects promoting a channel, bringing users to a bot or raising interest in an offer. We check the destination and platform requirements first.",
      deliverables: [
        { title: "Audience and objective", body: "We define who should see the ad and what action should follow, within the options available in your account." },
        { title: "Message and destination", body: "We write concise copy and align the promised offer with the real channel or bot experience." },
        { title: "Campaign preparation", body: "We confirm account access, destination and budget, then submit the campaign for platform review." },
        { title: "Statistics and reporting", body: "We assess available metrics against the goal without treating clicks, subscribers and orders as the same outcome." },
      ],
      steps: [
        { title: "Get ready", body: "We review your channel or bot, offer, audience, budget and metrics." },
        { title: "Launch the campaign", body: "We prepare the copy and settings; the start depends on account status and moderation." },
        { title: "Analyse and improve", body: "We review statistics and plan the next test for message, audience or budget." },
      ],
      preparation: ["The channel, bot or offer link", "Your audience and campaign goal", "Budget, existing ad account and content assets"],
      faqs: [
        { q: "Is Telegram Ads the same as a channel post?", a: "No. Telegram Ads runs through the platform's ad system; a placement arranged with a channel owner is a different format." },
        { q: "What is the minimum budget?", a: "It depends on account type, available ad tools and campaign needs. We confirm current terms before agreeing on costs." },
        { q: "Do you guarantee subscribers or sales?", a: "No exact number is guaranteed. We report verifiable metrics and explain what influences results." },
      ],
    },
  },
  ru: {
    landing: {
      title: "Лендинг", short: "Веб-страница", category: "Цифровой образ", heading: "Разработка лендинга",
      description: "Адаптивная страница в стиле бренда, которая понятно представляет предложение и помогает связаться с вами.",
      features: ["Дизайн под ваш бренд", "Версии для телефона и компьютера", "Основы SEO, домен и хостинг"],
      note: "Домен, хостинг и дальнейшая поддержка согласовываются отдельно.",
      seoDescription: "Адаптивный лендинг для бизнеса: фирменный дизайн, понятный контент, путь к заявке и основы SEO. Обсудите проект с HIKMA.",
      intro: "Одна сфокусированная страница, чтобы объяснить услугу и пригласить клиента к диалогу. Мы учитываем ваше предложение, аудиторию и визуальный стиль.",
      audience: "Для запуска новой услуги, личного бренда или рекламы, которой нужна понятная целевая страница. Большие каталоги и личные кабинеты оцениваются отдельно.",
      deliverables: [
        { title: "Предложение и структура", body: "Планируем главный экран, описание услуг, аргументы доверия и путь к контакту. Заранее определяем, кто готовит тексты." },
        { title: "Фирменный дизайн", body: "Подбираем стиль на основе логотипа и цветов, создаём читаемую мобильную и настольную версии." },
        { title: "Контакты и интеграции", body: "Подключаем согласованные каналы связи. Формы, боты и другие системы обсуждаются с учётом обработки данных." },
        { title: "Запуск и основы SEO", body: "Готовим заголовки, описания, индексацию и внутренние ссылки. Домен, хостинг и Search Console входят в согласованный объём." },
      ],
      steps: [
        { title: "Определяем предложение", body: "Выясняем, кому адресована услуга и какое действие должен совершить посетитель." },
        { title: "Проектируем и создаём", body: "После согласования структуры и контента разрабатываем страницу и проверяем основной путь пользователя." },
        { title: "Тестируем и передаём", body: "Проверяем ссылки, мобильную версию и функции, уточняем условия домена и поддержки." },
      ],
      preparation: ["Краткое описание бизнеса или услуги", "Логотип, фирменные цвета и материалы", "Состав услуги, контакты и реальные примеры работ"],
      faqs: [
        { q: "Сколько стоит лендинг и каковы сроки?", a: "Это зависит от числа блоков, дизайна, текстов, интеграций и готовности материалов. Состав работ согласовываем заранее." },
        { q: "Домен и хостинг включены?", a: "Покупка, оплата, подключение и поддержка обсуждаются отдельно. Владение учётными записями определяем до передачи." },
        { q: "Сайт появится в Google?", a: "Мы подготовим техническую основу для индексации. Сроки и позиции определяет Google; гарантировать их нельзя." },
        { q: "Можно увидеть пример?", a: "Hikmaweb.uz — действующий проект для нашего бренда. Он представлен на странице «Проекты»." },
      ],
    },
    bot: {
      title: "Telegram-бот", short: "Telegram-бот", category: "Автоматизация", heading: "Разработка Telegram-бота",
      description: "Бот под ваши заказы, вопросы клиентов и ежедневные процессы.",
      features: ["Приём заказов и заявок", "Удобный диалог с клиентом", "Функции под вашу задачу"],
      note: "Возможности бота определяются целями проекта.",
      seoDescription: "Telegram-бот для заказов, информации и автоматизации бизнеса. Индивидуальная разработка от HIKMA.",
      intro: "Понятный бот, через который клиент может оформить заказ или найти информацию. Сначала изучаем процесс, затем выбираем функции для его упрощения.",
      audience: "Для компаний с повторяющимися вопросами, заказами в чате или потоком заявок. Возможности и интеграции зависят от вашего процесса.",
      deliverables: [
        { title: "Сценарий диалога", body: "Продумываем приветствие, меню, вопросы и следующие шаги, чтобы пользователю было понятно, что делать." },
        { title: "Заказы и заявки", body: "Бот собирает согласованные данные, показывает информацию и передаёт обращения администратору." },
        { title: "Нужные интеграции", body: "Проверяем возможность подключения сайта, таблицы или сервиса и согласовываем стоимость." },
        { title: "Тестирование и запуск", body: "Проверяем основные сценарии и ошибки, затем договариваемся о хостинге и поддержке." },
      ],
      steps: [
        { title: "Изучаем процесс", body: "Разбираемся, как сейчас поступают заказы и какие действия повторяются." },
        { title: "Разрабатываем бота", body: "Создаём согласованное меню, сценарий и необходимые интеграции." },
        { title: "Тестируем и передаём", body: "Проверяем путь клиента и администратора, определяем условия обслуживания." },
      ],
      preparation: ["Задача, которую должен решить бот", "Текущий путь заказа или заявки", "Тексты меню, услуги и список интеграций"],
      faqs: [
        { q: "Бот полностью заменит оператора?", a: "Он выполняет согласованные повторяющиеся задачи. Для сложных вопросов лучше оставить связь с человеком." },
        { q: "Можно добавить оплату или CRM?", a: "Да, после оценки провайдера, доступа, безопасности и объёма работ; это отдельные функции." },
        { q: "Как устроены хостинг и поддержка?", a: "Инфраструктура и обслуживание зависят от проекта. Затраты и обязанности согласовываются заранее." },
      ],
    },
    instagram: {
      title: "Instagram Ads", short: "Instagram Ads", category: "Рост аудитории", heading: "Настройка Instagram Ads",
      description: "Стратегия и ведение кампаний, чтобы познакомить нужную аудиторию с вашим бизнесом.",
      features: ["Аудитория и стратегия", "Креативы и настройка кампании", "Управление и анализ результатов"],
      note: "Рекламный бюджет и состав услуг согласовываются отдельно.",
      seoDescription: "Instagram Ads: выбор аудитории, рекламные креативы, настройка и анализ кампаний вместе с HIKMA.",
      intro: "Стратегия и управление рекламой для знакомства вашего бизнеса с релевантной аудиторией. Начинаем с предложения, клиента и цели.",
      audience: "Для компаний, которым нужны узнаваемость, переходы в профиль или заявки. Профиль, предложение и обработка обращений также должны быть готовы.",
      deliverables: [
        { title: "Цель и аудитория", body: "Определяем ожидаемое действие и гипотезы аудитории с учётом бизнеса, региона и предложения." },
        { title: "Рекламный креатив", body: "Планируем сообщение, визуал и призыв. Объём производства материалов согласовывается заранее." },
        { title: "Настройка кампании", body: "Проверяем доступ к аккаунту, настраиваем аудиторию, бюджет и сроки; действует модерация платформы." },
        { title: "Анализ и следующие шаги", body: "Сопоставляем рекламные показатели с реальными обращениями и планируем новые тесты." },
      ],
      steps: [
        { title: "Анализируем предложение", body: "Изучаем продукт, профиль и обработку заявок, согласовываем цель и бюджет." },
        { title: "Готовим и запускаем", body: "Настраиваем креатив, аудиторию и кампанию с учётом правил платформы." },
        { title: "Оцениваем и улучшаем", body: "После накопления данных обсуждаем изменения бюджета и креативов." },
      ],
      preparation: ["Профиль Instagram и описание предложения", "Целевой клиент, регион и бюджет", "Фото или видео и порядок обработки заявок"],
      faqs: [
        { q: "Рекламный бюджет входит в стоимость?", a: "Расходы платформы и вознаграждение HIKMA согласовываются отдельно. Состав креативов и управления указан в предложении." },
        { q: "Сколько клиентов или продаж будет?", a: "Точную цифру гарантировать нельзя. Результат зависит от предложения, аудитории, креатива, бюджета и обработки заявок." },
        { q: "Нужно отправить пароль?", a: "Нет. Не передавайте пароль в обычном чате; используйте управление доступом на платформе." },
      ],
    },
    telegram: {
      title: "Telegram Ads", short: "Telegram Ads", category: "Новые возможности", heading: "Настройка Telegram Ads",
      description: "Таргетированная реклама в Telegram: подготовка кампании и анализ результатов.",
      features: ["Определение целевой аудитории", "Креатив и настройка кампании", "Статистика и отчётность"],
      note: "Результат зависит от предложения, аудитории и бюджета.",
      seoDescription: "Telegram Ads: аудитория, рекламный текст, настройка кампании и анализ статистики с HIKMA.",
      intro: "Готовим и анализируем кампании для выхода на нужную аудиторию Telegram. Дальнейший путь — канал, бот или другая площадка — часть плана.",
      audience: "Для продвижения канала, привлечения пользователей в бот или интереса к предложению. Сначала проверяем страницу назначения и требования платформы.",
      deliverables: [
        { title: "Аудитория и цель", body: "Определяем, кому показывать рекламу и какого действия ждать, в рамках доступных настроек аккаунта." },
        { title: "Сообщение и переход", body: "Пишем короткий понятный текст и проверяем, что обещание соответствует содержимому канала или бота." },
        { title: "Подготовка кампании", body: "Уточняем доступ, ссылку и бюджет, затем отправляем кампанию на модерацию платформы." },
        { title: "Статистика и отчёт", body: "Оцениваем показатели относительно цели, не смешивая клики, подписки и реальные заказы." },
      ],
      steps: [
        { title: "Подготовка", body: "Изучаем канал или бот, предложение, аудиторию, бюджет и показатели." },
        { title: "Запуск кампании", body: "Готовим текст и настройки; старт зависит от аккаунта и модерации." },
        { title: "Анализ и улучшение", body: "Изучаем статистику и планируем новые тесты сообщения, аудитории или бюджета." },
      ],
      preparation: ["Ссылка на канал, бот или предложение", "Аудитория и цель кампании", "Бюджет, аккаунт и материалы"],
      faqs: [
        { q: "Telegram Ads и пост в канале — одно и то же?", a: "Нет. Telegram Ads использует рекламную систему платформы, а размещение у владельца канала — другой формат." },
        { q: "Какой минимальный бюджет?", a: "Он зависит от типа аккаунта и доступных инструментов. Условия проверяются перед согласованием расходов." },
        { q: "Гарантируете подписчиков или продажи?", a: "Точную цифру нет. Мы предоставляем проверяемые показатели и объясняем, что влияет на результат." },
      ],
    },
  },
} as const;
