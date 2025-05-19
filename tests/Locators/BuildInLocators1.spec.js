import {test,expect} from '@playwright/test'
test('Register Ebay Website',async({page})=>{
 await page.goto("https://www.ebay.com/");
 await expect(page.getByAltText('')).toBeVisible();
 await page.getByText("register").click();
 await page.getByRole("button", { name: "Personal" }).click();
 
 await page.getByText('Register').click();
 await page.getByPlaceholder('First Name').fill("Hello")
 await page.getByPlaceholder('Last Name').fill("Hi");
 await page.getByPlaceholder('E-Mail').fill("hello@gmail.com");
 await page.getByPlaceholder('Password').fill('ABC@123')
 await page.getByRole("button", { name: "Continue" }).click();
 await page.getByRole('checkbox',{name:'agree'}).click();

})
test('Login',async({page})=>{

})