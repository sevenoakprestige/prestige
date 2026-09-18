import { en } from './en';
import { fr } from './fr';
import type { Translations } from './en';

export type Locale = 'en' | 'fr';

export const translations: Record<Locale, Translations> = { en, fr };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? en;
}

export type { Translations };
