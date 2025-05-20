# Test info

- Name: Multiselect DropDown
- Location: C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\DropDown\multiselect.spec.js:2:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\DropDown\multiselect.spec.js:3:14
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | test("Multiselect DropDown", async ({ page }) => {
>  3 |   await page.goto("https://testautomationpractice.blogspot.com");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   4 |   await page.selectOption("#coclors", ["Red", "Blue", "Green", "Yellow"]);
   5 |   const options = await page.$$("//select[@id='colors']/option");
   6 |   expect(options.length).toBe(7);
   7 |
   8 |   let f = false;
   9 |   for (const o of options) {
  10 |     const text = await o.textContent();
  11 |     console.log(text);
  12 |     if (text.includes("Yellow")) {
  13 |       f = true;
  14 |       break;
  15 |     }
  16 |   }
  17 |   expect(f).toBeTruthy();
  18 |   await page.waitForTimeout(2000);
  19 |   await page.close();
  20 | });
  21 |
```