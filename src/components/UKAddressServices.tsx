"use client";

import Link from "next/link";
import React from "react";
import { FaLandmark, FaLock, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

export default function UKAddressServices() {
    const services = [
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
        <div className="mt-16 w-full">
            {/* Header */}
            <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-2">Address Services</h3>
                <p className="text-sm font-bold tracking-[0.2em] text-gray-600 dark:text-gray-400 uppercase mb-2">
                    Optional Add-ons
                </p>
                <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                <p className="text-gray-600 dark:text-gray-300 font-light mt-4">
                    Enhance your UK company setup with professional address services.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="pricing-card group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                        style={{
                            animationDelay: `${idx * 100}ms`,
                        }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                        </div>
                        {/* Corner accent */}
                        <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"></div>

                        {/* Icon */}
                        <div className="mb-6 text-[#d4af37] flex justify-center">
                            <service.icon className="w-12 h-12" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold mb-4 min-h-[56px] flex items-center justify-center text-center">
                            {service.title}
                        </h4>

                        {/* Features */}
                        <ul className="mb-8 space-y-3 text-left">
                            {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-sm">
                                    <FaCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                    <span>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Price */}
                        <div className="mb-6 text-center">
                            <span className="text-4xl font-bold text-[#d4af37]">
                                {service.price}
                            </span>
                            <span className="text-sm ml-1 opacity-80">
                                {service.period}
                            </span>
                        </div>

                        {/* CTA Button */}
                        <Link href={service.link} className="block w-full rounded-xl border-2 border-[#d4af37] py-3 text-center text-sm font-bold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:scale-105 active:scale-95">
                            {service.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
