# HIKMA

HIKMA raqamli xizmatlari uchun mobile-first, o‘zbekcha landing page: **Landing page, Telegram bot, Instagram Ads va Telegram Ads**. Next.js 16 App Router, React, TypeScript, native CSS. Asosiy sahifalar statik tayyorlanadi; murojaat endpointi serverda ishlaydi.

2026-10-17 yangilanishi: original raster logo saqlangan interaktiv 3D hero, to‘rtta xizmatga tez navigatsiya, staggered scroll reveal va haqiqiy aloqa havolalari. Effektlar touch va reduced-motion rejimlarida soddalashadi. Qo‘shimcha motion kutubxonasi qo‘shilmagan.

## Ishga tushirish

Node.js 22 yoki 24 ishlating.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

```bash
npm run check
npm run build
npm start
```

## Vercelga deploy

1. Vercel → **Add New → Project** → `diyorbeknematov28042007-dotcom/hikma.webuz` repozitoriysini import qiling.
2. Framework **Next.js**, Root Directory repozitoriy ildizi. Build va install buyruqlari `vercel.json`da tayyor. Node.js **22.x** tanlang.
3. `NEXT_PUBLIC_SITE_URL`ga yakuniy `https://...vercel.app` manzili yoki o‘z domeningizni kiriting. Domen hali noma’lum bo‘lsa birinchi deploydan keyin kiriting va redeploy qiling. Vercelning avtomatik production URL’i fallback sifatida ishlatiladi.
4. Avval `CONTACT_FORM_ENABLED=false` bilan deploy qiling. Sayt loyiha tavsifini qurilmada tayyorlash va nusxalash rejimida ishlaydi.
5. Quyidagi sozlamalarni to‘ldirib, kontakt va maxfiylik amaliyotini tasdiqlagach formani yoqing. Environment o‘zgarishi uchun **Redeploy** kerak.

| Variable                         | Vazifasi                                                            |
| -------------------------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Canonical, sitemap, social metadata uchun haqiqiy production origin |
| `CONTACT_FORM_ENABLED`           | Haqiqiy yuborishni yoqish: `true`; standart: `false`                |
| `TELEGRAM_BOT_TOKEN`             | Faqat serverda ishlatiladigan bot tokeni                            |
| `TELEGRAM_CHAT_ID`               | HIKMA uchun tasdiqlangan, bot yozish huquqiga ega chat              |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public site key                                |
| `TURNSTILE_SECRET_KEY`           | Turnstile server-side secret                                        |

Instagram `@hikma.service` va Telegram `https://t.me/Hikmaservice_bot` foydalanuvchining 2026-10-17 profil screenshotidan olindi. Eski `INSTAGRAM_VERIFIED` sozlamasi endi kerak emas. Formani yoqmasdan ham ushbu havolalar orqali murojaat qilish mumkin; lokal tavsifni nusxalab Telegramga joylash mumkin. Havolani bosish avtomatik xabar yubormaydi.

### Advokat shaxsiy sahifasi

`/advokat` HIKMA portfoliosidagi **Advokat X** uchun vizual prototip. Unda ko‘rsatilgan nom, ish natijalari va Toshkent markazidagi xarita haqiqiy amaliyotga tegishli faktlar deb ko‘rsatilmaydi. Haqiqiy ism va tasdiqlangan faoliyat tafsilotlari `src/lib/law-copy.ts` hamda `LawLanding.tsx`dagi monogram bilan almashtiriladi. Shu vaqtgacha sahifa `noindex` va sitemapdan chiqarilgan.

- `NEXT_PUBLIC_LAW_TELEGRAM_URL`: advokatning `https://t.me/...` profili.
- `NEXT_PUBLIC_LAW_INSTAGRAM_URL`: advokatning `https://www.instagram.com/...` profili.
- `NEXT_PUBLIC_LAW_ADDRESS`, `NEXT_PUBLIC_LAW_MAP_URL`, `NEXT_PUBLIC_LAW_MAP_EMBED_URL`: uchtalasi birga o‘rnatilganda namunaviy xarita haqiqiy manzil va Google Maps embed bilan almashadi. Embed havolasini Google Mapsdagi **Share → Embed a map → Copy HTML** orqali oling va `src` qiymatini kiriting. Google Maps Embed API’dan alohida foydalanilsa API kalit va Google Cloud sozlamasi talab qilinadi.

Advokatning profil manzillari kiritilmaguncha Telegram/Instagram kartalari faol bo‘lmaydi. Savol shakli hech qayerga yubormaydi, faqat yozilgan matnni nusxalaydi. Vercel’da public env o‘zgarishidan keyin redeploy qiling.

Turnstile widgetda production domeningizni ruxsat etilgan hostlarga qo‘shing. Preview host kerak bo‘lsa uni ham alohida sozlang. Test kalitlarini productionda ishlatmang. Maxfiy kalitlarni GitHubga, frontendga yoki chatga joylamang.

Telegram xabari va Turnstile javobi serverda tekshiriladi. Provider xatosida yoki sozlama yetishmaganda success qaytmaydi. Honeypot, body-size limit, origin tekshiruvi va bir martalik Turnstile tokeni mavjud. Forma ishlab turgan Vercel preview’da haqiqiy qabul qiluvchi bilan sinovdan o‘tkazilishi kerak.

CLI orqali deploy uchun, Vercel hisobingizda:

```bash
npx vercel
npx vercel --prod
```

## Tuzilma

```text
src/app/                  # Sahifa, metadata, 404, xato, maxfiylik
src/app/api/contact/      # Server-side Turnstile + Telegram delivery
src/components/           # Header, Hero, Services, Process, About, Contact, Footer
src/lib/content.ts        # O‘zbekcha sahifa kontenti
src/app/globals.css       # Design tokens, mobile-first layout, reduced motion
src/app/experience.css    # 3D hero, xizmat kartalari, refresh motion
public/brand/             # Design V2 PDFdan olingan o‘zgartirilmagan raster belgi
public/images/            # Optimallashtirilgan, aniq konsept deb belgilangan vizual
tests/                    # API testlari va CI browser tekshiruvlari
docs/                     # Source audit, QA holati, tasdiqlash uchun ochiq qarorlar
```

## Tekshiruvlar

`npm run check` lint, TypeScript va 12 ta API testini bajaradi. Testlar real Telegram xabari yubormaydi. `npm run build` production build yaratadi. GitHub Actions 9 viewport, klaviatura, menyu, no-JS fallback, reduced-motion, axe va Lighthouse tekshiruvlariga sozlangan. Brauzer testlarini lokal bajarish uchun:

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

CI screenshot va hisobotlari Actions artifact sifatida saqlanadi. Lighthouse laboratoriya budjeti real foydalanuvchilarning Core Web Vitals o‘lchovini almashtirmaydi.

## Ommaviy e’londan oldin

- Asl tasdiqlangan SVG logo kerak. Hozirgi raster belgi vaqtinchalik; taxminiy geometriya yoki soxta logo assembly ishlatilmagan.
- Matnlar va yangi konseptual hero vizualini ko‘rib chiqing. Manba kontenti taklif maqomida; final deb e’lon qilinmagan.
- Telegram qabul qiluvchisi, Instagram egaligi va havolasi, ma’lumotlarni saqlash/o‘chirish tartibini tasdiqlang. Maxfiylik matnini amaliyotingiz bilan moslang.
- CI browser/axe/Lighthouse natijalarini va Vercel preview’ni tekshiring; 200% zoom hamda iOS/Android real qurilma QA’sini bajaring.

Batafsil: [Source audit](docs/SOURCE_AUDIT.md), [QA holati](docs/QA.md), [Vizual manbalar](docs/ASSETS.md).

Joriy kontent manbalari va o‘zgarishlar: [2026-10-17 source audit](docs/UPDATE_2026-10-17.md).
