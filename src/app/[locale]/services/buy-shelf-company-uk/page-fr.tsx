"use client";

import Link from "next/link";
import { Mail, MessageCircle, Plus, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";
const SUBJECT = "Demande d'information - Société ready-made UK (Shelf company)";

const ENQUIRY_BODY = `Bonjour Seven Oak Prestige,\n\nJe souhaite obtenir des informations concernant l'acquisition d'une société shelf au Royaume-Uni.\nPays de résidence :\nActivité prévue de l'entreprise :\nStructure d'actionnariat :\nAccompagnement souhaité :\n\nMerci de m'indiquer la démarche à suivre. Je ne joins aucun document d'identité à ce premier contact.`;

const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(ENQUIRY_BODY)}`;
const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Bonjour Seven Oak Prestige, je souhaite discuter de l'acquisition d'une société shelf (ready-made) au Royaume-Uni.`)}`;

const FAQS_FR = [
  {
    q: "Qu'est-ce qu'une société shelf (ready-made company) au Royaume-Uni ?",
    a: "Une shelf company est une société déjà immatriculée auprès de Companies House avant d'être proposée à un acquéreur, généralement maintenue en sommeil (dormante) jusqu'à sa reprise. Il ne s'agit pas nécessairement d'une société en exploitation. Son historique et son statut effectif doivent être vérifiés méticuleusement.",
  },
  {
    q: "Comment s'effectue l'acquisition d'une société existante ?",
    a: "L'opération implique l'acquisition des actions existantes via un acte de cession (Stock Transfer Form / J10), l'inscription sur le registre des membres, puis la mise à jour des administrateurs, des PSC (bénéficiaires effectifs) et des adresses. La finalisation dépend des vérifications de due diligence et de conformité KYC/AML.",
  },
  {
    q: "Un non-résident peut-il acquérir une shelf company britannique ?",
    a: "Oui, un non-résident peut légalement détenir les parts d'une société privée britannique à responsabilité limitée (Ltd). L'acceptation dépend des documents, des contrôles de conformité et des vérifications d'identité applicables.",
  },
  {
    q: "Avez-vous des sociétés shelf immédiatement disponibles à la vente ?",
    a: "La disponibilité est confirmée sur demande personnalisée uniquement. Nous ne publions aucun stock public générique afin de garantir la qualité et la rigueur de chaque dossier. Présentez-nous votre projet pour que nous puissions évaluer la faisabilité.",
  },
  {
    q: "Une société dormante est-elle garantie sans passif ?",
    a: "Non. Le statut de société dormante ne prouve pas à lui seul l'absence de dettes, d'engagements ou de litiges passés. Les comptes déposés ne sont qu'un élément partiel ; une due diligence rigoureuse et des garanties contractuelles du vendeur sont indispensables.",
  },
  {
    q: "L'ancienneté d'immatriculation prouve-t-elle une expérience commerciale ?",
    a: "Non. La date de constitution atteste d'une ancienneté d'enregistrement, et non d'un chiffre d'affaires, d'une solvabilité ou d'une activité opérationnelle. L'ancienneté ne garantit pas l'accès automatique au crédit ou aux marchés bancaires.",
  },
  {
    q: "Une shelf company est-elle livrée avec un compte bancaire ou un numéro de TVA ?",
    a: "Ni l'un ni l'autre ne peut être garanti ou promis à l'avance. Lors d'un changement de contrôle, les établissements bancaires réévaluent systématiquement les nouveaux bénéficiaires effectifs. Tout numéro de TVA existant appartient à la société et doit faire l'objet d'un examen de régularité fiscale.",
  },
  {
    q: "Comment le devis est-il établi ?",
    a: "Le tarif dépend de l'ancienneté vérifiée, de la complexité de la transaction, de l'étendue des vérifications de due diligence, des modifications statutaires requises et des services complémentaires souscrits (comptabilité, domiciliation). Tout est formalisé par écrit.",
  },
  {
    q: "Une création de société neuve est-elle une meilleure alternative ?",
    a: "Très souvent, oui — particulièrement si vous n'avez pas de motif impératif exigeant une personne morale préexistante. Créer une nouvelle société évite tout risque lié à l'historique d'une entité tierce tout en bénéficiant d'une structure parfaitement saine.",
  },
  {
    q: "Que se passe-t-il après l'acquisition ?",
    a: "La société doit mettre à jour ses registres légaux, notifier les changements à Companies House et HMRC, et assurer la continuité des déclarations statutaires (comptes annuels, confirmation statement, Corporation Tax).",
  },
];

export default function ShelfCompanyPageFr() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.sevenoakprestige.com/fr" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Acheter une Société Ready-Made UK (Shelf Company) : Sociétés Clé en Main",
            item: "https://www.sevenoakprestige.com/fr/services/buy-shelf-company-uk",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Acquisition de sociétés ready-made (shelf) au Royaume-Uni",
        description:
          "Découvrez l'acquisition d'une société shelf britannique depuis l'étranger. Comprenez les transferts de parts, la due diligence, le passif et la conformité.",
        url: "https://www.sevenoakprestige.com/fr/services/buy-shelf-company-uk",
        provider: { "@type": "Organization", name: "Seven Oak Prestige Ltd" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS_FR.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="specialist-page shelf-page bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="ss-hero relative isolate overflow-hidden">
          <picture>
            <source srcSet="/assets/shelf-hero-1280.webp" media="(min-width: 641px)" />
            <img
              src="/assets/shelf-hero-640.webp"
              alt="Bureau de direction moderne et lumineux à Londres avec vue sur Westminster ; illustration Seven Oak Prestige"
              width={1280}
              height={720}
              className="ss-hero-image absolute inset-0 -z-20 h-full w-full object-cover"
            />
          </picture>
          <div className="ss-hero-shade absolute inset-0 -z-10" />

          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Link href="/fr" className="hover:text-foreground">Accueil</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sociétés shelf & ready-made</span>
            </nav>

            <div className="ss-hero-copy">
              <p className="eyebrow">Seven Oak Prestige Ltd · Sociétés shelf & ready-made</p>
              <h1 className="mt-5 text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
                Acheter une Société Ready-Made UK : Sociétés Clé en Main pour Non-Résidents
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-foreground/90">
                Une société britannique existante, acquise avec une parfaite compréhension de ses antécédents et de ses obligations. Explorez une reprise sécurisée, encadrée par une rigoureuse due diligence.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Demander les disponibilités de sociétés</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-action btn-ghost inline-flex items-center gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Échanger sur WhatsApp</span>
                </a>
              </div>

              <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Disponibilité et conformité confirmées sur demande uniquement. Toutes les opérations proposées sont soumises à due diligence, contrôles d&apos;identité et agrément contractuel.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: La réalité juridique */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">La réalité juridique</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Une société enregistrée. Pas une page blanche.
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Une shelf company britannique est une société déjà immatriculée avant d&apos;être proposée à un repreneur. Elle est généralement censée être restée dormante, mais cette affirmation doit être étayée par des preuves concrètes. « Off-the-shelf company » et « ready-made company » désignent le même mécanisme.
                  </p>
                  <p>
                    Vous faites l&apos;acquisition des parts sociales plutôt que d&apos;immatriculer une entité nouvelle. La société conserve son numéro légal et son identité juridique.{" "}
                    <strong className="text-foreground">
                      Son historique, ses obligations légales et ses passifs potentiels ne disparaissent pas avec le changement de propriétaire.
                    </strong>
                  </p>
                </div>
                <aside className="border-l-2 border-gold pl-6">
                  <h3 className="text-xl font-display font-semibold">L&apos;ancienneté légale n&apos;est pas une activité commerciale</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Une date d&apos;immatriculation antérieure ne prouve ni chiffre d&apos;affaires, ni historique opérationnel, ni solvabilité financière. Ne présentez jamais l&apos;ancienneté d&apos;une société dormante comme une preuve d&apos;activité passée.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Choisir la bonne voie (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Choisir la bonne voie</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Société ready-made ou nouvelle immatriculation ?
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 md:grid-cols-2">
                <article className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Acquérir une entité juridique existante</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    L&apos;acquisition d&apos;une shelf company peut être pertinente pour des motifs commerciaux précis nécessitant une date d&apos;incorporation antérieure, sous réserve d&apos;un audit exhaustif de ses registres et d&apos;une cession de parts formelle.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Démarrer avec une société neuve</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Si vous lancez une nouvelle activité, l&apos;immatriculation à neuf est souvent la voie la plus sûre et la plus transparente. Vous choisissez votre raison sociale sans hériter du passé juridique d&apos;un tiers.
                  </p>
                  <Link
                    href="/fr/services/uk-company-formation-for-non-residents"
                    className="mt-5 inline-block text-sm font-semibold text-[#8a6814] hover:underline"
                  >
                    Découvrir la création de société UK pour non-résidents →
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: La due diligence préalable */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Avant tout engagement</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              La due diligence dépasse le simple registre public
            </h2>
            <div className="mt-7">
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Les registres de Companies House constituent un point de départ, non une assurance absolue d&apos;absence de risque. Exigez les pièces sous-jacentes, les déclarations du cédant et une revue comptable appropriée.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Historique et registres statutaires</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Vérification du statut légal, des statuts (Articles), du capital social, de la chaîne de propriété, des administrateurs, des PSC et des hypothèques enregistrées.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Comptes et statut de sommeil</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Examen des bilans dormants déposés et des mouvements bancaires éventuels. La mise en sommeil au sens de Companies House et de HMRC répond à des critères précis qui doivent être attestés.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Engagements et passifs éventuels</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Recherche de dettes, garanties, litiges ou contrats en cours. Une cession de parts maintient la société comme débitrice de tous ses engagements antérieurs.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Impôt sur les sociétés & TVA</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Contrôle des déclarations fiscales CT600 et des correspondances HMRC. Un numéro de TVA existant nécessite un audit de conformité et ne dispense jamais des contrôles fiscaux.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Propriété et pouvoir de céder</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Confirmation que le cédant détient légitimement les parts et dispose du pouvoir de les transférer, conformément aux statuts de la société.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Services bancaires et paiements</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Ne présumez jamais qu&apos;un compte bancaire est inclus ou restera fonctionnel. Tout changement de contrôle implique un réexamen KYC/KYB complet par l&apos;institution financière.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Déroulement de l'acquisition (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Déroulement de l&apos;acquisition</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              De la demande initiale à la remise des registres
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">01</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Présentation de votre besoin</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Indiquez votre pays de résidence, l&apos;activité projetée, l&apos;actionnariat et les motifs justifiant le recours à une société existante. Nous évaluons l&apos;éligibilité du projet.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">02</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Due diligence & vérifications</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Audit des registres et contrôles d&apos;identité KYC/AML par un canal sécurisé agréé. Définition du devis et des conditions suspensives de transmission.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">03</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Cession et mise à jour officielle</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Signature des actes de cession (Stock Transfer Form), mise à jour du registre des membres, déclaration des nouveaux administrateurs et des PSC auprès de Companies House.
                  </p>
                </article>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5b6472]">
                La propriété des actions, la nomination des dirigeants et la déclaration des PSC sont des étapes juridiques distinctes. Une cession ne se réduit pas à un simple changement de nom de directeur sur le site du registre.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Disponibilité et devis */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Disponibilité et devis</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Sociétés shelf à la reprise : évaluer avant de décider
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Nous ne publions aucun catalogue ni prix forfaitaire indicatif. Si une entité éligible peut être envisagée, ses caractéristiques vérifiées et ses conditions doivent être étudiées préalablement. Une prise de contact ne vaut pas réservation.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={EMAIL_LINK}
                      className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Demander les disponibilités de sociétés</span>
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ss-action btn-ghost inline-flex items-center gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Échanger sur WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold">Qu&apos;est-ce qui influe sur le tarif ?</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Historique vérifié, antériorité des dépôts et éléments à régulariser</li>
                    <li>Structure d&apos;actionnariat, termes de cession et complexité de l&apos;audit</li>
                    <li>Modifications statutaires, déclaration PSC et déclarations officielles</li>
                    <li>Services complémentaires d&apos;adresse, de comptabilité ou de suivi post-acquisition</li>
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Un devis écrit et transparent distingue l&apos;acquisition elle-même des frais annexes et prestations récurrentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Les limites impératives (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Les limites impératives</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Quand ne faut-il pas acheter une shelf company ?
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Vous avez seulement besoin d&apos;une société</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Une constitution neuve répond parfaitement à votre besoin sans risque. Une date d&apos;enregistrement passée ne justifie pas à elle seule de reprendre des antécédents inconnus.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Les registres sont imprécis</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Ne vous fiez jamais à une simple étiquette de sommeil sans justificatifs bancaires et comptables vérifiés.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Vous espérez un avantage automatique</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    N&apos;achetez pas sur la fausse promesse d&apos;une ouverture bancaire garantie ou d&apos;un crédit instantané. Une acquisition ne contourne aucun contrôle légal de conformité.
                  </p>
                </article>
              </div>

              {/* Related Links */}
              <div className="mt-8 flex flex-col gap-4 border-t border-[#e5dfd3] pt-6 text-sm sm:flex-row sm:flex-wrap">
                <Link
                  href="/fr/services/uk-company-formation-for-non-residents"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  Création de société pour non-résidents
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/fr/services/uk-accounting-non-residents"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  Comptabilité et conformité fiscale
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/fr/services/companies-house-verification"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  Assistance vérification Companies House
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Questions fréquentes */}
        <section id="faqs" className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Vos questions</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Des réponses claires avant toute démarche
            </h2>
            <div className="mt-7">
              <div className="max-w-4xl border-t border-border/60">
                {FAQS_FR.map(({ q, a }) => (
                  <details key={q} className="group border-b border-border/60">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-sm font-semibold sm:text-base hover:text-gold transition-colors">
                      <span>{q}</span>
                      <Plus
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Demande de renseignement */}
        <section id="enquire" className="ss-section section-dark border-t border-border/40">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow">Une démarche réfléchie</p>
              <h2 className="mt-3 text-3xl font-display font-bold">Commencez par poser les bonnes questions.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Échangez sur vos besoins précis avant d&apos;envisager la reprise d&apos;une société existante. Nous étudierons votre demande en toute objectivité et vous présenterons les étapes appropriées.
              </p>
            </div>
            <div className="self-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Demander les disponibilités de sociétés</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-action btn-ghost inline-flex items-center gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Échanger sur WhatsApp</span>
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Précisez votre pays de résidence, l&apos;activité envisagée et l&apos;actionnariat. Ne transmettez aucun document d&apos;identité confidentiel par messagerie instantanée ou e-mail initial ; un espace sécurisé dédié vous sera fourni.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: Sources officielles */}
        <section className="ss-section border-t border-border/40 bg-card/20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Sources officielles</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Vérifier les registres. Consulter des professionnels qualifiés.
            </h2>
            <div className="mt-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cette page propose une information générale et ne constitue pas un conseil juridique ou fiscal. Tout acquéreur international doit prendre en considération les obligations britanniques et celles de son pays de résidence.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gold">
                <li>
                  <a
                    href="https://www.gov.uk/guidance/searching-the-companies-house-register"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Consulter le registre Companies House ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/running-a-limited-company/company-changes-you-must-report"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Changements obligatoires à déclarer ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/hmrc-internal-manuals/vat-registration-manual/vatreg29050"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    HMRC : cession d&apos;actions et continuité fiscale ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
