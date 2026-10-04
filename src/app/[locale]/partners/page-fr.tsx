"use client";

import { useState } from "react";

const WA_NUMBER = "447447488755";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const B2B_WA = wa("Bonjour Seven Oak Prestige, j'aimerais discuter d'un accord B2B / de partenariat.");

const TRUST = ["Pas de volume minimum", "Tarification partenaire flexible", "Soutien aux clients internationaux", "Options en marque blanche disponibles"];

const WHO = [
  ["Fournisseurs de services aux entreprises", "Ajoutez des entités britanniques à votre offre sans créer d'opérations au Royaume-Uni."],
  ["Comptables et conseillers fiscaux", "Création et conformité continue pour les clients en expansion au Royaume-Uni."],
  ["Consultants en immigration et relocalisation", "Un partenaire d'entreprise britannique fiable pour les clients en relocalisation ou investissant."],
  ["Avocats et conseillers professionnels", "Une prestation structurée pour les clients ayant besoin d'une société au Royaume-Uni en plus de vos conseils."],
  ["Consultants d'affaires et agences", "Y compris les agences d'e-commerce et de constitution internationale."],
  ["Consultants indépendants et apporteurs d'affaires", "Indépendants et particuliers qui orientent régulièrement des entrepreneurs."],
];

const MODELS = [
  {
    n: "01",
    name: "Partenaire de référence",
    body: "Vous présentez le client et Seven Oak fournit directement le service convenu.",
    fit: "Idéal pour les introductions occasionnelles et les consultants indépendants.",
  },
  {
    n: "02",
    name: "Partenaire B2B / Revendeur",
    body: "Vous conservez la relation commerciale principale et achetez les services de Seven Oak aux tarifs partenaires convenus.",
    fit: "Idéal pour les cabinets qui facturent leurs propres clients.",
  },
  {
    n: "03",
    name: "Marque blanche / Partenaire stratégique",
    body: "Seven Oak travaille sous votre marque ou selon une structure de gestion client convenue pour une coopération continue plus approfondie.",
    fit: "Idéal pour les volumes récurrents et la coopération à long terme.",
  },
];

const SERVICES: [string, string[]][] = [
  ["Création", ["Création de société au R-U", "Création de société non-résidente", "Création de filiale au R-U"]],
  ["Adresses", ["Adresse du siège social", "Adresse de service du directeur", "Adresse commerciale virtuelle"]],
  ["Banque et inscriptions", ["Assistance bancaire professionnelle", "Préparation pour fournisseur de paiement", "Inscription à la TVA", "Inscription EORI"]],
  ["Conformité Companies House", ["Déclarations de confirmation", "Changements de directeur / actionnaire / société", "Administration d'entreprise continue"]],
  ["Comptabilité et fiscalité", ["Comptes annuels", "CT600 / Impôt sur les sociétés", "Tenue de livres", "Déclarations de TVA", "Paie", "Auto-évaluation (Self Assessment)"]],
];

const WHY = [
  ["Votre relation client est respectée", "Convenir de la structure de prestation avant le début des travaux."],
  ["Pas de volume minimum", "Commencez avec un client et évoluez progressivement."],
  ["Expérience des fondateurs internationaux", "Conçu autour du soutien britannique aux fondateurs et entreprises étrangers."],
  ["Modèles commerciaux flexibles", "Arrangements de recommandation, de revente et en marque blanche."],
  ["Un seul partenaire britannique, de de multiples services", "De la création à la comptabilité et conformité continues."],
  ["Soutien partenaire humain", "Les cas complexes peuvent être examinés par des conseillers expérimentés."],
];

const STEPS = [
  ["01", "Parlez-nous de votre entreprise", "Partagez avec qui vous travaillez et les services dont vos clients ont besoin."],
  ["02", "Convenir du modèle de partenariat", "Recommandation, revendeur ou marque blanche — avec tarification et responsabilités confirmées par écrit."],
  ["03", "Envoyez votre premier client", "Un seul cas suffit pour commencer."],
  ["04", "Seven Oak fournit le service convenu", "Intégration, dépôts et suivi gérés selon la structure convenue."],
  ["05", "Développez la relation", "Ajustez l'arrangement au fur et à mesure que votre volume se développe."],
];

const EXPERTISE = [
  "Intégration à distance pour les directeurs et actionnaires hors du R-U",
  "Conseils clairs sur la vérification d'identité Companies House",
  "Options d'adresse conformes aux exigences britanniques pour les non-résidents",
  "Préparation bancaire et fournisseur de paiement, avec des conseils honnêtes sur l'éligibilité",
  "Un soutien dans un langage clair, à travers différents fuseaux horaires",
];

const FAQS = [
  {
    q: "Dois-je avoir une société enregistrée pour devenir partenaire ?",
    a: "Non. Les consultants indépendants, les indépendants et les apporteurs d'affaires sont invités à se renseigner. Une société enregistrée n'est pas requise pour soumettre une demande initiale.",
  },
  {
    q: "Y a-t-il un nombre minimum de clients ?",
    a: "Aucun volume minimum de clients n'est requis pour commencer. Les partenaires peuvent commencer avec un seul client.",
  },
  {
    q: "Comment la tarification partenaire est-elle établie ?",
    a: "La tarification partenaire est adaptée aux services requis, au volume attendu et au niveau de soutien. Les partenaires peuvent commencer avec un seul client.",
  },
  {
    q: "Qui détient la relation client ?",
    a: "Ceci est convenu avant le début des travaux. Dans les arrangements de revente et en marque blanche, vous conservez la relation commerciale principale ; dans les arrangements de recommandation, Seven Oak sert directement le client.",
  },
  {
    q: "Seven Oak peut-il travailler sous ma marque ?",
    a: "Des accords en marque blanche et stratégiques sont disponibles et structurés au cas par cas.",
  },
  {
    q: "Les clients recommandés doivent-ils quand même passer des vérifications ?",
    a: "Oui. Chaque client final effectue les vérifications applicables KYC, AML et de sanctions. Le statut de partenaire ne permet pas de contourner ces exigences.",
  },
  {
    q: "Pouvez-vous garantir un compte bancaire pour mes clients ?",
    a: "Non. Nous aidons à évaluer le profil du client et à préparer les demandes, mais l'approbation finale revient toujours à la banque ou au fournisseur de paiement.",
  },
  {
    q: "Travaillez-vous avec des partenaires en dehors du Royaume-Uni ?",
    a: "Oui. Le programme est conçu pour les partenaires basés au Royaume-Uni et internationaux.",
  },
];

const VOLUMES = ["Recommandations occasionnelles", "1–5 clients/mois", "6–20 clients/mois", "20+ clients/mois", "Pas encore sûr"];
const MODEL_OPTS = ["Recommandation", "Revendeur B2B", "Marque blanche", "Pas sûr"];
const TYPES = [
  "Fournisseur de services aux entreprises",
  "Comptable / conseiller fiscal",
  "Consultant en immigration / relocalisation",
  "Avocat / conseiller professionnel",
  "Consultant d'affaires / agence",
  "Consultant indépendant / apporteur d'affaires",
  "Autre",
];
const SERVICE_OPTS = ["Création de société", "Adresses", "Préparation bancaire", "TVA / EORI", "Conformité Companies House", "Comptabilité et fiscalité"];

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className}`}>
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

function Dot() {
  return <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />;
}

function PartnerFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                <span className={`mt-1 shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                </span>
              </button>
            </h3>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const field = "mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold";
const label = "block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground";

function PartnerForm() {
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim() || "—";
    
    const combinedMessage = `
      <br><strong>Pays:</strong> ${g("country")}
      <br><strong>Site Web:</strong> ${g("website")}
      <br><strong>Type:</strong> ${g("type")}
      <br><strong>Services:</strong> ${services.length ? services.join(", ") : "—"}
      <br><strong>Volume attendu:</strong> ${g("volume")}
      <br><strong>Partenariat souhaité:</strong> ${g("model")}
      <br><br><strong>Message:</strong><br>${g("message").replace(/\n/g, '<br>')}
    `;

    const data = {
      fullName: g("name"),
      email: g("email"),
      phone: g("whatsapp"),
      companyName: g("org"),
      source: "Partnership Enquiry",
      lang: "fr",
      message: combinedMessage
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus('success');
      } else {
        throw new Error(result.error || "Échec de l'envoi du formulaire");
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setErrorMessage(error.message || "Une erreur s'est produite. Veuillez réessayer.");
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center border border-border bg-background">
        <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold font-sans">Merci !</h3>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          Nous avons bien reçu votre demande de partenariat. Un membre de notre équipe vous contactera sous peu.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 border border-border bg-background p-6 sm:grid-cols-2 sm:p-10">
      {status === 'error' && (
        <div className="sm:col-span-2 flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          <p>{errorMessage}</p>
        </div>
      )}
      <label className={label}>Nom complet *<input name="name" required maxLength={100} className={field} /></label>
      <label className={label}>Société / organisation (optionnel)<input name="org" maxLength={120} className={field} /></label>
      <label className={label}>Pays *<input name="country" required maxLength={80} className={field} /></label>
      <label className={label}>Site web (optionnel)<input name="website" type="url" maxLength={200} placeholder="https://" className={field} /></label>
      <label className={label}>Email *<input name="email" type="email" required maxLength={160} className={field} /></label>
      <label className={label}>Numéro WhatsApp *<input name="whatsapp" type="tel" required maxLength={30} className={field} /></label>
      <label className={`${label} sm:col-span-2`}>
        Type d'entreprise / profession *
        <select name="type" required defaultValue="" className={field}>
          <option value="" disabled>Sélectionnez</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <fieldset className="sm:col-span-2">
        <legend className={label}>Services d'intérêt</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICE_OPTS.map((s) => {
            const on = services.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => setServices((v) => (on ? v.filter((x) => x !== s) : [...v, s]))}
                className={`border px-3 py-2 text-xs transition-colors ${on ? "border-gold bg-gold text-primary-foreground" : "border-border hover:border-gold"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className={label}>
        Volume de clients attendu *
        <select name="volume" required defaultValue="" className={field}>
          <option value="" disabled>Sélectionnez</option>
          {VOLUMES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className={label}>
        Partenariat préféré *
        <select name="model" required defaultValue="" className={field}>
          <option value="" disabled>Sélectionnez</option>
          {MODEL_OPTS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Bref message
        <textarea name="message" rows={4} maxLength={1000} className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'loading'} className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Envoi...' : 'Soumettre la demande de partenariat'}
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Une société enregistrée n'est pas requise pour se renseigner. Notre équipe de partenariat vous répondra directement.
        </p>
      </div>
    </form>
  );
}

export default function PartnersFr() {
  return (
    <div className="bg-background">
      <main>
        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Programme Partenaire Seven Oak Prestige</p>
            <div className="mt-4 h-px w-24 rule-gold" />
            <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.35rem]">
              Devenez Partenaire de Seven Oak Prestige
            </h1>
            <p className="mt-5 max-w-2xl font-display text-xl text-gold-soft sm:text-2xl">
              Votre client. Votre relation. Notre infrastructure au Royaume-Uni.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
              Élargissez les services britanniques que vous pouvez offrir à vos clients grâce à la création d'entreprise, les adresses, la conformité, la préparation bancaire et le soutien comptable. Que vous présentiez un seul client de temps en temps ou que vous gériez un volume international récurrent, nous pouvons construire une structure de partenariat adaptée à votre entreprise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#apply" className="btn-gold w-full sm:w-auto">Devenir Partenaire</a>
              <a href={B2B_WA} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">Discuter d'un Accord B2B</a>
            </div>
          </div>
        </section>

        <div className="border-b border-border section-parchment px-6 py-6">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 text-sm font-medium lg:grid-cols-4">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-3"><Dot />{t}</li>
            ))}
          </ul>
        </div>

        <Section>
          <Eyebrow>Qui peut être partenaire</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Apportez-nous un client ou cent. Seven Oak vous soutient.</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {WHO.map(([t, b]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Un consultant individuel sans agence enregistrée peut tout à fait se renseigner.
          </p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Modèles de partenariat</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Trois Façons Flexibles de Travailler Ensemble</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {MODELS.map((m) => (
              <article key={m.name} className="flex flex-col border border-border bg-background p-7 sm:p-8">
                <span className="font-display text-3xl text-gold">{m.n}</span>
                <h3 className="mt-4 text-xl">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{m.body}</p>
                <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">{m.fit}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 border-l-2 border-gold pl-5">
            <p className="font-semibold">Aucun volume minimum de clients n'est requis pour commencer.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              La tarification partenaire est adaptée aux services requis, au volume attendu et au niveau de soutien. Les partenaires peuvent commencer avec un seul client.
            </p>
          </div>
        </Section>

        <Section>
          <Eyebrow>Services disponibles pour les partenaires</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">De la Création à la Conformité Continue</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([group, items]) => (
              <div key={group} className="border border-border p-7">
                <h3 className="text-lg">{group}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-foreground/85">
                  {items.map((i) => <li key={i} className="flex gap-3"><Dot />{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Pourquoi s'associer avec Seven Oak</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Un Partenaire au R-U Conçu pour les Intermédiaires</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([t, b]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Eyebrow>Comment fonctionne le partenariat</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Cinq Étapes Claires</h2>
          <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(([n, t, b]) => (
              <li key={n} className="bg-background p-6">
                <span className="font-display text-2xl text-gold">{n}</span>
                <h3 className="mt-3 text-base">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
        </Section>

        <section className="section-dark border-y border-border px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Expertise pour les non-résidents</p>
              <div className="mt-4 h-px w-16 rule-gold" />
              <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Conçu Autour des Fondateurs Internationaux</h2>
              <p className="mt-6 leading-relaxed text-foreground/85">
                Beaucoup de vos clients vivront en dehors du Royaume-Uni. Nos processus sont conçus pour les directeurs et actionnaires étrangers dès la première demande.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-foreground/90">
              {EXPERTISE.map((t) => <li key={t} className="flex gap-3 border-b border-border pb-4"><Dot />{t}</li>)}
            </ul>
          </div>
        </section>

        <Section>
          <Eyebrow>Conformité &amp; protection des clients</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Des Normes Professionnelles sur Chaque Dossier</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-foreground/85">
            Tous les clients finaux restent soumis aux exigences applicables de KYC, AML, de contrôle des sanctions et d'éligibilité des prestataires de services. Le statut de partenaire ne permet pas de contourner les exigences réglementaires ou de conformité. Les résultats bancaires, des fournisseurs de paiement, fiscaux et réglementaires restent soumis au fournisseur ou à l'autorité concerné.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Seven Oak Prestige Ltd · Company No. 16903092 · ICO Registration No. ZC181349
          </p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-6 mb-10 max-w-3xl text-3xl leading-tight sm:text-4xl">Questions des Partenaires</h2>
          <PartnerFaq />
        </Section>

        <Section id="apply">
          <Eyebrow>Demande de partenariat</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Parlez-nous de Votre Entreprise</h2>
          <p className="mt-4 mb-10 max-w-2xl text-sm text-muted-foreground">Prend environ deux minutes. Nous vous répondons avec les prochaines étapes et une structure proposée.</p>
          <PartnerForm />
        </Section>

        <section className="section-dark px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Vos Clients Ont Besoin de Soutien au R-U. Vous N'avez Pas Besoin de Construire l'Infrastructure Vous-même.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground/85">
              Commencez avec un seul cas ou construisez un partenariat international à long terme avec Seven Oak Prestige.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#apply" className="btn-gold w-full sm:w-auto">Devenir Partenaire Seven Oak</a>
              <a href={B2B_WA} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">Parler avec Notre Équipe Partenariat</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
