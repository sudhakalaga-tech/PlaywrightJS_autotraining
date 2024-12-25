//const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test ('Locators',async({page}) =>{

    await page.goto("https://www.demoblaze.com/");

   //1st methd: await page.locator(id=login2).click();
//await page.locator("loc").action()
//await page.action(locator)
//2ndmethd:   
//await page.click("id=login2");
  //3rd methd:  let loginlink= 'id=login2';
//await page.locator(loginlink).click();
/*
await page.locator("//input[@id='loginusername']").fill("sudha@gmail.com");
await page.locator("//input[@id='loginpassword']").fill("asdgef");
await page.locator("//button[text()='Log in']").click();*/

await page.waitForTimeout(10000);

//page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

const products= await page.$$("//div[@id='tbodyid']//div//h4/a");

for(const p1 of products)
{
const product_name= await p1.textContent();
console.log(product_name);
}





}
)