import asyncio
from playwright.async_api import async_playwright
import os

async def verify_icons():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Define URLs to check (Pals with different work suitabilities)
        # Lamball has: Handiwork, Transporting, Farming
        # Cattiva has: Gathering, Mining, Handiwork, Transporting
        # Foxparks has: Kindling
        # Pengullet has: Watering, Handiwork, Cooling, Transporting

        base_url = "http://localhost:3000"

        target_pals = ["lamball", "cattiva", "pengullet", "foxparks"]

        os.makedirs("verification", exist_ok=True)

        for pal in target_pals:
            print(f"Checking {pal}...")
            try:
                await page.goto(f"{base_url}/pals/{pal}")
                await page.wait_for_selector("h1", timeout=10000) # Wait for page load

                # Take screenshot of the whole page
                await page.screenshot(path=f"verification/pal_detail_{pal}.png", full_page=True)
                print(f"Captured verification/pal_detail_{pal}.png")

            except Exception as e:
                print(f"Error checking {pal}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_icons())
