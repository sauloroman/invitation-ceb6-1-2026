import fitz  # PyMuPDF
import os

pdf_path = r"src/assets/mesas.pdf"
output_dir = r"src/assets/images"
output_path = os.path.join(output_dir, "mesas.png")

# Make sure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Open PDF
doc = fitz.open(pdf_path)
print(f"Number of pages: {len(doc)}")

# Load first page
page = doc.load_page(0)

# Render page to Pixmap at high quality (300 DPI)
# Default PDF resolution is 72 DPI. 300 DPI represents a zoom of 300 / 72 ≈ 4.167
zoom = 300 / 72
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)

# Save the rendered page
pix.save(output_path)
print(f"Saved rendered page to {output_path}")

# Extract embedded images
image_list = page.get_images(full=True)
print(f"Number of embedded images on page: {len(image_list)}")
for img_idx, img in enumerate(image_list):
    xref = img[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    raw_img_path = os.path.join(output_dir, f"mesas_raw_{img_idx}.{image_ext}")
    with open(raw_img_path, "wb") as f:
        f.write(image_bytes)
    print(f"Saved raw image {img_idx} to {raw_img_path}")
