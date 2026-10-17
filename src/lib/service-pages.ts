import { services } from "./content";

type ServiceDetail = {
  slug: string;
  heading: string;
  seoDescription: string;
  intro: string;
  audience: string;
  deliverables: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  preparation: string[];
  faqs: { q: string; a: string }[];
};

const details: Record<string, ServiceDetail> = {
  landing: {
    slug: "landing-page",
    heading: "Landing page yaratish",
    seoDescription:
      "Biznes va mutaxassislar uchun mobilga mos landing page: brend dizayni, tushunarli kontent, murojaat yo‘li va SEO asoslari. HIKMA bilan loyihani muhokama qiling.",
    intro:
      "Xizmatingizni tushuntirish va mijozni murojaatga olib kelish uchun bitta aniq sahifa. HIKMA landing page’ni biznesingizning taklifi, auditoriyasi va vizual uslubiga mos ishlab chiqadi.",
    audience:
      "Yangi xizmatni ishga tushirayotgan biznes, shaxsiy brendini tanishtirayotgan mutaxassis yoki reklama orqali kelgan tashrifchilar uchun aniq taklif sahifasi kerak bo‘lgan loyihalarga mos. Ko‘p bo‘limli katalog yoki shaxsiy kabinet kerak bo‘lsa, ish hajmi alohida baholanadi.",
    deliverables: [
      {
        title: "Taklif va sahifa tuzilmasi",
        body: "Birinchi ekrandagi asosiy taklif, xizmat tavsifi, ishonch uchun kerakli ma’lumotlar va bog‘lanish yo‘lini birga rejalashtiramiz. Matn hajmi va tayyorlash mas’uliyati oldindan kelishiladi.",
      },
      {
        title: "Brendga mos dizayn",
        body: "Logotip, ranglar va auditoriyangizga mos vizual uslub tanlanadi. Mobil va desktop ekranlar uchun o‘qilishi qulay matn, tushunarli tugmalar va sodda navigatsiya yaratiladi.",
      },
      {
        title: "Murojaat va integratsiyalar",
        body: "Telegram, telefon yoki kelishilgan aloqa kanaliga yo‘naltirish qo‘shiladi. So‘rov formasi, bot yoki boshqa tizimga ulash kerak bo‘lsa, funksiyalar va ma’lumotlarni qayta ishlash tartibi alohida belgilanadi.",
      },
      {
        title: "Ishga tushirish va SEO asoslari",
        body: "Sahifa sarlavhasi, tavsifi, indekslash sozlamalari va ichki havolalar tayyorlanadi. Domen, hosting va Search Console ulash ishlari kelishilgan tarkibga qarab bajariladi.",
      },
    ],
    steps: [
      {
        title: "Taklifni aniqlash",
        body: "Kimga, qanday xizmat taklif qilishingiz va tashrifchi sahifada qaysi harakatni bajarishi kerakligini belgilaymiz.",
      },
      {
        title: "Dizayn va ishlab chiqish",
        body: "Tuzilma va kontent kelishilgach, sahifani ishlab chiqamiz. Dizayn hamda asosiy foydalanuvchi yo‘lini birgalikda ko‘rib chiqamiz.",
      },
      {
        title: "Tekshirish va topshirish",
        body: "Havolalar, mobil ko‘rinish va kelishilgan funksiyalar tekshiriladi. Domen ulanishi va keyingi qo‘llab-quvvatlash shartlari aniqlashtiriladi.",
      },
    ],
    preparation: [
      "Biznes yoki xizmatning qisqacha tavsifi",
      "Logotip, brend ranglari va mavjud materiallar",
      "Xizmat tarkibi, aloqa kanallari va haqiqiy ish namunalari",
    ],
    faqs: [
      {
        q: "Landing page narxi va muddati qancha?",
        a: "Narx va muddat bo‘limlar soni, dizayn, matn, integratsiyalar va materiallar tayyorligiga qarab belgilanadi. Vazifa aniqlangach, ish tarkibi va taklif kelishiladi.",
      },
      {
        q: "Domen va hosting ham xizmatga kiradimi?",
        a: "Domen sotib olish, hosting to‘lovi, ulash va keyingi xizmat ko‘rsatish alohida muhokama qilinadi. Qaysi hisoblar sizga tegishli bo‘lishi va ularni kim boshqarishi topshirishdan oldin aniqlashtiriladi.",
      },
      {
        q: "Sayt Google qidiruvida chiqadimi?",
        a: "Indekslashga tayyor texnik asoslar qo‘shiladi. Google sahifani qachon indekslashi va qaysi o‘rinda ko‘rsatishini o‘zi belgilaydi; birinchi o‘rin yoki aniq muddat kafolatlanmaydi.",
      },
      {
        q: "Tayyor sayt namunasini ko‘rsam bo‘ladimi?",
        a: "Hikmaweb.uz — o‘z brendimiz uchun ishlab chiqilgan amaldagi loyiha. Uning vazifasi va bajarilgan ishlari «Loyihalar» sahifasida ochiq ko‘rsatilgan.",
      },
    ],
  },
  bot: {
    slug: "telegram-bot",
    heading: "Telegram bot yaratish",
    seoDescription:
      "Buyurtma va murojaatlarni qabul qilish, ma’lumot berish va kundalik ishlarni avtomatlashtirish uchun biznesingizga mos Telegram bot. HIKMA xizmatlari.",
    intro:
      "Mijoz buyurtma berishi yoki kerakli ma’lumotni topishi uchun tushunarli Telegram bot. Avval kundalik jarayonni o‘rganamiz, so‘ng uni soddalashtiradigan funksiyalarni tanlaymiz.",
    audience:
      "Bir xil savollarga tez-tez javob beradigan, buyurtmalarni chat orqali qabul qiladigan yoki murojaatlarni tartibga solmoqchi bo‘lgan bizneslarga mos. Bot imkoniyatlari sizning ish jarayoningiz va kerakli integratsiyalarga qarab belgilanadi.",
    deliverables: [
      {
        title: "Muloqot ssenariysi",
        body: "Boshlash xabari, menyu, savollar va keyingi qadamlar rejalashtiriladi. Foydalanuvchi qayerga murojaat qilishini va undan qanday ma’lumot so‘ralishini oldindan biladi.",
      },
      {
        title: "Buyurtma va murojaatlar",
        body: "Kelishilgan vazifaga qarab so‘rov qabul qilish, ma’lumot berish yoki buyurtma holatiga oid funksiyalar ishlab chiqiladi. Administratorga uzatish tartibi ham vazifaga kiritiladi.",
      },
      {
        title: "Kerakli tizimlarga ulash",
        body: "Sayt, jadval yoki boshqa xizmat bilan integratsiya zarur bo‘lsa, uning texnik imkoniyati tekshiriladi. Tashqi servislar va ularga tegishli xarajatlar ish boshlanishidan oldin aniqlanadi.",
      },
      {
        title: "Sinash va ishga tushirish",
        body: "Asosiy suhbat yo‘llari, noto‘g‘ri kiritilgan ma’lumotlar va kelishilgan xato holatlari tekshiriladi. Hosting, boshqaruv va qo‘llab-quvvatlash tartibi kelishiladi.",
      },
    ],
    steps: [
      {
        title: "Jarayonni tushunish",
        body: "Hozir buyurtma qanday kelishi, qaysi ma’lumotlar kerakligi va takrorlanadigan ishlarni aniqlaymiz.",
      },
      {
        title: "Botni ishlab chiqish",
        body: "Menyu va ssenariy kelishilgach, funksiyalar hamda zarur integratsiyalarni tayyorlaymiz.",
      },
      {
        title: "Sinash va topshirish",
        body: "Botdan mijoz va administrator sifatida foydalanishni tekshiramiz. Ishga tushirish va texnik xizmat shartlarini belgilaymiz.",
      },
    ],
    preparation: [
      "Bot hal qilishi kerak bo‘lgan vazifa",
      "Buyurtma yoki murojaatning hozirgi jarayoni",
      "Menyu matnlari, xizmatlar va kerakli integratsiyalar ro‘yxati",
    ],
    faqs: [
      {
        q: "Bot operator o‘rnini to‘liq bosadimi?",
        a: "Bot kelishilgan takroriy vazifalarni bajaradi. Murakkab savollar va individual holatlar uchun xodimga murojaat yo‘lini saqlash foydali. Avtomatlashtirish chegarasi ssenariyda belgilanadi.",
      },
      {
        q: "Botda to‘lov yoki CRM bo‘ladimi?",
        a: "Bunday funksiyalar xizmatning avtomatik tarkibi emas. To‘lov provayderi yoki CRM imkoniyati, kirish huquqlari, xavfsizlik va ish hajmi alohida baholanadi.",
      },
      {
        q: "Hosting va texnik xizmat qanday bo‘ladi?",
        a: "Bot doimiy ishlashi uchun kerakli infratuzilma va xarajatlar loyiha talabiga qarab tanlanadi. Monitoring, yangilash va qo‘llab-quvvatlash shartlari alohida kelishiladi.",
      },
    ],
  },
  instagram: {
    slug: "instagram-ads",
    heading: "Instagram reklamasini sozlash",
    seoDescription:
      "Instagram Ads uchun auditoriya tanlash, reklama kreativi, kampaniya sozlamalari va natijalarni tahlil qilish. HIKMA bilan reklama vazifangizni aniqlang.",
    intro:
      "Instagram’da biznesingizni mos auditoriyaga tanishtirish uchun reklama strategiyasi va kampaniya boshqaruvi. Ishni taklifingiz, mijozingiz va reklama maqsadini aniqlashdan boshlaymiz.",
    audience:
      "Xizmatini tanishtirmoqchi, profiliga tashrif yoki murojaat olishni maqsad qilgan bizneslar uchun. Reklama foydali bo‘lishi uchun profil yoki landing page’dagi taklif, kontent va murojaatlarga javob berish jarayoni ham tayyor bo‘lishi kerak.",
    deliverables: [
      {
        title: "Maqsad va auditoriya",
        body: "Kampaniyadan kutilayotgan harakatni belgilaymiz: tanishuv, profilga o‘tish yoki murojaat. Auditoriya farazlari biznesingiz, hudud va taklifga qarab tuziladi.",
      },
      {
        title: "Reklama kreativi",
        body: "Xabar, vizual va chaqiriq kampaniya maqsadiga mos rejalashtiriladi. Rasm, video yoki matn tayyorlash hajmi va sizdan kerak bo‘ladigan materiallar oldindan kelishiladi.",
      },
      {
        title: "Kampaniyani sozlash",
        body: "Reklama hisobidagi zarur kirish huquqlari tekshiriladi. Kelishilgan auditoriya, budjet va muddat asosida kampaniya tayyorlanadi; platforma moderatsiyasi hisobga olinadi.",
      },
      {
        title: "Tahlil va keyingi qadam",
        body: "Maqsadga mos ko‘rsatkichlar kuzatiladi. Reklama hisobotidagi murojaatlar bilan real mijozlar haqidagi ma’lumotlar farqlanadi va keyingi sinovlar shu asosda rejalashtiriladi.",
      },
    ],
    steps: [
      {
        title: "Taklifni tahlil qilish",
        body: "Mahsulot yoki xizmat, profil holati va murojaat yo‘lini ko‘rib chiqamiz. Kampaniya maqsadi hamda budjetni kelishamiz.",
      },
      {
        title: "Tayyorlash va boshlash",
        body: "Kreativlar, auditoriya va kampaniya sozlamalari tayyorlanadi. Moderatsiyadan o‘tish platforma qoidalariga bog‘liq.",
      },
      {
        title: "Kuzatish va tahlil",
        body: "Yetarli ma’lumot to‘plangach, ko‘rsatkichlarni baholaymiz. Budjet va kreativ bo‘yicha keyingi o‘zgarishlar kelishiladi.",
      },
    ],
    preparation: [
      "Instagram profilingiz va taklifingiz tavsifi",
      "Maqsadli mijoz, hudud va reklama uchun budjet",
      "Mavjud foto yoki videolar va murojaatlarni kim qabul qilishi",
    ],
    faqs: [
      {
        q: "Reklama budjeti xizmat narxiga kiradimi?",
        a: "Reklama platformasiga sarflanadigan budjet va HIKMA xizmat haqi alohida kelishiladi. Kreativ tayyorlash hamda boshqaruv tarkibi taklifda aniqlashtiriladi.",
      },
      {
        q: "Qancha mijoz yoki sotuv keladi?",
        a: "Oldindan aniq mijoz, sotuv yoki o‘sish foizini kafolatlab bo‘lmaydi. Natija taklif, auditoriya, kreativ, budjet va murojaatlarga javob berish jarayoniga bog‘liq.",
      },
      {
        q: "Parolimni yuborishim kerakmi?",
        a: "Parolni loyiha tavsifi yoki oddiy chatga yubormang. Reklama hisobi bilan ishlash uchun zarur ruxsatlar platformadagi mos kirish boshqaruvi orqali kelishiladi.",
      },
    ],
  },
  telegram: {
    slug: "telegram-ads",
    heading: "Telegram Ads reklamasini sozlash",
    seoDescription:
      "Telegram Ads uchun maqsadli auditoriya, reklama matni, kampaniya sozlamalari va statistika tahlili. HIKMA bilan biznesingizga mos reklama rejasini tuzing.",
    intro:
      "Telegram’da taklifingizni maqsadli auditoriyaga yetkazish uchun kampaniya tayyorlash va tahlil. Reklamadan keyingi yo‘l — kanal, bot yoki boshqa kelishilgan manzil — ham rejaning bir qismi bo‘ladi.",
    audience:
      "Telegram kanalini tanishtirish, botga foydalanuvchi olib kelish yoki biznes taklifiga qiziqish uyg‘otishni istagan loyihalarga mos. Avval reklama manzili va taklifning platforma talablariga mosligi tekshiriladi.",
    deliverables: [
      {
        title: "Auditoriya va maqsad",
        body: "Reklama kimga ko‘rsatilishi va undan keyin qanday harakat kutilishini aniqlaymiz. Tanlash imkoniyatlari amaldagi reklama hisobida mavjud sozlamalar asosida belgilanadi.",
      },
      {
        title: "Reklama xabari va manzil",
        body: "Qisqa, tushunarli matn va mos murojaat yo‘li tayyorlanadi. Reklamadagi va’da kanal yoki botdagi haqiqiy mazmun bilan mos bo‘lishiga e’tibor beriladi.",
      },
      {
        title: "Kampaniyani tayyorlash",
        body: "Hisob, kirish huquqlari, reklama manzili va budjet aniqlashtiriladi. Kampaniya kelishilgan sozlamalar bilan tayyorlanadi va platforma moderatsiyasiga yuboriladi.",
      },
      {
        title: "Statistika va hisobot",
        body: "Hisobda mavjud ko‘rsatkichlar kampaniya maqsadiga nisbatan tahlil qilinadi. Kanal yoki botga o‘tishlar, yangi foydalanuvchilar va real buyurtmalar bir xil natija sifatida ko‘rsatilmaydi.",
      },
    ],
    steps: [
      {
        title: "Reklamaga tayyorgarlik",
        body: "Kanal yoki bot mazmuni, taklif va auditoriyani ko‘rib chiqamiz. Budjet va kuzatiladigan ko‘rsatkichlar kelishiladi.",
      },
      {
        title: "Kampaniyani ishga tushirish",
        body: "Matn va sozlamalar tayyorlanadi. Reklama boshlanishi hisob holati va platforma moderatsiyasiga bog‘liq.",
      },
      {
        title: "Tahlil va takomillashtirish",
        body: "Statistikani kuzatib, xabar, auditoriya yoki budjet bo‘yicha keyingi sinovlarni rejalashtiramiz.",
      },
    ],
    preparation: [
      "Reklama qilinadigan kanal, bot yoki taklif havolasi",
      "Auditoriyangiz va kampaniyaning aniq maqsadi",
      "Reklama budjeti, mavjud hisob va kontent materiallari",
    ],
    faqs: [
      {
        q: "Telegram Ads va kanaldagi reklama bir xilmi?",
        a: "Telegram Ads — platformaning reklama tizimi orqali kampaniya yuritish. Kanal egasi bilan bevosita kelishib post joylashtirish boshqa format. Sizga kerakli usul va ish tarkibi oldindan aniqlanadi.",
      },
      {
        q: "Eng kam budjet qancha?",
        a: "Budjet hisob turi, mavjud reklama vositalari va kampaniya vazifasiga bog‘liq. Platformaning amaldagi shartlari tekshirilgach, reklama xarajati va xizmat haqi alohida kelishiladi.",
      },
      {
        q: "Obunachi yoki sotuv soni kafolatlanadimi?",
        a: "Aniq obunachi yoki sotuv soni kafolatlanmaydi. Taklif, kontent, auditoriya va reklama xarajati natijaga ta’sir qiladi. Hisobotda tekshirish mumkin bo‘lgan ko‘rsatkichlar beriladi.",
      },
    ],
  },
};

export const servicePages = services.map((service) => ({
  ...service,
  ...details[service.id],
  href: `/xizmatlar/${details[service.id].slug}`,
}));

export function findService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
