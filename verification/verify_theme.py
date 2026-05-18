
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the home page
        await page.goto("http://localhost:3000")

        # Wait for the page to load
        await page.wait_for_selector("h1")

        # Get computed styles for body background
        bg_color = await page.evaluate("getComputedStyle(document.body).backgroundColor")
        print(f"Body Background: {bg_color}")

        # Get computed styles for a primary button
        btn = page.locator(".btn-primary").first
        btn_bg = await btn.evaluate("el => getComputedStyle(el).backgroundColor")
        print(f"Primary Button Background: {btn_bg}")

        # Screenshot Home
        await page.screenshot(path="verification/theme_home.png", full_page=True)

        # Navigate to Breeding Calculator
        await page.goto("http://localhost:3000/calculators/breeding")
        await page.wait_for_selector("h1")

        # Screenshot Breeding
        await page.screenshot(path="verification/theme_breeding.png", full_page=True)

        await browser.close()

asyncio.run(run())
