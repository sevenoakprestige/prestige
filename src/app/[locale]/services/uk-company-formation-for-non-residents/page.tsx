"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import NonResidentsFormationPageEn from "./page-en";
import NonResidentsFormationPageFr from "./page-fr";

export default function NonResidentsFormationPage() {
  const { locale } = useTranslation();

  if (locale === "fr") {
    return <NonResidentsFormationPageFr />;
  }

  return <NonResidentsFormationPageEn />;
}
