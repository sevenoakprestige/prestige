import type { Metadata } from 'next';
import StrategicAdvisorySection from '@/components/consultation/StrategicAdvisorySection';
import AdvisoryServices from '@/components/consultation/AdvisoryServices';
import HowEngagementWorks from '@/components/consultation/HowEngagementWorks';
import WhatYouWillGet from '@/components/consultation/WhatYouWillGet';
import WhoThisIsFor from '@/components/consultation/WhoThisIsFor';
import WhoThisIsNotFor from '@/components/consultation/WhoThisIsNotFor';
import ConsultationFooter from '@/components/consultation/ConsultationFooter';

export const metadata: Metadata = {
    title: 'Strategic Business Consultation – Seven Oak Prestige',
    description: 'Book a strategic advisory session with Seven Oak Prestige. Expert guidance on UK company formation, international business structuring, banking setup, and compliance for global entrepreneurs.',
    openGraph: {
        title: 'Strategic Business Consultation – Seven Oak Prestige',
        description: 'Expert advisory for global entrepreneurs. Get tailored guidance on UK company formation, international business structuring, and fintech banking setup.',
        url: 'https://www.sevenoakprestige.com/consultation',
        type: 'website',
    },
};

export default function ConsultationPage() {
    return (
        <>
            <StrategicAdvisorySection />
            <AdvisoryServices />
            <HowEngagementWorks />
            <WhatYouWillGet />
            <WhoThisIsFor />
            {/* <WhoThisIsNotFor /> */}
            <ConsultationFooter />
        </>
    );
}
