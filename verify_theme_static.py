import re

def verify_theme_globals():
    try:
        with open("src/app/globals.css", "r") as f:
            content = f.read()

        required_colors = {
            "--color-brand-bg-main": "#0f1115",
            "--color-brand-bg-card": "#1a1f2b",
            "--color-brand-bg-sidebar": "#141824",
            "--color-brand-primary": "#5B7CFF",
            "--color-brand-primary-hover": "#7C9BFF",
            "--color-brand-text-primary": "#E6E9F2",
            "--color-brand-text-secondary": "#AAB1C3",
            "--color-brand-border": "#22283a"
        }

        missing = []
        for var, val in required_colors.items():
            if f"{var}: {val}" not in content:
                missing.append(f"{var}: {val}")

        if missing:
            print("❌ CSS Verification Failed. Missing or incorrect variables:")
            for m in missing:
                print(f"  - {m}")
            return False

        print("✅ CSS Verification Passed: All theme variables present.")
        return True
    except Exception as e:
        print(f"❌ Error verifying CSS: {e}")
        return False

def verify_sidebar():
    try:
        with open("src/components/Sidebar.tsx", "r") as f:
            content = f.read()

        # Check for the specific active state background color
        if "bg-[rgba(91,124,255,0.1)]" not in content:
             print("❌ Sidebar Verification Failed: Missing active state background 'bg-[rgba(91,124,255,0.1)]'")
             return False

        print("✅ Sidebar Verification Passed: Active state styling found.")
        return True
    except Exception as e:
        print(f"❌ Error verifying Sidebar: {e}")
        return False

if __name__ == "__main__":
    g = verify_theme_globals()
    s = verify_sidebar()
    if g and s:
        print("🎉 Theme verification successful.")
    else:
        print("⚠️ Theme verification found issues.")
