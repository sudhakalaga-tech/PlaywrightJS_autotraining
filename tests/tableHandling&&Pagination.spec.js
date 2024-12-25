import {test,expect} from '@playwright/test'
test ('WebTable Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");

const table= await page.locator('#productTable');
const rows= await table.locator('tbody tr');
var rowcount= await rows.count();

//const colomns = await table.locator('tbody tr td');
//var colomnscount= colomns.count();

console.log("rows are: " +rowcount)
expect(await rows.count()).toBe(5);
//column count hw
//1stmtd
const matchingrow= rows.filter({has:page.locator('td'), hasText:'Tablet '});
await matchingrow.locator('input').check();
//using fun

await selectName(rows, page,'Tablet');
await selectName(rows, page,'Smartwatch');


await page.waitForTimeout(5000);

//2nd way of fun

async function selectName(rows,page,name) {
    const matchingrow= rows.filter({
        has:page.locator('td'),
         hasText: name});
await matchingrow.locator('input').check();

    
}})

test ('Pagination',async({page}) =>{

  await page.goto("https://testautomationpractice.blogspot.com/");
    const table= await page.locator('#productTable');
    const rows= await table.locator('tbody tr');
    
//read data from all pages
    const pageslist= await page.$$("//ul[@class='pagination']//li//a");
    await page.waitForTimeout(5000);
//const a= await pageslist.count();
    //console.log('pagelist : ', await pageslist.count());
    for(let p=0;p< await pageslist.count();p++)
    {
    if(p>0){
    await pageslist.nth(p).click();
    console.log(+pageslist.nth(p));
    await page.waitForTimeout(5000)
    }

    for (let i=0;i<rowcount;i++){
        const rowval=await rows.nth(i);
        console.log("nth value" +rowval);
        const tds=await rowval.locator('td');
        for(let j=0;j< await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent()) 
        }
    }
}
})