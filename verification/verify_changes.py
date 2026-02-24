from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Verify FAQ Page
        print("Navigating to FAQ page...")
        page.goto("http://localhost:3000/faq")
        page.wait_for_selector("h1:text('Frequently Asked Questions')")

        # Expand a detail to show content
        # Use a partial match to avoid quote issues
        page.click("text=Why does it say")
        page.wait_for_timeout(500)

        page.screenshot(path="verification/faq_page.png")
        print("FAQ page screenshot saved to verification/faq_page.png")

        # 2. Verify Breeding Calculator Tree View
        print("Navigating to Breeding Calculator...")
        page.goto("http://localhost:3000/calculators/breeding")

        # Wait for selects to be populated
        page.wait_for_selector("select")

        selects = page.locator("select")

        # Add Lamball (using value)
        print("Adding Lamball...")
        selects.first.select_option(value="lamball")

        # Add Anubis (using value)
        print("Adding Anubis...")
        selects.first.select_option(value="anubis")

        # Target Cattiva (second select)
        print("Targeting Cattiva...")
        selects.nth(1).select_option(value="cattiva")

        # Click Find Breeding Path
        print("Finding path...")
        page.click("button:has-text('Find Breeding Path')")

        # Wait for results
        page.wait_for_selector("h2:text('Breeding Chain')")

        # Switch to Tree View using title attribute
        print("Switching to Tree View...")
        page.click("button[title='Tree View']")

        page.wait_for_timeout(1000) # Wait for re-render

        page.screenshot(path="verification/breeding_tree.png")
        print("Breeding tree screenshot saved to verification/breeding_tree.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
