import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Création de Société au Royaume-Uni pour Non-Résidents | Créez à distance",
    description:
        "Enregistrez une société Limited britannique depuis n'importe où dans le monde. Services professionnels de création de société au Royaume-Uni pour les non-résidents avec solutions de domiciliation et accompagnement expert.",
    keywords: [
        "création de société uk pour non-résidents",
        "créer une société uk à distance",
        "enregistrer une société uk depuis l'étranger",
        "LTD uk pour étrangers",
        "création de société uk non-résident",
        "création de société uk EAU",
        "création de société uk Inde",
        "création de société uk France",
        "création de société uk Algérie",
        "création de société internationale uk",
        "création de société uk en ligne",
        "société limited uk non-résident",
    ],
    openGraph: {
        title: "Création de Société au Royaume-Uni pour Non-Résidents | Créez à distance",
        description:
            "Enregistrez une société Limited britannique depuis n'importe où dans le monde. Services professionnels de création de société au Royaume-Uni pour les non-résidents avec solutions de domiciliation et accompagnement expert.",
        url: "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Création de Société au Royaume-Uni pour Non-Résidents | Seven Oak Prestige",
        description:
            "Enregistrez une société Limited britannique depuis n'importe où dans le monde. Services professionnels de création de société au Royaume-Uni pour les non-résidents.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents",
        },
    },
};

export default function UKCompanyFormationLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
