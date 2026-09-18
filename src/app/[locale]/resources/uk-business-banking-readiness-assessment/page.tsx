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
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: PATH,
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `https://www.sevenoakprestige.com${PATH}`,
      languages: {
        "en-US": `https://www.sevenoakprestige.com${PATH}`,
        "fr-FR": `https://www.sevenoakprestige.com/fr${PATH}`,
      },
    },
  };
}

export default function BankingReadinessPage() {
  return <BankingReadinessClient />;
}
