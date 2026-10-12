import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { ReviewsFr } from "@/components/ReviewsFr";
import { NameCheck } from "@/components/NameCheck";

const TITLE = "Création Société UK depuis la France | Seven Oak Prestige";
const DESCRIPTION =
  "Créez une UK Limited depuis la France avec un cabinet britannique. Accompagnement en français, adresse UK, vérification Companies House, gestion du courrier et préparation bancaire.";

const FAQS = [
  [
    "Puis-je créer une UK Ltd tout en vivant en France ?",
    "Oui, en règle générale. La résidence britannique n’est pas exigée pour détenir ou diriger une private limited company, sous réserve des exigences de Companies House, des contrôles KYC et des critères d’éligibilité.",
  ],
  [
    "Une société UK me dispense-t-elle des impôts français ?",
    "Non. Une UK Ltd n’efface pas automatiquement les obligations fiscales françaises de son dirigeant. Votre résidence fiscale personnelle, le lieu de direction effective et l’existence éventuelle d’un établissement stable restent déterminants.",
  ],
  [
    "Ai-je besoin d’une adresse au Royaume-Uni ?",
    "Votre société doit disposer d’un registered office au Royaume-Uni. Une director service address et une adresse commerciale sont distinctes et peuvent être ajoutées selon vos besoins.",
  ],
  [
    "Comment vais-je recevoir mon courrier ?",
    "Lorsque votre package comprend notre service de gestion du courrier, les correspondances éligibles reçues à votre adresse Seven Oak peuvent être numérisées et transmises électroniquement.",
  ],
  [
    "Puis-je ouvrir Wise, Revolut ou Airwallex ?",
    "Cela dépend du provider, du type d’activité, de votre résidence et de votre profil de conformité. Aucun compte n’est garanti : la décision appartient exclusivement au prestataire.",
  ],
  [
    "Puis-je utiliser Stripe ?",
    "Le même principe s’applique. Nous préparons votre dossier et la cohérence de votre activité, mais l’acceptation relève de la décision du prestataire de paiement.",
  ],
  ["Combien coûte la création ?", "À partir de £199, frais Companies House inclus dans le package indiqué."],
  [
    "Ai-je besoin d’un comptable ?",
    "Cela dépend de l’activité, du volume d’opérations et de votre situation. Nous vous indiquons les obligations déclaratives et pouvons vous orienter selon le scope retenu.",
  ],
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.sevenoakprestige.com/fr/countries/france/uk-company-formation",
    languages: {
      fr: "https://www.sevenoakprestige.com/fr/countries/france/uk-company-formation",
      "fr-FR": "https://www.sevenoakprestige.com/fr/countries/france/uk-company-formation",
      "x-default": "https://www.sevenoakprestige.com/fr/countries/france/uk-company-formation",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.sevenoakprestige.com/fr/countries/france/uk-company-formation",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const WHATSAPP = "https://wa.me/447447488755";
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";
const GOOGLE_REVIEWS = "https://share.google/owyOtNunkhfg4c0dE";
const ARTICLE_FRANCE = "/blog/creer-societe-uk-depuis-france";
const ARTICLE_NON_RESIDENTS = "/blog/uk-company-formation-for-non-residents";
const ARTICLE_OFFICE = "/blog/registered-office-vs-director-service-address-uk";
const ARTICLE_AFTER = "/blog/what-to-do-after-uk-company-formation-non-resident";

const TRUST = [
  ["Société britannique enregistrée", "Seven Oak Prestige Ltd — Company No. 16903092"],
  ["Accompagnement depuis le Royaume-Uni", "Le client traite directement avec une société britannique."],
  ["KYC & due diligence", "Des processus adaptés aux fondateurs internationaux."],
  ["Tarification claire", "Périmètre et renouvellements communiqués avant paiement."],
] as const;

const FIT_YES = [
  "vous développez une clientèle internationale",
  "vous travaillez en B2B hors de France",
  "vous créez une agence digitale internationale",
  "vous gérez une activité SaaS",
  "vous faites de l’e-commerce international",
  "vous créez une présence au Royaume-Uni",
  "vous structurez un groupe ou une filiale",
  "vous faites de l’import / export",
] as const;

const FIT_NO = [
  "toute votre activité reste en France",
  "toute la direction est effectuée depuis la France",
  "vous cherchez uniquement à réduire vos impôts",
  "vos salariés et infrastructures sont tous en France",
  "vous pensez qu’une société UK garantit un compte bancaire",
] as const;

const SECTORS: [string, string, string][] = [
  [
    "Consultants & agences digitales",
    "Marketing, publicité, media buying, acquisition, social media, consulting, agences créatives, services B2B.",
    "Pour les agences et consultants qui servent une clientèle britannique ou internationale.",
  ],
  [
    "E-commerce & marketplaces",
    "Shopify, Amazon, marketplaces, marques en propre, dropshipping conforme, ventes internationales.",
    "La structure doit correspondre aux flux réels, aux stocks et aux obligations de TVA.",
  ],
  [
    "SaaS & entreprises numériques",
    "Logiciels, applications, plateformes par abonnement, services et produits numériques.",
    "Une entité UK crédible pour des clients et partenaires internationaux.",
  ],
  [
    "Holdings & groupes",
    "Participations, filiales, expansion, structuration de groupe international.",
    "Les structures de holding doivent être analysées avec attention au regard des conséquences fiscales françaises et britanniques.",
  ],
  [
    "Commerce international",
    "Import / export, sourcing, distribution, trading de biens, B2B international.",
    "EORI, TVA et documentation douanière sont étudiés selon votre activité.",
  ],
  [
    "Immobilier & hospitality",
    "UK property, property management, hospitality, location courte durée.",
    "Les structures immobilières nécessitent souvent une analyse fiscale spécifique.",
  ],
];

const WHY: [string, string][] = [
  [
    "Directement avec une société britannique",
    "Vous traitez avec Seven Oak Prestige Ltd, société enregistrée en Angleterre et au Pays de Galles.",
  ],
  [
    "Accompagnement en français",
    "Vos échanges, vos explications et votre dossier sont suivis en français.",
  ],
  [
    "Approche adaptée aux non-résidents",
    "Vérification d’identité, adresses, documentation : le parcours est pensé pour les fondateurs hors du Royaume-Uni.",
  ],
  [
    "Structure pensée au-delà de Companies House",
    "Adresse, courrier, TVA, EORI et préparation bancaire sont étudiés en cohérence avec votre activité.",
  ],
];

const STEPS: [string, string, string][] = [
  ["01", "Choisissez votre offre", "Vérifiez le nom, sélectionnez votre package et payez en ligne de façon sécurisée."],
  ["02", "Complétez l’onboarding", "Transmettez les informations et justificatifs requis dans votre espace sécurisé."],
  ["03", "Nous vérifions et déposons", "Votre conseiller examine le dossier avant sa transmission à Companies House."],
  ["04", "Recevez vos documents", "Après incorporation, vos documents électroniques et les prochaines étapes vous sont communiqués."],
];

const COMPARISON: [string, string][] = [
  ["Clients principalement français", "SASU / EURL peut être plus naturelle"],
  ["Clients internationaux", "UK Ltd peut être pertinente"],
  ["Expansion au Royaume-Uni", "UK Ltd / filiale UK"],
  ["SaaS international", "Analyse au cas par cas"],
  ["E-commerce international", "Dépend de la TVA, des stocks et des flux"],
  ["Holding", "Analyse fiscale indispensable"],
];

const TAX: [string, string][] = [
  [
    "Résidence fiscale personnelle",
    "Créer une société britannique ne modifie pas, en soi, votre résidence fiscale personnelle en France.",
  ],
  [
    "Siège de direction effective",
    "Si les décisions sont prises depuis la France, l’administration peut considérer que la société y est dirigée.",
  ],
  [
    "Établissement stable",
    "Une activité réellement exercée depuis la France peut créer un établissement stable imposable en France.",
  ],
  [
    "Corporation Tax",
    "Une UK Ltd est en principe soumise à la Corporation Tax britannique sur ses bénéfices imposables.",
  ],
  [
    "Convention fiscale France–Royaume-Uni",
    "La convention vise à éviter la double imposition et à déterminer l’État d’imposition selon les situations.",
  ],
  [
    "Dividendes et rémunération",
    "Le traitement des dividendes et des rémunérations du dirigeant dépend de votre résidence et de votre situation personnelle.",
  ],
];

const ADDRESSES: [string, string][] = [
  ["Registered Office", "Adresse officielle de la société, publiée sur Companies House."],
  ["Director Service Address", "Adresse publique utilisée pour les communications du directeur."],
  ["Business Address", "Adresse commerciale utilisée pour la correspondance professionnelle."],
];

const MAIL: [string, string, string][] = [
  ["01", "Courrier reçu à Londres", "Les correspondances éligibles arrivent à votre adresse Seven Oak."],
  ["02", "Courrier identifié et traité", "Nous identifions les documents reçus pour votre société."],
  [
    "03",
    "Numérisation et transmission",
    "Lorsque votre package comprend le service, le courrier éligible est numérisé et transmis électroniquement.",
  ],
];

const PROVIDER_LOGOS = [
  { name: "Revolut", logo: "/assets/revolut.svg" },
  { name: "Wise", logo: "/assets/wise.svg" },
  { name: "Payoneer", logo: "/assets/payoneer.svg" },
  { name: "Airwallex", logo: "/assets/airwallex.svg" },
];

const PLANS: Array<{
  name: string;
  price: string;
  badge: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
  logos?: boolean;
  footnote?: string;
}> = [
  {
    name: "Starter",
    price: "£199",
    badge: "",
    note: "Création uniquement — pour le fondateur qui dispose déjà d’adresses UK adaptées.",
    features: [
      "Création de la société",
      "Dépôt Companies House",
      "Documents numériques",
      "Rappels de conformité",
    ],
    cta: "Choisir Starter",
    href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
    featured: false,
  },
  {
    name: "Prestige",
    price: "£299",
    badge: "Recommandé pour la plupart des fondateurs français",
    note: "Le choix naturel pour la plupart des fondateurs français : création et infrastructure d’adresse UK.",
    features: [
      "Tout le contenu Starter",
      "Registered Office — 12 mois",
      "Director Service Address — 12 mois",
      "Gestion et numérisation du courrier selon scope",
      "Support de conformité annuel",
    ],
    cta: "Choisir Prestige",
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    featured: false,
  },
  {
    name: "Elite",
    price: "£399",
    badge: "Le plus complet",
    note: "Prestige, avec vérification d’identité et préparation bancaire renforcées.",
    features: [
      "Tout le contenu Prestige",
      "Virtual Business Address — 12 mois",
      "Assistance directe à l’ouverture de compte bancaire UK",
      "Rappels de conformité",
    ],
    logos: true,
    footnote:
      "Un dirigeant inclus. Les dirigeants ou personnes concernées supplémentaires sont traités séparément.",
    cta: "Choisir Elite",
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    featured: true,
  },
];

const RENEWALS: [string, string, string][] = [
  ["Registered Office", "Prestige et Elite · 12 mois", "£59 / an"],
  ["Director Service Address", "Prestige et Elite · 12 mois", "£35 / an"],
  ["Virtual Business Address", "Elite · 12 mois", "£150 / an"],
];

const AFTER_PAYMENT: [string, string, string][] = [
  ["01", "Confirmation immédiate", "Votre paiement et votre package sont confirmés par e-mail."],
  ["02", "Compte client créé", "Votre accès sécurisé au portail client est créé."],
  ["03", "E-mail de bienvenue", "Vous recevez les instructions et la liste adaptée des documents requis."],
  ["04", "Onboarding sécurisé", "Vous complétez le formulaire et transmettez vos justificatifs d’identité et d’adresse."],
  ["05", "Revue par un conseiller", "Un conseiller vérifie le dossier et demande des précisions uniquement si nécessaire."],
  ["06", "Dépôt Companies House", "Une fois les contrôles requis terminés, nous préparons et déposons l’incorporation."],
];

const DELIVERABLES: [string, string][] = [
  ["Certificate of Incorporation", "Délivré par Companies House après incorporation."],
  ["Memorandum & Articles", "Les documents constitutifs de votre société."],
  ["Share Certificate", "Émis pour le ou les actionnaires selon la répartition convenue."],
  ["Company Register", "Registre structuré de l’actionnariat et des informations clés."],
  ["Company Number", "Délivré lors de l’incorporation."],
  ["UTR Support", "Le Corporation Tax UTR est transmis une fois reçu de HMRC."],
];

const GUIDES: [string, string, string | null][] = [
  [
    "Créer une UK Ltd depuis la France",
    "Le guide pilier : structure, direction effective, fiscalité et banque.",
    ARTICLE_FRANCE,
  ],
  ["Coût d’une UK Ltd depuis la France", "Frais de création, adresses et renouvellements annuels.", null],
  ["UK Ltd vs SASU", "Comparer les deux structures selon votre clientèle réelle.", null],
  ["Fiscalité UK Ltd pour résident français", "Résidence, établissement stable et convention fiscale.", null],
  ["Banque pour société UK depuis la France", "Préparer un dossier crédible pour les prestataires.", null],
  [
    "Vérification Companies House depuis la France",
    "Identité, personal code et documents acceptés.",
    ARTICLE_NON_RESIDENTS,
  ],
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 sm:py-32 ${className}`}>
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

export default function FrancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "fr",
    mainEntity: FAQS.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="bg-background" lang="fr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <div id="top" className="section-dark relative isolate overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:py-24">
              <p className="eyebrow">Création de société UK pour résidents français</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-8 max-w-xl font-display text-4xl font-bold tracking-tight leading-[1.08] sm:text-5xl lg:text-[3.4rem] text-foreground">
                Créez votre UK Limited depuis la France — à partir de £199
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Créez votre société à distance avec l’accompagnement d’un conseiller francophone. Chaque offre
                inclut l’incorporation Companies House et vos documents électroniques, avec adresse UK et services
                complémentaires selon le package choisi.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                La plupart des incorporations standards peuvent être finalisées sous 1 à 2 jours ouvrés après
                réception des informations et vérifications requises, sous réserve du traitement et de l’approbation
                de Companies House.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#tarifs" className="btn-gold !px-8 !py-4 !text-sm">
                  Comparer les offres — dès £199
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">
                  Parler à un conseiller sur WhatsApp
                </a>
              </div>
              <div className="mt-10 border-t border-border/70 pt-8">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
                  {["Aucun déplacement au Royaume-Uni", "Frais Companies House inclus", "Onboarding sécurisé", "Conseiller francophone"].map((item) => (
                    <li key={item} className="inline-flex items-center gap-2 text-sm text-foreground/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                  Sous réserve d’informations complètes, des contrôles d’identité et du traitement de Companies House.
                </p>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src="/assets/france-advisory-1536.webp"
                srcSet="/assets/france-advisory-640.webp 640w, /assets/france-advisory-1536.webp 1536w"
                sizes="(max-width: 1023px) 100vw, 50vw"
                alt="Entrepreneuse française préparant la création de sa société britannique avec un conseiller à Londres"
                width={1536}
                height={1024}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-deep to-transparent lg:w-32" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="section-parchment border-y border-border px-6">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map(([t, b]) => (
              <div key={t} className="border-border py-9 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0">
                <dt className="text-sm font-bold text-foreground">{t}</dt>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Tarifs */}
        <Section id="tarifs" className="border-t border-border scroll-mt-20 pt-14 sm:pt-20">
          <Eyebrow>Offres de création</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Choisissez le niveau d’accompagnement adapté à votre projet
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Chaque offre inclut les frais d’incorporation Companies House et vos documents de société électroniques.
          </p>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col p-8 sm:p-10 ${
                  p.featured
                    ? "section-dark border-y-2 border-gold bg-ink-deep shadow-[0_30px_60px_-30px_oklch(0_0_0/60%)] lg:-my-4 lg:py-14"
                    : "bg-background"
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 min-h-4 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">{p.badge}</p>
                <p className="mt-8 font-display text-4xl font-bold text-foreground">{p.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                <ul className="mt-8 flex-1 space-y-2.5 border-t border-border pt-8 text-sm text-foreground/85">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.logos ? (
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="eyebrow">Prestataires pouvant être étudiés</p>
                    <ul className="mt-4 grid grid-cols-2 gap-4">
                      {PROVIDER_LOGOS.map((b) => (
                        <li key={b.name} className="flex items-center gap-2">
                          <img src={b.logo} alt={`Logo ${b.name}`} width={24} height={24} decoding="async" className="h-6 w-6 rounded-sm" />
                          <span className="text-sm font-medium text-foreground/80">{b.name}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      L’éligibilité dépend de votre résidence, activité, actionnariat et dossier KYC. La décision finale appartient au prestataire.
                    </p>
                  </div>
                ) : null}
                {p.footnote ? <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{p.footnote}</p> : null}
                <a href={p.href} className={`mt-10 ${p.featured ? "btn-gold" : "btn-ghost"}`}>{p.cta}</a>
                <a
                  href={`https://wa.me/447447488755?text=${encodeURIComponent(`Bonjour Seven Oak Prestige, j’ai une question concernant le package ${p.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-center text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  Une question ? Parlez à un conseiller
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <p className="eyebrow">Renouvellements sans surprise</p>
            <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Coûts annuels des services d’adresse</h3>
            <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
              {RENEWALS.map(([name, scope, price]) => (
                <div key={name} className="bg-background p-6">
                  <p className="text-sm font-bold text-foreground">{name}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{scope}</p>
                  <p className="mt-5 font-display text-2xl font-bold text-gold-soft">{price}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Les prix, renouvellements et conditions d’annulation sont présentés clairement avant paiement. Consultez nos{` `}
              <Link href="/terms" className="text-gold-soft hover:text-gold">conditions générales</Link> et notre{` `}
              <Link href="/refund" className="text-gold-soft hover:text-gold">politique d’annulation et de remboursement</Link>.
            </p>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <p className="eyebrow">Après le paiement</p>
            <h3 className="mt-5 max-w-2xl font-display text-2xl font-bold sm:text-3xl text-foreground">
              Vous savez exactement ce qui se passe ensuite
            </h3>
            <ol className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {AFTER_PAYMENT.map(([n, title, body]) => (
                <li key={n} className="bg-background p-6">
                  <span className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-gold">{n}</span>
                  <h4 className="mt-3 text-sm font-bold text-foreground">{title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Reviews */}
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Avis clients</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Ce que disent nos clients
              </h2>
            </div>
            <a
              href={GOOGLE_REVIEWS}
              target="_blank"
              rel="noreferrer"
              className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
            >
              Voir nos avis Google
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold text-foreground">5,0</span>
              <span className="flex gap-1 text-gold" aria-label="Note de 5 sur 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Avis Google vérifiés · Clients francophones accompagnés en français · Cabinet britannique
              enregistré à Londres
            </p>
          </div>
          <div className="mt-12">
            <ReviewsFr />
          </div>
        </Section>

        {/* Name checker */}
        <Section id="nom" className="section-parchment border-t border-border scroll-mt-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Disponibilité du nom</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Votre nom de société est-il disponible ?
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Vérifiez votre nom avant de démarrer votre incorporation.
              </p>
            </div>
            <NameCheck lang="fr" />
          </div>
        </Section>

        {/* Est-ce adapté */}
        <Section id="pour-qui" className="border-t border-border scroll-mt-20">
          <Eyebrow>Est-ce vraiment adapté pour vous ?</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Une UK Ltd peut être excellente dans le bon contexte
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Un résident français peut généralement créer et diriger une UK Limited Company. Mais le fait que
            cela soit possible ne signifie pas automatiquement que ce soit la meilleure structure pour chaque
            activité.
          </p>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold text-foreground">UK Ltd à considérer si :</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {FIT_YES.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold text-foreground">À analyser davantage si :</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {FIT_NO.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-border" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost mt-12">
            Analyser mon projet
          </a>
        </Section>

        {/* Secteurs */}
        <Section id="secteurs" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Secteurs & profils</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Pour quels entrepreneurs français ?
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Nous accompagnons des modèles d’activité très différents. La structure doit toujours correspondre à
            la réalité commerciale.
          </p>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map(([t, list, note]) => (
              <article key={t} className="bg-background p-8">
                <span className="block h-px w-8 bg-gold/60" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{list}</p>
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Pourquoi Seven Oak */}
        <Section id="a-propos" className="border-t border-border scroll-mt-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Pourquoi Seven Oak</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Plus qu’une simple incorporation
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Notre rôle ne consiste pas seulement à déposer un formulaire. Nous cherchons à comprendre
                l’activité, la structure, les besoins d’adresse et les prochaines étapes opérationnelles avant
                de recommander une solution.
              </p>
              <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
                {WHY.map(([t, b]) => (
                  <article key={t} className="border-t border-border pt-5">
                    <h3 className="text-base font-bold text-foreground">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                  </article>
                ))}
              </div>
              <a
                href={COMPANIES_HOUSE}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
              >
                Consulter la fiche officielle Companies House
              </a>
            </div>
            <img
              src="/assets/institution-1200.webp"
              srcSet="/assets/institution-640.webp 640w, /assets/institution-1200.webp 1200w"
              sizes="(max-width: 1023px) 100vw, 50vw"
              alt="Architecture institutionnelle londonienne"
              width={1200}
              height={805}
              loading="lazy"
              decoding="async"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
        </Section>

        {/* Processus */}
        <Section id="process" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Créer votre société UK en 4 étapes
          </h2>
          <ol className="mt-12 divide-y divide-border border-t border-border">
            {STEPS.map(([n, t, b]) => (
              <li key={n} className="flex gap-8 py-8">
                <span className="font-display text-3xl font-bold text-gold">{n}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Les délais sont soumis au traitement et à l’approbation de Companies House.
          </p>
        </Section>

        {/* Comparaison */}
        <Section id="comparaison" className="border-t border-border scroll-mt-20">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Comparaison</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                UK Ltd, SASU ou EURL ?
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Le bon choix ne se résume pas au coût de création. Il dépend de votre clientèle, de votre lieu
                de direction et de vos flux réels.
              </p>
              <Link
                href={ARTICLE_FRANCE}
                className="mt-10 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
              >
                Lire notre guide UK Ltd vs SASU / EURL
              </Link>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {COMPARISON.map(([a, b]) => (
                <div key={a} className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-8">
                  <dt className="text-sm font-bold text-foreground">{a}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Fiscalité */}
        <Section id="fiscalite" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Fiscalité France–Royaume-Uni</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Votre société est britannique. Votre situation fiscale reste personnelle.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Une UK Ltd n’efface pas automatiquement les obligations fiscales françaises de son dirigeant.
          </p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {TAX.map(([t, b]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="text-sm font-bold text-foreground">{t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 border-l-2 border-gold pl-6 font-display text-lg font-medium leading-snug text-foreground/90">
            Une société britannique doit répondre à une logique commerciale réelle, et non à une promesse
            fiscale simplifiée.
          </p>
          <Link href={ARTICLE_FRANCE} className="btn-ghost mt-10">
            Comprendre la fiscalité France–UK
          </Link>
        </Section>

        {/* Adresse UK */}
        <Section id="adresse" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Adresse britannique</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Votre adresse britannique expliquée simplement
          </h2>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {ADDRESSES.map(([t, b]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="font-display text-lg font-bold text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-gold pl-6 text-sm font-medium text-foreground/90">
            Registered Office ≠ Director Service Address ≠ Business Address
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Pour approfondir :{" "}
            <Link href={ARTICLE_OFFICE} className="text-gold-soft hover:text-gold">
              Registered Office et Director Service Address
            </Link>
            .
          </p>
          <a href="#tarifs" className="btn-ghost mt-10">
            Choisir mon adresse UK
          </a>
        </Section>

        {/* Companies House IDV */}
        <Section id="verification" className="border-t border-border scroll-mt-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Vérification d’identité</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Vérification Companies House depuis la France
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Depuis les nouvelles exigences de Companies House, certains dirigeants et PSC doivent effectuer
                une vérification d’identité et obtenir leur personal code. Nous vous guidons à chaque étape,
                en français.
              </p>
              <ol className="mt-10 grid gap-px bg-border sm:grid-cols-4">
                {["Identité", "Vérification", "Personal Code", "Incorporation"].map((s, i) => (
                  <li key={s} className="bg-background p-5">
                    <span className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-gold">
                      0{i + 1}
                    </span>
                    <p className="mt-2 text-sm font-bold text-foreground">{s}</p>
                  </li>
                ))}
              </ol>
              <ul className="mt-10 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "passeport ou pièce d’identité acceptée",
                  "preuve d’adresse",
                  "informations personnelles",
                  "documents additionnels si nécessaires",
                ].map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href={ARTICLE_NON_RESIDENTS}
                className="mt-10 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
              >
                Voir le guide de vérification Companies House
              </Link>
            </div>
            <img
              src="/assets/advisory-team-1200.webp"
              srcSet="/assets/advisory-team-640.webp 640w, /assets/advisory-team-1200.webp 1200w"
              sizes="(max-width: 1023px) 100vw, 50vw"
              alt="Conseillers Seven Oak Prestige examinant un dossier d’incorporation à Londres"
              width={1200}
              height={805}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
          </div>
        </Section>

        {/* Courrier */}
        <Section id="courrier" className="border-t border-border scroll-mt-20">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Gestion du courrier</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Votre courrier UK, accessible depuis la France
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Votre société peut recevoir du courrier à Londres sans que vous ayez besoin de vous déplacer.
              </p>
              <ol className="mt-12 divide-y divide-border border-y border-border">
                {MAIL.map(([n, t, b]) => (
                  <li key={n} className="flex gap-8 py-7">
                    <span className="font-display text-2xl font-bold text-gold">{n}</span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{t}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm font-medium text-foreground/90">
                Vous restez informé même si vous vivez en France.
              </p>
              <a href="#tarifs" className="btn-ghost mt-10">
                Découvrir la gestion du courrier
              </a>
            </div>
            <img
              src="/assets/mail-handling-1200.webp"
              srcSet="/assets/mail-handling-640.webp 640w, /assets/mail-handling-1200.webp 1200w"
              sizes="(max-width: 1023px) 100vw, 42vw"
              alt="Courrier britannique reçu, trié et numérisé dans nos bureaux londoniens"
              width={1200}
              height={896}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
          </div>
        </Section>

        {/* Banque */}
        <Section id="banque" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Banque & paiements</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Un dossier bancaire mieux préparé
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Nous évaluons votre profil et votre activité, vous aidons à préparer un dossier cohérent et pouvons
            recommander des prestataires adaptés. Aucun compte ni moyen de paiement n’est garanti : la décision
            appartient exclusivement au prestataire.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {PROVIDER_LOGOS.map((provider) => (
              <li key={provider.name} className="flex items-center gap-3 bg-background p-5">
                <img src={provider.logo} alt={`Logo ${provider.name}`} width={28} height={28} loading="lazy" decoding="async" className="h-7 w-7 rounded-sm" />
                <span className="text-sm font-medium text-foreground/85">{provider.name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Exemples étudiés selon l’éligibilité individuelle ; leur présence ne constitue ni une promesse d’approbation ni un partenariat officiel.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost mt-10">
            Discuter de mon dossier
          </a>
        </Section>

        {/* Documents */}
        <Section className="section-parchment border-t border-border">
          <Eyebrow>Ce que vous recevez</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Vos documents de société
          </h2>
          <dl className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map(([k, v]) => (
              <div key={k} className="bg-background p-7">
                <dt className="text-sm font-bold text-foreground">{k}</dt>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Le Company Number est délivré lors de l’incorporation. Le Corporation Tax UTR est transmis une fois
            reçu de HMRC. Voir également{" "}
            <Link href={ARTICLE_AFTER} className="text-gold-soft hover:text-gold">
              Que faire après la création de votre société UK
            </Link>
            .
          </p>
        </Section>

        {/* Guides */}
        <Section id="guides" className="border-t border-border scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Guides France</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Nos guides pour les entrepreneurs français
              </h2>
            </div>
            <Link
              href="/resources/guides"
              className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
            >
              Voir tous les guides France
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map(([t, b, href]) =>
              href ? (
                <Link key={t} href={href} className="group bg-background p-8 transition-colors hover:bg-accent">
                  <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </Link>
              ) : (
                <Link key={t} href="/resources/guides" className="group bg-background p-8 transition-colors hover:bg-accent">
                  <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </Link>
              ),
            )}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="section-parchment border-t border-border scroll-mt-20">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Eyebrow>Questions fréquentes</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Vos réponses avant de commencer.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Pour aller plus loin :{" "}
                <Link href={ARTICLE_FRANCE} className="text-gold-soft hover:text-gold">
                  Créer une société au Royaume-Uni depuis la France
                </Link>{" "}
                et le{" "}
                <Link href={ARTICLE_NON_RESIDENTS} className="text-gold-soft hover:text-gold">
                  Guide complet de création de société UK pour non-résidents
                </Link>
                .
              </p>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {FAQS.map(([q, a]) => (
                <div key={q} className="py-6">
                  <dt className="font-sans text-base font-bold text-foreground">{q}</dt>
                  <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Contacts */}
        <Section id="contact-fr" className="section-parchment border-t border-border scroll-mt-20">
          <Eyebrow>Nous contacter</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Parlez à un conseiller francophone
          </h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            <div className="bg-background p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Ligne fixe UK</p>
              <a href="tel:+442045780726" className="mt-4 block font-display text-xl font-bold text-foreground hover:text-gold">
                +44 20 4578 0726
              </a>
              <p className="mt-3 text-xs text-muted-foreground">Numéro fixe britannique</p>
            </div>
            <div className="bg-background p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 block font-display text-xl font-bold text-foreground hover:text-gold">
                +44 7447 488755
              </a>
              <p className="mt-3 text-xs text-muted-foreground">Disponible 7 jours sur 7</p>
            </div>
            <div className="bg-background p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">E-mail</p>
              <a
                href="mailto:contact@sevenoakprestige.com"
                className="mt-4 block break-all font-display text-xl font-bold text-foreground hover:text-gold"
              >
                contact@sevenoakprestige.com
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Seven Oak Prestige Ltd — 124 City Road, London EC1V 2NX
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold">
              Parler à un conseiller en français
            </a>
            <a href="#tarifs" className="btn-ghost">
              Créer ma société
            </a>
          </div>
        </Section>

        {/* Disclaimer */}
        <Section className="border-t border-border">
          <div className="grid gap-6 text-xs leading-relaxed text-muted-foreground lg:grid-cols-3">
            <p>
              Seven Oak Prestige fournit des services de création de société et d’accompagnement à
              l’établissement commercial. Seven Oak Prestige n’est pas un cabinet d’avocats, un cabinet
              d’expertise comptable ou un établissement financier réglementé.
            </p>
            <p>
              La situation fiscale d’un résident français dépend notamment de sa résidence, du lieu de gestion
              effective de l’entreprise et de la réalité de ses activités.
            </p>
            <p>
              Les décisions d’ouverture de compte bancaire ou de paiement relèvent exclusivement des
              prestataires concernés. Seven Oak Prestige Ltd — 124 City Road, London EC1V 2NX, England &amp;
              Wales.
            </p>
          </div>
        </Section>

        {/* CTA final */}
        <div id="final-cta" className="section-dark relative isolate overflow-hidden border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink-deep to-ink/80" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                Prêt à créer votre société au Royaume-Uni ?
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Choisissez l’offre adaptée à vos besoins et réalisez le processus à distance avec l’appui d’un conseiller francophone. Le dépôt Companies House est inclus ; les services d’adresse UK et l’accompagnement complémentaire dépendent de l’offre choisie.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#tarifs" className="btn-gold">Voir les offres — dès £199</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">Parler à un conseiller sur WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCta primaryLabel="Créer ma société" primaryHref="#tarifs" />
    </div>
  );
}
