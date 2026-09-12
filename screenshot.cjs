const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // scroll down gradually to trigger FadeInSection
  for(let i=0; i<10; i++) {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(200);
  }
  
  const element = page.locator('h3:text-is("MediSense AI")').locator('..').locator('..').locator('..');
  
  // Wait for the element to be visible and stable
  await element.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  
  await element.screenshot({ path: 'medisense-card-screenshot.png' });
  await browser.close();
  console.log("Screenshot saved to medisense-card-screenshot.png");
})();
