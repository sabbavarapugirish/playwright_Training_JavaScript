import { test, except } from "@playwright/test";
test("signgin", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.click("//a[@id='login2']");
  await page.locator("//input[@id='loginusername']").fill("girish4563");
  await page.locator("//input[@id='loginpassword']").fill("girija@2002");
  await page.locator("//button[normalize-space()='Log in']").click();
});
