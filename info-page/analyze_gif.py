from PIL import Image
from collections import Counter

def analyze_gif(path):
    try:
        img = Image.open(path)
        print(f"Format: {img.format}, Mode: {img.mode}, Animated: {getattr(img, 'is_animated', False)}")
        
        if img.mode == 'P':
            palette = img.getpalette()
            # Group into RGB triplets
            colors = [tuple(palette[i:i+3]) for i in range(0, len(palette), 3)]
            # Count pixel usage in first frame
            # This is slow for large images, so just check the palette directly
            print("First 10 Palette Colors:")
            for i, color in enumerate(colors[:10]):
                print(f"{i}: {color}")
                
            # Check for common checkerboard colors
            white = (255, 255, 255)
            grey_light = (204, 204, 204) # Common checker
            grey_dark = (192, 192, 192)  # Another common one
            
            suspects = []
            for i, color in enumerate(colors):
                if color == white: suspects.append(f"White at {i}")
                if color[0] == color[1] == color[2] and 150 < color[0] < 250:
                    suspects.append(f"Grey {color} at {i}")
            
            print("Suspect Checkerboard Colors found in palette:")
            print(suspects)
            
        else:
            print("Image is not in Palette mode (P).")

    except Exception as e:
        print(f"Error: {e}")

analyze_gif('assets/guttie_rope_animated.gif')
