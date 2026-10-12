import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/registered-office-service";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Siège Social (Registered Office) à Londres | Seven Oak Prestige"
            : "Registered Office Address UK | Professional London Business Address",
        description: isFr
            ? "Obtenez une adresse officielle de siège social (Registered Office) à Londres pour votre société auprès de Companies House."
            : "Get a professional UK registered office address to protect your privacy and meet Companies House requirements.",
        keywords: [
            "registered office address UK",
            "UK business address",
            "London registered office",
            "Companies House address",
            "professional business address UK",
            "registered office service",
        ],
        openGraph: {
            title: isFr
                ? "Siège Social (Registered Office) à Londres | Seven Oak Prestige"
                : "Registered Office Address UK | Professional London Business Address",
            description: isFr
                ? "Obtenez une adresse officielle de siège social (Registered Office) à Londres pour votre société."
                : "Get a professional UK registered office address to protect your privacy and meet Companies House requirements.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Siège Social (Registered Office) à Londres | Seven Oak Prestige"
                : "Registered Office Address UK | Seven Oak Prestige",
            description: isFr
                ? "Adresse officielle de registered office à Londres."
                : "Professional UK registered office address to meet Companies House requirements.",
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

export default function RegisteredOfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
