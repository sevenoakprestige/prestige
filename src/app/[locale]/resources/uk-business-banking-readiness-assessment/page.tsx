import { Metadata } from "next";
import { getTranslations, Locale } from "@/i18n";
import BankingReadinessClient from "./BankingReadinessClient";

const PATH = "/resources/uk-business-banking-readiness-assessment";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const meta = t.resourcesPages.bankingReadiness.meta;
  
  const isFr = locale === 'fr';
  const canonical = isFr ? `https://www.sevenoakprestige.com/fr${PATH}` : `https://www.sevenoakprestige.com${PATH}`;
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: canonical,
      locale: isFr ? "fr_FR" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical,
      languages: {
        en: `https://www.sevenoakprestige.com${PATH}`,
        fr: `https://www.sevenoakprestige.com/fr${PATH}`,
        "x-default": `https://www.sevenoakprestige.com${PATH}`,
      },
    },
  };
}

export default function BankingReadinessPage() {
  return <BankingReadinessClient />;
}
