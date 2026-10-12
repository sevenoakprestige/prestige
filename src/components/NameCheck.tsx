"use client";

import { useState } from "react";

const COPY = {
  en: {
    label: "Proposed company name",
    placeholder: "Your proposed company name",
    submit: "Check availability",
    loading: "Checking…",
    note: "Searches the live Companies House register. An indication only — final approval rests with the Registrar.",
    error: "Something went wrong. Please try again.",
    taken: (q: string) => `“${q}” already appears on the register.`,
    free: (q: string) => `No exact match for “${q}” on the register.`,
    takenHelp:
      "You will need a distinguishable name. Your adviser can suggest compliant alternatives at no cost.",
    freeHelp:
      "The name looks available. Names that are too similar to an existing company, or that use sensitive words, may still be refused.",
    similar: "Similar names on the register",
    cta: "Continue to packages",
  },
  fr: {
    label: "Nom de votre future société",
    placeholder: "Nom de votre future société",
    submit: "Vérifier le nom",
    loading: "Vérification…",
    note: "Recherche effectuée sur le registre Companies House. La disponibilité affichée est indicative : la décision finale appartient à Companies House.",
    error: "Une erreur est survenue. Merci de réessayer.",
    taken: (q: string) => `« ${q} » figure déjà au registre.`,
    free: (q: string) => `Aucune correspondance exacte pour « ${q} » au registre.`,
    takenHelp:
      "Il vous faudra un nom distinguable. Votre conseiller peut vous proposer des alternatives conformes, sans frais.",
    freeHelp:
      "Le nom semble disponible. Un nom trop proche d’une société existante, ou comportant des mots sensibles, peut néanmoins être refusé.",
    similar: "Noms similaires au registre",
    cta: "Voir les offres",
  },
} as const;

export function NameCheck({ lang = "en" }: { lang?: "en" | "fr" }) {
  const t = COPY[lang];
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<{
    taken: boolean;
    query: string;
    matches: Array<{ name: string; number: string; meta: string; url: string }>;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return;
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(`/api/check-company?name=${encodeURIComponent(name.trim())}`);
      if (!res.ok) throw new Error(t.error);
      const data = await res.json();
      const items = data.items || [];
      const exact = items.some(
        (i: { title?: string }) =>
          i.title?.toLowerCase().trim() === name.toLowerCase().trim()
      );
      setResult({
        taken: exact,
        query: name.trim(),
        matches: items.slice(0, 5).map((i: { title?: string; company_number?: string; company_status?: string }) => ({
          name: i.title || "",
          number: i.company_number || "",
          meta: i.company_status || "",
          url: `https://find-and-update.company-information.service.gov.uk/company/${i.company_number}`,
        })),
      });
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.error);
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="company-name" className="sr-only">
          {t.label}
        </label>
        <input
          id="company-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.placeholder}
          autoComplete="organization"
          className="w-full border border-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
        />
        <button type="submit" className="btn-gold shrink-0" disabled={status === "loading"}>
          {status === "loading" ? t.loading : t.submit}
        </button>
      </form>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.note}</p>

      {status === "error" && error && (
        <p className="mt-6 border-l-2 border-destructive pl-4 text-sm text-foreground">{error}</p>
      )}

      {status === "done" && result && (
        <div className="mt-8 border-t border-border pt-6">
          <p className="font-sans text-base font-bold text-foreground">
            {result.taken ? t.taken(result.query) : t.free(result.query)}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {result.taken ? t.takenHelp : t.freeHelp}
          </p>

          {result.matches.length > 0 && (
            <div className="mt-6">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">{t.similar}</p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {result.matches.map((c) => (
                  <li key={c.number} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold transition-colors hover:text-gold-soft"
                    >
                      {c.name}
                    </a>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {c.meta}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a href="#tarifs" className="btn-ghost mt-8">
            {t.cta}
          </a>
        </div>
      )}
    </div>
  );
}
export default NameCheck;
