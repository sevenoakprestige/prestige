import type { Metadata } from 'next';
import TermsEn from './page-en';
import TermsFr from './page-fr';

export const metadata: Metadata = {
    title: 'Terms & Conditions – Seven Oak Prestige',
    description: 'Read the Terms and Conditions for Seven Oak Prestige Ltd. Understand your rights and obligations when using our UK company formation, address, and advisory services.',
    openGraph: {
        title: 'Terms & Conditions – Seven Oak Prestige',
        description: 'Terms and Conditions governing the use of Seven Oak Prestige company formation and business address services.',
        url: 'https://www.sevenoakprestige.com/terms',
    },
    robots: { index: false, follow: true },
};

export default async function TermsAndConditions({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <TermsFr />;
    }
    
    return <TermsEn />;
}
