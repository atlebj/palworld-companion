from playwright.sync_api import sync_playwright

def verify_patch_notes():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to patch notes...")
            page.goto("http://localhost:3000/patch-notes")
            page.wait_for_selector("h1:has-text('Patch Notes')")

            # Check for the specific patch version headers
            print("Checking for patch headers...")
            page.wait_for_selector("h2:has-text('v0.3.1')")

            # Verify that the patch containers are NOT links
            # The h2 is inside a div. That div is inside a div with class 'block group'.
            # Previously this 'block group' div was an 'a' tag. Now it should be a 'div'.

            # Get the element containing "v0.3.1"
            header = page.locator("h2:has-text('v0.3.1')")
            # The parent of the header is the content container
            # The parent of that is the main container for the item
            item_container = header.locator("xpath=../..")

            tag_name = item_container.evaluate("el => el.tagName")
            print(f"Item container tag name: {tag_name}")

            # More robust check: check if the parent of the styling div is an anchor
            # The styling div has classes "bg-slate-800 border-l-4..."
            # Its parent used to be the 'a' tag.

            styling_div = page.locator("div.bg-slate-800.border-l-4").first
            parent_tag = styling_div.locator("xpath=..").evaluate("el => el.tagName")
            print(f"Parent of styling div tag: {parent_tag}")

            if parent_tag.lower() == 'a':
                print("FAILURE: The patch item is still a link!")
            else:
                print("SUCCESS: The patch item is NOT a link.")

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
            page.screenshot(path="verification/patch_notes_verification.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_patch_notes()
