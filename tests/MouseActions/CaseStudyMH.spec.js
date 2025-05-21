import { test, expect } from "@playwright/test";
test("case study Mouse Handover spiceclub Test", async ({ page }) => {
  await page.goto("https://www.spicejet.com");
  const Spiceclub = page.locator("(//div[normalize-space()='SpiceClub'])[2]");
  const Our_program = page.locator(
    "(//div[normalize-space()='Our Program'])[3]"
  );

  await Spiceclub.hover();
  await page.waitForTimeout(3000);
  await Our_program.hover();
  await page.waitForTimeout(3000);
  await Our_program.click();
  await page.waitForTimeout(3000);
  await page.close();
});
test("case study Mouse Handover Add-on Test", async ({ page }) => {
  await page.goto("https://www.spicejet.com");
  const Add_On = page.locator("(//div[normalize-space()='SpiceClub'])[2]");
  const SpicePlus = page.locator(
    "//div[@class='css-76zvg2 r-homxoj r-ubezar'][normalize-space()='SpicePlus']"
  );

  await Add_On.hover();
  await page.waitForTimeout(3000);
  await SpicePlus.hover();
  await page.waitForTimeout(3000);
  await SpicePlus.click();
  await page.waitForTimeout(3000);
  await page.close();
});
