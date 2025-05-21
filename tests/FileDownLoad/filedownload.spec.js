import {test,expect} from '@playwright/test'
const fs=require('fs')
test.describe('Demonstrate file download in playwright',()=>{
    test('Download a Single file and assert',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/download');
        test.setTimeout(8000);
        const [download]=await Promise.all([
            page.waitForEvent('download'),
            page.locator("a[href='download/some-file.txt']").click()
        ]);
        const suggestedfilename=download.suggestedFilename()
        const filePath='download/'+suggestedfilename 
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy();
    })
})