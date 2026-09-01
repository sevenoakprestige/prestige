# Seven Oak Prestige — UI & Aesthetics Guide

This document catalogs the design system, reusable components, global aesthetics, and visual guidelines for the Seven Oak Prestige website. Refer to this when building new pages (such as the India Landing Page) to ensure consistency, save tokens, and avoid duplicating CSS.

## 1. Global Theme & Colors

The site uses a combination of Tailwind CSS variables (via Shadcn) and custom CSS classes defined in `src/app/globals.css`.

### Core Brand Colors
- **Gold/Accent:** `--gold: #d4af37;` (or Tailwind equivalent derived from `hsl(45, ...)`)
- **Dark/Base:** `--dark: #0c0c0c;` and `--gray: #1a1a1a;`

### Theme Gradient Backgrounds
The application uses soft, premium gradient backgrounds on the `body` and specific hero sections instead of flat colors.
- **Light Mode Background:** `linear-gradient(135deg, hsl(0, 0%, 98%) 0%, hsl(45, 15%, 95%) 25%, hsl(45, 20%, 92%) 50%, hsl(45, 15%, 95%) 75%, hsl(0, 0%, 98%) 100%)`
- **Dark Mode Background:** Similar 135deg gradient using very dark grays and subtle gold tints.

**Usage Instruction:** Do not apply flat background colors like `bg-white` or `bg-black` to main page sections unless strictly necessary for contrast. Rely on the global body background or use the `.hero-gradient` class for hero areas.

## 2. Reusable UI Components (`src/components/ui`)

The site uses a Shadcn-based UI component library located in `src/components/ui`.

### Button (`<Button>`)
- **Location:** `src/components/ui/button.tsx`
- **Props:** `variant` (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`), `size` (`default`, `sm`, `lg`, `icon`), `asChild` (boolean).
- **Usage Instruction:** Use this component for all standard buttons (CTAs, form submissions).
  - Primary CTAs: Use `variant="default"` (this maps to the primary theme color).
  - Secondary actions: Use `variant="outline"` or `variant="secondary"`.
  - To render a button as a link (e.g., Next.js `<Link>`), use the `asChild` prop:
    ```tsx
    <Button asChild variant="default">
      <Link href="/services">Get Started</Link>
    </Button>
    ```

## 3. Custom CSS Aesthetic Classes (`globals.css`)

For premium cards, trust signals, and specific thematic elements, the site relies on highly tuned CSS classes from `globals.css` rather than inline Tailwind utilities. **Always use these classes for layout components instead of rebuilding them with Tailwind.**

### Card Styles
- **Premium Standard Card (e.g. Services, Pricing, High-End Features):**
  - **Wrapper Class:** `.premium-standard-card` (Defined in `globals.css`)
  - **Premium Icon Wrapper:** `.premium-icon-wrapper` (Defined in `globals.css`)
  - **Usage Instruction:** Use this exact class combination for feature cards, pricing tiers, and main offering cards to ensure consistency. You no longer need to copy/paste the massive tailwind string or the inline HTML `div` for the corner glow, as it's now all handled by `::before` pseudo-elements inside the class!
  - **Example:**
    ```tsx
    <div className="premium-standard-card">
        <div className="premium-icon-wrapper">
            <FaCheckCircle className="size-6" />
        </div>
        <h3>Title</h3>
        <p>Description</p>
    </div>
    ```

- **`.service-card` / `.why-choose-card` (Legacy/Alternative):**
  - Use the Premium Standard Card approach above instead, or rely on these legacy CSS classes if rebuilding is not feasible.

- **`.trust-card-bg`:**
  - **Effect:** A slightly more subtle card background used for trust signals or smaller info blocks.
  - **Usage Instruction:** Use for secondary cards. Includes hover animations similar to service cards.

### Section Backgrounds & Structural Elements
- **Standard Section Backgrounds:** For standard sections (like features, services, FAQs), **DO NOT hardcode background colors** (like `bg-white`, `bg-black`, `bg-background`, or `bg-[#001328]`) on the `<section>` tag.
  - Leave the section background transparent (e.g., `<section className="py-16 sm:py-20 relative overflow-hidden">`) so the global gradient body background shows through for a premium, unified feel.
  - **Text Colors:** Because the background is dynamic (light/dark mode), **never use hardcoded text colors** like `text-white` or `text-gray-300` in these standard sections. Always use the theme variables: `text-foreground` for main text and headings, and `text-muted-foreground` for paragraphs/descriptions.
- **Section Background Decoration:** To add the subtle glowing orbs behind the content, include this empty div as the first child of the section (make sure the section has `relative overflow-hidden` and the inner content container has `relative z-10`):
  ```tsx
  <div className="premium-section-bg"></div>
  ```
  - **Important Color Instruction:** The `.premium-section-bg` class is defined in `globals.css` and automatically handles the correct background blur and colors (`rgba(212, 175, 55, 0.03)` for light mode and `rgba(212, 175, 55, 0.05)` for dark mode). Use this reusable class instead of hardcoding raw Tailwind utility chains.
- **`.hero-gradient`:** Apply to the hero section wrapper for the premium background.
- **`.hero-heading` / `.hero-text` / `.hero-secondary-btn`:** Use these for text within the hero to respect dark/light mode rules automatically.
- **Animated Background Elements:** Use `.hero-circle-1` and `.hero-circle-2` for floating background decorative circles (they have 20s-25s infinite float animations).

### Checker UI (e.g., Company Name Availability)
- **`.checker-section` & `.checker-container`:** Wrappers for interactive forms.
- **`.checker-input`:** A highly styled input field with focus rings and disabled states.

### Service Cards
- **Premium Service Card:** For grids representing services or niches (like the home page's "Our Core Services" or the India page's "Built for Modern Indian Entrepreneurs"), use the `.premium-service-card` class. This handles all hover transitions, borders, glows, and flex alignments natively.
  - Usage: `<div className="premium-service-card">...</div>`. You may append explicit `h-*` and `w-*` tailwind classes if you require strict sizing.

### FAQ UI
- **Premium FAQ Component:** For FAQ accordions across the site, use the standard `.premium-faq-item` class to ensure visual consistency with the dark/light card designs.
  - `premium-faq-item`: Wrapper for the individual FAQ.
  - `premium-faq-question`: Wrapper for the button.
  - `premium-faq-question-text`: For the actual question text.
  - `premium-faq-icon`: Wrapper for the +/- or arrow icon.
  - `premium-faq-answer-wrapper`: The wrapper that handles the height/opacity transition.
  - `premium-faq-answer-inner`: The inner padding and border for the answer.
  - `premium-faq-answer-text`: The text styling for the answer paragraph.
- **`.checker-button`:** A premium submit button with a gold linear gradient (`linear-gradient(135deg, hsl(45, 70%, 55%), hsl(45, 80%, 60%))`).
- **Usage Instruction:** When building the "Company Name Availability Checker", do not use raw Tailwind inputs. Wrap the section in `.checker-section`, apply `.checker-input` to the input field, and `.checker-button` to the submit button.

### Typography & Icons
- **`.animate-bounce-right`:** A custom animation that bounces an element (usually an arrow `➔`) to the right. Useful for text links or "Read More" CTAs.
- **Payment Logos:** The `.payment-logo` class handles the color inversion and grayscale required for trust icons across light and dark modes. Apply this to all payment provider images (Stripe, Visa, etc.).

## 4. Reusable Section Components (`src/components/`)

The site has several pre-built layout sections. Before building a new section from scratch, check if one of these can be imported and reused (or used as a structural reference):

- `Hero.tsx`: Standard hero layout.
- `TrustSection.tsx`: Banner for trusted partners or payment gateways.
- `Services.tsx` / `UKAddressServices.tsx`: Grid layouts for feature cards.
- `Pricing.tsx`: Pricing tier tables.
- `FAQ.tsx`: Accordion-style frequently asked questions.
- `CTASection.tsx`: The bottom, full-width CTA block.
- `HowItWorks.tsx`: Step-by-step timelines.
- `CompanyChecker.tsx`: The interactive company name checker.

**Usage Instruction for New Pages:**
When creating a new page (e.g., `/app/countries/india/uk-company-formation/page.tsx`), import and stack these reusable components where possible. If a section is highly custom, build it locally in the page but apply the CSS classes (e.g., `.service-card`, `.trust-card-bg`) documented in Section 3 to maintain the global aesthetic.
