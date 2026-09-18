import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Assistance Bancaire aux Entreprises UK | Accompagnement Comptes Fintech",
    description:
        "Obtenez des conseils d'experts pour les comptes fintech britanniques, Stripe, Wise et la conformité bancaire des entreprises.",
    keywords: [
        "banque fintech UK",
        "banque d'entreprise UK",
        "compte Stripe UK",
        "compte professionnel Wise",
        "création de compte fintech",
        "assistance bancaire entreprise UK",
        "banque d'entreprise non-résident UK",
    ],
    openGraph: {
        title: "Assistance Bancaire aux Entreprises UK | Accompagnement Comptes Fintech",
        description:
            "Obtenez des conseils d'experts pour les comptes fintech britanniques, Stripe, Wise et la conformité bancaire des entreprises.",
        url: "https://www.sevenoakprestige.com/fr/services/fintech-banking-guidance",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Assistance Bancaire aux Entreprises UK | Seven Oak Prestige",
        description:
            "Conseils d'experts pour les comptes fintech britanniques et la conformité bancaire des entreprises.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/fintech-banking-guidance",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/fintech-banking-guidance",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/fintech-banking-guidance",
        },
    },
};

export default function FintechBankingLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
