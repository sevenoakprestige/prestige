import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EORI Registration UK | Import & Export Business Registration",
    description:
        "Get your EORI number for UK import/export trading with fast registration support.",
    keywords: [
        "EORI registration UK",
        "EORI number UK",
        "UK import export registration",
        "EORI for non-residents",
        "UK trading EORI",
        "HMRC EORI registration",
    ],
    openGraph: {
        title: "EORI Registration UK | Import & Export Business Registration",
        description:
            "Get your EORI number for UK import/export trading with fast registration support.",
        url: "https://www.sevenoakprestige.com/services/eori-registration-uk",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EORI Registration UK | Seven Oak Prestige",
        description:
            "Fast UK EORI registration for import and export businesses.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/services/eori-registration-uk",
    },
};

export default function EORIRegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
