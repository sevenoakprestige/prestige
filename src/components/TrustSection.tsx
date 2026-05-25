"use client";

import Image from "next/image";
import { FaShieldAlt, FaLock, FaCheckCircle, FaBuilding } from "react-icons/fa";

const trustSignals = [
    {
        icon: FaBuilding,
        title: "UK Registered Company",
        body: "Seven Oak Prestige Ltd is officially registered at Companies House. Company No. 16903092.",
    },
    {
        icon: FaLock,
        title: "GDPR Compliant",
        body: "Your personal data is handled strictly in accordance with UK GDPR and the Data Protection Act 2018.",
    },
    {
        icon: FaShieldAlt,
        title: "AML & KYC Verified",
        body: "We operate with full Anti-Money Laundering compliance and identity verification on every client engagement.",
    },
    {
        icon: FaCheckCircle,
        title: "Fully Transparent Process",
        body: "No hidden fees, no surprises. Every step is documented and communicated clearly before we begin.",
    },
];

export default function TrustSection() {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            {/* Background orbs — consistent with Testimonials */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* ── Left: Content ── */}
                    <div className="flex flex-col justify-center">
                        {/* Label */}
                        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                            VERIFIED & COMPLIANT
                        </span>

                        {/* Heading */}
                        <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            A Business You Can{" "}
                            <span className="text-[#d4af37]">Trust</span>
                        </h2>

                        {/* Divider */}
                        <div className="mb-6 h-[1px] w-16 bg-[#d4af37]/50"></div>

                        {/* Body */}
                        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                            We are a fully registered UK limited company operating under UK law, GDPR, and AML regulations. When you work with Seven Oak Prestige, you are working with a legitimate, accountable, and compliant service provider — not an anonymous online agent.
                        </p>

                        {/* Trust signal cards */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {trustSignals.map((signal, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]"
                                >
                                    {/* Corner glow */}
                                    <div className="absolute right-0 top-0 h-12 w-12 translate-x-6 -translate-y-6 rounded-full bg-[#d4af37]/8 blur-xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>

                                    <signal.icon className="mb-3 h-5 w-5 text-[#d4af37]" />
                                    <h3 className="mb-1 text-sm font-bold text-foreground">{signal.title}</h3>
                                    <p className="text-xs leading-relaxed text-muted-foreground">{signal.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Image ── */}
                    <div className="relative order-first lg:order-last">
                        {/* Gold glow ring */}
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#d4af37]/25 via-[#f3d066]/8 to-transparent blur-xl"></div>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/20">
                            <Image
                                src="/assets/trust-section.jpeg"
                                alt="Seven Oak Prestige professional team conducting a client consultation"
                                width={1024}
                                height={680}
                                className="h-auto w-full object-cover"
                                priority
                            />
                            {/* Dark bottom fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            {/* Verified badge */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-[#d4af37]/30 bg-black/65 px-4 py-3 backdrop-blur-md">
                                <div className="flex items-center gap-2.5">
                                    <FaShieldAlt className="h-4 w-4 text-[#d4af37]" />
                                    <span className="text-xs font-semibold text-white">Companies House Registered</span>
                                </div>
                                <span className="rounded-md bg-[#d4af37]/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#d4af37]">
                                    No. 16903092
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
