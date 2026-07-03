import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK VAT Registration Service | Register for VAT with HMRC Support",
    description:
        "Fast UK VAT registration service with HMRC compliance guidance for businesses and non-residents.",
    keywords: [
        "UK VAT registration",
        "VAT registration service",
        "HMRC VAT registration",
        "register for VAT UK",
        "VAT for non-residents",
        "UK VAT number",
    ],
    openGraph: {
        title: "UK VAT Registration Service | Register for VAT with HMRC Support",
        description:
            "Fast UK VAT registration service with HMRC compliance guidance for businesses and non-residents.",
        url: "https://www.sevenoakprestige.com/services/vat-registration-uk",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK VAT Registration Service | Seven Oak Prestige",
        description:
            "Fast UK VAT registration with HMRC compliance guidance.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/services/vat-registration-uk",
    },
};

export default function VATRegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
