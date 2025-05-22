import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('girish4563');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('girija@2002');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('Hello');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('Vizag');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('093478272');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('May');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  // await page.get
});
 
