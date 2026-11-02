import type { Metadata } from "next";
import IdentityVerificationClient from "./IdentityVerificationClient";

const PATH = "/services/companies-house-identity-verification";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const canonical = isFr
    ? `https://www.sevenoakprestige.com/fr${PATH}`
    : `https://www.sevenoakprestige.com${PATH}`;

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
      type: "website",
      url: canonical,
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
        en: `https://www.sevenoakprestige.com${PATH}`,
        fr: `https://www.sevenoakprestige.com/fr${PATH}`,
        "x-default": `https://www.sevenoakprestige.com${PATH}`,
      },
    },
  };
}

export default function IdentityVerificationPage() {
  return <IdentityVerificationClient />;
}
