import requests
import os
from pdf2image import convert_from_path

def download_google_slide_as_pdf(presentation_id: str, output_filename: str = "slide.pdf"):
    """
    Downloads a Google Slide as a PDF.
    :param presentation_id: The ID of the Google Slide (from the URL).
    :param output_filename: The filename to save the PDF as.
    """
    url = f"https://docs.google.com/presentation/d/{presentation_id}/export/pdf"
    response = requests.get(url)
    
    if response.status_code == 200:
        with open(output_filename, "wb") as file:
            file.write(response.content)
        print(f"Slide deck downloaded successfully and saved as {output_filename}")
    else:
        raise Exception(f"Failed to download PDF. Status code: {response.status_code}")

def convert_pdf_to_png(pdf_filename: str, output_folder: str = "slides_images"):
    """
    Converts a PDF file into high-quality PNG images.
    :param pdf_filename: The PDF file to convert.
    :param output_folder: Folder to save PNG images.
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    images = convert_from_path(pdf_filename, dpi=300)
    for i, image in enumerate(images):
        image_path = os.path.join(output_folder, f"slide_{i+1}.png")
        image.save(image_path, "PNG")
        print(f"Saved: {image_path}")

if __name__ == "__main__":
    PRESENTATION_ID = "15yZ4-PMj1de5b7KAWQ6S9FX1TOmXmzilIy8JTiPnY1A"
    PDF_FILE = "google_slide.pdf"
    OUTPUT_FOLDER = "slides_images"
    
    try:
        download_google_slide_as_pdf(PRESENTATION_ID, PDF_FILE)
        convert_pdf_to_png(PDF_FILE, OUTPUT_FOLDER)
    except Exception as e:
        print(f"Error: {e}")