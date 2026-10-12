import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/eori-registration-uk";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Numéro EORI Royaume-Uni (Import / Export) | Seven Oak Prestige"
            : "EORI Registration UK | Import & Export Business Registration",
        description: isFr
            ? "Obtenez votre numéro EORI pour commercer au Royaume-Uni (import / export) avec un accompagnement rapide auprès de HMRC."
            : "Get your EORI number for UK import/export trading with fast registration support.",
        keywords: [
            "EORI registration UK",
            "EORI number UK",
            "UK import export registration",
            "EORI for non-residents",
            "UK trading EORI",
            "HMRC EORI registration",
        ],
        openGraph: {
            title: isFr
                ? "Numéro EORI Royaume-Uni (Import / Export) | Seven Oak Prestige"
                : "EORI Registration UK | Import & Export Business Registration",
            description: isFr
                ? "Obtenez votre numéro EORI pour commercer au Royaume-Uni avec un accompagnement rapide."
                : "Get your EORI number for UK import/export trading with fast registration support.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Numéro EORI Royaume-Uni | Seven Oak Prestige"
                : "EORI Registration UK | Seven Oak Prestige",
            description: isFr
                ? "Obtenez votre numéro EORI pour commercer au Royaume-Uni."
                : "Fast UK EORI registration for import and export businesses.",
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

export default function EORIRegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
