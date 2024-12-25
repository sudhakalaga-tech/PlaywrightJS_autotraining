import {test, expect, chromium } from '@playwright/test';
//test.describe('grouping test',()=> {
    test('skip this test', async ({ page, browserName }) => {
        test.skip(browserName === 'firefox', 'Still working on it');
      });



test('group_tests', async({page})=>{
    console.log("frst test");
});

test('grptest2', async({page})=>{
    console.log("secnd test");
    })


//test.describe('group2',()=>{
    test('grptest3', async({page})=>{
        console.log("third test");
        })