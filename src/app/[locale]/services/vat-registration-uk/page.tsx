"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import VATRegistrationServicePageEn from "./page-en";
import VATRegistrationServicePageFr from "./page-fr";

export default function VATRegistrationServicePage() {
  const { locale } = useTranslation();
  return locale === "fr" ? <VATRegistrationServicePageFr /> : <VATRegistrationServicePageEn />;
}
