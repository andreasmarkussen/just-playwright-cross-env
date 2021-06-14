import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  const str = "dlkjas"
  expect(name).toBe('Playwright');
  expect(str).toMatch(/d/);
});
