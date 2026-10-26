import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { modernUzbek } from "../../src/lib/i18n";

for (const width of [320, 390, 768, 1440]) {
  test(`interior concept stays usable at ${width}px`, async ({ page, request }, info) => {
    await page.setViewportSize({ width, height: 850 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    expect((await page.goto("/interyer"))?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(modernUzbek("Sizga mos"));
    await expect(page.getByRole("heading", { name: modernUzbek("Makonning yangi ko‘rinishi.") })).toBeVisible();
    await expect(page.locator(".interior-page")).toContainText(modernUzbek("real bajarilgan loyihalar emas"));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/interyer$/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    const images = page.locator(".interior-page img");
    expect(await images.count()).toBeGreaterThanOrEqual(4);
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((element) => element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0)).toBe(true);
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: info.outputPath(`interyer-${width}.png`), fullPage: true, animations: "disabled" });
    const a11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
    for (const asset of ["01-hero-room", "02-residential-concept", "03-cafe-concept", "04-studio-workspace", "05-plan-and-concept", "06-complete-design", "07-project-guidance", "08-workflow", "09-contact-brief"]) {
      expect((await request.get(`/images/interyer/stickers/${asset}.webp`)).status()).toBe(200);
    }
  });
}

test("interior portfolio, languages and clipboard enquiry", async ({ page, request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/interyer");
  await page.goto("/loyihalar");
  await page.getByRole("link", { name: modernUzbek("Interyer sahifasini ko‘rish") }).click();
  await expect(page).toHaveURL(/\/interyer$/);
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru\/interyer$/);
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/interyer$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Interiors");
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/interyer");
  await page.getByLabel(modernUzbek("Nimani o‘zgartirmoqchisiz?")).fill("Yorug‘roq mehmonxona istayman");
  await page.getByRole("button", { name: modernUzbek("Brifni nusxalash") }).click();
  await expect(page.getByRole("status")).toContainText(modernUzbek("Brif nusxalandi"));
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain("Yorug‘roq mehmonxona istayman");
  await expect(page.locator(".int-channel-pending")).toHaveCount(2);
});
