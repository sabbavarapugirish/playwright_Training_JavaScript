# Test info

- Name: alaskatrips
- Location: C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\PracticeTestCases\Url-Title.spec.js:148:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://alaskatrips.poweredbygps.com/
Call log:
  - navigating to "https://alaskatrips.poweredbygps.com/", waiting until "load"

    at C:\Users\sabbavarapu.kumar\PlaywrightExample\tests\PracticeTestCases\Url-Title.spec.js:149:14
```

# Test source

```ts
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
  119 |   await expect(page).toHaveTitle(title);
  120 |   const url = await page.url();
  121 |   console.log(url);
  122 |   console.log("url is  : ", url);
  123 |   await expect(page).toHaveURL(url);
  124 | });
  125 | //freecrm
  126 | test("reecrm", async ({ page }) => {
  127 |   await page.goto("https://www.freecrm.com/");
  128 |   const title = await page.title();
  129 |   console.log("title is  : ", title);
  130 |   await expect(page).toHaveTitle(title);
  131 |   const url = await page.url();
  132 |   console.log(url);
  133 |   console.log("url is  : ", url);
  134 |   await expect(page).toHaveURL(url);
  135 | });
  136 | //halfebay
  137 | test("halfebay", async ({ page }) => {
  138 |   await page.goto("http://www.half.ebay.com");
  139 |   const title = await page.title();
  140 |   console.log("title is  : ", title);
  141 |   await expect(page).toHaveTitle(title);
  142 |   const url = await page.url();
  143 |   console.log(url);
  144 |   console.log("url is  : ", url);
  145 |   await expect(page).toHaveURL(url);
  146 | });
  147 | //alaskatrips
  148 | test("alaskatrips", async ({ page }) => {
> 149 |   await page.goto("https://alaskatrips.poweredbygps.com/");
      |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://alaskatrips.poweredbygps.com/
  150 |   const title = await page.title();
  151 |   console.log("title is  : ", title);
  152 |   await expect(page).toHaveTitle(title);
  153 |   const url = await page.url();
  154 |   console.log(url);
  155 |   console.log("url is  : ", url);
  156 |   await expect(page).toHaveURL(url);
  157 | });
  158 | //qaclickacademy
  159 | test("qaclickacademy", async ({ page }) => {
  160 |   await page.goto("http://www.qaclickacademy.com/interview.php");
  161 |   const title = await page.title();
  162 |   console.log("title is  : ", title);
  163 |   await expect(page).toHaveTitle(title);
  164 |   const url = await page.url();
  165 |   console.log(url);
  166 |   console.log("url is  : ", url);
  167 |   await expect(page).toHaveURL(url);
  168 | });
  169 | //saucelabs
  170 | test("saucelabs", async ({ page }) => {
  171 |   await page.goto("https://app.saucelabs.com/login");
  172 |   const title = await page.title();
  173 |   console.log("title is  : ", title);
  174 |   await expect(page).toHaveTitle(title);
  175 |   const url = await page.url();
  176 |   console.log(url);
  177 |   console.log("url is  : ", url);
  178 |   await expect(page).toHaveURL(url);
  179 | });
  180 | //opensource
  181 | test("opensource", async ({ page }) => {
  182 |   await page.goto("https://opensource-demo.orangehrmlive.com/");
  183 |   const title = await page.title();
  184 |   console.log("title is  : ", title);
  185 |   await expect(page).toHaveTitle(title);
  186 |   const url = await page.url();
  187 |   console.log(url);
  188 |   console.log("url is  : ", url);
  189 |   await expect(page).toHaveURL(url);
  190 | });
  191 | //only-testing-blog.blogspot.com
  192 | test("only-testing-blog.blogspot.com", async ({ page }) => {
  193 |   await page.goto("http://only-testing-blog.blogspot.com/2014/05/form.html");
  194 |   const title = await page.title();
  195 |   console.log("title is  : ", title);
  196 |   await expect(page).toHaveTitle(title);
  197 |   const url = await page.url();
  198 |   console.log(url);
  199 |   console.log("url is  : ", url);
  200 |   await expect(page).toHaveURL(url);
  201 | });
  202 |
```