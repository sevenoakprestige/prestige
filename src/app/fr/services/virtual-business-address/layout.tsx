import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adresse Commerciale Virtuelle UK | Présence Commerciale Premium à Londres",
    description:
        "Obtenez une adresse commerciale virtuelle au Royaume-Uni pour votre image de marque, vos factures, vos sites web et votre crédibilité professionnelle.",
    keywords: [
        "adresse commerciale virtuelle UK",
        "adresse virtuelle Londres",
        "présence commerciale UK",
        "adresse de bureau virtuel UK",
        "adresse professionnelle UK",
        "adresse commerciale pour factures",
    ],
    openGraph: {
        title: "Adresse Commerciale Virtuelle UK | Présence Commerciale Premium à Londres",
        description:
            "Obtenez une adresse commerciale virtuelle au Royaume-Uni pour votre image de marque, vos factures, vos sites web et votre crédibilité professionnelle.",
        url: "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Adresse Commerciale Virtuelle UK | Seven Oak Prestige",
        description:
            "Adresse commerciale virtuelle premium au Royaume-Uni pour l'image de marque et la crédibilité professionnelle.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/services/virtual-business-address",
            "fr-FR": "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
        },
    },
};

export default function VirtualBusinessAddressLayoutFR({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
