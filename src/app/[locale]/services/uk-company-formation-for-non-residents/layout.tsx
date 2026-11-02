import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "fr") {
    return {
      title: "Forfaits de Création de Société UK (Ltd) pour Non-Résidents | Seven Oak Prestige",
      description:
        "Enregistrez une société Limited (Ltd) au Royaume-Uni depuis l'étranger avec Seven Oak Prestige. Immatriculation à distance, services d'adresse UK, assistance à la vérification d'identité et préparation bancaire. Forfaits dès 199 £.",
      alternates: {
        canonical:
          "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        languages: {
          en: "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents",
          fr: "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        },
      },
      openGraph: {
        title: "Forfaits de Création de Société UK (Ltd) pour Non-Résidents | Seven Oak Prestige",
        description:
          "Immatriculation de société UK à distance, services d'adresse professionnelle au Royaume-Uni, assistance à la vérification d'identité et accompagnement continu pour les fondateurs internationaux.",
        url: "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        siteName: "Seven Oak Prestige",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Forfaits de Création de Société UK (Ltd) pour Non-Résidents | Seven Oak Prestige",
        description:
          "Immatriculation de société UK à distance, services d'adresse professionnelle au Royaume-Uni, assistance à la vérification d'identité et accompagnement continu pour les fondateurs internationaux.",
      },
    };
  }

  return {
    title: "UK Company Formation Packages for Non-Residents | Seven Oak Prestige",
    description:
      "Register a UK limited company from abroad with Seven Oak Prestige. Remote UK company registration, professional UK address services, identity-verification assistance and banking readiness. Packages from £199.",
    alternates: {
      canonical:
        "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents",
      languages: {
        en: "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents",
        fr: "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
      },
    },
    openGraph: {
      title: "UK Company Formation Packages for Non-Residents | Seven Oak Prestige",
      description:
        "Remote UK company registration, professional UK address services, identity-verification assistance and ongoing corporate support for international founders.",
      url: "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents",
      siteName: "Seven Oak Prestige",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "UK Company Formation Packages for Non-Residents | Seven Oak Prestige",
      description:
        "Remote UK company registration, professional UK address services, identity-verification assistance and ongoing corporate support for international founders.",
    },
  };
}

export default function NonResidentsFormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
