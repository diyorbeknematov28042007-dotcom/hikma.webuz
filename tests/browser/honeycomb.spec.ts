import { test, expect } from "@playwright/test";

for (const width of [390, 1440]) {
  test(`honeycomb builds, settles and continues to the footer at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/");
    const canvas = page.locator(".honeycomb-background canvas");
    await expect(canvas).toHaveAttribute("data-state", "idle", { timeout: 6000 });
    await expect(page.locator(".honeycomb-background")).toHaveCSS("pointer-events", "none");
    const initial = await canvas.evaluate((element: HTMLCanvasElement) => element.toDataURL());
    await page.locator(".site-footer").scrollIntoViewIfNeeded();
    await expect(canvas).toHaveAttribute("data-state", "idle", { timeout: 6000 });
    const footer = await canvas.evaluate((element: HTMLCanvasElement) => {
      const pixels = element.getContext("2d")!.getImageData(0, 0, element.width, element.height).data;
      return { image: element.toDataURL(), painted: pixels.some((value, index) => index % 4 === 3 && value > 0) };
    });
    expect(footer.painted).toBe(true);
    expect(footer.image).not.toBe(initial);
    const bounds = await canvas.boundingBox();
    expect(bounds!.y).toBe(0);
    expect(bounds!.width).toBe(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator(".back-top").click();
    await expect(page).toHaveURL(/#top$/);
  });
}

test("all home languages use a still hive when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const path of ["/", "/ru", "/en"]) {
    await page.goto(path);
    await expect(page.locator(".honeycomb-background canvas")).toHaveAttribute("data-state", "static");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
  await page.goto("/advokat");
  await expect(page.locator(".honeycomb-background")).toHaveCount(0);
});
