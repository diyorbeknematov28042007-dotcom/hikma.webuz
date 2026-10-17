import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function InnerPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header innerPage />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer instagramVerified />
    </>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Sahifa yo‘li" className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
