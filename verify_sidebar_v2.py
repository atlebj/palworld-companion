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

            # Take a screenshot of the sidebar area
            print("Taking screenshot of sidebar...")
            # We can capture just the sidebar if we want, or the whole page
            sidebar = page.locator("aside")
            sidebar.screenshot(path="verification_sidebar.png")
            print("Sidebar screenshot saved to verification_sidebar.png")

            # Now let's try to trigger a hover state
            print("Hovering over 'Getting Started' link in sidebar...")
            # We target the sidebar first to avoid ambiguity
            # The structure is Sidebar -> nav -> li -> a -> span (text)
            # The link itself should have the href
            link = sidebar.get_by_role("link", name="Getting Started").first
            link.hover()

            # Wait a moment for the tooltip (opacity transition)
            page.wait_for_timeout(500)

            # Take another screenshot to see the hover effect/tooltip
            print("Taking screenshot with hover...")
            page.screenshot(path="verification_sidebar_hover.png")
            print("Hover screenshot saved to verification_sidebar_hover.png")

            # Test collapsing a section
            # Finding the button that controls "Start Here"
            # It should have text "Start Here" and be a button inside the sidebar
            print("Collapsing 'Start Here' section...")
            btn = sidebar.locator("button").filter(has_text="Start Here")
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
