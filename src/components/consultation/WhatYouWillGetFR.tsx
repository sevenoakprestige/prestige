"use client";

export default function WhatYouWillGetFR() {
    const deliverables = [
        "Recommandations en matière de structuration d'entreprise.",
        "Stratégie d'entrée sur le marché et d'expansion.",
        "Liste de contrôle de préparation bancaire et FinTech.",
        "Évaluation de la préparation à la levée de fonds.",
        "Orientation du cadre financier et des KPI.",
        "Stratégie en matière de partenaires et de juridictions.",
        "Livré sous forme de résumé PDF concis + liste de contrôle (dans les 24 à 48 heures selon la portée)",
    ];

    return (
        <section className="section-parchment relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="deliverables-heading mb-4 text-3xl font-display font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Avec Quoi Vous Repartirez
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-gold to-[#f3d066]"></div>
                </div>

                <p className="text-muted-foreground deliverables-subtitle mx-auto mb-8 max-w-3xl text-center text-base sm:text-lg">
                    Selon votre situation, les sessions peuvent aboutir à :
                </p>

                <div className="mx-auto mb-8 max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {deliverables.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-xl border border-border/30 bg-card/25 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] ${index === deliverables.length - 1 ? 'sm:col-span-2 text-center' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>
                            
                            <div className={`flex items-start ${index === deliverables.length - 1 ? 'justify-center' : ''}`}>
                                {index !== deliverables.length - 1 && (
                                    <span className="mr-3 mt-1 flex-shrink-0 text-[#d4af37] opacity-80 group-hover:opacity-100 transition-opacity">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                )}
                                <span className="text-base sm:text-lg font-medium text-foreground/90">{item}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-muted-foreground deliverables-tagline mx-auto max-w-3xl text-center text-base italic leading-relaxed sm:text-lg lg:text-xl">
                    Chaque engagement est sur mesure. Pas de modèles, pas de stratégies recyclées.
                </p>
            </div>
        </section>
    );
}
