import StrategicAdvisorySectionFR from '@/components/consultation/StrategicAdvisorySectionFR';
import AdvisoryServicesFR from '@/components/consultation/AdvisoryServicesFR';
import HowEngagementWorksFR from '@/components/consultation/HowEngagementWorksFR';
import WhatYouWillGetFR from '@/components/consultation/WhatYouWillGetFR';
import WhoThisIsForFR from '@/components/consultation/WhoThisIsForFR';
import ConsultationFooterFR from '@/components/consultation/ConsultationFooterFR';

export default function ConsultationPageFr() {
    return (
        <>
            <StrategicAdvisorySectionFR />
            <AdvisoryServicesFR />
            <HowEngagementWorksFR />
            <WhatYouWillGetFR />
            <WhoThisIsForFR />
            <ConsultationFooterFR />
        </>
    );
}
