import { Metadata } from "next";
import { getTranslations, Locale } from "@/i18n";
import IdentityVerificationClient from "./IdentityVerificationClient";

const PATH = "/services/companies-house-identity-verification";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const meta = t.servicesPages.companiesHouseIdentityVerification.meta;
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
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

export default function IdentityVerificationPage() {
    return <IdentityVerificationClient />;
}
