import type { Metadata } from "next";

const PATH = "/services/uk-nominee-director-service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "Service de Nominee Director au Royaume-Uni : Devoirs, Risques et Tarifs | Seven Oak Prestige"
    : "UK Nominee Director Service: Duties, Risks and Cost | Seven Oak Prestige";

  const description = isFr
    ? "Comprenez les devoirs, la transparence et la conformité d'un nominee director au Royaume-Uni. Demandez une évaluation au cas par cas auprès de Seven Oak Prestige."
    : "Understand UK nominee director duties, transparency and compliance. Request a case-by-case director service assessment from Seven Oak Prestige. No public pricing.";

  const canonical = isFr
    ? `https://www.sevenoakprestige.com/fr${PATH}`
    : `https://www.sevenoakprestige.com${PATH}`;

  return {
    title,
    description,
    keywords: [
      "UK nominee director",
      "nominee director services UK",
      "UK resident director",
      "director service assessment",
      "Companies Act director duties",
      "UK corporate governance",
      "Companies House director verification",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      locale: isFr ? "fr_FR" : "en_GB",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/director-hero-1280.webp",
          width: 1280,
          height: 720,
          alt: "UK Nominee Director Services Assessment - Seven Oak Prestige",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.sevenoakprestige.com/assets/director-hero-1280.webp"],
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

export default function NomineeDirectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
