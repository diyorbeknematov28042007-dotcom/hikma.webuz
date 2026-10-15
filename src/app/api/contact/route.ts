import { validateContact } from "@/lib/contact-validation";
import { isContactEnabled } from "@/lib/site";
export const runtime = "nodejs";
export const maxDuration = 30;
const reply = (body: object, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: Request) {
  // Browsers must submit from this deployment; previews also work without a wildcard allowlist.
  const url = new URL(request.url);
  if (
    request.headers.get("origin") !== url.origin ||
    request.headers.get("sec-fetch-site") === "cross-site"
  )
    return reply({ ok: false }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply({ ok: false }, 415);
  if (Number(request.headers.get("content-length")) > 8192)
    return reply({ ok: false }, 413);
  let input: Record<string, unknown>;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 8192)
      return reply({ ok: false }, 413);
    const body: unknown = JSON.parse(text);
    if (!body || typeof body !== "object" || Array.isArray(body))
      return reply({ ok: false }, 400);
    input = body as Record<string, unknown>;
  } catch {
    return reply({ ok: false }, 400);
  }
  if (input.website) return reply({ ok: false }, 400);
  const valid = validateContact(input);
  if (!valid.ok) return reply({ ok: false, errors: valid.errors }, 422);
  if (!isContactEnabled())
    return reply({ ok: false, code: "CONTACT_UNAVAILABLE" }, 503);
  if (
    typeof input.captcha !== "string" ||
    input.captcha.length > 2048 ||
    !input.captcha
  )
    return reply({ ok: false }, 400);
  try {
    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: input.captcha,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    const verdict = await verification.json();
    if (
      !verification.ok ||
      verdict.success !== true ||
      verdict.hostname !== url.hostname
    )
      return reply({ ok: false, code: "CAPTCHA_FAILED" }, 400);
    const { name, contact, service, message } = valid.data;
    // Plain text prevents visitor content from becoming Telegram HTML/Markdown.
    const delivery = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `HIKMA: yangi loyiha\n\nIsm: ${name}\nAloqa: ${contact}\nXizmat: ${service}\n\n${message}`,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    const result = await delivery.json();
    if (!delivery.ok || result.ok !== true)
      return reply({ ok: false, code: "DELIVERY_FAILED" }, 502);
    // No personal details, bot token, provider response or chat ID are returned or logged.
    return reply({ ok: true }, 200);
  } catch {
    return reply({ ok: false, code: "DELIVERY_UNAVAILABLE" }, 502);
  }
}
