export interface ServicesTranslations {
  nonResidents: {
    hero: { badge: string; eyebrow: string; title: string; titleHighlight: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    eligibility: { eyebrow: string; title: string; bigYes: string; paragraphs: readonly string[] };
    globalReach: { eyebrow: string; title: string; desc: string; countries: readonly string[]; footer: string };
    whyChoose: { eyebrow: string; title: string; items: readonly { title: string; desc: string }[] };
    documents: { eyebrow: string; title: string; items: readonly { title: string; desc: string }[]; footer: string };
    process: { eyebrow: string; title: string; stepLabel: string; items: readonly { title: string; desc: string }[] };
    banking: { eyebrow: string; title: string; paragraphs: readonly string[] };
    whyUs: { eyebrow: string; title: string; paragraphs: readonly string[] };
    faq: { eyebrow: string; title: string; items: readonly { q: string; a: string }[] };
    relatedServices: { eyebrow: string; title: string; learnMore: string; items: readonly { title: string; desc: string }[] };
    cta: { title: string; desc1: string; desc2: string; btn: string; whatsappLabel: string };
  };
  companiesHouseVerification: {
    hero: { badge: string; eyebrow: string; title: string; titleHighlight: string; subtitle: string; btn1: string; btn2: string };
    whatIs: { eyebrow: string; title: string; paragraphs: readonly string[] };
    whatsIncluded: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  vatRegistration: {
    hero: { badge: string; title: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
    whatsIncluded: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  eoriRegistration: {
    hero: { badge: string; title: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
    whatsIncluded: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  fintechBankingGuidance: {
    hero: { badge: string; title: string; subtitle: string; btn1: string };
    bottomBar: readonly { title: string; desc: string }[];
    overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
    platforms: { eyebrow: string; title: string; items: readonly { title: string; desc: string }[] };
    whatsIncluded: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  registeredOffice: {
    hero: { badge: string; title: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    privacy: { eyebrow: string; title: string; paragraphs: readonly string[] };
    whatsIncluded: { eyebrow: string; title: string; items: readonly string[] };
    benefits: { eyebrow: string; title: string; items: readonly { title: string; desc: string }[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  directorServiceAddress: {
    hero: { badge: string; title: string; titleHighlight: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    privacy: { eyebrow: string; title: string; paragraphs: readonly string[] };
    compliance: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  virtualBusinessAddress: {
    hero: { badgeTop: string; badge: string; title: string; titleHighlight: string; subtitle: string; btn1: string; btn2: string };
    bottomBar: readonly { title: string; desc: string }[];
    branding: { eyebrow: string; title: string; paragraphs: readonly string[] };
    useCases: { eyebrow: string; title: string; items: readonly string[] };
    cta: { title: string; subtitle: string; btn: string; whatsappLabel: string };
  };
  companiesHouseIdentityVerification: {
    meta: { title: string; description: string; ogTitle: string; ogDescription: string };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      description: string;
      btn1: string;
      btn2: string;
      asideEyebrow: string;
      asideFee: string;
      asideFeeLabel: string;
      asideTiming: string;
    };
    audiences: { eyebrow: string; title: string; items: readonly string[] };
    scope: { eyebrow: string; title: string; items: readonly string[]; disclaimer: string };
    personalCode: { eyebrow: string; title: string; subtitle: string; paragraphs: readonly string[]; note: string };
    international: { eyebrow: string; title: string; paragraphs: readonly string[] };
    steps: { eyebrow: string; title: string; items: readonly { title: string; desc: string }[]; timingInfo: string };
    requirements: { eyebrow: string; title: string; subtitle: string; items: readonly string[] };
    dataProtection: { eyebrow: string; title: string; items: readonly string[]; links: { privacy: string; dataProtection: string } };
    faq: { eyebrow: string; title: string };
    cta: { eyebrow: string; title: string; subtitle: string; btn1: string; btn2: string };
  };
}
