import { InteriorLanding } from "@/components/InteriorLanding";
import { interiorMetadata } from "@/lib/interior-metadata";
import "../../interior.css";

export const metadata = interiorMetadata("uz");
export default function InteriorPage() { return <InteriorLanding />; }
