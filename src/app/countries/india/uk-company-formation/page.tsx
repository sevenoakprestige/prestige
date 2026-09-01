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
import IndiaGoogleReviews from "./components/IndiaGoogleReviews";

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
            
            <CompanyChecker />

            <IndiaGoogleReviews />

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
