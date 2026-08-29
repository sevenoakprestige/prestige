import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyChecker from "@/components/CompanyChecker";
import { getExchangeRate } from "@/lib/getExchangeRate";

import IndiaHero from "./components/IndiaHero";
import IndiaFeatures from "./components/IndiaFeatures";
import IndiaPricing from "./components/IndiaPricing";
import IndiaProcess from "./components/IndiaProcess";
import IndiaSpecialist from "./components/IndiaSpecialist";
import IndiaKnowledgeHub from "./components/IndiaKnowledgeHub";
import IndiaFAQ from "./components/IndiaFAQ";
import IndiaFinalCTA from "./components/IndiaFinalCTA";

export const metadata: Metadata = {
    title: "UK Company Formation for Indian Residents | Seven Oak Prestige",
    description: "Build and operate your UK business from India with specialist support for company formation, verification, UK addresses, banking readiness, VAT, and EORI.",
    openGraph: {
        title: "UK Company Formation for Indian Residents | Seven Oak Prestige",
        description: "Build and operate your UK business from India with specialist support.",
    }
};

export default async function IndiaLandingPage() {
    // Fetch live GBP -> INR rate with 24h ISR caching. Fails gracefully to null.
    const inrRate = await getExchangeRate('GBP', 'INR');

    return (
        <main className="min-h-screen">
            <Navbar />
            
            <IndiaHero />
            
            <IndiaFeatures />
            
            <div className="bg-background py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Check if Your UK Company Name Is Available
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Have a company name in mind? Check whether the proposed name appears available before starting your application.
                        </p>
                    </div>
                    <CompanyChecker />
                    <p className="mt-6 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
                        Name-check results are indicative only. Companies House makes the final decision on whether a proposed company name is acceptable. Certain sensitive words or expressions may require approval.
                    </p>
                </div>
            </div>

            <IndiaPricing inrRate={inrRate} />
            
            <IndiaProcess />
            
            <IndiaSpecialist />
            
            <IndiaKnowledgeHub />
            
            <IndiaFAQ />
            
            <IndiaFinalCTA />

            <Footer />
        </main>
    );
}
