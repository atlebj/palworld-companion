from playwright.sync_api import sync_playwright

def verify_patch_notes():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to patch notes...")
            page.goto("http://localhost:3000/patch-notes")
            page.wait_for_selector("h1:has-text('Patch Notes')")

            # Check for absence of specific patch version headers
            print("Checking for ABSENCE of patch headers...")
            if page.locator("h2:has-text('v0.3.1')").count() > 0:
                print("FAILURE: 'v0.3.1' header found (should be gone).")
            else:
                print("SUCCESS: 'v0.3.1' header NOT found.")

            # Check that the bottom link IS a link
            print("Checking bottom link...")
            bottom_link = page.locator("a:has-text('View All Recent Patches')")
            if bottom_link.count() > 0:
                 print("SUCCESS: Bottom link exists.")
                 href = bottom_link.get_attribute("href")
                 print(f"Bottom link href: {href}")
            else:
                 print("FAILURE: Bottom link not found.")

            print("Taking screenshot...")
            page.screenshot(path="verification/patch_notes_final.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_patch_notes()
