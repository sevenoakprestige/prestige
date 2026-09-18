import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enregistrement EORI UK | Inscription d'Entreprise Import & Export",
    description:
        "Obtenez votre numéro EORI pour le commerce d'import/export au Royaume-Uni avec une assistance d'enregistrement rapide.",
    keywords: [
        "enregistrement eori uk",
        "numéro eori uk",
        "enregistrement import export uk",
        "eori pour non-résidents",
        "eori de commerce uk",
        "enregistrement eori hmrc",
    ],
    openGraph: {
        title: "Enregistrement EORI UK | Inscription d'Entreprise Import & Export",
        description:
            "Obtenez votre numéro EORI pour le commerce d'import/export au Royaume-Uni avec une assistance d'enregistrement rapide.",
        url: "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enregistrement EORI UK | Seven Oak Prestige",
        description:
            "Enregistrement EORI britannique rapide pour les entreprises d'importation et d'exportation.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/eori-registration-uk",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
        },
    },
};

export default function EORIRegistrationLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
