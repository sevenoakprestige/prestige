"use client";

export default function HowEngagementWorksFR() {
    const steps = [
        {
            number: "1",
            title: "Session Stratégique Initiale",
            description: "Nous commençons par une session de travail privée pour comprendre votre modèle économique, votre marché, votre structure et vos objectifs.",
        },
        {
            number: "2",
            title: "Diagnostic Stratégique",
            description: "Nous identifions les lacunes clés à travers la structure, la conformité, la logique financière et la préparation à la croissance.",
        },
        {
            number: "3",
            title: "Feuille de Route Axée sur l'Action",
            description: "Vous recevez des orientations stratégiques claires, des priorités et des prochaines étapes — pas des conseils génériques.",
        },
        {
            number: "4",
            title: "Soutien Optionnel à l'Exécution",
            description: "Si nécessaire, nous soutenons la mise en œuvre par l'intermédiaire de partenaires et de spécialistes.",
        },
    ];

    return (
        <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="engagement-heading mb-4 text-3xl font-display font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Comment Fonctionne l'Engagement
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-gold to-[#f3d066]"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                            </div>

                            <div className="mb-4 flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-[#f3d066]/10 text-2xl font-display font-bold text-gold">
                                    {step.number}
                                </div>
                                <h3 className="engagement-title text-xl font-display font-bold">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="engagement-description leading-relaxed">
                                {step.description}
                            </p>

                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-gold/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="engagement-tagline text-base italic leading-relaxed sm:text-lg lg:text-xl">
                        Il s'agit de conseils axés sur la prise de décision, la structure et l'évolutivité à long terme, et non de solutions à court terme.
                    </p>
                </div>
            </div>
        </section>
    );
}
