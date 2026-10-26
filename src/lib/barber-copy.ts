import { modernUzbek, type Locale } from "./i18n";

export const styles = [
  "textured-crop", "low-fade", "classic-side-part", "pompadour",
  "buzz-cut", "curly-top", "modern-quiff", "medium-length-layered",
] as const;

export type HairStyle = typeof styles[number];

type Copy = {
  navigation: [string, string, string, string];
  book: string; eyebrow: string; heroTop: string; heroAccent: string; heroBody: string;
  explore: string; servicesLink: string; demo: string; pickerEyebrow: string;
  pickerTitle: string; pickerBody: string; noHair: string; selected: string;
  turnLeft: string; turnRight: string; view: string; swipeHint: string;
  hair: Record<HairStyle, string>;
  studioEyebrow: string; studioTitle: string; studioBody: string;
  serviceEyebrow: string; serviceTitle: string; serviceBody: string;
  services: { title: string; body: string }[];
  priceEyebrow: string; priceTitle: string; priceBody: string;
  prices: { name: string; duration: string; price: string }[];
  samplePrice: string; currency: string;
  locationEyebrow: string; locationTitle: string; locationBody: string;
  address: string; addressHint: string; mapLabel: string;
  contactEyebrow: string; contactTitle: string; contactBody: string;
  channelPending: string; phone: string; conceptNote: string; backTop: string;
};

const copy: Record<Locale, Copy> = {
  uz: {
    navigation: ["Turmaklar", "Xizmatlar", "Narxlar", "Manzil"],
    book: "Boglanish", eyebrow: "Şaxsiy sartarosh sahifasi / konsept",
    heroTop: "Öz uslubingizni", heroAccent: "toping.",
    heroBody: "Avval turmakni tanlang. Keyin har bir rakursdan körib, sartarosh bilan önğay muhokama qiling.",
    explore: "Turmaklarni sinab körish", servicesLink: "Xizmatlarni körish",
    demo: "Interaktiv namoyiş · 8 turmak · 3 rakurs", pickerEyebrow: "01 / Turmak laboratoriyasi",
    pickerTitle: "Qaysi turmak sizniki?", pickerBody: "Bir xil manekenda turmaklarni soliştiring. Tugmalar bilan rakursni özgartiring yoki tasvirni yon tomonga suring.",
    noHair: "Soçsiz", selected: "Tanlangan turmak", turnLeft: "Çap rakursga burish", turnRight: "Öng rakursga burish", view: "Rakurs", swipeHint: "Yon tomonga suring yoki tugmalarni bosing",
    hair: { "textured-crop": "Teksturali crop", "low-fade": "Low fade", "classic-side-part": "Klassik yon taroq", pompadour: "Pompadur", "buzz-cut": "Buzz cut", "curly-top": "Jingalak turmak", "modern-quiff": "Modern quiff", "medium-length-layered": "Örta uzunlik" },
    studioEyebrow: "02 / Muhit", studioTitle: "Uslub — detallardan boshlanadi.", studioBody: "Şaxsiy sartarosh sahifasi uchun konsept: xizmatlar, tanlov va yoziliş yo‘li bitta joyda. Suratdagi salon namuna tasviridir.",
    serviceEyebrow: "03 / Xizmatlar", serviceTitle: "Özingizga mos xizmatni tanlang.", serviceBody: "Xizmat tarkibi sartarosh bilan kelishiladi. Quyidagi bölüm konsept sifatida körsatilgan.",
    services: [
      { title: "Soç turmagi", body: "Şakl, tekstura va kundalik qulaylikni hisobga olgan kesim." },
      { title: "Soqol parvarişi", body: "Kontur, uzunlik va yuz şakliga mos toza işlov." },
      { title: "Styling", body: "Turmakni yakunlaş va uyda saqlaş böyiça maslahatlar." },
    ],
    priceEyebrow: "04 / Narxlar", priceTitle: "Aniq va sodda narxlar.", priceBody: "Bu raqamlar namuna. Haqiqiy sartarosh narxlari tasdiqlangandan keyin almashtiriladi.",
    prices: [
      { name: "Erkaklar soç kesimi", duration: "45 daqiqa", price: "120 000" },
      { name: "Soqolga işlov", duration: "25 daqiqa", price: "70 000" },
      { name: "Soç + soqol", duration: "70 daqiqa", price: "170 000" },
      { name: "Styling", duration: "20 daqiqa", price: "50 000" },
    ],
    samplePrice: "Namuna narxlar", currency: "söm",
    locationEyebrow: "05 / Manzil", locationTitle: "Sizga yaqinroq.", locationBody: "Haqiqiy salon manzili kiritilganda bu bölüm xarita, möljal va iş vaqtini körsatadi.",
    address: "Toşkent, salon manzili kiritiladi", addressHint: "Bu sizning namunaviy manzilingiz", mapLabel: "Salon manzili",
    contactEyebrow: "06 / Aloqa", contactTitle: "Yangi körinişni rejalaymizmi?", contactBody: "Tanlagan turmagingizni eslab qoling va sartarosh bilan boğlaning. Aloqa havolalari haqiqiy salon ma’lumotlari kiritilganda faollaşadi.",
    channelPending: "Havola tez orada", phone: "Telefon raqami kiritiladi", conceptNote: "Bu HIKMA portfoliosi üçün şaxsiy sartarosh sahifasining namunasi. Suratlar, narxlar va manzil haqiqiy salon ma’lumotlari emas.", backTop: "Yuqoriga",
  },
  ru: {
    navigation: ["Причёски", "Услуги", "Цены", "Адрес"], book: "Связаться", eyebrow: "Персональный сайт барбера / концепт",
    heroTop: "Найдите свой", heroAccent: "стиль.", heroBody: "Выберите причёску, посмотрите с разных сторон и обсудите идею с мастером.",
    explore: "Примерить причёски", servicesLink: "Услуги", demo: "Интерактивное демо · 8 причёсок · 3 ракурса", pickerEyebrow: "01 / Студия образов", pickerTitle: "Какая причёска ваша?", pickerBody: "Сравните причёски на одном манекене. Меняйте ракурс кнопками или свайпом.",
    noHair: "Без волос", selected: "Выбрана причёска", turnLeft: "Повернуть влево", turnRight: "Повернуть вправо", view: "Ракурс", swipeHint: "Свайпните или нажмите стрелки",
    hair: { "textured-crop": "Текстурный кроп", "low-fade": "Низкий фейд", "classic-side-part": "Классический пробор", pompadour: "Помпадур", "buzz-cut": "Короткая стрижка", "curly-top": "Кудри", "modern-quiff": "Квифф", "medium-length-layered": "Средняя длина" },
    studioEyebrow: "02 / Атмосфера", studioTitle: "Стиль начинается с деталей.", studioBody: "Концепт личного сайта барбера: услуги, подбор образа и связь с мастером в одном месте. Фото салона иллюстративное.",
    serviceEyebrow: "03 / Услуги", serviceTitle: "Выберите свою услугу.", serviceBody: "Детали услуги обсуждаются с мастером. Этот раздел показан как пример.",
    services: [{ title: "Стрижка", body: "Форма и текстура с учётом вашего стиля." }, { title: "Борода", body: "Чёткий контур и уход за бородой." }, { title: "Укладка", body: "Финальный штрих и советы по домашнему уходу." }],
    priceEyebrow: "04 / Прайс", priceTitle: "Прозрачные цены.", priceBody: "Цены указаны для примера и будут заменены после согласования с реальным барбером.",
    prices: [{ name: "Мужская стрижка", duration: "45 мин", price: "120 000" }, { name: "Борода", duration: "25 мин", price: "70 000" }, { name: "Стрижка + борода", duration: "70 мин", price: "170 000" }, { name: "Укладка", duration: "20 мин", price: "50 000" }],
    samplePrice: "Пример цен", currency: "сум", locationEyebrow: "05 / Адрес", locationTitle: "Ближе, чем кажется.", locationBody: "Когда появится адрес салона, здесь будут карта, ориентиры и часы работы.",
    address: "Ташкент, адрес салона будет добавлен", addressHint: "Пример расположения вашего салона", mapLabel: "Адрес салона", contactEyebrow: "06 / Контакты", contactTitle: "Обсудим новый образ?", contactBody: "Запомните выбранную причёску и свяжитесь с барбером. Ссылки заработают после добавления настоящих контактов.",
    channelPending: "Ссылка появится позже", phone: "Номер телефона будет добавлен", conceptNote: "Демонстрационный персональный сайт барбера в портфолио HIKMA. Фото, цены и адрес не относятся к действующему салону.", backTop: "Наверх",
  },
  en: {
    navigation: ["Styles", "Services", "Prices", "Location"], book: "Contact", eyebrow: "A barber's personal website / concept",
    heroTop: "Find your", heroAccent: "signature look.", heroBody: "Choose a cut, explore three angles, and bring the idea to your barber.",
    explore: "Try hairstyles", servicesLink: "See services", demo: "Interactive preview · 8 styles · 3 views", pickerEyebrow: "01 / The style lab", pickerTitle: "Which style feels like you?", pickerBody: "Compare cuts on the same mannequin. Use the arrows or swipe to change the viewing angle.",
    noHair: "Bald", selected: "Selected style", turnLeft: "Turn left", turnRight: "Turn right", view: "View", swipeHint: "Swipe sideways or use the arrows",
    hair: { "textured-crop": "Textured crop", "low-fade": "Low fade", "classic-side-part": "Classic side part", pompadour: "Pompadour", "buzz-cut": "Buzz cut", "curly-top": "Curly top", "modern-quiff": "Modern quiff", "medium-length-layered": "Medium layers" },
    studioEyebrow: "02 / The space", studioTitle: "Style is in the details.", studioBody: "A concept for a barber's own website: services, an interactive lookbook and a clear way to get in touch. The salon photo is illustrative.",
    serviceEyebrow: "03 / Services", serviceTitle: "Make it your own.", serviceBody: "Your barber will confirm the details. These services are examples for the concept page.",
    services: [{ title: "Haircut", body: "A considered cut for your shape, texture and daily routine." }, { title: "Beard care", body: "Clean lines and a shape that suits your face." }, { title: "Styling", body: "Finishing details and tips to maintain your look." }],
    priceEyebrow: "04 / Pricing", priceTitle: "Clear from the start.", priceBody: "These are illustrative prices. Replace them with the barber's confirmed rates before using this page for bookings.",
    prices: [{ name: "Men's haircut", duration: "45 min", price: "120,000" }, { name: "Beard trim", duration: "25 min", price: "70,000" }, { name: "Haircut + beard", duration: "70 min", price: "170,000" }, { name: "Styling", duration: "20 min", price: "50,000" }],
    samplePrice: "Sample prices", currency: "UZS", locationEyebrow: "05 / Location", locationTitle: "Find your way in.", locationBody: "Once a real salon address is provided, this section can show the map, directions and opening hours.",
    address: "Tashkent, salon address to be added", addressHint: "Your sample salon location", mapLabel: "Salon location", contactEyebrow: "06 / Contact", contactTitle: "Ready for a new look?", contactBody: "Save the style you like and contact the barber. Links activate once actual salon contact details are supplied.",
    channelPending: "Link coming soon", phone: "Phone number to be added", conceptNote: "A personal barber website concept for the HIKMA portfolio. Photos, prices and location do not represent a real salon.", backTop: "Back to top",
  },
};

export const barberCopy = (locale: Locale): Copy => {
  if (locale !== "uz") return copy[locale];
  const map = <T>(value: T): T => {
    if (typeof value === "string") return modernUzbek(value) as T;
    if (Array.isArray(value)) return value.map(map) as T;
    if (value && typeof value === "object")
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, map(item)])) as T;
    return value;
  };
  return map(copy.uz);
};
