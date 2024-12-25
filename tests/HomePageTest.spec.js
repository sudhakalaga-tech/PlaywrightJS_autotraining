
//need to bring test modules


const {test,expect} = require('@playwright/test')

//write under test block, anonymous fun needed, inside page fixture- mandatory and using page only we can acess all methods
//js z async pgm - steps will be independent- so inorder to continue step by step use promise(await)

test ('HomePage',async({page}) =>{

 await page.goto("https://www.demoblaze.com/");
 let pageTitle = await page.title();

 console.log("title is : " +pageTitle);
 await expect(page).toHaveTitle('STORE');
 await expect(page).toHaveURL("https://www.demoblaze.com/")
let pageurl = page.url();
console.log(pageurl);

 await page.close();

}
)
