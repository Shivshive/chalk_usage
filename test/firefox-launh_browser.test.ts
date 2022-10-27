import {chromium, webkit,firefox} from 'playwright';
import * as playwright from 'playwright';
import { Page, Browser } from 'playwright';
declare const page : Page;

describe('launch browser test', () => {

    const timeout = 60000;

    // let browser: Browser
    // let page: Page;

    beforeEach(async () => {

        // browser = await firefox.launch({
        //     headless: false
        // });

        // const browser_context = await browser.newContext({ 
            
        //     viewport:{
        //         height:1080,
        //         width:1920
        //     },
        //     recordVideo:{
        //     dir:'./video'
           
        // }});
        // page = await browser_context.newPage();

    });

    test('test chromium', async () => {
        await page.goto("https://www.amazon.in");
        let title = await page.title();

        console.log(`Title => ${title}`)
        await page.screenshot({
            path:"images/firefox.png",
            fullPage: true
        })
        expect(title).toEqual("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    });

    // afterAll(async () => {
    //     await browser.close();
    // });
});