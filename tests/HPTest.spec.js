const {test,expect} = require('@playwright/test')

    test ('HomePageTitle is',async({page}) =>{

        await page.goto("https://www.demoblaze.com/");
        let pagetitl= page.title();
        await expect(page).toHaveTitle('STORE')
        console.log("page title is valid and it is" +pagetitl);

        await page.close();


}
)