import { BarberLanding } from "@/components/BarberLanding";
import { barberMetadata } from "@/lib/barber-metadata";
import "../../barber.css";

export const metadata = barberMetadata("uz");
export default function BarberPage() { return <BarberLanding />; }
