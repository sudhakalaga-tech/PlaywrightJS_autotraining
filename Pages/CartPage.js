exports.CartPage = 
class CartPage{

    constructor(page){
        this.page = page;
    this.cartpagelink= "//a[text()='Cart']";
    this.adedprdnames= "//tbody[@id='tbodyid']//td[2]";

    }

async GoToCartPage(){
 await this.page.locator(this.cartpagelink).click();
}

async validateaddedproduct(prdname){
const prodincart = await this.page.$$(this.adedprdnames);
    for(const product of prodincart){
    console.log(await product.textContent())
    if(prdname == await product.textContent()){
        return true;
        break;
    }
    }

}

}