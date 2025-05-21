import {test,expect} from '@playwright/test'
test('upload files test ',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('Upload/index.html')
    await page.getByRole('button',{name:'Upload Single File'}).click();
    await expect(page.locator('#singleFileStatus')).toContainText('index.html')

    await page.locator('#multipleFilesInput').setInputFiles(['Upload/index.html','Upload/index1.html'])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click()


    await expect(page.locator("#multipleFilesStatus")).toContainText("Multiple files selected:");
    await expect(page.locator("#multipleFilesStatus")).toContainText("index.html");
    await expect(page.locator("#multipleFilesStatus")).toContainText("index1.html");
 
    await page.waitForTimeout(5000);
    await page.close();



})