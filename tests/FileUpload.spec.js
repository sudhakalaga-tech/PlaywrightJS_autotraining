import {test,expect} from '@playwright/test'
test ('single FileUpload',async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('files/Test cases (1).xlsx');
    await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Upload Single File' }).click();
    
    //await page.locator("//button[text()='Upload Single File']").click();
    await page.waitForTimeout(5000);
})

    test ('multiple files',async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator('#multipleFilesInput').click();
      await page.locator('#multipleFilesInput').setInputFiles('tests/files/Test cases (1).xlsx','tests/files/testcases_tranee (2).xlsx');
      await page.getByRole('button', { name: 'Upload Multiple Files'}).click();
      await page.waitForTimeout(5000);

})
