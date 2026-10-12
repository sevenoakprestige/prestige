import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/vat-registration-uk";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Service d'Enregistrement à la TVA UK | Seven Oak Prestige"
            : "UK VAT Registration Service | Register for VAT with HMRC Support",
        description: isFr
            ? "Service rapide d'enregistrement à la TVA au Royaume-Uni avec accompagnement HMRC pour entreprises et non-résidents."
            : "Fast UK VAT registration service with HMRC compliance guidance for businesses and non-residents.",
        keywords: [
            "UK VAT registration",
            "VAT registration service",
            "HMRC VAT registration",
            "register for VAT UK",
            "VAT for non-residents",
            "UK VAT number",
        ],
        openGraph: {
            title: isFr
                ? "Service d'Enregistrement à la TVA UK | Seven Oak Prestige"
                : "UK VAT Registration Service | Register for VAT with HMRC Support",
            description: isFr
                ? "Service rapide d'enregistrement à la TVA au Royaume-Uni avec accompagnement HMRC pour entreprises et non-résidents."
                : "Fast UK VAT registration service with HMRC compliance guidance for businesses and non-residents.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Service d'Enregistrement à la TVA UK | Seven Oak Prestige"
                : "UK VAT Registration Service | Seven Oak Prestige",
            description: isFr
                ? "Service rapide d'enregistrement à la TVA au Royaume-Uni."
                : "Fast UK VAT registration with HMRC compliance guidance.",
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

export default function VATRegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
