import {test,expect} from '@playwright/test'
test('List Drop Down',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.selectOption("#country",'India')
    await page.selectOption("#country",{label:"India"})
    await page.selectOption("#country",{value:'uk'})
    await page.selectOption("#country",{index:6})
    const options=await page.$$("//select[@id='country']/option")
    await expect(options.length).toBe(10);
    const option1=page.locator("//select[@id='country']/option")
    await expect(option1).toHaveCount(10);
    let f=false;
    for(const option of options)
        {
            const textOptions=await option.textContent();
            console.log(textOptions)
            if(textOptions.includes('India')){
                f=true;
                break;
            }
        }expect(f).toBeTruthy()
        await page.waitForTimeout(3000)

})