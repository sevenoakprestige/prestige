import type { Metadata } from 'next';
import PartnersEn from './page-en';
import PartnersFr from './page-fr';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    const title = isFr
        ? 'Programme Partenaires Seven Oak Prestige | Création de Société UK'
        : 'UK Company Formation Partner Programme | Seven Oak Prestige';

    const description = isFr
        ? 'Devenez partenaire de Seven Oak Prestige : apporteur d\'affaires, revendeur ou marque blanche pour la création de société UK, domiciliation, conformité et comptabilité.'
        : 'Partner with Seven Oak Prestige for UK company formation, address, compliance, banking and accounting support. Referral, reseller and white-label options with no minimum volume.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isFr ? 'https://www.sevenoakprestige.com/fr/partners' : 'https://www.sevenoakprestige.com/partners',
            locale: isFr ? 'fr_FR' : 'en_GB',
        },
        alternates: {
            canonical: isFr ? 'https://www.sevenoakprestige.com/fr/partners' : 'https://www.sevenoakprestige.com/partners',
            languages: {
                en: 'https://www.sevenoakprestige.com/partners',
                fr: 'https://www.sevenoakprestige.com/fr/partners',
                'x-default': 'https://www.sevenoakprestige.com/partners',
            },
        },
    };
}

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <PartnersFr />;
    return <PartnersEn />;
}
