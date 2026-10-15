// Vercel supplies VERCEL_PROJECT_PRODUCTION_URL automatically. A custom domain wins.
export function siteOrigin() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("Invalid site URL");
  return url.origin;
}
export function isContactEnabled() {
  return (
    process.env.CONTACT_FORM_ENABLED === "true" &&
    Boolean(
      process.env.TELEGRAM_BOT_TOKEN &&
        process.env.TELEGRAM_CHAT_ID &&
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
        process.env.TURNSTILE_SECRET_KEY,
    )
  );
}
export const instagramUrl = "https://www.instagram.com/hikma.service/";
