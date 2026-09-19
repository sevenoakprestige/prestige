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
        default: "UK Company Formation Blog | Seven Oak Prestige",
        template: "%s | Seven Oak Prestige",
    },
    description: "Insights and guides on UK company formation, banking, and business management.",
    alternates: {
        canonical: "https://www.sevenoakprestige.com/blog",
    },
};

import { getTranslations, type Locale } from "@/i18n";
import { TranslationProvider } from "@/i18n/TranslationContext";
import { cookies } from "next/headers";

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

export default async function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const preferredLocale = (cookieStore.get("NEXT_LOCALE")?.value as Locale) || "en";
    const t = getTranslations(preferredLocale);

    return (
        <html lang="en" suppressHydrationWarning>
            {gtmId && <GoogleTagManager gtmId={gtmId} />}
            <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`} suppressHydrationWarning>
                <TranslationProvider locale={preferredLocale} translations={t}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        {children}
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
