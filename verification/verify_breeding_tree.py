from playwright.sync_api import sync_playwright

def verify_breeding_tree():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to breeding calculator...")
            page.goto("http://localhost:3000/calculators/breeding")

            # The page might take a moment to hydrate
            page.wait_for_selector("h1:has-text('Breeding Pathfinder')")

            # Add Lamball to temp pals
            # First select element is the "Add Species..." one
            print("Adding Lamball...")
            page.locator("select").first.select_option("lamball")

            # Add Cattiva to temp pals
            print("Adding Cattiva...")
            page.locator("select").first.select_option("cattiva")

            # Set Target to Cremis (Lamball + Cattiva -> Cremis)
            print("Setting target to Cremis...")
            page.get_by_label("Target Pal").select_option("cremis")

            # Click Find Path
            print("Clicking Find Breeding Path...")
            page.click("button:has-text('Find Breeding Path')")

            # Wait for results
            # The tree view should appear
            print("Waiting for results...")
            page.wait_for_selector("text=Breeding Chain")

            # Check for Cremis node
            print("Checking for Cremis node...")
            # Wait for a bit for animation
            page.wait_for_timeout(1000)

            if page.locator("div:has-text('Cremis')").count() > 0:
                print("SUCCESS: Cremis node found.")
            else:
                print("FAILURE: Cremis node NOT found.")

            # Check if Tree View is active
            print("Checking View Mode...")
            tree_btn = page.locator("button[title='Visual Tree Map']")
            # Check class for active state (bg-slate-700)
            classes = tree_btn.get_attribute("class")
            if classes and "bg-slate-700" in classes:
                 print("SUCCESS: Tree View is active by default.")
            else:
                 print("FAILURE: Tree View is NOT active. Classes: " + str(classes))

            # Check for parents
            # Lamball and Cattiva should be visible
            if page.locator("text=Lamball").count() > 0 and page.locator("text=Cattiva").count() > 0:
                print("SUCCESS: Parents are visible.")
            else:
                print("FAILURE: Parents are missing.")

            print("Taking screenshot...")
            page.screenshot(path="verification/breeding_tree.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/breeding_tree_error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_breeding_tree()
