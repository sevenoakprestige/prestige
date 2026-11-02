"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import CompaniesHouseVerificationPageEn from "./page-en";
import CompaniesHouseVerificationPageFr from "./page-fr";

export default function CompaniesHouseVerificationPage() {
  const { locale } = useTranslation();

  if (locale === "fr") {
    return <CompaniesHouseVerificationPageFr />;
  }

  return <CompaniesHouseVerificationPageEn />;
}
