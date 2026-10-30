import type { Viewport } from "next";
import { PersonalLanding } from "@/components/personal/PersonalLanding";
import { personalMetadata } from "@/lib/personal-metadata";
export const metadata = personalMetadata("uz");
export const viewport: Viewport = { themeColor: "#080808" };
export default function PersonalPage() { return <PersonalLanding locale="uz" />; }
