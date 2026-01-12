'use client';

import StrategicAdvisorySection from '@/components/consultation/StrategicAdvisorySection';
import AdvisoryServices from '@/components/consultation/AdvisoryServices';
import HowEngagementWorks from '@/components/consultation/HowEngagementWorks';
import WhatYouWillGet from '@/components/consultation/WhatYouWillGet';
import WhoThisIsFor from '@/components/consultation/WhoThisIsFor';
import WhoThisIsNotFor from '@/components/consultation/WhoThisIsNotFor';

export default function ConsultationPage() {
    return (
        <>
            <StrategicAdvisorySection />
            <AdvisoryServices />
            <HowEngagementWorks />
            <WhatYouWillGet />
            <WhoThisIsFor />
            <WhoThisIsNotFor />
        </>
    );
}
