"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  Plus,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/aFafZ9bwY5nvdAx3pafw40o";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const ASK_TEXT = "Je souhaite demander une assistance à l'enregistrement à la TVA UK (£144 au total)";
const EMAIL_SUBJECT = "Demande d'assistance à l'enregistrement TVA — £144";
const EMAIL_BODY = `Bonjour Seven Oak Prestige,\n\n${ASK_TEXT}.\nNom de la société (si constituée) :\nActivité commerciale :\nPays concernés :\n\nMerci de confirmer le périmètre et les prochaines étapes.`;
const WHATSAPP_TEXT = `Bonjour Seven Oak Prestige, ${ASK_TEXT}. Merci de confirmer le périmètre et les prochaines étapes.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const HMRC_SOURCES = {
  vatApply: "https://www.gov.uk/register-for-vat/how-register-for-vat",
  vatRules:
    "https://www.gov.uk/government/publications/vat-notice-7001-should-i-be-registered-for-vat/vat-notice-7001-should-i-be-registered-for-vat",
  vatThreshold: "https://www.gov.uk/register-for-vat",
  vatPending: "https://www.gov.uk/register-for-vat/how-register-for-vat",
  mtd: "https://www.gov.uk/submit-vat-return",
  marketplaceGuidance:
    "https://www.gov.uk/guidance/vat-overseas-businesses-using-an-online-marketplace-to-sell-goods-in-the-uk",
} as const;

const QUICK_FACTS = [
  [
    "Prix total",
    "£144 au total pour l’assistance professionnelle à l’enregistrement à la TVA.",
  ],
  [
    "Inclus",
    "Examen des informations, préparation du dossier et modalités de soumission convenues. Assistance aux questions HMRC uniquement si convenue par écrit.",
  ],
  [
    "HMRC décide de l’issue",
    "HMRC examine la demande et peut demander des justificatifs complémentaires. L’approbation n’est jamais garantie.",
  ],
  [
    "Délai HMRC",
    "Généralement plusieurs semaines. Contactez HMRC en l’absence de réponse après 40 jours ouvrés.",
  ],
] as const;

const ELIGIBILITY_TESTS = [
  [
    "Test 1 · Rétrospectif",
    "Plus de £90 000 de chiffre d’affaires taxable à la TVA sur toute période glissante de 12 mois",
    "Entreprises établies au Royaume-Uni",
  ],
  [
    "Test 2 · Prospectif",
    "Prévision de dépasser £90 000 au cours des 30 prochains jours seulement",
    "Entreprises établies au Royaume-Uni",
  ],
  [
    "Sans seuil",
    "Non établie au Royaume-Uni et réalisant des opérations taxables au Royaume-Uni — enregistrement dès la première opération",
    "Entreprises étrangères",
  ],
] as const;

const ELIGIBILITY_FEATURES = [
  [
    "Entreprises établies au Royaume-Uni",
    "Le seuil habituel est supérieur à £90 000 de chiffre d’affaires taxable à la TVA au cours des 12 derniers mois (période glissante, et non un exercice comptable), ou la prévision de dépasser ce montant au cours des 30 prochains jours seulement. Il s’agit du chiffre d’affaires taxable, et non du bénéfice. HMRC peut accepter une exception pour un dépassement temporaire ; vérifiez les conditions.",
  ],
  [
    "Enregistrement volontaire",
    "Les entreprises éligibles peuvent s’enregistrer en dessous du seuil. Cela peut permettre de récupérer la TVA déductible sur les achats, mais modifie également la tarification et crée des obligations déclaratives. Évaluez l’impact sur vos clients et vos coûts avant de décider.",
  ],
  [
    "Entreprises établies à l’étranger",
    "Les assujettis non établis (NETP) peuvent être soumis à une obligation d’enregistrement sans bénéficier du seuil habituel. Vérifiez le lieu des opérations, les règles d’autoliquidation (reverse charge) et les éventuelles exceptions. La détention par un propriétaire étranger ne suffit pas à elle seule à déterminer l’établissement.",
  ],
] as const;

const EXAMPLES = [
  {
    title: "Société de conseil britannique détenue depuis l’étranger",
    facts:
      "Une société britannique, détenue et dirigée depuis Dubaï, facture £40 000 par an à des clients professionnels au Royaume-Uni et dans l’UE.",
    dependsOn:
      "Du lieu où la société est effectivement gérée, du lieu où ses services sont fournis et de l’application éventuelle de l’autoliquidation chez ses clients.",
    outcome:
      "Si elle est établie au Royaume-Uni et réalise moins de £90 000, l’enregistrement peut être volontaire. Si elle est non établie et réalise des opérations taxables au Royaume-Uni, l’enregistrement peut être requis dès la première opération.",
  },
  {
    title: "Vendeur Amazon FBA avec stock au Royaume-Uni",
    facts:
      "Une société basée en Turquie expédie du stock vers un entrepôt Amazon au Royaume-Uni et vend à des consommateurs britanniques.",
    dependsOn:
      "De qui détient la propriété des marchandises au Royaume-Uni, de l’identité de l’acheteur et des ventes sur lesquelles Amazon collecte et reverse la TVA.",
    outcome:
      "Détenir du stock au Royaume-Uni signifie généralement qu’un vendeur étranger doit vérifier ses obligations d’enregistrement à la TVA britannique, même lorsque Amazon collecte la TVA sur certaines ventes.",
  },
] as const;

type ScopeStatus = "included" | "separate" | "not-offered";

const SCOPE_ROWS: readonly { item: string; status: ScopeStatus; note: string }[] = [
  {
    item: "Examen d’éligibilité (obligatoire, volontaire ou non établi)",
    status: "included",
    note: "Sur la base des éléments que vous nous fournissez",
  },
  {
    item: "Préparation de la demande d’enregistrement à la TVA",
    status: "included",
    note: "Y compris la date d’effet proposée",
  },
  {
    item: "Votre relecture avant soumission",
    status: "included",
    note: "Rien n’est envoyé sans votre approbation",
  },
  {
    item: "Explication du numéro de TVA, de la date d’effet et des prochaines étapes",
    status: "included",
    note: "Une fois la décision de HMRC rendue",
  },
  {
    item: "Modalités de soumission convenues",
    status: "included",
    note: "Qui soumet et avec quelle autorisation, confirmé par écrit",
  },
  {
    item: "Questions de HMRC liées à l’enregistrement",
    status: "separate",
    note: "Uniquement si convenu par écrit ; pas de relances illimitées",
  },
  {
    item: "Déclarations de TVA, tenue de livres, logiciel MTD",
    status: "separate",
    note: "Accord séparé",
  },
  {
    item: "Recours, représentation continue, conseil fiscal complexe",
    status: "not-offered",
    note: "Ne fait pas partie de ce service",
  },
];

const AFTER_ENQUIRY = [
  [
    "Le paiement lance l’intégration",
    "Une fois le paiement confirmé par Stripe, l’intégration commence par des questions sur votre activité commerciale, votre chiffre d’affaires et le lieu de gestion de l’entreprise. Le paiement ne vaut ni approbation par HMRC ni acceptation du service.",
  ],
  [
    "Nous confirmons le périmètre par écrit",
    "Nous confirmons le périmètre de l’assistance à £144, qui soumet la demande et les exclusions éventuelles avant le début des travaux. En cas de doute sur l’adéquation ou le périmètre, contactez-nous avant de payer.",
  ],
  [
    "Vous partagez vos informations en sécurité",
    "Via le canal sécurisé que nous vous indiquons, jamais par e-mail ouvert ni sur WhatsApp.",
  ],
  [
    "Vous validez, puis le dossier est transmis à HMRC",
    "Vous vérifiez d’abord les réponses préparées. HMRC examine ensuite la demande et prend sa décision.",
  ],
] as const;

const PROCESS_STAGES = [
  [
    "Examen d’éligibilité",
    "Analyse de votre activité commerciale, de votre chiffre d’affaires et de l’établissement de l’entreprise. Identification d’un enregistrement obligatoire ou volontaire et de tout point nécessitant un conseil fiscal spécialisé.",
  ],
  [
    "Collecte des informations",
    "Rassemblement des informations sur la société, les propriétaires et l’activité commerciale requises par HMRC. Demandez le canal sécurisé approuvé avant de partager des documents.",
  ],
  [
    "Préparation du dossier",
    "Préparation des informations d’enregistrement, de la date d’effet proposée et des explications justificatives. Vous relisez et validez les détails avant soumission.",
  ],
  [
    "Soumission auprès de HMRC",
    "Soumission via la voie HMRC appropriée avec l’autorisation requise. Convenez des modalités de soumission avec notre équipe ; aucun délai de soumission fixe n’est promis.",
  ],
  [
    "Examen par HMRC",
    "HMRC évalue la demande et peut demander des preuves supplémentaires. Toute aide pour répondre aux questions liées à l’enregistrement doit être convenue par écrit. Les relances illimitées auprès de HMRC, la représentation continue et les recours ne sont pas inclus.",
  ],
  [
    "Résultat de l’enregistrement",
    "Explication de la décision et, en cas d’approbation, du numéro de TVA et de la date d’effet. Tout accompagnement continu pour la comptabilité ou les déclarations de TVA fait l’objet d’un accord séparé.",
  ],
] as const;

const DOCUMENTS = [
  "Nom de la société, détails d’immatriculation et coordonnées professionnelles",
  "Informations sur les administrateurs, propriétaires et le demandeur requises par HMRC",
  "Établissement de l’entreprise, activité commerciale et lieu des opérations",
  "Chiffre d’affaires taxable, prévisions et date d’enregistrement proposée",
  "Coordonnées bancaires et preuves d’activité commerciale lorsque demandées",
] as const;

const AFTER_OUTCOME_FEATURES = [
  [
    "Vérifiez votre date d’effet",
    "Vos obligations en matière de TVA courent à compter de la date d’effet d’enregistrement. Vérifiez le numéro, la date et la première période de déclaration confirmés par HMRC ; ne supposez pas qu’elles commencent à la réception du courrier.",
  ],
  [
    "Tenez des registres numériques de TVA",
    "Les entreprises assujetties à la TVA doivent généralement respecter les règles Making Tax Digital (MTD), en tenant des registres numériques et en soumettant leurs déclarations via un logiciel compatible, sauf exonération.",
  ],
  [
    "Planifiez vos déclarations et paiements",
    "Vérifiez les échéances indiquées dans votre compte HMRC. Convenez séparément des déclarations de TVA, de la tenue comptable et de tout suivi régulier ; ils ne sont pas inclus dans ce tarif d’enregistrement.",
  ],
] as const;

const FAQS = [
  {
    q: "Qu’apporte une assistance professionnelle ?",
    a: "Vous payez pour une aide pratique, et non pour un accès privilégié à HMRC. L’assistance proposée couvre l’examen de votre situation d’enregistrement et des informations requises, la vérification des détails du dossier avec vous, la définition des modalités de soumission et l’explication du résultat. Confirmez par écrit les services exacts et l’autorisation avant de poursuivre. Toute assistance aux questions de HMRC doit être convenue séparément dans ce cadre ; les relances illimitées, les recours et la représentation continue ne sont pas inclus. Une assistance payante ne garantit ni l’éligibilité, ni l’approbation, ni un traitement accéléré.",
  },
  {
    q: "Combien coûte l’enregistrement à la TVA au Royaume-Uni ?",
    a: "Seven Oak Prestige facture £144 au total pour l’assistance professionnelle à l’enregistrement à la TVA. HMRC ne facture aucuns frais d’enregistrement ; les £144 rémunèrent donc intégralement notre préparation et notre assistance, et non une taxe gouvernementale. Les déclarations de TVA récurrentes et la tenue comptable font l’objet d’un périmètre séparé.",
  },
  {
    q: "Combien de temps faut-il pour obtenir un numéro de TVA britannique ?",
    a: "Prévoyez plusieurs semaines plutôt que de compter sur une date d’approbation fixe. HMRC peut demander des informations complémentaires et maîtrise la décision. La notice TVA 700/1 indique de contacter le service d’enregistrement TVA si vous n’avez pas reçu de réponse après 40 jours ouvrés. Il s’agit d’une consigne de suivi, et non d’un délai de traitement garanti.",
  },
  {
    q: "Quand l’enregistrement à la TVA est-il obligatoire ?",
    a: "Pour une entreprise établie au Royaume-Uni, vous devez normalement vous enregistrer si le chiffre d’affaires total taxable à la TVA des 12 derniers mois dépasse £90 000, ou si vous prévoyez qu’il dépassera £90 000 au cours des 30 prochains jours seulement. Le test des 12 mois est glissant, et non lié à l’exercice comptable. Une dérogation peut être possible si le chiffre d’affaires dépasse temporairement le seuil et que HMRC accepte la demande d’exception. Des règles différentes s’appliquent aux assujettis non établis ; la nature et la localisation de vos opérations sont déterminantes.",
  },
  {
    q: "Puis-je m’enregistrer volontairement en dessous de £90 000 ?",
    a: "Oui, une entreprise qui réalise ou a l’intention de réaliser des opérations taxables peut être éligible à un enregistrement volontaire sous le seuil. Évaluez l’effet sur vos prix, vos clients, la TVA récupérable sur vos achats et vos obligations déclaratives. HMRC décide si la demande remplit les conditions.",
  },
  {
    q: "Un propriétaire non-résident rend-il automatiquement l’enregistrement à la TVA obligatoire ?",
    a: "Non. La détention par un propriétaire étranger ne fait pas, à elle seule, d’une société britannique un assujetti non établi. L’établissement dépend de la gestion effective, des activités et des ressources permanentes de l’entreprise, et non uniquement de son immatriculation ou de son siège social. Si une entreprise est véritablement non établie et réalise des opérations taxables au Royaume-Uni, le seuil normal peut ne pas s’appliquer ; les exceptions et les règles de lieu d’imposition doivent tout de même être vérifiées.",
  },
  {
    q: "Les vendeurs Amazon FBA disposant de stock au Royaume-Uni doivent-ils s’enregistrer à la TVA UK ?",
    a: "Détenir du stock au Royaume-Uni peut créer des obligations de TVA au Royaume-Uni, en particulier pour une entreprise étrangère. Mais la réponse dépend de l’établissement, de la propriété des marchandises, des clients, des règles de la place de marché et de qui déclare la TVA sur chaque vente. La collecte de la TVA par Amazon sur certaines ventes ne supprime pas automatiquement toutes les obligations du vendeur. Il convient d’examiner le modèle commercial réel plutôt que de supposer que chaque vendeur FBA se trouve dans la même situation.",
  },
  {
    q: "Puis-je facturer la TVA pendant que mon enregistrement est en attente ?",
    a: "Vous ne devez pas faire apparaître la TVA en tant que telle sur une facture tant que vous n’avez pas reçu votre numéro d’enregistrement à la TVA. Vous pouvez ajuster vos prix pour tenir compte de la TVA que vous devrez reverser à compter de votre date d’effet d’enregistrement. Une fois le numéro obtenu, émettez les factures de TVA appropriées pour cette période conformément aux directives de HMRC. Conservez des registres clairs et expliquez tout ajustement ultérieur de facture à vos clients.",
  },
  {
    q: "De quelles informations HMRC aura-t-il besoin ?",
    a: "Prévoyez les coordonnées et détails de l’entreprise, les informations sur l’établissement et l’activité commerciale, le chiffre d’affaires taxable et la date d’enregistrement souhaitée, ainsi que les informations bancaires et celles du demandeur lorsque requis. HMRC peut demander des contrats, des factures ou d’autres justificatifs. Les exigences dépendent de la demande ; un passeport seul ne constitue pas un dossier complet de TVA.",
  },
  {
    q: "Les déclarations de TVA sont-elles incluses dans les £144 ?",
    a: "Non. Le tarif total de £144 couvre uniquement l’assistance à l’enregistrement. Les déclarations de TVA, la tenue comptable numérique, le logiciel Making Tax Digital et le conseil fiscal continu ne sont pas inclus et nécessitent un accord séparé. Après approbation, vérifiez votre date d’effet, vos périodes de déclaration et vos échéances de paiement.",
  },
  {
    q: "Un numéro de TVA est-il identique à un numéro EORI ?",
    a: "Non. Un numéro de TVA sert à la comptabilisation et à la déclaration de la TVA. Un numéro EORI identifie une entreprise dans les procédures douanières pour les marchandises. Une entreprise peut avoir besoin des deux, de l’un ou de l’autre, ou d’aucun selon ses activités. L’enregistrement à la TVA n’est pas un prérequis pour obtenir un numéro EORI.",
  },
  {
    q: "Puis-je faire la demande auprès de HMRC moi-même ?",
    a: "Oui. Vous pouvez faire la demande directement sur GOV.UK sans frais facturés par HMRC. Notre tarif rémunère la préparation professionnelle et l’assistance à l’enregistrement, et non un accès privilégié à HMRC ou une garantie d’approbation.",
  },
] as const;

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Assistance à l'Enregistrement à la TVA UK",
      description:
        "Assistance à l'enregistrement à la TVA au Royaume-Uni : £144 au total. Pour fondateurs non-résidents, sociétés étrangères et vendeurs Amazon FBA. Examen d'éligibilité, préparation du dossier et soumission convenue.",
      url: "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
      provider: {
        "@type": "Organization",
        name: "Seven Oak Prestige Ltd",
      },
      offers: {
        "@type": "Offer",
        price: 144,
        priceCurrency: "GBP",
        url: "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
        description:
          "Total client de £144 pour l'assistance professionnelle à l'enregistrement par Seven Oak. HMRC ne facture aucuns frais d'enregistrement.",
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
          name: "Assistance à l'Enregistrement à la TVA",
          item: "https://www.sevenoakprestige.com/fr/services/vat-registration-uk",
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
          data-service-order="vat"
          data-payment="true"
          className="btn-gold w-full sm:w-auto gap-2.5"
        >
          <CreditCard aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Payer £144 — Démarrer l’enregistrement TVA</span>
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

function VatRegistrationVisual() {
  return (
    <figure
      className="m-0 border border-border p-5 text-foreground"
      aria-label="Diagramme de comptabilité TVA : ventes taxables, registres et déclarations de TVA"
    >
      <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
        <FileText aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span>TVA / REGISTRES D’ENTREPRISE</span>
      </div>
      <div className="mt-4 flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>Ventes taxables</span>
        <span className="text-gold">01</span>
      </div>
      <div className="flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>Registres d’achats</span>
        <span className="text-gold">02</span>
      </div>
      <div className="flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>Comptabilisation de la TVA</span>
        <span className="text-gold">03</span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 font-display text-lg">
        <span>L’enregistrement est le point de départ</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
      </div>
      <figcaption className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground">
        Des registres clairs. Des déclarations conformes.
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

export default function VATRegistrationServicePageFr() {
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
                Assistance à l’enregistrement à la TVA
              </span>
            </nav>

            <p className="eyebrow">Assistance à l’enregistrement à la TVA — £144 au total</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Service d’Enregistrement à la TVA UK pour Non-Résidents et Sociétés Étrangères
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Déterminez si vous devez vous enregistrer, puis soumettez à HMRC une demande qui
              correspond réellement au fonctionnement commercial de votre entreprise. Périmètre
              clair, un seul prix total.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
              Pour les sociétés britanniques (UK Ltd) détenues par des non-résidents, les sociétés
              étrangères réalisant des opérations au Royaume-Uni, les vendeurs Amazon FBA disposant
              de stock au Royaume-Uni et les entreprises britanniques approchant du seuil de £90 000.
            </p>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div>
                <p className="font-display text-4xl leading-tight sm:text-[2.75rem]">
                  £144
                  <span className="ml-3 font-sans text-sm text-muted-foreground">
                    au total · assistance professionnelle, périmètre confirmé par écrit
                  </span>
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>
              <VatRegistrationVisual />
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
            <p className="eyebrow">Numéro de TVA UK</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Qu’est-ce que l’enregistrement à la TVA au Royaume-Uni ?
            </h2>
            <div className="mt-7">
              <p className="max-w-3xl text-base leading-relaxed">
                L’enregistrement à la TVA intègre une entreprise dans le système britannique de TVA.
                HMRC délivre un numéro d’enregistrement à la TVA et confirme la date d’effet de
                l’enregistrement. L’entreprise comptabilise alors la TVA sur les ventes concernées,
                tient des registres de TVA et soumet des déclarations périodiques.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
                <span className="text-sm">TVA = comptabilisation fiscale</span>
                <span className="text-sm text-muted-foreground">
                  EORI = identification douanière
                </span>
                <Link
                  href="/fr/services/eori-registration-uk"
                  className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] text-gold underline-offset-4 hover:underline"
                >
                  <span>Assistance à l’enregistrement EORI</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELIGIBILITY ── */}
        <section
          id="eligibility"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Le bon point de départ</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Qui doit s’enregistrer à la TVA au Royaume-Uni ?
            </h2>
            <div className="mt-7">
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {ELIGIBILITY_TESTS.map(([t, rule, who]) => (
                  <div key={t} className="border border-border bg-background p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">{t}</p>
                    <p className="mt-2 font-display text-lg leading-snug">{rule}</p>
                    <p className="mt-2 text-xs text-muted-foreground">S’applique à : {who}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">
                {ELIGIBILITY_FEATURES.map(([title, text]) => (
                  <article key={title} className="border-t border-border pt-5">
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-7 border-l-2 border-gold pl-5">
                <h3 className="font-display text-xl">
                  Une société britannique n’est pas automatiquement établie au Royaume-Uni aux fins
                  de la TVA
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  De même, un fondateur non-résident ne la rend pas automatiquement non établie.
                  HMRC examine l’activité réelle : l’administration centrale, la direction et les
                  ressources permanentes. L’immatriculation ou une adresse de siège social seule ne
                  suffit pas à trancher la question.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                <SourceLink href={HMRC_SOURCES.vatThreshold}>
                  Seuils d’enregistrement HMRC
                </SourceLink>
                <SourceLink href={HMRC_SOURCES.vatRules}>
                  Notice TVA 700/1 : règles d’éligibilité
                </SourceLink>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Les entreprises réalisant uniquement des opérations exonérées de TVA ou hors champ ne
                s’enregistrent normalement pas selon ces règles de chiffre d’affaires. Vérifiez vos
                opérations et toute exception auprès de HMRC plutôt que de considérer le seuil comme
                un critère universel.
              </p>
            </div>
          </div>
        </section>

        {/* ── WORKED EXAMPLES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Exemples concrets</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Enregistrement à la TVA pour les sociétés étrangères : deux cas fréquents
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
                fiscal individuel.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.marketplaceGuidance}>
                  Guide HMRC pour les vendeurs étrangers sur les places de marché en ligne
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE TABLE ── */}
        <section
          id="scope"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Coût de l’enregistrement TVA : ce que couvrent les £144</p>
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

        {/* ── PROCESS (6 STAGES) ── */}
        <section id="process" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">6 étapes claires</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Comment fonctionne notre assistance à l’enregistrement à la TVA
            </h2>
            <div className="mt-7">
              <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PROCESS_STAGES.map(([title, text], index) => (
                  <li key={title} className="flex gap-4">
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

        {/* ── INFORMATION NEEDED ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Préparez avant de postuler</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Informations nécessaires pour l’enregistrement à la TVA
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
                HMRC peut demander des preuves commerciales supplémentaires. Les exigences varient
                selon l’entreprise et la voie de demande. N’envoyez pas de passeports, mots de passe
                ou documents financiers sensibles dans un premier e-mail ou message WhatsApp.
                Demandez le canal de transmission sécurisé approuvé.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.vatApply}>
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
              £144 au total pour l’assistance à l’enregistrement à la TVA
            </h2>
            <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="border-t border-gold border-b border-b-border py-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                    Assistance à l’enregistrement
                  </p>
                  <p className="mt-3 font-display text-4xl leading-tight sm:text-[2.75rem]">
                    £144
                    <span className="ml-3 font-sans text-sm text-muted-foreground">au total</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed">
                    Examen des informations, préparation du dossier et modalités de soumission
                    convenues.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Le prix correspond à l’assistance professionnelle de Seven Oak. Les déclarations
                  de TVA récurrentes et la tenue comptable sont séparées.
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl">
                  Prévoyez plusieurs semaines pour l’examen par HMRC
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  HMRC peut demander des informations complémentaires ; il n’existe donc pas de date
                  d’approbation fixe. La notice TVA 700/1 recommande de contacter le service
                  d’enregistrement TVA si vous n’avez pas eu de nouvelles après 40 jours ouvrés, afin
                  de vérifier que la demande a bien été reçue. Il s’agit d’une consigne de suivi, et
                  non d’une échéance d’approbation ou d’un délai de traitement garanti.
                </p>
                <h3 className="mt-7 font-display text-xl">Postuler directement via GOV.UK</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vous pouvez également faire votre demande directement sur GOV.UK sans frais HMRC.
                  Notre tarif couvre la préparation professionnelle et l’assistance à
                  l’enregistrement.
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <SourceLink href={HMRC_SOURCES.vatApply}>
                    Postuler directement auprès de HMRC
                  </SourceLink>
                  <SourceLink href={HMRC_SOURCES.vatRules}>
                    Consulter les directives de délais de HMRC
                  </SourceLink>
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
              L’enregistrement marque le début de vos obligations continues en matière de TVA
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
                <SourceLink href={HMRC_SOURCES.mtd}>
                  GOV.UK : déclarations de TVA et registres numériques
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section id="faqs" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Réponses directes</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              FAQ sur l’enregistrement à la TVA au Royaume-Uni
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
              Faisons d’abord le point sur votre situation de TVA
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
                  href="/fr/services/eori-registration-uk"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Assistance à l’enregistrement EORI</span>
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
                  href="/fr/blog/hmrc-business-tax-account-non-resident-uk-company"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Compte Fiscal HMRC (Business Tax Account) pour Sociétés UK | 2026</span>
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

