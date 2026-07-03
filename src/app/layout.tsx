import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sevenoakprestige.com"),
    title: {
        default: "UK Company Formation for International Entrepreneurs & Non-Residents | Banking Assistance | Seven Oak Prestige",
        template: "%s | Seven Oak Prestige",
    },
    description: "UK-based company formation service for international entrepreneurs and non-residents. Register your UK limited company remotely with compliance support and banking assistance guidance for a credible UK setup.",
    keywords: [
        "UK company formation",
        "non-resident UK company",
        "UK LTD for foreigners",
        "register UK company online",
        "UK registered office address",
        "director service address",
        "virtual business address London",
        "US LLC formation non-resident",
        "Delaware LLC formation",
        "Canada company formation",
        "fintech account setup",
        "Wise business account",
        "Revolut business account",
        "Stripe UK",
        "company formation 24 hours",
        "UK company formation for non-residents",
        "start UK business from abroad",
        "international company formation",
    ],
    authors: [{ name: "Seven Oak Prestige" }],
    creator: "Seven Oak Prestige",
    publisher: "Seven Oak Prestige",
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://www.sevenoakprestige.com",
        title: "UK Company Formation for International Entrepreneurs & Non-Residents | Banking Assistance | Seven Oak Prestige",
        description: "UK-based company formation service for international entrepreneurs and non-residents. Register your UK limited company remotely with compliance support and banking assistance guidance for a credible UK setup.",
        siteName: "Seven Oak Prestige",
        images: [
            {
                url: "/assets/logo/seven_oak_prestige_dark_mode.png",
                width: 1200,
                height: 630,
                alt: "Seven Oak Prestige - UK Company Formation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Company Formation for International Entrepreneurs & Non-Residents | Seven Oak Prestige",
        description: "UK-based company formation service for international entrepreneurs and non-residents. Register your UK limited company remotely with compliance support and banking assistance guidance.",
        images: ["/assets/logo/seven_oak_prestige_dark_mode.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};


const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

if (!gtmId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID is not defined");
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId={gtmId} />
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    {/* <Footer /> */}
                    <CookieConsent />
                    <JsonLd />
                </ThemeProvider>
            </body>
        </html>
    );
}
