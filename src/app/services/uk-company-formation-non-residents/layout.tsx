import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK Company Formation for Non-Residents | Start a UK Business Online",
    description:
        "Form a UK company as a non-resident. Full remote setup, registered office address, and compliance support for international founders.",
    keywords: [
        "UK company formation non-residents",
        "non-resident UK company",
        "start UK business online",
        "international UK company formation",
        "remote UK company setup",
        "UK company for foreigners",
        "register UK company abroad",
    ],
    openGraph: {
        title: "UK Company Formation for Non-Residents | Start a UK Business Online",
        description:
            "Form a UK company as a non-resident. Full remote setup, registered office address, and compliance support for international founders.",
        url: "https://www.sevenoakprestige.com/uk-company-formation-non-residents",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Company Formation for Non-Residents | Seven Oak Prestige",
        description:
            "Form a UK company as a non-resident with full remote setup and compliance support.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/uk-company-formation-non-residents",
    },
};

export default function UKFormationNonResidentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
