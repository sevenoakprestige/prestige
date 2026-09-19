// English translation dictionary
export type Locale = 'en' | 'fr';
import { servicesEn } from './services/en';
import { type ServicesTranslations } from './services/types';
import { resourcesEn } from './resources/en';
import { type ResourcesTranslation } from './resources/types';

export const en = {
  locale: 'en' as Locale,
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    companyChecker: 'Company Checker',
    pricing: 'Pricing',
    blogs: 'Blogs',
    countries: 'Countries',
    resources: 'Resources',
    connect: 'Connect',
    whatsapp: 'WhatsApp',
    switchLang: 'FR',
    switchLangLabel: 'Passer en français',
    addressServices: 'Address Services',
    companyServices: 'Company Services',
    executiveFrameworks: 'Executive Frameworks',
    internationalFounders: 'International Founders',
    getInTouch: 'Get in Touch',
    
    // Service links
    nonResidentsPackage: 'Non-Residents Package',
    chVerification: 'Companies House Verification',
    vatRegistration: 'VAT Registration',
    eoriRegistration: 'EORI Registration',
    fintechGuidance: 'Fintech & Payment Guidance',
    registeredOffice: 'UK Registered Office',
    serviceAddress: 'UK Service Address',
    businessAddress: 'UK Business Address',
    
    // Resources & Countries
    guidesAndInsights: 'Guides & Insights',
    bankingReadiness: 'UK Business Banking Readiness Assessment',
    france: 'France',
    india: 'India',
    contact: 'Contact',

    // Footer specific
    legal: 'Legal',
    useful: 'Useful',
    termsAndConditions: 'Terms & Conditions',
    refundPolicy: 'Refund Policy',
    privacyPolicy: 'Privacy Policy',
    trustAndSecurity: 'Trust & Security',
    bookConsultation: 'Book Consultation',
    sitemap: 'Sitemap',
    whatsappNow: 'WhatsApp Now',
    followUs: 'Follow us',
    allRightsReserved: 'All rights reserved.',
    footerDisclaimer: 'Seven Oak Prestige Ltd is not a law firm, accounting practice, or regulated financial institution. Information is provided for general guidance only.',
    visitsByAppointment: 'Visits by appointment only',
    registeredIn: 'Registered in England & Wales',
    unitedKingdom: 'United Kingdom',
    companyNo: 'Company No. 16903092',
    icoRegistration: 'ICO Registration No: ZC181349',
    googleReviews: 'Google Reviews',
  },
  hero: {
    eyebrow: 'UK Company Formation for Non-Residents',
    headline: 'Form Your UK Limited Company From Abroad',
    body: 'Set up remotely with support from a dedicated adviser. Every package includes Companies House incorporation and electronic company documents, with UK address services and additional support options available depending on your package.',
    subBody: 'Most standard incorporations can be completed within 1–2 business days after the required information and verification are complete, subject to Companies House processing and approval.',
    cta1: 'Compare Packages',
    cta2: 'Ask an Adviser on WhatsApp',
    bullets: [
      'No UK travel required',
      'Companies House fee included',
      'Secure onboarding',
      'Human adviser support',
    ],
    disclaimer: 'Subject to complete information, identity checks and Companies House processing.',
  },
  trust: [
    ['UK-Registered Provider', 'Seven Oak Prestige Ltd — verify us at Companies House, No. 16903092'],
    ['A Real Adviser, Not a Form', 'One named London adviser checks your file before it is filed'],
    ['5.0 / 5 on Google', 'The highest possible rating, backed by genuine client feedback'],
    ['One Price, Shown Up Front', 'Government filing fee included; renewal prices shown before you pay'],
  ],
  testimonials: {
    eyebrow: 'Client reviews',
    headline: 'Trusted by International Founders',
    body: 'Real feedback from clients who have worked with Seven Oak Prestige.',
    onGoogle: 'on Google',
    googleReview: 'Google review',
    viewAll: 'View all Google reviews',
    prev: 'Previous reviews',
    next: 'Next reviews',
  },
  pricing: {
    eyebrow: 'Packages',
    headline: 'Fixed pricing. Everything stated up front.',
    providerNote: 'Providers considered',
    providerDisclaimer: 'Provider availability depends on founder residence, business activity, ownership, KYC and individual eligibility. Final approval remains with the provider.',
    askExpert: 'Have a question? Talk to an expert',
    financialDisclaimer: "Financial-provider approval is not guaranteed and remains subject to each provider's eligibility, KYC and risk assessment.",
    termsText: 'Prices, renewals and cancellation terms are shown clearly before purchase. See our',
    terms: 'Terms',
    and: 'and',
    refundPolicy: 'Refund Policy',
    plans: [
      {
        name: "Starter",
        note: "Formation only — for founders who already have suitable UK address arrangements.",
        features: [
            "UK company formation",
            "Companies House filing",
            "Digital company documents",
            "Key compliance reminders",
        ],
        cta: "Choose Starter",
      },
      {
        name: "Prestige",
        note: "The natural choice for most non-residents: formation plus UK address infrastructure.",
        features: [
            "Everything in Starter",
            "Registered Office — 12 months",
            "Director Service Address — 12 months",
            "Eligible mail handling and scanning according to service scope",
            "Annual compliance support according to package scope",
        ],
        cta: "Choose Prestige",
        tag: "Recommended for non-resident founders",
      },
      {
        name: "Elite",
        note: "Prestige plus enhanced identity-verification and banking-readiness assistance.",
        features: [
            "Everything in Prestige",
            "Virtual business address for 12 months",
            "High priority support",
            "Direct banking & EMI assistance where applicable",
            "Compliance assistance",
        ],
        footnote: "One director included. Additional directors or relevant persons are handled separately.",
        cta: "Choose Elite",
        tag: "Most comprehensive",
      }
    ]
  },
  identity: {
      eyebrow: 'Verification',
      heading: 'Companies House Identity Verification & Personal Code Assistance — £74',
      body1: 'Relevant directors and People with Significant Control may need to complete Companies House identity verification and obtain their Companies House personal code. We provide guided assistance for directors, PSCs and non-UK residents, with the required evidence confirmed for each applicant and verification route.',
      steps: ["Identity", "Verification", "Personal Code", "Incorporation"],
      body2: 'KYC onboarding and Companies House statutory identity verification are separate processes.',
      cta: 'View Verification Assistance — £74'
  },
  banking: {
      eyebrow: 'Banking readiness',
      heading: 'Prepare Your Company for Banking and Payments',
      body1: 'We assess your founder and business profile, help prepare a consistent application and support the document review for suitable providers. Providers considered may include {providers}.',
      body2: 'Banking and payment-provider approval cannot be guaranteed. Final decisions remain with each provider and depend on residence, activity, ownership, KYC and risk assessment.',
      cta: 'Prepare My Banking Profile'
  },
  success: {
    caption: 'A genuine Seven Oak international-founder case.',
    eyebrow: 'Client case study',
    headline: 'Almataev — Forming a UK Company from Thailand',
    body1: 'Almataev, a Russian founder residing in Thailand, needed a compliant UK company structure for an international digital business without travelling to the UK.',
    challenge: 'The challenge',
    challengeText: 'Complete onboarding from abroad, including review of the relevant Thailand residence evidence.',
    support: 'Our support',
    supportText: 'KYC and document review, structure preparation, Companies House submission, post-incorporation guidance and banking-readiness support.',
    outcome: 'The outcome',
    outcomeText: 'The UK company was incorporated in approximately two business days after the required information and verification were complete.',
    disclaimer: 'This is a genuine client scenario. Timelines vary with document completeness, required checks and Companies House processing.',
    cta: 'Compare Packages'
  },
  renewals: {
    eyebrow: 'Renewals',
    headline: 'Clear Year-Two Address Pricing',
    body: 'No surprise renewals. These address-service prices apply from year two and are shown before purchase.',
    serviceLabel: 'Service',
    initialPeriod: 'Initial period',
    renewal: 'Renewal',
    initialPeriodMobile: 'Initial period:',
    renewalMobile: 'Renewal:',
    items: [
      ['Registered Office', 'Prestige and Elite · 12 months', '£59 / year'],
      ['Director Service Address', 'Prestige and Elite · 12 months', '£35 / year'],
      ['Virtual Business Address', 'Elite · 12 months', '£150 / year'],
    ],
  },
  afterPayment: {
    eyebrow: 'After payment',
    headline: 'Know Exactly What Happens Next',
    body: 'Your order moves straight into a clear, secure onboarding process. Nothing is filed until the required information and checks are complete.',
    steps: [
      ['01', 'Instant confirmation', 'Your payment and selected package are confirmed by email.'],
      ['02', 'Account created', 'Your secure client portal account is created for you.'],
      ['03', 'Welcome email', 'You receive clear instructions and the documents required for your case.'],
      ['04', 'Secure onboarding', 'Complete the form and upload your identity and address evidence.'],
      ['05', 'Adviser review', 'A named adviser checks the details and asks for clarification only when needed.'],
      ['06', 'Filing', 'Once the required checks are complete, we prepare and submit the incorporation.'],
    ],
  },
  services: {
    eyebrow: 'Scope of service',
    headline: 'What Is Included in Your UK Company Setup?',
    items: [
      ['Company Incorporation', 'Preparation and submission of your company incorporation to Companies House.'],
      ['Company Documents', 'Certificate of Incorporation, Memorandum & Articles, Share Certificate, Company Register.'],
      ['KYC & Onboarding Review', 'We review the identification, proof-of-address and onboarding information required for our compliance and company-formation process.'],
      ['UK Address Services', 'A London registered office and director service address, so your home address stays off the public register.'],
      ['Mail Handling', 'Your company mail is received in London, checked and scanned to you by email.'],
      ['Banking Readiness', 'We prepare your business profile and documents so applications are not rejected on avoidable detail.'],
      ['Compliance Support', 'Filing reminders before deadlines, and clear guidance on what to do after incorporation.'],
    ],
  },
  why: {
    eyebrow: 'Why Seven Oak',
    headline: 'More Than an Incorporation Platform',
    body: 'One named adviser stays with you throughout your setup, from the first review to your post-incorporation next steps.',
    items: [
      ['UK-Based Advisory Firm', 'Deal directly with Seven Oak Prestige Ltd, a registered UK company.'],
      ['Human Review', 'A named adviser reviews your residence, activity, ownership and company details before filing.'],
      ['Built for Non-Residents', 'Remote onboarding, UK address options and document checks are designed around international founders.'],
      ['Beyond Incorporation', 'Prestige and Elite add address, mail, verification and banking-readiness support where required.'],
    ],
  },
  howItWorks: {
    eyebrow: 'Process & Timeline',
    heading: 'Clear Expectations, No Ambiguity',
    whatYouDo: 'What you do',
    whatHappensNext: 'What happens next',
    steps: [
      {
        n: '01',
        title: 'Choose Your Package & Confirm Your Company Name',
        duration: 'Approx. 10 minutes',
        youDo: ['Check your company name', 'Select your package', 'Pay securely online'],
        happensNext: ['Confirmation email', 'Secure onboarding form', 'Next-step instructions'],
      },
      {
        n: '02',
        title: 'Complete Your KYC & Onboarding',
        duration: 'Approx. 20–30 minutes for most standard cases',
        youDo: [
          'Upload passport and proof of address',
          'Complete the secure onboarding form',
          'Provide director, shareholder and PSC information',
        ],
        happensNext: [
          'Seven Oak reviews your file',
          'Clarifications requested only if needed',
          'File prepared for submission',
        ],
      },
      {
        n: '03',
        title: 'We Review & Submit to Companies House',
        duration: 'Typically 1–2 business days for standard incorporations',
        youDo: ['Confirm final company details', 'Respond promptly if clarification is required'],
        happensNext: [
          'Incorporation submitted to Companies House',
          'Companies House processes the application',
          'Seven Oak monitors the submission',
        ],
      },
      {
        n: '04',
        title: 'Receive Your Company Documents & Next Steps',
        duration: 'On successful incorporation',
        youDo: ['Download your electronic company documents', 'Review your post-incorporation checklist'],
        happensNext: [
          'Certificate of Incorporation delivered',
          'Share Certificate and Company Register sent',
          'Practical next-step guidance provided',
        ],
      },
    ],
    footer: 'Timings are indicative and subject to complete information, verification and Companies House processing. Complex cases may take longer.',
  },
  deliverables: {
    eyebrow: 'What you receive',
    headline: 'Your Company Documentation',
    items: [
      ['Certificate of Incorporation', 'Issued by Companies House after successful incorporation.'],
      ['Memorandum & Articles of Association', "Your company's constitutional documents."],
      ['Share Certificate', 'Issued for the shareholder(s) according to the agreed allocation.'],
      ['Company Register', 'A structured record of ownership and key corporate information.'],
      ['Company Number', 'Issued on incorporation and shown on the public register.'],
      ['UTR Support', 'The Corporation Tax UTR is forwarded when received from HMRC.'],
    ],
  },
  guidance: {
    eyebrow: 'Guidance',
    headline: 'Guidance for International Founders',
    exploreAll: 'Explore All Countries',
    guides: [
      ['India', 'UK company formation for Indian founders.'],
      ['France', 'Créer une société UK depuis la France.'],
    ],
  },
  
  mailHandling: {
    eyebrow: 'Address & correspondence',
    headline: 'Your UK Mail, Accessible From Anywhere',
    body: 'Where included in your package, eligible company correspondence received at your Seven Oak address is identified and transmitted electronically according to the service scope. You do not need to travel to London to monitor it.',
    steps: [
      ['01', 'Mail Arrives in London', 'Eligible correspondence is received at the Seven Oak address.'],
      ['02', 'We Identify and Review It', 'Mail is matched to your company and checked for relevance.'],
      ['03', 'Scanned & Transmitted Digitally', 'Where included in your package, eligible mail is scanned and transmitted electronically.'],
    ],
    flow: ['Mail received in London', 'Reviewed', 'Eligible mail scanned', 'Transmitted digitally']
  },
  faq: {
    eyebrow: 'Common questions',
    headline: 'Answers before you commit.',
    items: [
      { q: 'Is this legal for non-residents?', a: 'Yes. UK residency is not generally required to own shares in or act as a director of a UK private limited company. The incorporation remains subject to Companies House requirements, identity verification and applicable eligibility rules.' },
      { q: 'How is my identity verified?', a: 'Your identity is verified through our secure KYC process using trusted third-party identity verification providers, including Credas and Onfido, where appropriate.' },
      { q: 'What do I need to provide?', a: 'For a standard application, we normally require: a valid passport or eligible identity document; proof of your current residential address; your proposed company name; and a clear description of the business activities you intend to carry out.' },
      { q: 'How long does company registration take?', a: 'Once your KYC verification has been successfully completed and we have received the required company information, a standard UK company incorporation typically takes 1–2 business days.' },
      { q: 'What happens if my application is rejected?', a: 'Rejections are usually caused by a name conflict or a document issue. We tell you the reason, correct the filing and resubmit at no extra service fee. If the company genuinely cannot be formed, our refund policy applies.' },
      { q: 'Will my home address appear on the public register?', a: "A director's residential address is generally kept private where a separate service address is used. The company must still maintain an appropriate registered office, which appears on the public register." },
      { q: 'Can I open a UK business bank account?', a: 'Potentially. Eligibility depends on the provider, founder residence, business activity, KYC, source of funds and expected transactions. Forming a UK company does not guarantee banking approval.' },
      { q: 'Do you help with banking and fintech applications?', a: 'Yes. We provide banking-readiness and application support where included in your package or purchased separately. Final approval is always made by the financial provider.' },
      { q: 'Are there hidden or renewal fees?', a: 'No. Package prices are fixed and stated up front, including the Companies House incorporation fee. Address services renew annually at the published rates.' },
    ],
  },
  relatedServices: {
    eyebrow: 'Related Services',
    headline: 'Other Services You Might Need',
    items: [
      { title: "Virtual Business Address", body: "A premium London address for your company’s everyday business and marketing needs.", href: "/services/virtual-business-address" },
      { title: "VAT Registration", body: "Professional assistance with HMRC VAT registration and ongoing compliance support.", href: "/services/vat-registration-uk" },
      { title: "Non-Residents Package", body: "Complete company formation, address services and verification for international founders.", href: "/services/uk-company-formation-for-non-residents" }
    ],
  },
  servicesPages: servicesEn,
  resourcesPages: resourcesEn,
  cta: {
    headline: 'Ready to Form Your UK Company?',
    body: 'Choose the package that fits your needs and complete the process remotely with adviser support. Companies House filing is included, with UK address and additional compliance support available depending on your package.',
    cta1: 'See Packages — From £199',
    cta2: 'Ask an Adviser on WhatsApp',
  },
  langBanner: {
    message: 'Ce site est disponible en français.',
    switchTo: 'Voir en français',
    dismiss: 'Non merci',
  },
} as const;

export type Translations = {
  locale: Locale;
  nav: {
    home: string; about: string; services: string; companyChecker: string;
    pricing: string; blogs: string; countries: string; resources: string;
    connect: string; whatsapp: string; switchLang: string; switchLangLabel: string;
    addressServices: string; companyServices: string; executiveFrameworks: string;
    internationalFounders: string; getInTouch: string;
    nonResidentsPackage: string; chVerification: string; vatRegistration: string;
    eoriRegistration: string; fintechGuidance: string; registeredOffice: string;
    serviceAddress: string; businessAddress: string; guidesAndInsights: string;
    bankingReadiness: string; france: string; india: string; contact: string;
    legal: string; useful: string; termsAndConditions: string; refundPolicy: string; privacyPolicy: string;
    trustAndSecurity: string; bookConsultation: string; sitemap: string;
    whatsappNow: string; followUs: string; allRightsReserved: string;
    footerDisclaimer: string; visitsByAppointment: string;
    registeredIn: string; unitedKingdom: string; companyNo: string;
    icoRegistration: string; googleReviews: string;
  };
  hero: {
    eyebrow: string; headline: string; body: string; subBody: string;
    cta1: string; cta2: string; bullets: readonly string[]; disclaimer: string;
  };
  trust: readonly (readonly string[])[];
  testimonials: {
    eyebrow: string;
    headline: string;
    body: string;
    onGoogle: string;
    googleReview: string;
    viewAll: string;
    prev: string;
    next: string;
  };
  pricing: {
    eyebrow: string; headline: string; providerNote: string; providerDisclaimer: string;
    askExpert: string; financialDisclaimer: string; termsText: string;
    terms: string; and: string; refundPolicy: string;
    plans: readonly {
      name: string;
      note: string;
      features: readonly string[];
      cta: string;
      tag?: string;
      footnote?: string;
    }[];
  };
  renewals: {
    eyebrow: string; headline: string; body: string; serviceLabel: string;
    initialPeriod: string; renewal: string; initialPeriodMobile: string; renewalMobile: string;
    items: readonly (readonly string[])[];
  };
  afterPayment: {
    eyebrow: string; headline: string; body: string;
    steps: readonly (readonly string[])[];
  };
  services: {
    eyebrow: string; headline: string;
    items: readonly (readonly string[])[];
  };
  identity: {
    eyebrow: string; heading: string; body1: string; steps: readonly string[]; body2: string; cta: string;
  };
  banking: {
    eyebrow: string; heading: string; body1: string; body2: string; cta: string;
  };
  success: {
    caption: string; eyebrow: string; headline: string; body1: string; challenge: string; challengeText: string; support: string; supportText: string; outcome: string; outcomeText: string; disclaimer: string; cta: string;
  };
  why: {
    eyebrow: string; headline: string; body: string;
    items: readonly (readonly string[])[];
  };
  howItWorks: {
    eyebrow: string; heading: string; whatYouDo: string; whatHappensNext: string;
    steps: readonly {
      n: string; title: string; duration: string;
      youDo: readonly string[]; happensNext: readonly string[];
    }[];
    footer: string;
  };
  deliverables: {
    eyebrow: string; headline: string;
    items: readonly (readonly string[])[];
  };
  guidance: {
    eyebrow: string; headline: string; exploreAll: string;
    guides: readonly (readonly string[])[];
  };
  mailHandling: { eyebrow: string; headline: string; body: string; steps: readonly (readonly string[])[]; flow: readonly string[] };
  faq: {
    eyebrow: string; headline: string;
    items: readonly { q: string; a: string }[];
  };
  relatedServices: {
    eyebrow: string; headline: string;
    items: readonly { title: string; body: string; href: string }[];
  };
  servicesPages: ServicesTranslations;
  resourcesPages: ResourcesTranslation;
  cta: { headline: string; body: string; cta1: string; cta2: string };
  langBanner: { message: string; switchTo: string; dismiss: string };
};
