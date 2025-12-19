import os
import re

def clean_mobile_btn(match):
    # Just force it to be clean. It doesn't need other classes usually.
    return 'class="mobile-menu-btn"'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find the mobile menu button class attribute
    # It might look like class="btn btn-liquid mobile-menu-btn"
    # We target the specific button by ID usually, but here relies on class name overlap?
    # Safer: Look for class attributes containing "mobile-menu-btn"
    
    new_content = re.sub(r'class="[^"]*mobile-menu-btn[^"]*"', clean_mobile_btn, content)
    
    if new_content != content:
        print(f"Fixing {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

# Scan directory
for filename in os.listdir('.'):
    if filename.endswith(".html"):
        process_file(filename)
