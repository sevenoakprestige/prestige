"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import EORIRegistrationServicePageEn from "./page-en";
import EORIRegistrationServicePageFr from "./page-fr";

export default function EORIRegistrationServicePage() {
  const { locale } = useTranslation();
  return locale === "fr" ? <EORIRegistrationServicePageFr /> : <EORIRegistrationServicePageEn />;
}
