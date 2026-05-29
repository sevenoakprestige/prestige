"use client";

import Link from "next/link";
import React from "react";
import { FaLandmark, FaLock, FaMapMarkerAlt, FaCheck, FaUserCheck, FaBolt } from "react-icons/fa";

export default function UKAddressServices() {
    const services = [
        {
            title: "The Standard Plan",
            price: "£59",
            period: "",
            icon: FaUserCheck,
            features: [
                "Companies House identity verification",
                "Director onboarding support",
                "Verification submission assistance",
                "Estimated processing time: up to 4 working days"
            ],
            cta: "Add to Order",
            link: "https://buy.stripe.com/14A7sD6cEaHP1RP6Bmfw40g"
        },
        {
            title: "The Priority Plan",
            price: "£74",
            period: "",
            icon: FaBolt,
            features: [
                "Priority verification handling",
                "Faster onboarding review",
                "Assisted compliance support",
                "Estimated processing time: up to 2 working days"
            ],
            cta: "Add to Order",
            link: "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h"
        },
        {
            title: "Registered Office Address",
            price: "£59",
            period: "/ year",
            icon: FaLandmark,
            features: [
                "Official UK Registered Office",
                "Companies House compliant",
                "Government mail forwarding included"
            ],
            cta: "Add to Order",
            link: "https://buy.stripe.com/28E14fgRi7vDfIF6Bmfw403"
        },
        {
            title: "Director Service Address",
            price: "£35",
            period: "/ year",
            icon: FaLock,
            features: [
                "Protect director privacy",
                "Keep home address off public records",
                "Accepts all official mail"
            ],
            cta: "Add to Order",
            link: "https://buy.stripe.com/7sYfZ9asU9DL1RP5xifw404"
        },
        {
            title: "Virtual Business Address",
            price: "£150",
            period: "/ year",
            icon: FaMapMarkerAlt,
            features: [
                "Premium London trading address",
                "Mail scanning & forwarding",
                "Professional address for clients"
            ],
            cta: "Add to Order",
            link: "https://buy.stripe.com/28EdR1asU8zHfIFf7Sfw405"
        }
    ];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration — same as Testimonials */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header — same as Testimonials */}
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                        OPTIONAL ADD-ONS
                    </span>
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                        Address Services
                    </h2>
                    <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    <p className="mt-4 text-muted-foreground">
                        Enhance your UK company setup with professional address services.
                    </p>
                </div>

                {/* Cards Grid — same card classes as Testimonials */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto lg:gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Corner accent — same as Testimonials */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>

                            {/* Icon */}
                            <div className="mb-6 flex justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                    <service.icon className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="pricing-tier-name mb-2 text-2xl font-bold text-center">
                                {service.title}
                            </h3>

                            {/* Price */}
                            <div className="mb-6 text-center">
                                <span className="pricing-price text-4xl font-bold text-[#d4af37]">
                                    {service.price}
                                </span>
                                <span className="ml-1 text-sm opacity-70">{service.period}</span>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 flex-grow space-y-3">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                                        <FaCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#d4af37]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={service.link || "#"}
                                className="block w-full rounded-xl border-2 border-[#d4af37] py-3 text-center text-sm font-bold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:scale-105 active:scale-95"
                            >
                                {service.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
