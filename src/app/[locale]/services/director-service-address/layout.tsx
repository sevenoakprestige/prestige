import type { Metadata } from "next";

const PATH = "/services/director-service-address";

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
    ? "Adresse de Service du Dirigeant au Royaume-Uni (35 £/an) | Seven Oak Prestige"
    : "UK Director Service Address £35/year | Seven Oak Prestige";

  const description = isFr
    ? "Adresse de service du dirigeant (Director Service Address) au Royaume-Uni — 35 £/an. Séparez votre adresse publique de correspondance actuelle de votre domicile personnel."
    : "UK director service address — £35/year. Separate your current public correspondence address from home. Available address, permitted use and mail scope confirmed before purchase.";

  return {
    title,
    description,
    keywords: [
      "director service address UK",
      "UK director correspondence address",
      "Companies House director address",
      "protect director home address UK",
      "director privacy address UK",
      "non-resident director service address",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isFr ? "fr_FR" : "en_GB",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/address-director-1280.webp",
          width: 1280,
          height: 730,
          alt: "A director relaxing at home with a tablet, an envelope and house keys on the table",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.sevenoakprestige.com/assets/address-director-1280.webp"],
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

export default function DirectorServiceAddressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
