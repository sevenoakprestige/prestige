import { Metadata } from 'next';
import HomeClient from './home-client';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? "Création & Immatriculation de Société UK en Ligne | Seven Oak Prestige"
        : "UK Company Formation & Registration Online | Seven Oak Prestige";

    const description = isFr
        ? "Créez une société britannique (UK Ltd) en ligne à partir de 199 £, frais de dépôt Companies House inclus. Siège social, adresse de service du dirigeant, vérification d'identité et préparation bancaire, avec examen par un conseiller avant soumission."
        : "Form a UK limited company online from £199, with the Companies House filing fee included. Registered office, director service address, identity verification and banking-readiness support, with adviser review before submission.";

    const ogDescription = isFr
        ? "Création et immatriculation de société au Royaume-Uni avec tarification fixe et claire, services d'adresse UK et accompagnement par un conseiller du premier examen au dépôt."
        : "UK company formation and registration with fixed up-front pricing, UK address services and adviser support from first review to filing.";

    return {
        title: {
            absolute: title,
        },
        description,
        alternates: {
            canonical: isFr
                ? "https://www.sevenoakprestige.com/fr"
                : "https://www.sevenoakprestige.com/",
            languages: {
                en: "https://www.sevenoakprestige.com/",
                fr: "https://www.sevenoakprestige.com/fr",
                "x-default": "https://www.sevenoakprestige.com/",
            },
        },
        openGraph: {
            title,
            description: ogDescription,
            type: "website",
            url: isFr
                ? "https://www.sevenoakprestige.com/fr"
                : "https://www.sevenoakprestige.com/",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default function Page() {
    return <HomeClient />;
}
