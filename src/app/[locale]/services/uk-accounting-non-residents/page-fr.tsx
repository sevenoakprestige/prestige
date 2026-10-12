"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const wa = (message: string) =>
  `https://wa.me/447447488755?text=${encodeURIComponent(message)}`;

const PACKAGE_FINDER = wa(
  "Bonjour Seven Oak Prestige, je souhaite obtenir de l'aide pour choisir un forfait comptable pour ma société UK. Nom de la société : ... / Pays du dirigeant : ... / Activité : ... / Statut d'activité : ... / Volume mensuel approximatif de transactions : ... / TVA ou paie : ... / Banque ou EMI principale : ... / Expert-comptable actuel : oui/non"
);

type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
  bestFor: string;
  cta: string;
  message: string;
  featured?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Essential Accounting",
    price: "£699 / an",
    description:
      "Pour les entreprises qui gèrent leur propre tenue de livres et recherchent principalement la conformité annuelle.",
    features: [
      "Comptes statutaires annuels (Annual Accounts)",
      "Déclaration d’impôt sur les sociétés (CT600)",
      "Préparation et dépôt du Confirmation Statement",
      "Revue de conformité de clôture d’exercice",
      "Coordination du calendrier de dépôt légal",
    ],
    note: "La tenue de livres continue et les déclarations de TVA ne sont pas incluses et peuvent être ajoutées séparément selon vos besoins.",
    bestFor:
      "Entreprises ayant une comptabilité interne ordonnée nécessitant principalement leurs comptes annuels, leur Corporation Tax et leur conformité Companies House.",
    cta: "Choisir Essential",
    message:
      "Bonjour Seven Oak Prestige, je souhaite discuter du forfait Essential Accounting pour ma société britannique.",
  },
  {
    name: "Managed Accounting",
    price: "£1,699 / an",
    description:
      "Tout le contenu Essential, avec la tenue de livres continue entièrement prise en charge pour vous.",
    features: [
      "Tout le contenu du forfait Essential",
      "Tenue de livres incluse, jusqu’à 50 transactions par mois",
      "Revue comptable trimestrielle",
      "Comptes annuels établis à partir des registres tenus",
      "Coordination comptable continue",
    ],
    note: "Le seuil de 50 transactions mensuelles est validé au regard de vos comptes et flux réels lors de l’onboarding.",
    bestFor:
      "Consultants, agences, éditeurs SaaS et entreprises à volume modéré souhaitant confier ensemble leur tenue de livres et leur clôture annuelle.",
    cta: "Choisir Managed",
    message:
      "Bonjour Seven Oak Prestige, je souhaite discuter du forfait Managed Accounting pour ma société britannique.",
    featured: true,
  },
  {
    name: "Managed Plus",
    price: "À partir de £2,199 / an",
    description:
      "Pour les entreprises assujetties à la TVA, en pleine croissance ou aux opérations plus complexes.",
    features: [
      "Tout le contenu du forfait Managed",
      "Déclarations de TVA trimestrielles incluses dans le périmètre initial",
      "Volumes de transactions supérieurs disponibles",
      "Gestion de la paie disponible sur demande",
      "Prise en charge multidevises et multiples canaux de paiement",
      "Rapports de gestion complémentaires sur demande",
    ],
    note: "Le tarif final est confirmé après analyse de vos volumes de transactions, de votre assujettissement à la TVA, de la paie et de vos opérations.",
    bestFor:
      "Entreprises assujetties à la TVA, activités e-commerce, entreprises multi-comptes ou multi-devises, sociétés avec salariés et filiales britanniques nécessitant un suivi étendu.",
    cta: "Demander une étude de périmètre",
    message:
      "Bonjour Seven Oak Prestige, je souhaite demander une étude de périmètre pour le forfait Managed Plus.",
  },
];

const STANDALONE: [string, string, string?][] = [
  ["Comptes de société dormante (Dormant Accounts)", "£249 / an"],
  ["Comptes faible volume + CT600", "£449 / an"],
  ["Comptes petite société active + CT600", "£649 / an"],
  [
    "Déclaration de TVA trimestrielle",
    "£119 / trimestre",
    "Une déclaration trimestrielle dans le cadre d’un périmètre standard.",
  ],
  ["Tenue de livres — jusqu’à 50 transactions / mois", "£99 / mois"],
  ["Tenue de livres — 51 à 100 transactions / mois", "£149 / mois"],
  [
    "Gestion de la paie — 1 dirigeant ou salarié",
    "£45 / mois",
    "Bulletins standard. Retraite obligatoire (auto-enrolment) et cas complexes étudiés séparément.",
  ],
  ["Salarié supplémentaire", "£10 / mois"],
  [
    "Préparation et dépôt du Confirmation Statement",
    "£199 au total",
    "Frais légaux de greffe Companies House inclus.",
  ],
  ["Enregistrement à la TVA (VAT Registration)", "£144", "La décision d’enregistrement appartient à HMRC."],
  ["Enregistrement EORI", "£60", "Délivrance et délais soumis aux services des douanes de HMRC."],
  ["Déclaration personnelle britannique (Self Assessment)", "Devis après étude du dossier"],
];

const REASONS = [
  [
    "Un interlocuteur unique",
    "Seven Oak maintient la cohérence entre la création, l’adresse, la conformité et la comptabilité.",
  ],
  [
    "Une équipe qualifiée aux commandes",
    "Vos déclarations sont traitées par nos partenaires comptables agréés ACCA, et non par des équipes non certifiées.",
  ],
  [
    "Pensé pour les dirigeants à distance",
    "Onboarding, transmission des pièces, validations et communication s’effectuent 100 % à distance.",
  ],
  [
    "Aucun dépassement imprévu",
    "Si votre charge de travail réelle dépasse le forfait initial, nous vous en informons avant d’engager les travaux.",
  ],
  [
    "Visibilité continue sur vos échéances",
    "Nous coordonnons votre calendrier légal et réclamons vos documents bien avant les dates limites.",
  ],
];

const OBLIGATIONS = [
  [
    "Comptes annuels (Annual Accounts)",
    "Dus à Companies House 9 mois après la clôture de l’exercice financier. Les premiers comptes sont dus 21 mois après l’immatriculation.",
  ],
  [
    "Impôt sur les sociétés (Corporation Tax)",
    "Payable généralement 9 mois et 1 jour après la clôture de la période comptable.",
  ],
  [
    "Déclaration fiscale de société (CT600)",
    "Normalement exigée 12 mois après la fin de la période comptable auprès de HMRC.",
  ],
  [
    "Confirmation Statement",
    "Doit être déposé au minimum une fois par an auprès de Companies House. Les frais de greffe numériques s’élèvent à £50.",
  ],
];

const INTERNATIONAL = [
  [
    "Multiples devises",
    "Les registres en GBP doivent souvent être réconciliés avec des flux en EUR, USD, AED ou autres monnaies.",
  ],
  [
    "Banques, EMIs et processeurs",
    "Les transactions réparties sur des comptes bancaires, des établissements de monnaie électronique et Stripe nécessitent une réconciliation unifiée.",
  ],
  [
    "Commerce international",
    "Les écritures britanniques doivent justifier des opérations avec des clients et fournisseurs situés partout dans le monde.",
  ],
  [
    "TVA et gestion de la paie",
    "Les obligations dépendent de la réalité de votre activité et de vos flux — pas simplement du fait d’avoir une société UK.",
  ],
  [
    "Actionnariat à l’étranger",
    "La détention par une société mère ou un non-résident soulève des questions de prix de transfert et de groupe à cadrer au préalable.",
  ],
];

const AUDIENCES = [
  "Fondateurs non-résidents dirigeant une société UK tout en résidant en France ou à l’étranger",
  "Dirigeants résidents au Royaume-Uni recherchant une tarification annuelle claire et un suivi coordonné",
  "Filiales britanniques de sociétés étrangères nécessitant une gestion comptable et fiscale locale",
  "Agences, consultants internationaux, activités SaaS, technologies et e-commerce",
  "Clients Seven Oak passant de la phase d’incorporation au suivi de conformité continue",
  "Sociétés souhaitant changer de cabinet comptable, que Seven Oak ait créé la société ou non",
];

const STEPS = [
  [
    "01",
    "Présentez votre entreprise",
    "Partagez votre secteur d’activité, la résidence des dirigeants, vos volumes mensuels, votre statut de TVA et vos comptes principaux.",
  ],
  [
    "02",
    "Recevez un périmètre clair",
    "Nous validons par écrit le forfait et le tarif adaptés, en signalant toute éventuelle prestation hors périmètre standard.",
  ],
  [
    "03",
    "Complétez votre onboarding",
    "Vérification d’identité, lettre de mission et transmission des accès nécessaires s’effectuent de façon sécurisée en ligne.",
  ],
  [
    "04",
    "Gestion comptable et déclarative",
    "Nous assurons la tenue de livres convenue, les comptes annuels, la liasse CT600 et le suivi légal tout au long de l’exercice.",
  ],
];

const FAQS = [
  [
    "Seven Oak est-il un cabinet d’experts-comptables agréés ?",
    "Vos comptes statutaires et déclarations fiscales sont établis par nos partenaires comptables agréés ACCA, Seven Oak Prestige assurant le pilotage de la mission et demeurant votre interlocuteur francophone unique.",
  ],
  [
    "Un dirigeant non-résident peut-il travailler avec un comptable UK à distance ?",
    "Oui. Tout le processus d’onboarding, de transmission des justificatifs et de signature s’effectue en ligne, sans qu’aucun déplacement au Royaume-Uni ne soit nécessaire.",
  ],
  [
    "Quelles sont les obligations annuelles obligatoires de toute UK Ltd ?",
    "Toute société doit déposer des comptes annuels (y compris pour une société dormante dans la majorité des cas), ainsi qu’un Confirmation Statement annuel. Une société en activité doit également soumettre une liasse fiscale CT600.",
  ],
  [
    "Dois-je déposer des comptes si ma société n’a pas exercé d’activité ?",
    "Oui, en règle générale. Une société dormante (dormant company) doit déposer des comptes dormants simplifiés ainsi que son Confirmation Statement annuel.",
  ],
  [
    "Toute société doit-elle obligatoirement soumettre un formulaire CT600 ?",
    "Dès lors que HMRC émet un avis de déclaration (Notice to deliver a Company Tax Return), celle-ci est obligatoire, même si la société est déficitaire ou n’a aucun impôt sur les sociétés à régler.",
  ],
  [
    "La TVA est-elle incluse dans les forfaits Essential ou Managed ?",
    "Non. Les déclarations trimestrielles de TVA sont proposées en prestation autonome ou intégrées dans le forfait étendu Managed Plus.",
  ],
  [
    "Que se passe-t-il si je dépasse 50 transactions par mois ?",
    "Nous analysons votre volume réel pour vous orienter vers Managed Plus ou vers un forfait de tenue de livres ajusté à votre cadence réelle.",
  ],
  [
    "Pouvez-vous reprendre la comptabilité de mon précédent comptable ?",
    "Oui, après avoir examiné la situation actuelle de votre société, les derniers comptes déposés et l’état des déclarations en cours.",
  ],
  [
    "Prenez-vous en charge mes impôts personnels à l’étranger ?",
    "Non automatiquement. Nos forfaits couvrent les obligations de la société britannique. Votre fiscalité personnelle dans votre pays de résidence doit faire l’objet de conseils spécifiques auprès d’un fiscaliste local.",
  ],
  [
    "Dois-je me déplacer au Royaume-Uni ?",
    "Non. L’ensemble des démarches, de l’onboarding au dépôt des comptes, s’effectue à distance.",
  ],
  [
    "Pouvez-vous garantir que HMRC et Companies House accepteront tout sans contrôle ?",
    "Nous établissons et vérifions vos déclarations avec rigueur selon les normes en vigueur, mais la décision finale d’acceptation et tout éventuel contrôle restent du ressort exclusif des autorités britanniques.",
  ],
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-6 sm:py-24 ${className}`}>
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

function Mark() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />;
}

function AccountingFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div key={question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-5 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-bold sm:text-lg text-foreground">
                  {question}
                </span>
                <span
                  className={`mt-1 shrink-0 text-gold transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AccountingPageFr() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* HERO SECTION */}
        <section className="section-dark border-b border-border px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="eyebrow">Comptabilité &amp; Conformité UK</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold tracking-tight leading-[1.08] sm:text-5xl lg:text-6xl text-foreground">
                Services de Comptabilité UK pour Sociétés &amp; Dirigeants Non-Résidents
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/90 sm:text-lg">
                Comptes annuels, déclarations d’impôt sur les sociétés (CT600), tenue de livres, TVA et paie pour les sociétés UK Limited gérées depuis l’étranger — avec un périmètre défini par écrit avant tout engagement.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PACKAGE_FINDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center"
                >
                  Trouver mon forfait comptable
                </a>
                <a href="#packages" className="btn-ghost text-center">
                  Voir les forfaits
                </a>
              </div>
            </div>
            <ul className="mt-12 grid border border-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Forfaits annuels dès £699",
                "Onboarding à distance, sans visite requise",
                "Périmètre et tarif validés avant engagement",
                "Partenaires comptables agréés ACCA",
              ].map((item) => (
                <li
                  key={item}
                  className="flex min-h-24 items-center gap-3 border-b border-border px-5 py-5 text-sm font-medium leading-6 text-foreground/90 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r"
                >
                  <Mark />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHO PREPARES */}
        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <Eyebrow>Qui prépare réellement vos comptes</Eyebrow>
            <div>
              <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Sachez qui est responsable du travail
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground/90 font-medium">
                Vous confiez la comptabilité et les déclarations légales de votre entreprise à un tiers. Il est essentiel de comprendre comment ce travail est encadré et supervisé avant de vous engager.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                Vos travaux de tenue de livres et de conformité fiscale sont réalisés par nos partenaires comptables — une équipe externalisée agréée ACCA — Seven Oak Prestige agissant comme votre interlocuteur unique tout au long de la mission. Vous bénéficiez ainsi d’une relation directe et d’une équipe certifiée derrière chaque déclaration.
              </p>
            </div>
          </div>
        </Section>

        {/* PACKAGES */}
        <Section id="packages" className="section-parchment border-y border-border scroll-mt-24">
          <Eyebrow>Trois forfaits transparents</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Choisissez selon votre charge de travail réelle, sans devinettes
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
            Aucun coût caché ni périmètre imprévu. Vous savez exactement ce qui est inclus et ce qui ne l’est pas avant de vous engager — chaque forfait est confirmé au regard de la réalité de votre entreprise lors de l’onboarding.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col border bg-background p-6 sm:p-8 ${
                  pkg.featured
                    ? "border-gold shadow-lg lg:-translate-y-2"
                    : "border-border"
                }`}
              >
                {pkg.featured && (
                  <p className="absolute -top-3 left-6 bg-gold px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                    Recommandé pour la plupart des fondateurs
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-5 font-display text-4xl font-bold text-gold">{pkg.price}</p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
                  {pkg.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6 text-sm leading-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-foreground/85">
                      <Mark />
                      {feature}
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="mt-5 border-l-2 border-gold pl-4 text-xs leading-5 text-muted-foreground">
                    {pkg.note}
                  </p>
                )}
                <p className="mt-6 text-sm leading-6 text-foreground/90">
                  <span className="font-bold text-foreground">Idéal pour :</span> {pkg.bestFor}
                </p>
                <a
                  href={wa(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pkg.featured ? "btn-gold" : "btn-ghost"} mt-7 w-full text-center`}
                >
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-10 max-w-4xl border-l-2 border-gold pl-5">
            <p className="leading-7 font-medium text-foreground/90">
              Chaque entreprise est unique. Avant l’onboarding, nous validons le périmètre comptable en fonction de vos volumes de transactions, de votre situation de TVA, de vos besoins de paie et de la complexité de votre activité. Tout travail complémentaire fait l’objet d’un accord préalable écrit avec vous.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Les abonnements aux logiciels comptables, les frais gouvernementaux et les missions spécialisées hors périmètre sont facturés séparément, sauf lorsqu’un service mentionne expressément que les frais légaux sont inclus.
            </p>
          </div>
        </Section>

        {/* STANDALONE */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow>Besoin d’une seule prestation ?</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Ne payez que pour le travail dont vous avez besoin
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Vous n’avez pas besoin de souscrire un forfait annuel complet pour une déclaration ponctuelle ou un dépôt spécifique.
              </p>
              <a
                href={wa(
                  "Bonjour Seven Oak Prestige, je souhaite un devis pour un service comptable ou déclaratif ponctuel. Le service demandé est : ..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 inline-block text-center"
              >
                Demander un devis à la carte
              </a>
            </div>
            <div className="border-y border-border">
              {STANDALONE.map(([service, price, note]) => (
                <div
                  key={service}
                  className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">{service}</h3>
                    {note && (
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm font-bold text-gold sm:text-right">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* REASONS */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>Pourquoi les fondateurs choisissent Seven Oak</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Responsabilité claire. Périmètre transparent.
          </h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {REASONS.map(([title, body]) => (
              <article key={title} className="bg-ink p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            Les dirigeants conservent la responsabilité légale finale des dépôts de leur société, comme avec n’importe quel cabinet comptable.
          </p>
        </Section>

        {/* OBLIGATIONS */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <Eyebrow>Votre calendrier légal</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Ce que votre société UK doit réellement déposer
              </h2>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {OBLIGATIONS.map(([title, body]) => (
                <article key={title} className="bg-background p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-7 text-muted-foreground">
            Ces différentes échéances ne tombent pas toutes à la même date — d’où l’importance d’un suivi rigoureux de votre calendrier de conformité.
          </p>
        </Section>

        {/* INTERNATIONAL */}
        <Section className="section-parchment border-y border-border">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>Comptabilité transfrontalière</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                La comptabilité pour non-résidents ne se résume pas à « une comptabilité en ligne standard »
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Une société peut être constituée en Angleterre et au Pays de Galles alors que son fondateur vit à Paris, Dubaï, New York ou Singapour. Les écritures doivent fidèlement traduire la réalité opérationnelle de l’activité.
              </p>
            </div>
            <div className="space-y-0 border-y border-border">
              {INTERNATIONAL.map(([title, body]) => (
                <div key={title} className="border-b border-border py-5 last:border-b-0">
                  <h3 className="font-sans text-sm font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* TAX BOUNDARY */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>La frontière fiscale transfrontalière</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Les comptes de la société UK ne règlent pas toutes les questions fiscales à l’étranger
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Notre mission comptable au Royaume-Uni couvre les exigences déclaratives et légales de la société britannique. Elle ne préjuge pas automatiquement de votre résidence fiscale personnelle, de l’imposition de vos salaires ou dividendes dans votre pays de résidence, des déclarations de comptes étrangers, ni de l’existence d’un établissement stable hors du Royaume-Uni.
              </p>
              <p>
                Lorsqu’une situation nécessite l’avis d’un spécialiste dans une autre juridiction, nous identifions le point de vigilance et pouvons vous orienter vers un professionnel qualifié. La comptabilité britannique ne se substitue pas à un conseil fiscal personnalisé dans votre pays de résidence.
              </p>
            </div>
          </div>
        </Section>

        {/* AUDIENCES */}
        <Section className="section-parchment border-y border-border">
          <Eyebrow>À qui s’adresse ce service</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Un accompagnement pour les sociétés britanniques gérées depuis n’importe où
          </h2>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((item, index) => (
              <li key={item} className="flex gap-4 bg-background p-6 text-sm leading-6">
                <span className="font-display text-xl font-bold text-gold">0{index + 1}</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Pas encore immatriculé ? Découvrez notre service de{" "}
            <Link
              href="/services/uk-company-formation-for-non-residents"
              className="text-gold font-medium hover:underline"
            >
              Création de société UK pour non-résidents
            </Link>
            .
          </p>
        </Section>

        {/* SWITCHING */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <Eyebrow>Vous avez déjà un expert-comptable ?</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Changer de cabinet en clarifiant d’abord la situation existante
              </h2>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">
                Nous analysons préalablement l’état de votre société : derniers comptes déposés, situation d’impôt sur les sociétés, état de la tenue de livres, assujettissement à la TVA, paie et échéances imminentes. Si vous poursuivez, la transition est coordonnée avec le transfert formel d’informations et d’autorisations professionnelles.
              </p>
              <a
                href={wa(
                  "Bonjour Seven Oak Prestige, je souhaite discuter du changement de cabinet comptable pour ma société UK."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 inline-block text-center"
              >
                Discuter d’un changement de cabinet
              </a>
            </div>
          </div>
        </Section>

        {/* SOFTWARE */}
        <Section className="section-parchment border-y border-border">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Logiciels de comptabilité</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Vous utilisez déjà un logiciel comptable ? Nous nous adaptons à vos outils.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Si votre entreprise utilise déjà une solution de comptabilité en ligne, nous pouvons travailler directement sur votre environnement lorsque c’est pertinent. Nous prenons en charge les principales plateformes cloud telles que Xero et QuickBooks, et étudions tout autre système lors de l’onboarding.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Si une souscription logicielle doit être mise en place, nous validons avec vous la plateforme et l’abonnement les plus adaptés avant le démarrage.
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Vous n’avez donc pas à bouleverser vos habitudes de facturation et de gestion simplement pour confier votre comptabilité à Seven Oak Prestige.
              </p>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-medium leading-6 text-foreground/90">
                Les abonnements aux logiciels comptables sont facturés séparément et ne sont pas inclus dans les prix des forfaits affichés, sauf mention explicite contraire.
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Compatible avec les plateformes comptables de référence
              </p>
              <p className="mt-2 text-sm font-bold text-foreground">
                Xero <span className="text-gold">•</span> QuickBooks{" "}
                <span className="text-gold">•</span>{" "}
                <span className="font-normal text-muted-foreground">
                  Autres systèmes examinés lors de l’onboarding
                </span>
              </p>
            </div>
            <img
              src="/assets/accounting-order-1280.webp"
              srcSet="/assets/accounting-order-640.webp 640w, /assets/accounting-order-1280.webp 1280w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Gestion comptable et conformité légale"
              className="aspect-[16/10] w-full border border-border object-cover"
            />
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>Comment ça fonctionne</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Un périmètre clair avant d’entamer les travaux
          </h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([number, title, body]) => (
              <li key={number} className="bg-ink p-6 sm:p-7">
                <span className="font-display text-2xl font-bold text-gold">{number}</span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* WHAT WE NEED */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>Ce que nous attendons de vous</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Des justificatifs complets pour une gestion fluide
              </h2>
            </div>
            <p className="leading-7 text-muted-foreground">
              Même lorsque la tenue de livres est incluse, l’entreprise doit fournir des informations sources complètes : relevés bancaires et EMI, exports Stripe/processeurs, factures clients et fournisseurs, justificatifs de dépenses, éléments de paie, contrats et explications sur les opérations exceptionnelles. Des pièces manquantes ou retardées peuvent nécessiter des travaux complémentaires hors périmètre initial.
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="section-parchment border-y border-border">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <Eyebrow>Questions courantes</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Comptabilité UK pour dirigeants résidant hors du Royaume-Uni
              </h2>
            </div>
            <AccountingFaq />
          </div>
        </Section>

        {/* FINAL CTA */}
        <section id="final-cta" className="section-dark px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Vous hésitez sur le bon forfait ?</p>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight leading-tight sm:text-5xl text-foreground">
                Laissez votre charge de travail définir le périmètre
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                Expliquez-nous comment fonctionne votre société britannique. Nous analyserons la charge réelle avant de vous recommander une formule — jamais l’inverse.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
                Nous recueillerons le nom de votre société, votre pays de résidence, votre secteur d’activité, votre statut d’activité, vos volumes mensuels, vos besoins de TVA/paie, vos comptes bancaires et la présence éventuelle d’un comptable actuel.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PACKAGE_FINDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center"
                >
                  Trouver mon forfait comptable
                </a>
                <a
                  href={wa(
                    "Bonjour Seven Oak Prestige, je souhaite un devis comptable pour ma société britannique."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-center"
                >
                  Demander un devis
                </a>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Aucun déplacement au Royaume-Uni requis. Périmètre et tarification validés par écrit avant tout engagement.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="border-t border-border bg-background px-5 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl text-xs leading-6 text-muted-foreground">
            <p>
              Seven Oak Prestige Ltd fournit des services de création de société, de domiciliation, de coordination de conformité et de conseil d’entreprise. Les travaux comptables et fiscaux sont réalisés par nos partenaires comptables agréés ACCA, selon le périmètre convenu dans la lettre de mission.
            </p>
            <p className="mt-3">
              Les informations présentées sur cette page sont fournies à titre indicatif et ne constituent pas un conseil juridique, fiscal personnel ou financier réglementé. Le traitement fiscal dépend de la société, de ses flux et de la situation individuelle de ses dirigeants et associés.
            </p>
            <p className="mt-3">
              Les tarifs affichés et les frais légaux de greffe sont susceptibles d’évolution. Toute mission est soumise aux procédures d’onboarding, à la vérification d’identité client et à la confirmation écrite du périmètre d’intervention.
            </p>
            <p className="mt-3">
              Seven Oak Prestige Ltd · Immatriculation n° 16903092 · Siège social : 124 City Road, Londres EC1V 2NX, Royaume-Uni.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta primaryLabel="Voir les forfaits" secondaryLabel="WhatsApp" primaryHref="#packages" />
    </div>
  );
}
