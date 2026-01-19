const { test } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("https://demoqa.com");
  const title = await page.title();
  console.log(`Page title: ${title}`);
});
