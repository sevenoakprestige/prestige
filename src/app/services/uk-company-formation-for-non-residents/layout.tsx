import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK Company Formation for Non-Residents | Start a UK Company Remotely",
    description:
        "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents with address solutions and expert support.",
    keywords: [
        "UK company formation for non-residents",
        "start a UK company remotely",
        "register UK company from abroad",
        "UK LTD for foreigners",
        "non-resident UK company formation",
        "UK company formation UAE",
        "UK company formation India",
        "UK company formation Pakistan",
        "UK company formation France",
        "UK company formation Algeria",
        "UK company formation Nigeria",
        "international company formation UK",
        "UK company formation online",
        "UK limited company non-resident",
    ],
    openGraph: {
        title: "UK Company Formation for Non-Residents | Start a UK Company Remotely",
        description:
            "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents with address solutions and expert support.",
        url: "https://www.sevenoakprestige.com/uk-company-formation-for-non-residents",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Company Formation for Non-Residents | Seven Oak Prestige",
        description:
            "Register a UK Limited Company from anywhere in the world. Professional UK company formation services for non-residents.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/uk-company-formation-for-non-residents",
    },
};

export default function UKCompanyFormationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
