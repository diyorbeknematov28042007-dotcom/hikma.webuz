import { LawLanding } from "@/components/LawLanding";
import { pageMetadata } from "@/lib/seo";
import "../../law.css";

export const metadata = pageMetadata(
  "Advokatlik xizmatlari uchun landing page namunasi",
  "HIKMA tomonidan tayyorlangan advokatlik sohasi uchun landing page konsepti: xizmatlar, yondashuv va murojaat yo‘li. Yuridik xizmat ko‘rsatilmaydi.",
  "/advokat",
);

export default function LawSamplePage() {
  return <LawLanding />;
}
