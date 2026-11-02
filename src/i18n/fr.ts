// French translation dictionary
import type { Translations, Locale } from './en';
import { servicesFr } from './services/fr';
import { type ServicesTranslations } from './services/types';
import { resourcesFr } from './resources/fr';
import { type ResourcesTranslation } from './resources/types';

export const fr: Translations = {
  locale: 'fr' as Locale,
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    companyChecker: 'Vérificateur de nom',
    pricing: 'Tarifs',
    blogs: 'Blog',
    countries: 'Pays',
    resources: 'Ressources',
    partners: 'Partenaires',
    connect: 'Contact',
    whatsapp: 'WhatsApp',
    switchLang: 'EN',
    switchLangLabel: 'Switch to English',
    addressServices: 'Services d\'adresse',
    companyServices: 'Services aux entreprises',
    executiveFrameworks: 'Ressources de direction',
    internationalFounders: 'Fondateurs Internationaux',
    getInTouch: 'Nous contacter',
    
    // Service links
    nonResidentsPackage: 'Formule Non-Résidents',
    chVerification: 'Vérification d\'Identité',
    vatRegistration: 'Immatriculation TVA',
    eoriRegistration: 'Immatriculation EORI',
    fintechGuidance: 'Conseil Fintech & Paiements',
    registeredOffice: 'Adresse de Siège Social',
    serviceAddress: 'Adresse de Service du Dirigeant',
    businessAddress: 'Adresse Commerciale Virtuelle',
    accounting: 'Services Comptables UK',
    nomineeDirector: 'Service de Nominee Director',
    shelfCompany: 'Société Ready-Made UK (Shelf Company)',
    
    // Resources & Countries
    guidesAndInsights: 'Guides & Analyses',
    bankingReadiness: 'Évaluation Bancaire Entreprise UK',
    france: 'France',
    india: 'Inde',
    iraq: 'Irak (العراق)',
    germany: 'Allemagne',
    contact: 'Contact',

    // Footer specific
    legal: 'Mentions légales',
    useful: 'Utile',
    termsAndConditions: 'CGV',
    refundPolicy: 'Politique de remboursement',
    privacyPolicy: 'Politique de confidentialité',
    trustAndSecurity: 'Confiance & Sécurité',
    bookConsultation: 'Réserver une consultation',
    sitemap: 'Plan du site',
    whatsappNow: 'WhatsApp',
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés.',
    footerDisclaimer: 'Seven Oak Prestige Ltd n\'est pas un cabinet d\'avocats, un cabinet d\'expertise comptable, ou une institution financière réglementée. Les informations sont fournies à titre indicatif uniquement.',
    visitsByAppointment: 'Visites sur rendez-vous uniquement',
    registeredIn: 'Enregistrée en Angleterre et au Pays de Galles',
    unitedKingdom: 'Royaume-Uni',
    companyNo: 'N° de société 16903092',
    icoRegistration: 'N° d\'enregistrement ICO : ZC181349',
    googleReviews: 'Avis Google',
  },
  hero: {
    eyebrow: 'Création de société UK pour fondateurs internationaux et non-résidents — à partir de 199 £, frais d\'immatriculation Companies House inclus.',
    headline: 'Créez votre société britannique (UK Ltd) en ligne',
    body: 'Immatriculez votre société britannique avec une tarification fixe et claire et un conseiller dédié qui vérifie les informations de votre société avant soumission. Choisissez les services d\'adresse UK dont vous avez besoin, complétez l\'onboarding sécurisé et recevez des conseils pratiques au-delà de la constitution.',
    subBody: 'Vous avez déjà une société britannique ? Découvrez notre accompagnement en conformité, adresses et préparation bancaire.',
    cta1: 'Vérifier le nom de votre société',
    cta2: 'Comparer les formules de création',
    bullets: [
      'Aucun déplacement au Royaume-Uni requis',
      'Frais Companies House inclus',
      'Onboarding sécurisé',
      'Conseiller humain dédié',
    ],
    disclaimer: 'Aucun déplacement au Royaume-Uni requis pour une immatriculation standard en ligne. Sous réserve de vérification d\'identité, d\'un dossier complet et de l\'approbation du Companies House.',
  },
  trust: [
    ['Examen humain', 'Un conseiller dédié vérifie les détails de votre société avant la soumission.'],
    ['Prix transparents', 'Création à partir de 199 £, frais de dépôt inclus ; options d\'adresse et renouvellements indiqués séparément.'],
    ['Accompagnement post-constitution', 'Conseils pratiques pour les prochaines étapes, avec des services continus adaptés aux besoins de votre société.'],
  ],
  testimonials: {
    eyebrow: 'Avis clients',
    headline: 'Retours de fondateurs internationaux',
    body: 'Vrais retours des clients ayant travaillé avec Seven Oak Prestige.',
    onGoogle: 'sur Google',
    googleReview: 'Avis Google',
    viewAll: 'Voir tous les avis Google',
    prev: 'Avis précédents',
    next: 'Avis suivants',
  },
  pricing: {
    eyebrow: 'Formules de création de société britannique',
    headline: 'Tarifs fixes. Tout annoncé clairement.',
    providerNote: 'Prestataires considérés',
    providerDisclaimer: 'La disponibilité des prestataires dépend de la résidence du fondateur, de l\'activité, de la structure, du KYC et de l\'éligibilité individuelle. L\'approbation finale revient au prestataire.',
    askExpert: 'Une question ? Parlez à un expert',
    financialDisclaimer: 'L\'approbation d\'un prestataire financier n\'est pas garantie et reste soumise aux critères d\'éligibilité, au KYC et à l\'évaluation des risques de chaque prestataire.',
    termsText: 'Les tarifs, renouvellements et conditions d\'annulation sont clairement indiqués avant l\'achat — consultez nos',
    terms: 'Conditions générales',
    and: 'et notre',
    refundPolicy: 'Politique de remboursement',
    plans: [
      {
        name: "Starter",
        note: "Création seule — pour les fondateurs ayant déjà une adresse adaptée au Royaume-Uni.",
        features: [
            "Création de la société UK",
            "Dépôt au Companies House",
            "Documents d'entreprise numériques",
            "Rappels clés de conformité",
        ],
        cta: "Choisir Starter",
      },
      {
        name: "Prestige",
        note: "Création plus infrastructure d'adresse au Royaume-Uni — le choix naturel de la plupart des fondateurs.",
        features: [
            "Tout ce qui est dans Starter",
            "Siège social — 12 mois",
            "Adresse de service du directeur — 12 mois",
            "Gestion et numérisation du courrier éligible selon le périmètre du service",
            "Assistance à la conformité annuelle selon le périmètre du forfait",
        ],
        cta: "Choisir Prestige",
        tag: "Recommandé pour les non-résidents",
      },
      {
        name: "Elite",
        note: "Prestige plus assistance administrative à la vérification d'identité pour UN directeur et préparation aux demandes bancaires.",
        features: [
            "Tout ce qui est dans Prestige",
            "Adresse professionnelle virtuelle pour 12 mois",
            "Assistance prioritaire",
            "Assistance bancaire et EMI directe où applicable",
            "Assistance de conformité",
        ],
        footnote: "L'assistance administrative à la vérification d'identité pour UN directeur est incluse, distincte de la vérification officielle du Companies House. Les directeurs supplémentaires, PSC ou autres personnes et tous frais de vérification additionnels font l'objet d'un périmètre séparé. L'accompagnement bancaire couvre la préparation du dossier, les documents et les conseils ; l'approbation finale appartient au prestataire.",
        cta: "Choisir Elite",
        tag: "Le plus complet",
      }
    ]
  },
  renewals: {
    eyebrow: 'Renouvellements',
    headline: 'Tarifs d\'adresse pour la deuxième année — sans surprise',
    body: 'Pas de renouvellement surprise. Ces tarifs de services d\'adresse s\'appliquent à partir de la deuxième année et sont affichés avant l\'achat.',
    serviceLabel: 'Service',
    initialPeriod: 'Période initiale',
    renewal: 'Renouvellement',
    initialPeriodMobile: 'Période initiale :',
    renewalMobile: 'Renouvellement :',
    items: [
      ['Siège social enregistré', 'Prestige et Elite · 12 mois', '59 £ / an'],
      ['Adresse de service directeur', 'Prestige et Elite · 12 mois', '35 £ / an'],
      ['Adresse professionnelle virtuelle', 'Elite · 12 mois', '150 £ / an'],
    ],
  },
  afterPayment: {
    eyebrow: 'Après le paiement',
    headline: 'Sachez exactement ce qui se passe ensuite',
    body: 'Votre commande entre immédiatement dans un processus d\'onboarding clair et sécurisé. Rien n\'est déposé tant que les informations requises et les vérifications ne sont pas complètes.',
    steps: [
      ['01', 'Confirmation instantanée', 'Votre paiement et la formule sélectionnée sont confirmés par e-mail.'],
      ['02', 'Compte créé', 'Votre compte sur le portail client sécurisé est créé pour vous.'],
      ['03', 'E-mail de bienvenue', 'Vous recevez des instructions claires et les documents nécessaires à votre dossier.'],
      ['04', 'Onboarding sécurisé', 'Remplissez le formulaire et téléchargez vos justificatifs d\'identité et d\'adresse.'],
      ['05', 'Examen par le conseiller', 'Un conseiller vérifie les informations et demande des précisions uniquement si nécessaire.'],
      ['06', 'Dépôt', 'Une fois les vérifications complètes, nous préparons et soumettons l\'immatriculation.'],
    ],
  },
  services: {
    eyebrow: 'Services continus aux entreprises',
    headline: 'Vous avez déjà une société britannique ? Découvrez notre accompagnement continu',
    items: [
      ['Administration d\'entreprise', 'Discutez des modifications statutaires et du soutien administratif adaptés à votre société existante.', '#final-cta'],
      ['Adresse de siège social', 'Un siège social à Londres pour votre société, affiché sur le registre public.', '/services/registered-office-service'],
      ['Adresse de service du dirigeant', 'Gardez votre adresse personnelle hors du registre public grâce à une adresse de service distincte.', '/services/director-service-address'],
      ['Gestion et numérisation du courrier', 'Courrier d\'entreprise éligible reçu à Londres et transmis par voie électronique.', '#mail'],
      ['Vérification d\'identité', 'Assistance administrative tout au long du processus de vérification du Companies House — 74 £ séparément, selon le périmètre.', '/services/companies-house-identity-verification'],
      ['Préparation bancaire et paiements', 'Préparation de dossier auprès de prestataires adaptés ; l\'approbation finale appartient au prestataire.', '#banking'],
      ['Comptabilité et conformité', 'Comptes annuels, déclarations de confirmation et suivi régulier de conformité.', '/services/uk-accounting-non-residents'],
      ['TVA, EORI et administration', 'Enregistrement et déclarations de TVA, numéros EORI et administration courante de la société.', '/services/uk-accounting-non-residents'],
    ],
  },
  why: {
    eyebrow: 'Pourquoi choisir Seven Oak Prestige',
    headline: 'L\'immatriculation de société au Royaume-Uni, claire et directe',
    body: 'Choisissez les documents sociaux, les solutions d\'adresse et l\'accompagnement de dossier adaptés à votre entreprise.',
    items: [
      ['Informations de société clairement structurées', 'Dénominations, dirigeants, actionnariat et codes SIC organisés pour votre demande d\'immatriculation.'],
      ['Documents pour vos prochaines étapes', 'Documents sociaux électroniques et services d\'adresse selon la formule sélectionnée.'],
      ['Options d\'adresse respectueuses de la vie privée', 'Utilisez une adresse de service distincte pour le dirigeant plutôt que d\'afficher votre adresse résidentielle comme adresse de correspondance.'],
      ['Préparation aux demandes bancaires', 'Préparation du profil d\'entreprise, documentation KYC et conseils de candidature ; les décisions appartiennent aux prestataires indépendants.'],
    ],
  },
  howItWorks: {
    eyebrow: 'Comment ça marche',
    heading: 'Un processus clair du début à la fin',
    whatYouDo: 'Ce que vous faites',
    whatHappensNext: 'Ce qui se passe ensuite',
    steps: [
      {
        n: "01",
        title: "Choisissez votre forfait et confirmez le nom de votre entreprise",
        duration: "Environ 10 minutes",
        youDo: ["Vérifiez le nom de votre entreprise", "Sélectionnez votre forfait", "Payez en ligne en toute sécurité"],
        happensNext: ["E-mail de confirmation", "Formulaire d'intégration sécurisé", "Instructions pour les prochaines étapes"],
      },
      {
        n: "02",
        title: "Complétez votre KYC et votre intégration",
        duration: "Environ 20 à 30 minutes pour la plupart des cas standard",
        youDo: [
          "Téléchargez votre passeport et votre justificatif de domicile",
          "Remplissez le formulaire d'intégration sécurisé",
          "Fournissez les informations sur les directeurs, actionnaires et PSC",
        ],
        happensNext: [
          "Seven Oak examine votre dossier",
          "Des clarifications sont demandées uniquement si nécessaire",
          "Dossier préparé pour la soumission",
        ],
      },
      {
        n: "03",
        title: "Nous examinons et soumettons à Companies House",
        duration: "Généralement 1 à 2 jours ouvrables pour les constitutions standard",
        youDo: ["Confirmez les détails finaux de l'entreprise", "Répondez rapidement si des clarifications sont requises"],
        happensNext: [
          "Constitution soumise à Companies House",
          "Companies House traite la demande",
          "Seven Oak suit la soumission",
        ],
      },
      {
        n: "04",
        title: "Recevez les documents de votre entreprise et les prochaines étapes",
        duration: "Dès la constitution réussie",
        youDo: ["Téléchargez les documents électroniques de votre entreprise", "Consultez votre liste de contrôle post-constitution"],
        happensNext: [
          "Certificat de constitution délivré",
          "Certificat d'actions et registre de l'entreprise envoyés",
          "Conseils pratiques pour les prochaines étapes fournis",
        ],
      }
    ],
    footer: 'Les délais sont donnés à titre indicatif et sont soumis à des informations complètes, à une vérification et au traitement par Companies House. Les cas complexes peuvent prendre plus de temps.'
  },
  identity: {
    eyebrow: 'Vérification',
    heading: 'Vérification d\'identité de la Companies House et aide pour le code personnel — 74 £',
    body1: 'Les administrateurs et les personnes exerçant un contrôle significatif (PSC) doivent satisfaire aux exigences applicables de vérification d\'identité du Companies House. Nous vous accompagnons tout au long du processus de vérification d\'identité afin d\'obtenir votre code personnel Companies House. Notre service est une assistance administrative, distincte de la vérification officielle via la voie autorisée applicable ; nous n\'agissons pas en tant qu\'ACSP.',
    steps: ["Identité", "Vérification", "Code personnel", "Constitution"],
    body2: 'L\'intégration KYC et la vérification d\'identité légale de la Companies House sont deux processus distincts.',
    cta: 'Voir l\'aide à la vérification — 74 £'
  },
  banking: {
    eyebrow: 'Préparation bancaire',
    heading: 'Préparez votre entreprise pour les services bancaires et les paiements',
    body1: 'Nous évaluons le profil de votre fondateur et de votre entreprise, vous aidons à préparer une demande cohérente et soutenons l\'examen des documents pour les fournisseurs appropriés. Les fournisseurs considérés peuvent inclure {providers}.',
    body2: 'L\'approbation des services bancaires et de paiement ne peut être garantie. Les décisions finales appartiennent à chaque fournisseur et dépendent de la résidence, de l\'activité, de la propriété, du KYC et de l\'évaluation des risques.',
    cta: 'Préparer mon profil bancaire'
  },
  success: {
    caption: 'Image illustrative accompagnant l\'étude de cas client Almataev.',
    eyebrow: 'Étude de cas client',
    headline: 'Almataev — Création d\'une société britannique depuis la Thaïlande',
    body1: 'Almataev, un fondateur russe résidant en Thaïlande, avait besoin d\'une structure de société britannique conforme pour une entreprise numérique internationale sans avoir à se rendre au Royaume-Uni.',
    challenge: 'Le défi',
    challengeText: 'Réaliser l\'intégration depuis l\'étranger, y compris l\'examen des preuves de résidence en Thaïlande.',
    support: 'Notre accompagnement',
    supportText: 'Examen KYC et documentaire, préparation de la structure, soumission à Companies House, conseils post-constitution et aide à la préparation bancaire.',
    outcome: 'Le résultat',
    outcomeText: 'La société britannique a été constituée en environ deux jours ouvrables une fois les informations requises et la vérification complétées.',
    disclaimer: 'Les délais varient en fonction de l\'exhaustivité des documents, des vérifications requises et du traitement par Companies House.',
    cta: 'Comparer les forfaits'
  },
  deliverables: {
    eyebrow: 'Ce que vous recevez',
    headline: 'La documentation de votre société',
    items: [
      ['Certificat d\'immatriculation', 'Délivré par le Companies House lors d\'une immatriculation réussie.'],
      ['Acte constitutif et statuts', 'Les documents constitutifs de votre société.'],
      ['Certificat d\'actions', 'Émis pour le(s) actionnaire(s) selon ce qui a été convenu.'],
      ['Registre de la société', 'Un relevé structuré de la propriété et des informations sociales.'],
      ['Numéro de société', 'Attribué lors de l\'immatriculation et figurant au registre public.'],
      ['Assistance UTR', 'Le numéro UTR de l\'impôt sur les sociétés vous est transmis à réception de HMRC.'],
    ],
  },
  guidance: {
    eyebrow: 'Guides',
    headline: 'Guides pour les fondateurs internationaux',
    exploreAll: 'Explorer tous les pays',
    guides: [
      ['France', 'Créer une société UK depuis la France.'],
      ['India', 'UK company formation for Indian founders.'],
    ],
  },
  
  mailHandling: {
    eyebrow: 'Adresse & correspondance',
    headline: 'Votre courrier britannique, accessible de partout',
    body: 'Lorsqu\'inclus dans votre forfait, la correspondance d\'entreprise éligible reçue à votre adresse Seven Oak est identifiée et transmise électroniquement selon le périmètre du service. Vous n\'avez pas besoin de vous rendre à Londres pour la suivre.',
    steps: [
      ['01', 'Le courrier arrive à Londres', 'La correspondance éligible est reçue à l\'adresse Seven Oak.'],
      ['02', 'Nous l\'identifions et l\'examinons', 'Le courrier est associé à votre entreprise et sa pertinence est vérifiée.'],
      ['03', 'Numérisé & Transmis numériquement', 'Lorsqu\'inclus dans votre forfait, le courrier éligible est numérisé et transmis électroniquement.'],
    ],
    flow: ['Courrier reçu à Londres', 'Examiné', 'Courrier éligible numérisé', 'Transmis numériquement']
  },
  relatedServices: {
    eyebrow: 'Services Connexes',
    headline: 'Autres Services Dont Vous Pourriez Avoir Besoin',
    items: [
      { title: "Adresse Commerciale Virtuelle", body: "Une adresse londonienne premium pour les besoins commerciaux et marketing quotidiens de votre entreprise.", href: "/services/virtual-business-address" },
      { title: "Enregistrement TVA", body: "Assistance professionnelle pour l'enregistrement à la TVA auprès du HMRC et soutien continu en matière de conformité.", href: "/services/vat-registration-uk" },
      { title: "Forfait Non-Résidents", body: "Création complète de société, services d'adresse et vérification pour les fondateurs internationaux.", href: "/services/uk-company-formation-for-non-residents" }
    ]
  },
  servicesPages: servicesFr as any,
  resourcesPages: resourcesFr,
  faq: {
    eyebrow: 'Questions fréquentes',
    headline: 'Réponses avant de vous engager.',
    items: [
      {
        q: 'Comment immatriculer une société à responsabilité limitée (Ltd) au Royaume-Uni ?',
        a: 'Choisissez un nom de société, nommez au moins un directeur et un actionnaire, fournissez une adresse de siège social et adoptez des statuts. La demande est ensuite déposée auprès du Companies House. Avec Seven Oak Prestige, vous choisissez une formule, complétez l\'intégration sécurisée en ligne, et nous vérifions et soumettons la demande pour vous.',
      },
      {
        q: 'Combien coûte l\'immatriculation d\'une société au Royaume-Uni ?',
        a: 'Nos formules de création commencent à 199 £ et incluent les frais d\'immatriculation du Companies House. La formule Prestige (299 £) ajoute un siège social et une adresse de service du dirigeant pendant 12 mois, et la formule Elite (399 £) ajoute une adresse commerciale virtuelle et une assistance bancaire. Les renouvellements d\'adresse de deuxième année sont indiqués avant le paiement.',
      },
      {
        q: 'Combien de temps prend la création d\'une société ?',
        a: 'Une fois votre KYC complété et les informations requises sur la société reçues, une constitution standard prend généralement 1 à 2 jours ouvrables. L\'approbation finale dépend du Companies House, de sorte qu\'un délai exact ne peut être garanti.',
      },
      {
        q: 'Puis-je enregistrer une société britannique en ligne ?',
        a: 'Oui. L\'immatriculation de la société s\'effectue par voie électronique auprès du Companies House, et notre intégration, nos contrôles d\'identité et la collecte des documents se déroulent entièrement en ligne. Aucun déplacement au Royaume-Uni n\'est normalement requis.',
      },
      {
        q: 'Quels documents sont requis pour immatriculer une société ?',
        a: 'Nous demandons généralement un passeport valide ou une pièce d\'identité éligible, un justificatif de domicile datant de moins de trois mois, le nom proposé pour votre société et une description de vos activités commerciales. Des informations complémentaires peuvent être demandées lors de notre examen de conformité.',
      },
      {
        q: 'Une seule personne peut-elle être à la fois l\'unique directeur et l\'unique actionnaire ?',
        a: 'Oui. Une société privée à responsabilité limitée (Ltd) peut être constituée avec une seule personne agissant à la fois comme unique directeur et unique actionnaire. Les directeurs doivent être âgés d\'au moins 16 ans et ne pas faire l\'objet d\'une interdiction de gérer.',
      },
      {
        q: 'Ai-je besoin d\'une adresse de siège social au Royaume-Uni ?',
        a: 'Oui. Toute société britannique doit disposer d\'une adresse de siège social dans la juridiction britannique où elle est immatriculée, et celle-ci figure sur le registre public. Si vous ne disposez pas d\'une adresse appropriée, nos formules Prestige et Elite incluent un siège social à Londres pendant 12 mois.',
      },
      {
        q: 'Qu\'est-ce qu\'une adresse de service du dirigeant ?',
        a: 'Il s\'agit de l\'adresse de correspondance d\'un directeur affichée sur le registre public. L\'utilisation d\'une adresse de service distincte permet généralement de garder votre adresse résidentielle privée ; le Companies House conserve néanmoins votre adresse personnelle dans un registre protégé.',
      },
      {
        q: 'Puis-je créer une société au Royaume-Uni sans y résider ?',
        a: 'Oui. La résidence au Royaume-Uni n\'est généralement pas requise pour être directeur ou actionnaire, sous réserve des exigences du Companies House et de la vérification d\'identité. Notre guide de création pour les non-résidents détaille ce processus.',
      },
      {
        q: 'Ai-je besoin de la vérification d\'identité du Companies House ?',
        a: 'Les directeurs et les personnes exerçant un contrôle significatif (PSC) doivent désormais vérifier leur identité auprès du Companies House et obtenir un code personnel. Cette démarche est distincte de nos propres contrôles KYC. Nous proposons une assistance guidée pour le code personnel à 74 £ lorsque nécessaire.',
      },
      {
        q: 'Puis-je ouvrir un compte bancaire professionnel au Royaume-Uni ?',
        a: 'Potentiellement. L\'éligibilité dépend du prestataire, de la résidence du fondateur, de l\'activité commerciale, du KYC et des transactions prévues, et la création d\'une société ne garantit pas l\'approbation. Nous vous aidons à préparer votre profil bancaire et votre dossier lorsque cela est inclus dans votre formule.',
      },
      {
        q: 'Que se passe-t-il après l\'immatriculation ?',
        a: 'Vous recevez votre certificat d\'immatriculation (Certificate of Incorporation), votre numéro de société et vos documents sociaux électroniques. HMRC délivre normalement ensuite un numéro UTR pour l\'impôt sur les sociétés, et vous devez envisager l\'enregistrement à l\'impôt sur les sociétés, à la TVA (le cas échéant) ainsi que la mise en place de votre comptabilité.',
      },
      {
        q: 'Quelles déclarations annuelles une société britannique (UK Ltd) doit-elle effectuer ?',
        a: 'Chaque année, une société doit déposer une déclaration de confirmation (Confirmation Statement) et des comptes annuels auprès du Companies House, ainsi qu\'une déclaration d\'impôt sur les sociétés (CT600) auprès de HMRC. Ces déclarations ne font pas partie des formules de création ; notre service comptable peut les prendre en charge pour vous.',
      },
      {
        q: 'Quand ma société doit-elle s\'enregistrer à la TVA ?',
        a: 'L\'enregistrement à la TVA est obligatoire dès que le chiffre d\'affaires taxable à la TVA dépasse le seuil actuel de HMRC, et un enregistrement volontaire est possible en dessous de ce seuil. L\'enregistrement à la TVA n\'est pas inclus dans les formules de création et est disponible en tant que service séparé.',
      },
    ],
  },
  cta: {
    headline: 'Prêt à créer votre société britannique ?',
    body: 'Choisissez la formule adaptée à vos besoins et finalisez le processus à distance avec le soutien d\'un conseiller. Le dépôt auprès du Companies House est inclus, avec adresse britannique et soutien à la conformité disponibles selon votre formule.',
    cta1: 'Voir les formules — À partir de 199 £',
    cta2: 'Parler à un conseiller sur WhatsApp',
  },
  langBanner: {
    message: 'This page is available in English.',
    switchTo: 'Switch to English',
    dismiss: 'Dismiss',
  },
};
