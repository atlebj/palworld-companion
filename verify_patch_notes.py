from playwright.sync_api import sync_playwright, expect

def verify_patch_notes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use dark color scheme to verify contrast
        context = browser.new_context(color_scheme='dark')
        page = context.new_page()

        print("Navigating to patch notes page...")
        try:
            # Try port 3000 first
            page.goto("http://localhost:3000/patch-notes", timeout=10000)
            page.wait_for_load_state("networkidle")
            print("Successfully connected to port 3000")
        except Exception as e:
            print(f"Error navigating to port 3000: {e}")
            try:
                # Fallback to 3001 just in case
                page.goto("http://localhost:3001/patch-notes", timeout=10000)
                page.wait_for_load_state("networkidle")
                print("Successfully connected to port 3001")
            except Exception as e2:
                print(f"Error navigating to port 3001: {e2}")
                browser.close()
                return

        print("Checking for recent patches...")
        # Check for v0.7.2
        try:
            # Check for title
            expect(page.get_by_role("heading", name="Patch Notes & Meta Analysis")).to_be_visible()
            print("Page Title Found!")

            # Check for v0.7.2 text
            expect(page.get_by_text("v0.7.2 Meta Shift: Melee Weapon Rarity & Fixes")).to_be_visible()
            print("v0.7.2 Found!")

            # Check for Archived button
            expect(page.get_by_role("button", name="Older patch analyses archived")).to_be_visible()
            print("Archived button Found!")

        except Exception as e:
            print(f"Element check failed: {e}")

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="patch_notes_verification.png", full_page=True)
        print("Screenshot saved to patch_notes_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_patch_notes()
