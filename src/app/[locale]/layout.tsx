import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LangBanner } from "@/components/LangBanner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sevenoakprestige.com"),
    title: {
        default: "UK Company Formation for Non-Residents | Seven Oak Prestige",
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
    alternates: {
        canonical: "https://www.sevenoakprestige.com",
        languages: {
            "en": "https://www.sevenoakprestige.com",
            "fr": "https://www.sevenoakprestige.com/fr",
        },
    },
};


import { getTranslations, type Locale } from "@/i18n";
import { TranslationProvider } from "@/i18n/TranslationContext";

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

if (!gtmId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID is not defined");
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const t = getTranslations(locale as Locale);
    console.log("LOCALE IN LAYOUT:", locale);

    return (
        <html lang={locale} suppressHydrationWarning>
            <GoogleTagManager gtmId={gtmId} />
            <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`} suppressHydrationWarning>
                <TranslationProvider locale={locale as Locale} translations={t}>
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
                        <WhatsAppFloat />
                        <LangBanner />
                    </ThemeProvider>
                </TranslationProvider>
            </body>
        </html>
    );
}
