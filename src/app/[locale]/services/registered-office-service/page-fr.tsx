"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CreditCard,
  FileText,
  Globe2,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/28E14fgRi7vDfIF6Bmfw403";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Demande de service d'adresse de siège social (£59/year)";
const EMAIL_BODY = `Bonjour Seven Oak Prestige,

Je souhaite me renseigner sur le service d'adresse de siège social (Registered Office Address — £59/an).

Statut de la société (nouvelle création ou UK Ltd existante) :
Pays de résidence :
Services d'adresse souhaités :
Traitement du courrier souhaité (numérisation, réexpédition ou options à confirmer) :

Merci de confirmer l'adresse disponible, les conditions de service, les vérifications d'intégration et le coût annuel total.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Bonjour Seven Oak Prestige, je souhaite me renseigner sur l'adresse de siège social au Royaume-Uni (£59/an). Merci de me confirmer l'adresse disponible, le courrier couvert et les étapes d'intégration."
)}`;

const DEFINITION =
  "Le siège social (Registered Office) est l’adresse officielle de votre société britannique inscrite au registre public de Companies House. C’est là que sont envoyés les avis statutaires et les courriers officiels destinés à la société, et il peut être distinct de votre domicile ou de votre lieu de travail quotidien lorsqu’il est autorisé.";

const RECEIVES = [
  "Utilisation autorisée d’une adresse de siège social au Royaume-Uni après validation de l’intégration",
  "Courrier officiel de la société provenant de Companies House, du HMRC et des autres organismes statutaires convenus",
  "Notification, numérisation ou réexpédition du courrier uniquement selon les modalités confirmées dans vos conditions de service",
  "Séparation claire d’une adresse commerciale, d’un espace de travail physique ou d’un service courrier général",
];

const EXCLUDES = [
  "Autorisation d’utiliser une adresse avant l’intégration et la confirmation écrite",
  "Courriers courants des clients, fournisseurs, cartes bancaires ou livraisons de colis sauf accord préalable",
  "Suppression automatique des adresses personnelles figurant dans d’anciens dépôts Companies House",
  "Espace de bureau physique, accueil sur place, résidence fiscale au Royaume-Uni ou approbation bancaire",
];

const PRACTICAL_CHECKS = [
  {
    title: "Respecter la juridiction britannique de la société",
    text: "Une société immatriculée en Angleterre et au Pays de Galles doit disposer d’une adresse en Angleterre ou au Pays de Galles ; les sociétés écossaises et nord-irlandaises doivent correspondre à leur propre juridiction.",
  },
  {
    title: "Répondre à l’exigence d’« adresse appropriée »",
    text: "Selon les règles actuelles de Companies House, les documents envoyés au siège social doivent pouvoir être portés à l’attention d’une personne agissant pour le compte de la société et donner lieu à un accusé de réception.",
  },
  {
    title: "Attendre l’autorisation écrite avant tout dépôt",
    text: "N’indiquez aucune adresse sur une demande d’immatriculation ou un formulaire AD01 tant que les vérifications d’identité, le paiement et l’autorisation d’adresse ne sont pas finalisés.",
  },
  {
    title: "Anticiper les renouvellements et changements d’adresse",
    text: "Un changement de siège social ne prend effet qu’une fois enregistré par Companies House, et non à la date de début ou de fin d’un contrat privé.",
  },
];

const ADDRESS_COMPARISON = [
  {
    key: "registered",
    name: "Adresse de Siège Social (Registered Office)",
    href: "/fr/services/registered-office-service",
    price: "£59/an",
    purpose: "L’adresse statutaire officielle de la société",
    publicRecord: "Oui — affichée pour la société",
    post: "Courrier officiel de la société couvert par le service",
    notFor: "Courrier commercial général, colis ou adresse de dirigeant sauf accord",
  },
  {
    key: "virtual",
    name: "Adresse Commerciale Virtuelle",
    href: "/fr/services/virtual-business-address",
    price: "£150/an",
    purpose: "Adresse de correspondance commerciale quotidienne",
    publicRecord: "Optionnel — utilisée là où vous la publiez",
    post: "Courriers commerciaux convenus de clients et partenaires",
    notFor: "Siège social de la société ou dépôt dirigeant sauf accord",
  },
  {
    key: "director",
    name: "Adresse de Service du Dirigeant",
    href: "/fr/services/director-service-address",
    price: "£35/an",
    purpose: "L’adresse publique de correspondance du dirigeant",
    publicRecord: "Oui — affichée pour le dirigeant / mandataire",
    post: "Courrier officiel adressé au dirigeant dans le cadre de son mandat",
    notFor: "Courrier général de la société ou masquage du domicile auprès de Companies House",
  },
];

const FAQS = [
  {
    q: "Qu’est-ce qu’une adresse de siège social (Registered Office) au Royaume-Uni ?",
    a: "Il s’agit de l’adresse officielle d’une société britannique (UK Limited Company) inscrite auprès de Companies House. Le courrier statutaire de Companies House, du HMRC et d’autres organismes officiels y est envoyé, et l’adresse figure sur le registre public.",
  },
  {
    q: "Un non-résident peut-il utiliser un service de siège social au Royaume-Uni ?",
    a: "Oui. Un fondateur non-résident ou un dirigeant résidant à l’étranger peut diriger une société britannique tout en utilisant une adresse de siège social autorisée située dans la même juridiction britannique que l’immatriculation de la société.",
  },
  {
    q: "Qu’entend Companies House par « adresse appropriée » (appropriate address) ?",
    a: "Companies House exige un siège social où tout document adressé à la société est susceptible d’être porté à l’attention d’une personne agissant pour son compte, et où la remise peut être attestée par un accusé de réception.",
  },
  {
    q: "Puis-je utiliser une boîte postale (PO Box) comme siège social au Royaume-Uni ?",
    a: "Non. Les règles de Companies House n’autorisent pas une boîte postale (PO Box) comme adresse de siège social. Vous devez utiliser une adresse physique appropriée au Royaume-Uni répondant aux exigences légales.",
  },
  {
    q: "Quel courrier est couvert par le service de siège social à £59/an ?",
    a: "Un service de siège social est conçu pour la correspondance officielle de la société, telle que les lettres de Companies House et du HMRC. Confirmez les règles exactes de numérisation, de réexpédition, d’affranchissement et d’expéditeurs avant de commander ; le courrier commercial courant nécessite généralement une adresse commerciale virtuelle.",
  },
  {
    q: "Le siège social est-il identique à une adresse commerciale virtuelle ?",
    a: "Non. Le siège social est l’adresse légale de la société auprès de Companies House. Une adresse commerciale virtuelle est destinée à la correspondance professionnelle quotidienne provenant de clients, fournisseurs ou partenaires selon les conditions convenues.",
  },
  {
    q: "Le siège social protège-t-il l’adresse personnelle du dirigeant ?",
    a: "Il évite d’utiliser un domicile personnel comme siège social de la société, mais les dirigeants ont également besoin d’une adresse de service (Director Service Address) pour leur fiche publique de mandataire. Les dirigeants doivent toujours communiquer leur adresse résidentielle à Companies House, qui reste confidentielle dans les cas standards.",
  },
  {
    q: "Comment modifier l’adresse du siège social de ma société ?",
    a: "Une fois la nouvelle adresse autorisée, la société dépose un changement de siège social auprès de Companies House (formulaire AD01 ou équivalent en ligne). Le changement ne prend effet qu’une fois enregistré par Companies House.",
  },
  {
    q: "Quels documents sont requis avant de pouvoir utiliser l’adresse ?",
    a: "Les prestataires d’adresses doivent effectuer les vérifications de vigilance client (KYC/AML) applicables. Nous confirmons les pièces d’identité, justificatifs de domicile et informations sur la société requis avant de délivrer l’autorisation d’utiliser l’adresse.",
  },
  {
    q: "Le siège social est-il inclus dans les forfaits de création de société ?",
    a: "Oui, pendant 12 mois dans les forfaits de création Prestige (£399) et Elite (£699), sous réserve des vérifications d’intégration et du périmètre de gestion du courrier convenu. Il peut également être souscrit séparément à £59/an.",
  },
];

function ServiceOrderActionsFr() {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center justify-center gap-2.5"
        >
          <CreditCard className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Commander le Siège Social — £59/an</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Demander sur WhatsApp</span>
        </a>
        <a
          href={EMAIL_HREF}
          className="btn-ghost inline-flex items-center justify-center gap-2"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Contacter par e-mail</span>
        </a>
      </div>
      <div className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
        <p>
          Le paiement lance l’intégration, sous réserve d’acceptation du dossier et des
          vérifications d’identité / AML requises. Il n’autorise pas l’utilisation immédiate de
          l’adresse et ne garantit pas une approbation du HMRC.
        </p>
        <p>
          Abonnement annuel, facturé chaque année jusqu’à résiliation. N’utilisez l’adresse
          qu’après autorisation écrite. Choisissez la devise GBP pour bénéficier du tarif affiché.
        </p>
        <p>
          Consultez nos{" "}
          <Link href="/fr/terms" className="underline hover:text-gold transition-colors">
            conditions générales
          </Link>{" "}
          et notre{" "}
          <Link href="/fr/refund" className="underline hover:text-gold transition-colors">
            politique de remboursement
          </Link>{" "}
          avant le paiement.
        </p>
      </div>
    </div>
  );
}

export default function RegisteredOfficeServicePageFr() {
  const [setupMode, setSetupMode] = useState<"existing" | "new">("existing");

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
            name: "Service d'Adresse de Siège Social au Royaume-Uni",
            item: "https://www.sevenoakprestige.com/fr/services/registered-office-service",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Service d'Adresse de Siège Social au Royaume-Uni (UK Registered Office)",
        description:
          "Besoin d'une adresse de siège social au Royaume-Uni ? Utilisez une adresse officielle autorisée pour le courrier de Companies House et du HMRC dès 59 £/an, ou incluse dans les forfaits Prestige et Elite.",
        url: "https://www.sevenoakprestige.com/fr/services/registered-office-service",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "59",
          priceCurrency: "GBP",
          description:
            "Service autonome à 59 £/an, sous réserve d'intégration, de vérifications d'éligibilité et des conditions convenues de gestion du courrier.",
        },
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
        <section className="section-dark border-b border-border/30 px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:pt-40">
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Fil d'Ariane"
              className="mb-7 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/fr" className="hover:text-foreground transition-colors">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground/90">
                Adresse de Siège Social
              </span>
            </nav>

            <p className="eyebrow">Seven Oak Prestige · Services d’adresses d’entreprise</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
              Service d’Adresse de Siège Social au Royaume-Uni pour Sociétés Limited
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
              Une adresse britannique dédiée pour le courrier officiel de votre société provenant de
              Companies House et du HMRC. Disponible à £59/an, ou incluse pendant 12 mois avec les
              forfaits de création Prestige et Elite.
            </p>
            <p className="mt-6">
              <span className="font-display text-4xl font-bold text-gold">£59</span>
              <span className="ml-2 text-sm text-muted-foreground">par an</span>
            </p>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Adresse et modalités de traitement du courrier confirmées avant paiement.
            </p>

            <div className="mt-7">
              <ServiceOrderActionsFr />
            </div>

            <div className="mt-10 grid gap-5 border-t border-border/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="text-sm text-muted-foreground">
                Une société.
                <br />
                <span className="font-display text-2xl font-semibold text-foreground">
                  Une adresse officielle distincte.
                </span>
              </p>
              <div
                className="inline-flex flex-wrap items-center gap-3 border border-border/30 bg-card/40 px-4 py-3.5 text-sm text-foreground"
                role="img"
                aria-label="Les courriers officiels de la société sont dirigés vers un siège social autorisé ; les modalités de remise sont convenues avant l'achat."
              >
                <FileText className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Courrier officiel de la société</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <Building2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Siège social (Registered Office)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPIC NAVIGATION BAR ── */}
        <nav
          aria-label="Sur cette page"
          className="border-b border-border bg-card/60 px-4 py-3.5 sm:px-6"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-semibold">
            <a href="#service" className="text-foreground hover:text-gold transition-colors">
              Le service
            </a>
            <a href="#official-mail" className="text-foreground hover:text-gold transition-colors">
              Courrier officiel
            </a>
            <a href="#setup" className="text-foreground hover:text-gold transition-colors">
              Société nouvelle ou existante
            </a>
            <a href="#compare" className="text-foreground hover:text-gold transition-colors">
              Comparer les adresses
            </a>
            <a href="#faqs" className="text-foreground hover:text-gold transition-colors">
              FAQ
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center gap-1.5 text-gold hover:underline sm:ml-auto"
            >
              <span>Commencer — £59/an</span>
              <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>

        {/* ── SECTION 1: WHAT IS A REGISTERED OFFICE ADDRESS? ── */}
        <section id="service" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">L’adresse dont votre société a besoin</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Qu’est-ce qu’une adresse de siège social ?
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{DEFINITION}</p>

            <div className="mt-9 grid gap-7 border-t border-border pt-7 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Séparez domicile et société",
                  text: "Utilisez une alternative autorisée à votre domicile comme siège social actuel de la société. L’historique des registres publics relève d’une procédure distincte.",
                },
                {
                  icon: Mail,
                  title: "Organisez la réception du courrier officiel",
                  text: "Convenez de la manière dont les lettres officielles couvertes vous parviendront. Vous restez responsable de la lecture des avis et du respect des échéances.",
                },
                {
                  icon: Globe2,
                  title: "Dirigez votre société depuis l’étranger",
                  text: "Les fondateurs non-résidents peuvent détenir une UK Ltd tout en vivant hors du Royaume-Uni. La société doit toutefois disposer d’une adresse appropriée dans sa juridiction britannique.",
                },
              ].map(({ icon: Icon, title, text }, idx) => (
                <article
                  key={title}
                  className={idx > 0 ? "md:border-l md:border-border md:pl-6" : ""}
                >
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3.5 border-l-2 border-gold bg-card/50 p-4 sm:p-5">
              <Building2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-foreground">
                <strong>Vous recherchez une adresse de siège social à Londres ?</strong>{" "}
                Demandez-nous de confirmer l’emplacement disponible et son adéquation avec votre
                société. Notre adresse de contact ne vaut pas autorisation d’utilisation.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ILLUSTRATIVE PHOTO ── */}
        <section className="px-4 py-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-registered-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-registered-640.webp"
                alt="Courriers officiels d'entreprise scellés dans un bac en bois sur un bureau calme"
                width={1280}
                height={853}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                Une adresse distincte pour le courrier officiel de votre société.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 3: SCOPE (WHAT TO AGREE) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Sachez exactement ce que vous souscrivez</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Votre service de siège social : ce qu’il faut convenir
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{DEFINITION}</p>

            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              <div className="border border-border bg-card/40 p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">Inclus</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                  {RECEIVES.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border bg-background p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Non inclus
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {EXCLUDES.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Minus
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: OFFICIAL MAIL LEDGER ── */}
        <section
          id="official-mail"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Comprenez ce qui arrive à cette adresse</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Le courrier officiel de la société. Pas n’importe quel envoi.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Un service de siège social et une adresse de courrier commercial général remplissent
              deux rôles différents. Confirmez les expéditeurs couverts et les modalités de remise
              avant de commander.
            </p>

            <div className="mt-8 grid border border-border bg-background lg:grid-cols-3">
              <article className="p-6 sm:p-7">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Correspondance officielle
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Lettres de Companies House, du HMRC et avis statutaires
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  C’est la vocation principale du siège social. Demandez quelles lettres, quels
                  expéditeurs officiels et quels actes juridiques sont couverts par votre contrat.
                </p>
                <p className="mt-5 text-xs font-semibold text-gold">
                  Périmètre du courrier officiel confirmé par écrit
                </p>
              </article>

              <article className="border-t border-border p-6 sm:p-7 lg:border-t-0 lg:border-l">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Correspondance commerciale
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Courriers de clients, fournisseurs et partenaires
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ces envois ne sont pas inclus automatiquement. Si vous avez besoin d’une adresse
                  pour votre courrier commercial quotidien, envisagez un service de correspondance
                  dédié.
                </p>
                <Link
                  href="/fr/services/virtual-business-address"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Adresse commerciale virtuelle</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>

              <article className="border-t border-border p-6 sm:p-7 lg:border-t-0 lg:border-l">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Livraisons et accès physique
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Colis, retours marchandises et visites sur place
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  N’utilisez pas l’adresse pour du stock, des retours clients ou des transporteurs
                  sans accord préalable. Un service de siège social ne fournit ni bureau, ni salle
                  de réunion, ni accueil physique.
                </p>
                <p className="mt-5 text-xs font-semibold text-gold">Autorisation distincte requise</p>
              </article>
            </div>

            <div className="mt-6 grid gap-6 border border-border bg-background p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Comment recevrai-je mes courriers ?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Une numérisation (scan) est une copie numérique. La réexpédition consiste à vous
                  envoyer le courrier papier original. Vérifiez les options proposées, la gestion
                  des originaux et les frais d’envoi.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-foreground">
                {[
                  "Mode de notification et délais de traitement",
                  "Frais éventuels de numérisation, réexpédition et affranchissement",
                  "Envois internationaux et demandes de documents originaux",
                  "Traitement du courrier à la fin du service",
                ].map((text) => (
                  <li key={text} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: INTERACTIVE SETUP TABS (NEW OR EXISTING COMPANY) ── */}
        <section id="setup" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Choisissez le bon point de départ</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Vous créez une société ou changez son adresse actuelle ?
            </h2>

            <div className="mt-7">
              <div
                role="tablist"
                aria-label="Statut de la société"
                className="inline-flex flex-wrap border border-border bg-card/50 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={setupMode === "existing"}
                  onClick={() => setSetupMode("existing")}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    setupMode === "existing"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Société existante
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={setupMode === "new"}
                  onClick={() => setSetupMode("new")}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    setupMode === "new"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Nouvelle société
                </button>
              </div>

              {setupMode === "existing" ? (
                <div
                  role="tabpanel"
                  className="mt-5 grid gap-7 border border-border bg-card/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Transférez votre siège social avec une transition maîtrisée
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Indiquez votre numéro de société (Company Number), sa juridiction
                      d’immatriculation et la date de fin de votre service actuel. Convenez de la
                      nouvelle adresse et du dépôt avant de résilier votre ancien contrat.
                    </p>
                    <a
                      href={EMAIL_HREF}
                      className="btn-ghost mt-6 inline-flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Discuter d’un changement d’adresse</span>
                    </a>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "Confirmez la nouvelle adresse et les conditions du service.",
                      "Complétez l’intégration KYC et obtenez l’autorisation d’utilisation.",
                      "Effectuez la modification auprès de Companies House et vérifiez le courrier en attente.",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="grid grid-cols-[2rem_1fr] items-center gap-3 border border-border bg-background p-4 text-sm"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center border border-gold/40 font-display font-bold text-gold">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div
                  role="tabpanel"
                  className="mt-5 grid gap-7 border border-border bg-card/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Vérifiez d’abord votre forfait de création
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Les forfaits de création Prestige et Elite incluent l’adresse de siège social
                      et l’adresse de service du dirigeant pendant 12 mois. Le traitement du
                      courrier dépend du périmètre convenu. Évitez de payer deux fois pour le même
                      usage.
                    </p>
                    <Link
                      href="/fr/services/uk-company-formation-for-non-residents"
                      className="btn-ghost mt-6 inline-flex items-center gap-2"
                    >
                      <span>Voir les forfaits de création</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "Choisissez le forfait de création adapté à vos besoins.",
                      "Confirmez l’adresse proposée et ses utilisations autorisées.",
                      "Finalisez l’intégration avant le dépôt de l’immatriculation.",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="grid grid-cols-[2rem_1fr] items-center gap-3 border border-border bg-background p-4 text-sm"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center border border-gold/40 font-display font-bold text-gold">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: THE STATUTORY ESSENTIALS (4 CHECKS + GOV.UK LINKS) ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Les essentiels statutaires</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Quatre vérifications clés pour votre siège social au Royaume-Uni
            </h2>

            <div className="mt-8 grid border border-border bg-card/30 md:grid-cols-2">
              {PRACTICAL_CHECKS.map((item, index) => (
                <article
                  key={item.title}
                  className="border-b border-border p-6 sm:p-7 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0"
                >
                  <span className="font-display text-2xl font-bold text-gold">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Sources officielles (GOV.UK) :</span>
              <a
                href="https://www.gov.uk/guidance/your-companys-registered-office-address"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Règles d’adresse Companies House ↗
              </a>
              <a
                href="https://www.gov.uk/change-your-registered-office-address"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Changer un siège social ↗
              </a>
              <a
                href="https://www.gov.uk/guidance/your-personal-information-on-the-public-record-at-companies-house"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Informations personnelles sur le registre ↗
              </a>
              <a
                href="https://www.gov.uk/guidance/removing-your-home-address-from-the-companies-house-register"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Retirer son adresse personnelle ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: COMPARISON TABLE ── */}
        <section
          id="compare"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Trois rôles. Aucune confusion.</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              De quelle adresse avez-vous réellement besoin ?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Chaque adresse répond à un besoin distinct. Il est fréquent de les combiner, à
              condition que chaque usage soit expressément autorisé.
            </p>

            <div className="mt-8 overflow-x-auto border border-border bg-background">
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Tarif
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Fonction principale
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Registre public
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Courrier type
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Ne remplace pas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {ADDRESS_COMPARISON.map((row) => {
                    const isActive = row.key === "registered";
                    return (
                      <tr
                        key={row.key}
                        className={isActive ? "bg-gold/10" : "hover:bg-card/40 transition-colors"}
                      >
                        <th scope="row" className="p-4 align-top font-semibold text-foreground">
                          <Link href={row.href} className="hover:text-gold hover:underline">
                            {row.name}
                          </Link>
                          {isActive && (
                            <span className="mt-1 block text-[0.7rem] font-bold uppercase tracking-wider text-gold">
                              Cette page
                            </span>
                          )}
                        </th>
                        <td className="p-4 align-top font-display text-lg font-bold text-gold">
                          {row.price}
                        </td>
                        <td className="p-4 align-top text-foreground">{row.purpose}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.publicRecord}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.post}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.notFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FAQs ── */}
        <section id="faqs" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Des réponses claires avant de vous engager</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Questions fréquentes sur l’adresse de siège social
            </h2>

            <div className="mt-8 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-base font-semibold text-foreground hover:text-gold transition-colors">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: FORMATION, RELATED SERVICES & INTERNAL BLOG LINKS ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">Gardez vos services cohérents</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Vous créez une société ou souscrivez une adresse séparément ?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Les forfaits de création Prestige (£399) et Elite (£699) incluent l’adresse de siège
                social et l’adresse de service du dirigeant pendant les 12 premiers mois, sous
                réserve d’intégration et du périmètre de courrier convenu. Le forfait Starter (£199)
                se concentre sur l’immatriculation — confirmez votre solution d’adresse avant le
                dépôt.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/fr/services/uk-company-formation-for-non-residents"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  <span>Comparer les forfaits de création</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Demander quelle formule choisir</span>
                </a>
              </div>
            </div>

            <div className="border border-border bg-card/40 p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Services associés et articles de blog
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link
                    href="/fr/services/virtual-business-address"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>Adresse Commerciale Virtuelle UK (£150/an)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/services/director-service-address"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>Adresse de Service du Dirigeant UK (£35/an)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/services/uk-company-formation-for-non-residents"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>Création de Société UK pour Non-Résidents</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/services/companies-house-identity-verification"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>Vérification d’Identité Companies House</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li className="border-t border-border pt-3">
                  <Link
                    href="/blog/adresse-uk-ltd-france"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog : Adresse UK pour société anglaise depuis la France (Guide 2026)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/registered-office-vs-director-service-address-uk"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog : Registered Office vs Director Service Address UK (Guide 2026)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/uk-company-formation-without-uk-address"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog : Créer une UK Ltd sans adresse au Royaume-Uni (Guide 2026)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: ENQUIRY / ORDER CTA ── */}
        <section
          id="enquire"
          className="section-dark scroll-mt-28 border-t border-border/30 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Confirmez l’adéquation avant de payer</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Mettez en place le bon siège social pour votre société
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Indiquez-nous si vous créez une nouvelle société britannique ou si vous mettez à
                jour une société existante. Nous confirmerons l’adresse disponible, le courrier
                couvert, les options de réexpédition et les vérifications requises avant toute
                utilisation.
              </p>
            </div>
            <div>
              <ServiceOrderActionsFr />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                N’envoyez pas de passeports ni de justificatifs de domicile par e-mail ou WhatsApp
                avant que nous ayons confirmé la procédure sécurisée de vérification.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

