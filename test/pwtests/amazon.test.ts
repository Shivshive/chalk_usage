import { test, expect, Page } from '@playwright/test';


test('amazon-macbook search test', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('macbook pro');
    await page.getByRole('button', { name: 'Go' }).click();

    const text = "2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight";

    const [page2] = await openWindowByTextClick(text,page);
    await page2.waitForFunction("document.readyState == 'complete'");

    await page2.screenshot({
        path:'./Images/amazon-test-ts.png',
        fullPage:true
        
    });

    await expect(page2.locator('span:has-text("2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight")')).toBeTruthy();

});

async function openWindowByTextClick(selector:string, page:Page){
    return Promise.all([
        page.waitForEvent('popup'),
        page.getByText(selector).first().click()
    ])

}