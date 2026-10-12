import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/site-map";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Plan du Site | Seven Oak Prestige Ltd – Répertoire Complet"
            : "Sitemap | Seven Oak Prestige Ltd – Full Site Directory",
        description: isFr
            ? "Consultez l'ensemble de nos services de création d'entreprise au Royaume-Uni, solutions de conformité, articles de blog et pages légales."
            : "Browse the complete sitemap for Seven Oak Prestige Ltd. Find all our UK company formation services, compliance support, blog articles, and legal pages in one place.",
        keywords: [
            "Seven Oak Prestige sitemap",
            "plan du site",
            "UK company formation services",
            "site map",
            "Seven Oak Prestige pages",
        ],
        openGraph: {
            title: isFr
                ? "Plan du Site | Seven Oak Prestige Ltd"
                : "Sitemap | Seven Oak Prestige Ltd",
            description: isFr
                ? "Consultez l'ensemble de nos services et pages."
                : "Browse the complete sitemap for Seven Oak Prestige Ltd. Find all our services and pages.",
            url: canonical,
            locale: isFr ? "fr_FR" : "en_GB",
            type: "website",
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

export default function SitemapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
