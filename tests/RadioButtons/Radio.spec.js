import { test, expect } from "@playwright/test";
test("Radio buttons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");
  const r = await page.$$("(//input[@name='gender' and @type='radio'])");
  const number1 = r.length;
  console.log("radio buttons in the testautoimation website", number1);
  await page.locator("//input[@id='male']").check();
  await expect(page.locator("//input[@id='male']")).toBeChecked();
});
test("Face Book Login", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?entry_point=login");
  const radiobuttons = await page.$$('input[type="radio"]');
  const number = radiobuttons.length;
  console.log("Radio buttons in the facebook website is ", number);
  await page.locator("//label[normalize-space()='Female']").check();
  await expect(
    page.locator("//label[normalize-space()='Female']")
  ).toBeChecked();
});
