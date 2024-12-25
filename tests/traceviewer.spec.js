import {test,expect} from '@playwright/test'
test('trace Viewer',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(10000);
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(3000);


})
