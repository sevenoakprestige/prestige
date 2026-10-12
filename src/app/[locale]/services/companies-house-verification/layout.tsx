import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/companies-house-verification";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Vérification Companies House (ACSP / IDV) | Seven Oak Prestige"
            : "Companies House Verification Service UK | Identity & Compliance Check",
        description: isFr
            ? "Accompagnement à la vérification d'identité Companies House (conformité ACSP/PVC) pour les dirigeants et actionnaires de sociétés UK."
            : "Support for Companies House identity verification (ACSP/PVC compliance) for UK company directors.",
        keywords: [
            "Companies House verification",
            "PVC compliance UK",
            "ACSP verification",
            "identity verification UK company",
            "Companies House identity check",
            "director verification UK",
        ],
        openGraph: {
            title: isFr
                ? "Vérification Companies House (ACSP / IDV) | Seven Oak Prestige"
                : "Companies House Verification Service UK | Identity & Compliance Check",
            description: isFr
                ? "Accompagnement à la vérification d'identité Companies House pour dirigeants non-résidents."
                : "Support for Companies House identity verification (ACSP/PVC compliance) for UK company directors.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Vérification Companies House | Seven Oak Prestige"
                : "Companies House Verification | Seven Oak Prestige",
            description: isFr
                ? "Accompagnement à la vérification d'identité Companies House."
                : "Companies House identity verification and ACSP/PVC compliance support.",
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

export default function CompaniesHouseVerificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
