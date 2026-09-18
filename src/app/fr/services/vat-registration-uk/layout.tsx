import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service d'Enregistrement TVA UK | S'inscrire à la TVA avec le Support du HMRC",
    description:
        "Service d'enregistrement rapide à la TVA au Royaume-Uni avec des conseils de conformité HMRC pour les entreprises et les non-résidents.",
    keywords: [
        "enregistrement tva uk",
        "service enregistrement tva",
        "enregistrement tva hmrc",
        "s'inscrire à la tva uk",
        "tva pour non-résidents",
        "numéro de tva uk",
    ],
    openGraph: {
        title: "Service d'Enregistrement TVA UK | S'inscrire à la TVA avec le Support du HMRC",
        description:
            "Service d'enregistrement rapide à la TVA au Royaume-Uni avec des conseils de conformité HMRC pour les entreprises et les non-résidents.",
        url: "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Service d'Enregistrement TVA UK | Seven Oak Prestige",
        description:
            "Enregistrement rapide à la TVA au Royaume-Uni avec des conseils de conformité HMRC.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/vat-registration-uk",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
        },
    },
};

export default function VATRegistrationLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
