import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [390, 1440]) {
  test(`barber style preview and layout at ${width}px`, async ({ page, request }, info) => {
    await page.setViewportSize({ width, height: 850 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    expect((await page.goto("/sartarosh"))?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Öz uslubingizni");
    const stage = page.locator(".barber-stage");
    await stage.scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Modern quiff" }).click();
    await expect(stage.locator(".barber-hair")).toHaveAttribute("src", /modern-quiff/);
    await stage.getByRole("button", { name: "Öng rakursga buriş" }).click();
    await expect(stage.locator(".barber-mannequin")).toHaveAttribute("src", /right30/);
    await expect(stage.locator(".barber-hair")).toHaveAttribute("src", /right30.*modern-quiff/);
    await page.getByRole("button", { name: "Soçsiz" }).click();
    await expect(stage.locator(".barber-hair")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/sartarosh$/);
    expect((await request.get("/images/sartarosh/right30/hair-modern-quiff.webp")).status()).toBe(200);
    await page.screenshot({ path: info.outputPath(`sartarosh-${width}.png`), fullPage: true, animations: "disabled" });
    const a11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
  });
}

test("barber concept is linked in portfolio and translated", async ({ page, request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/sartarosh");
  await page.goto("/loyihalar");
  await page.getByRole("link", { name: "Sartarosh sahifasini körish" }).click();
  await expect(page).toHaveURL(/\/sartarosh$/);
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru\/sartarosh$/);
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/sartarosh$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Find your");
});
