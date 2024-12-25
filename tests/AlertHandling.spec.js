import {test,expect} from '@playwright/test'
test ('Alert Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");

//alert handling-create event
page.on('dg',async dg=>{
//check msg
 expect(dg.type()).toContain('prompt');
 //expect(dg.message()).toContain('I am an alert box!');*/
 expect(dg.message()).toContain('Please enter your name:');
 expect(dg.defaultValue()).toContain('Harry Potter');
 await dg.accept('Sudhak');
//await dg.accept();
//await dg.dismiss();
})

//action that triggers alert
//await page.locator('#alertBtn').click();
//await page.locator('#confirmBtn').click();
await page.locator('#promptBtn').click();
await page.waitForTimeout(5000);


})
