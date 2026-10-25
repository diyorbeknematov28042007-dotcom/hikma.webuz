import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { modernUzbek } from "../../src/lib/i18n";

for (const width of [320, 390, 768, 1440]) {
  test(`personal advocate landing at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 850 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto("/advokat");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("link", { name: modernUzbek("Advokat X") }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: modernUzbek("Avval tinglaymiz. Keyin yo‘lni aniqlaymiz.") })).toBeVisible();
    await expect(page.getByRole("heading", { name: modernUzbek("Ishni aniqlik sari olib boramiz.") })).toBeVisible();
    await expect(page.getByRole("heading", { name: modernUzbek("Natijani emas, yondashuvni va’da qilamiz.") })).toBeVisible();
    await expect(page.getByRole("heading", { name: modernUzbek("Uchrashuv uchun manzil.") })).toBeVisible();
    await expect(page.locator(".law-page")).not.toContainText("HIKMA");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const images = page.locator(".law-page img");
    expect(await images.count()).toBeGreaterThanOrEqual(8);
    await expect.poll(() => page.locator(".law-hero-art img").evaluate(node => node instanceof HTMLImageElement && node.complete && node.naturalWidth > 0)).toBe(true);
    const ctaImage = page.locator(".law-cta-grid > img");
    await ctaImage.scrollIntoViewIfNeeded();
    await expect.poll(() => ctaImage.evaluate(node => node instanceof HTMLImageElement && node.complete && node.naturalWidth > 0)).toBe(true);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/advokat$/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await page.screenshot({ path: info.outputPath(`advokat-${width}.png`), fullPage: true, animations: "disabled" });
    const a11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
    await page.locator(".law-accordion summary").first().click();
    await expect(page.locator(".law-accordion details[open]")).toHaveCount(1);
    await expect(page.getByRole("link", { name: modernUzbek("Masalamni muhokama qilish") })).toHaveAttribute("href", "#boglanish");
    await expect(page.getByLabel(modernUzbek("Savolingizning qisqacha mazmuni"))).toBeVisible();
    await expect(page.getByText(modernUzbek("Bu shakl xabarni hech qayerga yubormaydi"), { exact: false })).toBeVisible();
    await expect(page.getByRole("link", { name: modernUzbek("Google Maps’da ko‘rish") })).toHaveAttribute("href", /google\.com\/maps\/search\/\?api=1/);
    await expect(page.locator(".law-social-pending")).toHaveCount(2);
    await expect(page.getByText("Telegram", { exact: true })).toBeVisible();
    await expect(page.getByText("Instagram", { exact: true })).toBeVisible();
  });
}

test("personal page is discovered from portfolio and language switch keeps route", async ({ page, request }) => {
  for (const asset of ["01-hero-legal-folio", "02-consultation", "03-court-representation", "04-documents", "05-business-law", "06-confidentiality", "07-case-strategy", "08-contact"]) {
    expect((await request.get(`/images/advokat/${asset}.webp`)).status()).toBe(200);
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/advokat");
  await page.goto("/loyihalar");
  await page.getByRole("link", { name: modernUzbek("Advokat sahifasini ko‘rish") }).click();
  await expect(page).toHaveURL(/\/advokat$/);
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru\/advokat$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/advokat$/);
  await expect(page.locator("h1")).toContainText("Legal questions deserve");
  await expect(page.getByText("Advocate X", { exact: true }).first()).toBeVisible();
  await expect(page.locator(".law-page")).not.toContainText("HIKMA");
});

test("scroll motion reveals content and updates progress", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/advokat");
  await expect(page.locator(".law-page")).toHaveClass(/law-motion-ready/);
  await page.locator(".law-results").scrollIntoViewIfNeeded();
  await expect(page.locator(".law-results .law-section-head")).toHaveClass(/is-visible/);
  const scale = await page.locator(".law-scroll-progress").evaluate((el) => getComputedStyle(el).transform);
  expect(scale).not.toBe("matrix(0, 0, 0, 1, 0, 0)");
});

test("enquiry draft stays in the browser and copies only the written text", async ({ page }) => {
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/advokat");
  const draft = modernUzbek("Shartnoma bo‘yicha savolim bor");
  await page.getByLabel(modernUzbek("Savolingizning qisqacha mazmuni")).fill(draft);
  await page.getByRole("button", { name: modernUzbek("Xabar matnini nusxalash") }).click();
  await expect(page.getByRole("status")).toContainText(modernUzbek("Xabar nusxalandi"));
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(draft);
});
