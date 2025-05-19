import { test, expect } from "@playwright/test";
test("Auto Suggested Drop Down", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.locator("//textarea[@id='APjFqb']").fill("Playwright");
  await page.waitForSelector("//ul[@role='listbox']/li//div[@class='wM6W7d']");
  const options = await page.$$(
    "//ul[@role='listbox']/li//div[@class='wM6W7d']"
  );
  for (const option of options) {
    const text = await option.textContent();
    console.log("text ", text);
    if (text.includes("playwright tutorials")) {
      await option.click();
      break;
    }
  }
  await page.waitForTimeout(5000);
  await page.close();
});
