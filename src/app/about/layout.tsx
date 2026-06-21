import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Seven Oak Prestige LTD — UK Company Formation Experts",
    description:
        "Learn about Seven Oak Prestige LTD — supporting UK residents and international entrepreneurs with UK company formation, registered office services, compliance guidance, and banking assistance.",
    keywords: [
        "about Seven Oak Prestige",
        "UK company formation experts",
        "international entrepreneur support",
        "UK business formation company",
        "registered office service UK",
        "director service address",
        "virtual business address UK",
        "UK company formation for non-residents",
        "UK compliance guidance",
        "London business address",
    ],
    openGraph: {
        title: "About Seven Oak Prestige LTD | UK Company Formation Experts",
        description:
            "Supporting UK residents and international entrepreneurs with professional UK company formation, registered office services, compliance guidance, and banking assistance.",
        url: "https://www.sevenoakprestige.com/about",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Seven Oak Prestige LTD | UK Company Formation",
        description:
            "Professional UK company formation and business support for entrepreneurs worldwide.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
