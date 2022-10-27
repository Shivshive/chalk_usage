describe('Google Test', () => {
    
    test('test google title',async () => {
        
        await page.goto('https://www.google.com');
        const title = await page.title();
        await page.screenshot({
            path:'Images/google.png',
            fullPage:true
        })
        expect(title).toEqual('Google');
    })
});