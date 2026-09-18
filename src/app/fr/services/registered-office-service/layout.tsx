import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adresse de Siège Social au Royaume-Uni | Adresse Commerciale Professionnelle à Londres",
    description:
        "Obtenez une adresse de siège social professionnelle au Royaume-Uni pour protéger votre vie privée et répondre aux exigences du Companies House.",
    keywords: [
        "adresse de siège social UK",
        "adresse commerciale UK",
        "siège social Londres",
        "adresse Companies House",
        "adresse commerciale professionnelle UK",
        "service de siège social",
    ],
    openGraph: {
        title: "Adresse de Siège Social au Royaume-Uni | Adresse Commerciale Professionnelle à Londres",
        description:
            "Obtenez une adresse de siège social professionnelle au Royaume-Uni pour protéger votre vie privée et répondre aux exigences du Companies House.",
        url: "https://www.sevenoakprestige.com/fr/services/registered-office-service",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Adresse de Siège Social au Royaume-Uni | Seven Oak Prestige",
        description:
            "Adresse de siège social professionnelle au Royaume-Uni pour répondre aux exigences du Companies House.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/registered-office-service",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/registered-office-service",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/registered-office-service",
        },
    },
};

export default function RegisteredOfficeLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
