# Localization Architecture Plan

This document outlines the current localization (i18n) architecture for SevenOaks Prestige and provides a scalable blueprint for adding new languages in the future.

## 1. Core Architecture

The application uses Next.js App Router with dynamic locale segments (`/[locale]/...`).

### Middleware (`src/middleware.ts`)
Handles request routing and language negotiation.
- Detects the user's preferred language via GeoIP or `Accept-Language` headers.
- **Rule:** The default site is strictly English (`en`). It does not use the `/en` prefix, ensuring all existing SEO backlinks and structures remain unbroken.
- Non-default languages (like French) are explicitly routed through `/fr/...`.
- If a user requests a localized path (e.g. `/fr/contact`), the middleware allows it through seamlessly.

### Translation Patterns
We employ a **hybrid approach** to balance developer experience with layout flexibility:

#### A. Dictionary Pattern (Context-based)
Used for highly modular pages with simple content replacement (e.g., Home Page, Services, Banking Readiness).
- **How it works:** A React Context (`TranslationContext`) wraps the application. The `t` function maps a JSON-like object of translations based on the active locale.
- **Where it lives:** `src/i18n/` (e.g., `en.ts`, `fr.ts`).
- **Pros:** Fast to implement, excellent for simple string replacement.

#### B. Component Splitting Pattern (File-based)
Used for deeply structured pages where the layout, components, or JSX hierarchy might change between languages (e.g., Contact, Consultation).
- **How it works:** Instead of relying on a massive dictionary, entire pages and their sub-components are duplicated and translated (e.g., `page-en.tsx` and `page-fr.tsx`). A "Controller" `page.tsx` dynamically imports the correct component based on the `[locale]` parameter.
- **Where it lives:** Directly inside the route folder (e.g., `src/app/[locale]/contact/page-fr.tsx`).
- **Pros:** Complete freedom to restructure pages per region, prevents dictionary bloat, isolates language-specific components, and handles complex JSX gracefully without escaping issues.

---

## 2. Scaling to New Languages

Adding a new language (e.g., German - `de`) is a systematic process designed to be predictable and scalable.

### Step 1: Update Configuration
1. **`src/i18n/index.ts`**: Add the new locale to the `locales` array and define its dictionary import.
2. **`src/middleware.ts`**: Add the new locale to the supported locales check to prevent 404s.

### Step 2: Implement the Dictionary Pattern (For simple pages)
1. Copy `src/i18n/en.ts` and create `src/i18n/de.ts`.
2. Translate all object values to German.
3. The `TranslationContext` will automatically serve `de.ts` to any component using `useTranslation()` when the URL prefix is `/de`.

### Step 3: Implement the Component Splitting Pattern (For complex pages)
For structured pages like Contact and Consultation:
1. Navigate to the route folder (e.g., `src/app/[locale]/contact/`).
2. Duplicate `page-en.tsx` to `page-de.tsx` and translate the content directly in the TSX.
3. If the page uses sub-components (like `/consultation`), duplicate them (e.g., `AdvisoryServicesEN.tsx` -> `AdvisoryServicesDE.tsx`) and translate.
4. Update the Controller `page.tsx` in that folder to add a conditional block for the new language:
```tsx
// Example of Controller updating
import PageEN from './page-en';
import PageFR from './page-fr';
import PageDE from './page-de';

export default function Controller({ params: { locale } }: { params: { locale: string } }) {
    if (locale === 'fr') return <PageFR />;
    if (locale === 'de') return <PageDE />;
    return <PageEN />;
}
```

### Step 4: Update UI Elements
1. Update the `LangBanner` component (if active) to suggest the new language based on geo-targeting.
2. Update language switchers or footers as needed to include the new locale flag/link.

---

## 3. Exceptions & Rules

- **Excluded Paths:** By default, `/blog`, `/api`, and `/countries` (India/France guides) are excluded from dynamic `[locale]` routing.
- **SEO Consistency:** The English version must NEVER redirect to `/en` or append `/en` to paths. It must remain on the root (e.g., `/contact`) to preserve link equity.
- **Client Components:** The `useTranslation` hook uses React Context and requires components to be marked with `"use client"`. Metadata generation must stay in server-side `page.tsx` files.
