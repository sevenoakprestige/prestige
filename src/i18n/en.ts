// English translation dictionary
export type Locale = 'en' | 'fr';

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
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    footerDisclaimer: 'Seven Oak Prestige Ltd is not a law firm, accountancy firm, or regulated financial institution. All information provided is for general guidance only.',
    visitsByAppointment: 'Visits by appointment only'
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
    legal: string; useful: string; termsAndConditions: string; refundPolicy: string;
    privacyPolicy: string; trustAndSecurity: string; bookConsultation: string;
    sitemap: string; whatsappNow: string; followUs: string; allRightsReserved: string;
    footerDisclaimer: string; visitsByAppointment: string;
  };
  hero: {
    eyebrow: string; headline: string; body: string; subBody: string;
    cta1: string; cta2: string; bullets: readonly string[]; disclaimer: string;
  };
  trust: readonly (readonly string[])[];
  pricing: {
    eyebrow: string; headline: string; providerNote: string; providerDisclaimer: string;
    askExpert: string; financialDisclaimer: string; termsText: string;
    terms: string; and: string; refundPolicy: string;
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
  why: {
    eyebrow: string; headline: string; body: string;
    items: readonly (readonly string[])[];
  };
  deliverables: {
    eyebrow: string; headline: string;
    items: readonly (readonly string[])[];
  };
  guidance: {
    eyebrow: string; headline: string; exploreAll: string;
    guides: readonly (readonly string[])[];
  };
  faq: {
    eyebrow: string; headline: string;
    items: readonly { q: string; a: string }[];
  };
  cta: { headline: string; body: string; cta1: string; cta2: string };
  langBanner: { message: string; switchTo: string; dismiss: string };
};
