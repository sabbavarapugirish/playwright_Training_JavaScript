import {test,expect} from '@playwright/test'
test('upload Html files test ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles('Upload/index.html')
    await page.locator("//input[@id='file-submit']").click();
    await expect(page.locator("//div[@id='uploaded-files']")).toContainText('index.html')
    await page.close();
})
test('upload .jpg files test ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles('Upload/A.jpg')
    await page.locator("//input[@id='file-submit']").click();
    await expect(page.locator("//div[@id='uploaded-files']")).toContainText('A.jpg')
    await page.close();
})
test('upload pdf files test ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles('Upload/helo.pdf')
    await page.locator("//input[@id='file-submit']").click();
    await expect(page.locator("//div[@id='uploaded-files']")).toContainText('helo.pdf')
    await page.close();
})
test('upload txt files test ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles('Upload/text.txt')
    await page.locator("//input[@id='file-submit']").click();
    await expect(page.locator("//div[@id='uploaded-files']")).toContainText('text.txt')
    await page.close();
})