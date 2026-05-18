from PIL import Image
import os

def slice_icons():
    img_path = "/tmp/file_attachments/image.png"
    out_dir = "public/images/suitability"
    os.makedirs(out_dir, exist_ok=True)

    img = Image.open(img_path)
    width, height = img.size

    # Grid: 3 rows x 4 columns
    # Approximate dimensions based on visual inspection of the grid
    # 1024 / 4 = 256 per column
    # 559 / 3 = 186 per row

    # Let's verify by cropping the center of each cell
    # Row 1: Kindling, Planting, Handiwork, Lumbering
    # Row 2: Medicine, Transporting, Watering, Generation
    # Row 3: Mining, Gathering, Farming, Oil Extraction

    names = [
        "kindling", "planting", "handiwork", "lumbering",
        "medicine_production", "transporting", "watering", "generating_electricity",
        "mining", "gathering", "farming", "oil_extraction"
    ]

    # Adjust offsets slightly to center on the circular icon
    # The image has text below each icon, we want to crop just the icon if possible.
    # The icons look roughly square/circular.
    # Let's try to extract a square region from the top part of each cell.

    cols = 4
    rows = 3

    cell_w = width // cols
    cell_h = height // rows

    # Icon seems to occupy the top ~75% of the cell based on visual estimation
    # Let's take a square crop centered horizontally in the cell

    icon_size = 180 # Heuristic, slightly smaller than cell height to avoid text

    for i, name in enumerate(names):
        row = i // cols
        col = i % cols

        left = col * cell_w
        top = row * cell_h

        # Center crop within the cell area, biased towards top to avoid text
        # Let's actually just crop the circle.
        # Center of cell
        cx = left + cell_w // 2
        cy = top + (cell_h // 2) - 20 # Shift up slightly to avoid text label

        # Crop box
        box = (
            cx - icon_size // 2,
            cy - icon_size // 2,
            cx + icon_size // 2,
            cy + icon_size // 2
        )

        # Ensure we don't go out of bounds
        box = (
            max(0, box[0]),
            max(0, box[1]),
            min(width, box[2]),
            min(height, box[3])
        )

        icon = img.crop(box)

        # Save as PNG
        out_path = os.path.join(out_dir, f"{name}.png")
        icon.save(out_path)
        print(f"Saved {out_path}")

if __name__ == "__main__":
    slice_icons()
