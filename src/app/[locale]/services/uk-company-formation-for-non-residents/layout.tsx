import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/uk-company-formation-for-non-residents";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Création de Société UK pour Non-Résidents | Seven Oak Prestige"
            : "UK Company Formation for Non-Residents | Start a UK Company Remotely",
        description: isFr
            ? "Enregistrez une société UK Limited (LTD) depuis n'importe où dans le monde. Accompagnement complet pour fondateurs non-résidents avec adresses à Londres et support bancaire."
            : "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents with address solutions and expert support.",
        keywords: [
            "UK company formation for non-residents",
            "start a UK company remotely",
            "register UK company from abroad",
            "UK LTD for foreigners",
            "non-resident UK company formation",
            "UK company formation UAE",
            "UK company formation India",
            "UK company formation Pakistan",
            "UK company formation France",
            "UK company formation Algeria",
            "UK company formation Nigeria",
            "international company formation UK",
            "UK company formation online",
            "UK limited company non-resident",
        ],
        openGraph: {
            title: isFr
                ? "Création de Société UK pour Non-Résidents | Seven Oak Prestige"
                : "UK Company Formation for Non-Residents | Start a UK Company Remotely",
            description: isFr
                ? "Enregistrez une société UK Limited (LTD) depuis n'importe où dans le monde avec Seven Oak Prestige."
                : "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents with address solutions and expert support.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Création de Société UK pour Non-Résidents | Seven Oak Prestige"
                : "UK Company Formation for Non-Residents | Seven Oak Prestige",
            description: isFr
                ? "Enregistrez une société UK Limited depuis l'étranger."
                : "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents.",
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

export default function UKCompanyFormationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
