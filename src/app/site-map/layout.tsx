import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | Seven Oak Prestige Ltd – Full Site Directory",
    description:
        "Browse the complete sitemap for Seven Oak Prestige Ltd. Find all our UK company formation services, compliance support, blog articles, and legal pages in one place.",
    keywords: [
        "Seven Oak Prestige sitemap",
        "UK company formation services",
        "site map",
        "Seven Oak Prestige pages",
    ],
    openGraph: {
        title: "Sitemap | Seven Oak Prestige Ltd",
        description:
            "Browse the complete sitemap for Seven Oak Prestige Ltd. Find all our services and pages.",
        url: "https://www.sevenoakprestige.com/site-map",
        type: "website",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/site-map",
    },
};

export default function SitemapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
