import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Companies House Verification Service UK | Identity & Compliance Check",
    description:
        "Support for Companies House identity verification (ACSP/PVC compliance) for UK company directors.",
    keywords: [
        "Companies House verification",
        "PVC compliance UK",
        "ACSP verification",
        "identity verification UK company",
        "Companies House identity check",
        "director verification UK",
    ],
    openGraph: {
        title: "Companies House Verification Service UK | Identity & Compliance Check",
        description:
            "Support for Companies House identity verification (ACSP/PVC compliance) for UK company directors.",
        url: "https://www.sevenoakprestige.com/services/companies-house-verification",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Companies House Verification | Seven Oak Prestige",
        description:
            "Companies House identity verification and ACSP/PVC compliance support.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/services/companies-house-verification",
    },
};

export default function CompaniesHouseVerificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
