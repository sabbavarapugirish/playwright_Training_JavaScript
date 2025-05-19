import {test,expect} from '@playwright/test'
test('RadioButtons',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    await page.locator("//input[@id='gender-male']").check();
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='gender-male']")
    
})