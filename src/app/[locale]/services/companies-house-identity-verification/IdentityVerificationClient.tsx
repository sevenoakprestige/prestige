"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import CompaniesHouseVerificationPageEn from "../companies-house-verification/page-en";
import CompaniesHouseVerificationPageFr from "../companies-house-verification/page-fr";

export default function IdentityVerificationClient() {
  const { locale } = useTranslation();

  if (locale === "fr") {
    return <CompaniesHouseVerificationPageFr />;
  }

  return <CompaniesHouseVerificationPageEn />;
}
