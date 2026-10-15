import type { Metadata } from "next";
import Link from "next/link";
import { isContactEnabled } from "@/lib/site";
export const metadata: Metadata = {
  title: "Maxfiylik",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  const enabled = isContactEnabled();
  return (
    <main id="main" tabIndex={-1} className="container legal-page">
      <Link className="text-link" href="/">
        ← HIKMA bosh sahifa
      </Link>
      <h1>Maxfiylik va ma’lumotlar.</h1>
      <p>
        Bu sahifa HIKMA veb-sahifasidagi loyiha tavsifi va murojaat formasi
        qanday ishlashini tushuntiradi.
      </p>
      <h2>Loyiha tavsifi</h2>
      <p>
        «Tavsifni nusxalash» rejimida kiritilgan matn brauzeringizda qayta
        ishlanadi. Nusxalash tugmasi matnni qurilmangizning almashuv buferiga
        yozadi. Tavsif serverga yuborilmaydi va bu sayt uni localStorage yoki
        cookie’da saqlamaydi.
      </p>
      {enabled && (
        <>
          <h2>Murojaat ma’lumotlari</h2>
          <p>
            So‘rov yuborsangiz, ismingiz, telefon yoki email manzilingiz,
            tanlangan xizmat va loyiha tavsifi HIKMA so‘rovini ko‘rib chiqish va
            siz bilan bog‘lanish uchun ishlatiladi. Maxfiy hujjatlar, parollar
            yoki to‘lov ma’lumotlarini kiritmang.
          </p>
          <h2>Qayta ishlash xizmatlari</h2>
          <p>
            Sayt Vercelda ishlaydi. Spamdan himoya uchun Cloudflare Turnstile
            brauzer va tarmoq signallarini qayta ishlaydi. So‘rovingiz serverdan
            HIKMA uchun sozlangan Telegram chatiga yuboriladi. Ushbu xizmatlar
            ma’lumotlarni boshqa mamlakatlarda qayta ishlashi mumkin. Saytning
            o‘zi alohida murojaatlar bazasini yaratmaydi.
          </p>
          <h2>So‘rovingizni boshqarish</h2>
          <p>
            Ma’lumotlaringizni tuzatish yoki o‘chirishni so‘rash uchun HIKMA siz
            bilan bog‘langan aloqa kanalida murojaat qiling. Telegramdagi
            xabarlar HIKMA tomonidan boshqariladi; texnik xizmatlarning saqlash
            tartibi ularning o‘z siyosatlariga bog‘liq.
          </p>
        </>
      )}
      <h2>Texnik ma’lumotlar</h2>
      <p>
        Sayt alohida reklama kuzatuvchisi yoki analitika skriptini o‘rnatmaydi.
        Hosting xizmati sahifani taqdim etish va xavfsizlik uchun IP manzil
        hamda so‘rovga oid texnik ma’lumotlarni qayta ishlashi mumkin.
      </p>
      <h2>Tashqi havolalar</h2>
      <p>Tashqi xizmatga o‘tsangiz, uning maxfiylik qoidalari amal qiladi.</p>
      <Link className="text-link" href="/#aloqa">
        Loyiha tavsifiga qaytish →
      </Link>
    </main>
  );
}
