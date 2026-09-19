import type { Metadata } from 'next';
import ConsultationPageEn from './page-en';
import ConsultationPageFr from './page-fr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' 
      ? 'Consultation Stratégique en Affaires – Seven Oak Prestige' 
      : 'Strategic Business Consultation – Seven Oak Prestige',
    description: locale === 'fr'
      ? 'Réservez une session de conseil stratégique avec Seven Oak Prestige. Conseils d\'experts sur la création d\'entreprise au Royaume-Uni, la structuration commerciale internationale, la configuration bancaire et la conformité pour les entrepreneurs mondiaux.'
      : 'Book a strategic advisory session with Seven Oak Prestige. Expert guidance on UK company formation, international business structuring, banking setup, and compliance for global entrepreneurs.',
    openGraph: {
        title: locale === 'fr' 
          ? 'Consultation Stratégique en Affaires – Seven Oak Prestige' 
          : 'Strategic Business Consultation – Seven Oak Prestige',
        description: locale === 'fr'
          ? 'Conseils d\'experts pour les entrepreneurs mondiaux. Obtenez des conseils sur mesure sur la création d\'entreprise au Royaume-Uni, la structuration commerciale internationale et la configuration bancaire fintech.'
          : 'Expert advisory for global entrepreneurs. Get tailored guidance on UK company formation, international business structuring, and fintech banking setup.',
        url: locale === 'fr' 
          ? 'https://www.sevenoakprestige.com/fr/consultation'
          : 'https://www.sevenoakprestige.com/consultation',
        type: 'website',
    },
    alternates: {
        canonical: "https://www.sevenoakprestige.com/consultation",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/consultation",
            "fr-FR": "https://www.sevenoakprestige.com/fr/consultation",
        },
    },
  };
}

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return (
        <>
            {locale === 'fr' ? <ConsultationPageFr /> : <ConsultationPageEn />}
        </>
    );
}
