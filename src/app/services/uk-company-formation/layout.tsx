import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK Company Formation Services | Register a UK LTD Company Fast",
    description:
        "Register your UK Limited Company with Seven Oak Prestige LTD. Fast Companies House registration, compliance support, and full documentation included.",
    keywords: [
        "UK company formation",
        "register UK company",
        "UK LTD company",
        "Companies House registration",
        "UK company registration service",
        "start a UK company",
        "UK limited company formation",
    ],
    openGraph: {
        title: "UK Company Formation Services | Register a UK LTD Company Fast",
        description:
            "Register your UK Limited Company with Seven Oak Prestige LTD. Fast Companies House registration, compliance support, and full documentation included.",
        url: "https://www.sevenoakprestige.com/uk-company-formation",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Company Formation Services | Seven Oak Prestige",
        description:
            "Register your UK Limited Company fast with Companies House registration and compliance support.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/uk-company-formation",
    },
};

export default function UKCompanyFormationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
