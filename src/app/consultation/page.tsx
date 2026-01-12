'use client';

import StrategicAdvisorySection from '@/components/StrategicAdvisorySection';
import AdvisoryServices from '@/components/AdvisoryServices';
import HowEngagementWorks from '@/components/HowEngagementWorks';
import WhatYouWillGet from '@/components/WhatYouWillGet';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import WhoThisIsNotFor from '@/components/WhoThisIsNotFor';

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
