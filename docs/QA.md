# QA holati

## 2026-10-17 refresh

Joriy kod commit: `5c9761a64813e3d2df19a828ef875f63af118c29`.

[HIKMA quality / run 2](https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz/actions/runs/39020001338): **success**. Vercel ushbu kod commitini muvaffaqiyatli deploy qilgani GitHub Vercel statusi orqali tasdiqlandi.

- Lint, strict typecheck, 12 API testi va production build: passed.
- 13 brauzer testi: passed (18.2s).
- 9 viewport (320–1920px), to‘rtta xizmat, tez navigatsiya, Telegram havolasi, forma tanlovlari va axe accessibility: passed.
- No-JS, reduced-motion va 320×568px ekranda asosiy CTA ko‘rinishi: passed.
- Lighthouse 3 mobil run: barcha belgilangan budjetlar passed (performance ≥90, accessibility ≥95, SEO ≥90, LCP ≤2500ms, CLS ≤0.1). Aniq ball yoki field-data natijasi da’vo qilinmaydi.
- [Browser screenshotlari va hisoboti](https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz/actions/runs/39020001338/artifacts/12096287560).
- [Lighthouse hisobotlari](https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz/actions/runs/39020001338/artifacts/12095844964).

Screenshotlar CI’da yaratildi; qo‘lda vizual review, real iOS/Android va screen-reader sinovi bu tekshiruv bilan tenglashtirilmaydi. Public Telegram linki manbadan olindi, botga haqiqiy xabar yuborilmadi. Keyingi bo‘limlar 2026-10-16 versiyasining tarixiy tekshiruv yozuvidir.

## Ushbu muhitda bajarilgan

- ESLint: 0 warning/error.
- TypeScript strict: muvaffaqiyatli.
- 11 ta API/validation testi: muvaffaqiyatli. Barcha tashqi chaqiriqlar mock, real xabar yo‘q.
- Next.js production build: muvaffaqiyatli; `/`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` statik; `/api/contact` server route.
- Production dependency audit: 0 vulnerability.
- Rang kontrasti hisoblandi: CTA #007D53/off-white ≥4.5:1; body muted #ADBBB3/surface 8.08:1; accent text/charcoal 9.94:1; placeholder/charcoal 8.95:1.
- Statik HTML: bitta H1; ichki anchorlar mavjud; no-JS holatida submit disabled; tasdiqlanmagan portfolio/narx placeholderlari chiqarilmagan.

## GitHub CI natijasi: muvaffaqiyatli

Tekshirilgan kod commit: `f7a57edafa1ce0fea1e77556851945c2cf85ca50`.

[HIKMA quality / run 1](https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz/actions/runs/38797437716) 2026-10-16 (Asia/Tashkent) muvaffaqiyatli tugadi.

- Toza `npm ci`, lint, strict typecheck, 11 API testi va production build: passed.
- 11 Playwright brauzer testi: passed (16.0s).
- 320, 360, 375, 390, 430, 768, 1024, 1440, 1920px: overflow, CTA, menyu, Escape/focus return, anchor, FAQ va brief copy passed.
- 9 viewportda axe WCAG A/AA avtomatik tekshiruvi: violation yo‘q.
- No-JS/reduced-motion kontekstida kontent/navigatsiya hamda privacy, 404 va metadata route testlari: passed.
- Screenshotlar [browser-qa artifact](https://github.com/diyorbeknematov28042007-dotcom/hikma.webuz/actions/runs/38797437716/artifacts/12003420134)da saqlandi (14 kun).
- Lighthouse 3 mobil laboratoriya run va konfiguratsiyadagi barcha assertion: passed. Budjetlar: performance ≥90, accessibility ≥95, SEO ≥90, LCP ≤2500ms, CLS ≤0.1. Bu budjetlar; aniq ball yoki vaqt natijasi sifatida ko‘rsatilmaydi. Real foydalanuvchi INP/CLS/LCP o‘lchanmagan.

Lokal executor’da browser-control imkoniyati bo‘lmagani uchun browser testlar GitHub Actions runnerida bajarildi. Screenshotlar ishlab chiqarilgan, lekin ularning qo‘lda vizual review’i va tasdiqlangan baseline bilan diff hali bajarilmagan. Real mobil qurilma, screen-reader va actual FPS profiling ham CI tekshiruvi bilan almashtirilmaydi.

## Qolgan release tekshiruvlari

- Vercel preview’ni ochib real ekranlarda vizual review; CI screenshotlari uchun tasdiqlangan baseline hali yo‘q.
- VoiceOver/TalkBack, 200% zoom va mobil keyboard.
- Haqiqiy Turnstile domeni bilan muvaffaqiyat, provider error/retry va Telegram qabulini end-to-end sinash. Sinov xabarini yuborish alohida egasi tomonidan bajariladi.
- Asl SVG bilan logo signature va pixel diff.
- Real foydalanuvchi LCP/INP/CLS; hozircha dala ma’lumoti yo‘q.
- Kontent, kontakt, privacy va artwork review.

Kod deploy qilishga tayyor; barcha release gate’lar o‘tgan final ommaviy sayt deb e’lon qilinmaydi.
