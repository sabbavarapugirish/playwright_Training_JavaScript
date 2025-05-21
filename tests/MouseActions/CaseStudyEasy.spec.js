import { test, expect } from "@playwright/test";
test("case study Mouse Handover Easy calculation Test", async ({ page }) => {
  await page.goto("https://www.easycalculation.com");
  const English = page.locator("//span[@class='lang']");
  const Portugues = page.locator("//span[normalize-space()='Português']");
  await English.hover();
  await Portugues.hover();
  await Portugues.click();
  await page.waitForTimeout(3000);
  expect(page.getByAltText("//img[@alt='easycalculation.com']")).toBeVisible();
  await page.close();
});
