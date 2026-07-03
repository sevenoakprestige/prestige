import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK Business Banking Support | Fintech Account Setup Guidance",
    description:
        "Get expert guidance for UK fintech accounts, Stripe, Wise, and business banking compliance.",
    keywords: [
        "UK fintech banking",
        "business banking UK",
        "Stripe account UK",
        "Wise business account",
        "fintech account setup",
        "UK business banking guidance",
        "non-resident business banking UK",
    ],
    openGraph: {
        title: "UK Business Banking Support | Fintech Account Setup Guidance",
        description:
            "Get expert guidance for UK fintech accounts, Stripe, Wise, and business banking compliance.",
        url: "https://www.sevenoakprestige.com/services/fintech-banking-guidance",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Business Banking Support | Seven Oak Prestige",
        description:
            "Expert guidance for UK fintech accounts and business banking compliance.",
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/services/fintech-banking-guidance",
    },
};

export default function FintechBankingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
