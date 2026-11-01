import type { Metadata } from "next";

const PATH = "/services/registered-office-service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

      const title = isFr
        ? "Service d'Adresse de Siège Social au Royaume-Uni (59 £/an) | Seven Oak Prestige"
        : "UK Registered Office Address Service (£59/year) | Seven Oak Prestige";

      const description = isFr
        ? "Besoin d'une adresse de siège social (Registered Office) au Royaume-Uni ? Utilisez une adresse officielle autorisée pour le courrier de Companies House et HMRC dès 59 £/an, ou incluse dans les forfaits Prestige et Elite."
        : "Need a UK registered office address? Use an authorised UK company address for Companies House and HMRC mail from £59/year, or included in Prestige and Elite formation packages.";

      const canonical = isFr
        ? `https://www.sevenoakprestige.com/fr${PATH}`
        : `https://www.sevenoakprestige.com${PATH}`;

      return {
        title,
        description,
        keywords: [
          "UK registered office address",
          "registered office service UK",
          "London registered office address",
          "Companies House registered office",
          "appropriate address Companies House",
          "registered office for non-residents",
          "change registered office address UK",
        ],
        openGraph: {
          title: isFr
            ? "Service d'Adresse de Siège Social au Royaume-Uni | Seven Oak Prestige"
            : "UK Registered Office Address Service | Seven Oak Prestige",
          description: isFr
            ? "Une adresse britannique dédiée pour le courrier officiel Companies House et HMRC de votre société. 59 £/an ou incluse pendant 12 mois avec les forfaits Prestige et Elite."
            : "A dedicated UK address for your company’s official Companies House and HMRC post. £59/year standalone, or included for 12 months with Prestige and Elite formation.",
          type: "website",
          url: canonical,
          locale: isFr ? "fr_FR" : "en_GB",
          images: [
            {
              url: "https://www.sevenoakprestige.com/assets/address-registered-1280.webp",
              width: 1280,
              height: 853,
              alt: "Sealed company letters waiting in a wooden mail tray on a calm office desk",
            },
      ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://www.sevenoakprestige.com/assets/address-registered-1280.webp"],
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

    export default function RegisteredOfficeServiceLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return <>{children}</>;
    }
