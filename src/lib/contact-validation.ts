import { serviceOptions } from "./content";
export type ContactInput = {
  name: string;
  contact: string;
  service: string;
  message: string;
  consent: boolean;
};
export function validateContact(
  input: Record<string, unknown>,
):
  | { ok: true; data: ContactInput }
  | { ok: false; errors: Partial<Record<keyof ContactInput, string>> } {
  const text = (key: string) =>
    typeof input[key] === "string" ? (input[key] as string).trim() : "";
  const name = text("name"),
    contact = text("contact"),
    service = text("service"),
    message = text("message");
  const consent = input.consent === true || input.consent === "on";
  const errors: Partial<Record<keyof ContactInput, string>> = {};
  if (name.length < 2 || name.length > 80 || /[\u0000-\u001f]/.test(name))
    errors.name = "Ismingizni 2–80 belgi bilan kiriting.";
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const phone =
    /^\+?[\d ()-]+$/.test(contact) &&
    /^\d{9,15}$/.test(contact.replace(/\D/g, ""));
  if ((!email && !phone) || contact.length > 160)
    errors.contact = "Telefon raqami yoki emailni to‘g‘ri kiriting.";
  if (![...serviceOptions, "Veb-sahifa"].includes(service))
    errors.service = "Xizmat turini tanlang.";
  if (
    message.length < 10 ||
    message.length > 2000 ||
    message.includes("\u0000")
  )
    errors.message = "Loyiha haqida 10–2000 belgi yozing.";
  if (!consent) errors.consent = "Davom etish uchun rozilikni belgilang.";
  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, data: { name, contact, service, message, consent } };
}
