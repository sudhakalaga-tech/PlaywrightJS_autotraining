import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://practice.expandtesting.com/dropdown");
    await page.waitForTimeout(5000);
   // await page.locator("//select[@id='country']").selectOption('Bhutan');
   //await page.locator("//select[@id='country']").selectOption({label:'Bhutan'});
   await page.locator("//select[@id='country']").selectOption({Value:'BE'});
 await page.waitForTimeout(5000)


})