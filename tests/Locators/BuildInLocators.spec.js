import { test, expect } from "@playwright/test";
test("Build in locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page.getByAltText("company-branding")).toBeVisible();
  //Login Credentials

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  //HomePage
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await page.click(".oxd-userdropdown");

  await expect(page.getByText("Logout")).toBeVisible();
  await page.getByText("Logout").click();

  await expect(page.getByAltText('company-branding')).toBeVisible();
});
