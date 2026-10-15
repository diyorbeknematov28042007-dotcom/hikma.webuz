"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" tabIndex={-1} className="container not-found">
      <h1>Sahifa yuklanmadi.</h1>
      <p>Qayta urinib ko‘ring yoki bosh sahifaga qayting.</p>
      <div className="error-actions">
        <button className="button" onClick={reset}>
          Qayta urinish
        </button>
        <Link className="text-link" href="/">
          Bosh sahifa
        </Link>
      </div>
    </main>
  );
}
