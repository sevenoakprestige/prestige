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

    const title = isFr
        ? "Service d'Enregistrement à la TVA UK pour Non-Résidents & Sociétés Étrangères | £144"
        : "VAT Registration Service UK for Non-Residents & Overseas Companies | £144";

    const description = isFr
        ? "Assistance à l'enregistrement à la TVA au Royaume-Uni : £144 au total. Pour fondateurs non-résidents, sociétés étrangères et vendeurs Amazon FBA. Examen d'éligibilité, préparation du dossier et soumission convenue."
        : "UK VAT registration assistance: £144 total. For non-resident founders, overseas companies and Amazon FBA sellers. Eligibility review, application preparation and agreed submission.";

    return {
        title,
        description,
        keywords: [
            "UK VAT registration",
            "VAT registration service UK",
            "VAT registration for non-residents",
            "VAT registration overseas company",
            "HMRC VAT registration",
            "register for VAT UK",
            "Amazon FBA UK VAT registration",
            "UK VAT number",
        ],
        openGraph: {
            title,
            description,
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
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
