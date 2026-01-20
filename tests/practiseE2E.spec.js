const { test } = require("@playwright/test");

test("E2E Practise Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");

  //Login
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  await email.fill("jijuabutelin@gmail.com");
  await password.fill("Jone@1234");
  await page.locator("#login").click();
});
