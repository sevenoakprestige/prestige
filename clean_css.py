import re

css_file = "/Users/shafaat/Desktop/code/prestige/prestige/src/app/globals.css"

with open(css_file, "r") as f:
    content = f.read()

# Define the classes to remove
classes_to_remove = [
    r"\.btn-header",
    r"\.hero-secondary-btn",
    r"\.dark \.hero-secondary-btn",
    r"\.btn-primary,\s*\.btn-secondary",
    r"\.btn-primary",
    r"\.btn-secondary",
    r"\.cta-whatsapp-btn",
    r"\.cta-whatsapp-btn::before",
    r"\.cta-whatsapp-btn:hover::before",
    r"\.cta-whatsapp-btn:hover",
    r"\.cta-whatsapp-btn:active",
    r"\.footer-whatsapp-btn",
    r"\.footer-whatsapp-btn:hover",
    r"\.footer-whatsapp-btn:active",
    r"\.btn-gold",
    r"\.btn-ghost",
    r"\.btn-gold:hover",
    r"\.btn-ghost:hover",
]

# We need a robust way to remove the blocks. A regex that matches the selector, optional whitespace, and a block { ... }
for cls in classes_to_remove:
    # Match the selector and its block, including nested braces if possible, but standard CSS blocks don't nest unless in media queries
    # We will match everything up to the first closing brace.
    pattern = r"(?m)^[\s]*" + cls + r"[\s]*{[^}]*}"
    content = re.sub(pattern, "", content)

# Now we need to append the new button classes to the end of the file.
new_classes = """
@layer components {
  .btn-gold {
    @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] bg-gradient-to-b from-gold-soft to-gold text-on-gold font-bold shadow-[0_12px_30px_-16px_rgba(0,0,0,0.8)] hover:-translate-y-[2px] text-[0.8125rem] px-7 py-4;
  }

  .btn-ghost {
    @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] border border-gold/45 text-gold-soft font-semibold hover:bg-gold/12 text-[0.8125rem] px-7 py-4;
  }
}
"""

with open(css_file, "w") as f:
    f.write(content.strip() + "\n" + new_classes + "\n")

print("Cleaned CSS and added new utility classes.")
