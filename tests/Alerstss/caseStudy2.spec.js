import { test, expect } from "@playwright/test";
test.beforeEach("Url launch", async ({ page }) => {
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
});
test("enter the Email ", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    const message = dialog.message();
    console.log("alert message is  ", message);
    await expect(message).toEqual("Please enter your password");
    if (dialog.message().includes("enter your password")) {
      await dialog.accept();
      const message = dialog.message();
      await expect;
    }
  });
  if (await page.locator("//input[@id='login1']").isVisible()) {
    await page.locator("//input[@id='login1']").clear();
    await page.locator("//input[@id='login1']").fill("Girish");
    await page.locator("//button[normalize-space()='Log In']").click();
  }
});
test("enter the password ", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    const message1 = dialog.message();
    console.log("alert message is  ", message1);

    await expect(message1).toEqual("Please enter a valid user name");
    if (dialog.message().includes("Please enter a valid user name")) {
      await dialog.accept();
    }
  });
  if (await page.locator("//input[@id='password']").isVisible()) {
    await page.locator("//input[@id='password']").clear();
    await page.locator("//input[@id='password']").fill("Abc@123");
    await page.locator("//button[normalize-space()='Log In']").click();
  }
});
