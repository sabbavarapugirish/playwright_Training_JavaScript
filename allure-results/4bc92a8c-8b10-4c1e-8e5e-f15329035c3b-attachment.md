# Test info

- Name: opencart
- Location: C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\PracticeTestCases\Url-Title.spec.js:14:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "Just a moment..."
Received string: ""
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    - waiting for navigation to finish...

    at C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\PracticeTestCases\Url-Title.spec.js:18:22
```

# Test source

```ts
   1 | import { expect, test } from "@playwright/test";
   2 | test("checking the url and title of the page", async ({ page }) => {
   3 |   await page.goto("https://themeforest.net");
   4 |   const title = await page.title();
   5 |   console.log("title is  : ", title);
   6 |   await expect(page).toHaveTitle(title);
   7 |   const url = await page.url();
   8 |   console.log(url);
   9 |   console.log("url is  : ", url);
   10 |   await expect(page).toHaveURL(url);
   11 | });
   12 |
   13 | //demo.opencart
   14 | test("opencart", async ({ page }) => {
   15 |   await page.goto("https://demo.opencart.com/");
   16 |   const title = await page.title();
   17 |   console.log("title is  : ", title);
>  18 |   await expect(page).toHaveTitle(title);
      |                      ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
   19 |   const url = await page.url();
   20 |   console.log(url);
   21 |   console.log("url is  : ", url);
   22 |   await expect(page).toHaveURL(url);
   23 | });
   24 | //rediff
   25 | test("rediff", async ({ page }) => {
   26 |   await page.goto("https://www.rediff.com/");
   27 |   const title = await page.title();
   28 |   console.log("title is  : ", title);
   29 |   await expect(page).toHaveTitle(title);
   30 |   const url = await page.url();
   31 |   console.log(url);
   32 |   console.log("url is  : ", url);
   33 |   await expect(page).toHaveURL(url);
   34 | });
   35 | //leafground
   36 | test("leafground", async ({ page }) => {
   37 |   await page.goto("http://www.leafground.com/pages/Dropdown.html");
   38 |   const title = await page.title();
   39 |   console.log("title is  : ", title);
   40 |   await expect(page).toHaveTitle(title);
   41 |   const url = await page.url();
   42 |   console.log(url);
   43 |   console.log("url is  : ", url);
   44 |   await expect(page).toHaveURL(url);
   45 | });
   46 | //tizag
   47 | test("tizag", async ({ page }) => {
   48 |   await page.goto("http://www.tizag.com/javascriptT/javascriptalert.php");
   49 |   const title = await page.title();
   50 |   console.log("title is  : ", title);
   51 |   await expect(page).toHaveTitle(title);
   52 |   const url = await page.url();
   53 |   console.log(url);
   54 |   console.log("url is  : ", url);
   55 |   await expect(page).toHaveURL(url);
   56 | });
   57 |
   58 | //echoecho
   59 | test("echoecho", async ({ page }) => {
   60 |   await page.goto("http://www.echoecho.com/htmlforms10.htm");
   61 |   const title = await page.title();
   62 |   console.log("title is  : ", title);
   63 |   await expect(page).toHaveTitle(title);
   64 |   const url = await page.url();
   65 |   console.log(url);
   66 |   console.log("url is  : ", url);
   67 |   await expect(page).toHaveURL(url);
   68 | });
   69 | //leafground1
   70 | test("leafground1", async ({ page }) => {
   71 |   await page.goto("http://www.leafground.com/home.html");
   72 |   const title = await page.title();
   73 |   console.log("title is  : ", title);
   74 |   await expect(page).toHaveTitle(title);
   75 |   const url = await page.url();
   76 |   console.log(url);
   77 |   console.log("url is  : ", url);
   78 |   await expect(page).toHaveURL(url);
   79 | });
   80 | //Automation
   81 | test("Automation", async ({ page }) => {
   82 |   await page.goto("http://automationpractice.com/index.php");
   83 |   const title = await page.title();
   84 |   console.log("title is  : ", title);
   85 |   await expect(page).toHaveTitle(title);
   86 |   const url = await page.url();
   87 |   console.log(url);
   88 |   console.log("url is  : ", url);
   89 |   await expect(page).toHaveURL(url);
   90 | });
   91 | //Salesforce
   92 | test("Salesforce", async ({ page }) => {
   93 |   await page.goto("https://login.salesforce.com/?locale=in");
   94 |   const title = await page.title();
   95 |   console.log("title is  : ", title);
   96 |   await expect(page).toHaveTitle(title);
   97 |   const url = await page.url();
   98 |   console.log(url);
   99 |   console.log("url is  : ", url);
  100 |   await expect(page).toHaveURL(url);
  101 | });
  102 | //fileHosting
  103 | test("fileHosting", async ({ page }) => {
  104 |   await page.goto("http://www.filehosting.org");
  105 |   const title = await page.title();
  106 |   console.log("title is  : ", title);
  107 |   await expect(page).toHaveTitle(title);
  108 |   const url = await page.url();
  109 |   console.log(url);
  110 |   console.log("url is  : ", url);
  111 |   await expect(page).toHaveURL(url);
  112 | });
  113 |
  114 | //Bing
  115 | test("Bing", async ({ page }) => {
  116 |   await page.goto("http://www.bing.com");
  117 |   const title = await page.title();
  118 |   console.log("title is  : ", title);
```