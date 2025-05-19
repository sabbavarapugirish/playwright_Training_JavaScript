const { test, expect } = require("@playwright/test");
test("Checking the browser Title", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  const pageTitle = await page.title();
  console.log("pageTitle is   :", pageTitle);
  //expect is used for Assertions
  await expect(page).toHaveTitle("STORE");
});
test("Checking the browser url", async ({ page }) => {
  await page.goto("https://www.hollandandbarrett.com/");
  const pageurl = await page.url();
  console.log("pageTitle is   :", pageurl);
  await expect(page).toHaveURL("https://www.hollandandbarrett.com/");
  await page.close();
});
