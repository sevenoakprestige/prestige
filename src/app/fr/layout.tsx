import type { Metadata } from 'next';
import { fr } from '@/i18n/fr';

export const metadata: Metadata = {
  title: 'Création de société UK pour non-résidents | Seven Oak Prestige',
  description: 'Créez votre société britannique à distance depuis la France ou l\'étranger. Immatriculation Companies House, adresse londonnienne, conseiller dédié. Traitement en 1 à 2 jours ouvrables.',
  alternates: {
    canonical: 'https://www.sevenoakprestige.com/fr',
    languages: {
      'en': 'https://www.sevenoakprestige.com',
      'fr': 'https://www.sevenoakprestige.com/fr',
    },
  },
  openGraph: {
    locale: 'fr_FR',
    alternateLocale: 'en_GB',
    title: 'Création de société UK pour non-résidents | Seven Oak Prestige',
    description: 'Créez votre société britannique depuis la France. Immatriculation Companies House, adresse londonienne et conseiller dédié.',
    url: 'https://www.sevenoakprestige.com/fr',
    siteName: 'Seven Oak Prestige',
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
