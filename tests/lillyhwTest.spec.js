import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    const img = await page.getByAltText('company-branding')
    await expect(img).toBeVisible();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(100000);
    await page.locator("//a[@class='oxd-main-menu-item']//span[text()='My Info']").click();
    await page.waitForTimeout(100000);
    await  page.getByPlaceholder('First Name').fill("leele");
    await page.getByPlaceholder('Middle Name').fill("devi");
    await page.locator(("//input[@class='oxd-input oxd-input--active']")[1]).fill("123");
})
