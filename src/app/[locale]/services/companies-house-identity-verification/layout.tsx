import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const path = "/services/companies-house-identity-verification";
  const canonical = isFr
    ? `https://www.sevenoakprestige.com/fr${path}`
    : `https://www.sevenoakprestige.com${path}`;

  const title = isFr
    ? "Vérification d'Identité Companies House & Code Personnel | 74 £"
    : "Companies House Identity Verification & Personal Code | £74";

  const description = isFr
    ? "Besoin d'un code personnel Companies House ? Assistance à la vérification d'identité pour les dirigeants UK, PSC et non-résidents. Accompagnement guidé pour 74 £."
    : "Need a Companies House personal code? Identity verification assistance for UK directors, PSCs and non-residents. Guided support for £74.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isFr ? "fr_FR" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical,
      languages: {
        en: `https://www.sevenoakprestige.com${path}`,
        fr: `https://www.sevenoakprestige.com/fr${path}`,
        "x-default": `https://www.sevenoakprestige.com${path}`,
      },
    },
  };
}

export default function CompaniesHouseIdentityVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

