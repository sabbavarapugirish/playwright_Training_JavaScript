import {test,expect} from '@playwright/test'
test('Link and products',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    const products=await page.$$("xpath=//div[@id='tbodyid']//div//h4//a")
    for(const product of products)
        {
            const textproducts=await product.textContent();
            console.log(textproducts)
            if(textproducts.includes('Sony vaio i5'))
                {
                    await product.click();
                    break;
                }

        }
      await expect(page.getByRole('heading',{name:'Sony vaio i5'})).toBeVisible()
      await page.waitForTimeout(2000)
      await page.close()  
})
