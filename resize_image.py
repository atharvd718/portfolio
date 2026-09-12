import os
from PIL import Image

src_path = r"C:\Users\Atharv\Pictures\Screenshots\Screenshot 2026-09-11 003110.png"
dest_dir = r"c:\Users\Atharv\Downloads\my projects and github repos\PortfolioWebsite-main\public\images\projects"
dest_path = os.path.join(dest_dir, "medisense-how-it-works.png")

os.makedirs(dest_dir, exist_ok=True)

with Image.open(src_path) as img:
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    width, height = img.size
    if width > 1600:
        new_width = 1600
        new_height = int((new_width / width) * height)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    img.save(dest_path, "PNG", optimize=True)
print("Image resized and saved to", dest_path)
