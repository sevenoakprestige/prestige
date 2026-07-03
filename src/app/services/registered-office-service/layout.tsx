import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Registered Office Address UK | Professional London Business Address",
    description:
        "Get a professional UK registered office address to protect your privacy and meet Companies House requirements.",
    keywords: [
        "registered office address UK",
        "UK business address",
        "London registered office",
        "Companies House address",
        "professional business address UK",
        "registered office service",
    ],
    openGraph: {
        title: "Registered Office Address UK | Professional London Business Address",
        description:
            "Get a professional UK registered office address to protect your privacy and meet Companies House requirements.",
        url: "https://www.sevenoakprestige.com/services/registered-office-service",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Registered Office Address UK | Seven Oak Prestige",
        description:
            "Professional UK registered office address to meet Companies House requirements.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/services/registered-office-service",
    },
};

export default function RegisteredOfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
