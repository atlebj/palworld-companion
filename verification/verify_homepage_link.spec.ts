import { test, expect } from '@playwright/test';

test('Verify Paldeck Link in Tools and Suitability Section', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

  // 1. Go to Home
  console.log('Navigating to home...');
  await page.goto('http://localhost:3000/');

  // 2. Click on "Paldeck" in the "Tools" section
  // The hero button says "Explore Paldeck".
  // The nav link says "Paldeck".
  // We want to verify the nav link specifically.
  const toolsSection = page.locator('div:has-text("Tools")');
  const paldeckLink = toolsSection.locator('a:has-text("Paldeck")').first();

  // Wait for it to be visible
  await paldeckLink.waitFor({ state: 'visible', timeout: 5000 });
  console.log('Found Paldeck link in Tools section.');

  await paldeckLink.click();
  await page.waitForURL('**/pals');
  console.log('Navigated to /pals');

  // 3. Click on "Lamball" (or the first pal)
  console.log('Clicking on Lamball...');
  await page.click('text=Lamball');
  await page.waitForURL('**/pals/lamball');

  // 4. Check for "Work Suitability" text
  const suitabilityHeader = page.locator('text=Work Suitability');
  await expect(suitabilityHeader).toBeVisible();

  // 5. Check for specific icons (e.g. Handiwork, Farming)
  // We check for the IMAGE, not just text.
  // The structure is: <div> <img ... alt="handiwork" ... /> </div>
  const handiworkIcon = page.locator('img[alt="handiwork"]');

  // Wait for it to be attached/visible
  await handiworkIcon.waitFor({ state: 'visible', timeout: 5000 });

  const src = await handiworkIcon.getAttribute('src');
  console.log('Handiwork icon src:', src);

  await expect(handiworkIcon).toBeVisible();
  console.log('Verified handiwork icon visibility.');
});
