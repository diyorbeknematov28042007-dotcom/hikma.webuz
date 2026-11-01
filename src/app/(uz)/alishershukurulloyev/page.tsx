import type { Viewport } from "next";
import { AlisherLanding } from "@/components/alisher/AlisherLanding";
import { alisherMetadata } from "@/lib/alisher-metadata";

export const metadata = alisherMetadata("uz");
export const viewport: Viewport = { themeColor: "#100e17" };
export default function AlisherPage() { return <AlisherLanding locale="uz" />; }
