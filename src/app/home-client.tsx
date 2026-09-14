'use client';

import './globals.css';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Pricing from '../components/Pricing';
import Renewals from '../components/Renewals';
import AfterPayment from '../components/AfterPayment';
import CompanyChecker from '../components/CompanyChecker';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import MailHandling from '../components/MailHandling';
import IdentityVerification from '../components/IdentityVerification';
import BankingReadiness from '../components/BankingReadiness';
import Deliverables from '../components/Deliverables';
import SuccessStories from '../components/SuccessStories';
import Guidance from '../components/Guidance';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-background">
            <Hero />
            <TrustSection />
            <Pricing />
            <Renewals />
            <AfterPayment />
            <CompanyChecker />
            <Testimonials />
            <WhyChooseUs />
            <HowItWorks />
            <Services />
            <MailHandling />
            <IdentityVerification />
            <BankingReadiness />
            <Deliverables />
            <SuccessStories />
            <Guidance />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
}
