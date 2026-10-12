import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/about";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "À Propos | Seven Oak Prestige LTD — Experts en Création d'Entreprise au Royaume-Uni"
            : "About Us | Seven Oak Prestige LTD — UK Company Formation Experts",
        description: isFr
            ? "Découvrez Seven Oak Prestige Ltd : cabinet britannique accompagnant les entrepreneurs mondiaux pour la création de société UK, domiciliation, conformité et assistance bancaire."
            : "Learn about Seven Oak Prestige LTD — supporting UK residents and international entrepreneurs with UK company formation, registered office services, compliance guidance, and banking assistance.",
        keywords: [
            "about Seven Oak Prestige",
            "UK company formation experts",
            "international entrepreneur support",
            "UK business formation company",
            "registered office service UK",
            "director service address",
            "virtual business address UK",
            "UK company formation for non-residents",
            "UK compliance guidance",
            "London business address",
        ],
        openGraph: {
            title: isFr
                ? "À Propos | Seven Oak Prestige LTD"
                : "About Seven Oak Prestige LTD | UK Company Formation Experts",
            description: isFr
                ? "Cabinet britannique spécialisé dans la création de société UK et l'accompagnement des fondateurs internationaux."
                : "Supporting UK residents and international entrepreneurs with professional UK company formation, registered office services, compliance guidance, and banking assistance.",
            url: canonical,
            locale: isFr ? "fr_FR" : "en_GB",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "À Propos | Seven Oak Prestige LTD"
                : "About Seven Oak Prestige LTD | UK Company Formation",
            description: isFr
                ? "Cabinet britannique spécialisé dans la création de société UK."
                : "Professional UK company formation and business support for entrepreneurs worldwide.",
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

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
