import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const widths = [320, 360, 375, 390, 430, 768, 1024, 1440, 1920];
for (const width of widths) {
  test(`layout and keyboard at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
    await page.goto("/");
    await page.getByRole("heading", { level: 1 }).waitFor();
    await expect(page.locator("html")).toHaveAttribute("lang", "uz");
    await expect(page.locator(".service")).toHaveCount(4);
    await expect(page.locator(".stage-services a")).toHaveCount(4);
    for (const service of [
      "Landing page",
      "Telegram bot",
      "Instagram Ads",
      "Telegram Ads",
    ]) {
      await expect(
        page
          .locator("#xizmatlar")
          .getByRole("heading", { name: service, exact: true }),
      ).toBeVisible();
    }
    await expect(
      page.getByRole("link", { name: "Telegramda yozish" }),
    ).toHaveAttribute("href", "https://t.me/Hikmaservice_bot");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const cta = page.locator(".hero-actions .button");
    const box = await cta.boundingBox();
    expect(box?.y).toBeGreaterThan(0);
    expect(box!.y + box!.height).toBeLessThan(width < 768 ? 844 : 1000);
    if (width < 1024) {
      const trigger = page.getByRole("button", { name: "Menyuni ochish" });
      await trigger.click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).not.toBeVisible();
      await expect(trigger).toBeFocused();
      await trigger.click();
      await page
        .getByRole("navigation", { name: "Mobil navigatsiya" })
        .getByText("Xizmatlar")
        .click();
      await expect(page.getByRole("dialog")).not.toBeVisible();
      await expect(page).toHaveURL(/#xizmatlar$/);
    }
    const faq = page.getByText("Narx qanday aniqlanadi?", { exact: true });
    await faq.click();
    await expect(page.locator("details[open]")).toHaveCount(1);
    await page.locator("#aloqa").scrollIntoViewIfNeeded();
    await page
      .getByLabel("Loyiha haqida qisqacha")
      .fill("Biznes uchun mobilga mos sahifa kerak.");
    await page.evaluate(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async () => {} },
      });
    });
    await page.getByRole("button", { name: "Tavsifni nusxalash" }).click();
    await expect(page.getByRole("status")).toContainText("nusxalandi");
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    await page.screenshot({
      path: info.outputPath(`landing-${width}.png`),
      fullPage: true,
      animations: "disabled",
    });
  });
}
test("reduced motion and no-JavaScript navigation retain content", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: "reduce",
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page
    .getByRole("navigation", { name: "Navigatsiya", exact: true })
    .getByText("Xizmatlar")
    .click();
  await expect(page).toHaveURL(/#xizmatlar$/);
  await expect(
    page.getByRole("button", { name: "Tavsifni nusxalash" }),
  ).toBeDisabled();
  await context.close();
});
test("quick service navigation and reduced-motion depth remain usable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".depth-scene")).toHaveCSS("transform", "none");
  await page
    .getByRole("navigation", { name: "Xizmatlarni tez tanlash" })
    .getByRole("link", { name: "Telegram bot" })
    .click();
  await expect(page).toHaveURL(/#service-bot$/);
  await page.locator("#service").selectOption("Instagram Ads");
  await expect(page.locator("#service")).toHaveValue("Instagram Ads");
});
test("primary action fits a small iPhone-sized viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  const box = await page.locator(".hero-actions .button").boundingBox();
  expect(box!.y + box!.height).toBeLessThanOrEqual(568);
});
test("privacy, missing route and crawl metadata", async ({ page, request }) => {
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Maxfiylik",
  );
  const notFound = await page.goto("/missing-page");
  expect(notFound?.status()).toBe(404);
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/apple-icon.png",
  ])
    expect((await request.get(path)).ok()).toBe(true);
});
