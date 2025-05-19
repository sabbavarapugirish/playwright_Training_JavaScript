import {expect,test} from '@playwright/test'
test('Login functionality of the practice website by using the locators',async({page})=>{
    await page.goto("https://practice.expandtesting.com/login");
    //title
    const PAGEtitle=await page.title();
    //url
    const url=await page.url();
    console.log('url is :',url);
    console.log('title is :',PAGEtitle);
    await expect(page).toHaveURL(url)
    await expect(page).toHaveTitle(PAGEtitle);
    //username
    await page.locator("//input[@id='username']").fill("practice");
    //password
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!")
    //log in button
    await page.locator("//button[normalize-space()='Login']").click();

})

test('Login functionality of the automation website by using the locators',async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login");
    //title
    const PAGEtitle=await page.title();
    //url
    const url=await page.url();
    console.log('url is :',url);
    console.log('title is :',PAGEtitle);
    await expect(page).toHaveURL(url)
    await expect(page).toHaveTitle(PAGEtitle);
    //username
    await page.locator("//input[@id='username']").fill("student");
    //password
    await page.locator("//input[@id='password']").fill("Password123")
    //Submit button
    await page.locator("//input[@id='password']").click();

})