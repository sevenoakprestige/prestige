'use client';

import Image from 'next/image';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    const cards = [
        {
            icon: (
                <Image src="/email.png" alt="Email" width={40} height={40} className="w-7 h-7 md:w-10 md:h-10" />
            ),
            heading: "EMAIL US",
            link: { href: "mailto:contact@sevenoakprestige.com", label: "contact@sevenoakprestige.com", external: false },
            desc: "Send us an email anytime — our team will respond within 24 hours.",
        },
        {
            icon: (
                <FaWhatsapp className="w-7 h-7 md:w-10 md:h-10" />
            ),
            heading: "WHATSAPP",
            link: { href: "https://wa.me/447447488755", label: "+44 7447 488755", external: true },
            desc: "Chat with our team instantly for quick guidance. Available 24/7.",
        },
        {
            icon: (
                <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8" />
            ),
            heading: "CALL US",
            link: { href: "tel:+442045780726", label: "+44 20 4578 0726", external: false },
            desc: "UK-based support for business enquiries.",
        },
    ];

    return (
        <section id="contact" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration — same as Testimonials */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header — same as Testimonials header */}
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                        REACH OUT
                    </span>
                    <h2 className="contact-main-title mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                        Get In Touch
                    </h2>
                    <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    <p className="mt-4 text-muted-foreground">
                        We&apos;re here to help you with all your company formation needs.
                    </p>
                </div>

                {/* Cards Grid — same card classes as Testimonials */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto lg:gap-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Corner accent — same as Testimonials */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>

                            {/* Icon */}
                            <div className="mb-6 flex justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Heading */}
                            <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                                {card.heading}
                            </h3>

                            {/* Link */}
                            <a
                                href={card.link.href}
                                className="mb-4 block text-lg font-semibold text-foreground transition-colors duration-300 hover:text-[#d4af37] break-words"
                                {...(card.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {card.link.label}
                            </a>

                            {/* Description — same as Testimonials quote text */}
                            <p className="mt-auto text-sm leading-relaxed text-foreground/70">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
