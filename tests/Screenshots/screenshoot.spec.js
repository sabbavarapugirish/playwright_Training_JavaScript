import { test, expect } from "@playwright/test";
test("page screenshots", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.screenshot({ path: "screenshots/" + Date.now() + "Homepage.png" });
});
test("Full page screenshots", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.screenshot({
    path: "screenshots/" + Date.now() + "Fullpage.png",
    fullPage: true,
  });
});
test("Element screenshots", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page
    .locator("//a[normalize-space()='Samsung galaxy s6']")
    .screenshot({ path: "screenshots/" + Date.now() + "Element.png" });
});
