import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    const img = await page.getByAltText('company-branding')
    await expect(img).toBeVisible();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(10000);
    //const panel= await page.locator("//aside[@class='oxd-sidepanel']").isVisible();
    const Recruitment= await page.locator("//li//span[text()='Recruitment']");
    //const B= Recruitment.isVisible();
    //console.log("Recruitment IS VISIBLE :"+Recruitment);
    Recruitment.click(); 
    await page.waitForTimeout(5000);

    //const firststbox = await page.locator("//div[@role='table']//input[@type='checkbox' and @value=1]");
    //const a= await page.locator("//div[@role='table']//input[@type='checkbox' and @value=1]").isChecked();
    //console.log("checked: " +a);
   /* if(a == true){
        await page.locator("//div[@role='table']//input[@type='checkbox' and @value=1]").uncheck();
        console.log("its unchecking")
    }else */
    await page.locator("//div[@role='table']//input[@type='checkbox' and @value=1]").click();
    console.log("checking---")
    await page.waitForTimeout(5000);
})
