import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const [locale, title, service] of [
  ["ru", "Ваше место", "Разработка лендинга"],
  ["en", "Find your place", "Landing page design"],
] as const) {
  test(`${locale} content, navigation and metadata`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${locale}`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toContainText(title);
    await expect(page.locator(".language-switch a[aria-current=page]")).toHaveAttribute("href", `/${locale}`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/${locale}$`));
    await expect(page.locator('link[hreflang="uz-UZ"]')).toHaveCount(1);
    await page.getByRole("link", { name: new RegExp(service === "Разработка лендинга" ? "Подробнее об услуге" : "Explore this service") }).first().click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/xizmatlar/landing-page$`));
    await expect(page.locator("h1")).toContainText(service);
    await page.getByRole("link", { name: "Özbekça" }).click();
    await expect(page).toHaveURL(/\/xizmatlar\/landing-page$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "uz");
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
  });
}

test("language switch preserves the current section anchor", async ({ page }) => {
  await page.goto("/#xizmatlar");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en#xizmatlar$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});
