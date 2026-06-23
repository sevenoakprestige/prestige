import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Director Service Address UK | Privacy Protection for Company Directors",
    description:
        "Use a UK director service address to protect your personal details on Companies House public records.",
    keywords: [
        "director service address UK",
        "director address privacy",
        "Companies House director address",
        "UK director correspondence address",
        "protect director personal address",
    ],
    openGraph: {
        title: "Director Service Address UK | Privacy Protection for Company Directors",
        description:
            "Use a UK director service address to protect your personal details on Companies House public records.",
        url: "https://www.sevenoakprestige.com/director-service-address",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Director Service Address UK | Seven Oak Prestige",
        description:
            "Protect your personal details on Companies House public records with a director service address.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/director-service-address",
    },
};

export default function DirectorServiceAddressLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
