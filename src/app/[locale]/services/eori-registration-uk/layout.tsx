import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/eori-registration-uk";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    const title = isFr
        ? "Service d'Enregistrement EORI UK | Demander un EORI GB | £60 au Total"
        : "EORI Registration Service UK | Apply for a GB EORI | £60 Total";

    const description = isFr
        ? "Assistance à l'enregistrement EORI GB : £60 au total. Pour importateurs, exportateurs UK et sociétés étrangères éligibles. Vérification des besoins, préparation du dossier et confirmation du numéro. XI et UE non inclus."
        : "GB EORI registration assistance: £60 total. For UK importers, exporters and eligible non-UK companies. Requirement check, application preparation and number confirmed. XI and EU not included.";

    return {
        title,
        description,
        keywords: [
            "EORI registration UK",
            "GB EORI number",
            "apply for GB EORI",
            "EORI number UK",
            "UK import export registration",
            "EORI for non-residents",
            "HMRC EORI registration",
        ],
        openGraph: {
            title,
            description,
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical,
            languages: {
                en: `https://www.sevenoakprestige.com${path}`,
                fr: `https://www.sevenoakprestige.com/fr${path}`,
                "x-default": `https://www.sevenoakprestige.com${path}`,
            },
        },
    };
}

export default function EORIRegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
