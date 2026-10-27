import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { modernUzbek } from "../../src/lib/i18n";

for (const width of [390, 1440]) {
  test(`barber style preview and layout at ${width}px`, async ({ page, request }, info) => {
    await page.setViewportSize({ width, height: 850 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    expect((await page.goto("/sartarosh"))?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Öz uslubingizni");
    const stage = page.locator(".barber-stage");
    await stage.scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Modern quiff" }).click();
    await expect(stage.locator(".barber-portrait:not(.barber-portrait-old)")).toHaveAttribute("src", /front\/modern-quiff/);
    await stage.getByRole("button", { name: "Öng rakursga buriş" }).click();
    await expect(stage.locator(".barber-portrait:not(.barber-portrait-old)")).toHaveAttribute("src", /right30\/modern-quiff/);
    await page.getByRole("button", { name: "Soçsiz" }).click();
    await expect(stage.locator(".barber-portrait:not(.barber-portrait-old)")).toHaveAttribute("src", /right30\/bald/);
    await expect.poll(async () => stage.locator(".barber-portrait:not(.barber-portrait-old)").evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    await page.getByRole("button", { name: "Low fade" }).click();
    await page.getByRole("button", { name: "Pompadur" }).click();
    await page.getByRole("button", { name: "Rakurs 1/3" }).click();
    await expect(stage.locator(".barber-portrait:not(.barber-portrait-old)")).toHaveAttribute("src", /left30\/pompadour/);
    await expect(stage.locator(".barber-stage-images")).toHaveAttribute("data-loading", "false");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/sartarosh$/);
    expect((await request.get("/images/sartarosh/portraits/right30/modern-quiff.webp")).status()).toBe(200);
    await page.screenshot({ path: info.outputPath(`sartarosh-${width}.png`), fullPage: true, animations: "disabled" });
    const a11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
  });
}

test("barber sections appear when scrolled into view", async ({ page }) => {
  await page.goto("/sartarosh");
  await expect(page.locator(".barber-hero-copy")).toHaveCSS("opacity", "1");
  const studio = page.locator(".barber-studio-photo");
  await studio.scrollIntoViewIfNeeded();
  await expect(studio).toHaveClass(/barber-visible/);
  await expect(studio).toHaveCSS("opacity", "1");
  const price = page.locator(".barber-price-row").first();
  await price.scrollIntoViewIfNeeded();
  await expect(price).toHaveClass(/barber-visible/);
  await expect(price).toHaveCSS("opacity", "1");
});

test("barber concept is linked in portfolio and translated", async ({ page, request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/sartarosh");
  await page.goto("/loyihalar");
  await page.getByRole("link", { name: modernUzbek("Sartarosh sahifasini körish") }).click();
  await expect(page).toHaveURL(/\/sartarosh$/);
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru\/sartarosh$/);
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/sartarosh$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Find your");
});
