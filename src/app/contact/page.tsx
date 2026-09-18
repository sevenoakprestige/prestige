import { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
    title: 'Contact Us | Seven Oak Prestige',
    description: 'Get in touch with Seven Oak Prestige for all your UK company formation and business support needs.',
    alternates: {
        canonical: "https://www.sevenoakprestige.com/contact",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/contact",
            "fr-FR": "https://www.sevenoakprestige.com/fr/contact",
        },
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 bg-background">
            <Contact />
        </main>
    );
}
