import { expect, test } from "@playwright/test";
test("checking the url and title of the page", async ({ page }) => {
  await page.goto("https://themeforest.net");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});

//demo.opencart
test("opencart", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//rediff
test("rediff", async ({ page }) => {
  await page.goto("https://www.rediff.com/");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//leafground
test("leafground", async ({ page }) => {
  await page.goto("http://www.leafground.com/pages/Dropdown.html");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//tizag
test("tizag", async ({ page }) => {
  await page.goto("http://www.tizag.com/javascriptT/javascriptalert.php");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});

//echoecho
test.only("echoecho", async ({ page }) => {
  await page.goto("http://www.echoecho.com/htmlforms10.htm");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//leafground1
test("leafground1", async ({ page }) => {
  await page.goto("http://www.leafground.com/home.html");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//Automation
test("Automation", async ({ page }) => {
  await page.goto("http://automationpractice.com/index.php");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//Salesforce
test("Salesforce", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//fileHosting
test("fileHosting", async ({ page }) => {
  await page.goto("http://www.filehosting.org");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});

//Bing
test("Bing", async ({ page }) => {
  await page.goto("http://www.bing.com");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//freecrm
test("reecrm", async ({ page }) => {
  await page.goto("https://www.freecrm.com/");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//halfebay
test("halfebay", async ({ page }) => {
  await page.goto("http://www.half.ebay.com");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//alaskatrips
test("alaskatrips", async ({ page }) => {
  await page.goto("https://alaskatrips.poweredbygps.com/");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//qaclickacademy
test("qaclickacademy", async ({ page }) => {
  await page.goto("http://www.qaclickacademy.com/interview.php");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//saucelabs
test("saucelabs", async ({ page }) => {
  await page.goto("https://app.saucelabs.com/login");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//opensource
test("opensource", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
//only-testing-blog.blogspot.com
test("only-testing-blog.blogspot.com", async ({ page }) => {
  await page.goto("http://only-testing-blog.blogspot.com/2014/05/form.html");
  const title = await page.title();
  console.log("title is  : ", title);
  await expect(page).toHaveTitle(title);
  const url = await page.url();
  console.log(url);
  console.log("url is  : ", url);
  await expect(page).toHaveURL(url);
});
