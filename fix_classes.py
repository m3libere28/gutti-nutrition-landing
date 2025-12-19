import os
import re

def clean_classes(match):
    # Extract the class string
    full_str = match.group(0) # class="..."
    class_content = match.group(1) # content inside quotes
    
    # Split into words
    classes = class_content.split()
    
    # Process classes
    cleaned_classes = set()
    has_btn = False
    
    for cls in classes:
        # Fix specific corruptions
        if "btn-liquid-liquid" in cls:
            # Handle combinations like btn-liquid-liquid-pulse
            parts = cls.replace("btn-liquid-liquid", "btn-liquid").split("-")
            # This is complex, easier to just map known bads
            if cls == "btn-liquid-liquid":
                cleaned_classes.add("btn-liquid")
            elif cls == "btn-liquid-liquid-pulse":
                cleaned_classes.add("btn-liquid")
                cleaned_classes.add("btn-pulse")
            elif cls == "btn-liquid-liquid-primary":
                 cleaned_classes.add("btn-liquid")
                 cleaned_classes.add("btn-primary")
            else:
                 # Fallback: remove double liquid
                 fixed = cls.replace("btn-liquid-liquid", "btn-liquid")
                 cleaned_classes.add(fixed)
        else:
            cleaned_classes.add(cls)
            
        if "btn" == cls:
            has_btn = True
            
    # Ensure mandatory classes
    if has_btn:
        cleaned_classes.add("btn")
        cleaned_classes.add("btn-liquid")
        
    # Reassemble order can be arbitrary, but let's try to keep btn first
    sorted_classes = sorted(list(cleaned_classes), key=lambda x: 0 if x == 'btn' else 1 if x.startswith('btn-') else 2)
    
    return f'class="{" ".join(sorted_classes)}"'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find class attributes
    # Assumes double quotes
    new_content = re.sub(r'class="([^"]*)"', clean_classes, content)
    
    if new_content != content:
        print(f"Fixing {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

# Scan directory
for filename in os.listdir('.'):
    if filename.endswith(".html"):
        process_file(filename)
