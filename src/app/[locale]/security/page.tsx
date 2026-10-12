import type { Metadata } from 'next';
import SecurityEn from './page-en';
import SecurityFr from './page-fr';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? 'Sécurité & Conformité – Seven Oak Prestige'
        : 'Security & Compliance – Seven Oak Prestige';

    const description = isFr
        ? 'Infrastructure de sécurité de niveau bancaire, lutte anti-fraude et conformité stricte aux réglementations britanniques (AML & RGPD).'
        : 'Learn about our bank-grade security infrastructure, anti-fraud measures, and strict compliance with UK regulations including AML and GDPR.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isFr ? 'https://www.sevenoakprestige.com/fr/security' : 'https://www.sevenoakprestige.com/security',
            locale: isFr ? 'fr_FR' : 'en_GB',
        },
        alternates: {
            canonical: isFr ? 'https://www.sevenoakprestige.com/fr/security' : 'https://www.sevenoakprestige.com/security',
            languages: {
                en: 'https://www.sevenoakprestige.com/security',
                fr: 'https://www.sevenoakprestige.com/fr/security',
                'x-default': 'https://www.sevenoakprestige.com/security',
            },
        },
    };
}

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <SecurityFr />;
    return <SecurityEn />;
}
