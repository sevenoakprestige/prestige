'use client';

import './globals.css';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import CompanyChecker from '../components/CompanyChecker';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-background">
            <Hero />
            <TrustSection />
            <CompanyChecker />
            <Testimonials />
            <WhyChooseUs />
            <Services />
            <HowItWorks />
            <Pricing />
            <SuccessStories />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
}
