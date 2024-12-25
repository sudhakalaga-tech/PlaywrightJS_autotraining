import {test, expect, chromium } from '@playwright/test';

test('tests1@reg', async({page})=>{
    console.log("frst test");
});

test('test2@sanity', async({page})=>{
    console.log("secnd test");
    })

test('test3@reg', async({page})=>{
        console.log("third test");
        })

test('test4@sanity@reg', async({page})=>{
            console.log("fourth test");
            })

test('test5@sanity', async({page})=>{
                console.log("secnd test");
                })
            
                