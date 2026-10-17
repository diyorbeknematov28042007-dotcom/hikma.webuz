import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { POST } from "../src/app/api/contact/route";
import { validateContact } from "../src/lib/contact-validation";
import { services } from "../src/lib/content";
const originalEnv = { ...process.env };
const originalFetch = globalThis.fetch;
test("accepts every current advertised service and the legacy web-page value", () => {
  for (const service of [
    ...services.map((service) => service.title),
    "Veb-sahifa",
  ]) {
    assert.equal(
      validateContact({
        name: "Diyorbek",
        contact: "owner@example.com",
        service,
        message: "Biznes uchun raqamli yechim kerak.",
        consent: true,
      }).ok,
      true,
      service,
    );
  }
});
afterEach(() => {
  process.env = { ...originalEnv };
  globalThis.fetch = originalFetch;
});
const valid = {
  name: "Diyorbek",
  contact: "+998 90 123 45 67",
  service: "Landing page",
  message: "Biznes uchun zamonaviy landing page kerak.",
  consent: true,
  captcha: "test-token",
  website: "",
};
function request(
  body: unknown,
  origin = "https://hikma.example",
  type = "application/json",
) {
  return new Request("https://hikma.example/api/contact", {
    method: "POST",
    headers: { origin, "Content-Type": type },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
function enable() {
  Object.assign(process.env, {
    CONTACT_FORM_ENABLED: "true",
    TELEGRAM_BOT_TOKEN: "test-only-token",
    TELEGRAM_CHAT_ID: "test-chat",
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: "test-key",
    TURNSTILE_SECRET_KEY: "test-secret",
  });
}
test("validates Uzbek names and a local formatted phone number", () =>
  assert.equal(validateContact(valid).ok, true));
test("rejects malformed contact, service, missing consent and oversized messages", () => {
  const result = validateContact({
    ...valid,
    contact: "wrong",
    service: "Legal",
    consent: false,
    message: "x".repeat(2001),
  });
  assert.equal(result.ok, false);
  if (!result.ok)
    assert.deepEqual(Object.keys(result.errors), [
      "contact",
      "service",
      "message",
      "consent",
    ]);
});
test("does not coerce objects or truthy consent values into valid data", () =>
  assert.equal(
    validateContact({ ...valid, name: {}, consent: "yes" }).ok,
    false,
  ));
test("rejects cross-origin and non-JSON requests", async () => {
  assert.equal(
    (await POST(request(valid, "https://other.example"))).status,
    403,
  );
  assert.equal(
    (await POST(request(valid, undefined, "text/plain"))).status,
    415,
  );
});
test("rejects malformed JSON, arrays, honeypot and large bodies", async () => {
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request([]))).status, 400);
  assert.equal((await POST(request({ ...valid, website: "bot" }))).status, 400);
  assert.equal(
    (await POST(request({ ...valid, message: "x".repeat(9000) }))).status,
    413,
  );
});
test("returns field errors without sending any upstream request", async () => {
  globalThis.fetch = async () => {
    throw new Error("Unexpected network");
  };
  assert.equal((await POST(request({ ...valid, contact: "" }))).status, 422);
});
test("unconfigured delivery never reports success", async () => {
  process.env.CONTACT_FORM_ENABLED = "false";
  assert.equal((await POST(request(valid))).status, 503);
});
test("blocks invalid, expired and wrong-host CAPTCHA before delivery", async () => {
  enable();
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return Response.json({ success: true, hostname: "attacker.example" });
  };
  assert.equal((await POST(request(valid))).status, 400);
  assert.equal(calls, 1);
  globalThis.fetch = async () => Response.json({ success: false });
  assert.equal((await POST(request(valid))).status, 400);
});
test("success requires a confirmed Telegram response, never just HTTP 200", async () => {
  enable();
  let calls = 0;
  globalThis.fetch = async () =>
    Response.json(
      ++calls === 1
        ? { success: true, hostname: "hikma.example" }
        : { ok: false },
    );
  assert.equal((await POST(request(valid))).status, 502);
});
test("verified submission delivers plain text and returns no private fields", async () => {
  enable();
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls++;
    if (String(url).includes("siteverify"))
      return Response.json({ success: true, hostname: "hikma.example" });
    const payload = JSON.parse(String(options?.body));
    assert.equal(payload.chat_id, "test-chat");
    assert.equal(payload.parse_mode, undefined);
    assert.ok(payload.text.includes(valid.message));
    return Response.json({ ok: true });
  };
  const response = await POST(request(valid));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls, 2);
});
test("network failures produce retryable error and no false success", async () => {
  enable();
  globalThis.fetch = async () => {
    throw new Error("Connection lost");
  };
  assert.equal((await POST(request(valid))).status, 502);
});
