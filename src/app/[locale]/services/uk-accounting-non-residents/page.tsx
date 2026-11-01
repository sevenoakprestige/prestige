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
    ? "Comptabilité de Société UK Limited pour Non-Résidents | Seven Oak Prestige"
    : "UK Limited Company Accounting for Non-Residents | Seven Oak Prestige";

  const description = isFr
    ? "Comptabilité de société UK Limited pour dirigeants non-résidents. Comptes annuels, CT600, confirmation statements et tenue de livres mensuelle. Comparez nos forfaits à prix fixe dès £699/an."
    : "UK limited company accounting for non-resident directors. Annual accounts, CT600, confirmation statements and monthly bookkeeping. Compare fixed-price packages from £699/year.";

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
