import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Type characters').click();
  await page.getByPlaceholder('Type characters').fill('JFPLHM');
  await page.getByPlaceholder('Type characters').press('Enter');
  await page.getByLabel('Open All Categories Menu').click();
  await page.getByRole('link', { name: 'Arts & Crafts' }).click();
  await page.getByRole('link', { name: 'Needlework' }).click();
  await page.locator('.a-link-normal').first().click();
  await page.getByLabel('Dismiss').click();
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('test');
  await page.getByLabel('test light').click();
  await page.getByRole('link', { name: 'Klein Tools', exact: true }).click();
  await page.getByRole('link', { name: 'Light Bulbs' }).click();
});