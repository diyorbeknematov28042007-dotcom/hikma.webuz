# HIKMA

HIKMA uchun mobile-first, o‘zbekcha landing page. Next.js 16 App Router, React, TypeScript, native CSS. Asosiy sahifalar statik tayyorlanadi; murojaat endpointi serverda ishlaydi.

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
| `INSTAGRAM_VERIFIED`             | @hikma.service havolasi tekshirilgach `true`; standart yashirin     |

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
public/brand/             # Design V2 PDFdan olingan o‘zgartirilmagan raster belgi
public/images/            # Optimallashtirilgan, aniq konsept deb belgilangan vizual
tests/                    # API testlari va CI browser tekshiruvlari
docs/                     # Source audit, QA holati, tasdiqlash uchun ochiq qarorlar
```

## Tekshiruvlar

`npm run check` lint, TypeScript va 11 ta API testini bajaradi. Testlar real Telegram xabari yubormaydi. `npm run build` production build yaratadi. GitHub Actions 9 viewport, klaviatura, menyu, no-JS fallback, reduced-motion, axe va Lighthouse tekshiruvlariga sozlangan. Brauzer testlarini lokal bajarish uchun:

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
