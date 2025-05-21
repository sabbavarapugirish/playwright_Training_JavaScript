import {test,expect} from '@playwright/test'
test('Date Pickers',async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")
 const year='2025'
 const month='May'
 const date='31'
 await page.click("//input[@id='datepicker']");
 while(true)
    {
        const currentMonth=await page.locator('.ui-datepicker-montrh').textContent()
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        if(currentMonth==month && currentYear==year)
            {
                    break;
            }
                await page.locator("[title='Prev']").click();  
    } 
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
})