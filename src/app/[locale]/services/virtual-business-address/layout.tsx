import type { Metadata } from "next";

const PATH = "/services/virtual-business-address";

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
    ? "Adresse Commerciale Virtuelle au Royaume-Uni (150 £/an) | Seven Oak Prestige"
    : "UK Virtual Business Address £150/year | Seven Oak Prestige";

  const description = isFr
    ? "Adresse commerciale virtuelle au Royaume-Uni pour 150 £ par an. Utilisez une adresse professionnelle pour vos clients, fournisseurs et votre site web, avec des conditions claires de gestion du courrier."
    : "UK virtual business address for £150 a year. Use a professional business address for clients, suppliers and your website, with clear mail handling terms.";

  return {
    title,
    description,
    keywords: [
      "virtual business address UK",
      "UK business correspondence address",
      "London virtual business address",
      "virtual address for UK company",
      "business mail address UK",
      "business address for invoices UK",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isFr ? "fr_FR" : "en_GB",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/address-virtual-1280.webp",
          width: 1280,
          height: 730,
          alt: "A business owner opening a letter at a sunlit desk beside a laptop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.sevenoakprestige.com/assets/address-virtual-1280.webp"],
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

export default function VirtualBusinessAddressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
