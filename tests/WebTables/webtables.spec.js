import {test,expect} from '@playwright/test'
test('Webtable',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("---total number of rows and columns")
    const table= page.locator("//table[@id='productTable']")
    const columns= page.locator("//table[@id='productTable']//th")
    const rows= page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no of columns  :',await columns.count())
    console.log('no of rows  :',await rows.count())
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)
console.log("---select the smartwatch option");
    const matchrow=rows.filter({
        has:page.locator('td'),
        hasText:'Smartwatch',
    })
    await matchrow.locator('input').check()

  //3. select multiple products by re-use function
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Laptop')
    
    async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name,
    })
    await matchedRow.locator('input').check()
 
}
console.log('----print all product details using loop same page---------------')
//4. print all product details using loop same page
for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }
    await page.waitForTimeout(5000)
    await page.close()
})
    
