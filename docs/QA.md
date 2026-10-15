# QA holati

## Ushbu muhitda bajarilgan

- ESLint: 0 warning/error.
- TypeScript strict: muvaffaqiyatli.
- 11 ta API/validation testi: muvaffaqiyatli. Barcha tashqi chaqiriqlar mock, real xabar yo‘q.
- Next.js production build: muvaffaqiyatli; `/`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` statik; `/api/contact` server route.
- Production dependency audit: 0 vulnerability.
- Rang kontrasti hisoblandi: CTA #007D53/off-white ≥4.5:1; body muted #ADBBB3/surface 8.08:1; accent text/charcoal 9.94:1; placeholder/charcoal 8.95:1.
- Statik HTML: bitta H1; ichki anchorlar mavjud; no-JS holatida submit disabled; tasdiqlanmagan portfolio/narx placeholderlari chiqarilmagan.

## Avtomatlashtirilgan browser tekshiruvi

GitHub Actions `quality.yml` Playwright, axe va Lighthouse’ga sozlangan. Viewportlar: 320, 360, 375, 390, 430, 768, 1024, 1440, 1920. Har birida overflow, CTA, menyu, Escape/focus return, anchor, FAQ, brief copy, axe va screenshot tekshiriladi. Alohida no-JS/reduced-motion hamda route/metadata testlari bor.

Bu executor muhitida kerakli browser-control capability mavjud emas. Sites managed-preview yo‘riqnomasi bunday holatda alternativ browser yo‘lini ishga tushirmaslikni belgilaydi. Shuning uchun bu yerda browser screenshot, axe, Lighthouse, actual FPS/scroll profiling yoki real screen-reader sinovi bajarilgan deb ko‘rsatilmaydi. CI natijalari alohida tekshirilishi kerak; screenshotlar faqat CI muvaffaqiyatli bajarilganda yaratiladi.

## Qolgan release tekshiruvlari

- Vercel preview’ni ochib real ekranlarda vizual review; CI screenshotlari uchun tasdiqlangan baseline hali yo‘q.
- VoiceOver/TalkBack, 200% zoom va mobil keyboard.
- Haqiqiy Turnstile domeni bilan muvaffaqiyat, provider error/retry va Telegram qabulini end-to-end sinash. Sinov xabarini yuborish alohida egasi tomonidan bajariladi.
- Asl SVG bilan logo signature va pixel diff.
- Real foydalanuvchi LCP/INP/CLS; hozircha dala ma’lumoti yo‘q.
- Kontent, kontakt, privacy va artwork review.

Kod deploy qilishga tayyor; barcha release gate’lar o‘tgan final ommaviy sayt deb e’lon qilinmaydi.
