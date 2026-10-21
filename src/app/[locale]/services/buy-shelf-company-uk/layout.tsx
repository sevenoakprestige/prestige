import type { Metadata } from "next";

const PATH = "/services/buy-shelf-company-uk";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "Acheter une Société Ready-Made UK (Shelf Company) | Seven Oak Prestige"
    : "Buy a Shelf Company UK: Ready-Made Companies | Seven Oak Prestige";

  const description = isFr
    ? "Découvrez l'acquisition d'une société shelf britannique depuis l'étranger. Comprenez les transferts de parts, la due diligence, le passif et la conformité."
    : "Explore buying a UK shelf company from abroad. Understand ownership transfers, due diligence, liabilities and compliance. Enquire with Seven Oak Prestige.";

  const canonical = isFr
    ? `https://www.sevenoakprestige.com/fr${PATH}`
    : `https://www.sevenoakprestige.com${PATH}`;

  return {
    title,
    description,
    keywords: [
      "buy shelf company UK",
      "UK ready-made company",
      "off the shelf company UK",
      "aged company UK",
      "UK shelf company for non-residents",
      "transfer UK company shares",
      "dormant company UK due diligence",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      locale: isFr ? "fr_FR" : "en_GB",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/shelf-hero-1280.webp",
          width: 1280,
          height: 720,
          alt: "Buy a UK Shelf Company - Seven Oak Prestige",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.sevenoakprestige.com/assets/shelf-hero-1280.webp"],
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

export default function ShelfCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
