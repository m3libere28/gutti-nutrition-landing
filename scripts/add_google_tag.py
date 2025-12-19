
import os

TAG = """
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5KPBWJVEY0"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5KPBWJVEY0');
    </script>
"""

files = [
    "blog-bloating.html",
    "blog-fertility.html",
    "blog-metabolism.html",
    "blog-mom-burnout.html",
    "blog-pediatric.html",
    "blog-sibo.html",
    "blog-template.html",
    "check.html",
    "check_status.html",
    "confirmation.html",
    "gut-health.html",
    "index.html",
    "maternity-care.html",
    "quiz.html",
    "raising-confident-eaters.html",
    "resources.html",
    "weight-management.html",
    "wellness-coaching.html"
]

base_dir = os.getcwd()

for fname in files:
    path = os.path.join(base_dir, fname)
    if not os.path.exists(path):
        print(f"Skipping {fname} (Not found)")
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "G-5KPBWJVEY0" in content:
        print(f"Skipping {fname} (Tag already present)")
        continue
    
    # Insert after <head>
    # Try different variations of head tag
    if "<head>" in content:
        new_content = content.replace("<head>", f"<head>{TAG}", 1)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {fname}")
    else:
        print(f"Warning: Could not find <head> in {fname}")
