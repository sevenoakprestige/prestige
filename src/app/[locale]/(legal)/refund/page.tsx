import type { Metadata } from 'next';
import RefundPolicyEn from './page-en';
import RefundPolicyFr from './page-fr';

export const metadata: Metadata = {
    title: 'Refund & Cancellation Policy – Seven Oak Prestige',
    description: 'Read the Seven Oak Prestige Refund and Cancellation Policy. Understand our service terms, non-refundable services, and eligibility conditions before purchasing.',
    openGraph: {
        title: 'Refund & Cancellation Policy – Seven Oak Prestige',
        description: 'Refund and cancellation terms for Seven Oak Prestige Ltd company formation and business services.',
        url: 'https://www.sevenoakprestige.com/refund',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/refund',
    },
};

export default async function RefundPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <RefundPolicyFr />;
    }
    
    return <RefundPolicyEn />;
}
