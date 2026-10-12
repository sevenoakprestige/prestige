import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";
    const path = "/services/virtual-business-address";
    const canonical = isFr ? `https://www.sevenoakprestige.com/fr${path}` : `https://www.sevenoakprestige.com${path}`;

    return {
        title: isFr
            ? "Adresse Commerciale Virtuelle Londres (VBA) | Seven Oak Prestige"
            : "Virtual Business Address UK | Premium London Business Presence",
        description: isFr
            ? "Obtenez une adresse commerciale britannique prestigieuse à Londres pour votre branding, factures, site web et crédibilité internationale."
            : "Get a virtual UK business address for branding, invoices, websites, and professional credibility.",
        keywords: [
            "virtual business address UK",
            "London virtual address",
            "UK business presence",
            "virtual office address UK",
            "professional UK address",
            "business address for invoices",
        ],
        openGraph: {
            title: isFr
                ? "Adresse Commerciale Virtuelle Londres (VBA) | Seven Oak Prestige"
                : "Virtual Business Address UK | Premium London Business Presence",
            description: isFr
                ? "Obtenez une adresse commerciale britannique prestigieuse à Londres pour votre branding et crédibilité."
                : "Get a virtual UK business address for branding, invoices, websites, and professional credibility.",
            url: canonical,
            type: "website",
            locale: isFr ? "fr_FR" : "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "Adresse Commerciale Virtuelle Londres (VBA) | Seven Oak Prestige"
                : "Virtual Business Address UK | Seven Oak Prestige",
            description: isFr
                ? "Adresse commerciale prestigieuse à Londres pour entreprises internationales."
                : "Premium virtual UK business address for branding and professional credibility.",
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

export default function VirtualBusinessAddressLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
