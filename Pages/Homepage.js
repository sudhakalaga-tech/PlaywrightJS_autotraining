exports.HomePage=
class HomePage {

    constructor(page){
        this.page = page;
        this.homelink="//a[text()='Home ']";
        this.laptlink ="//a[text()='Laptops']"
        this.productList="//div[@class='card-block']//h4/a";
        this.addtocartbtn= "//a[text()='Add to cart']";

    }

    async HomepageNaviagtion(){
    await this.page.locator(this.homelink).click();
}

async LaptopNavigation(){
    await this.page.locator(this.laptlink).click();
}

async addProductToCart(ProductName){
    const productlist = await this.page.$$(this.productList);
    for(const product of productlist){
        if(ProductName == await product.textContent()){
            await product.click();
            break;
        }
    }
    await this.page.on('dialog', async dialog =>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
    })
    await this.page.locator(this.addtocartbtn).click();

}
}

