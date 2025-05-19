import { test, except } from "@playwright/test";
test("signgin", async ({ page }) => {
  await page.goto("https://www.ebay.com/");
  await page.getByText("register").click();
  const title = await page.title();
  console.log(title);
});
