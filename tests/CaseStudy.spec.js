import { test, expect } from "@playwright/test";
test("popup demo playwright", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    if (dialog.message().includes("clear your cart")) await dialog.accept();
    else await dialog.dismiss();
  });
  await page.goto("https://web-scraping.dev/product/1");
  await page.click(".add-to-cart");
  await page.locator("//div[@class='cart-icon']");
  await page.waitForSelector("//button[normalize-space()='Clear']").click();
});
