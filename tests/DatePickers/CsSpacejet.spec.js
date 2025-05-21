import {test,expect} from '@playwright/test'
test('SpaceJet',async({page})=>{
    await page.goto("https://www.spicejet.com/");
    
})
