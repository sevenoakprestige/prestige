"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Globe2,
  Mail,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/28EdR1asU8zHfIFf7Sfw405";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Demande de commande d'Adresse Commerciale Virtuelle — £150/an";
const MESSAGE_TEXT =
  "Bonjour Seven Oak Prestige, je souhaite commander votre service d'adresse commerciale virtuelle (£150/an). Merci de me confirmer l'adresse, les usages autorisés, le traitement du courrier et les conditions d'intégration avant paiement. Je n'enverrai pas de pièces d'identité dans ce premier message.";

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(MESSAGE_TEXT)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(MESSAGE_TEXT)}`;

const DEFINITION =
  "Une adresse commerciale virtuelle est un service de correspondance professionnelle. Elle ne constitue pas, à elle seule, un siège social (Registered Office), une adresse de service de dirigeant, un espace de travail physique ni la preuve que votre entreprise exerce depuis cet emplacement.";

const USE_CASES = [
  {
    title: "Consultants internationaux",
    text: "Fournissez à vos clients une adresse de correspondance convenue tout en réalisant vos prestations depuis un autre pays. Indiquez toujours avec exactitude votre lieu d’exercice réel lorsqu’un client ou un prestataire vous le demande.",
  },
  {
    title: "Vendeurs en ligne",
    text: "Séparez vos courriers professionnels de votre domicile. Ne publiez pas l’adresse comme centre de retours clients avant d’avoir vérifié l’acceptation des colis, les restrictions des transporteurs et les règles de votre place de marché.",
  },
  {
    title: "Entreprises de services",
    text: "Conservez un point de correspondance stable même lorsque votre lieu de travail évolue. Vérifiez séparément vos obligations de mentions légales ; une adresse virtuelle ne les remplace pas par défaut.",
  },
];

const RECEIVES = [
  {
    title: "Un usage convenu pour votre courrier professionnel",
    text: "Précisez où vous souhaitez afficher l’adresse : factures, site web, fiches fournisseurs ou correspondance clients. Chaque usage doit respecter les conditions écrites du service et les règles des tiers.",
  },
  {
    title: "Un circuit clair pour les courriers entrants",
    text: "Avant l’achat, confirmez quels courriers sont acceptés, quels destinataires peuvent être désignés, comment vous êtes notifié et si la numérisation ou la réexpédition est disponible.",
  },
  {
    title: "Des conditions adaptées à votre mode de travail",
    text: "Renseignez-vous sur le volume de courrier attendu, les envois internationaux, les destinataires supplémentaires, les exclusions et le renouvellement. Le devis distingue le traitement inclus des frais par pli ou d’affranchissement.",
  },
];

const EXCLUDES = [
  "Un bureau avec personnel, poste de travail, salle de réunion ou accueil sur place",
  "L’utilisation comme siège social ou adresse de dirigeant sans accord distinct",
  "La réception de colis, de stock ou de retours clients sans autorisation préalable",
  "Une garantie d’approbation par les banques, places de marché ou prestataires de paiement",
];

const STEPS = [
  {
    title: "Décrivez l’utilisation prévue",
    text: "Indiquez votre activité, le nom de votre entreprise et les supports sur lesquels vous souhaitez utiliser l’adresse. Précisez le volume de courrier estimé et vos besoins éventuels d’envoi à l’étranger.",
  },
  {
    title: "Convenez de ce qui peut être reçu",
    text: "Confirmez les destinataires, les usages autorisés, les exclusions, les options de traitement, les tarifs et la durée du service. Vérifiez indépendamment les exigences de toute banque ou plateforme.",
  },
  {
    title: "Complétez l’intégration approuvée",
    text: "Attendez l’acceptation du dossier et l’autorisation écrite avant d’afficher l’adresse. Transmettez les documents demandés uniquement via le canal sécurisé approuvé.",
  },
  {
    title: "Maintenez vos coordonnées de livraison à jour",
    text: "Gardez vos coordonnées et toute adresse de réexpédition autorisée à jour. Faites évoluer le service selon votre volume de courrier et organisez la continuité avant le renouvellement ou la résiliation.",
  },
];

const PRACTICAL_CHECKS = [
  {
    title: "Les lettres ne sont pas des colis",
    text: "Un contrat de gestion de courrier ne signifie pas l’acceptation de colis recommandés, de stock, d’articles volumineux ou de retours clients. Renseignez-vous sur les transporteurs, limites de taille et envois non autorisés.",
  },
  {
    title: "Numérisation et réexpédition sont deux options distinctes",
    text: "La numérisation fournit une copie numérique lorsqu’elle est proposée ; la réexpédition envoie le pli physique vers une destination convenue. Vérifiez la conservation des originaux et les frais d’envoi.",
  },
  {
    title: "Soyez précis sur l’emplacement réel de votre activité",
    text: "Une adresse de correspondance peut être affichée pour les usages commerciaux autorisés. Elle ne doit pas être présentée comme un bureau avec personnel, une base opérationnelle ou des locaux commerciaux au Royaume-Uni si tel n’est pas le cas.",
  },
  {
    title: "Les tiers fixent leurs propres exigences",
    text: "Les banques, prestataires de paiement et places de marché peuvent exiger votre adresse d’exploitation réelle ou des justificatifs d’activité indépendants. Une adresse virtuelle ne garantit ni l’ouverture d’un compte ni la validation d’une plateforme.",
  },
];

const FAQS = [
  {
    q: "Qu’est-ce qu’une adresse commerciale virtuelle ?",
    a: "C’est une adresse que vous êtes autorisé à utiliser pour votre correspondance professionnelle convenue, accompagnée d’un dispositif défini de traitement du courrier. Elle permet de séparer votre correspondance de votre lieu de travail, sans impliquer la location ou l’occupation d’un bureau physique.",
  },
  {
    q: "Une adresse de bureau virtuel (virtual office) est-elle la même chose ?",
    a: "L’expression « bureau virtuel » désigne différentes formules. Certaines incluent une permanence téléphonique ou des salles de réunion ; d’autres concernent uniquement l’adresse. Cette page porte sur la correspondance commerciale. Ne présumez pas que des bureaux, lignes téléphoniques ou services d’accueil sont inclus.",
  },
  {
    q: "Puis-je indiquer cette adresse sur mes factures et mon site web ?",
    a: "Généralement oui, une fois l’usage confirmé avec notre équipe. Notez que GOV.UK impose à toute société britannique (Limited Company) de mentionner son siège social (Registered Office), son numéro d’immatriculation et sa juridiction d’enregistrement sur son site web, ses courriers et ses bons de commande. L’adresse commerciale s’affiche en complément, et non en remplacement, de ces mentions légales.",
  },
  {
    q: "Puis-je l’utiliser comme siège social (Registered Office) de ma société ?",
    a: "Pas automatiquement. Le siège social répond à une obligation légale spécifique et doit correspondre à la juridiction d’immatriculation de la société (Angleterre et Pays de Galles, Pays de Galles uniquement, Écosse ou Irlande du Nord). Notre service de siège social coûte £59 par an et peut être souscrit en complément d’une adresse commerciale virtuelle.",
  },
  {
    q: "Une entreprise établie hors du Royaume-Uni peut-elle souscrire ?",
    a: "Oui, vous pouvez faire une demande depuis l’étranger. L’éligibilité dépend de votre activité, de l’usage prévu, des vérifications d’intégration et des conditions de service disponibles. Une adresse de correspondance au Royaume-Uni ne modifie ni votre résidence, ni votre statut migratoire, ni vos obligations fiscales.",
  },
  {
    q: "Une adresse commerciale à Londres est-elle disponible ?",
    a: "Demandez-nous l’adresse actuellement disponible et les usages autorisés. Nous ne promettons pas d’emplacement londonien spécifique sur cette page, et nos propres coordonnées de contact ne constituent pas une autorisation d’utilisation.",
  },
  {
    q: "Allez-vous numériser mon courrier ou me l’envoyer à l’étranger ?",
    a: "Ces options nécessitent une confirmation écrite. Renseignez-vous sur les courriers couverts, les notifications, la numérisation, la conservation des originaux, les destinations de réexpédition et les frais d’affranchissement et de traitement.",
  },
  {
    q: "Les clients en ligne peuvent-ils envoyer leurs retours à cette adresse ?",
    a: "Uniquement si le prestataire accepte expressément cet usage et si les règles de votre plateforme le permettent. Une adresse de courrier commercial ne doit pas être utilisée comme centre de retours ou de gestion de stock sans accord préalable.",
  },
  {
    q: "Une banque acceptera-t-elle une adresse commerciale virtuelle ?",
    a: "Cette décision appartient exclusivement à la banque. Elle peut exiger une adresse d’exploitation réelle et des justificatifs complémentaires, indépendamment d’une adresse de correspondance. N’achetez pas ce service en supposant qu’il garantit l’ouverture d’un compte bancaire ou de paiement.",
  },
  {
    q: "Combien coûte une adresse commerciale virtuelle ?",
    a: "Notre adresse commerciale virtuelle coûte £150 par an. Avant votre paiement, nous confirmons l’adresse, les usages autorisés et les modalités de gestion de votre courrier. Notre forfait de création Elite inclut déjà une adresse commerciale virtuelle pendant les 12 premiers mois.",
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
          <span>Commander l’Adresse Commerciale Virtuelle — £150/an</span>
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

export default function VirtualBusinessAddressPageFr() {
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
            name: "Adresse Commerciale Virtuelle",
            item: "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Adresse Commerciale Virtuelle au Royaume-Uni pour la Correspondance Professionnelle",
        description:
          "Adresse commerciale virtuelle au Royaume-Uni pour 150 £ par an. Utilisez une adresse professionnelle pour vos clients, fournisseurs et votre site web, avec des conditions claires de gestion du courrier.",
        url: "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "GBP",
          url: "https://www.sevenoakprestige.com/fr/services/virtual-business-address",
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
                Adresse Commerciale Virtuelle
              </span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
              <div>
                <p className="eyebrow">Seven Oak Prestige · Services d’adresses</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
                  Adresse Commerciale Virtuelle au Royaume-Uni pour la Correspondance Professionnelle
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                  Une adresse dédiée à vos courriers professionnels, où que vous travailliez.
                  Établissez un point de correspondance clair pour vos clients et fournisseurs sans
                  le présenter comme un bureau avec personnel ni comme votre lieu d’exploitation.
                </p>
                <p className="mt-6">
                  <span className="font-display text-4xl font-bold text-gold">£150</span>
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
                <span className="font-display text-2xl font-bold text-gold">02</span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Correspondance clients et fournisseurs
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Consultants, vendeurs en ligne et entreprises de services
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
              aria-label="Les courriers des clients et fournisseurs arrivent à une adresse de correspondance professionnelle convenue ; les modalités de notification et de remise dépendent des conditions écrites."
            >
              <div className="flex items-center gap-3.5 text-sm text-foreground">
                <Globe2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Travaillez d’où vous voulez.
                  <br />
                  <strong className="font-display text-lg">
                    Gardez une correspondance claire.
                  </strong>
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">01</span>
                  <strong className="mt-1 block text-sm text-foreground">
                    Courriers clients &amp; fournisseurs
                  </strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Destinataires et usages approuvés
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-gold md:block"
                  aria-hidden="true"
                />
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">02</span>
                  <strong className="mt-1 block text-sm text-foreground">
                    Adresse commerciale
                  </strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Traitement et notification convenus
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-gold md:block"
                  aria-hidden="true"
                />
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">03</span>
                  <strong className="mt-1 block text-sm text-foreground">
                    Votre réception
                  </strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Réception du contenu selon les modalités convenues
                  </p>
                </div>
              </div>

              <p className="mt-5 border-t border-border/25 pt-4 text-xs text-muted-foreground">
                Une adresse de correspondance ne constitue pas la preuve de locaux d’exploitation.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: PHOTO ── */}
        <section className="px-4 pt-10 pb-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-virtual-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-virtual-640.webp"
                alt="Un dirigeant d'entreprise ouvrant une lettre sur un bureau ensoleillé à côté d'un ordinateur portable"
                width={1280}
                height={730}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                Un point de correspondance professionnel, où que vous travailliez.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 2: USES ── */}
        <section className="section-parchment mt-8 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Conçu autour de votre quotidien professionnel</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Pour les entreprises dont l’activité voyage plus loin que leur courrier
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

        {/* ── SECTION 3: SCOPE ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Sachez exactement ce que vous souscrivez</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Un service de correspondance. Pas un bail de bureau.
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

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section className="section-parchment px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">De la demande à l’utilisation autorisée</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Commencez par définir comment vous souhaitez recevoir votre courrier
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

        {/* ── SECTION 5: PRACTICAL ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Courrier, usage et vérifications</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Avant d’afficher l’adresse sur votre site web
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
                href="https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>GOV.UK : obligations d’affichage sur les documents de l’entreprise</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
              <a
                href="https://www.gov.uk/limited-company-formation/company-address"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House : règles relatives au siège social</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="ouvre dans un nouvel onglet" />
              </a>
            </div>
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
                    <th
                      scope="col"
                      className="bg-gold/10 p-4 text-xs font-bold uppercase tracking-wider"
                    >
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
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
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
                    <td className="bg-gold/10 p-4 align-top font-display text-lg font-bold text-gold">
                      £150/an
                    </td>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
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
                    <td className="bg-gold/10 p-4 align-top font-medium text-foreground">
                      Correspondance clients et fournisseurs autorisée
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Courriers commerciaux généraux couverts
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Service commercial ; ne remplace pas les adresses statutaires
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Usages permis, destinataires, lettres vs colis
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
              Questions fréquentes sur l’adresse commerciale virtuelle
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
                  href="/fr/services/companies-house-verification"
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
                href="/fr/services/director-service-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Adresse de Service du Dirigeant (£35/an)</span>
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
                href="/blog/uk-company-formation-london-business-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog : Guide de l’adresse commerciale à Londres</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/registered-office-vs-director-service-address-uk"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog : Registered Office vs Director Service Address</span>
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
              Expliquez-nous comment votre entreprise souhaite recevoir son courrier
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

