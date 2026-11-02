"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Cpu,
  FileCheck2,
  Globe2,
  Plus,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";

const PAGE_URL =
  "https://www.sevenoakprestige.com/fr/services/uk-company-formation-for-non-residents";
const WHATSAPP =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20je%20souhaiterais%20%C3%A9changer%20avec%20un%20conseiller%20concernant%20la%20cr%C3%A9ation%20d%27une%20soci%C3%A9t%C3%A9%20UK%20depuis%20l%27%C3%A9tranger.";
const WHATSAPP_BANKING =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20je%20souhaiterais%20me%20renseigner%20sur%20l%27accompagnement%20bancaire%20UK%20pour%20ma%20soci%C3%A9t%C3%A9.";
const WHATSAPP_CONTACT =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20je%20souhaiterais%20discuter%20de%20la%20cr%C3%A9ation%20d%27une%20soci%C3%A9t%C3%A9%20UK%20depuis%20l%27%C3%A9tranger.";
const GOVUK_VERIFY = "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house";
const GOOGLE_REVIEWS_URL = "https://share.google/owyOtNunkhfg4c0dE";
const OVERALL_RATING = "5.0";

const REVIEWS = [
  {
    name: "Safaat Siddhi",
    rating: 5,
    text: "The service was efficient, transparent, and delivered as promised.",
    avatarUrl: "/assets/reviewers/safaat-siddhi.webp",
  },
  {
    name: "Veridian",
    rating: 5,
    text: "I highly recommend their services!",
    avatarUrl: "/assets/reviewers/veridian.webp",
  },
  {
    name: "Mirvac",
    rating: 5,
    text: "Great service, super professional and easy to work with.",
  },
  {
    name: "Vbvvb Bbjbb",
    rating: 5,
    text: "I had a great experience working with this company for my UK company registration. The entire process was smooth, professional, and well-organized. Their team was always responsive, answered my questions clearly, and kept me updated throughout every step. Everything was completed on time, exactly as promised.",
    avatarUrl: "/assets/reviewers/vbvvb-bbjbb.webp",
  },
  {
    name: "albalushi Mazan",
    rating: 5,
    text: "I am pleased to share my excellent experience with this company, where I witnessed a high level of professionalism and dedication. From what I observed, the team consists of hardworking employees with a strong sense of responsibility and commitment. I extend my sincere thanks and appreciation to them for their efforts and continued dedication.",
    avatarUrl: "/assets/reviewers/albalushi-mazan.webp",
  },
  {
    name: "Aleksandr Almataev",
    rating: 5,
    text: "Team made everything as it should be, eben in my hard case. Thanks a lot! Company Ltd incorporated just on time!",
    avatarUrl: "/assets/reviewers/aleksandr-almataev.webp",
  },
] as const;

const NONRESIDENT_PACKAGES = [
  {
    name: "Starter Formation",
    price: 199,
    tag: "Les essentiels de la création",
    intro: "Pour les fondateurs disposant déjà de solutions d’adresses adaptées au Royaume-Uni.",
    features: [
      "Constitution de société Limited (Ltd) UK",
      "Dépôt auprès de Companies House",
      "Documents d’immatriculation numériques",
      "Rappels des échéances clés de conformité",
    ],
    cta: "Choisir Starter",
    href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
    featured: false,
  },
  {
    name: "Prestige Formation",
    price: 299,
    tag: "Recommandé pour les non-résidents",
    intro: "Création incluant l’infrastructure d’adresses UK nécessaire à la majorité des fondateurs internationaux.",
    features: [
      "Tout ce qui est inclus dans Starter",
      "Siège social (Registered Office) — 12 mois",
      "Adresse de service du dirigeant — 12 mois",
      "Traitement et numérisation du courrier éligible",
      "Assistance annuelle à la conformité selon le périmètre du forfait",
    ],
    cta: "Choisir Prestige",
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    featured: false,
  },
  {
    name: "Elite Formation",
    price: 399,
    tag: "Le plus complet",
    intro: "Adresses UK étendues, assistance à la vérification d’identité et préparation bancaire.",
    features: [
      "Tout ce qui est inclus dans Prestige",
      "Adresse commerciale virtuelle pendant 12 mois",
      "Support hautement prioritaire",
      "Assistance bancaire et EMI directe le cas échéant",
      "Assistance à la conformité",
    ],
    identityDirectorsIncluded: 1,
    cta: "Choisir Elite",
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    featured: true,
  },
] as const;

const REQUIREMENTS = [
  [
    "Dénomination et activité",
    "Votre nom de société proposé, la description de votre activité et les codes SIC pertinents.",
  ],
  [
    "Dirigeants et actionnariat",
    "Informations sur les dirigeants, actionnaires et bénéficiaires effectifs (PSC), y compris la répartition des parts.",
  ],
  [
    "Identité et domicile personnel",
    "Passeport valide ou pièce d’identité éligible ; justificatif de domicile datant de moins de trois mois.",
  ],
  [
    "Siège social au Royaume-Uni",
    "Une adresse appropriée dans la juridiction d’immatriculation ; des options sont incluses dans les forfaits Prestige et Elite.",
  ],
] as const;

const SECTORS = [
  [Code2, "SaaS et logiciels"],
  [Cpu, "Technologie et IA"],
  [ShoppingBag, "E-commerce et vendeurs en ligne"],
  [BriefcaseBusiness, "Consultants et agences"],
  [Globe2, "Commerce international"],
  [Users, "Fondateurs à l’étranger"],
] as const;

const STEPS = [
  [
    "Choisissez et payez en sécurité",
    "Sélectionnez votre forfait et validez le paiement. Recevez votre confirmation, votre accès au portail et votre e-mail de bienvenue.",
  ],
  [
    "Complétez l’onboarding sécurisé",
    "Transmettez les détails de la société ainsi que vos pièces d’identité et de domicile. Effectuez le KYC et les vérifications légales distinctes.",
  ],
  [
    "Nous déposons auprès de Companies House",
    "Une fois les contrôles requis et le dossier complets, nous soumettons votre immatriculation pour examen.",
  ],
  [
    "Recevez vos documents",
    "Après approbation, recevez vos documents numériques d’immatriculation et nos conseils sur vos prochaines obligations.",
  ],
] as const;

const ADDRESSES = [
  {
    title: "Siège social UK (Registered Office)",
    href: "/fr/services/registered-office-service",
    body: "L’adresse officielle de correspondance de la société, affichée sur le registre public de Companies House.",
  },
  {
    title: "Adresse de service du dirigeant",
    href: "/fr/services/director-service-address",
    body: "Une adresse publique de correspondance pour les dirigeants, distincte de leur adresse résidentielle personnelle.",
  },
  {
    title: "Adresse commerciale virtuelle",
    href: "/fr/services/virtual-business-address",
    body: "Une adresse dédiée au courrier commercial éligible et à la correspondance d’affaires selon les conditions du service.",
  },
] as const;

const BANKING = [
  [
    "Évaluation du profil d’activité",
    "Nous analysons vos activités, votre structure de détention, vos pays d’opération et vos flux prévus afin d’identifier les informations que les établissements sont susceptibles de demander.",
  ],
  [
    "KYC et pièces justificatives",
    "Nous vous aidons à organiser les documents sociaux, les informations sur les dirigeants et bénéficiaires effectifs, les justificatifs d’adresse, l’origine des fonds et les pièces commerciales pertinentes.",
  ],
  [
    "Préparation du dossier et accompagnement",
    "Nous vous orientons vers des parcours adaptés, structurons les éléments justificatifs et vous assistons pour répondre aux demandes raisonnables de documentation dans le périmètre convenu.",
  ],
] as const;

const ONGOING = [
  [
    "Comptabilité et fiscalité",
    "Comptes annuels, impôt sur les sociétés (Corporation Tax), TVA et accompagnement EORI selon vos besoins.",
  ],
  [
    "Registres et déclarations",
    "Tenue comptable, déclarations de confirmation (Confirmation Statements) et secrétariat juridique.",
  ],
  [
    "Renouvellement des adresses",
    "Maintenez actifs les services d’adresse dont votre société a besoin au-delà de la première année.",
  ],
] as const;

const FAQS = [
  {
    q: "Puis-je détenir et diriger une société UK depuis l’étranger ?",
    a: "Généralement oui, y compris en tant qu’associé unique et seul dirigeant. Un dirigeant résident au Royaume-Uni ou un déplacement sur place n’est normalement pas requis. Les critères d’éligibilité et de vérification restent applicables ; la constitution n’accorde ni visa ni droit de séjour au Royaume-Uni.",
  },
  {
    q: "De quels documents aurai-je besoin ?",
    a: "Un passeport valide ou une pièce d’identité éligible, un justificatif de domicile actuel de moins de trois mois, le nom souhaité pour la société, la description des activités ainsi que les informations sur les dirigeants, actionnaires et bénéficiaires effectifs. Des pièces complémentaires peuvent être demandées lors de la revue de conformité.",
  },
  {
    q: "Combien de temps prend l’immatriculation ?",
    a: "Une fois le KYC validé et toutes les informations requises reçues, l’immatriculation standard prend généralement 1 à 2 jours ouvrables. L’examen et l’approbation par Companies House déterminent le délai final, qui ne peut être garanti.",
  },
  {
    q: "Mon adresse personnelle sera-t-elle publique ?",
    a: "L’adresse résidentielle d’un dirigeant reste généralement confidentielle lorsqu’une adresse de service distincte est utilisée. Le siège social de la société et l’adresse de service du dirigeant figurent sur le registre public.",
  },
  {
    q: "Quelle est la différence entre les deux vérifications d’identité ?",
    a: "L’onboarding/KYC Seven Oak correspond à nos obligations de vigilance client. La vérification d’identité légale de Companies House est distincte et doit être réalisée via une procédure autorisée. Nous fournissons une assistance administrative, et non une vérification réglementée ou ACSP.",
  },
  {
    q: "Puis-je utiliser ma société pour des services bancaires ou des places de marché en ligne ?",
    a: "Vous pouvez soumettre une demande auprès d’établissements adaptés pour des activités éligibles. L’ouverture de comptes bancaires, de paiement ou marketplace est indépendante de la création de la société et dépend de l’évaluation propre à chaque prestataire.",
  },
  {
    q: "Quelles sont mes obligations si je réside hors du Royaume-Uni ?",
    a: "Votre société doit conserver un siège social approprié, tenir ses registres statutaires et déposer ses comptes annuels et déclarations de confirmation, ainsi que ses déclarations fiscales le cas échéant. Même les sociétés inactives (dormant) ont des obligations déclaratives. Tenez également compte de vos obligations fiscales dans votre pays de résidence.",
  },
];

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.93l-3.86-3c-1.07.72-2.45 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.97H1.26v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.25 14.25a7.2 7.2 0 0 1 0-4.5v-3.1H1.26a12 12 0 0 0 0 10.7l3.99-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.26 6.65l3.99 3.1C6.2 6.87 8.86 4.75 12 4.75z"
      />
    </svg>
  );
}

function CompactReviewsSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [totalSnaps, setTotalSnaps] = useState<number>(REVIEWS.length);

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("li");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 16;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const snaps = Math.max(1, Math.round(maxScroll / cardWidth) + 1);
    const current = cardWidth > 0 ? Math.min(snaps - 1, Math.round(el.scrollLeft / cardWidth)) : 0;
    setTotalSnaps(snaps);
    setSelected(current);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDir = (dir: number) => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("li");
    const step = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div aria-label="Avis Google de nos clients" className="min-w-0">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="mb-4 inline-flex min-h-11 flex-wrap items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition-colors"
      >
        <GoogleMark />
        <span className="flex gap-0.5 text-gold" aria-label={`${OVERALL_RATING} sur 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          ))}
        </span>
        <span>{OVERALL_RATING}/5 sur Google</span>
      </a>

      <ul
        ref={listRef}
        className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((review) => (
          <li
            key={review.name}
            className="flex min-h-48 min-w-0 flex-[0_0_90%] snap-start flex-col border border-border bg-background p-5 sm:flex-[0_0_calc((100%-16px)/2)] lg:flex-[0_0_calc((100%-32px)/3)]"
          >
            <div className="flex items-center gap-3">
              {"avatarUrl" in review ? (
                <img
                  src={review.avatarUrl}
                  alt={`Profil Google de ${review.name}`}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-xs font-semibold text-gold border border-gold/40"
                  aria-hidden="true"
                >
                  {review.name.slice(0, 1)}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted-foreground underline underline-offset-2 hover:text-gold"
                >
                  Avis Google
                </a>
              </div>
            </div>
            <span className="mt-4 flex gap-0.5 text-gold" aria-label={`${review.rating} sur 5`}>
              {Array.from({ length: review.rating }, (_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" aria-hidden="true" />
              ))}
            </span>
            <blockquote lang="en" className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
              “{review.text}”
            </blockquote>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:flex sm:justify-between">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-foreground underline decoration-gold/50 underline-offset-4 hover:text-gold"
        >
          Voir les avis sur Google
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            title="Avis précédents"
            aria-label="Avis précédents"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center text-xs text-muted-foreground" aria-live="polite">
            {selected + 1}/{totalSnaps}
          </span>
          <button
            type="button"
            title="Avis suivants"
            aria-label="Avis suivants"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function OfficialNameSearch() {
  const [name, setName] = useState("");
  const href = name.trim()
    ? `https://find-and-update.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(name.trim())}`
    : "https://find-and-update.company-information.service.gov.uk/company-name-availability";

  return (
    <div>
      <label
        htmlFor="official-company-name"
        className="mb-2 block text-xs font-semibold text-foreground"
      >
        Nom de votre future société
      </label>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input
          id="official-company-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={120}
          placeholder="Nom de votre future société"
          autoComplete="organization"
          className="min-h-12 w-full border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
        />
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn-gold inline-flex items-center justify-center gap-2"
        >
          <span>Rechercher sur Companies House</span>
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Ouvre le registre officiel dans un nouvel onglet. Les résultats de recherche ne réservent pas
        un nom et ne confirment pas son approbation ; la décision finale appartient au Registrar.
      </p>
    </div>
  );
}

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
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border px-5 py-12 sm:px-6 sm:py-14 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({
  label,
  children,
  intro,
}: {
  label: string;
  children: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {children}
      </h2>
      {intro && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

export default function NonResidentsFormationPageFr() {
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
            name: "Création de société UK pour non-résidents",
            item: PAGE_URL,
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

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* ── HERO SECTION ── */}
        <section className="section-dark relative isolate overflow-hidden border-b border-border px-5 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="min-w-0 max-w-[42rem]">
              <p className="eyebrow">Pour les fondateurs internationaux</p>
              <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] text-foreground sm:text-5xl lg:text-[3.25rem]">
                Création de Société UK pour Non-Résidents
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/90">
                Constituez votre société Limited (Ltd) au Royaume-Uni depuis l’étranger, avec des
                options d’adresses britanniques et un accompagnement humain tout au long de votre
                onboarding.
              </p>
              <p className="mt-6 text-sm font-semibold text-foreground">
                Création de société UK{" "}
                <span className="font-display text-2xl text-gold">dès 199 £</span>
                <span className="mt-1 block text-xs font-normal text-muted-foreground">
                  Frais d’immatriculation Companies House inclus
                </span>
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  <span>Comparer les Forfaits</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center justify-center gap-2"
                >
                  <span>Parler à un Conseiller</span>
                </a>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Les services d’adresse varient selon le forfait choisi. Toutes les immatriculations
                sont soumises aux contrôles d’identité et KYC, à un dossier complet et à
                l’approbation de Companies House.
              </p>
            </div>

            <picture className="block min-w-0">
              <source
                type="image/avif"
                srcSet="/assets/nr-hero-skyline-640.avif 640w, /assets/nr-hero-skyline-1280.avif 1280w, /assets/nr-hero-skyline-1920.avif 1920w"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <img
                src="/assets/nr-hero-skyline-1280.webp"
                srcSet="/assets/nr-hero-skyline-640.webp 640w, /assets/nr-hero-skyline-1280.webp 1280w, /assets/nr-hero-skyline-1920.webp 1920w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                width={1280}
                height={960}
                fetchPriority="high"
                decoding="async"
                alt="Tower Bridge sur la Tamise avec la skyline de la City de Londres et la Tour de Londres en fin d'après-midi"
                className="aspect-[4/3] w-full border border-border object-cover object-[35%_50%]"
              />
            </picture>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="section-parchment border-b border-border px-5 py-4 sm:px-6">
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-foreground">
            <li className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gold" aria-hidden="true" />
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/16903092"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                Société enregistrée au Royaume-Uni · 16903092
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" aria-hidden="true" />
              <span>Accompagnement des Fondateurs Internationaux</span>
            </li>
            <li className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-gold" aria-hidden="true" />
              <span>Forfaits de Création Transparents</span>
            </li>
          </ul>
        </div>

        {/* ── REVIEWS ── */}
        <Section id="reviews" className="!py-8 sm:!py-10">
          <Heading label="Expérience client">Ce Que Disent Nos Clients</Heading>
          <CompactReviewsSection />
        </Section>

        {/* ── PRICING PACKAGES ── */}
        <Section id="pricing">
          <Heading
            label="Forfaits de création"
            intro="Tarifs uniques de constitution. Choisissez uniquement les adresses et l’accompagnement dont vous avez besoin."
          >
            Choisissez Votre Forfait de Création.
          </Heading>

          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {NONRESIDENT_PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex min-w-0 flex-col border border-border p-6 ${
                  pkg.featured ? "section-dark" : "section-parchment"
                }`}
              >
                <p className="min-h-5 text-xs font-semibold text-gold">{pkg.tag}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-3 font-display text-4xl font-bold text-foreground">£{pkg.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Paiement unique · Frais Companies House inclus
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pkg.intro}</p>

                <ul className="mb-6 mt-5 flex-1 space-y-3 border-t border-border pt-5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    pkg.featured ? "btn-gold" : "btn-ghost"
                  } inline-flex w-full items-center justify-center gap-2`}
                >
                  <span>{pkg.cta}</span>
                  {pkg.featured && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </a>

                <a
                  href={`https://wa.me/447447488755?text=${encodeURIComponent(
                    `Bonjour Seven Oak Prestige, j'ai une question concernant le forfait ${pkg.name} (£${pkg.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center justify-center text-xs text-muted-foreground underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Poser une question sur {pkg.name.split(" ")[0]}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 border-y border-border py-5 lg:grid-cols-2">
            <div>
              <h3 className="font-sans text-sm font-semibold text-foreground">
                Périmètre des forfaits
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Les services de courrier suivent le périmètre convenu. L’assistance administrative à
                la vérification d’identité du forfait Elite inclut un dirigeant ; les dirigeants ou
                personnes concernées supplémentaires font l’objet d’une prestation distincte.
                L’accompagnement à la préparation bancaire Elite est inclus dans le périmètre
                indiqué ; tout accompagnement bancaire complémentaire est défini séparément. Les
                services optionnels et récurrents sont facturés séparément.
              </p>
              <p className="mt-3 text-xs">
                <Link
                  href="/fr/terms"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Conditions Générales
                </Link>
                <span className="mx-3 text-muted-foreground">·</span>
                <Link
                  href="/fr/refund"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Politique de Remboursement et d’Annulation
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-foreground">
                Renouvellement des adresses dès la 2ᵉ année
              </h3>
              <dl className="mt-2 space-y-2 text-xs text-muted-foreground">
                {[
                  ["Siège social (Registered Office)", "59 £ / an"],
                  ["Adresse de service du dirigeant", "35 £ / an"],
                  ["Adresse commerciale virtuelle", "150 £ / an"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between gap-3">
                    <dt>{name}</dt>
                    <dd className="shrink-0 font-semibold text-foreground">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* ── COMPANY NAME CHECK ── */}
        <Section id="name-check" className="section-parchment">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Avant de commencer</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Rechercher Votre Nom de Société
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vérifiez le registre officiel avant de choisir le nom de votre société.
              </p>
            </div>
            <div className="min-w-0">
              <OfficialNameSearch />
            </div>
          </div>
        </Section>

        {/* ── ELIGIBILITY & REQUIREMENTS ── */}
        <Section id="eligibility" className="section-parchment">
          <Heading label="Éligibilité et prérequis">
            Créez Depuis l’Étranger. Sachez Ce Qu’il Vous Faut.
          </Heading>
          <p className="mb-6 max-w-3xl border-l-2 border-gold pl-4 text-base leading-relaxed text-foreground">
            Oui — les non-résidents éligibles peuvent généralement détenir et diriger une société
            britannique sans dirigeant résident au Royaume-Uni ni déplacement sur place.
          </p>
          <dl className="grid gap-x-8 sm:grid-cols-2">
            {REQUIREMENTS.map(([title, body]) => (
              <div key={title} className="border-t border-border py-4">
                <dt className="flex gap-2 text-sm font-semibold text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{title}</span>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 border-t border-border pt-4">
            <h3 className="font-sans text-xs font-semibold text-foreground">
              Pour les activités internationales
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SECTORS.map(([Icon, title]) => (
                <li
                  key={title}
                  className="flex min-w-0 items-start gap-2 text-xs text-muted-foreground"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Des justificatifs complémentaires peuvent être demandés selon le pays, l’activité ou la
            structure de détention. La création d’une société n’accorde ni visa ni résidence au
            Royaume-Uni. Basé au Royaume-Uni ? Consultez nos services de{" "}
            <Link
              href="/fr"
              className="underline underline-offset-4 hover:text-gold transition-colors"
            >
              création et d’immatriculation de société au Royaume-Uni
            </Link>
            .
          </p>
        </Section>

        {/* ── PROCESS ── */}
        <Section id="process" className="section-parchment">
          <Heading label="Comment ça marche">Quatre Étapes Vers l’Immatriculation</Heading>
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="relative flex gap-4 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 bg-background font-display text-lg font-bold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mb-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            L’immatriculation prend généralement 1 à 2 jours ouvrables après la finalisation du KYC,
            sous réserve d’un dossier complet et du délai de traitement de Companies House. Ce délai
            n’est pas garanti.
          </p>
          <a href="#pricing" className="btn-gold inline-flex items-center justify-center gap-2">
            <span>Démarrer l’Immatriculation de Votre Société UK</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </Section>

        {/* ── UK ADDRESS SERVICES ── */}
        <Section id="addresses">
          <Heading
            label="Services d’adresses au Royaume-Uni"
            intro="Trois services d’adresse distincts, répondant chacun à un usage précis."
          >
            Trois Adresses. Trois Usages.
          </Heading>
          <div className="grid gap-4 md:grid-cols-3">
            {ADDRESSES.map((item, i) => (
              <article key={item.title} className="border border-border p-5">
                <p className="text-xs font-semibold text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Une adresse commerciale virtuelle ne remplace pas un siège social approprié et ne répond
            pas nécessairement aux exigences de présence physique de tous les prestataires. Les
            périodes d’inclusion et tarifs de renouvellement sont détaillés avec les forfaits
            ci-dessus.
          </p>
          <a
            href="#pricing"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            <span>Comparer les options d’adresses dans nos forfaits</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Section>

        {/* ── BANKING ASSISTANCE ── */}
        <Section id="banking" className="section-parchment">
          <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <Heading label="Assistance bancaire">
                Accompagnement Bancaire Professionnel UK pour Non-Résidents
              </Heading>
              <p className="text-base font-medium leading-relaxed text-foreground">
                La création de société et l’ouverture d’un compte professionnel sont deux processus
                distincts — nous vous aidons à préparer les deux.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                L’immatriculation d’une société Limited au Royaume-Uni n’ouvre pas automatiquement
                droit à un compte bancaire professionnel britannique. Les banques et établissements
                de paiement évaluent notamment la structure de détention, les activités, les pays
                d’opération et les pièces justificatives. Chez Seven Oak Prestige, nous aidons les
                fondateurs internationaux à préparer un dossier clair et cohérent avant de solliciter
                des établissements adaptés.
              </p>
            </div>
            <img
              src="/assets/banking-readiness-1280.webp"
              srcSet="/assets/banking-readiness-640.webp 640w, /assets/banking-readiness-1280.webp 1280w"
              sizes="(max-width: 1023px) 100vw, 32vw"
              alt="Documents juridiques et financiers organisés pour la préparation d'un dossier bancaire"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] max-h-64 w-full border border-border object-cover"
            />
          </div>

          <dl className="mt-6 grid gap-4 md:grid-cols-3">
            {BANKING.map(([title, body], i) => (
              <div key={title} className="border border-border bg-background p-5">
                <p className="text-xs font-semibold text-gold">0{i + 1}</p>
                <dt className="mt-2 text-sm font-semibold text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>

          <p className="my-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Important : l’approbation par une banque ou un prestataire de paiement n’est jamais
            garantie. Chaque établissement applique ses propres critères d’éligibilité, de conformité
            et de risque.
          </p>
          <a
            href={WHATSAPP_BANKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center justify-center gap-2"
          >
            <span>Demander des Informations sur l’Assistance Bancaire</span>
          </a>
        </Section>

        {/* ── IDENTITY VERIFICATION ── */}
        <Section id="identity">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Heading label="Assistance administrative">
                Vérification d’Identité Companies House
              </Heading>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nous vous aidons à préparer vos informations et à suivre le parcours autorisé afin
                d’obtenir votre code personnel Companies House (Personal Code). Cette démarche est
                distincte de l’onboarding/KYC Seven Oak.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                La vérification s’effectue via une voie officielle autorisée. Seven Oak fournit une
                assistance administrative et non une vérification ACSP.{" "}
                <a
                  href={GOVUK_VERIFY}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Guide officiel GOV.UK
                </a>
                .
              </p>
            </div>
            <div className="min-w-0 border-l-2 border-gold pl-5">
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                Le forfait Elite inclut l’assistance administrative pour un dirigeant. L’assistance
                individuelle est proposée à 74 £ ; les personnes supplémentaires font l’objet d’un
                devis séparé.
              </p>
              <Link
                href="/fr/services/companies-house-identity-verification"
                className="btn-ghost inline-flex w-full items-center justify-center gap-2"
              >
                <span>Assistance Code Personnel — 74 £</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Section>

        {/* ── ONGOING SUPPORT ── */}
        <Section id="ongoing-support" className="section-parchment">
          <Heading
            label="Après l’immatriculation"
            intro="La comptabilité, la fiscalité et la gestion courante sont définies et tarifées séparément — elles ne sont pas automatiquement incluses dans la création."
          >
            Maintenez Votre Société en Parfaite Conformité.
          </Heading>
          <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {ONGOING.map(([title, body]) => (
              <div key={title} className="border-t border-border py-4">
                <dt className="text-sm font-semibold text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Les sociétés britanniques ont des obligations déclaratives et fiscales continues, y
            compris lorsqu’elles sont inactives (dormant). Les fondateurs résidant à l’étranger
            doivent également vérifier leurs obligations fiscales hors du Royaume-Uni.
          </p>
          <Link
            href="/fr/services/uk-accounting-non-residents"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            <span>Découvrir la Comptabilité et la Conformité</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Section>

        {/* ── FAQs ── */}
        <Section id="faq">
          <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
            <Heading label="Questions fréquentes">Vos Questions, Nos Réponses</Heading>
            <div className="min-w-0 border-t border-border">
              {FAQS.map((faq, i) => (
                <details key={faq.q} open={i === 0} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-sm font-semibold leading-relaxed text-foreground hover:text-gold transition-colors">
                    <span>{faq.q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <Section id="final-cta" className="section-dark">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Votre prochaine étape</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Prêt à Créer Votre Société au Royaume-Uni ?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Choisissez votre forfait ou échangez avec notre équipe sur la formule la plus adaptée
                à votre projet.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#pricing" className="btn-gold inline-flex items-center justify-center gap-2">
                <span>Comparer les Forfaits</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center justify-center gap-2"
              >
                <span>Parler à un Conseiller</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
