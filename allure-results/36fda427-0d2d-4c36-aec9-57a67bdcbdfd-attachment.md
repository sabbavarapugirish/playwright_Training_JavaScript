# Test info

- Name: RadioButtons
- Location: C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\RadioButtons\RadioButtons.spec.js:2:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/register", waiting until "load"

    at C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\RadioButtons\RadioButtons.spec.js:3:16
```

# Test source

```ts
  1 | import {test,expect} from '@playwright/test'
  2 | test('RadioButtons',async({page})=>{
> 3 |     await page.goto("https://demo.nopcommerce.com/register");
    |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  4 |     await page.locator("//input[@id='gender-male']").check();
  5 |     await page.waitForTimeout(5000);
  6 |     await page.locator("//input[@id='gender-male']")
  7 |     
  8 | })
```