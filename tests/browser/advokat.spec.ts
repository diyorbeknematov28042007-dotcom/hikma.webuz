import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { modernUzbek } from "../../src/lib/i18n";

for (const width of [320, 390, 768, 1440]) {
  test(`advokat concept at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 850 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto("/advokat");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByText("HIKMA konsept loyihasi")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const images = page.locator(".law-page img");
    expect(await images.count()).toBeGreaterThanOrEqual(8);
    await expect.poll(() => page.locator(".law-hero-art img").evaluate(node => node instanceof HTMLImageElement && node.complete && node.naturalWidth > 0)).toBe(true);
    const ctaImage = page.locator(".law-cta-grid > img");
    await ctaImage.scrollIntoViewIfNeeded();
    await expect.poll(() => ctaImage.evaluate(node => node instanceof HTMLImageElement && node.complete && node.naturalWidth > 0)).toBe(true);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/advokat$/);
    await page.screenshot({ path: info.outputPath(`advokat-${width}.png`), fullPage: true, animations: "disabled" });
    const a11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
    await page.locator(".law-accordion summary").first().click();
    await expect(page.locator(".law-accordion details[open]")).toHaveCount(1);
    await expect(page.getByRole("link", { name: new RegExp(modernUzbek("HIKMA bilan bog‘lanish")) })).toHaveAttribute("href", "https://t.me/Hikmaservice_bot");
  });
}

test("concept is discovered from portfolio and language switch keeps route", async ({ page, request }) => {
  for (const asset of ["01-hero-legal-folio", "02-consultation", "03-court-representation", "04-documents", "05-business-law", "06-confidentiality", "07-case-strategy", "08-contact"]) {
    expect((await request.get(`/images/advokat/${asset}.webp`)).status()).toBe(200);
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const path of ["/advokat", "/ru/advokat", "/en/advokat"]) {
    expect(sitemap).toContain(path);
  }
  await page.goto("/loyihalar");
  await page.getByRole("link", { name: modernUzbek("Konsept sahifani ko‘rish") }).click();
  await expect(page).toHaveURL(/\/advokat$/);
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru\/advokat$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/advokat$/);
  await expect(page.locator("h1")).toContainText("Legal questions deserve");
  await expect(page.getByText("HIKMA concept project")).toBeVisible();
});
