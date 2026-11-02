"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CreditCard,
  LockKeyhole,
  Mail,
  MessageCircle,
  Plus,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/7sYfZ9asU9DL1RP5xifw404";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Demande de commande d'Adresse de Service du Dirigeant — £35/an";
const MESSAGE_TEXT =
  "Bonjour Seven Oak Prestige, je souhaite commander votre service d'adresse de service du dirigeant (Director Service Address — £35/an). Merci de me confirmer l'adresse, les usages autorisés, le traitement du courrier et les conditions d'intégration avant paiement. Je n'enverrai pas de pièces d'identité dans ce premier message.";

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(MESSAGE_TEXT)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(MESSAGE_TEXT)}`;

const DEFINITION =
  "Une adresse de service du dirigeant (Director Service Address) est l’adresse publique de correspondance du dirigeant inscrite au registre de la société. Elle modifie l’endroit où le courrier adressé au dirigeant est acheminé ; elle ne nomme pas un dirigeant mandataire (nominee) et ne dissimule ni la propriété ni le contrôle de la société.";

const PRACTICAL_CHECKS = [
  {
    title: "Correspondance publique, domicile privé",
    text: "Companies House publie l’adresse de service d’un dirigeant. L’adresse résidentielle habituelle est communiquée séparément et ne figure normalement pas sur le registre public, mais elle peut être transmise à certaines autorités publiques et agences d’évaluation du crédit selon les règles applicables.",
  },
  {
    title: "La confidentialité a des limites légales",
    text: "Ce service ne masque ni votre nom, ni vos mandats, ni les déclarations obligatoires de propriété et de contrôle (PSC). Une adresse personnelle déjà publiée dans d’anciens dépôts n’est pas effacée automatiquement.",
  },
  {
    title: "Des registres distincts nécessitent une attention distincte",
    text: "Modifier l’adresse de service du dirigeant ne modifie pas automatiquement le siège social de la société ni l’adresse de correspondance d’un bénéficiaire effectif (PSC). Vérifiez chaque rôle et chaque dépôt où apparaît votre domicile.",
  },
  {
    title: "Une adresse n’est pas une nomination de dirigeant",
    text: "Une adresse de service est un dispositif de correspondance. Vous restez le dirigeant de la société avec vos propres responsabilités légales. Cela n’a aucun rapport avec la nomination d’un nominee director et ne modifie pas l’éligibilité bancaire.",
  },
];

const RECEIVES = [
  {
    title: "Usage autorisé pour la correspondance du dirigeant",
    text: "Confirmez le nom du dirigeant, la ou les sociétés concernées et le périmètre autorisé avant d’utiliser l’adresse. Ne présumez pas qu’un seul abonnement couvre tous vos mandats ou une autre personne.",
  },
  {
    title: "Traitement défini du courrier couvert",
    text: "Convenez des courriers de dirigeant couverts, des modalités de notification et de la manière dont vous recevez leur contenu. La numérisation, la réexpédition, les frais supplémentaires et la gestion des actes juridiques doivent être expressément confirmés.",
  },
  {
    title: "Un plan concret de mise à jour d’adresse",
    text: "Pour un mandat existant, convenez de qui notifiera Companies House et de la date d’entrée en vigueur. Pour une nouvelle nomination, indiquez séparément l’adresse de service autorisée et votre véritable adresse résidentielle.",
  },
];

const EXCLUDES = [
  "Un dirigeant mandataire (nominee director), un remplaçant ou un transfert de responsabilités",
  "L’anonymat ou la suppression des obligations de déclaration des PSC",
  "La suppression automatique des adresses personnelles figurant dans d’anciens dépôts",
  "L’utilisation comme siège social de la société ou pour le courrier commercial général sauf accord",
];

const USE_CASES = [
  {
    title: "Dirigeants travaillant depuis leur domicile",
    text: "Évitez d’utiliser votre domicile personnel comme adresse publique actuelle de correspondance de dirigeant. Vérifiez également s’il figure comme siège social, adresse PSC ou dans des documents antérieurs.",
  },
  {
    title: "Dirigeants non-résidents",
    text: "L’adresse de service d’un dirigeant peut être située au Royaume-Uni ou à l’étranger selon les règles de Companies House. Si vous préférez une adresse de correspondance au Royaume-Uni, vérifiez les modalités de réception de votre courrier.",
  },
  {
    title: "Nouvelles nominations ou mandats multiples",
    text: "Configurez les bonnes coordonnées dès le départ. Si vous détenez plusieurs mandats de dirigeant, confirmez la couverture pour chaque société plutôt que de supposer qu’un seul contrat les couvre toutes.",
  },
];

const STEPS = [
  {
    title: "Identifiez le mandat concerné",
    text: "Indiquez si vous êtes un dirigeant nouvellement nommé ou déjà en fonction et précisez le numéro de société le cas échéant. Décrivez vos besoins sans envoyer de documents sensibles dans votre premier message.",
  },
  {
    title: "Confirmez la couverture et les conditions",
    text: "Convenez des personnes nommées, des sociétés couvertes, de l’adresse disponible, du périmètre du courrier, du tarif annuel et des conditions de renouvellement.",
  },
  {
    title: "Autorisez l’usage et mettez à jour le registre",
    text: "Complétez l’intégration via le canal sécurisé approuvé. Une fois accepté, utilisez l’adresse de service convenue pour le dépôt correspondant et renseignez séparément votre véritable adresse résidentielle.",
  },
  {
    title: "Maintenez l’accès à votre correspondance",
    text: "Gardez vos coordonnées à jour et répondez aux avis officiels reçus. En cas de fin de contrat, mettez en place une adresse de remplacement et mettez à jour chaque registre auprès de Companies House.",
  },
];

const FAQS = [
  {
    q: "Qu’est-ce qu’une adresse de service de dirigeant (Director Service Address) ?",
    a: "Une adresse de service de dirigeant est l’adresse publique de correspondance affichée pour un dirigeant (director) sur le registre de Companies House. Il n’est pas nécessaire que ce soit votre domicile, mais vous devez avoir l’autorisation de l’utiliser. Cette offre concerne le mandat de dirigeant ; les autorisations pour un secrétaire (secretary) ou un bénéficiaire effectif (PSC) doivent être confirmées séparément.",
  },
  {
    q: "Dois-je quand même communiquer mon adresse personnelle à Companies House ?",
    a: "Oui. Les dirigeants doivent fournir séparément leur adresse résidentielle habituelle (usual residential address). Elle n’est normalement pas affichée publiquement, sous réserve des exceptions et divulgations légales autorisées. Vous devez fournir votre véritable adresse de domicile et non la remplacer par une adresse virtuelle.",
  },
  {
    q: "S’agit-il d’une « adresse de confidentialité » pour dirigeant ?",
    a: "Cette expression désigne généralement l’utilisation d’une adresse publique de correspondance alternative à votre domicile. Ce n’est toutefois pas une promesse d’anonymat complet : votre nom et vos autres informations légales restent publics, et les dépôts historiques peuvent toujours mentionner une adresse utilisée auparavant.",
  },
  {
    q: "Un dirigeant résidant à l’étranger peut-il utiliser ce service ?",
    a: "Oui, sous réserve de nos vérifications d’intégration et d’acceptation du dossier. Companies House autorise une adresse de service de dirigeant située au Royaume-Uni ou à l’étranger, à condition qu’il s’agisse d’une adresse de correspondance fonctionnelle. L’adresse disponible et le mode de remise des courriers couverts sont confirmés par écrit.",
  },
  {
    q: "Le siège social et l’adresse de service du dirigeant peuvent-ils être identiques ?",
    a: "Ils peuvent partager le même emplacement physique avec l’autorisation requise, mais ce sont deux usages juridiques distincts. Confirmez les deux autorisations et les deux périmètres de courrier par écrit. L’achat de l’un ne vaut pas achat automatique de l’autre.",
  },
  {
    q: "Un seul abonnement couvre-t-il tous les dirigeants ou toutes mes sociétés ?",
    a: "L’offre annuelle à £35/an s’entend pour un dirigeant. Elle ne couvre pas automatiquement d’autres dirigeants ni l’ensemble de vos mandats dans différentes sociétés. Indiquez-nous toutes les sociétés et fonctions concernées afin que nous confirmions la couverture et les tarifs par écrit avant paiement.",
  },
  {
    q: "Puis-je modifier l’adresse pour un mandat de dirigeant existant ?",
    a: "Oui. Mettez en place une nouvelle adresse de service autorisée puis notifiez Companies House du changement de coordonnées du dirigeant. Convenez de qui effectuera la formalité ; la résiliation d’un ancien contrat ne met pas à jour Companies House automatiquement.",
  },
  {
    q: "Changer mon adresse actuelle la supprimera-t-elle des anciens dépôts publics ?",
    a: "Non, pas automatiquement. Companies House prévoit une procédure distincte pour demander la suppression de certaines données personnelles figurant dans d’anciens documents publics. L’éligibilité et la démarche relèvent de règles propres à Companies House.",
  },
  {
    q: "Ce service masque-t-il les informations PSC ou fournit-il un nominee director ?",
    a: "Non. Les obligations de transparence sur la propriété et le contrôle (PSC) demeurent pleinement applicables. Il s’agit d’un service d’adresse de correspondance pour le dirigeant réel, et non d’un mandat de nominee director ni d’un transfert de responsabilités statutaires.",
  },
  {
    q: "Combien coûte une adresse de service du dirigeant ?",
    a: "Notre adresse de service du dirigeant coûte £35 par an pour un dirigeant. Chaque dirigeant supplémentaire nécessite son propre service. Nous confirmons les modalités de traitement du courrier officiel avant paiement. Les forfaits de création Prestige et Elite l’incluent déjà pendant les 12 premiers mois.",
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
          <span>Commander l’Adresse de Dirigeant — £35/an</span>
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
          Le paiement lance l’intégration, sous réserve d’acceptation du service et des
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
          avant de payer.
        </p>
      </div>
    </div>
  );
}

export default function DirectorServiceAddressPageFr() {
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
            name: "Adresse de Service du Dirigeant",
            item: "https://www.sevenoakprestige.com/fr/services/director-service-address",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Adresse de Service du Dirigeant au Royaume-Uni pour Protéger Votre Domicile",
        description:
          "Adresse de service du dirigeant au Royaume-Uni — 35 £/an. Séparez votre adresse publique de correspondance actuelle de votre domicile personnel.",
        url: "https://www.sevenoakprestige.com/fr/services/director-service-address",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "35",
          priceCurrency: "GBP",
          url: "https://www.sevenoakprestige.com/fr/services/director-service-address",
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
              className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/fr" className="hover:text-foreground transition-colors">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground/90">
                Adresse de Service du Dirigeant
              </span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
              <div>
                <p className="eyebrow">Seven Oak Prestige · Services d’adresses</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
                  Adresse de Service du Dirigeant au Royaume-Uni pour Protéger Votre Domicile
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                  Utilisez une adresse de service autorisée au lieu de votre domicile pour votre
                  correspondance publique actuelle de dirigeant. Les dirigeants communiquent
                  toujours leur adresse résidentielle habituelle séparément à Companies House ; elle
                  n’est normalement pas publique. Les inscriptions publiques antérieures ne sont pas
                  supprimées automatiquement.
                </p>
                <p className="mt-6">
                  <span className="font-display text-4xl font-bold text-gold">£35</span>
                  <span className="ml-2 text-sm text-muted-foreground">par an</span>
                </p>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  Adresse et gestion du courrier confirmées avant paiement. Utilisation uniquement
                  après accord écrit.
                </p>
                <div className="mt-7">
                  <ServiceOrderActionsFr />
                </div>
              </div>

              <div className="border-t border-border/30 pt-6 lg:border-t-0 lg:border-l lg:border-border/30 lg:pt-2 lg:pl-8">
                <span className="font-display text-2xl font-bold text-gold">03</span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  La correspondance publique du dirigeant
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Dirigeants nouveaux et existants, y compris non-résidents
                </p>
                <a
                  href="#compare"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Comparer les types d’adresses</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* ── ROLE DIAGRAM ── */}
            <div
              className="mt-10 border border-border/30 bg-card/40 p-5 sm:p-7"
              role="img"
              aria-label="L'adresse de service du dirigeant est publique ; l'adresse résidentielle habituelle réelle est fournie séparément à Companies House et n'est normalement pas publique, sous réserve des divulgations autorisées."
            >
              <div className="flex items-center gap-3.5 text-sm text-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Deux adresses enregistrées.
                  <br />
                  <strong className="font-display text-lg">Deux fonctions différentes.</strong>
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="border border-border/30 bg-background/10 p-5">
                  <UserRound className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    Registre public
                  </p>
                  <strong className="mt-1 block font-display text-xl text-foreground">
                    Adresse de service (Service address)
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Correspondance officielle du dirigeant
                  </span>
                </div>

                <div className="border border-border/30 bg-background/10 p-5">
                  <LockKeyhole className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    Communiquée séparément
                  </p>
                  <strong className="mt-1 block font-display text-xl text-foreground">
                    Adresse résidentielle
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Votre lieu de résidence réel
                  </span>
                </div>
              </div>

              <p className="mt-5 border-t border-border/25 pt-4 text-xs text-muted-foreground">
                Les coordonnées résidentielles ne sont normalement pas publiques ; des exceptions
                légales de communication s’appliquent.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: PHOTO ── */}
        <section className="px-4 pt-10 pb-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-director-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-director-640.webp"
                alt="Un dirigeant chez lui avec une tablette, une enveloppe et des clés de maison sur la table"
                width={1280}
                height={730}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                Séparez votre correspondance publique actuelle de votre domicile personnel.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 2: PRACTICAL (PRIVACY IN PRACTICE) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">La confidentialité en pratique</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Comprenez ce qui change — et ce qui reste public
            </h2>

            <div className="mt-8 grid gap-x-8 md:grid-cols-2">
              {PRACTICAL_CHECKS.map((item, index) => (
                <article key={item.title} className="border-t border-border py-6">
                  <p className="text-xs font-bold text-gold" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Sources officielles (GOV.UK)</p>
              <a
                href="https://www.gov.uk/guidance/removing-your-home-address-from-the-companies-house-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House : retirer son adresse personnelle des registres publics</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
              <a
                href="https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House : dirigeants et secrétaires de société</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
              <a
                href="https://www.gov.uk/guidance/your-personal-information-on-the-companies-house-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House : informations personnelles sur le registre public</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
              <a
                href="https://www.gov.uk/make-changes-to-your-limited-company/directors-and-company-secretaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>GOV.UK : déclarer un changement de coordonnées de dirigeant</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SCOPE ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Sachez exactement ce que vous souscrivez</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Une adresse publique pour votre mandat. Pas un changement de dirigeant.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {DEFINITION}
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.65fr_1fr]">
              <div>
                <h3 className="mb-5 font-display text-xl font-semibold text-foreground">
                  Ce qu’il faut convenir avec notre équipe
                </h3>
                <div className="divide-y divide-border border-y border-border">
                  {RECEIVES.map((item) => (
                    <article key={item.title} className="flex gap-4 py-5">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-gold"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="border border-border bg-card/40 p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Non inclus par défaut
                </h3>
                <ul className="mt-5 space-y-4">
                  {EXCLUDES.map((text) => (
                    <li
                      key={text}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <X
                        className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                  Le devis écrit et le contrat de service définissent votre couverture exacte.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: USES ── */}
        <section className="section-parchment px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">À qui s’adresse ce service</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Pour le dirigeant réel, quel que soit votre pays de résidence
            </h2>

            <div className="mt-8 grid gap-7 md:grid-cols-3">
              {USE_CASES.map((item, index) => (
                <article key={item.title} className="border-t border-border pt-5">
                  <span className="text-xs font-bold text-gold" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: HOW IT WORKS ── */}
        <section className="section-parchment border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">De la demande à l’utilisation autorisée</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Configurez les bonnes coordonnées pour chaque mandat
            </h2>

            <ol className="mt-8 grid gap-5 md:grid-cols-2">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-4 border border-border bg-background p-6"
                >
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center border border-gold/40 font-display text-base font-bold text-gold"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── SECTION 6: COMPARISON TABLE ── */}
        <section id="compare" className="scroll-mt-28 border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Trois rôles. Aucune confusion.</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              De quelle adresse avez-vous réellement besoin ?
            </h2>

            <div
              className="mt-8 overflow-x-auto border border-border bg-background"
              tabIndex={0}
              role="region"
              aria-label="Comparaison des services d'adresse, faites défiler horizontalement sur petit écran"
            >
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparer le siège social, l’adresse commerciale virtuelle et l’adresse de service
                  du dirigeant
                </caption>
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      La distinction
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      <Link
                        href="/fr/services/registered-office-service"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Adresse de Siège Social</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      <Link
                        href="/fr/services/virtual-business-address"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Adresse Commerciale Virtuelle</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                    <th
                      scope="col"
                      className="bg-gold/10 p-4 text-xs font-bold uppercase tracking-wider"
                    >
                      <Link
                        href="/fr/services/director-service-address"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Adresse de Service du Dirigeant</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Tarif annuel
                    </th>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
                      £59/an
                    </td>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
                      £150/an
                    </td>
                    <td className="bg-gold/10 p-4 align-top font-display text-lg font-bold text-gold">
                      £35/an
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Rôle principal
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Adresse publique officielle de la société
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Correspondance clients et fournisseurs autorisée
                    </td>
                    <td className="bg-gold/10 p-4 align-top font-medium text-foreground">
                      Adresse publique de correspondance du dirigeant
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Périmètre du courrier
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Courriers statutaires couverts de la société
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Courriers commerciaux généraux couverts
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Correspondance officielle pour les dirigeants nommés
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Statutaire ou commercial ?
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Exigences légales de siège social applicables
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Service commercial ; ne remplace pas les adresses statutaires
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Règles de publicité et de déclaration des dirigeants applicables
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Points à vérifier
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Juridiction, autorisation et traitement du courrier officiel
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Usages permis, destinataires, lettres vs colis
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Personnes couvertes, sociétés rattachées et limites de confidentialité
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Numérisation / réexpédition
                    </th>
                    <td colSpan={3} className="p-4 align-top text-muted-foreground">
                      Uniquement selon ce qui est expressément confirmé par écrit dans vos
                      conditions de service. Aucune inclusion automatique.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Un même emplacement peut remplir plusieurs rôles avec autorisation. Les services ne
              sont pas interchangeables et peuvent nécessiter des contrats distincts.
            </p>
          </div>
        </section>

        {/* ── SECTION 7: FAQs ── */}
        <section
          id="faqs"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Des réponses claires avant de vous engager</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Questions fréquentes sur l’adresse de service du dirigeant
            </h2>

            <div className="mt-8 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left font-semibold text-foreground hover:text-gold transition-colors">
                    <span>{q}</span>
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
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

        {/* ── SECTION 8: FORMATION, RELATED SERVICES & INTERNAL BLOG LINKS ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Gardez vos services cohérents</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Vous créez une société ou souscrivez une adresse séparément ?
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Pour une nouvelle société au Royaume-Uni
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Notre forfait de création Prestige inclut l’adresse de siège social et l’adresse
                  de service du dirigeant pendant 12 mois ; le forfait Elite inclut également une
                  adresse commerciale virtuelle pendant 12 mois. Vérifiez votre forfait de création
                  avant de souscrire des services d’adresse déjà inclus.
                </p>
                <Link
                  href="/fr/services/uk-company-formation-for-non-residents"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Découvrir la création pour non-résidents</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Pour une société ou un mandat existant
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Siège social à £59 par an, adresse de service du dirigeant à £35 par an et
                  adresse commerciale virtuelle à £150 par an. Indiquez-nous vos besoins et nous
                  confirmerons l’adresse et la gestion du courrier avant paiement.
                </p>
                <Link
                  href="/fr/services/companies-house-identity-verification"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Assistance à la vérification d’identité</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <nav
              aria-label="Services d'adresse associés et articles de blog"
              className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/fr/services/registered-office-service"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Adresse de Siège Social (£59/an)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/fr/services/virtual-business-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Adresse Commerciale Virtuelle (£150/an)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/adresse-uk-ltd-france"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog : Adresse UK pour société anglaise depuis la France (2026)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/registered-office-vs-director-service-address-uk"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog : Registered Office vs Director Service Address</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/uk-company-director-duties-non-resident"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog : Devoirs du dirigeant d’une UK Ltd pour non-résidents</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </section>

        {/* ── SECTION 9: ENQUIRY / ORDER CTA ── */}
        <section
          id="enquire"
          className="section-dark scroll-mt-28 border-t border-border/30 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Confirmez l’adéquation avant de payer</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Faites de votre adresse publique de correspondance un choix réfléchi
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Indiquez l’usage prévu de l’adresse, votre pays de résidence et votre numéro de
                  société le cas échéant. Nous détaillerons l’adresse disponible, l’intégration, le
                  périmètre du courrier et les conditions de renouvellement avant tout engagement.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  N’envoyez pas de passeports, pièces d’identité ou documents financiers sensibles
                  par WhatsApp ou dans un premier e-mail. Demandez le canal de dépôt sécurisé.
                </p>
              </div>
              <div className="self-center">
                <ServiceOrderActionsFr />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

