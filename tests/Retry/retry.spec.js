import { test, expect } from "@playwright/test";
 
test("Re-try Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
 
  await page.locator("#loginusername").fill("girish4563");
 
  await page.locator("#loginpassword").fill("girija@2002");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  await page.close();
});
 
 