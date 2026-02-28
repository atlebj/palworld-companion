import { test, expect } from '@playwright/test';

test('Verify Work Suitability Section', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  // 1. Go to Home / Paldeck
  console.log('Navigating to home...');
  await page.goto('http://localhost:3000/pals');

  // 2. Click on "Lamball" (or the first pal)
  console.log('Clicking on Lamball...');
  await page.click('text=Lamball');
  await page.waitForURL('**/pals/lamball');

  // Take screenshot for debugging
  await page.screenshot({ path: 'verification/debug_detail.png', fullPage: true });

  // 3. Check for "Work Suitability" text
  const suitabilityHeader = page.locator('text=Work Suitability');
  await expect(suitabilityHeader).toBeVisible();

  // 4. Check for specific icons (e.g. Handiwork, Farming)
  // We look for the image with alt text corresponding to the suitability
  const handiworkIcon = page.locator('img[alt="handiwork"]');

  // Debug: Print the HTML around the suitability section
  const suitabilitySection = page.locator('div:has-text("Work Suitability")').first();
  if (await suitabilitySection.count() > 0) {
      console.log('Suitability Section HTML:', await suitabilitySection.innerHTML());
  }

  await expect(handiworkIcon).toBeVisible();
});
