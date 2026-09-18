import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos | Seven Oak Prestige LTD — Experts en Création d'Entreprise au Royaume-Uni",
    description:
        "Découvrez Seven Oak Prestige LTD : accompagnement des résidents britanniques et des entrepreneurs internationaux dans la création de société au Royaume-Uni, les services de siège social, l'aide à la conformité et l'assistance bancaire.",
    keywords: [
        "à propos de Seven Oak Prestige",
        "experts création entreprise UK",
        "soutien aux entrepreneurs internationaux",
        "création d'entreprise au Royaume-Uni",
        "service de siège social UK",
        "adresse de service de directeur",
        "adresse commerciale virtuelle UK",
        "création entreprise UK pour non-résidents",
        "aide conformité UK",
        "adresse commerciale Londres",
    ],
    openGraph: {
        title: "À propos de Seven Oak Prestige LTD | Experts en Création d'Entreprise",
        description:
            "Accompagnement des résidents britanniques et des entrepreneurs internationaux avec des services professionnels de création de société au Royaume-Uni, de siège social, de conseils en conformité et d'assistance bancaire.",
        url: "https://www.sevenoakprestige.com/fr/about",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "À propos de Seven Oak Prestige LTD | Création d'Entreprise UK",
        description:
            "Création de société professionnelle au Royaume-Uni et soutien aux entreprises pour les entrepreneurs du monde entier.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/about",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/about",
            "fr-FR": "https://www.sevenoakprestige.com/fr/about",
        },
    },
};

export default function AboutLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
