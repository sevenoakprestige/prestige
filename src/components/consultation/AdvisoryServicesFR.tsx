import { FaSitemap, FaUniversity, FaChartLine, FaGlobeAmericas, FaExpand } from "react-icons/fa";

const advisoryServices = [
    {
        icon: <FaSitemap className="h-10 w-10" />,
        title: "Structuration d'Entreprise",
        description: "Structuration juridique et opérationnelle pour les entreprises internationales",
    },
    {
        icon: <FaUniversity className="h-10 w-10" />,
        title: "Préparation FinTech et Bancaire",
        description: "Wise, Stripe, Revolut, Payoneer — bien fait, sans forcer",
    },
    {
        icon: <FaChartLine className="h-10 w-10" />,
        title: "Préparation à la Levée de Fonds",
        description: "Avant de parler aux investisseurs, votre structure, votre gouvernance et vos indicateurs doivent être solides",
    },
    {
        icon: <FaGlobeAmericas className="h-10 w-10" />,
        title: "Stratégie d'Entrée sur le Marché",
        description: "Royaume-Uni, Europe, Afrique, Moyen-Orient",
    },
    {
        icon: <FaExpand className="h-10 w-10" />,
        title: "Expansion Internationale",
        description: "Croissance transfrontalière avec la conformité et l'évolutivité à l'esprit",
    },
];

export default function AdvisoryServicesFR() {
    return (
        <section className="section-parchment relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="advisory-heading mb-4 text-3xl font-display font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Sur Quoi Nous Conseillons
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-gold to-[#f3d066]"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {advisoryServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                            </div>

                            <div className="mb-4 flex justify-center">
                                <div className="inline-flex rounded-lg bg-gradient-to-br from-gold/20 to-[#f3d066]/10 p-4 text-gold">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="advisory-title mb-3 text-center text-lg font-display font-bold">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground advisory-description text-center text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-gold/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
