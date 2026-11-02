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
    partners: 'Partners',
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
    chVerification: 'Identity Verification',
    vatRegistration: 'VAT Registration',
    eoriRegistration: 'EORI Registration',
    fintechGuidance: 'Fintech & Payment Guidance',
    registeredOffice: 'Registered Office Address',
    serviceAddress: 'Director Service Address',
    businessAddress: 'Virtual Business Address',
    accounting: 'UK Accounting Services',
    nomineeDirector: 'UK Nominee Director Service',
    shelfCompany: 'Buy a UK Shelf Company',
    
    // Resources & Countries
    guidesAndInsights: 'Guides & Insights',
    bankingReadiness: 'UK Business Banking Readiness Assessment',
    france: 'France',
    india: 'India',
    iraq: 'Iraq (العراق)',
    germany: 'Germany',
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
    eyebrow: 'UK company formation for international and non-resident founders — from £199, including the Companies House filing fee.',
    headline: 'Form Your UK Limited Company Online',
    body: 'Register your UK limited company with clear, fixed pricing and a dedicated adviser reviewing your company details before submission. Choose the UK address services you need, complete secure onboarding, and receive practical guidance beyond incorporation.',
    subBody: 'Already have a UK company? Explore our compliance, address and banking-readiness support.',
    cta1: 'Check Your Company Name',
    cta2: 'Compare Formation Packages',
    bullets: [
      'No UK travel required',
      'Companies House fee included',
      'Secure onboarding',
      'Human adviser support',
    ],
    disclaimer: 'No UK travel required for standard online incorporation. Subject to identity verification, complete documentation and Companies House approval.',
  },
  trust: [
    ['Human Review', 'A dedicated adviser reviews your company details before submission.'],
    ['Transparent Prices', 'Formation from £199, filing fee included; address options and renewals stated separately.'],
    ['Post-Incorporation Support', 'Practical next-step guidance, with ongoing services scoped to your company’s needs.'],
  ],
  testimonials: {
    eyebrow: 'Client reviews',
    headline: 'Feedback From International Founders',
    body: 'Real feedback from clients who have worked with Seven Oak Prestige.',
    onGoogle: 'on Google',
    googleReview: 'Google review',
    viewAll: 'View all Google reviews',
    prev: 'Previous reviews',
    next: 'Next reviews',
  },
  pricing: {
    eyebrow: 'Limited company formation packages',
    headline: 'Fixed pricing. Everything stated up front.',
    providerNote: 'Providers considered',
    providerDisclaimer: 'Provider availability depends on founder residence, business activity, ownership, KYC and individual eligibility. Final approval remains with the provider.',
    askExpert: 'Have a question? Talk to an expert',
    financialDisclaimer: "Financial-provider approval is not guaranteed and remains subject to each provider's eligibility, KYC and risk assessment.",
    termsText: 'Prices, renewals and cancellation terms are shown clearly before purchase — see our',
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
        note: "Formation plus UK address infrastructure — the natural choice for most founders.",
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
        note: "Prestige plus administrative identity-verification assistance for ONE director and banking application readiness.",
        features: [
            "Everything in Prestige",
            "Virtual business address for 12 months",
            "High priority support",
            "Direct banking & EMI assistance where applicable",
            "Compliance assistance",
        ],
        footnote: "Administrative identity-verification assistance for ONE director is included, separate from official Companies House verification. Additional directors, PSCs or other persons and any additional verification costs are separately scoped. Banking support covers application readiness, documents and guidance; approval remains with the provider.",
        cta: "Choose Elite",
        tag: "Most comprehensive",
      }
    ]
  },
  identity: {
      eyebrow: 'Verification',
      heading: 'Companies House Identity Verification & Personal Code Assistance — £74',
      body1: 'Directors and people with significant control must meet the applicable Companies House identity-verification requirements. We assist you through the identity-verification process so you can obtain your Companies House personal code. Our service is administrative assistance, separate from official verification through the applicable authorised route; we do not act as an ACSP.',
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
    caption: 'Illustrative image accompanying the Almataev client case.',
    eyebrow: 'Client case study',
    headline: 'Almataev — Forming a UK Company from Thailand',
    body1: 'Almataev, a Russian founder residing in Thailand, needed a compliant UK company structure for an international digital business without travelling to the UK.',
    challenge: 'The challenge',
    challengeText: 'Complete onboarding from abroad, including review of the relevant Thailand residence evidence.',
    support: 'Our support',
    supportText: 'KYC and document review, structure preparation, Companies House submission, post-incorporation guidance and banking-readiness support.',
    outcome: 'The outcome',
    outcomeText: 'The UK company was incorporated in approximately two business days after the required information and verification were complete.',
    disclaimer: 'Timelines vary with document completeness, required checks and Companies House processing.',
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
      ['05', 'Adviser review', 'An adviser checks the details and asks for clarification only when needed.'],
      ['06', 'Filing', 'Once the required checks are complete, we prepare and submit the incorporation.'],
    ],
  },
  services: {
    eyebrow: 'Ongoing company services',
    headline: 'Already Have a UK Company? Explore Ongoing Support',
    items: [
      ['Corporate Administration', 'Discuss company changes and administrative support, scoped to your existing company.', '#final-cta'],
      ['Registered Office Address', 'A London registered office for your company, shown on the public register.', '/services/registered-office-service'],
      ['Director Service Address', 'Keep your home address off the public register with a separate service address.', '/services/director-service-address'],
      ['Mail Handling & Scanning', 'Eligible company mail received in London and sent to you electronically.', '#mail'],
      ['Identity Verification', 'Administrative assistance through the Companies House verification process — £74 separately, subject to scope.', '/services/companies-house-identity-verification'],
      ['Banking & Payments Readiness', 'Application preparation for suitable providers; approval remains with the provider.', '#banking'],
      ['Accounting & Compliance', 'Annual accounts, confirmation statements and ongoing compliance support.', '/services/uk-accounting-non-residents'],
      ['VAT, EORI & Corporate Admin', 'VAT registration and returns, EORI numbers and day-to-day corporate administration.', '/services/uk-accounting-non-residents'],
    ],
  },
  why: {
    eyebrow: 'Why choose Seven Oak Prestige',
    headline: 'UK Company Registration, Made Clear and Straightforward',
    body: 'Choose the company documents, address arrangements and application support appropriate to your business.',
    items: [
      ['Company Details, Clearly Set Out', 'Names, officers, shareholdings and SIC codes organised for your incorporation application.'],
      ['Documents for Your Next Steps', 'Electronic company documents and address services according to your selected package.'],
      ['Privacy-Minded Address Options', 'Use a separate director service address rather than displaying your residential address as your correspondence address.'],
      ['Banking Application Readiness', 'Business-profile preparation, KYC documentation and application guidance; decisions remain with independent providers.'],
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    heading: 'A Clear Process From Start to Finish',
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
      ['Certificate of Incorporation', 'Issued by Companies House on successful incorporation.'],
      ['Memorandum & Articles', "Your company's constitutional documents."],
      ['Share Certificate', 'Issued for the shareholder(s) as agreed.'],
      ['Company Register', 'A structured record of ownership and corporate information.'],
      ['Company Number', 'Issued on incorporation and shown on the public register.'],
      ['UTR Support', 'The Corporation Tax UTR is forwarded when received from HMRC.'],
    ],
  },
  guidance: {
    eyebrow: 'Guidance',
    headline: 'Guidance for International Founders',
    exploreAll: 'Explore All Countries',
    guides: [
      ['France', 'Créer une société UK depuis la France.'],
      ['India', 'UK company formation for Indian founders.'],
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
      {
        q: 'How do I register a limited company in the UK?',
        a: 'Choose a company name, appoint at least one director and shareholder, provide a registered office address and adopt articles of association. The application is then filed with Companies House. With Seven Oak Prestige you choose a package, complete secure online onboarding, and we review and submit the application for you.',
      },
      {
        q: 'How much does it cost to register a company in the UK?',
        a: 'Our formation packages start at £199 and include the Companies House incorporation fee. Prestige (£299) adds a registered office and director service address for 12 months, and Elite (£399) adds a virtual business address and banking assistance. Year-two address renewals are shown before you pay.',
      },
      {
        q: 'How long does company formation take?',
        a: 'Once your KYC has been completed and we hold the required company information, a standard incorporation typically takes 1–2 business days. Approval remains with Companies House, so exact timing cannot be guaranteed.',
      },
      {
        q: 'Can I register a UK company online?',
        a: 'Yes. Company registration is completed electronically with Companies House, and our onboarding, identity checks and document collection all take place online. No UK visit is normally required.',
      },
      {
        q: 'What documents are required to register a company?',
        a: 'We normally require a valid passport or eligible identity document, proof of residential address dated within the last three months, your proposed company name and a description of your business activities. Additional information may be requested during our compliance review.',
      },
      {
        q: 'Can one person be the sole director and shareholder?',
        a: 'Yes. A private limited company can be formed with one person acting as both the only director and the only shareholder. Directors must be at least 16 years old and must not be disqualified.',
      },
      {
        q: 'Do I need a UK registered office address?',
        a: 'Yes. Every UK company must have a registered office address in the same UK jurisdiction where it is registered, and it appears on the public register. If you do not have a suitable address, our Prestige and Elite packages include a London registered office for 12 months.',
      },
      {
        q: 'What is a director service address?',
        a: 'It is the correspondence address for a director shown on the public register. Using a separate service address generally keeps your residential address private; Companies House still holds your home address on a protected record.',
      },
      {
        q: 'Can I form a UK company without living in the UK?',
        a: 'Yes. UK residency is not generally required to be a director or shareholder, subject to Companies House requirements and identity verification. Our non-resident formation guide explains the process in more detail.',
      },
      {
        q: 'Do I need Companies House identity verification?',
        a: 'Directors and people with significant control are now required to verify their identity with Companies House and obtain a personal code. This is separate from our own KYC checks. We offer guided personal-code assistance for £74 where needed.',
      },
      {
        q: 'Can I open a UK business bank account?',
        a: 'Potentially. Eligibility depends on the provider, founder residence, business activity, KYC and expected transactions, and forming a company does not guarantee approval. We help prepare your banking profile and application where included in your package.',
      },
      {
        q: 'What happens after incorporation?',
        a: 'You receive your Certificate of Incorporation, company number and electronic company documents. HMRC normally issues a Corporation Tax UTR afterwards, and you should consider registering for Corporation Tax, VAT (if applicable) and setting up your bookkeeping.',
      },
      {
        q: 'What annual filings does a UK limited company need?',
        a: 'Each year a company must file a confirmation statement and annual accounts with Companies House, and a Corporation Tax return (CT600) with HMRC. These filings are not part of the formation packages; our accounting service can handle them for you.',
      },
      {
        q: 'When does my company need to register for VAT?',
        a: 'VAT registration is compulsory once VAT-taxable turnover exceeds the current HMRC threshold, and voluntary registration is possible below it. VAT registration is not included in the formation packages and is available as a separate service.',
      },
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
    pricing: string; blogs: string; countries: string; partners: string; resources: string;
    connect: string; whatsapp: string; switchLang: string; switchLangLabel: string;
    addressServices: string; companyServices: string; executiveFrameworks: string;
    internationalFounders: string; getInTouch: string;
    nonResidentsPackage: string; chVerification: string; vatRegistration: string;
    eoriRegistration: string; fintechGuidance: string; registeredOffice: string;
    serviceAddress: string; businessAddress: string; accounting: string; nomineeDirector: string; shelfCompany: string; guidesAndInsights: string;
    bankingReadiness: string; france: string; india: string; iraq: string; germany: string; contact: string;
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
