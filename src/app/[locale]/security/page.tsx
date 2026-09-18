import type { Metadata } from 'next';
import SecurityEn from './page-en';
import SecurityFr from './page-fr';

export const metadata: Metadata = {
    title: 'Security & Compliance – Seven Oak Prestige',
    description: 'Learn about our bank-grade security infrastructure, anti-fraud measures, and strict compliance with UK regulations including AML and GDPR.',
    openGraph: {
        title: 'Security & Compliance – Seven Oak Prestige',
        description: 'Bank-grade security and strict UK compliance for your business.',
        url: 'https://www.sevenoakprestige.com/security',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/security',
    },
};

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <SecurityFr />;
    return <SecurityEn />;
}
