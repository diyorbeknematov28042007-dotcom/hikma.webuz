import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const services = [
  { path: "/xizmatlar/landing-page", title: "Landing page yaratish" },
  { path: "/xizmatlar/telegram-bot", title: "Telegram bot yaratish" },
  { path: "/xizmatlar/instagram-ads", title: "Instagram reklamasini sozlash" },
  {
    path: "/xizmatlar/telegram-ads",
    title: "Telegram Ads reklamasini sozlash",
  },
];

for (const service of services) {
  test(`${service.path}: mobile content, metadata, schema and return navigation`, async ({
    page,
  }, info) => {
    await page.setViewportSize({ width: 320, height: 844 });
    const response = await page.goto(service.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(service.title);
    const sticker = page.locator(".detail-hero-sticker");
    await expect(sticker).toBeVisible();
    await expect
      .poll(() =>
        sticker.evaluate(
          (image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
    await expect(page).toHaveTitle(`${service.title} | HIKMA`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      origin + service.path,
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      origin + service.path,
    );
    const data = JSON.parse(
      await page.locator('script[type="application/ld+json"]').innerText(),
    );
    const schema = data["@graph"].find(
      (node: Record<string, unknown>) => node["@type"] === "Service",
    );
    expect(schema.url).toBe(origin + service.path);
    expect(schema.provider["@id"]).toBe(`${origin}/#organization`);
    const breadcrumb = data["@graph"].find(
      (node: Record<string, unknown>) => node["@type"] === "BreadcrumbList",
    );
    expect(breadcrumb.itemListElement.at(-1).item).toBe(origin + service.path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.locator("details summary").first().click();
    await expect(page.locator("details[open]")).toHaveCount(1);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page.screenshot({
      path: info.outputPath("service-mobile.png"),
      fullPage: true,
      animations: "disabled",
    });
    await page.getByRole("button", { name: "Menyuni ochish" }).click();
    await page
      .getByRole("navigation", { name: "Mobil navigatsiya" })
      .getByRole("link", { name: "Bog‘lanish" })
      .click();
    await expect(page).toHaveURL(/\/#aloqa$/);
    await expect(page.locator("#aloqa")).toBeVisible();
  });
}

test("new pages render without JavaScript and sitemap discovers them", async ({
  browser,
  request,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const path of [
    "/xizmatlar",
    ...services.map((service) => service.path),
    "/loyihalar",
  ]) {
    expect(sitemap).toContain(`<loc>${origin}${path}</loc>`);
    expect((await page.goto(path))?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page
        .getByRole("navigation", { name: "Navigatsiya", exact: true })
        .getByRole("link", { name: "Xizmatlar" }),
    ).toHaveAttribute("href", "/#xizmatlar");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "index, follow",
    );
  }
  expect((await page.goto("/xizmatlar/mavjud-emas"))?.status()).toBe(404);
  await context.close();
});

for (const width of [768, 1024, 1440]) {
  test(`new page layouts at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of [
      "/xizmatlar",
      ...services.map((service) => service.path),
      "/loyihalar",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        path,
      ).toBe(true);
      await expect(page.locator("h1")).toBeVisible();
    }
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page.screenshot({
      path: info.outputPath(`projects-${width}.png`),
      fullPage: true,
      animations: "disabled",
    });
  });
}

test("homepage identity and service-to-project journey", async ({ page }) => {
  await page.goto("/");
  const brand = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(
    brand["@graph"].find(
      (node: Record<string, unknown>) => node["@type"] === "WebSite",
    ),
  ).toMatchObject({ name: "HIKMA", url: `${origin}/` });
  expect(
    brand["@graph"].find(
      (node: Record<string, unknown>) => node["@type"] === "Organization",
    ).sameAs,
  ).toContain("https://www.instagram.com/hikma.service/");
  await page
    .getByRole("link", { name: "Landing page haqida batafsil", exact: true })
    .click();
  await expect(page).toHaveURL(/\/xizmatlar\/landing-page$/);
  await page.getByRole("link", { name: "Bajarilgan ishlarni ko‘rish" }).click();
  await expect(page).toHaveURL(/\/loyihalar$/);
  await expect(
    page.getByRole("heading", { name: "Hikmaweb.uz", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Saytni ko‘rish", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Raqamli dunyoda",
  );
});
