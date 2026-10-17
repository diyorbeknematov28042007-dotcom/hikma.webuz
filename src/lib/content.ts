export const navigation = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#loyihalar", label: "Loyihalar" },
  { href: "#yondashuv", label: "Yondashuv" },
  { href: "#haqimizda", label: "Biz haqimizda" },
];
export const primaryCta = "Loyihani muhokama qilish";
export const services = [
  {
    id: "landing",
    title: "Landing page",
    short: "Veb-sahifa",
    category: "Raqamli qiyofa",
    description:
      "Brendingizni aniq tanishtiradigan, mobil qurilmalarga mos va murojaatga yo‘naltirilgan veb-sahifa.",
    features: [
      "Brendingizga mos dizayn",
      "Mobil va desktop ko‘rinish",
      "SEO asoslari, domen va hosting sozlamalari",
    ],
    note: "Domen, hosting va qo‘llab-quvvatlash tarkibi alohida kelishiladi.",
  },
  {
    id: "bot",
    title: "Telegram bot",
    short: "Telegram bot",
    category: "Avtomatlashtirish",
    description:
      "Buyurtmalar, savollar va kundalik jarayonlar uchun biznesingizga mos Telegram bot.",
    features: [
      "Buyurtma va murojaatlarni qabul qilish",
      "Mijozlar bilan qulay muloqot",
      "Ehtiyojingizga mos funksiyalar",
    ],
    note: "Bot funksiyalari loyiha maqsadiga qarab belgilanadi.",
  },
  {
    id: "instagram",
    title: "Instagram Ads",
    short: "Instagram Ads",
    category: "Auditoriyaga chiqish",
    description:
      "Instagram’da biznesingizni kerakli auditoriyaga tanishtirish uchun reklama strategiyasi va boshqaruvi.",
    features: [
      "Auditoriya va reklama strategiyasi",
      "Kreativ va kampaniya sozlamalari",
      "Boshqaruv va natijalarni tahlil qilish",
    ],
    note: "Reklama budjeti va xizmat tarkibi alohida kelishiladi.",
  },
  {
    id: "telegram",
    title: "Telegram Ads",
    short: "Telegram Ads",
    category: "Yangi imkoniyatlar",
    description:
      "Telegram’da brendingizni maqsadli auditoriyaga olib chiqish uchun reklama sozlamalari va tahlil.",
    features: [
      "Maqsadli auditoriyani aniqlash",
      "Kreativ va kampaniyani sozlash",
      "Statistika va hisobot",
    ],
    note: "Natijalar taklif, auditoriya va reklama budjetiga bog‘liq.",
  },
];
export const serviceOptions = [
  ...services.map((service) => service.title),
  "Hali aniq emas",
];
export const values = [
  {
    title: "Aniq maqsad",
    body: "Avval biznes vazifasini tushunamiz. Keyin unga mos sayt, bot yoki reklama yechimini tanlaymiz.",
  },
  {
    title: "Qulay tajriba",
    body: "Mijoz kerakli ma’lumotni topishi, buyurtma berishi va bog‘lanishi oson bo‘lishiga e’tibor beramiz.",
  },
  {
    title: "Izchil yondashuv",
    body: "Vizual uslub, matn va foydalanuvchi yo‘li brendingizning bitta maqsadiga xizmat qiladi.",
  },
  {
    title: "Tushunarli jarayon",
    body: "Xizmat tarkibi, kerakli funksiyalar va keyingi qadamlarni oldindan kelishib olamiz.",
  },
];
export const processSteps = [
  {
    label: "Tushunish",
    title: "Maqsadni aniqlaymiz",
    body: "Biznesingiz, auditoriyangiz va kutilayotgan natijani birga muhokama qilamiz.",
  },
  {
    label: "Rejalashtirish",
    title: "Yechimni tanlaymiz",
    body: "Sayt, bot yoki reklama uchun xizmat tarkibi, kontent va ish rejasini kelishamiz.",
  },
  {
    label: "Ishlab chiqish",
    title: "G‘oyani ishga tushiramiz",
    body: "Kelishilgan reja asosida sahifa, bot yoki reklama kampaniyasini tayyorlaymiz.",
  },
  {
    label: "Tekshirish",
    title: "Natijani kuzatamiz",
    body: "Funksiyalarni tekshiramiz yoki reklama statistikasini tahlil qilib, keyingi qadamlarni belgilaymiz.",
  },
];
export const faqs = [
  {
    q: "Qaysi xizmat menga mos?",
    a: "Brendingizni tanishtirish uchun landing page, buyurtmalarni qulay qabul qilish uchun Telegram bot, auditoriyaga chiqish uchun Instagram yoki Telegram Ads mos bo‘lishi mumkin. Tanlov biznesingiz maqsadidan boshlanadi.",
  },
  {
    q: "Sayt telefonda ham ishlaydimi?",
    a: "Ha. Landing page mobil va desktop ekranlar uchun rejalashtiriladi. Yakuniy sahifa turli ekran o‘lchamlarida tekshiriladi.",
  },
  {
    q: "Narx qanday aniqlanadi?",
    a: "Narx xizmat turi, ish hajmi, kontent va kerakli funksiyalarga qarab kelishiladi. Reklama kampaniyasi uchun reklama budjeti ham alohida muhokama qilinadi.",
  },
  {
    q: "Telegram bot nimalarni qila oladi?",
    a: "Loyiha ehtiyojiga qarab buyurtma qabul qilish, savollarga javob berish, ma’lumot taqdim etish va ayrim jarayonlarni avtomatlashtirish funksiyalari ishlab chiqiladi.",
  },
  {
    q: "Reklama natijasi kafolatlanadimi?",
    a: "Aniq sotuv yoki o‘sish foizini kafolatlamaymiz. Natija taklifingiz, auditoriya, kreativ va budjetga bog‘liq. Kampaniya statistikasi tahlil qilinadi.",
  },
];
