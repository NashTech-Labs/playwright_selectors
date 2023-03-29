const { test, expect, chromium } =require('@playwright/test');

test('Selectors in Playwright', async () => {
    
    const browser=await chromium.launch({headless:false});

    const page= await browser.newPage()

    // URL of the website

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Css Selector

   page.locator("input[id='username']").type('student')

   // Xpath Selector

   page.locator("//input[@name='password']").type('Password123')

   // Text Selector

    page.locator('text=Submit').click

   await page.waitForTimeout(5000)

   // Close window

   await browser.close

   });
  