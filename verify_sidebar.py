from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create a large viewport to ensure sidebar is visible (md breakpoint is usually 768px)
        context = browser.new_context(viewport={'width': 1280, 'height': 1024})
        page = context.new_page()

        try:
            # Navigate to the home page
            print("Navigating to http://localhost:3000/")
            page.goto("http://localhost:3000/")

            # Wait for the sidebar to load (it contains nav items)
            print("Waiting for sidebar...")
            page.wait_for_selector("aside")

            # Screenshot the sidebar area
            print("Taking screenshot of sidebar...")
            # We can capture just the sidebar if we want, or the whole page
            # Let's try to capture the sidebar specifically if possible, or just the left side
            sidebar = page.locator("aside")
            sidebar.screenshot(path="verification_sidebar.png")
            print("Sidebar screenshot saved to verification_sidebar.png")

            # Now let's try to trigger a hover state
            print("Hovering over 'Getting Started' link...")
            link = page.get_by_text("Getting Started")
            link.hover()

            # Take another screenshot to see the hover effect/tooltip
            print("Taking screenshot with hover...")
            page.screenshot(path="verification_sidebar_hover.png")
            print("Hover screenshot saved to verification_sidebar_hover.png")

            # Test collapsing a section
            print("Collapsing 'Start Here' section...")
            # Finding the button that controls "Start Here"
            # It should have text "Start Here" and be a button
            btn = page.locator("button").filter(has_text="Start Here")
            btn.click()

            # Wait a moment for animation/react state
            page.wait_for_timeout(500)

            print("Taking screenshot after collapse...")
            page.screenshot(path="verification_sidebar_collapsed.png")
            print("Collapse screenshot saved to verification_sidebar_collapsed.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
