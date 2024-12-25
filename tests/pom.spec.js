import {test,expect} from '@playwright/test';
import { Loginpage } from '../Pages/Loginpage';
import { HomePage } from '../Pages/Homepage';
import { CartPage } from '../Pages/cartpage';
//login
//home
//cart
//logout
test ('login Test',async({page}) =>{
   //declare objects and variables here 
    const login = new Loginpage(page);
    const hompage = new HomePage(page);
    const cartpage= new CartPage(page);
    const prdname="Nokia lumia 1520";

//write code
    await login.gotologinpage();
    await login.login('kvsudha2016','training@24');
    await page.waitForTimeout(4000);
    
    //homeage
    await hompage.HomepageNaviagtion();
    await page.waitForTimeout(4000);
    await hompage.addProductToCart(prdname);
    await page.waitForTimeout(3000);

    //cart
    await cartpage.GoToCartPage();
    await page.waitForTimeout(3000);
    await cartpage.validateaddedproduct(prdname);
    await page.waitForTimeout(3000);

})


test ('adding laptop Test',async({ page }) => {
    
    const laptopname ="MacBook air";
    //login    
    const login = new Loginpage(page);
    await login.gotologinpage();
       await login.login('kvsudha2016','training@24');
       await page.waitForTimeout(4000);
   //home page
       const hompage = new HomePage(page);
        await hompage.HomepageNaviagtion();
       await page.waitForTimeout(5000);
       await hompage.LaptopNavigation();
       await page.waitForTimeout(5000);
       await hompage.addProductToCart(laptopname);
       await page.waitForTimeout(5000);
   //cart page
   
       const cp = new CartPage(page);
       await cp.GoToCartPage();
       await page.waitForTimeout(4000);
       await cp.validateaddedproduct(laptopname);
       await page.waitForTimeout(4000);
       //await cp.producttotalprice();
       //await page.waitForTimeout(3000);
   
   })