import { LawLanding } from "@/components/LawLanding";
import { lawMetadata } from "@/lib/law-metadata";
import "../../law.css";
import "../../law-polish.css";

export const metadata = lawMetadata("uz");

export default function LawSamplePage() {
  return <LawLanding />;
}
