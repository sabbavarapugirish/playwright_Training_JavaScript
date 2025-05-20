import { test, expect } from "@playwright/test";
test("page screenshots", async ({ page }) => {
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.screenshot({
    path: "screenshots/" + Date.now() + "Tester Homepage.png",
  });
});
test("Full page screenshots", async ({ page }) => {
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.screenshot({
    path: "screenshots/" + Date.now() + "Tester Fullpage.png",
    fullPage: true,
  });
});
test("Element screenshots", async ({ page }) => {
  await page.goto("https://www.youtube.com/@testerstalk");
  await page
    .locator("//span[@role='text'][normalize-space()='Testers Talk']")
    .screenshot({ path: "screenshots/" + Date.now() + "TESTER Element.png" });
});
