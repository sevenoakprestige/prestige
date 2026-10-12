import type { Metadata } from 'next';
import TermsEn from './page-en';
import TermsFr from './page-fr';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? 'Conditions Générales de Vente – Seven Oak Prestige'
        : 'Terms & Conditions – Seven Oak Prestige';

    const description = isFr
        ? 'Consultez les Conditions Générales de Vente de Seven Oak Prestige Ltd régissant nos services de création d\'entreprise et domiciliation.'
        : 'Read the Terms and Conditions for Seven Oak Prestige Ltd. Understand your rights and obligations when using our UK company formation, address, and advisory services.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isFr ? 'https://www.sevenoakprestige.com/fr/terms' : 'https://www.sevenoakprestige.com/terms',
            locale: isFr ? 'fr_FR' : 'en_GB',
        },
        alternates: {
            canonical: isFr ? 'https://www.sevenoakprestige.com/fr/terms' : 'https://www.sevenoakprestige.com/terms',
            languages: {
                en: 'https://www.sevenoakprestige.com/terms',
                fr: 'https://www.sevenoakprestige.com/fr/terms',
                'x-default': 'https://www.sevenoakprestige.com/terms',
            },
        },
    };
}

export default async function TermsAndConditions({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    if (locale === 'fr') {
        return <TermsFr />;
    }
    
    return <TermsEn />;
}
