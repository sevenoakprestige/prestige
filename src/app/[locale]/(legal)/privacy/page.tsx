import type { Metadata } from 'next';
import PrivacyPolicyEn from './page-en';
import PrivacyPolicyFr from './page-fr';

export const metadata: Metadata = {
    title: 'Privacy Policy – Seven Oak Prestige',
    description: 'Read the Seven Oak Prestige Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.',
    openGraph: {
        title: 'Privacy Policy – Seven Oak Prestige',
        description: 'How Seven Oak Prestige collects, uses, and protects your data in compliance with UK GDPR.',
        url: 'https://www.sevenoakprestige.com/privacy',
    },
    robots: { index: false, follow: true },
};

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <PrivacyPolicyFr />;
    }
    
    return <PrivacyPolicyEn />;
}
