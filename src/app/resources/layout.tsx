import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
    title: {
        template: "%s | Seven Oak Prestige Executive Resources",
        default: "Executive Resources | Seven Oak Prestige",
    },
    description: "Premium evergreen publications and executive frameworks for international entrepreneurs by Seven Oak Prestige.",
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col selection:bg-[#d4af37]/30">
            {/* The global Navbar is already rendered in the root layout */}
            
            {/* Main content wrapper with premium typography and generous whitespace */}
            <main className="flex-1 flex flex-col">
                <div className="w-full">
                    {children}
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
