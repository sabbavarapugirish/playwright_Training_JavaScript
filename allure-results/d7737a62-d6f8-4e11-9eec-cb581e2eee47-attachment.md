# Test info

- Name: Javascript Alert, Confirm, Prompt in Playwright >> JS Prompt
- Location: C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\Alerstss\Alerts.spec.js:39:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('#result')
Expected string: "You entered:Welcome to Playwrite Learning....!"
Received string: "You clicked: Ok"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('#result')
    8 × locator resolved to <p id="result">You clicked: Ok</p>
      - unexpected value "You clicked: Ok"

    at C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\Alerstss\Alerts.spec.js:45:43
```

# Page snapshot

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "JavaScript Alerts" [level=3]
- paragraph: Here are some examples of different JavaScript alerts which can be troublesome for automation
- list:
  - listitem:
    - button "Click for JS Alert"
  - listitem:
    - button "Click for JS Confirm"
  - listitem:
    - button "Click for JS Prompt"
- heading "Result:" [level=4]
- paragraph: "You clicked: Ok"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | //normal alert---with ok button
   4 | //conform alert---with ok and cancle button
   5 | //prompt alert----with prompt text and ok button
   6 |
   7 | test.describe("Javascript Alert, Confirm, Prompt in Playwright", () => {
   8 |   test.beforeEach(async ({ page }) => {
   9 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  10 |   });
  11 |
  12 |   test("JS Alert - Validate Alert Test and Clik OK", async ({ page }) => {
  13 |     page.on("dialog", async (dialog) => {
  14 |       await page.locator("text=Click for JS Alert").click();
  15 |       await expect(page.locator("#result")).toHaveText(
  16 |         "You successfully clicked an alert"
  17 |       );
  18 |     });
  19 |   });
  20 |
  21 |   test("JS Alert - Validate Confirm Test and Click OK ", async ({ page }) => {
  22 |     page.on("dialog", async (dialog) => {
  23 |       await dialog.accept();
  24 |     });
  25 |     await page.locator("text=Click for JS Confirm").click();
  26 |     await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  27 |   });
  28 |
  29 |   test("JS Alert - Validate Confirm Test and Click Cancel ", async ({
  30 |     page,
  31 |   }) => {
  32 |     page.on("dialog", async (dialog) => {
  33 |       await dialog.dismiss();
  34 |     });
  35 |     await page.locator("text=Click for JS Confirm").click();
  36 |     await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  37 |   });
  38 |
  39 |   test("JS Prompt", async ({ page }) => {
  40 |     page.on("dialog", async (dialog) => {
  41 |       expect(dialog.message().includes("I am a JS prompt"));
  42 |       await dialog.accept("Welcome to Playwright Learning.....!");
  43 |     });
  44 |     await page.locator("text=Click for JS Confirm").click();
> 45 |     await expect(page.locator("#result")).toHaveText(
     |                                           ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  46 |       "You entered:Welcome to Playwrite Learning....!"
  47 |     );
  48 |   });
  49 | });
  50 |
```