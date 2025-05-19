import { test, expect } from "@playwright/test";
test("Multiselect DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  await page.selectOption("#coclors", ["Red", "Blue", "Green", "Yellow"]);
  const options = await page.$$("//select[@id='colors']/option");
  expect(options.length).toBe(7);

  let f = false;
  for (const o of options) {
    const text = await o.textContent();
    console.log(text);
    if (text.includes("Yellow")) {
      f = true;
      break;
    }
  }
  expect(f).toBeTruthy();
  await page.waitForTimeout(2000);
  await page.close();
});
