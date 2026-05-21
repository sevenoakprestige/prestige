"use client";

import CountrySelector, { Country } from "./CountrySelector";
import { useCountry } from "@/contexts/CountryContext";

interface Testimonial {
    quote: string;
    name: string;
    location: string;
    image: string;
}

const testimonialsData: Record<Country, Testimonial[]> = {
    UK: [
        {
            quote: "Setting up my UK LTD from abroad was seamless and highly professional.",
            name: "Harry T.",
            location: "London, UK",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            quote: "Exceptional support throughout my formation process. Perfect for non-residents.",
            name: "Ada S.",
            location: "Sydney, Australia",
            image: "https://randomuser.me/api/portraits/women/55.jpg"
        },
        {
            quote: "My UK company setup process was smooth and well-structured for business operations.",
            name: "Mark D.",
            location: "Nairobi, Kenya",
            image: "https://randomuser.me/api/portraits/men/53.jpg"
        },
    ],
    USA: [
        {
            quote: "The EIN process was handled perfectly. My Stripe account was approved.",
            name: "Sophia M.",
            location: "Brazil",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            quote: "Fast and compliant Delaware LLC formation. Highly recommended.",
            name: "Richard T.",
            location: "South Africa",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
    ],
    Canada: [
        {
            quote: "Perfect solution for a non-resident incorporating in Canada.",
            name: "Yuki S.",
            location: "Japan",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            quote: "Professional, fast, and fully compliant. Highly recommended.",
            name: "Omar E.",
            location: "UAE",
            image: "https://randomuser.me/api/portraits/men/78.jpg"
        },
    ],
};

export default function Testimonials() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const activeTestimonials = testimonialsData[selectedCountry];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                        TRUSTED BY FOUNDERS
                    </span>
                    <h2 className="testimonials-heading mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                        Client Testimonials
                    </h2>
                    <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Testimonials Grid */}
                <div className={`mt-16 grid grid-cols-1 gap-8 ${activeTestimonials.length === 2
                    ? "md:grid-cols-2 max-w-4xl mx-auto"
                    : "md:grid-cols-3"
                    } lg:gap-10`}>
                    {activeTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Verified Badge */}
                            <div className="mb-6 flex justify-end">
                                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/20 bg-gradient-to-r from-[#d4af37]/10 to-transparent px-3 py-1">
                                    <svg className="h-3 w-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#d4af37]">
                                        Verified
                                    </span>
                                </div>
                            </div>

                            {/* Quote Section with Elegant Depth */}
                            <div className="relative mb-6 flex-grow">
                                <span className="absolute -left-3 -top-7 text-7xl font-serif text-[#d4af37]/15 pointer-events-none select-none">“</span>
                                <p className="font-serif italic text-base md:text-lg leading-relaxed text-foreground/85 relative z-10 pl-2">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Author Information */}
                            <div className="mt-auto border-t border-border/20 pt-5 flex items-center gap-4">
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/30 bg-background/50 p-0.5 shadow-sm">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-serif text-base font-bold text-foreground tracking-wide">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner accent light */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
