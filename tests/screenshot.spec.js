import {test, expect, chromium } from '@playwright/test';
test.only('page screenshot', async({ page })=>{
await page.goto('https://demo.opencart.com/')
//await page.screenshot({ path: 'screenshot.png'});
await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'});
});


test('full page screenshot', async({page})=>{
    console.log("frst test");
});


test('element screenshot', async({page})=>{
    console.log("frst test");
});
