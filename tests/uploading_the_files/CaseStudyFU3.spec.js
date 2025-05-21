import {test,expect} from '@playwright/test'
test('files Uploading ',async({page})=>{
     await page.goto("");
  await page.locator("//input[@id='upload']").setInputFiles("Upload/A.jpg");
  await page.locator("//button[normalize-space()='Upload...']").click();
  await page.waitForTimeout(3000);
  await expect(page.locator("//div[@id='filename']")).toContainText("");
  await page.close();
})