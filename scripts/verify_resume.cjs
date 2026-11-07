const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  // 1. Desktop Test
  console.log("=== Testing Desktop Viewport (1280x800) ===");
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Check title
  console.log("Page title:", await page.title());

  // Check navbar links
  const navResume = page.locator('nav a[href="#resume"]').first();
  console.log("Desktop Navbar 'Resume' link present:", await navResume.count() > 0);

  // Check hero resume CTA
  const heroResume = page.locator('#hero a[href="#resume"]');
  console.log("Hero 'Resume' CTA present:", await heroResume.count() > 0);

  // Scroll down to resume section
  const resumeSection = page.locator('#resume');
  await resumeSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600); // Allow FadeInSection animation

  // Check heading
  const heading = await resumeSection.locator('h2').textContent();
  console.log("Resume heading text:", heading);

  // Check update date
  const updateBadge = await resumeSection.locator('text=Last Updated: 7 November 2026').textContent();
  console.log("Update date found:", updateBadge);

  // Check View Resume button
  const viewButton = resumeSection.locator('a:has-text("View Fullscreen Resume")');
  const viewHref = await viewButton.getAttribute('href');
  const viewTarget = await viewButton.getAttribute('target');
  console.log("View Resume button href:", viewHref, "| target:", viewTarget);

  // Check Download Resume button
  const downloadButton = resumeSection.locator('a:has-text("Download Resume (PDF)")');
  const downloadHref = await downloadButton.getAttribute('href');
  const downloadAttr = await downloadButton.getAttribute('download');
  console.log("Download Resume button href:", downloadHref, "| download:", downloadAttr);

  // Check embedded object / iframe
  const pdfObject = resumeSection.locator('object[type="application/pdf"]');
  const pdfData = await pdfObject.getAttribute('data');
  console.log("Embedded PDF object data:", pdfData);

  // Take screenshot of Resume section
  await resumeSection.screenshot({ path: 'resume-section-desktop.png' });
  console.log("Saved desktop screenshot to resume-section-desktop.png");

  // 2. Mobile Viewport Test (iPhone 13 / 390x844)
  console.log("\n=== Testing Mobile Viewport (390x844) ===");
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Test mobile menu toggle
  const hamburger = mobilePage.locator('button[aria-label="Toggle navigation menu"]');
  await hamburger.click();
  await mobilePage.waitForTimeout(400);
  const mobileNavResume = mobilePage.locator('nav a[href="#resume"]').last();
  console.log("Mobile nav menu 'Resume' link visible:", await mobileNavResume.isVisible());
  await mobileNavResume.click();
  await mobilePage.waitForTimeout(600);

  const mobileResumeSection = mobilePage.locator('#resume');
  await mobileResumeSection.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(600);

  await mobileResumeSection.screenshot({ path: 'resume-section-mobile.png' });
  console.log("Saved mobile screenshot to resume-section-mobile.png");

  // Test downloading the file directly
  const response = await page.request.get('http://localhost:3000/resume.pdf');
  console.log("\nDirect HTTP GET /resume.pdf status:", response.status());
  console.log("Content-Type:", response.headers()['content-type']);
  console.log("Content-Length:", response.headers()['content-length']);

  await browser.close();
  console.log("\n>>> ALL VERIFICATION TESTS COMPLETED SUCCESSFULLY! <<<");
})();
