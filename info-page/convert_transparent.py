from PIL import Image
import sys
import os

def convert_to_transparent(input_path):
    print(f"Processing: {input_path}")
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return

    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check for Checkerboard Colors (White/Gray/Light Gray)
            # Standard checkerboard is often white and gray (~204 or 0xCC)
            # Filter out reasonable range of light grays to whites
            r, g, b, a = item
            
            # If plain white or very light gray
            if r > 200 and g > 200 and b > 200:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(input_path, "PNG")
        print(f"Successfully converted {input_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        convert_to_transparent(sys.argv[1])
    else:
        print("Please provide an image path")
