import { test, expect } from "@playwright/test";
test("upload Html files test ", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/FileUpload.wwd");
  await page.locator("//input[@id='upload']").setInputFiles("Upload/A.jpg");
  await page.locator("//button[normalize-space()='Upload...']").click();
  await page.waitForTimeout(3000);
  await expect(page.locator("//div[@id='filename']")).toContainText("");
  await page.close();
});
test("upload MultipleFiles files test ", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/FileUpload.wwd");
  await page
    .locator("//input[@id='upload']")
    .setInputFiles(["Upload/A.jpg", "Upload/B.jpg"]);
  await page.locator("//button[normalize-space()='Upload...']").click();
  await page.waitForTimeout(3000);
  await expect(page.locator("//div[@id='filename']")).toContainText("");
  await page.close();
});
