import {test , expect} from '@playwright/test';
 
test("Hidden Dropdown Test" , async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 
    await expect(page.getByAltText('company-branding')).toBeVisible();
 
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , {name:'Login'}).click();
    await page.getByText('PIM').click();
 
    await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[3]").click();
 
    await page.waitForSelector("//div[@role='listbox']//span")
    const options = await page.$$("//div[@role='listbox']//span")
    for(const option of options){
        const text = await option.textContent();
        console.log(text)
        if(text.includes('Developer')){
            await option.click();
            break;
        }
    }
 
    await page.waitForTimeout(5000);
    await page.close(); 
});
 