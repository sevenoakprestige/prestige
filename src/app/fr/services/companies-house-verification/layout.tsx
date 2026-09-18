import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service de Vérification Companies House UK | Vérification d'Identité",
    description:
        "Assistance pour la vérification d'identité à la Companies House (conformité ACSP/PVC) pour les directeurs d'entreprises britanniques.",
    keywords: [
        "vérification companies house",
        "conformité pvc uk",
        "vérification acsp",
        "vérification identité entreprise uk",
        "contrôle identité companies house",
        "vérification directeur uk",
    ],
    openGraph: {
        title: "Service de Vérification Companies House UK | Vérification d'Identité",
        description:
            "Assistance pour la vérification d'identité à la Companies House (conformité ACSP/PVC) pour les directeurs d'entreprises britanniques.",
        url: "https://www.sevenoakprestige.com/fr/services/companies-house-verification",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vérification Companies House | Seven Oak Prestige",
        description:
            "Vérification d'identité Companies House et support de conformité ACSP/PVC.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/companies-house-verification",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/companies-house-verification",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/companies-house-verification",
        },
    },
};

export default function CompaniesHouseVerificationLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
