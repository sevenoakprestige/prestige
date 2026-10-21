import type { Metadata } from "next";

const PATH = "/countries/germany/uk-company-formation";
const TITLE = "UK Limited gründen aus Deutschland | Seven Oak Prestige";
const DESCRIPTION =
  "UK Limited aus Deutschland gründen: Pakete ab £199 inkl. Companies-House-Gebühr, optional mit Registered Office, Director Service Address und Banking-Vorbereitung.";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `https://www.sevenoakprestige.com${PATH}`;

  return {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      "UK Limited gründen aus Deutschland",
      "Firma in England gründen",
      "englische Limited gründen",
      "UK company formation Germany",
      "GmbH UK Tochtergesellschaft",
      "Companies House Registrierung Deutschland",
      "Seven Oak Prestige Germany",
    ],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      type: "website",
      url: canonical,
      locale: "de_DE",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/germany-hero-1280.webp",
          width: 1280,
          height: 883,
          alt: "UK Limited aus Deutschland gründen - Seven Oak Prestige",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: ["https://www.sevenoakprestige.com/assets/germany-hero-1280.webp"],
    },
    alternates: {
      canonical,
      languages: {
        de: canonical,
        "de-DE": canonical,
        "x-default": canonical,
      },
    },
  };
}

export default function GermanyCountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
