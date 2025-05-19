import { test, expect } from "@playwright/test";
test("Case Study Drop Down", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.locator("//textarea[@id='APjFqb']").fill("EasyCalculation");
  await page.waitForSelector("//ul[@role='listbox']/li//div[@class='wM6W7d']");
  const options = await page.$$(
    "//ul[@role='listbox']/li//div[@class='wM6W7d']"
  );
  for (const option of options) {
    const text = await option.textContent();
    console.log("text ", text);
  }
  await page.locator("//textarea[@id='APjFqb']").press("Enter");

  await page.waitForTimeout(50000);

  await page.click("//h3[normalize-space()='EasyCalculation']");

  await page.locator("input[@id='googleSearchId']").fill("playwright");
  await page.locator("//textarea[@id='APjFqb']").press("Enter");
  await page.locator("(//span[normalize-space()='Visit Website'])[1]").click();
  page.waitForSelector("//a[@href='/']//*[name()='svg']");
  expect(await page.locator("//a[@href='/']//*[name()='svg']")).toBeVisible();
});
