from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        # Go to Paldeck page
        page.goto("http://localhost:3000/pals")
        page.wait_for_timeout(2000)

        # Take screenshot of the whole page initially
        page.screenshot(path="/home/jules/verification/paldeck.png", full_page=True)

        browser.close()

verify()
