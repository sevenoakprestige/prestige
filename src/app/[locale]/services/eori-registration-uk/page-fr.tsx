"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  Mail,
  MessageCircle,
  Package,
  Plus,
  Ship,
  Truck,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/dRm28j58A5nveEBe3Ofw40n";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const ASK_TEXT = "Je souhaite demander une assistance à l'enregistrement EORI GB (£60 au total)";
const EMAIL_SUBJECT = "Demande d'assistance à l'enregistrement EORI — £60";
const EMAIL_BODY = `Bonjour Seven Oak Prestige,\n\n${ASK_TEXT}.\nNom de la société (si constituée) :\nActivité commerciale :\nPays concernés :\n\nMerci de confirmer le périmètre et les prochaines étapes.`;
const WHATSAPP_TEXT = `Bonjour Seven Oak Prestige, ${ASK_TEXT}. Merci de confirmer le périmètre et les prochaines étapes.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const HMRC_SOURCES = {
  eoriApply: "https://www.gov.uk/eori/apply-for-eori",
  eoriProcess:
    "https://www.gov.uk/guidance/economic-operators-registration-and-identification-eori/registration-process",
  eoriRules:
    "https://www.gov.uk/guidance/economic-operators-registration-and-identification-eori/introduction",
  eoriCheck: "https://www.gov.uk/check-eori-number",
  eoriRequirements: "https://www.gov.uk/eori",
} as const;

const QUICK_FACTS = [
  [
    "Prix total",
    "£60 au total pour l’assistance professionnelle à la demande d’EORI GB.",
  ],
  [
    "Inclus",
    "Vérification du besoin, examen des informations, préparation du dossier, soumission convenue, numéro confirmé.",
  ],
  [
    "HMRC décide de l’issue",
    "HMRC attribue le numéro et peut effectuer des contrôles au préalable. L’attribution n’est jamais garantie.",
  ],
  [
    "Délai HMRC",
    "Généralement immédiat. Jusqu’à 5 jours ouvrés si HMRC effectue des vérifications.",
  ],
] as const;

type ScopeStatus = "included" | "separate" | "not-offered";

const JURISDICTION_ROWS: readonly {
  code: string;
  usedFor: string;
  support: string;
  status: ScopeStatus;
}[] = [
  {
    code: "GB EORI",
    usedFor:
      "Mouvements de marchandises entre la Grande-Bretagne (Angleterre, Écosse, Pays de Galles) et d’autres pays.",
    support: "Assistance demande GB — £60 au total",
    status: "included",
  },
  {
    code: "XI EORI",
    usedFor:
      "Certaines activités douanières en Irlande du Nord. Vous devez d’abord disposer d’un EORI GB.",
    support: "Non inclus dans les £60 — à confirmer par écrit au préalable",
    status: "separate",
  },
  {
    code: "EU EORI",
    usedFor:
      "Activités douanières dans l’UE. Délivré par un État membre de l’UE, et non par HMRC.",
    support: "Non proposé",
    status: "not-offered",
  },
];

const EXAMPLES = [
  {
    title: "Nouvelle société britannique important de Chine",
    facts:
      "Une société britannique (UK Ltd) récemment créée achète du stock à Shenzhen pour le livrer à ses clients au Royaume-Uni.",
    dependsOn:
      "De savoir si la société figure comme importateur sur la déclaration en douane et des informations dont son transitaire a besoin.",
    outcome:
      "La société aura généralement besoin d’un EORI GB avant l’arrivée des marchandises. L’enregistrement à la TVA n’est pas requis pour faire la demande.",
  },
  {
    title: "Vendeur non britannique expédiant vers la Grande-Bretagne",
    facts:
      "Une société basée aux États-Unis vend des marchandises à des clients en Grande-Bretagne et souhaite agir en tant qu’importateur.",
    dependsOn:
      "De son rôle douanier et de l’application éventuelle des conditions de GOV.UK pour une entreprise non établie au Royaume-Uni ; à défaut, un représentant en douane peut être nécessaire.",
    outcome:
      "Elle peut être éligible à un EORI GB ou avoir besoin d’un représentant en douane. Nous vérifions ce point avant toute soumission.",
  },
] as const;

const SCOPE_ROWS: readonly { item: string; status: ScopeStatus; note: string }[] = [
  {
    item: "Vérification de la nécessité d’un EORI GB",
    status: "included",
    note: "Et vérification d’un numéro déjà existant",
  },
  {
    item: "Préparation de la demande d’EORI GB",
    status: "included",
    note: "Avec votre approbation",
  },
  {
    item: "Modalités de soumission convenues",
    status: "included",
    note: "Qui soumet et avec quelle autorisation, confirmé par écrit",
  },
  {
    item: "Confirmation et vérification du numéro attribué",
    status: "included",
    note: "Via l’outil de vérification officiel GOV.UK",
  },
  {
    item: "EORI XI (Irlande du Nord)",
    status: "separate",
    note: "Non inclus dans les £60 ; à confirmer par écrit au préalable",
  },
  {
    item: "Demandes d’EORI UE",
    status: "not-offered",
    note: "Délivré par les États membres de l’UE",
  },
  {
    item: "Déclarations en douane, droits, licences, transport",
    status: "not-offered",
    note: "Faites appel à un déclarant en douane ou un transitaire",
  },
];

const AFTER_ENQUIRY = [
  [
    "Le paiement lance l’intégration",
    "Une fois le paiement confirmé par Stripe, l’intégration commence par vos marchandises, votre flux commercial et votre rôle douanier. Le paiement ne garantit ni l’obtention d’un EORI GB ni l’acceptation du service.",
  ],
  [
    "Nous confirmons le périmètre par écrit",
    "Assistance à la demande GB pour £60 au total, qui soumet et ce qui est exclu, avant le début des travaux. Si l’éligibilité est incertaine, contactez-nous avant de payer.",
  ],
  [
    "Vous partagez vos informations en sécurité",
    "Via le canal sécurisé que nous vous indiquons, jamais par e-mail ouvert ni sur WhatsApp.",
  ],
  [
    "Vous validez, puis le dossier est transmis à HMRC",
    "HMRC attribue généralement le numéro immédiatement, ou sous 5 jours ouvrés après vérifications.",
  ],
] as const;

const PROCESS_STAGES = [
  [
    "Identifier le besoin",
    "Analyse des marchandises, du rôle douanier et des pays concernés. Vérification d’un numéro existant et de la juridiction pertinente (GB, XI ou autre).",
  ],
  [
    "Collecter les informations",
    "Rassemblement des informations sur l’entité juridique, l’adresse professionnelle et l’activité. Confirmation de la personne autorisée à postuler et demande des pièces via un canal sécurisé approuvé.",
  ],
  [
    "Préparer la demande",
    "Vérification avec vous des champs requis et des données d’identification. Les informations de TVA sont utilisées le cas échéant ; être assujetti à la TVA n’est pas un prérequis général.",
  ],
  [
    "Soumettre auprès de HMRC",
    "Utilisation de la voie de demande GB appropriée avec votre autorisation. Si un numéro XI est requis, la demande GB précède. Confirmez tout périmètre d’assistance XI avant de poursuivre.",
  ],
  [
    "Vérifier le résultat",
    "Confirmation du numéro attribué et de la manière de le vérifier. Transmission à votre déclarant en douane si nécessaire ; les déclarations douanières, droits et licences restent séparés.",
  ],
] as const;

const DOCUMENTS = [
  "Dénomination sociale, adresse professionnelle et coordonnées",
  "Numéro Unique Taxpayer Reference (UTR), le cas échéant",
  "Date de début d’activité et code SIC (Standard Industrial Classification)",
  "Accès Government Gateway ou voie de demande autorisée appropriée",
  "Numéro de TVA et date d’effet, si l’entreprise est enregistrée à la TVA",
  "Informations d’identité telles qu’un numéro National Insurance lorsque la voie l’exige",
] as const;

const AFTER_OUTCOME_FEATURES = [
  [
    "Validez le numéro",
    "Utilisez GOV.UK pour vérifier un EORI GB. Suivez ses instructions pour la validation UE ou XI. Un numéro valide ne prouve ni le statut TVA ni l’autorisation d’importer un produit particulier.",
  ],
  [
    "Informez votre déclarant en douane",
    "Transmettez le bon numéro et convenez de qui prépare les déclarations. Clarifiez la représentation et la responsabilité avant le départ des marchandises plutôt qu’à la frontière.",
  ],
  [
    "Gardez les autres obligations distinctes",
    "Les déclarations, licences, normes produits, droits de douane et TVA à l’importation peuvent toujours s’appliquer. L’EORI vous identifie ; il ne remplace pas ces exigences.",
  ],
] as const;

const FAQS = [
  {
    q: "Qu’apporte une assistance professionnelle ?",
    a: "Vous payez pour une aide pratique, et non pour un accès privilégié à HMRC. L’assistance proposée couvre l’examen de votre situation d’enregistrement et des informations requises, la vérification des détails du dossier avec vous, la définition des modalités de soumission et l’explication du résultat. Confirmez par écrit les services exacts et l’autorisation avant de poursuivre. Toute assistance aux questions de HMRC doit être convenue séparément dans ce cadre ; les relances illimitées, les recours et la représentation continue ne sont pas inclus. Une assistance payante ne garantit ni l’éligibilité, ni l’approbation, ni un traitement accéléré.",
  },
  {
    q: "Combien coûte l’enregistrement EORI ?",
    a: "Seven Oak Prestige facture £60 au total pour l’assistance professionnelle à la demande d’EORI GB. HMRC ne facture aucuns frais de délivrance ; les £60 rémunèrent donc intégralement notre assistance, et non un droit de douane ou une taxe gouvernementale.",
  },
  {
    q: "Combien de temps faut-il pour obtenir un numéro EORI GB ?",
    a: "HMRC délivre normalement un EORI GB immédiatement. Si des vérifications sont nécessaires, cela peut prendre jusqu’à cinq jours ouvrés. Il s’agit du délai publié par HMRC, et non d’une promesse de soumission de Seven Oak ou d’une garantie d’approbation. Les demandes XI peuvent prendre jusqu’à cinq jours ouvrés.",
  },
  {
    q: "Dois-je être enregistré à la TVA avant de demander un EORI ?",
    a: "Non. Vous n’avez pas besoin d’être enregistré à la TVA pour obtenir un numéro EORI. Si vous êtes enregistré à la TVA, fournissez les détails de TVA correspondants lorsque demandé. L’enregistrement à la TVA et l’enregistrement EORI répondent à des objectifs différents et doivent être évalués séparément.",
  },
  {
    q: "Quelle est la différence entre les numéros EORI GB, XI et UE ?",
    a: "Les numéros GB sont utilisés pour les activités douanières pertinentes en Grande-Bretagne. Un numéro XI est requis pour certaines activités douanières en Irlande du Nord et vous devez d’abord demander un numéro GB si vous n’en avez pas déjà un. Un EORI UE est délivré par un État membre de l’UE pour les activités douanières pertinentes dans l’UE. Un numéro GB ne remplace pas un EORI UE ; cette page ne propose pas de service de demande pour l’UE.",
  },
  {
    q: "Une entreprise non établie au Royaume-Uni peut-elle demander un EORI GB ?",
    a: "Une entreprise non établie au Royaume-Uni peut avoir besoin d’un EORI GB pour certaines activités douanières spécifiques, mais l’éligibilité dépend de son rôle. GOV.UK précise les cas et les exceptions. Dans d’autres situations, un représentant en douane peut devoir agir pour son compte. La détention étrangère d’une société britannique n’est pas, en soi, un motif de rejet ou d’approbation d’une demande.",
  },
  {
    q: "Les vendeurs Amazon ont-ils besoin d’un numéro EORI ?",
    a: "Un vendeur agissant en tant qu’importateur de marchandises en Grande-Bretagne aura généralement besoin d’un EORI GB pour le processus douanier. Acheter des marchandises déjà présentes au Royaume-Uni ou vendre des services est différent. Confirmez qui est l’importateur et qui soumet les déclarations avec votre transitaire ou déclarant en douane ; un compte sur une place de marché ne suffit pas à lui seul à établir cette obligation.",
  },
  {
    q: "L’EORI de mon déclarant en douane peut-il remplacer le mien ?",
    a: "Pas automatiquement. Les numéros appropriés dépendent de votre rôle douanier et du type de représentation. Votre déclarant peut avoir besoin de votre EORI en plus du sien. Convenez des modalités de déclaration et de la responsabilité des droits avant le départ des marchandises, en particulier si votre entreprise n’est pas établie au Royaume-Uni.",
  },
  {
    q: "Comment vérifier un numéro EORI existant ?",
    a: "Utilisez le service officiel GOV.UK « Check an EORI number » pour un numéro GB. Un résultat valide ne prouve ni la solvabilité, ni le statut TVA, ni l’autorisation d’importer des marchandises spécifiques. Utilisez le service de validation européen approprié pour les vérifications UE ou XI selon les indications de GOV.UK.",
  },
  {
    q: "Un numéro EORI autorise-t-il les importations ou supprime-t-il les frais de douane ?",
    a: "Non. Il identifie l’entreprise à des fins douanières. Vous pouvez toujours avoir besoin de déclarations, de licences, de contrôles produits et du paiement de la TVA à l’importation ou des droits de douane. L’enregistrement EORI ne garantit ni le dédouanement à la frontière, ni l’approbation bancaire, ni l’acceptation par une place de marché.",
  },
  {
    q: "Une demande XI est-elle incluse dans les £60 ?",
    a: "Le total de £60 couvre uniquement l’assistance à la demande d’EORI GB. L’accompagnement XI ainsi que son tarif ou son inclusion n’ont pas été confirmés. Indiquez-nous si l’Irlande du Nord est concernée afin que nous puissions confirmer par écrit le numéro requis et tout accompagnement XI avant de poursuivre. Ne supposez pas qu’une demande XI supplémentaire ou une demande d’EORI UE est incluse.",
  },
  {
    q: "Puis-je demander un numéro EORI moi-même ?",
    a: "Oui. Vous pouvez faire la demande directement sur GOV.UK sans frais facturés par HMRC. Notre tarif rémunère la préparation professionnelle et l’assistance à la demande ; il n’accélère pas les vérifications de HMRC et ne garantit pas l’approbation. Vérifiez si votre entreprise possède déjà le bon numéro avant de déposer une nouvelle demande.",
  },
] as const;

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Assistance à l'Enregistrement EORI GB",
      description:
        "Assistance à l'enregistrement EORI GB : £60 au total. Pour importateurs, exportateurs UK et sociétés étrangères éligibles. Vérification des besoins, préparation du dossier et confirmation du numéro. XI et UE non inclus.",
      url: "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
      provider: {
        "@type": "Organization",
        name: "Seven Oak Prestige Ltd",
      },
      offers: {
        "@type": "Offer",
        price: 60,
        priceCurrency: "GBP",
        url: "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
        description:
          "Total client de £60 pour l'assistance professionnelle à l'enregistrement par Seven Oak. HMRC ne facture aucuns frais d'enregistrement.",
      },
    },
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
          name: "Assistance à l'Enregistrement EORI",
          item: "https://www.sevenoakprestige.com/fr/services/eori-registration-uk",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    },
  ],
};

function ServiceOrderActions() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-service-order="eori"
          data-payment="true"
          className="btn-gold w-full sm:w-auto gap-2.5"
        >
          <CreditCard aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Payer £60 — Démarrer l’enregistrement EORI GB</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold underline-offset-4 hover:underline"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Demander sur WhatsApp</span>
        </a>
        <a
          href={EMAIL_HREF}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold underline-offset-4 hover:underline"
        >
          <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Contacter par e-mail</span>
        </a>
      </div>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        Le paiement lance l’intégration, sous réserve d’acceptation du service et des vérifications
        d’identité/AML requises. Il n’autorise pas l’utilisation d’une adresse et ne garantit pas
        l’approbation de HMRC.
      </p>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        Paiement unique d’assistance. Choisissez GBP pour bénéficier du tarif affiché ; les autres
        devises et frais de conversion peuvent différer.
      </p>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        Consultez nos{" "}
        <Link href="/fr/terms" className="underline hover:text-gold">
          conditions générales
        </Link>{" "}
        et notre{" "}
        <Link href="/fr/refund" className="underline hover:text-gold">
          politique de remboursement
        </Link>{" "}
        avant de payer. Demandez-nous de clarifier leur application à ce service si nécessaire.
      </p>
    </div>
  );
}

function EoriRegistrationVisual() {
  return (
    <figure
      className="m-0 border-b border-border py-5 text-foreground"
      aria-label="Diagramme de fret montrant des marchandises voyageant par route et par mer avec un numéro d’identification douanière"
    >
      <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
        <Package aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span>EORI / IDENTIFICATION DOUANIÈRE</span>
      </div>
      <svg
        viewBox="0 0 600 230"
        role="img"
        aria-label="Illustration linéaire originale d’un porte-conteneurs transportant du fret"
        className="mt-4 h-auto w-full fill-none stroke-gold stroke-2"
      >
        <path d="M40 156h515l-38 47H105zM92 152V60h105v92M92 91h105M127 60v92M161 60v92M206 152V93h106v59M241 93v59M277 93v59M324 152v-39h99v39M357 113v39M390 113v39M456 152V77h47v75M456 100h47M467 77V52h25v25M25 219h550" />
      </svg>
      <div className="mt-3 flex items-center justify-between gap-2 text-gold">
        <Truck aria-hidden="true" className="h-5 w-5 shrink-0" />
        <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        <span className="text-xs sm:text-[0.8rem] text-foreground">GB EORI</span>
        <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        <Ship aria-hidden="true" className="h-5 w-5 shrink-0" />
      </div>
      <figcaption className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground">
        Un numéro pour la douane. Pas une licence d’importation.
      </figcaption>
    </figure>
  );
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] leading-relaxed text-gold underline-offset-4 hover:underline"
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
    </a>
  );
}

export default function EORIRegistrationServicePageFr() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON_LD) }}
      />

      <main>
        {/* ── HERO SECTION ── */}
        <section className="section-dark border-b border-border pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav
              aria-label="Fil d’Ariane"
              className="mb-7 flex flex-wrap gap-2 text-xs text-muted-foreground"
            >
              <Link href="/fr" className="hover:text-gold transition-colors">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground">
                Assistance à l’enregistrement EORI
              </span>
            </nav>

            <p className="eyebrow">Assistance à l’enregistrement EORI GB — £60 au total</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Service d’Enregistrement de Numéro EORI GB pour Importateurs et Sociétés Étrangères
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Obtenez le bon numéro EORI avant le départ de vos marchandises. Nous vérifions votre
              besoin d’un EORI GB, préparons la demande avec vous et confirmons le numéro délivré
              par HMRC.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
              Pour les entreprises important des marchandises en Grande-Bretagne ou exportant depuis
              celle-ci — y compris les nouvelles sociétés britanniques, les vendeurs Amazon agissant
              comme importateurs et les entreprises étrangères éligibles.
            </p>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div>
                <p className="font-display text-4xl leading-tight sm:text-[2.75rem]">
                  £60
                  <span className="ml-3 font-sans text-sm text-muted-foreground">
                    au total · assistance professionnelle, périmètre confirmé par écrit
                  </span>
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>
              <EoriRegistrationVisual />
            </div>

            <dl className="mt-8 grid gap-px border border-border bg-border md:grid-cols-4">
              {QUICK_FACTS.map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">{k}</dt>
                  <dd className="mt-1.5 text-xs sm:text-[0.85rem] leading-relaxed text-foreground/90">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── ON THIS PAGE NAV ── */}
        <nav
          aria-label="Sur cette page"
          className="section-parchment border-b border-border py-4 px-5 sm:px-6 text-xs"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3">
            <a href="#eligibility" className="hover:underline underline-offset-4">
              Éligibilité
            </a>
            <a href="#scope" className="hover:underline underline-offset-4">
              Ce qui est inclus
            </a>
            <a href="#process" className="hover:underline underline-offset-4">
              Fonctionnement
            </a>
            <a href="#cost" className="hover:underline underline-offset-4">
              Coût &amp; délais
            </a>
            <a href="#faqs" className="hover:underline underline-offset-4">
              FAQ
            </a>
          </div>
        </nav>

        {/* ── DEFINITION ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Numéro EORI UK</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Qu’est-ce qu’un numéro EORI ?
            </h2>
            <div className="mt-7">
              <p className="max-w-3xl text-base leading-relaxed">
                Un numéro EORI (Economic Operators Registration and Identification) identifie une
                entreprise dans les procédures douanières. Un EORI GB est généralement nécessaire
                pour faire circuler des marchandises entre la Grande-Bretagne et d’autres pays. Il ne
                s’agit ni d’un enregistrement à la TVA, ni d’une licence douanière, ni d’une garantie
                que des marchandises peuvent être importées.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
                <span className="text-sm">EORI = identification douanière</span>
                <span className="text-sm text-muted-foreground">
                  L’enregistrement à la TVA n’est pas requis pour obtenir un EORI
                </span>
                <Link
                  href="/fr/services/vat-registration-uk"
                  className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] text-gold underline-offset-4 hover:underline"
                >
                  <span>Assistance à l’enregistrement à la TVA</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── JURISDICTIONS (ELIGIBILITY) ── */}
        <section
          id="eligibility"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Choisir la bonne juridiction</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              GB, XI ou UE : de quel numéro EORI avez-vous besoin ?
            </h2>
            <div className="mt-7">
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[36rem] border-collapse text-xs sm:text-[0.85rem]">
                  <thead>
                    <tr className="bg-background">
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Numéro
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Utilisation
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Prise en charge Seven Oak
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {JURISDICTION_ROWS.map((row) => (
                      <tr key={row.code}>
                        <th
                          scope="row"
                          className="border-b border-border py-3.5 px-4 text-left align-top font-display font-semibold text-gold"
                        >
                          {row.code}
                        </th>
                        <td className="border-b border-border py-3.5 px-4 align-top">
                          {row.usedFor}
                        </td>
                        <td className="border-b border-border py-3.5 px-4 align-top">
                          <span
                            className={`inline-block whitespace-nowrap border px-2 py-0.5 text-xs ${
                              row.status === "included"
                                ? "border-gold text-foreground"
                                : row.status === "separate"
                                  ? "border-border text-foreground"
                                  : "border-border text-muted-foreground"
                            }`}
                          >
                            {row.support}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Une entreprise non britannique peut avoir besoin d’un EORI GB pour certaines
                activités douanières spécifiques. L’éligibilité dépend de son rôle, et non simplement
                du lieu de résidence de son propriétaire. Un représentant en douane peut être requis
                dans d’autres circonstances. Indiquez-nous votre flux logistique et qui agit en tant
                qu’importateur avant de déposer une demande.
              </p>

              <div className="mt-6 flex flex-wrap gap-5">
                <SourceLink href={HMRC_SOURCES.eoriRequirements}>
                  Vérifier si vous avez besoin d’un EORI
                </SourceLink>
                <SourceLink href={HMRC_SOURCES.eoriApply}>Demandes HMRC GB et XI</SourceLink>
                <SourceLink href={HMRC_SOURCES.eoriRules}>
                  Guide des juridictions EORI
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORKED EXAMPLES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Exemples concrets</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              EORI GB pour les importations : deux cas fréquents
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2">
                {EXAMPLES.map((ex) => (
                  <article key={ex.title} className="border border-border bg-background p-5">
                    <h3 className="font-display text-xl">{ex.title}</h3>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          Les faits
                        </dt>
                        <dd className="mt-1">{ex.facts}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          Cela dépend de
                        </dt>
                        <dd className="mt-1 text-muted-foreground">{ex.dependsOn}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          Issue probable
                        </dt>
                        <dd className="mt-1">{ex.outcome}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Exemples illustratifs, ne constituant ni des études de cas clients ni un conseil
                fiscal ou douanier individuel.
              </p>
            </div>
          </div>
        </section>

        {/* ── SCOPE TABLE ── */}
        <section
          id="scope"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Ce que couvrent les £60</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Inclus, périmètre séparé ou non proposé
            </h2>
            <div className="mt-7">
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[36rem] border-collapse text-xs sm:text-[0.85rem]">
                  <thead>
                    <tr className="bg-background">
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Élément
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Statut
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCOPE_ROWS.map((row) => (
                      <tr key={row.item}>
                        <th
                          scope="row"
                          className="border-b border-border py-3.5 px-4 text-left align-top font-semibold"
                        >
                          {row.item}
                        </th>
                        <td className="border-b border-border py-3.5 px-4 align-top">
                          <span
                            className={`inline-block whitespace-nowrap border px-2 py-0.5 text-xs ${
                              row.status === "included"
                                ? "border-gold text-foreground"
                                : row.status === "separate"
                                  ? "border-border text-foreground"
                                  : "border-border text-muted-foreground"
                            }`}
                          >
                            {row.status === "included"
                              ? "Inclus"
                              : row.status === "separate"
                                ? "Périmètre séparé"
                                : "Non proposé"}
                          </span>
                        </td>
                        <td className="border-b border-border py-3.5 px-4 align-top text-muted-foreground">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                HMRC prend la décision et peut demander des justificatifs supplémentaires. Nous ne
                promettons ni l’attribution d’un numéro, ni une date d’approbation, ni l’acceptation
                par une banque ou une place de marché.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER YOU GET STARTED ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Sans surprise</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Que se passe-t-il après avoir commencé
            </h2>
            <div className="mt-7">
              <ol className="grid list-none gap-4 p-0 md:grid-cols-4">
                {AFTER_ENQUIRY.map(([title, text], i) => (
                  <li key={title} className="border border-border bg-background p-5">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center border border-border font-display text-gold"
                    >
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-muted-foreground">
                Notre temps de préparation dépend de la rapidité avec laquelle nous recevons des
                informations complètes ; nous ne promettons pas de délai fixe.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS (5 STAGES) ── */}
        <section id="process" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">5 étapes claires</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Comment fonctionne notre assistance à la demande d’EORI
            </h2>
            <div className="mt-7">
              <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                {PROCESS_STAGES.map(([title, text], index) => (
                  <li key={title} className="flex gap-4 lg:flex-col">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center border border-border font-display text-gold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── DETAILS NEEDED ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Préparez avant de postuler</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Informations nécessaires pour une demande de numéro EORI
            </h2>
            <div className="mt-7">
              <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                {DOCUMENTS.map((text) => (
                  <li key={text} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="text-gold">
                      —
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Les entreprises basées hors du Royaume-Uni n’ont pas besoin d’un numéro UTR
                britannique, d’un code SIC ou d’un numéro National Insurance pour la demande GB. Les
                exigences dépendent du demandeur et de la voie utilisée. N’envoyez pas de
                passeports, mots de passe ou documents financiers sensibles dans un premier e-mail
                ou message WhatsApp. Demandez le canal de transmission sécurisé approuvé.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.eoriApply}>
                  Liste des informations requises par HMRC
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── COST & TIMING ── */}
        <section id="cost" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Tarification &amp; délais transparents</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              £60 au total pour l’assistance à l’enregistrement EORI GB
            </h2>
            <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="border-t border-gold border-b border-b-border py-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                    Assistance EORI GB
                  </p>
                  <p className="mt-3 font-display text-4xl leading-tight sm:text-[2.75rem]">
                    £60
                    <span className="ml-3 font-sans text-sm text-muted-foreground">au total</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed">
                    Vérification du besoin GB, préparation du dossier et modalités de soumission
                    convenues.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Le prix correspond à l’assistance professionnelle de Seven Oak. Les droits de
                  douane, la TVA à l’importation et les services de déclaration sont séparés.
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl">
                  GB : généralement immédiat, sauf si des vérifications sont nécessaires
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  HMRC délivre normalement les numéros GB immédiatement. Les vérifications peuvent
                  prendre jusqu’à 5 jours ouvrés. Les demandes XI peuvent prendre jusqu’à 5 jours
                  ouvrés et nécessitent d’abord une demande GB. Il s’agit des délais de HMRC, et non
                  d’un délai de soumission garanti par Seven Oak.
                </p>
                <h3 className="mt-7 font-display text-xl">Postuler directement via GOV.UK</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vous pouvez également faire votre demande directement sur GOV.UK sans frais HMRC.
                  Notre tarif couvre la préparation professionnelle et l’assistance à
                  l’enregistrement.
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <SourceLink href={HMRC_SOURCES.eoriApply}>
                    Postuler directement auprès de HMRC
                  </SourceLink>
                  <SourceLink href={HMRC_SOURCES.eoriProcess}>
                    Consulter les directives de délais de HMRC
                  </SourceLink>
                  <SourceLink href={HMRC_SOURCES.eoriRules}>Introduction EORI de HMRC</SourceLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AFTER THE OUTCOME ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Après la décision</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Utilisez correctement votre numéro EORI — et vérifiez-le
            </h2>
            <div className="mt-7">
              <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">
                {AFTER_OUTCOME_FEATURES.map(([title, text]) => (
                  <article key={title} className="border-t border-border pt-5">
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <SourceLink href={HMRC_SOURCES.eoriCheck}>Vérifier un numéro EORI GB</SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section id="faqs" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Réponses directes</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              FAQ sur l’enregistrement EORI au Royaume-Uni
            </h2>
            <div className="mt-7 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-sm font-semibold sm:text-base">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENQUIRE CTA ── */}
        <section id="enquire" className="section-dark scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Seven Oak Prestige Ltd</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl">
              Mettez votre identification douanière en règle
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Indiquez-nous votre activité commerciale et les pays concernés. Nous échangerons sur
              l’accompagnement d’enregistrement approprié et confirmerons le périmètre avant toute
              démarche.
            </p>
            <div className="mt-6">
              <ServiceOrderActions />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Aucun document sensible n’est requis pour une première prise de contact.
            </p>
          </div>
        </section>

        {/* ── RELATED SUPPORT & GUIDES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Accompagnement connexe</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Reliez votre enregistrement à vos obligations comptables continues
            </h2>
            <div className="mt-7 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-start gap-4 text-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                  Services associés
                </p>
                <Link
                  href="/fr/services/vat-registration-uk"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Assistance à l’enregistrement à la TVA</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/fr/services/uk-accounting-non-residents"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Comptabilité &amp; conformité UK</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/fr/services/uk-company-formation-for-non-residents"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Création de société UK pour non-résidents</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/fr/blog"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Guides d’entreprise UK</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>

              <div className="flex flex-col items-start gap-4 text-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                  Guides associés de notre blog
                </p>
                <Link
                  href="/fr/blog/uk-ltd-ecommerce-france"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>UK Ltd pour E-commerce depuis la France : TVA, EORI &amp; Stock 2026</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/fr/blog/amazon-fba-uk-company-non-residents-2026"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Amazon FBA UK pour Non-Résidents : Faut-il une UK Ltd ? (2026)</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/fr/blog/uk-ecommerce-company-non-residents-2026"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Société E-Commerce UK pour Non-Résidents | TVA &amp; Banque 2026</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

