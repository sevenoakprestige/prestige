import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/fintech-banking-guidance";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Accompagnement Bancaire & Fintech UK | Seven Oak Prestige"
            : "UK Business Banking Support | Fintech Account Setup Guidance",
        description: isFr
            ? "Conseils d'experts pour vos comptes fintech au Royaume-Uni (Wise, Revolut, Airwallex, Stripe) et préparation bancaire pour non-résidents."
            : "Get expert guidance for UK fintech accounts, Stripe, Wise, and business banking compliance.",
        keywords: [
            "UK fintech banking",
            "business banking UK",
            "Stripe account UK",
            "Wise business account",
            "fintech account setup",
            "UK business banking guidance",
            "non-resident business banking UK",
        ],
        openGraph: {
            title: isFr
                ? "Accompagnement Bancaire & Fintech UK | Seven Oak Prestige"
                : "UK Business Banking Support | Fintech Account Setup Guidance",
            description: isFr
                ? "Conseils d'experts pour vos comptes fintech et préparation bancaire au Royaume-Uni."
                : "Get expert guidance for UK fintech accounts, Stripe, Wise, and business banking compliance.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Accompagnement Bancaire & Fintech UK | Seven Oak Prestige"
                : "UK Business Banking Support | Seven Oak Prestige",
            description: isFr
                ? "Accompagnement d'experts pour la préparation bancaire et fintech au Royaume-Uni."
                : "Expert guidance for UK fintech accounts and business banking compliance.",
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

export default function FintechBankingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
