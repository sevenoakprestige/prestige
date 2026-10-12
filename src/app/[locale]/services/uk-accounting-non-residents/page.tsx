import type { Metadata } from "next";
import AccountingPageEn from "./page-en";
import AccountingPageFr from "./page-fr";

const PATH = "/services/uk-accounting-non-residents";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "Services Comptables UK pour Dirigeants et Sociétés Non-Résidents | Seven Oak Prestige"
    : "UK Accounting Services for Non-Residents & UK Directors | Seven Oak Prestige";

  const description = isFr
    ? "Accompagnement comptable et fiscal britannique pour dirigeants non-résidents : comptes annuels, CT600, tenue de livres, TVA et paie. Forfaits à partir de £699."
    : "UK accounting and compliance support for non-resident company directors, including annual accounts, CT600, bookkeeping, VAT and payroll. Packages from £699.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: isFr
        ? `https://www.sevenoakprestige.com/fr${PATH}`
        : `https://www.sevenoakprestige.com${PATH}`,
      locale: isFr ? "fr_FR" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: isFr
        ? `https://www.sevenoakprestige.com/fr${PATH}`
        : `https://www.sevenoakprestige.com${PATH}`,
      languages: {
        "en-US": `https://www.sevenoakprestige.com${PATH}`,
        "fr-FR": `https://www.sevenoakprestige.com/fr${PATH}`,
      },
    },
  };
}

export default async function AccountingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    return <AccountingPageFr />;
  }
  return <AccountingPageEn />;
}
