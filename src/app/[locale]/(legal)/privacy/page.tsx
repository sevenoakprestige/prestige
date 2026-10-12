import type { Metadata } from 'next';
import PrivacyPolicyEn from './page-en';
import PrivacyPolicyFr from './page-fr';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? 'Politique de Confidentialité – Seven Oak Prestige'
        : 'Privacy Policy – Seven Oak Prestige';

    const description = isFr
        ? 'Consultez la Politique de Confidentialité de Seven Oak Prestige : collecte, utilisation et protection des données personnelles selon le RGPD britannique.'
        : 'Read the Seven Oak Prestige Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isFr ? 'https://www.sevenoakprestige.com/fr/privacy' : 'https://www.sevenoakprestige.com/privacy',
            locale: isFr ? 'fr_FR' : 'en_GB',
        },
        alternates: {
            canonical: isFr ? 'https://www.sevenoakprestige.com/fr/privacy' : 'https://www.sevenoakprestige.com/privacy',
            languages: {
                en: 'https://www.sevenoakprestige.com/privacy',
                fr: 'https://www.sevenoakprestige.com/fr/privacy',
                'x-default': 'https://www.sevenoakprestige.com/privacy',
            },
        },
    };
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <PrivacyPolicyFr />;
    }
    
    return <PrivacyPolicyEn />;
}
