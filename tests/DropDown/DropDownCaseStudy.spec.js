import { test, expect } from "@playwright/test";
test("date day month", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?entry_point=login");
  const day = await page.$$("//select[@id='day']/option");
  await page.waitForTimeout(3000);
  await page.selectOption("//select[@id='day']", { index: 22 });
  await page.waitForTimeout(3000);

  const month = await page.$$("//select[@id='month']/option");
  console.log(month.length);
  await page.waitForTimeout(3000);
  await page.selectOption("//select[@id='month']", { label: "Oct" });
  await page.waitForTimeout(3000);
  const year = await page.$$("//select[@id='year']/option");
  await page.waitForTimeout(3000);
  await page.selectOption("//select[@id='year']", { value: "2002" });
  await page.waitForTimeout(3000);

  //days
  for (const days of day) {
    const text = await days.textContent();
    console.log(text);
  }
  //months
  for (const months of month) {
    const text = await months.textContent();
    console.log(text);
  }
  //years
  for (const years of year) {
    const text = await years.textContent();
    console.log(text);
  }
});
