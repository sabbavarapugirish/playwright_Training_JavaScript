import {test,expect} from '@playwright/test'
test('Mouse Handover Test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");
    const button=page.getByRole('button',{name:'Point Me'})
    const mobile=page.getByRole('link',{name:'Mobiles'})
    const laptop=page.getByRole('link',{name:'Laptops'})
    await button.hover();
    await mobile.hover();
    await laptop.hover();
    await laptop.click();
    await page.waitForTimeout(5000)
    await page.close();

})