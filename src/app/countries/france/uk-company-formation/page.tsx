import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";


import { ReviewsFr } from "@/components/ReviewsFr";
import CompanyChecker from "@/components/CompanyChecker";

export const metadata: Metadata = {
  title: "Création Société UK depuis la France | Seven Oak Prestige",
  description: "Créez une UK Limited depuis la France avec un cabinet britannique. Accompagnement en français, adresse UK, vérification Companies House, gestion du courrier et préparation bancaire.",
};

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
];



const WHATSAPP = "https://wa.me/447447488755";
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";
const GOOGLE_REVIEWS = "https://g.page/r/Cb2OqO7UHlpqEAE/review";
const ARTICLE_FRANCE = "https://www.sevenoakprestige.com/blog/creer-societe-uk-depuis-france";
const ARTICLE_NON_RESIDENTS =
  "https://www.sevenoakprestige.com/blog/uk-company-formation-for-non-residents";
const ARTICLE_OFFICE =
  "https://www.sevenoakprestige.com/blog/registered-office-vs-director-service-address-uk";
const ARTICLE_AFTER =
  "https://www.sevenoakprestige.com/blog/what-to-do-after-uk-company-formation-non-resident";
const SITE = "https://www.sevenoakprestige.com/";

const TRUST = [
  ["Société britannique enregistrée", "Seven Oak Prestige Ltd — Company No. 16903092"],
  ["Accompagnement depuis le Royaume-Uni", "Le client traite directement avec une société britannique."],
  ["KYC & due diligence", "Des processus adaptés aux fondateurs internationaux."],
  ["Tarification claire", "Scope et renouvellements communiqués avant achat."],
];

const FIT_YES = [
  "vous développez une clientèle internationale",
  "vous travaillez en B2B hors de France",
  "vous créez une agence digitale internationale",
  "vous gérez une activité SaaS",
  "vous faites de l’e-commerce international",
  "vous créez une présence au Royaume-Uni",
  "vous structurez un groupe ou une filiale",
  "vous faites de l’import / export",
];

const FIT_NO = [
  "toute votre activité reste en France",
  "toute la direction est effectuée depuis la France",
  "vous cherchez uniquement à réduire vos impôts",
  "vos salariés et infrastructures sont tous en France",
  "vous pensez qu’une société UK garantit un compte bancaire",
];

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

const PROVIDERS = ["Wise Business", "Revolut Business", "Airwallex", "Stripe", "Payoneer"];

const BANK_WORK = [
  "revue de l’activité",
  "structure de l’entreprise",
  "actionnariat",
  "résidence des dirigeants",
  "source des fonds",
  "transactions attendues",
  "description de l’activité",
  "documentation justificative",
  "cohérence du site et des opérations",
  "banking readiness",
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
  [
    "01",
    "Expliquez-nous votre projet",
    "Activité, résidence, actionnaires, marché visé et besoins opérationnels.",
  ],
  [
    "02",
    "Nous préparons votre dossier",
    "KYC, structure, dépôt Companies House, adresses et documentation.",
  ],
  [
    "03",
    "Recevez votre société",
    "Certificate of Incorporation, Memorandum & Articles, Share Certificate et Company Register.",
  ],
];

const PLANS = [
  {
    name: "Starter",
    price: "£199",
    badge: "",
    note: "Pour le fondateur qui dispose déjà de son adresse UK.",
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
    badge: "Recommandé pour les résidents français",
    note: "Pour une implantation britannique complète.",
    features: [
      "Tout le contenu Starter",
      "Registered Office — 12 mois",
      "Director Service Address — 12 mois",
      "Gestion et numérisation du courrier selon scope",
      "Support de conformité annuel",
    ],
    cta: "Choisir Prestige",
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    featured: true,
  },
  {
    name: "Elite",
    price: "£399",
    badge: "",
    note: "Pour un accompagnement d’établissement élargi.",
    features: [
      "Tout le contenu Prestige",
      "Virtual Business Address",
      "Banking readiness",
      "Support documentaire renforcé",
      "Accompagnement conseil additionnel selon scope",
    ],
    cta: "Choisir Elite",
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    featured: false,
  },
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
  return (
    <div className="bg-background" lang="fr">
      
      {/* Hero */}
      <div id="top" className="section-dark relative isolate overflow-hidden">
        <img
          src="/assets/france-advisory.jpg"
          alt="Une entrepreneuse française examine les documents de sa société britannique avec un conseiller à Londres"
          width={1408}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40 lg:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/92 to-ink-deep/55" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Création de société UK pour résidents français</p>
            <div className="mt-4 h-px w-24 rule-gold" />
            <h1 className="mt-8 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-[3.6rem]">
              Créez votre société au Royaume-Uni depuis la France
            </h1>
            <p className="mt-5 font-display text-xl text-gold-soft sm:text-2xl">
              Une UK Limited pensée pour votre activité — pas simplement enregistrée en ligne.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Accompagnement en français pour la création de votre société britannique, l’adresse UK,
              Companies House, la vérification d’identité, la réception du courrier et la préparation
              bancaire.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#tarifs" className="btn-gold">
                Créer ma société UK
              </a>
              <a href={WHATSAPP} className="btn-ghost">
                Parler à un conseiller en français
              </a>
            </div>

            <ul className="mt-14 grid gap-x-10 gap-y-4 border-t border-border/70 pt-8 text-sm text-muted-foreground sm:grid-cols-2">
              {["À partir de £199", "Cabinet britannique", "Accompagnement en français", "190+ pays couverts"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Sous réserve des contrôles KYC, sanctions et critères d’éligibilité.
            </p>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="section-parchment border-y border-border px-6">
        <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map(([t, b]) => (
            <div key={t} className="border-border py-9 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0">
              <dt className="text-sm font-semibold text-foreground">{t}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Reviews */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Avis clients</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Ce que disent nos clients</h2>
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
        <div className="mt-14">
          <ReviewsFr />
        </div>
      </Section>

      {/* Name checker */}
      <CompanyChecker lang="fr" />

      {/* Est-ce adapté */}
      <Section id="pour-qui" className="border-t border-border scroll-mt-20">
        <Eyebrow>Est-ce vraiment adapté pour vous ?</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Une UK Ltd peut être excellente dans le bon contexte
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          Un résident français peut généralement créer et diriger une UK Limited Company. Mais le fait que
          cela soit possible ne signifie pas automatiquement que ce soit la meilleure structure pour chaque
          activité.
        </p>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-8 sm:p-10">
            <h3 className="font-display text-xl">UK Ltd à considérer si :</h3>
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
            <h3 className="font-display text-xl">À analyser davantage si :</h3>
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
        <a href={WHATSAPP} className="btn-ghost mt-12">
          Analyser mon projet
        </a>
      </Section>

      {/* Secteurs */}
      <Section id="secteurs" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Secteurs & profils</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
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
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{list}</p>
              <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Comparaison */}
      <Section id="comparaison" className="border-t border-border scroll-mt-20">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Comparaison</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">UK Ltd, SASU ou EURL ?</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Le bon choix ne se résume pas au coût de création. Il dépend de votre clientèle, de votre lieu
              de direction et de vos flux réels.
            </p>
            <a
              href={ARTICLE_FRANCE}
              className="mt-10 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
            >
              Lire notre guide UK Ltd vs SASU / EURL
            </a>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {COMPARISON.map(([a, b]) => (
              <div key={a} className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-8">
                <dt className="text-sm font-semibold text-foreground">{a}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Fiscalité */}
      <Section id="fiscalite" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Fiscalité France–Royaume-Uni</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Votre société est britannique. Votre situation fiscale reste personnelle.
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Une UK Ltd n’efface pas automatiquement les obligations fiscales françaises de son dirigeant.
        </p>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TAX.map(([t, b]) => (
            <div key={t} className="bg-background p-7">
              <h3 className="text-sm font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 border-l-2 border-gold pl-6 font-display text-lg leading-snug text-foreground/90">
          Une société britannique doit répondre à une logique commerciale réelle, et non à une promesse
          fiscale simplifiée.
        </p>
        <a href={ARTICLE_FRANCE} className="btn-ghost mt-10">
          Comprendre la fiscalité France–UK
        </a>
      </Section>

      {/* Companies House IDV */}
      <Section id="verification" className="border-t border-border scroll-mt-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Vérification d’identité</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
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
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-gold">
                    0{i + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{s}</p>
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
            <a
              href={ARTICLE_NON_RESIDENTS}
              className="mt-10 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
            >
              Voir le guide de vérification Companies House
            </a>
          </div>
          <img
            src="/assets/advisory-team.jpg"
            alt="Conseillers Seven Oak Prestige examinant un dossier d’incorporation à Londres"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
          />
        </div>
      </Section>

      {/* Adresse UK */}
      <Section id="adresse" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Adresse britannique</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Votre adresse britannique expliquée simplement
        </h2>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {ADDRESSES.map(([t, b]) => (
            <div key={t} className="bg-background p-8">
              <h3 className="font-display text-lg">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 border-l-2 border-gold pl-6 text-sm text-foreground/90">
          Registered Office ≠ Director Service Address ≠ Business Address
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Pour approfondir :{" "}
          <a href={ARTICLE_OFFICE} className="text-gold-soft hover:text-gold">
            Registered Office et Director Service Address
          </a>
          .
        </p>
        <a href="#tarifs" className="btn-ghost mt-10">
          Choisir mon adresse UK
        </a>
      </Section>

      {/* Courrier */}
      <Section id="courrier" className="border-t border-border scroll-mt-20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Gestion du courrier</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
              Votre courrier UK, accessible depuis la France
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Votre société peut recevoir du courrier à Londres sans que vous ayez besoin de vous déplacer.
            </p>
            <ol className="mt-12 divide-y divide-border border-y border-border">
              {MAIL.map(([n, t, b]) => (
                <li key={n} className="flex gap-8 py-7">
                  <span className="font-display text-2xl text-gold">{n}</span>
                  <div>
                    <h3 className="text-base font-semibold">{t}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-foreground/90">
              Vous restez informé même si vous vivez en France.
            </p>
            <a href="#tarifs" className="btn-ghost mt-10">
              Découvrir la gestion du courrier
            </a>
          </div>
          <img
            src="/assets/documents.jpg"
            alt="Documents de société britannique et correspondance sur un bureau"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
          />
        </div>
      </Section>

      {/* Banque */}
      <Section id="banque" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Banque & paiements</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Préparer votre société pour la banque et les paiements
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Une société UK ne garantit pas automatiquement un compte bancaire ou un compte de paiement. Les
          établissements appliquent leurs propres critères d’éligibilité, KYC et risk assessment.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {PROVIDERS.map((p) => (
            <li key={p} className="border border-border px-4 py-2 text-xs tracking-[0.08em] text-muted-foreground">
              {p}
            </li>
          ))}
          <li className="border border-border px-4 py-2 text-xs tracking-[0.08em] text-muted-foreground">
            autres prestataires selon le profil
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Exemples de prestataires pouvant être étudiés selon votre éligibilité. Leur mention ne constitue
          pas un partenariat officiel.
        </p>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-8 sm:p-10">
            <h3 className="font-display text-xl">Ce que nous faisons</h3>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              {BANK_WORK.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-8 sm:p-10">
            <h3 className="font-display text-xl">Ce que nous ne pouvons pas garantir</h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              La décision d’ouverture appartient exclusivement au prestataire financier. Nous préparons un
              dossier cohérent et documenté, sans jamais promettre une approbation.
            </p>
            <a href={WHATSAPP} className="btn-ghost mt-10">
              Préparer mon dossier bancaire
            </a>
          </div>
        </div>
      </Section>

      {/* Pourquoi Seven Oak */}
      <Section id="a-propos" className="border-t border-border scroll-mt-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Pourquoi Seven Oak</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Plus qu’une simple incorporation</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Notre rôle ne consiste pas seulement à déposer un formulaire. Nous cherchons à comprendre
              l’activité, la structure, les besoins d’adresse et les prochaines étapes opérationnelles avant
              de recommander une solution.
            </p>
            <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {WHY.map(([t, b]) => (
                <article key={t} className="border-t border-border pt-5">
                  <h3 className="text-base font-semibold">{t}</h3>
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
            src="/assets/institution.jpg"
            alt="Architecture institutionnelle londonienne"
            width={1920}
            height={912}
            loading="lazy"
            decoding="async"
            className="h-full max-h-[520px] w-full object-cover"
          />
        </div>
      </Section>

      {/* Processus */}
      <Section id="process" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Comment ça marche</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Créer votre société UK en 3 étapes
        </h2>
        <ol className="mt-12 divide-y divide-border border-t border-border">
          {STEPS.map(([n, t, b]) => (
            <li key={n} className="flex gap-8 py-8">
              <span className="font-display text-3xl text-gold">{n}</span>
              <div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Les délais sont soumis au traitement et à l’approbation de Companies House.
        </p>
      </Section>

      {/* Tarifs */}
      <Section id="tarifs" className="border-t border-border scroll-mt-20">
        <Eyebrow>Tarifs</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">Des offres claires</h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Choisissez uniquement le niveau de support dont vous avez besoin.
        </p>
        <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.name} className="flex flex-col bg-background p-8 sm:p-10">
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 h-4 text-[0.6rem] uppercase tracking-[0.14em] text-gold">{p.badge}</p>
              <p className="mt-8 font-display text-4xl text-foreground">{p.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
              <ul className="mt-8 flex-1 space-y-2.5 border-t border-border pt-8 text-sm text-foreground/85">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={p.href} className={`mt-10 ${p.featured ? "btn-gold" : "btn-ghost"}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
          <p>Les décisions bancaires et de paiement restent à la discrétion des prestataires.</p>
          <p>
            Les renouvellements annuels et les services optionnels sont communiqués clairement avant
            l’achat.
          </p>
        </div>
      </Section>

      {/* Documents */}
      <Section className="section-parchment border-t border-border">
        <Eyebrow>Ce que vous recevez</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">Vos documents de société</h2>
        <dl className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map(([k, v]) => (
            <div key={k} className="bg-background p-7">
              <dt className="text-sm font-semibold text-foreground">{k}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Le Company Number est délivré lors de l’incorporation. Le Corporation Tax UTR est transmis une fois
          reçu de HMRC. Voir également{" "}
          <a href={ARTICLE_AFTER} className="text-gold-soft hover:text-gold">
            Que faire après la création de votre société UK
          </a>
          .
        </p>
      </Section>

      {/* Guides */}
      <Section id="guides" className="border-t border-border scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Guides France</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
              Nos guides pour les entrepreneurs français
            </h2>
          </div>
          <Link
            href="/guides"
            className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
          >
            Voir tous les guides France
          </Link>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map(([t, b, href]) =>
            href ? (
              <a key={t} href={href} className="group bg-background p-8 transition-colors hover:bg-accent">
                <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </a>
            ) : (
              <Link key={t} href="/guides" className="group bg-background p-8 transition-colors hover:bg-accent">
                <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg">{t}</h3>
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
            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Vos réponses avant de commencer.</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Pour aller plus loin :{" "}
              <a href={ARTICLE_FRANCE} className="text-gold-soft hover:text-gold">
                Créer une société au Royaume-Uni depuis la France
              </a>{" "}
              et le{" "}
              <a href={ARTICLE_NON_RESIDENTS} className="text-gold-soft hover:text-gold">
                Guide complet de création de société UK pour non-résidents
              </a>
              .
            </p>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {FAQS.map(([q, a]) => (
              <div key={q} className="py-6">
                <dt className="font-sans text-base font-semibold">{q}</dt>
                <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* CTA final */}
      <div id="final-cta" className="section-dark relative isolate overflow-hidden border-t border-border">
        <img
          src="/assets/institution.jpg"
          alt="Bureau londonien haut de gamme au crépuscule"
          width={1920}
          height={912}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/90 to-ink-deep/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Votre projet mérite plus qu’un formulaire Companies House
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Expliquez-nous votre activité. Nous vous aiderons à comprendre si une UK Limited correspond
              réellement à votre projet et à préparer une structure cohérente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#tarifs" className="btn-gold">
                Créer ma société UK
              </a>
              <a href={WHATSAPP} className="btn-ghost">
                Parler à un conseiller en français
              </a>
            </div>
            <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Nous utilisons vos informations uniquement pour créer votre société et satisfaire aux
              obligations de vérification. Voir{" "}
              <Link href="/privacy" className="text-gold-soft hover:text-gold">
                notre politique de confidentialité
              </Link>{" "}
              et{" "}
              <a href={SITE} className="text-gold-soft hover:text-gold">
                Seven Oak Prestige
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <Section id="contact-fr" className="section-parchment border-t border-border scroll-mt-20">
        <Eyebrow>Nous contacter</Eyebrow>
        <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Parlez à un conseiller francophone</h2>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          <div className="bg-background p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Ligne fixe UK</p>
            <a href="tel:+442045780726" className="mt-4 block font-display text-xl hover:text-gold">
              +44 20 4578 0726
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Numéro fixe britannique</p>
          </div>
          <div className="bg-background p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</p>
            <a href={WHATSAPP} className="mt-4 block font-display text-xl hover:text-gold">
              +44 7447 488755
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Disponible 7 jours sur 7</p>
          </div>
          <div className="bg-background p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">E-mail</p>
            <a
              href="mailto:contact@sevenoakprestige.com"
              className="mt-4 block break-all font-display text-xl hover:text-gold"
            >
              contact@sevenoakprestige.com
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Seven Oak Prestige Ltd — 124 City Road, London EC1V 2NX
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={WHATSAPP} className="btn-gold">
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
      <Footer />
    </div>
  );
}
