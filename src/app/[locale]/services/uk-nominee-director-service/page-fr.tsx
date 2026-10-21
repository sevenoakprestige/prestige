"use client";

import Link from "next/link";
import { Mail, MessageCircle, Plus, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";
const SUBJECT = "Demande d'évaluation de service nominee director UK";

const ENQUIRY_BODY = `Bonjour Seven Oak Prestige,\n\nJe souhaite discuter d'un service de nominee director au Royaume-Uni.\nPays de résidence :\nActivité prévue de la société :\nStructure d'actionnariat :\nAccompagnement souhaité :\n\nMerci de m'indiquer la démarche à suivre. Je ne joins aucun document d'identité à ce premier message.`;

const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(ENQUIRY_BODY)}`;
const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Bonjour Seven Oak Prestige, je souhaite discuter d'une évaluation pour un service de nominee director au Royaume-Uni.`)}`;

const FAQS_FR = [
  {
    q: "Qu'est-ce qu'un nominee director (administrateur désigné) ?",
    a: "Ce terme désigne généralement un administrateur nommé dans le cadre d'un accord avec une autre personne, par exemple un actionnaire. Il ne s'agit pas d'une catégorie juridique distincte du Companies Act exonérée de devoirs. La personne nommée demeure un dirigeant avec de réelles responsabilités légales envers la société.",
  },
  {
    q: "Un accord de nominee director est-il légal au Royaume-Uni ?",
    a: "Cela dépend de l'accord effectif, de sa finalité légitime et du respect des lois applicables. Un accord privé ne peut primer sur les obligations légales d'un dirigeant ni servir à dissimuler le contrôle ou à contourner la réglementation. Un examen juridique et LCB-FT (lutte contre le blanchiment) du modèle de service est indispensable.",
  },
  {
    q: "Ai-je besoin d'un directeur résidant au Royaume-Uni pour créer une UK Ltd ?",
    a: "Généralement non. Les dirigeants d'une société privée à responsabilité limitée (Ltd) britannique n'ont pas l'obligation de résider au Royaume-Uni, même si la société doit avoir un siège social éligible au Royaume-Uni et satisfaire aux exigences légales applicables. Les fondateurs internationaux peuvent généralement être eux-mêmes directeurs.",
  },
  {
    q: "Un directeur peut-il simplement signer tout ce qu'un actionnaire demande ?",
    a: "Non. Les administrateurs doivent exercer un jugement indépendant, sous réserve des exceptions légales prévues par l'article 173 du Companies Act 2006, et remplir l'ensemble de leurs devoirs. Des instructions ou un accord privé ne constituent en aucun cas une exonération générale de responsabilité.",
  },
  {
    q: "Un nominee director permet-il de masquer le bénéficiaire effectif ?",
    a: "Non. Les obligations légales de déclaration des bénéficiaires effectifs (PSC - Persons with Significant Control) demeurent intangibles. La structure de propriété et de contrôle réel doit être comprise et déclarée au registre public ; ce service n'est pas un service d'anonymat ou de secret.",
  },
  {
    q: "Une adresse de domiciliation de dirigeant est-elle identique à un nominee director ?",
    a: "Non. Une Director Service Address (DSA) est une adresse de correspondance pour le registre public ; elle ne délègue aucun pouvoir et ne nomme personne d'autre au conseil d'administration. Un actionnaire prête-nom (nominee shareholder) est également un mécanisme distinct relatif aux actions, pas un substitut de dirigeant.",
  },
  {
    q: "Quels contrôles d'identité et de conformité s'appliquent ?",
    a: "Des vérifications approfondies KYC et AML s'appliquent sur le demandeur, le directeur proposé, l'actionnariat, le contrôle, l'activité prévue et la provenance des fonds. La vérification d'identité Companies House est distincte des contrôles AML réglementaires.",
  },
  {
    q: "La nomination d'un directeur britannique garantit-elle un compte bancaire ou des avantages fiscaux ?",
    a: "Non. Les banques et fournisseurs de paiement prennent leurs propres décisions d'acceptation et d'évaluation des risques. Une nomination ne garantit ni compte bancaire, ni traitement fiscal préférentiel, ni visa. Une consultation fiscale qualifiée transfrontalière est indispensable.",
  },
  {
    q: "Combien coûte un service de nominee director ?",
    a: "Il n'existe aucun tarif public standard. Tout devis dépend de l'évaluation de l'arrangement, des responsabilités effectives du dirigeant, de l'activité commerciale, du niveau de risque et de l'implication requise. Toute demande constitue une demande d'évaluation, non une confirmation d'acceptation.",
  },
  {
    q: "Dans quels cas une demande est-elle refusée ?",
    a: "Une demande sera refusée si elle vise à dissimuler les propriétaires réels, à contourner des règles fiscales ou réglementaires, à induire une banque en erreur, ou si les fonds ne sont pas traçables ou les risques ingérables.",
  },
];

export default function NomineeDirectorPageFr() {
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
            name: "Services de Nominee Director UK : Devoirs, Exigences et Accompagnement",
            item: "https://www.sevenoakprestige.com/fr/services/uk-nominee-director-service",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Évaluation de service de nominee director au Royaume-Uni",
        description:
          "Comprenez les devoirs, la transparence et la conformité d'un nominee director au Royaume-Uni. Demandez une évaluation au cas par cas auprès de Seven Oak Prestige.",
        url: "https://www.sevenoakprestige.com/fr/services/uk-nominee-director-service",
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
    <div className="specialist-page director-page bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="ss-hero relative isolate overflow-hidden">
          <picture>
            <source srcSet="/assets/director-hero-1280.webp" media="(min-width: 641px)" />
            <img
              src="/assets/director-hero-640.webp"
              alt="Salle de réunion lumineuse à Londres avec table en chêne clair et chaises marine ; illustration Seven Oak Prestige"
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
              <span aria-current="page">Évaluation de service de direction</span>
            </nav>

            <div className="ss-hero-copy">
              <p className="eyebrow">Seven Oak Prestige Ltd · Évaluation de service de direction</p>
              <h1 className="mt-5 text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
                Services de Nominee Director au Royaume-Uni : Devoirs, Exigences et Accompagnement
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-foreground/90">
                Être administrateur d&apos;une société est une responsabilité légale concrète, pas un simple nom sur un registre. Comprenez les devoirs statutaires, la transparence requise et le cadre légal avant tout accord.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Demander une évaluation de direction</span>
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
                Évaluation au cas par cas uniquement. Tout service est soumis à approbation juridique, conformité AML et validation opérationnelle. Aucun résultat ou nomination n&apos;est garanti d&apos;avance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: Comprendre le rôle */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Comprendre le rôle</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Ce que l&apos;on entend par « Nominee Director »
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Un nominee director est généralement compris comme un administrateur nommé en vertu d&apos;un accord avec une autre personne, souvent un actionnaire. Le droit britannique ne crée aucune catégorie d&apos;administrateur exonérée de ses obligations statutaires.
                  </p>
                  <p>
                    La personne nommée assume une place au conseil d&apos;administration avec de véritables responsabilités envers la société. La légalité d&apos;un arrangement dépend de sa substance, de son objet et de sa conformité réglementaire — non de son intitulé.
                  </p>
                </div>
                <aside className="border-l-2 border-gold pl-6">
                  <h3 className="text-xl font-display font-semibold">Vous n&apos;avez peut-être pas besoin de ce service</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Un directeur résidant au Royaume-Uni n&apos;est généralement pas exigé pour immatriculer une société privée à responsabilité limitée (Ltd). Les fondateurs internationaux peuvent généralement être eux-mêmes directeurs de leur propre société.
                  </p>
                  <Link
                    href="/fr/services/uk-company-formation-for-non-residents"
                    className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
                  >
                    Découvrir la création de société pour non-résidents →
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Les devoirs du Companies Act 2006 (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">La responsabilité avant la facilité</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Les devoirs du Companies Act s&apos;appliquent pleinement
            </h2>
            <div className="mt-7">
              <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#5b6472]">
                Les devoirs généraux des administrateurs en vertu du Companies Act 2006 sont dus directement à la société. Un accord privé ne peut pas réduire ce rôle à des signatures automatiques ni offrir d&apos;exonération générale de responsabilité.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Agir selon ses pouvoirs</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Respecter les statuts de la société et n&apos;exercer ses pouvoirs que pour les finalités pour lesquelles ils ont été conférés. L&apos;autorité doit être comprise et vérifiée, et non simplement présumée.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Promouvoir le succès de la société</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Agir de bonne foi de la manière la plus susceptible de promouvoir le succès de la société au bénéfice de ses membres dans leur ensemble, en tenant compte des facteurs statutaires.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Exercer un jugement indépendant</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Prendre des décisions éclairées plutôt que d&apos;exécuter aveuglément des instructions. L&apos;article 173 prévoit des exceptions spécifiques, mais ne crée aucune dispense générale.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Faire preuve de soin et de diligence</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    S&apos;impliquer activement dans les affaires de l&apos;entreprise, obtenir les informations nécessaires et appliquer le niveau de compétence exigé.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Gérer les conflits d&apos;intérêts</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Identifier et encadrer tout conflit d&apos;intérêts. Les administrateurs ne doivent accepter aucun avantage indu d&apos;un tiers et préserver leur loyauté envers l&apos;entité.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Déclarer les intérêts pertinents</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Déclarer tout intérêt personnel dans les transactions projetées. Tenir les registres de gouvernance et les procès-verbaux de manière rigoureuse et transparente.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Des besoins différents, des solutions adaptées */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Des besoins différents, des solutions adaptées</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Directeur résident, adresse de service ou actionnaire ?
            </h2>
            <div className="mt-7">
              <div className="grid gap-7 md:grid-cols-3">
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Directeur résident</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Désigne le lieu de résidence du dirigeant, non une fonction légale distincte. La résidence peut importer pour un organisme particulier ou une convention fiscale, mais n&apos;est pas obligatoire pour constituer une société.
                  </p>
                </article>
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Adresse de service (DSA)</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Une adresse officielle de correspondance protégeant votre domicile personnel sur le registre public. Elle ne délègue aucun pouvoir managérial à un tiers.
                  </p>
                  <Link href="/fr/services/director-service-address" className="mt-4 inline-block text-sm text-gold hover:underline">
                    Découvrir l&apos;adresse de service →
                  </Link>
                </article>
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Actionnaire désigné</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Un mécanisme lié à la détention des titres. Il est totalement distinct de la fonction d&apos;administrateur et ne dispense jamais de la déclaration des PSC (bénéficiaires effectifs).
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: La transparence est essentielle (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">La transparence est essentielle</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Propriété, identité et objet légitime
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Les obligations publiques demeurent</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Les dirigeants figurent au registre public de Companies House. La société doit déclarer ses PSC dès lors que les critères légaux sont remplis. Un mandat de nominee director ne doit jamais être utilisé pour masquer des bénéficiaires réels.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    La vérification d&apos;identité Companies House s&apos;applique à chaque dirigeant. L&apos;assistance administrative de Seven Oak est distincte de la vérification légale et ne remplace pas les contrôles AML obligatoires.
                  </p>
                  <Link
                    href="/fr/services/companies-house-verification"
                    className="mt-5 inline-block text-sm font-semibold text-[#8a6814] hover:underline"
                  >
                    Comprendre la vérification Companies House →
                  </Link>
                </div>
                <div className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Comprendre l&apos;activité réelle</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Toute analyse exige un objet commercial clair, l&apos;identification du contrôle réel, les juridictions impliquées et l&apos;origine des fonds. Les contrôles KYC/AML nécessitent des justificatifs vérifiés.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Nous évaluons l&apos;accès aux comptes, l&apos;autorité décisionnelle et la gouvernance. Il est recommandé de solliciter un conseil fiscal qualifié sur les implications de gestion effective et de résidence fiscale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Une évaluation rigoureuse */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Une évaluation rigoureuse</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Définir le besoin avant d&apos;envisager une nomination
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">01</p>
                  <h3 className="text-xl font-display font-semibold">Expliciter la finalité légitime</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Présenter l&apos;activité, l&apos;actionnariat, les résidences fiscales et les motifs de la demande. Nous vérifions d&apos;abord si une direction directe ou un autre service répond plus efficacement à votre besoin.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">02</p>
                  <h3 className="text-xl font-display font-semibold">Examen juridique et conformité</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Vérification du modèle de service, des exigences de supervision, de la diligence client et des conflits éventuels. Aucune nomination n&apos;est proposée avant l&apos;obtention de toutes les validations.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">03</p>
                  <h3 className="text-xl font-display font-semibold">Convention écrite et responsabilités</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    En cas de validation, formalisation de l&apos;implication réelle, des accès aux données comptables, du pouvoir de décision et des conditions de résiliation. Un contrat ne déroge jamais aux devoirs légaux.
                  </p>
                </article>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <h3 className="text-xl font-display font-semibold">La tarification dépend du périmètre</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  L&apos;activité, le niveau de risque, l&apos;engagement requis et la complexité déterminent tout devis personnalisé. Une prise de contact constitue une demande d&apos;évaluation, et non une promesse d&apos;acceptation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Les demandes irrecevables (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Les demandes irrecevables</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Certains dossiers ne peuvent pas être instruits
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Dissimulation ou fraude</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Toute tentative de dissimuler des bénéficiaires effectifs, d&apos;échapper à l&apos;impôt, de tromper un établissement bancaire ou de fausser le lieu de direction effective est formellement proscrite.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Signature sans discernement</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    L&apos;attente qu&apos;un dirigeant approuve aveuglément des instructions sans examen documentaire ou implication réelle est incompatible avec les devoirs légaux d&apos;administrateur.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Risque non maîtrisable</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    L&apos;absence de traçabilité des fonds, le manque de registres, un objet illicite ou des conflits d&apos;intérêts insurmontables empêchent toute mise en place.
                  </p>
                </article>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5b6472]">
                La nomination d&apos;un directeur britannique ne garantit en aucun cas l&apos;ouverture d&apos;un compte bancaire ou l&apos;obtention d&apos;un visa. Les institutions financières demeurent souveraines dans leurs décisions.
              </p>

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
              Des réponses claires avant toute prise de contact
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

        {/* SECTION 8: CTA Demande d'évaluation */}
        <section id="enquire" className="ss-section section-dark border-t border-border/40">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow">Une étape réfléchie</p>
              <h2 className="mt-3 text-3xl font-display font-bold">Commencez par une évaluation de service de direction.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Expliquez-nous votre situation et votre objectif. Nous évaluerons votre demande en toute confidentialité et vous guiderons vers les solutions adaptées.
              </p>
            </div>
            <div className="self-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Demander une évaluation de direction</span>
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
                Précisez votre pays de résidence, l&apos;activité envisagée et l&apos;actionnariat. Ne transmettez aucun document d&apos;identité sensible lors de ce premier contact ; nous vous communiquerons un canal sécurisé agréé.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: Textes de référence */}
        <section className="ss-section border-t border-border/40 bg-card/20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Consulter les sources officielles</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Fonder les décisions sur les textes légaux
            </h2>
            <div className="mt-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ces informations sont fournies à titre indicatif et ne constituent pas un conseil juridique ou fiscal. Consultez des professionnels qualifiés pour votre situation personnelle.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gold">
                <li>
                  <a
                    href="https://www.legislation.gov.uk/ukpga/2006/46/part/10/chapter/2"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies Act 2006 : devoirs généraux des administrateurs ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    GOV.UK : nomination des dirigeants ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/people-with-significant-control-pscs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies House : personnes ayant un contrôle significatif (PSC) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies House : obligations de vérification d&apos;identité ↗
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
