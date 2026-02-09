#!/usr/bin/env python3
"""
Remove background from image and prepare for website background
Requires: pip install rembg pillow
"""

from PIL import Image
import sys
import os

input_path = "/Users/baitjet/.openclaw/media/inbound/file_3---cb0dff1f-97b1-4ee6-aa7f-b5e3eea99146.jpg"
output_path = "/Users/baitjet/Downloads/baitjet-music/public/baitjet-jay-nobg.png"

def remove_background(input_path, output_path):
    try:
        from rembg import remove
        
        # Open image
        input_image = Image.open(input_path)
        
        # Remove background
        output_image = remove(input_image)
        
        # Save as PNG (preserves transparency)
        output_image.save(output_path)
        
        print(f"✅ Background removed: {output_path}")
        return True
        
    except ImportError:
        print("❌ rembg not installed. Run: pip install rembg")
        print("⚠️  Skipping background removal - you'll need to do this manually")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    # Try to remove background
    success = remove_background(input_path, output_path)
    
    if not success:
        # Copy original as fallback
        print("📁 Copying original image as fallback...")
        img = Image.open(input_path)
        img.save(output_path.replace('-nobg', '-original'))
        print(f"💡 You'll need to manually remove background using remove.bg or Photoshop")
