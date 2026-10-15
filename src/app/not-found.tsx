import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="container not-found">
      <p>404</p>
      <h1>Sahifa topilmadi.</h1>
      <p>Siz qidirgan sahifa mavjud emas yoki manzili o‘zgargan.</p>
      <Link href="/" className="button">
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}
