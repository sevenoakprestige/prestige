import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Business Address UK | Premium London Business Presence",
    description:
        "Get a virtual UK business address for branding, invoices, websites, and professional credibility.",
    keywords: [
        "virtual business address UK",
        "London virtual address",
        "UK business presence",
        "virtual office address UK",
        "professional UK address",
        "business address for invoices",
    ],
    openGraph: {
        title: "Virtual Business Address UK | Premium London Business Presence",
        description:
            "Get a virtual UK business address for branding, invoices, websites, and professional credibility.",
        url: "https://www.sevenoakprestige.com/virtual-business-address",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual Business Address UK | Seven Oak Prestige",
        description:
            "Premium virtual UK business address for branding and professional credibility.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/virtual-business-address",
    },
};

export default function VirtualBusinessAddressLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
