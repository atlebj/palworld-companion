from playwright.sync_api import sync_playwright

def verify_paldeck():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()
        page = context.new_page()

        # 1. Desktop Check
        print("Starting Desktop Verification...")
        page.set_viewport_size({'width': 1280, 'height': 800})

        # Go to Paldeck
        print("Navigating to /pals...")
        page.goto("http://localhost:3000/pals")
        page.wait_for_selector("h1:text('Paldeck')")

        # Check Grid View
        count = page.locator("a[href^='/pals/']").count()
        print(f"Found {count} Pal cards.")

        # Toggle Compact View
        print("Toggling Compact View...")
        page.click("button[title='Compact List']")
        page.wait_for_timeout(500)

        # Search
        print("Searching for 'Anubis'...")
        page.fill("input[placeholder='Filter Pals...']", "Anubis")
        page.wait_for_timeout(500)

        # Click Anubis
        # In compact view, it's a link inside a table cell
        page.click("text=Anubis")

        # Verify Detail Page
        print("Verifying Anubis Detail Page...")
        page.wait_for_selector("h1:text('Anubis')")

        # Take screenshot of detail page
        page.screenshot(path="verification/pal_detail.png")
        print("Screenshot saved: verification/pal_detail.png")

        page.close()
        context.close()
        browser.close()

if __name__ == "__main__":
    verify_paldeck()
