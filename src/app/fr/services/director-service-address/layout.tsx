import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adresse de Service du Directeur UK | Protection de la Vie Privée",
    description:
        "Utilisez une adresse de service de directeur au Royaume-Uni pour protéger vos données personnelles dans les registres publics de la Companies House.",
    keywords: [
        "adresse de service de directeur UK",
        "confidentialité de l'adresse du directeur",
        "adresse de directeur Companies House",
        "adresse de correspondance de directeur UK",
        "protéger l'adresse personnelle du directeur",
    ],
    openGraph: {
        title: "Adresse de Service du Directeur UK | Protection de la Vie Privée",
        description:
            "Utilisez une adresse de service de directeur au Royaume-Uni pour protéger vos données personnelles dans les registres publics de la Companies House.",
        url: "https://www.sevenoakprestige.com/fr/services/director-service-address",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Adresse de Service du Directeur UK | Seven Oak Prestige",
        description:
            "Protégez vos données personnelles dans les registres publics de la Companies House avec une adresse de service.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/director-service-address",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/director-service-address",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/director-service-address",
        },
    },
};

export default function DirectorServiceAddressLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
