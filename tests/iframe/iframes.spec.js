import {test,expect} from '@playwright/test'
test('iframes',async({page})=>{
    await page.goto("https://jqueryui.com/droppable/")
    const iframeElement=page.frameLocators('.demo-frame')
    const dragElement=iframeElement.locators("[id='draggable']")
    const dropElement=iframeElement.locators("[id='droppable']")

    await dragElement.dragTo(dropElement)
    await page.waitForTimeout(5000);
})