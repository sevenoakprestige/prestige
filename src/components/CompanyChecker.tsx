'use client';

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSpinner, FaTimes } from 'react-icons/fa';
import { Button } from "./ui/button";

interface CompanyResult {
    title: string;
    company_number: string;
    company_status: string;
    company_type?: string;
    date_of_creation?: string;
}

const COPY = {
  en: {
    title: "Company name check",
    heading: "Check Your Proposed Company Name",
    description: "Search the official Companies House register before you choose a package. Your adviser also checks the name before filing.",
    note: "An indication only — final approval rests with Companies House.",
    label: "Proposed company name",
    placeholder: "Your proposed company name",
    submit: "Check availability",
    loading: "Checking…",
    searchNote: "Searches the live Companies House register. An indication only — final approval rests with the Registrar.",
    error: "Error while checking. Please try again.",
    taken: "This company name is already registered. Please choose another name.",
    highlySimilar: (title: string, match: number) => `A very similar company name exists: "${title}" (${match}% match)`,
    similar: (count: number) => `Name appears available, but ${count} similar company name(s) exist. Consider a more distinctive name.`,
    available: "Company name is available. You can register it now.",
    freeHelp: "The name looks available. Names that are too similar to an existing company, or that use sensitive words, may still be refused.",
    takenHelp: "You will need a distinguishable name. Your adviser can suggest compliant alternatives at no cost.",
    similarNames: "Similar names on the register",
    cta: "Continue to packages"
  },
  fr: {
    title: "Disponibilité du nom",
    heading: "Vérifiez le nom proposé pour votre société",
    description: "Recherchez sur le registre officiel du Companies House avant de choisir une formule. Votre conseiller vérifie également le nom avant le dépôt.",
    note: "Indication uniquement — l'approbation finale appartient à Companies House.",
    label: "Nom de votre future société",
    placeholder: "Nom de votre future société",
    submit: "Vérifier le nom",
    loading: "Vérification…",
    searchNote: "Recherche effectuée sur le registre Companies House. La disponibilité affichée est indicative : la décision finale appartient à Companies House.",
    error: "Une erreur est survenue. Merci de réessayer.",
    taken: "Ce nom de société est déjà enregistré. Veuillez en choisir un autre.",
    highlySimilar: (title: string, match: number) => `Un nom très similaire existe : "${title}" (${match}% match)`,
    similar: (count: number) => `Le nom semble disponible, mais ${count} nom(s) similaire(s) existe(nt). Considérez un nom plus distinctif.`,
    available: "Le nom est disponible. Vous pouvez l'enregistrer maintenant.",
    freeHelp: "Le nom semble disponible. Un nom trop proche d’une société existante, ou comportant des mots sensibles, peut néanmoins être refusé.",
    takenHelp: "Il vous faudra un nom distinguable. Votre conseiller peut vous proposer des alternatives conformes, sans frais.",
    similarNames: "Noms similaires au registre",
    cta: "Voir les offres"
  },
  de: {
    title: "Namensprüfung",
    heading: "Ist Ihr Wunschname noch frei?",
    description: "Prüfen Sie die Verfügbarkeit in Echtzeit direkt im britischen Handelsregister.",
    note: "Nur eine unverbindliche Indikation – die endgültige Entscheidung trifft Companies House.",
    label: "Gewünschter Firmenname",
    placeholder: "Ihr gewünschter Firmenname",
    submit: "Verfügbarkeit prüfen",
    loading: "Wird geprüft…",
    searchNote: "Durchsucht das offizielle Register von Companies House. Die Verfügbarkeit ist unverbindlich – die Entscheidung liegt bei Companies House.",
    error: "Fehler bei der Prüfung. Bitte versuchen Sie es erneut.",
    taken: "Dieser Firmenname ist bereits vergeben. Bitte wählen Sie einen anderen Namen.",
    highlySimilar: (title: string, match: number) => `Ein sehr ähnlicher Name existiert bereits: „${title}“ (${match}% Übereinstimmung)`,
    similar: (count: number) => `Der Name scheint frei zu sein, es existieren jedoch ${count} ähnliche(r) Name(n). Wir empfehlen einen unterscheidbareren Namen.`,
    available: "Der Firmenname ist verfügbar. Sie können ihn jetzt registrieren.",
    freeHelp: "Der Name scheint frei zu sein. Namen, die bestehenden Unternehmen zu ähnlich sind oder sensible Begriffe enthalten, können dennoch abgelehnt werden.",
    takenHelp: "Sie benötigen einen unterscheidbaren Namen. Ihr Berater schlägt Ihnen gerne kostenfrei Alternativen vor.",
    similarNames: "Ähnliche Namen im Register",
    cta: "Zu den Paketen"
  }
} as const;

import { useTranslation } from "@/i18n/TranslationContext";

type PlanName = 'Starter' | 'Prestige' | 'Elite';

const PLAN_DATA: Record<PlanName, { tier: number; price: number; href: string }> = {
  Starter: { tier: 0, price: 199, href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i" },
  Prestige: { tier: 1, price: 299, href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a" },
  Elite: { tier: 2, price: 399, href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402" },
};

const RINGS_COPY = {
  en: {
    eyebrow: "Explore what your company receives",
    title: "Your company, ring by ring.",
    intro: "Enter a proposed name and choose Starter, Prestige or Elite. Each gold ring represents a service included in your chosen package.",
    sideNote: "A clearer way to compare your first-year setup.",
    sideNoteStrong: "Prices include the £100 Companies House filing fee.",
    svgTitle: "Interactive company formation inclusions",
    svgDesc: "Concentric rings show which services are included in the selected formation package.",
    defaultName: "YOUR COMPANY",
    keyActive: "Included in this package",
    keyInactive: "Available in a higher package",
    caption: "Gold rings show package inclusions, not Companies House name availability.",
    nameLabel: "Your proposed company name",
    suffixLabel: "Company suffix",
    choosePackage: "Choose your formation package",
    packageGroup: "Select company formation package",
    included: "What is included",
    countText: (n: number, total: number) => `${n} of ${total} services included`,
    availableWith: (tier: number) => `Available with ${tier === 1 ? "Prestige or Elite" : "Elite"}`,
    feedbackIdle: (plan: string, n: number, total: number) =>
      `${plan} selected: ${n} services highlighted in gold.${n < total ? " The remaining services are available in higher packages." : " Every service is included."}`,
    choose: (plan: string, price: number) => `Choose ${plan} — £${price} →`,
    ask: "Ask an adviser on WhatsApp",
    askMessage: "Hello Seven Oak Prestige, I would like help choosing a company formation package.",
    renewal: "Clear year-two address pricing:",
    renewalText: "Registered Office £59/year · Director Service Address £35/year · Virtual Business Address £150/year. Accounting and statutory filings are separate unless expressly included.",
    descriptions: {
      Starter: "For founders with their own eligible UK statutory address arrangements.",
      Prestige: "Includes a London registered office and director service address for 12 months.",
      Elite: "Our most comprehensive package: London address services, virtual business address, identity-verification assistance and banking application preparation.",
    } as Record<PlanName, string>,
    services: [
      ["Company name review", "Before filing", 0],
      ["UK company formation and Companies House filing", "£100 digital filing fee included", 0],
      ["Digital company documents", "Following incorporation", 0],
      ["Key compliance reminders", "Throughout the year", 0],
      ["London Registered Office", "First 12 months", 1],
      ["Director Service Address", "First 12 months", 1],
      ["Virtual Business Address", "First 12 months", 2],
      ["Identity-verification assistance", "One director included", 2],
      ["Banking and EMI readiness", "Application preparation; providers decide independently", 2],
    ] as Array<[string, string, number]>,
  },
  fr: {
    eyebrow: "Découvrez ce que reçoit votre société",
    title: "Votre société, anneau par anneau.",
    intro: "Saisissez un nom et choisissez Starter, Prestige ou Elite. Chaque anneau doré représente un service inclus dans la formule choisie.",
    sideNote: "Une façon plus claire de comparer votre première année.",
    sideNoteStrong: "Les prix incluent les 100 £ de frais de dépôt Companies House.",
    svgTitle: "Services inclus dans la création de société",
    svgDesc: "Des anneaux concentriques montrent les services inclus dans la formule sélectionnée.",
    defaultName: "VOTRE SOCIÉTÉ",
    keyActive: "Inclus dans cette formule",
    keyInactive: "Disponible dans une formule supérieure",
    caption: "Les anneaux dorés indiquent le contenu de la formule, pas la disponibilité du nom auprès de Companies House.",
    nameLabel: "Nom proposé pour votre société",
    suffixLabel: "Suffixe de la société",
    choosePackage: "Choisissez votre formule",
    packageGroup: "Sélectionner la formule de création de société",
    included: "Ce qui est inclus",
    countText: (n: number, total: number) => `${n} services inclus sur ${total}`,
    availableWith: (tier: number) => `Disponible avec ${tier === 1 ? "Prestige ou Elite" : "Elite"}`,
    feedbackIdle: (plan: string, n: number, total: number) =>
      `${plan} sélectionnée : ${n} services en doré.${n < total ? " Les autres services sont disponibles dans les formules supérieures." : " Tous les services sont inclus."}`,
    choose: (plan: string, price: number) => `Choisir ${plan} — ${price} £ →`,
    ask: "Poser une question à un conseiller sur WhatsApp",
    askMessage: "Bonjour Seven Oak Prestige, j'aimerais de l'aide pour choisir une formule de création de société.",
    renewal: "Tarifs d'adresse de l'année 2 :",
    renewalText: "Siège social 59 £/an · Adresse de service du dirigeant 35 £/an · Adresse commerciale virtuelle 150 £/an. La comptabilité et les formalités légales sont facturées séparément, sauf mention expresse.",
    descriptions: {
      Starter: "Pour les fondateurs disposant déjà d'une adresse légale britannique éligible.",
      Prestige: "Comprend un siège social à Londres et une adresse de service du dirigeant pendant 12 mois.",
      Elite: "Notre formule la plus complète : adresses à Londres, adresse commerciale virtuelle, aide à la vérification d'identité et préparation de la demande bancaire.",
    } as Record<PlanName, string>,
    services: [
      ["Vérification du nom de la société", "Avant le dépôt", 0],
      ["Création de société au Royaume-Uni et dépôt Companies House", "Frais de dépôt numérique de 100 £ inclus", 0],
      ["Documents numériques de la société", "Après l'immatriculation", 0],
      ["Rappels de conformité essentiels", "Tout au long de l'année", 0],
      ["Siège social à Londres", "12 premiers mois", 1],
      ["Adresse de service du dirigeant", "12 premiers mois", 1],
      ["Adresse commerciale virtuelle", "12 premiers mois", 2],
      ["Aide à la vérification d'identité", "Un dirigeant inclus", 2],
      ["Préparation bancaire et EMI", "Préparation du dossier ; chaque prestataire décide indépendamment", 2],
    ] as Array<[string, string, number]>,
  },
};

export default function CompanyChecker({
    lang,
    targetHref = "#pricing",
    variant = "classic",
}: {
    lang?: "en" | "fr" | "de";
    targetHref?: string;
    /** "rings" renders the "Your company, ring by ring" layout (EN/FR). */
    variant?: "classic" | "rings";
} = {}) {
    const { locale } = useTranslation();
    const activeLang = lang || (locale in COPY ? locale : 'en');
    const t = COPY[activeLang as keyof typeof COPY] || COPY.en;
    const [companyName, setCompanyName] = useState('');
    const [result, setResult] = useState<{
        type: 'success' | 'error' | 'warning' | 'info' | null;
        message: string;
        companies?: CompanyResult[];
        totalResults?: number;
    }>({ type: null, message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [suffix, setSuffix] = useState('LTD');
    const [plan, setPlan] = useState<PlanName>('Prestige');

    // Enhanced normalization - removes all legal entity indicators
    function normalizeCompanyName(name: string): string {
        return name
            .toLowerCase()
            .trim()
            // Remove all common UK legal suffixes
            .replace(/\b(ltd|limited|plc|p\.l\.c\.?|llp|limited liability partnership|public limited company|cic|community interest company)\b/gi, '')
            // Handle special characters consistently
            .replace(/[.,\-–—]/g, ' ')
            .replace(/&/g, 'and')
            // Normalize whitespace
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Calculate Levenshtein distance for precise similarity measurement
    function levenshteinDistance(str1: string, str2: string): number {
        const matrix: number[][] = [];

        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        return matrix[str2.length][str1.length];
    }

    // Calculate similarity score (0-1 range)
    function calculateSimilarity(str1: string, str2: string): number {
        const s1 = normalizeCompanyName(str1);
        const s2 = normalizeCompanyName(str2);

        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;

        if (longer.length === 0) return 1.0;

        const editDistance = levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    // Generate name variations for comprehensive matching
    function generateNameVariations(name: string): string[] {
        const normalized = normalizeCompanyName(name);
        const variations = new Set<string>([normalized]);

        // Add spaceless version to catch acronyms (e.g., "wpp" matches "w p p")
        const spaceless = normalized.replace(/\s+/g, '');
        if (spaceless !== normalized) {
            variations.add(spaceless);
        }

        // & vs "and" variations
        variations.add(normalized.replace(/\band\b/g, '&'));
        variations.add(normalized.replace(/&/g, 'and'));

        // Number to word conversions
        const numberMap: { [key: string]: string } = {
            '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
            '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
        };

        Object.entries(numberMap).forEach(([num, word]) => {
            if (normalized.includes(num)) {
                variations.add(normalized.replace(new RegExp(num, 'g'), word));
            }
            if (normalized.includes(word)) {
                variations.add(normalized.replace(new RegExp(`\\b${word}\\b`, 'g'), num));
            }
        });

        // "2" vs "to" vs "too"
        if (normalized.includes('2')) {
            variations.add(normalized.replace(/2/g, 'to'));
            variations.add(normalized.replace(/2/g, 'too'));
        }
        if (normalized.includes('to')) {
            variations.add(normalized.replace(/\bto\b/g, '2'));
        }

        // "4" vs "for"
        if (normalized.includes('4')) {
            variations.add(normalized.replace(/4/g, 'for'));
        }
        if (normalized.includes('for')) {
            variations.add(normalized.replace(/\bfor\b/g, '4'));
        }

        // Generate spaceless versions of all variations created so far
        // This ensures "wpp" matches "w & p p", "w and p p", etc.
        const currentVariations = Array.from(variations);
        currentVariations.forEach(v => {
            const spacelessVariation = v.replace(/\s+/g, '');
            if (spacelessVariation !== v) {
                variations.add(spacelessVariation);
            }
        });

        return Array.from(variations);
    }

    // Check if names are legally equivalent
    function areLegallyEquivalent(name1: string, name2: string): boolean {
        const variations1 = generateNameVariations(name1);
        const variations2 = generateNameVariations(name2);

        // Check for exact match in any variation
        for (const v1 of variations1) {
            for (const v2 of variations2) {
                if (v1 === v2) return true;

                // Very high similarity threshold
                const similarity = calculateSimilarity(v1, v2);
                if (similarity >= 0.95) return true;
            }
        }

        return false;
    }

    // Helper function to detect if a string looks like an acronym
    function isLikelyAcronym(str: string): boolean {
        // Check if it's a short string (2-5 chars) with mostly letters and no spaces
        const trimmed = str.trim();
        return trimmed.length >= 2 && trimmed.length <= 5 &&
            /^[a-zA-Z0-9]+$/.test(trimmed) &&
            !/\s/.test(trimmed);
    }

    // Helper function to add spaces between each character
    function spaceOutAcronym(str: string): string {
        return str.split('').join(' ').toUpperCase();
    }

    // Perform multi-strategy search for comprehensive availability check
    async function performComprehensiveSearch(searchName: string): Promise<{
        standardResults: any[];
        restrictedResults: any[];
        alphabeticalResults: any[];
    }> {
        const fullName = `${searchName} ${suffix}`;
        const results = {
            standardResults: [] as any[],
            restrictedResults: [] as any[],
            alphabeticalResults: [] as any[]
        };

        // Determine if we should also search for a spaced-out version
        const searchVariations = [fullName];
        if (isLikelyAcronym(searchName)) {
            const spacedOut = `${spaceOutAcronym(searchName)} ${suffix}`;
            searchVariations.push(spacedOut);
            console.log(`Detected potential acronym. Searching for both: "${fullName}" and "${spacedOut}"`);
        }

        try {
            // Search for all variations
            for (const searchVariation of searchVariations) {
                // Strategy 1: Standard search with active companies restriction
                const standardUrl = `/api/check-company?name=${encodeURIComponent(searchVariation)}&restrictions=active-companies`;
                const standardResponse = await fetch(standardUrl);
                if (standardResponse.ok) {
                    const data = await standardResponse.json();
                    if (data.items) {
                        results.standardResults.push(...data.items);
                    }
                }

                // Strategy 2: Search with legally-equivalent-company-name restriction
                // This is the official Companies House method for name availability checks
                const restrictedUrl = `/api/check-company?name=${encodeURIComponent(searchVariation)}&restrictions=active-companies legally-equivalent-company-name`;
                const restrictedResponse = await fetch(restrictedUrl);
                if (restrictedResponse.ok) {
                    const data = await restrictedResponse.json();
                    if (data.items) {
                        results.restrictedResults.push(...data.items);
                    }
                }

                // Strategy 3: Alphabetical search for exact matches
                // This helps catch companies that might be missed by fuzzy search
                const searchBase = searchVariation.replace(` ${suffix}`, '');
                const alphabeticalUrl = `/api/check-company?name=${encodeURIComponent(searchBase)}&search_type=alphabetical`;
                const alphabeticalResponse = await fetch(alphabeticalUrl);
                if (alphabeticalResponse.ok) {
                    const data = await alphabeticalResponse.json();
                    if (data.items) {
                        results.alphabeticalResults.push(...data.items);
                    }
                }
            }

        } catch (error) {
            console.error('Search strategy error:', error);
        }

        return results;
    }

    // Analyze search results with multi-tier matching
    function analyzeAvailability(
        searchName: string,
        standardResults: any[],
        restrictedResults: any[],
        alphabeticalResults: any[]
    ): {
        available: boolean;
        matchType: 'exact' | 'legal-equivalent' | 'highly-similar' | 'similar' | 'available';
        matchedCompany: any | null;
        similarCompanies: any[];
    } {
        const fullName = `${searchName} ${suffix}`;
        const normalizedSearch = normalizeCompanyName(fullName);

        // Combine and deduplicate all results
        const allCompanies = new Map<string, any>();
        [...restrictedResults, ...standardResults, ...alphabeticalResults].forEach(company => {
            if (company.company_status?.toLowerCase() === 'active') {
                allCompanies.set(company.company_number, company);
            }
        });

        const activeCompanies = Array.from(allCompanies.values());

        if (activeCompanies.length === 0) {
            return {
                available: true,
                matchType: 'available',
                matchedCompany: null,
                similarCompanies: []
            };
        }

        // Tier 1: Exact match (100% after normalization)
        for (const company of activeCompanies) {
            const normalizedCompany = normalizeCompanyName(company.title);
            if (normalizedSearch === normalizedCompany) {
                return {
                    available: false,
                    matchType: 'exact',
                    matchedCompany: company,
                    similarCompanies: []
                };
            }
        }

        // Tier 2: Legally equivalent (95-99% similarity or variation match)
        for (const company of activeCompanies) {
            if (areLegallyEquivalent(fullName, company.title)) {
                return {
                    available: false,
                    matchType: 'legal-equivalent',
                    matchedCompany: company,
                    similarCompanies: []
                };
            }
        }

        // Tier 3: Highly similar (90-94% similarity)
        const highlySimilar = activeCompanies
            .map(company => ({
                company,
                similarity: calculateSimilarity(fullName, company.title)
            }))
            .filter(item => item.similarity >= 0.90 && item.similarity < 0.95)
            .sort((a, b) => b.similarity - a.similarity);

        if (highlySimilar.length > 0) {
            return {
                available: false,
                matchType: 'highly-similar',
                matchedCompany: highlySimilar[0].company,
                similarCompanies: highlySimilar.slice(1, 3).map(item => item.company)
            };
        }

        // Tier 4: Similar (70-89% similarity) - Warning but potentially available
        const similar = activeCompanies
            .map(company => ({
                company,
                similarity: calculateSimilarity(fullName, company.title)
            }))
            .filter(item => item.similarity >= 0.70 && item.similarity < 0.90)
            .sort((a, b) => b.similarity - a.similarity);

        if (similar.length > 0) {
            return {
                available: true,
                matchType: 'similar',
                matchedCompany: null,
                similarCompanies: similar.slice(0, 3).map(item => item.company)
            };
        }

        return {
            available: true,
            matchType: 'available',
            matchedCompany: null,
            similarCompanies: []
        };
    }

    const handleCheckAvailability = async () => {
        if (!companyName.trim()) {
            setResult({
                type: 'error',
                message: 'Please enter a company name.',
            });
            return;
        }

        setIsLoading(true);
        setResult({ type: null, message: '' });

        try {
            // Perform comprehensive multi-strategy search
            const { standardResults, restrictedResults, alphabeticalResults } =
                await performComprehensiveSearch(companyName);

            // Analyze all results
            const analysis = analyzeAvailability(
                companyName,
                standardResults,
                restrictedResults,
                alphabeticalResults
            );

            // Generate user-friendly messages
            switch (analysis.matchType) {
                case 'exact':
                    setResult({
                        type: 'error',
                        message: `This company name is already registered. Please choose another name.`,
                        companies: [analysis.matchedCompany],
                    });
                    break;

                case 'legal-equivalent':
                    setResult({
                        type: 'error',
                        message: `This company name is already registered. Please choose another name.`,
                        companies: [analysis.matchedCompany],
                    });
                    break;

                case 'highly-similar':
                    setResult({
                        type: 'error',
                        message: `A very similar company name exists: "${analysis.matchedCompany.title}" (${Math.round(calculateSimilarity(companyName + ' ' + suffix, analysis.matchedCompany.title) * 100)}% match)`,
                        companies: [analysis.matchedCompany, ...analysis.similarCompanies],
                    });
                    break;

                case 'similar':
                    setResult({
                        type: 'warning',
                        message: `Name appears available, but ${analysis.similarCompanies.length} similar company name(s) exist. Consider a more distinctive name.`,
                        companies: analysis.similarCompanies,
                    });
                    break;

                case 'available':
                default:
                    setResult({
                        type: 'success',
                        message: 'Company name is available. You can register it now.',
                    });
                    break;
            }

        } catch (error) {
            setResult({
                type: 'error',
                message: 'Error while checking. Please try again.',
            });
            console.error('Availability check error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const resultsBlock = result.type && (
                            <div className="mt-8 border-t border-border pt-6">
                                <p className={`font-sans text-base font-semibold ${result.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                    {result.message}
                                </p>
                                
                                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                                    {result.type === 'success' 
                                        ? t.freeHelp
                                        : t.takenHelp}
                                </p>

                                {result.companies && result.companies.length > 0 && (
                                    <div className="mt-6">
                                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold">
                                            {t.similarNames}
                                        </p>
                                        <ul className="mt-4 divide-y divide-border border-y border-border">
                                            {result.companies.map((c, i) => (
                                                <li key={i} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                                                    <a
                                                        href={`https://find-and-update.company-information.service.gov.uk/company/${c.company_number}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-sm font-medium transition-colors hover:text-gold-soft"
                                                    >
                                                        {c.title}
                                                    </a>
                                                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                                                        {c.company_number}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <Button asChild variant="ghost" className="mt-8">
                                    <a href={targetHref}>{t.cta}</a>
                                </Button>
                            </div>
    );

    if (variant === 'rings') {
        const rc = activeLang === 'fr' ? RINGS_COPY.fr : RINGS_COPY.en;
        const services = rc.services;
        const tier = PLAN_DATA[plan].tier;
        const includedCount = services.filter((s) => s[2] <= tier).length;
        const trimmed = companyName.trim().replace(/\s+/g, ' ').slice(0, 35);
        const nameFont = trimmed.length > 22 ? 10 : trimmed.length > 15 ? 12 : 15;
        const whatsappHref = `https://wa.me/447447488755?text=${encodeURIComponent(rc.askMessage)}`;

        return (
            <section id="name-check" className="section-dark px-6 py-16 sm:py-24 scroll-mt-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <p className="eyebrow">{rc.eyebrow}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                            <h2 className="font-display mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                                {rc.title}
                            </h2>
                            <p className="max-w-xl leading-relaxed text-muted-foreground">{rc.intro}</p>
                        </div>
                        <p className="max-w-[17rem] text-sm text-muted-foreground">
                            {rc.sideNote}
                            <br />
                            <strong className="text-gold-soft">{rc.sideNoteStrong}</strong>
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        {/* Ring visual */}
                        <div className="rounded-xl border border-border bg-card p-4 sm:p-6 lg:sticky lg:top-28">
                            <div className="mx-auto max-w-[500px]">
                                <svg
                                    viewBox="0 0 420 420"
                                    role="img"
                                    aria-labelledby="oakSvgTitle oakSvgDesc"
                                    className="block h-auto w-full"
                                >
                                    <title id="oakSvgTitle">{rc.svgTitle}</title>
                                    <desc id="oakSvgDesc">{rc.svgDesc}</desc>
                                    <g>
                                        {services.map((s, i) => {
                                            const active = s[2] <= tier;
                                            return (
                                                <circle
                                                    key={i}
                                                    cx={210}
                                                    cy={210}
                                                    r={62 + i * 17}
                                                    fill="none"
                                                    stroke={active ? '#e2bb53' : '#43536a'}
                                                    strokeWidth={active ? 3 : 1.5}
                                                    opacity={active ? 1 : 0.2}
                                                    style={{ transition: 'stroke .25s ease, opacity .25s ease, stroke-width .25s ease' }}
                                                />
                                            );
                                        })}
                                    </g>
                                    <text
                                        x={210}
                                        y={207}
                                        textAnchor="middle"
                                        fill="#fff"
                                        fontFamily="Georgia, serif"
                                        fontSize={nameFont}
                                    >
                                        {(trimmed || rc.defaultName).toUpperCase()}
                                    </text>
                                    <text x={210} y={228} textAnchor="middle" fill="#D7B65F" fontSize={11} letterSpacing={3}>
                                        {suffix.toUpperCase()}
                                    </text>
                                </svg>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-2">
                                    <span className="inline-block h-0.5 w-5" style={{ background: '#e2bb53' }} /> {rc.keyActive}
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <span className="inline-block h-0.5 w-5 opacity-40" style={{ background: '#43536a' }} /> {rc.keyInactive}
                                </span>
                            </div>
                            <p className="mt-3 text-center text-xs text-muted-foreground">{rc.caption}</p>
                        </div>

                        {/* Controls */}
                        <div className="section-parchment rounded-xl bg-background p-5 text-foreground sm:p-8">
                            <label htmlFor="company-name" className="mb-2 block text-sm font-bold">
                                {rc.nameLabel}
                            </label>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <div className="relative flex flex-1">
                                    <input
                                        id="company-name"
                                        type="text"
                                        maxLength={65}
                                        value={companyName}
                                        onChange={(e) => {
                                            setCompanyName(e.target.value);
                                            if (result.type) setResult({ type: null, message: '' });
                                        }}
                                        onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleCheckAvailability()}
                                        disabled={isLoading}
                                        placeholder={t.placeholder}
                                        autoComplete="organization"
                                        className="w-full border border-border bg-background px-4 py-3.5 pr-[85px] text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                                    />
                                    <div className="absolute bottom-0 right-0 top-0 flex w-[85px] items-center justify-center border-l border-border">
                                        <select
                                            value={suffix}
                                            aria-label={rc.suffixLabel}
                                            onChange={(e) => setSuffix(e.target.value)}
                                            className="h-full w-full cursor-pointer appearance-none bg-transparent px-3 text-sm font-medium text-foreground outline-none transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                                            disabled={isLoading}
                                        >
                                            <option value="LTD" className="bg-background text-foreground">LTD</option>
                                            <option value="Limited" className="bg-background text-foreground">Limited</option>
                                            <option value="PLC" className="bg-background text-foreground">PLC</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <Button onClick={handleCheckAvailability} className="shrink-0" disabled={isLoading}>
                                    {isLoading ? t.loading : t.submit}
                                </Button>
                            </div>
                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.searchNote}</p>

                            {resultsBlock}

                            <div className="mb-2 mt-7 text-sm font-bold">{rc.choosePackage}</div>
                            <div role="group" aria-label={rc.packageGroup} className="grid grid-cols-3 gap-2">
                                {(Object.keys(PLAN_DATA) as PlanName[]).map((name) => {
                                    const selected = name === plan;
                                    return (
                                        <button
                                            key={name}
                                            type="button"
                                            aria-pressed={selected}
                                            onClick={() => setPlan(name)}
                                            className={`rounded-md border px-1 py-3 text-xs font-bold transition-colors sm:text-sm ${
                                                selected
                                                    ? 'border-[#d9b64e] text-[#102037] shadow-[0_0_0_2px_#d9b64e55]'
                                                    : 'border-border bg-background text-foreground hover:border-gold'
                                            }`}
                                            style={selected ? { background: '#d9b64e' } : undefined}
                                        >
                                            {name}
                                            <strong className="mt-0.5 block text-base sm:text-xl">£{PLAN_DATA[name].price}</strong>
                                        </button>
                                    );
                                })}
                            </div>

                            <p
                                aria-live="polite"
                                className="min-h-[4.5rem] border-b border-border py-4 text-sm text-muted-foreground"
                            >
                                {rc.descriptions[plan]}
                            </p>

                            <div className="mb-1 mt-4 flex items-baseline justify-between gap-2">
                                <h3 className="text-lg font-semibold">{rc.included}</h3>
                                <span aria-live="polite" className="text-xs text-muted-foreground">
                                    {rc.countText(includedCount, services.length)}
                                </span>
                            </div>
                            <div>
                                {services.map((s, i) => {
                                    const active = s[2] <= tier;
                                    return (
                                        <div
                                            key={i}
                                            className={`flex items-start gap-3 border-b border-border/60 py-3 text-sm transition-opacity ${
                                                active ? '' : 'opacity-40'
                                            }`}
                                        >
                                            <span
                                                className={`w-[18px] flex-none font-black ${
                                                    active ? 'text-green-700 dark:text-green-400' : 'text-muted-foreground'
                                                }`}
                                            >
                                                {active ? '✓' : '○'}
                                            </span>
                                            <span className="flex-1">
                                                <strong className="block font-semibold leading-snug">{s[0]}</strong>
                                                <small className="mt-0.5 block text-muted-foreground">
                                                    {active ? s[1] : rc.availableWith(s[2])}
                                                </small>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div
                                role="status"
                                aria-live="polite"
                                className="mt-4 border-l-[3px] bg-card px-4 py-2.5 text-sm text-muted-foreground"
                                style={{ borderColor: '#d9b64e' }}
                            >
                                {rc.feedbackIdle(plan, includedCount, services.length)}
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <Button asChild className="flex-1">
                                    <a href={PLAN_DATA[plan].href} target="_blank" rel="noopener noreferrer">
                                        {rc.choose(plan, PLAN_DATA[plan].price)}
                                    </a>
                                </Button>
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-gold-soft underline underline-offset-4 hover:no-underline"
                                >
                                    {rc.ask}
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
                        <strong className="text-gold-soft">{rc.renewal}</strong> {rc.renewalText}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="name-check" className="px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <div>
                            <p className="eyebrow">{t.title}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.heading}</h2>
                        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                            {t.description}
                        </p>
                        <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
                            {t.note}
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <label htmlFor="company-name" className="sr-only">
                                {t.label}
                            </label>
                            
                            <div className="flex flex-1 relative">
                                <input
                                    id="company-name"
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => {
                                        setCompanyName(e.target.value);
                                        if (result.type) setResult({ type: null, message: '' });
                                    }}
                                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleCheckAvailability()}
                                    disabled={isLoading}
                                    placeholder={t.placeholder}
                                    autoComplete="organization"
                                    className="w-full border border-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold pr-[85px]"
                                />
                                {/* Suffix Select */}
                                <div className="absolute right-0 top-0 bottom-0 w-[85px] border-l border-border flex items-center justify-center">
                                    <select
                                        value={suffix}
                                        aria-label="Company name suffix"
                                        onChange={(e) => setSuffix(e.target.value)}
                                        className="appearance-none bg-transparent h-full w-full px-3 text-sm font-medium text-foreground outline-none cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                        disabled={isLoading}
                                    >
                                        <option value="LTD" className="text-foreground bg-background">LTD</option>
                                        <option value="Limited" className="text-foreground bg-background">Limited</option>
                                        <option value="PLC" className="text-foreground bg-background">PLC</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <Button 
                                onClick={handleCheckAvailability} 
                                className="shrink-0" 
                                disabled={isLoading}
                            >
                                {isLoading ? t.loading : t.submit}
                            </Button>
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                            {t.searchNote}
                        </p>

                        {resultsBlock}
                    </div>
                </div>
            </div>
        </section>
    );
}