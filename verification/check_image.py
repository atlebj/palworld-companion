from PIL import Image

image_path = "/tmp/file_attachments/image.png"
img = Image.open(image_path)
print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
