# HIKMA source audit

Audit sanasi: 2026-10-16 (Asia/Tashkent). Maqsad: berilgan GitHub repozitoriysida professional landing page yaratish va Vercel deploy’iga tayyorlash. Ommaviy deploy foydalanuvchi so‘rovi doirasida bajarilmadi.

## O‘qilgan boshqaruvchi manbalar

| Fayl                          | Versiya/maqom                                                           | Qo‘llanishi                                                     |
| ----------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| HIKMA_Design_Visual_V2(2).pdf | V2 visual atlas 5 sahifa, ilova V1 spec 6 sahifa; ayrim qarorlar taklif | Charcoal/emerald, grid, mobil, typography, komponentlar         |
| texts(2).txt                  | v1.0, 2026-10-16; taklif                                                | O‘zbekcha kontent, FAQ, amaldagi xizmat doirasi                 |
| animation(1).txt              | v1.0; taklif                                                            | Deterministik motion, reduced-motion, original SVGga bog‘liqlik |
| rules(1).txt                  | v1.0; tasdiqlash uchun                                                  | Mobile-first, accessibility, API, SEO, QA va engineering        |
| HIKMA_Project_Share (1).txt   | Versiya raqami yo‘q                                                     | Brend, umbrella konsepsiyasi, haqiqiy amaliy xizmatlar          |

TXT fayllar to‘liq o‘qildi; PDF matni to‘liq chiqarib o‘rganildi va V2 desktop atlas ko‘rinishi vizual tekshirildi. GitHub boshlang‘ich holati: main, `b71e40354fdce167a074343ccf03fd4b9fd803e3`, faqat README. Mavjud mahsulot funksiyasi yoki dizayn migratsiyasi yo‘q.

## Ustuvorlik va qarorlar

Foydalanuvchining joriy topshirig‘i → V2 vizual yo‘nalish → texts → animation → Project Share → engineering rules. Skill tavsiyalari loyiha manbalaridan past turadi.

- PDF ichidagi eski V1 bo‘limlar taklif bo‘lib qoladi. V2 ranglari va kompozitsiya yo‘nalishi saqlandi.
- PDFdagi inglizcha matnlar o‘zbekcha texts matnlari bilan almashtirildi. V2 atlasidagi soxta wireframe UI sahifaga mahsulot screenshot’i sifatida ko‘chirilmadi.
- PDF yorug‘ xizmatlar namunasini ham ko‘rsatadi; V2 dominant charcoal identifikatsiya asosida butun sahifa bitta dark theme’da saqlandi. Bu ko‘rib chiqiladigan dizayn qarori.
- Turli contact CTA label variantlari bitta «Loyihani muhokama qilish» iborasiga birlashtirildi; yakuniy CTA #aloqa anchoriga ishlaydi.
- Asl SVG yo‘q. PDFdagi raster reference o‘zgartirilmagan holda ishlatildi; uning final logo ekanligi da’vo qilinmadi. Fragment soni yoki geometriyasi taxmin qilinmadi; LogoAssembly statik fallback.
- Tasdiqlangan real portfolio yo‘q, shuning uchun bo‘lim yashirildi. Narx, muddat, statistika, mijoz logolari va testimonial o‘ylab topilmadi. Kelajakdagi Legal/AI/Education/Events/Labs faol xizmat sifatida kiritilmadi.
- #00875A/off-white kichik matn kontrasti 4.33:1. Brand token saqlandi, tugmalar uchun #007D53 va muted text uchun #ADBBB3 accessible variantlari ajratildi.
- Hero asseti yangi, AI yaratilgan konseptual material tadqiqoti. Caption orqali konsept ekani aytilgan; real mijoz ishi yoki mahsulot sifatida berilmagan. Bu ko‘rib chiqiladigan vizual qaror.
- Tasdiqlangan kontakt endpointi yo‘q. Real backend Vercel server route sifatida tayyorlandi; kalitlarsiz forma nusxalash rejimida. Hech qanday xabar boshqa odamlarga yuborilmadi.
- Instagram URL manbada qayd etilgan, lekin joriy profil avtomatik tekshiruvda ochilmadi. `INSTAGRAM_VERIFIED=false` defaulti sabab ommaviy havola yashirin.

## Dizayn talqini

Biznes va mutaxassislar uchun premium, vazmin, mobile-first marketing landing. Native CSS, tizim sans-serif, source brand tokenlari. DESIGN_VARIANCE=6, MOTION_INTENSITY=4, VISUAL_DENSITY=3. Manbalar yengil CSS/WAAPI motionni va original SVG kelguncha fallbackni belgilagani uchun qo‘shimcha motion kutubxonasi kerak emas.

## E’londan oldin yopilishi kerak bo‘lgan masalalar

1. Asl tasdiqlangan SVG va real fragment map, keyin signature animatsiya va overlay diff.
2. Taklif matnlari, layout, accessible rang varianti va konseptual artwork review.
3. Haqiqiy Telegram qabul qiluvchi, Turnstile kalitlari, Instagram tekshiruvi.
4. Ma’lumotlar operatori, saqlash muddati/o‘chirish amaliyoti va privacy matnining egasi tomonidan tekshirilishi.
5. CI screenshot/axe/Lighthouse, Vercel preview, iOS/Android va 200% zoom QA.

## Kiruvchi fayllar SHA-256

```text
animation(1).txt e6a553bacc6d4ea6d01146b046b27702287db7c004e50e51effc5b8ddc6c8653
rules(1).txt 64bb3b8657128798095d3b0cc7ed2835d5f72057b143da3d817fd633ffd57b2a
texts(2).txt 76154dfaa566eedc847a2e33e91676455d7ff2ff5e3d55af509361cda0893241
HIKMA_Design_Visual_V2(2).pdf 309228b7f0de5ad0be0d28ba1606f7470d25be0922756ac135eae104fa54e4ab
HIKMA_Project_Share (1).txt 4954b19c434838e92ae2334fd98e5b2a0c874c84976ec81fe5adb002ddbd4bb6
```
