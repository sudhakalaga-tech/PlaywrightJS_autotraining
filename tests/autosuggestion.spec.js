import {test,expect} from '@playwright/test'
test ('autosuggestion',async({page}) =>{
    await page.goto("https://www.redbus.in/");
    await page.locator('#src').fill('hyderabad');
    await page.waitForSelector("//li[contains(@class,'iwsKbI')]/div/text[1]");
const cityoptions= await page.$$("//li[contains(@class,'iwsKbI')]/div/text[1]");
    for(let i of cityoptions){
        const value= await i.textContent();
      //  console.log(value);
            if(value.includes('Airport')){
                await i.click();
                break;

            }
    }

    await page.waitForTimeout(3000);
    //date picker

    await page.locator("//div[contains(@class,'kAzzGY')]").click();
    await page.locator("//div[contains(@class,'kAzzGY')]//text[2]").fill('21 Oct');
    await page.locator("//div[contains(@class,'kAzzGY')]//text[3]").fill('2024');
    //await page.locator()

    await page.waitForTimeout(3000);
})
