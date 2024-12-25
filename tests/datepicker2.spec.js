import {test,expect} from '@playwright/test'
test ('DatePicker Test',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForTimeout(5000);
//await page.locator("//input[@id='start-date']").click();
await page.getByPlaceholder('Start Date').fill('2024-11-26');
//await page.locator("//input[@id='start-date']").fill('01-11-2024');
await page.waitForTimeout(5000);
await page.getByPlaceholder('End Date').fill('2024-12-04');
//await page.locator('#end-date').fill('20-11-2024');
//const result = await page. locator("//div[@id='result']//script").innerText();
//await expect(result).toHaveValue('You selected a range of 19 days.');
await page.waitForTimeout(5000);
})