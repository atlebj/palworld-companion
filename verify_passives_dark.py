from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create a context with dark color scheme preference
        context = browser.new_context(color_scheme='dark')
        page = context.new_page()

        try:
            # Navigate to the passives page
            print("Navigating to http://localhost:3000/pals/passives (dark mode)")
            page.goto("http://localhost:3000/pals/passives")

            # Wait for the content to load
            print("Waiting for page to load...")
            page.wait_for_selector("h1:has-text('Passive Skills')")

            # Take a screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification_passives_dark.png", full_page=True)
            print("Screenshot saved to verification_passives_dark.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
