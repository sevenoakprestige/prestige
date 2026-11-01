"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

type PackageItem = {
  fit: string;
  name: string;
  amount: string;
  amountSuffix: string;
  mini: string;
  features: string[];
  cta: string;
  dataPackage: string;
  exclude: string;
  featured?: boolean;
};

const PACKAGES: PackageItem[] = [
  {
    fit: "Pour les micro-entités éligibles",
    name: "Essential Accounting",
    amount: "£699",
    amountSuffix: "/an",
    mini: "Conformité annuelle, sans tenue de livres",
    features: [
      "Comptes statutaires annuels (Annual Accounts)",
      "Déclaration d’impôt sur les sociétés (CT600)",
      "Un Confirmation Statement, frais de dépôt en ligne standard inclus",
      "Coordination des échéances de conformité",
    ],
    cta: "Commencer — Essential →",
    dataPackage: "Essential Accounting",
    exclude: "Exclut la tenue de livres, les déclarations de TVA et les logiciels.",
  },
  {
    fit: "Pour les sociétés actives",
    name: "Managed Accounting",
    amount: "£1,699",
    amountSuffix: "/an",
    mini: "Tenue de livres mensuelle + conformité annuelle",
    features: [
      "Tout ce qui est inclus dans Essential",
      "Tenue de livres mensuelle, jusqu’à 25 transactions",
      "Mises à jour mensuelles des écritures",
      "Coordination des justificatifs et questions sur les transactions",
    ],
    cta: "Commencer — Managed →",
    dataPackage: "Managed Accounting",
    exclude: "Exclut les déclarations de TVA et l’abonnement Xero.",
    featured: true,
  },
  {
    fit: "Pour les entreprises en croissance",
    name: "Managed Plus",
    amount: "£2,199",
    amountSuffix: "/an à partir de",
    mini: "Capacité de transactions supérieure + déclaration personnelle",
    features: [
      "Tout ce qui est inclus dans Managed",
      "Tenue de livres mensuelle, jusqu’à 50 transactions au total",
      "Une déclaration Self Assessment dirigeant, le cas échéant",
      "Coordination client renforcée",
    ],
    cta: "Commencer — Managed Plus →",
    dataPackage: "Managed Plus",
    exclude:
      "Exclut les déclarations de TVA, Xero et la fiscalité transfrontalière complexe.",
  },
];

const COMPARISON_ROWS: [string, string, string, string][] = [
  ["Comptes annuels + CT600", "✓", "✓", "✓"],
  ["Confirmation statement", "✓", "✓", "✓"],
  ["Tenue de livres mensuelle", "—", "25 transactions", "50 transactions"],
  ["Self Assessment dirigeant", "—", "—", "1 le cas échéant"],
  ["Déclarations de TVA", "Séparé", "Séparé", "Séparé"],
  ["Abonnement Xero", "Séparé", "Séparé", "Séparé"],
];

const STEPS: [string, string, string][] = [
  [
    "01 / CHOISIR",
    "Choisissez votre forfait",
    "Sélectionnez le niveau de conformité annuelle et de tenue de livres mensuelle dont vous avez besoin.",
  ],
  [
    "02 / VÉRIFIER",
    "Complétez les contrôles AML/KYC",
    "Nous confirmons l’éligibilité de la société, l’actionnariat, l’identité et les informations anti-blanchiment requises avant le début des travaux.",
  ],
  [
    "03 / AUTORISER",
    "Partagez vos documents en sécurité",
    "Transmettez vos pièces comptables et les autorisations nécessaires pour la mission convenue.",
  ],
  [
    "04 / AVANCER",
    "Sachez quelle est la suite",
    "Nous coordonnons le service convenu et vous informons des éléments attendus et des prochaines étapes.",
  ],
];

type FaqGroup = {
  id: string;
  navLabel: string;
  title: string;
  items: [string, string][];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "faq-foundation",
    navLabel: "Obligations de la société",
    title: "Obligations d’une société britannique",
    items: [
      [
        "Puis-je engager un comptable britannique si je vis hors du Royaume-Uni ?",
        "Oui. Vous pouvez organiser le suivi comptable à distance pour une société UK Limited tout en vivant à l’étranger. L’acceptation dépend des activités de votre société, de ses registres, de son actionnariat et des vérifications d’identité requises.",
      ],
      [
        "Ma société UK Limited a-t-elle besoin de comptes annuels si je suis dirigeant non-résident ?",
        "Oui. Une société UK Limited doit généralement préparer et déposer des comptes annuels quel que soit le lieu de résidence de ses dirigeants. Le dirigeant reste légalement responsable même lorsqu’un comptable assure la préparation.",
      ],
      [
        "Quelle est la différence entre les comptes annuels et un CT600 ?",
        "Les comptes annuels présentent la situation financière et la performance de la société. Le CT600 est la déclaration d’impôt sur les sociétés soumise à HMRC avec les calculs fiscaux correspondants. Ils ont des objectifs et des échéances différents.",
      ],
      [
        "Une société UK Limited a-t-elle besoin d’un comptable si elle n’a aucune vente ?",
        "Elle peut tout de même avoir des obligations déclaratives. Une société qui n’a jamais exercé d’activité ou qui est dormante peut avoir des exigences comptables et fiscales différentes. Indiquez-nous son activité réelle afin d’évaluer si un service pour société dormante est plus adapté.",
      ],
      [
        "Que faire si ma société britannique est dormante ?",
        "Les sociétés dormantes conservent généralement des obligations auprès de Companies House, notamment le dépôt de comptes et d’un confirmation statement. Un devis spécifique pour société dormante peut être plus approprié qu’un forfait pour société active.",
      ],
      [
        "Dois-je déposer des comptes au Royaume-Uni si tous mes clients sont hors du Royaume-Uni ?",
        "Généralement oui. L’immatriculation au Royaume-Uni entraîne normalement des obligations déclaratives statutaires britanniques quel que soit le pays des clients. Votre modèle d’activité peut également soulever des questions fiscales hors du Royaume-Uni.",
      ],
      [
        "Seven Oak peut-il m’aider si ma société n’a jamais exercé d’activité depuis sa création ?",
        "Oui, sous réserve d’examen. Une société sans activité commerciale peut être éligible aux services pour société dormante, chiffrés séparément. Nous vérifions d’abord ses registres et si certaines transactions affectent son statut dormant.",
      ],
      [
        "Que se passe-t-il si mes comptes Companies House ou mon CT600 sont déjà en retard ?",
        "Indiquez-nous votre numéro de société et les périodes en retard. Nous pouvons examiner la situation et établir un devis séparé pour la régularisation. Les pénalités de retard et intérêts existants ne sont pas inclus dans les forfaits standards.",
      ],
      [
        "Un confirmation statement est-il identique aux comptes annuels ?",
        "Non. Un confirmation statement met à jour ou confirme les informations de la société auprès de Companies House. Les comptes annuels présentent les informations financières. Les deux peuvent être requis et ont des échéances différentes.",
      ],
    ],
  },
  {
    id: "faq-package",
    navLabel: "Forfaits et tenue de livres",
    title: "Forfaits, tenue de livres et TVA",
    items: [
      [
        "Que comprend le forfait Essential Accounting ?",
        "Pour une micro-entité éligible : les comptes statutaires annuels, une déclaration d’impôt sur les sociétés (CT600) et un confirmation statement annuel. La tenue de livres, les déclarations de TVA et les logiciels comptables ne sont pas inclus.",
      ],
      [
        "Que comprend le forfait Managed Accounting ?",
        "Managed inclut Essential Accounting ainsi que la tenue de livres mensuelle jusqu’à 25 transactions par mois. Nous coordonnons les mises à jour régulières des registres et les questions tout au long de l’année.",
      ],
      [
        "Que comprend le forfait Managed Plus ?",
        "Managed Plus inclut les services Managed, porte la tenue de livres mensuelle à 50 transactions et inclut une déclaration Self Assessment dirigeant le cas échéant. Les autres travaux fiscaux personnels ou internationaux ne sont pas automatiquement inclus.",
      ],
      [
        "Les déclarations de TVA sont-elles incluses dans vos forfaits ?",
        "Non. L’enregistrement à la TVA et les déclarations de TVA font l’objet d’un périmètre et d’une tarification séparés. Nous vérifions d’abord si l’enregistrement ou les déclarations de TVA concernent votre société.",
      ],
      [
        "Xero est-il inclus dans le prix annuel du forfait ?",
        "Non. Un abonnement Xero adapté représente un coût logiciel supplémentaire. Nous vous expliquons la formule applicable et son tarif avant validation de l’onboarding.",
      ],
      [
        "Pouvez-vous travailler avec mon compte Xero existant ?",
        "Potentiellement. Nous vérifions d’abord les accès, la formule d’abonnement, la qualité des écritures existantes et si une mise à jour comptable est nécessaire.",
      ],
      [
        "Qu’est-ce qui compte comme une transaction de tenue de livres ?",
        "Une transaction correspond généralement à un élément devant être enregistré ou rapproché, tel qu’un reçu, un paiement ou un mouvement bancaire. Les règles précises de décompte et le traitement des versements de plateformes de paiement sont confirmés avant l’onboarding.",
      ],
      [
        "Que se passe-t-il si je dépasse 25 ou 50 transactions au cours d’un mois ?",
        "Nous examinons le volume supplémentaire et vous expliquons tout ajustement ou frais complémentaire avant de l’appliquer. Les volumes supérieurs et le rattrapage comptable ne sont pas automatiquement couverts par le tarif affiché.",
      ],
      [
        "Puis-je envoyer mes reçus et documents depuis l’étranger ?",
        "Oui. Nous coordonnons la collecte sécurisée des documents à distance. Le cas échéant, les pièces peuvent être transmises via les canaux numériques convenus ; nous confirmerons le format requis et les délais.",
      ],
      [
        "Vos tarifs annuels incluent-ils les frais Companies House du confirmation statement ?",
        "Oui. Les forfaits annuels indiqués incluent le dépôt d’un confirmation statement standard et ses frais statutaires de dépôt en ligne standard, dans le cadre du périmètre convenu.",
      ],
      [
        "Puis-je payer mensuellement plutôt que de régler le forfait annuel d’avance ?",
        "Des mensualités peuvent être proposées dans le cadre d’un engagement à durée déterminée après validation de l’onboarding. Il s’agit d’une modalité de paiement pour un service annuel, et non d’un abonnement mensuel résiliable à tout moment. Les conditions sont confirmées avant accord.",
      ],
      [
        "Comment est calculée une transaction comptable par mois ?",
        "Le nombre de transactions est évalué à partir de vos pièces réelles, telles que les mouvements bancaires, ventes et achats. Nous confirmons la méthode de décompte et le palier adapté lors de l’onboarding. Des volumes élevés ou des dossiers complexes peuvent nécessiter un devis distinct.",
      ],
      [
        "Puis-je envoyer mes factures et justificatifs depuis l’étranger ?",
        "Oui. Les documents peuvent être transmis à distance via les canaux sécurisés convenus. Nous confirmerons la méthode privilégiée et les accès logiciels lors de l’onboarding.",
      ],
      [
        "Dois-je obligatoirement souscrire à Xero pour utiliser Managed Accounting ?",
        "Un logiciel comptable peut être nécessaire pour la tenue de livres mensuelle. Tout abonnement Xero est distinct du prix du forfait affiché, sauf mention expresse dans votre devis individuel. Nous vous présentons l’option adaptée et son coût avant tout engagement.",
      ],
    ],
  },
  {
    id: "faq-international",
    navLabel: "Fondateurs internationaux et fiscalité",
    title: "Dirigeants non-résidents et fiscalité internationale",
    items: [
      [
        "Quand les comptes annuels d’une société britannique sont-ils dus ?",
        "Pour la plupart des sociétés privées, les comptes annuels sont normalement dus neuf mois après la date de clôture de référence ; les premiers comptes peuvent avoir des délais différents. Nous confirmons vos dates exactes à partir du dossier de votre société.",
      ],
      [
        "Quand le CT600 est-il dû et quand l’impôt sur les sociétés doit-il être payé ?",
        "La déclaration d’impôt sur les sociétés (CT600) est généralement due 12 mois après la fin de la période comptable concernée, tandis que l’impôt sur les sociétés est habituellement payable neuf mois et un jour après la fin de cette période (hors régime d’acomptes trimestriels). Votre situation spécifique peut différer.",
      ],
      [
        "Qu’est-ce qu’un confirmation statement et ses frais de dépôt sont-ils inclus ?",
        "Il s’agit d’une confirmation annuelle auprès de Companies House attestant que les informations clés de la société sont à jour. Pour les forfaits éligibles, un confirmation statement standard en ligne et ses frais statutaires actuels sont inclus selon le périmètre convenu ; les modifications statutaires peuvent entraîner des frais supplémentaires.",
      ],
      [
        "Les dirigeants non-résidents doivent-ils effectuer la vérification d’identité Companies House ?",
        "Les dirigeants et personnes exerçant un contrôle significatif (PSC) sont soumis aux exigences de vérification d’identité et aux délais applicables. Nous vérifions la situation de la société et expliquons toute assistance distincte nécessaire.",
      ],
      [
        "Dois-je enregistrer ma société UK Limited à la TVA ?",
        "Toutes les sociétés ne sont pas tenues de s’enregistrer. L’enregistrement dépend notamment du chiffre d’affaires taxable, de la nature et du lieu des prestations, et de l’établissement ou non de l’activité au Royaume-Uni. Une analyse au cas par cas est essentielle.",
      ],
      [
        "Ma société britannique paie-t-elle l’impôt sur les sociétés si tous les clients sont à l’étranger ?",
        "Une société constituée au Royaume-Uni relève généralement du cadre de la Corporation Tax britannique, sous réserve des règles de résidence applicables et des conventions fiscales. Avoir des clients à l’étranger ne supprime pas en soi les obligations fiscales au Royaume-Uni.",
      ],
      [
        "Devrai-je payer de l’impôt personnel au Royaume-Uni sur mes dividendes ou mon salaire si je vis à l’étranger ?",
        "Cela dépend de votre résidence fiscale personnelle, du lieu d’exercice des fonctions, du type de revenu et des conventions fiscales applicables. L’impôt de la société UK et votre impôt personnel sont deux questions distinctes. Le conseil fiscal personnel transfrontalier n’est pas automatiquement inclus.",
      ],
      [
        "Ai-je besoin d’un dirigeant résident au Royaume-Uni ou de me rendre au Royaume-Uni pour utiliser votre service ?",
        "En général, ni un dirigeant résident au Royaume-Uni ni un déplacement au Royaume-Uni ne sont requis uniquement pour organiser la comptabilité d’une société UK Limited existante. Des vérifications complémentaires peuvent s’appliquer selon la structure ou l’activité.",
      ],
      [
        "Une société UK Limited fait-elle de moi un résident fiscal personnel au Royaume-Uni ?",
        "Pas automatiquement. Votre résidence fiscale personnelle dépend des règles applicables et de votre situation personnelle. La résidence fiscale de la société et celle de la personne physique sont distinctes.",
      ],
      [
        "Si je vis en Inde, en France ou aux Émirats arabes unis, devrai-je payer des impôts dans les deux pays ?",
        "C’est possible, selon votre résidence, la gestion de la société, vos revenus et les règles conventionnelles applicables. Une société britannique ne supprime pas automatiquement les obligations fiscales dans votre pays de résidence. Le conseil fiscal transfrontalier fait l’objet d’un périmètre séparé.",
      ],
      [
        "Un dirigeant non-résident peut-il percevoir des dividendes ou un salaire d’une société UK Limited ?",
        "Potentiellement, mais le traitement fiscal et déclaratif diffère entre salaire et dividendes et dépend de votre résidence et de votre situation. La paie et le conseil fiscal personnel ou transfrontalier ne sont pas automatiquement inclus.",
      ],
      [
        "Ma société UK Limited a-t-elle besoin d’un numéro de TVA si je vends en ligne ou sur Amazon ?",
        "Cela dépend du lieu des opérations, des biens ou services concernés et des règles de TVA applicables. Le e-commerce et le commerce transfrontalier peuvent nécessiter une analyse TVA spécialisée. L’enregistrement et les déclarations de TVA sont chiffrés séparément.",
      ],
    ],
  },
  {
    id: "faq-start",
    navLabel: "Démarrage et changement de comptable",
    title: "Démarrer, changer de comptable et paiements",
    items: [
      [
        "Pouvez-vous reprendre mon dossier auprès de mon comptable britannique actuel ?",
        "Généralement oui, sous réserve d’acceptation. Nous pourrons demander les comptes des exercices précédents, déclarations fiscales, exports comptables, autorisations et informations de transfert professionnel.",
      ],
      [
        "Pouvez-vous m’aider si mes comptes ou mon confirmation statement sont en retard ?",
        "Nous pouvons examiner la situation, identifier les pièces manquantes et proposer un périmètre distinct de rattrapage ou de régularisation. Les prix des forfaits annuels standards ne couvrent pas automatiquement les retards historiques ou pénalités.",
      ],
      [
        "Puis-je payer mensuellement plutôt qu’annuellement ?",
        "Un paiement mensuel peut être disponible dans le cadre d’un contrat à durée déterminée une fois l’éligibilité et les modalités confirmées. Les mensualités ne constituent pas nécessairement un service résiliable d’un mois sur l’autre.",
      ],
      [
        "Puis-je utiliser ces forfaits si je vends via Amazon, Shopify, Stripe ou à l’international ?",
        "C’est possible. Les frais de marketplace, règlements multidevises, TVA étrangère et volumes de transactions peuvent accroître la complexité. Nous évaluons le modèle d’activité et pouvons proposer un devis adapté avant acceptation.",
      ],
      [
        "Le service convient-il à une filiale britannique détenue par une société étrangère ?",
        "Potentiellement, mais les structures de groupe, soldes intragroupe, transactions entre parties liées et questions fiscales transfrontalières peuvent nécessiter une tarification sur mesure plutôt qu’un forfait micro-entité standard.",
      ],
      [
        "Qui prépare réellement mes comptes et dépose les déclarations ?",
        "Seven Oak Prestige coordonne la relation et demeure votre interlocuteur privilégié. Les travaux techniques de comptabilité et de déclarations fiscales sont réalisés par un cabinet comptable professionnel partenaire, sous réserve d’engagement, d’autorisation et des contrôles de conformité.",
      ],
      [
        "De quels documents ai-je besoin pour commencer ?",
        "Généralement le numéro de société, les informations sur les dirigeants et l’actionnariat, les derniers comptes ou relevés bancaires, les éléments de tenue de livres et les justificatifs d’identité ou d’origine des fonds requis. Nous envoyons une liste personnalisée après le choix du forfait.",
      ],
      [
        "Engager un comptable supprime-t-il mes responsabilités légales en tant que dirigeant ?",
        "Non. Les dirigeants restent légalement responsables des registres et des obligations statutaires de leur société même lorsque des professionnels les assistent pour la préparation et le dépôt.",
      ],
      [
        "Vos services comptables sont-ils délivrés par des professionnels accrédités ?",
        "Oui. Les services techniques de comptabilité et de déclarations fiscales sont assurés par notre partenaire comptable britannique accrédité ACCA. Seven Oak Prestige coordonne la relation client, l’onboarding et le suivi de service.",
      ],
      [
        "Pourquoi demandez-vous une vérification AML et d’identité avant le début des travaux comptables ?",
        "Nous effectuons les contrôles obligatoires d’identité et de lutte contre le blanchiment d’argent avant le début de la mission. Selon la société, cela peut inclure l’identification des dirigeants et bénéficiaires effectifs, les informations sur l’activité et des pièces justificatives.",
      ],
      [
        "Puis-je commencer si je n’ai pas encore de compte bancaire professionnel au Royaume-Uni ?",
        "Potentiellement. Nous examinerons le statut de votre société et les pièces disponibles. Certains flux de tenue de livres nécessitent des données bancaires et de transactions appropriées, et toute assistance bancaire constitue un service distinct.",
      ],
      [
        "Combien de temps prend l’onboarding d’une société britannique dirigée par un non-résident ?",
        "Le délai dépend de l’exhaustivité des informations de votre société, de la vérification AML/KYC, des pièces comptables et des autorisations. Nous confirmons les prochaines étapes après examen de votre dossier plutôt que de promettre un délai d’approbation fixe.",
      ],
    ],
  },
];

function Section({
  children,
  className = "",
  id,
  ariaLabelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`px-5 py-16 sm:px-6 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

export default function AccountingPageFr() {
  const [selectedPackage, setSelectedPackage] = useState("Not sure yet");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [activity, setActivity] = useState("Trading / active business");
  const [note, setNote] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleStartCta = (pkgName: string) => {
    setSelectedPackage(pkgName || "Not sure yet");
  };

  const handleSendEmail = () => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }
    const message = [
      "Hello Seven Oak Prestige,",
      "I would like to enquire about your UK limited company accounting services.",
      "Reference: LANDING-ACCOUNTING-NONRESIDENT",
      "Package: " + selectedPackage,
      "Company: " + (companyName.trim() || "Not provided"),
      "Country of residence: " + country.trim(),
      "Company activity: " + activity,
      "Additional information: " + (note.trim() || "None"),
      "Please advise the next steps.",
    ].join("\n");

    window.location.href =
      "mailto:hello@sevenoakprestige.com?subject=" +
      encodeURIComponent("UK Accounting Enquiry | " + selectedPackage) +
      "&body=" +
      encodeURIComponent(message);
  };

  const allFaqs = FAQ_GROUPS.flatMap((group) => group.items);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.sevenoakprestige.com/fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Comptabilité de Société UK Limited pour Non-Résidents",
            item: "https://www.sevenoakprestige.com/fr/services/uk-accounting-non-residents",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Comptabilité de Société UK Limited pour Non-Résidents",
        description:
          "Comptabilité de société UK Limited pour dirigeants non-résidents. Comptes annuels, CT600, confirmation statements et tenue de livres mensuelle. Comparez nos forfaits à prix fixe dès £699/an.",
        url: "https://www.sevenoakprestige.com/fr/services/uk-accounting-non-residents",
        provider: { "@type": "Organization", name: "Seven Oak Prestige Ltd" },
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* HERO SECTION */}
        <section className="section-dark relative isolate overflow-hidden border-b border-border">
          <div className="block h-[245px] w-full sm:hidden">
            <img
              src="/assets/accounting-hero-640.webp"
              alt="Bureau exécutif à Londres"
              width={640}
              height={423}
              className="h-full w-full object-cover object-[55%_48%]"
            />
          </div>

          <picture className="pointer-events-none hidden sm:block">
            <source
              srcSet="/assets/accounting-hero-1280.webp"
              media="(min-width: 641px)"
            />
            <img
              src="/assets/accounting-hero-640.webp"
              alt=""
              aria-hidden="true"
              width={1280}
              height={846}
              className="
                absolute inset-y-0 right-0 left-[30%] -z-20 h-full w-[70%]
                object-cover object-[56%_50%]
                lg:left-[42%] lg:w-[58%] lg:object-[62%_52%]
              "
            />
          </picture>
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10 hidden sm:block
              bg-[linear-gradient(90deg,#0e1a2b_0%,rgba(14,26,43,0.97)_38%,rgba(14,26,43,0.66)_100%)]
              lg:bg-[linear-gradient(90deg,#0e1a2b_0%,#0e1a2b_40%,rgba(14,26,43,0.88)_56%,rgba(14,26,43,0.38)_100%)]
            "
          />

          <div className="mx-auto max-w-6xl px-5 py-10 sm:min-h-[610px] sm:px-6 sm:pt-24 sm:pb-16">
            <div className="max-w-[660px]">
              <p className="eyebrow">
                Comptabilité de société UK Limited pour non-résidents
              </p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
                Votre société UK a des échéances.
                <br />
                Votre vie est ailleurs.
              </h1>
              <p className="mt-6 max-w-[590px] text-base leading-7 text-foreground/90 sm:text-lg">
                Gardez le contrôle sur vos comptes annuels, votre Corporation Tax
                et vos échéances déclaratives au Royaume-Uni, même lorsque vous
                dirigez votre activité depuis l’étranger. Choisissez
                l’accompagnement adapté, complétez notre onboarding sécurisé
                AML/KYC et sachez exactement qui coordonne vos opérations.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#start"
                  onClick={() => handleStartCta("Not sure yet")}
                  className="btn-gold text-center"
                >
                  Commencer — Dès £699/an →
                </a>
                <a href="#how" className="btn-ghost text-center">
                  Voir comment ça marche
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Onboarding à distance · Conformité annuelle · Tenue de livres
                selon vos besoins
              </p>
            </div>

            <div className="mt-11 flex max-w-[800px] flex-wrap gap-y-3 border-t border-border/40 pt-6 text-xs sm:text-sm text-foreground/90">
              {[
                "Partenaire comptable accrédité ACCA",
                "Vérifications AML/KYC avant démarrage",
                "Onboarding à distance pour non-résidents",
                "Forfaits annuels dès £699",
              ].map((item, idx, arr) => (
                <span
                  key={item}
                  className={`w-full sm:w-auto ${
                    idx < arr.length - 1
                      ? "sm:mr-4 sm:border-r sm:border-border/40 sm:pr-4"
                      : ""
                  }`}
                >
                  <strong className="mr-1.5 text-gold">✓</strong>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <Section id="benefits" className="scroll-mt-24">
          <div className="max-w-3xl">
            <Eyebrow>Plus de contrôle. Moins de relances.</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dirigez votre société. Sachez ce qui est pris en charge.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Vivre à l’étranger ne devrait pas signifier deviner quelle
              déclaration britannique arrive ensuite. Nous vous aidons à
              organiser les travaux, les pièces et les professionnels chargés de
              préparer les comptes de votre société.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ▣
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Sachez ce qui doit être déposé
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Comptes annuels, CT600 et confirmation statement — clairement
                définis, avec les échéances vérifiées pour votre société.{" "}
                <Link
                  href="/blog/do-i-need-accountant-uk-company-non-resident"
                  className="font-semibold text-gold hover:underline"
                >
                  Découvrez quelles déclarations UK s’appliquent lorsque vous
                  vivez à l’étranger.
                </Link>
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ↻
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Gardez vos comptes à jour
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Choisissez une tenue de livres mensuelle pour 25 ou 50
                transactions, afin que les reçus et questions ne s’accumulent
                pas jusqu’à la clôture annuelle.
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ◎
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Une seule équipe à contacter
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Seven Oak coordonne votre service tandis qu’un partenaire
                comptable professionnel assure la préparation technique et les
                dépôts.
              </p>
            </article>
          </div>
        </Section>

        {/* PACKAGES SECTION */}
        <Section
          id="packages"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="max-w-3xl">
            <Eyebrow>Forfaits comptables transparents</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Forfaits Comptables Société UK Limited pour Non-Résidents
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Des déclarations annuelles simples jusqu’à la tenue de livres
              mensuelle. Tous les prix ci-dessous sont des tarifs annuels, sous
              réserve d’éligibilité et d’acceptation lors de l’onboarding.{" "}
              <Link
                href="/blog/uk-ltd-accounting-cost"
                className="font-semibold text-gold hover:underline"
              >
                Comprendre les honoraires d’un comptable UK.
              </Link>
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-xl border bg-background p-6 sm:p-7 ${
                  pkg.featured
                    ? "border-2 border-gold shadow-lg lg:-translate-y-2"
                    : "border-border"
                }`}
              >
                {pkg.featured && (
                  <p className="absolute -top-3.5 left-5 rounded bg-gold px-3 py-1.5 text-[0.67rem] font-extrabold uppercase tracking-[0.06em] text-on-gold">
                    RECOMMANDÉ POUR LES SOCIÉTÉS ACTIVES
                  </p>
                )}
                <div className="text-sm font-bold text-gold">{pkg.fit}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
                <div className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground">
                  {pkg.amount}{" "}
                  <small className="font-sans text-sm font-semibold tracking-normal text-muted-foreground">
                    {pkg.amountSuffix}
                  </small>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {pkg.mini}
                </div>

                <ul className="my-6 flex-1 divide-y divide-border/60 text-sm">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 py-2.5 text-foreground/90"
                    >
                      <span
                        className="font-extrabold text-gold"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#start"
                  onClick={() => handleStartCta(pkg.dataPackage)}
                  className={`${
                    pkg.featured ? "btn-gold" : "btn-ghost"
                  } w-full text-center`}
                >
                  {pkg.cta}
                </a>
                <p className="mt-4 text-xs text-muted-foreground">
                  {pkg.exclude}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Des mensualités peuvent être proposées sous réserve d’un accord à
            durée déterminée. Elles ne sont ni automatiques ni résiliables
            librement d’un mois sur l’autre. L’éligibilité au forfait et tout
            travail supplémentaire sont confirmés avant l’engagement.
          </p>

          {/* COMPARISON TABLE */}
          <div className="mt-7 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full border-collapse text-sm">
              <thead className="hidden sm:table-header-group">
                <tr className="border-b border-border bg-muted/70">
                  <th className="px-4 py-3.5 text-left font-bold text-foreground">
                    Ce qui est inclus
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Essential
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Managed
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Managed Plus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_ROWS.map(([label, col1, col2, col3]) => (
                  <tr key={label} className="grid grid-cols-2 sm:table-row">
                    <td className="col-span-2 bg-muted/60 px-4 py-2.5 text-left font-extrabold text-foreground sm:bg-transparent sm:py-3.5 sm:font-medium">
                      {label}
                    </td>
                    <td className="px-4 py-2 text-left text-foreground/90 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Essential : </span>
                      {col1}
                    </td>
                    <td className="px-4 py-2 text-left text-foreground/90 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Managed : </span>
                      {col2}
                    </td>
                    <td className="col-span-2 px-4 py-2 text-left text-foreground/90 sm:col-span-1 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Plus : </span>
                      {col3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* BRIDGE SECTION (#ask) */}
        <Section id="ask" className="border-b border-border bg-card/40">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
            <div>
              <Eyebrow>Vous hésitez sur le forfait adapté ?</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Expliquez-nous l’activité de votre société UK. Nous vous
                aiderons à choisir.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Déjà en activité, récemment immatriculée, dormante ou avec des
                déclarations à rattraper ? Partagez quelques détails et nous
                vous indiquerons l’étape appropriée — sans obligation d’achat
                avant confirmation de votre périmètre.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a
                href="#start"
                onClick={() => handleStartCta("Help me choose")}
                className="btn-gold w-full sm:w-auto text-center"
              >
                Demander à notre équipe →
              </a>
              <a
                href="#faqs"
                className="text-sm font-bold text-gold hover:underline"
              >
                Lire les questions fréquentes ↓
              </a>
            </div>
          </div>
        </Section>

        {/* FOUNDERS ABROAD / TRUST SECTION */}
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <Eyebrow>Conçu pour les fondateurs à l’étranger</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Une société UK. Une vie internationale. Un plan plus clair.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Que vous dirigiez votre UK Ltd depuis la France, l’Inde, les
                Émirats arabes unis, l’Europe ou ailleurs, vos obligations
                comptables ne disparaissent pas lorsque vous résidez hors du
                Royaume-Uni.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Nous aidons les dirigeants à l’étranger à comprendre les travaux
                annuels requis, à coordonner leurs pièces à distance et à
                identifier les cas nécessitant une analyse distincte en matière
                de TVA, d’impôt personnel ou de fiscalité transfrontalière.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Dirigeants à l’étranger",
                  "Propriétaires de UK Ltd",
                  "Fondateurs e-commerce",
                  "Consultants internationaux",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <figure className="overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src="/assets/accounting-founders-1280.webp"
                  srcSet="/assets/accounting-founders-640.webp 640w, /assets/accounting-founders-1280.webp 1280w"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Professionnels examinant ensemble les documents d'une entreprise lors d'une réunion"
                  width={1320}
                  height={890}
                  loading="lazy"
                  decoding="async"
                  className="block h-[210px] w-full object-cover object-[center_47%] sm:h-[265px]"
                />
              </figure>
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS (#how) */}
        <Section
          id="how"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="max-w-3xl">
            <Eyebrow>Un processus d’onboarding pratique</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Du choix de votre forfait à l’organisation de vos comptes.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([badge, title, desc]) => (
              <div key={badge} className="border-t-2 border-gold pt-5">
                <b className="text-xs font-bold tracking-wider text-gold">
                  {badge}
                </b>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROFESSIONAL DELIVERY (DARK BAND) */}
        <Section className="section-dark border-b border-border">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <Eyebrow>Exécution professionnelle</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Expertise comptable accréditée. Un interlocuteur de confiance
                unique.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Seven Oak Prestige est votre point de contact principal et
                coordonne vos services comptables convenus. Les comptes
                techniques et déclarations fiscales sont préparés par notre
                partenaire comptable britannique accrédité ACCA sous les
                autorisations appropriées. Nos vérifications d’identité client
                et contrôles AML/KYC ont lieu avant le début des travaux.
              </p>
              <div className="mt-8">
                <a href="#packages" className="btn-gold text-center">
                  Choisir votre forfait →
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/40 p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-foreground">
                Standards professionnels. Responsabilités claires.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Vos comptes et déclarations fiscales sont préparés via notre
                partenaire comptable britannique accrédité ACCA. Seven Oak
                Prestige coordonne votre service, met à votre disposition un
                interlocuteur dédié et réalise les contrôles AML/KYC requis
                avant le démarrage.
              </p>
            </div>
          </div>
        </Section>

        {/* FAQS SECTION (#faqs) */}
        <Section id="faqs" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.45fr] lg:gap-14">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>Les questions essentielles</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Des réponses claires avant de commencer.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Les règles comptables britanniques peuvent sembler complexes
                lorsqu’on vit à l’étranger. Ces réponses couvrent les questions
                fréquentes sur les dépôts, forfaits, TVA, logiciels, fiscalité
                personnelle et onboarding.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
                {FAQ_GROUPS.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/20 lg:border-0 lg:bg-transparent lg:p-0 lg:text-sm lg:hover:bg-transparent lg:hover:underline"
                  >
                    {group.navLabel}
                  </a>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Informations générales, ne constituant pas un conseil fiscal ou
                juridique individuel.
              </p>
            </div>

            <div className="space-y-9">
              {FAQ_GROUPS.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-28">
                  <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
                    {group.title}
                  </h3>
                  <div className="border-t border-border">
                    {group.items.map(([question, answer]) => (
                      <details
                        key={question}
                        className="group border-b border-border py-1"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-sans text-sm font-bold leading-snug text-foreground transition-colors hover:text-gold sm:text-base">
                          <span>{question}</span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xl leading-none text-gold transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="pb-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                          {answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERT GUIDANCE (#accounting-guides) */}
        <Section
          id="accounting-guides"
          ariaLabelledBy="guide-title"
          className="section-parchment border-t border-border py-12 sm:py-16"
        >
          <Eyebrow>Guides d’experts</Eyebrow>
          <h2
            id="guide-title"
            className="mt-4 max-w-3xl font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Vous explorez encore vos obligations comptables au Royaume-Uni ?
          </h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Deux guides pratiques pour vous aider à prendre une décision
            éclairée.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              aria-label="Lire le guide des tarifs : Combien coûte un comptable pour une société UK Limited ?"
              href="/blog/uk-ltd-accounting-cost"
              className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-gold"
            >
              <span className="flex flex-col gap-1.5">
                <strong className="font-display text-lg font-bold leading-snug text-foreground">
                  Combien coûte un comptable pour une société UK Limited ?
                </strong>
                <span className="text-sm text-muted-foreground">
                  Honoraires, comptes annuels, CT600 et tenue de livres.
                </span>
              </span>
              <span className="text-sm font-bold text-gold">
                Lire le guide des coûts ↗
              </span>
            </Link>

            <Link
              aria-label="Lire le guide non-résident : Ai-je besoin d'un comptable si je vis à l'étranger ?"
              href="/blog/do-i-need-accountant-uk-company-non-resident"
              className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-gold"
            >
              <span className="flex flex-col gap-1.5">
                <strong className="font-display text-lg font-bold leading-snug text-foreground">
                  Ai-je besoin d’un comptable si je vis à l’étranger ?
                </strong>
                <span className="text-sm text-muted-foreground">
                  Vos obligations au Royaume-Uni et quand l’accompagnement
                  professionnel est utile.
                </span>
              </span>
              <span className="text-sm font-bold text-gold">
                Lire le guide non-résident ↗
              </span>
            </Link>
          </div>
        </Section>

        {/* FURTHER GUIDANCE */}
        <Section className="section-parchment border-t border-border">
          <div className="max-w-3xl">
            <Eyebrow>Ressources officielles</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprenez les obligations avant de décider.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Pour plus de détails sur vos obligations, consultez les guides
              officiels britanniques ci-dessous. Notre équipe peut également
              vous expliquer comment ces règles s’appliquent à votre société.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.gov.uk/annual-accounts"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Comptes annuels d’une société UK ↗
            </a>
            <a
              href="https://www.gov.uk/company-tax-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Déclarations d’impôt sur les sociétés ↗
            </a>
            <a
              href="https://www.gov.uk/running-a-limited-company"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Gérer une société UK Limited ↗
            </a>
          </div>
        </Section>

        {/* START WITH SEVEN OAK / LEAD FORM (#start) */}
        <Section
          id="start"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="grid gap-8 rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>Démarrer avec Seven Oak</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Parlez-nous de votre société britannique.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Partagez quelques informations pour démarrer votre demande. Nous
                examinerons vos besoins, confirmerons le périmètre de service
                approprié et vous expliquerons les contrôles AML/KYC requis
                avant le début des travaux.
              </p>
              <div className="mt-6 space-y-2 text-sm font-bold text-gold">
                <div>✓ Partenaire comptable accrédité ACCA</div>
                <div>✓ Contrôles AML/KYC avant démarrage</div>
                <div>✓ Accompagnement où que vous viviez</div>
              </div>
            </div>

            <form
              id="lead-form"
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                handleSendEmail();
              }}
              className="grid gap-2.5"
            >
              <label
                htmlFor="pkg"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Forfait souhaité
              </label>
              <select
                id="pkg"
                required
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="Not sure yet">Pas encore sûr</option>
                <option value="Essential Accounting">
                  Essential Accounting
                </option>
                <option value="Managed Accounting">Managed Accounting</option>
                <option value="Managed Plus">Managed Plus</option>
                <option value="Help me choose">Aidez-moi à choisir</option>
              </select>

              <label
                htmlFor="company"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Nom de la société UK (optionnel)
              </label>
              <input
                id="company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Votre société UK Limited"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="country"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Où résidez-vous ?
              </label>
              <input
                id="country"
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="ex. France, Belgique, Suisse, Émirats"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="activity"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Quelle est l’activité de votre société ?
              </label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="Trading / active business">
                  Société commerciale / active
                </option>
                <option value="Newly incorporated">
                  Récemment immatriculée
                </option>
                <option value="Dormant / no activity">
                  Dormante / sans activité
                </option>
                <option value="E-commerce / Amazon">
                  E-commerce / Amazon
                </option>
                <option value="Overdue filings">Déclarations en retard</option>
                <option value="Other / not sure">Autre / pas sûr</option>
              </select>

              <label
                htmlFor="note"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Autre précision ? (optionnel)
              </label>
              <textarea
                id="note"
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Par exemple : 20 transactions par mois, assujetti TVA, clôture proche"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <button
                id="email-send"
                type="button"
                onClick={handleSendEmail}
                className="btn-gold mt-1 w-full cursor-pointer text-center"
              >
                Envoyer ma demande par e-mail →
              </button>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Veuillez ne pas inclure de numéros de passeport, pièces
                d’identité ou documents financiers sensibles dans cette demande.
                Les instructions sécurisées AML/KYC suivront séparément.
              </p>
            </form>
          </div>
        </Section>

        {/* FINAL CTA SECTION */}
        <section className="section-dark px-5 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Prêt quand vous l’êtes</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Vous dirigez l’entreprise. Nous aidons à garder la comptabilité UK
              organisée.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Choisissez un forfait ou présentez-nous votre société. Nous
              confirmerons l’éligibilité, réaliserons les contrôles AML/KYC et
              vous expliquerons les prochaines étapes avant le début des travaux
              comptables.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#start"
                onClick={() => handleStartCta("Not sure yet")}
                className="btn-gold text-center"
              >
                Commencer →
              </a>
              <a
                href="#start"
                onClick={() => handleStartCta("Not sure yet")}
                className="btn-ghost text-center"
              >
                Poser une question →
              </a>
            </div>
          </div>
        </section>

        {/* LEGAL DISCLAIMER */}
        <section className="border-t border-border bg-background px-5 py-8 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-3 text-xs leading-6 text-muted-foreground">
            <p>
              <strong className="font-bold text-foreground">Important : </strong>
              Les prix des forfaits sont basés sur des micro-entités éligibles
              et sur le périmètre de service indiqué. Les déclarations de TVA,
              abonnements logiciels, travaux de rattrapage historique, paie,
              comptes de groupe et conseils fiscaux internationaux complexes ne
              sont pas inclus sauf accord exprès. Tous les services sont soumis
              aux contrôles d’éligibilité, d’identité et AML/KYC, à
              l’acceptation professionnelle et à une lettre de mission écrite.
              Les dirigeants demeurent responsables de leurs obligations
              statutaires.
            </p>
            <p>
              Références réglementaires :{" "}
              <a
                href="https://www.gov.uk/running-a-limited-company"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                GOV.UK
              </a>{" "}
              ·{" "}
              <a
                href="https://www.gov.uk/annual-accounts"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Comptes annuels
              </a>{" "}
              ·{" "}
              <a
                href="https://www.gov.uk/running-a-limited-company/confirmation-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Confirmation statements
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta
        primaryLabel="Commencer"
        secondaryLabel="WhatsApp"
        primaryHref="#start"
      />
    </div>
  );
}
