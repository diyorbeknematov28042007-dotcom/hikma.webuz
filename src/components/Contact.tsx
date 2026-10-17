"use client";
import Link from "next/link";
import Script from "next/script";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { instagramUrl, telegramUrl } from "@/lib/site";
import { serviceOptions } from "@/lib/content";
import { validateContact, type ContactInput } from "@/lib/contact-validation";
import { Reveal } from "./Reveal";
type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme: string;
      size: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}
type Errors = Partial<Record<keyof ContactInput, string>>;
const subscribe = () => () => {};
export function Contact({
  enabled,
  siteKey,
  instagramVerified,
}: {
  enabled: boolean;
  siteKey?: string;
  instagramVerified: boolean;
}) {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "copied"
  >("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [copyFallback, setCopyFallback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const inFlight = useRef(false);
  const request = useRef<AbortController | null>(null);
  useEffect(
    () => () => {
      request.current?.abort();
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    },
    [],
  );
  const mountCaptcha = useCallback(() => {
    if (widget.current && window.turnstile && siteKey && !widgetId.current) {
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: siteKey,
        theme: "dark",
        size: "compact",
        callback: (token) => {
          setCaptcha(token);
          setCaptchaError(false);
        },
        "expired-callback": () => setCaptcha(""),
        "error-callback": () => {
          setCaptcha("");
          setCaptchaError(true);
        },
      });
    }
  }, [siteKey]);
  function announce(next: typeof status) {
    setStatus(next);
    // Keep focus on the result, including after async delivery errors.
    requestAnimationFrame(() => messageRef.current?.focus());
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!enabled) {
      const message = String(data.get("message") || "").trim();
      if (message.length < 10 || message.length > 2000) {
        setErrors({ message: "Loyiha haqida 10-2000 belgi yozing." });
        form.querySelector<HTMLTextAreaElement>("#message")?.focus();
        return;
      }
      setErrors({});
      const brief = `HIKMA uchun loyiha tavsifi\n\nXizmat: ${data.get("service")}\n\n${message}`;
      try {
        await navigator.clipboard.writeText(brief);
        setCopyFallback("");
        announce("copied");
      } catch {
        setCopyFallback(brief);
        setStatus("idle");
      }
      return;
    }
    const result = validateContact(Object.fromEntries(data));
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      const first = Object.keys(result.errors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!captcha) {
      setCaptchaError(true);
      return;
    }
    setErrors({});
    inFlight.current = true;
    setStatus("sending");
    request.current = new AbortController();
    const timeout = setTimeout(() => request.current?.abort(), 20000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          website: data.get("website"),
          captcha,
        }),
        signal: request.current.signal,
      });
      const payload = await response.json();
      if (!response.ok || payload.ok !== true) {
        if (payload.errors) setErrors(payload.errors);
        announce("error");
      } else {
        form.reset();
        announce("success");
      }
    } catch {
      announce("error");
    } finally {
      clearTimeout(timeout);
      inFlight.current = false;
      setCaptcha("");
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }
  return (
    <section
      id="aloqa"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">Keyingi qadam</p>
          <h2 id="contact-title">
            Keyingi loyihangizni
            <br />
            <span>birga boshlaylik.</span>
          </h2>
          <p>
            Sayt, bot yoki reklama? G‘oyangizni ayting. Ehtiyojingizga mos
            yechimni birga tanlaymiz.
          </p>
          <div className="contact-channels">
            <a
              href={telegramUrl}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegramda yozish
              <ArrowUpRight size={20} aria-hidden="true" />
              <span className="sr-only"> (yangi sahifada ochiladi)</span>
            </a>
            {instagramVerified && (
              <a
                href={instagramUrl}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram orqali yozish
                <ArrowUpRight size={20} aria-hidden="true" />
                <span className="sr-only"> (yangi sahifada ochiladi)</span>
              </a>
            )}
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap">
          <form
            ref={formRef}
            onSubmit={submit}
            noValidate
            aria-labelledby="form-title"
            aria-describedby="form-note"
            aria-busy={status === "sending"}
          >
            <h3 id="form-title">
              {enabled
                ? "Loyihangiz haqida yozing"
                : "Loyiha tavsifini tayyorlang"}
            </h3>
            <p className="form-note" id="form-note">
              {enabled
                ? "So‘rovingizni ko‘rib chiqish uchun kerakli ma’lumotlar."
                : "Tavsifni nusxalab, Telegram yoki Instagram orqali yuboring. Bu forma ma’lumotni avtomatik yubormaydi."}
            </p>
            {enabled && (
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">
                    Ismingiz <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="given-name"
                    maxLength={80}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Ismingizni kiriting"
                  />
                  <FieldError name="name" message={errors.name} />
                </div>
                <div className="field">
                  <label htmlFor="contact">
                    Telefon yoki email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    autoComplete="email"
                    maxLength={160}
                    required
                    aria-invalid={Boolean(errors.contact)}
                    aria-describedby={
                      errors.contact ? "contact-error" : undefined
                    }
                    placeholder="+998 ... yoki email"
                  />
                  <FieldError name="contact" message={errors.contact} />
                </div>
              </div>
            )}
            <div className="field">
              <label htmlFor="service">Qanday yordam kerak?</label>
              <select name="service" id="service" defaultValue="Landing page">
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">
                Loyiha haqida qisqacha <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={4}
                placeholder="Biznesingiz va qanday yordam kerakligini yozing"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <FieldError name="message" message={errors.message} />
            </div>
            {enabled && (
              <>
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="consent">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? "consent-error" : undefined
                    }
                  />
                  <label htmlFor="consent">
                    Ma’lumotlarim so‘rovimga javob berish uchun ishlatilishiga
                    roziman. <Link href="/privacy">Maxfiylik</Link>
                  </label>
                </div>
                <FieldError name="consent" message={errors.consent} />
                <div ref={widget} className="captcha" />
                {captchaError && (
                  <p role="alert" className="field-error">
                    Xavfsizlik tekshiruvini bajaring. Yuklanmasa, sahifani
                    yangilang.
                  </p>
                )}
                <Script
                  src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                  strategy="lazyOnload"
                  onReady={mountCaptcha}
                  onError={() => setCaptchaError(true)}
                />
              </>
            )}
            <button
              className="button form-submit"
              type="submit"
              disabled={
                !hydrated || status === "sending" || status === "success"
              }
            >
              {status === "sending"
                ? "Yuborilmoqda…"
                : status === "success"
                  ? "Yuborildi"
                  : enabled
                    ? status === "error"
                      ? "Qayta yuborish"
                      : "So‘rov yuborish"
                    : "Tavsifni nusxalash"}
              {status === "success" ? (
                <Check size={20} aria-hidden="true" />
              ) : enabled ? (
                <PaperPlaneTilt size={20} aria-hidden="true" />
              ) : (
                <Copy size={20} aria-hidden="true" />
              )}
            </button>
            <div
              ref={messageRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className={`form-feedback ${status === "error" ? "is-error" : ""}`}
            >
              {status === "success" && (
                <>
                  <strong>So‘rovingiz yuborildi.</strong>
                  <span>
                    Xabaringiz qabul qilindi. Siz bilan bog‘lanish imkoniyati
                    mavjud bo‘lganda javob beramiz.
                  </span>
                </>
              )}
              {status === "error" && (
                <>
                  <strong>So‘rov yuborilmadi.</strong>
                  <span>
                    Ma’lumotlaringiz saqlandi. Xavfsizlik tekshiruvidan so‘ng
                    qayta urinib ko‘ring.
                  </span>
                </>
              )}
              {status === "copied" && "Loyiha tavsifi nusxalandi."}
              {status === "copied" && (
                <a
                  href={telegramUrl}
                  className="copied-next text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram botni ochish
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only"> (yangi sahifada ochiladi)</span>
                </a>
              )}
            </div>
            {copyFallback && (
              <div className="field">
                <label htmlFor="copy-brief">
                  Tavsifni belgilang va nusxalang
                </label>
                <textarea
                  id="copy-brief"
                  value={copyFallback}
                  readOnly
                  rows={6}
                  onFocus={(event) => event.currentTarget.select()}
                />
              </div>
            )}
            <noscript>
              <p className="form-note">
                {instagramVerified
                  ? "Forma uchun JavaScript kerak. Instagram havolasi orqali yozishingiz ham mumkin."
                  : "Tavsifni nusxalash yoki so‘rov yuborish uchun JavaScriptni yoqing."}
              </p>
            </noscript>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
function FieldError({ name, message }: { name: string; message?: string }) {
  return message ? (
    <p className="field-error" id={`${name}-error`}>
      {message}
    </p>
  ) : null;
}
