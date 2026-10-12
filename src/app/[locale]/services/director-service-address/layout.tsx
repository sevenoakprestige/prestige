import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/director-service-address";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Adresse de Domiciliation de Dirigeant (DSA) UK | Seven Oak Prestige"
            : "Director Service Address UK | Privacy Protection for Company Directors",
        description: isFr
            ? "Protégez votre adresse personnelle sur le registre public de Companies House avec une director service address à Londres."
            : "Use a UK director service address to protect your personal details on Companies House public records.",
        keywords: [
            "director service address UK",
            "director address privacy",
            "Companies House director address",
            "UK director correspondence address",
            "protect director personal address",
        ],
        openGraph: {
            title: isFr
                ? "Adresse de Domiciliation de Dirigeant (DSA) UK | Seven Oak Prestige"
                : "Director Service Address UK | Privacy Protection for Company Directors",
            description: isFr
                ? "Protégez votre adresse personnelle sur le registre public de Companies House avec une director service address à Londres."
                : "Use a UK director service address to protect your personal details on Companies House public records.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Adresse de Domiciliation de Dirigeant (DSA) UK | Seven Oak Prestige"
                : "Director Service Address UK | Seven Oak Prestige",
            description: isFr
                ? "Protégez votre adresse personnelle avec une director service address à Londres."
                : "Protect your personal details on Companies House public records with a director service address.",
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

export default function DirectorServiceAddressLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
