import type { Metadata } from "next";
import SiteMapEn from "./page-en";
import SiteMapFr from "./page-fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  const path = "/site-map";
  const canonical = isFr
    ? `https://www.sevenoakprestige.com/fr${path}`
    : `https://www.sevenoakprestige.com${path}`;

  const title = isFr
    ? "Plan du Site | Seven Oak Prestige"
    : "Site Map | Seven Oak Prestige";

  const description = isFr
    ? "Parcourez l'ensemble du site Seven Oak Prestige : services de création de société au Royaume-Uni, adresses professionnelles, comptabilité, conformité et guides internationaux."
    : "Navigate the Seven Oak Prestige website. Find quick links to our UK company formation services, UK address services, accounting, compliance guides, and corporate resources.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isFr ? "fr_FR" : "en_GB",
    },
    alternates: {
      canonical,
      languages: {
        en: `https://www.sevenoakprestige.com${path}`,
        fr: `https://www.sevenoakprestige.com/fr${path}`,
        "x-default": `https://www.sevenoakprestige.com${path}`,
      },
    },
  };
}

export default async function SiteMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") return <SiteMapFr />;
  return <SiteMapEn />;
}
