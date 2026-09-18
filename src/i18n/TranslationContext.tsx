'use client';

import React, { createContext, useContext } from 'react';
import type { Translations, Locale } from './index';
import { en } from './en'; // fallback

type TranslationContextType = {
  t: Translations;
  locale: Locale;
};

const TranslationContext = createContext<TranslationContextType>({
  t: en,
  locale: 'en',
});

export const TranslationProvider = ({
  children,
  translations,
  locale,
}: {
  children: React.ReactNode;
  translations: Translations;
  locale: Locale;
}) => {
  return (
    <TranslationContext.Provider value={{ t: translations, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
