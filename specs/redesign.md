# SevenOaks Prestige Redesign Plan

This document outlines the strategy for applying the new redesign to the main site without breaking existing functionality, links, or fonts.

## 🎨 Color Palette (From Redesign)
*Note: Fonts from the redesign are intentionally excluded as per requirements.*

**Institutional Palette:**
- **Ink Deep (Primary/Background in Dark Mode):** `#0e1a2b`
- **Ink:** `#16273d`
- **Ink Soft (Muted text):** `#5b6472`
- **Gold (Accents/Buttons):** `#96712f` (and `#c2a05a` in dark mode)
- **Gold Soft (Hover states/Ghost buttons):** `#7d5e26` (and `#d6bc84` in dark mode)
- **Cream (Parchment sections/Cards):** `#f7f5f0`
- **Line (Borders):** `#d8d2c4`
- **On Gold (Text on gold buttons):** `#ffffff` (and `#0e1a2b` in dark mode)

**Base Variables:**
- **Background:** `#ffffff` (Light) / `#0e1a2b` (Dark)
- **Foreground:** `#0e1a2b` (Light) / `#f7f5f0` (Dark)
- **Card/Popover:** `#f7f5f0` (Light) / `#16273d` (Dark)
- **Destructive:** `#9b2c2c`

## 🏗️ Overall Structure (Redesign)
The redesign introduces a streamlined structure with clear landing pages and detailed sub-pages:
- **Home (`/`)**: Main landing page with hero, services, pricing, and FAQ sections.
- **Countries (`/countries`)**: Directory of supported countries.
  - **Country Specific (`/countries/france/uk-company-formation`)**: Example of targeted landing pages.
- **Guides (`/guides`)**: Educational content and resources.
- **Security (`/security`)**: Dedicated security and compliance page.
- **Legal & Policies**: 
  - Privacy Policy (`/privacy`)
  - Terms (`/terms`)
  - Refund Policy (`/refund`)
  - Data Protection (`/data-protection`)

## 🔗 Link Mapping & Strategy

### 1. Matching Existing Links (Do Not Break)
The following links exist on the **main site** and must be preserved when porting the redesign layout/content:
- `/` (Home)
- `/privacy` (Privacy Policy)
- `/terms` (Terms & Conditions)
- `/refund` (Refund Policy)
- `/countries` (Countries directory)
- `/blog` (Blog directory)
- `/blog/[slug]` (Individual blog posts)
- `/consultation` (Book Consultation)
- `/about` (About Us)
- `/site-map` (Sitemap)
- All `/services/*` links (e.g., `/services/uk-company-formation-for-non-residents`, `/services/registered-office-service`, etc.)
- All `/resources/*` links

### 2. New Links (To Be Added)
The redesign introduces new pages that need to be created on the main site:
- `/security`
- `/data-protection`
- `/guides` (We need to decide if this merges with `/blog` or `/resources`, or stands alone as a new section).
- Targeted country pages like `/countries/france/uk-company-formation`.

## 🚀 Implementation Goal
1. **Update Global Styles:** Apply the new color palette (variables) to the main site's `globals.css` or `tailwind.config.ts`, ensuring the original fonts remain unchanged.
2. **Port Components:** Bring over the redesigned layout, UI components, and texts from the redesign's `src/routes` and `src/components` to the main site's App Router (`src/app`).
3. **Preserve Routing:** Ensure all `<Link>` components in the ported code use the existing Next.js paths. If the redesign points to a missing route, create it or map it to the existing main site equivalent (e.g., merging `/guides` with `/blog` if preferred, or keeping them separate).
4. **Validation:** Verify that no existing `/services/...` or `/resources/...` page throws a 404 after the update.
