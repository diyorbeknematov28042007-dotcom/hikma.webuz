import type { Metadata } from "next";
import Link from "next/link";
import { isContactEnabled } from "@/lib/site";
import { interfaceCopy } from "@/lib/interface-copy";
import { localePath, type Locale } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Maxfiylik",
  alternates: { canonical: "/privacy" },
};
export function PrivacyContent({ locale = "uz" }: { locale?: Locale }) {
  const enabled = isContactEnabled();
  const c = interfaceCopy(locale).privacy;
  return (
    <main id="main" tabIndex={-1} className="container legal-page">
      <Link className="text-link" href={localePath(locale, "/")}>
        ← {c.back}
      </Link>
      <h1>{c.title}</h1>
      <p>{c.intro}</p>
      <h2>{c.briefTitle}</h2>
      <p>{c.brief}</p>
      {enabled && (
        <>
          <h2>{c.dataTitle}</h2>
          <p>{c.data}</p>
          <h2>{c.processingTitle}</h2>
          <p>{c.processing}</p>
          <h2>{c.controlTitle}</h2>
          <p>{c.control}</p>
        </>
      )}
      <h2>{c.techTitle}</h2>
      <p>{c.tech}</p>
      <h2>{c.externalTitle}</h2>
      <p>{c.external}</p>
      <Link className="text-link" href={`${localePath(locale, "/")}#aloqa`}>
        {c.return} →
      </Link>
    </main>
  );
}

export default function Privacy() {
  return <PrivacyContent />;
}
