import type { Metadata } from 'next';
import RefundPolicyEn from './page-en';
import RefundPolicyFr from './page-fr';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? 'Politique de Remboursement et d\'Annulation – Seven Oak Prestige'
        : 'Refund & Cancellation Policy – Seven Oak Prestige';

    const description = isFr
        ? 'Consultez la politique de remboursement et d\'annulation de Seven Oak Prestige : conditions applicables, prestations non remboursables et critères d\'éligibilité.'
        : 'Read the Seven Oak Prestige Refund and Cancellation Policy. Understand our service terms, non-refundable services, and eligibility conditions before purchasing.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isFr ? 'https://www.sevenoakprestige.com/fr/refund' : 'https://www.sevenoakprestige.com/refund',
            locale: isFr ? 'fr_FR' : 'en_GB',
        },
        alternates: {
            canonical: isFr ? 'https://www.sevenoakprestige.com/fr/refund' : 'https://www.sevenoakprestige.com/refund',
            languages: {
                en: 'https://www.sevenoakprestige.com/refund',
                fr: 'https://www.sevenoakprestige.com/fr/refund',
                'x-default': 'https://www.sevenoakprestige.com/refund',
            },
        },
    };
}

export default async function RefundPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <RefundPolicyFr />;
    }
    
    return <RefundPolicyEn />;
}
