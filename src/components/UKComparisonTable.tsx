"use client";

import React from "react";
import {
    FaCheck, FaBuilding, FaClock, FaFileAlt, FaUserTie,
    FaMapMarkerAlt, FaBriefcase, FaUniversity,
    FaCheckCircle, FaAmazon, FaHeadset, FaStar, FaRocket,
    FaCrown, FaGem, FaArrowRight, FaShieldAlt, FaLock, FaMedal, FaWhatsapp
} from "react-icons/fa";

export default function UKComparisonTable() {
    const features = [
        { name: "Limited Company Formation", starter: true, prestige: true, elite: true, icon: <FaBuilding className="text-[#d4af37]" /> },
        { name: "Ready in 24 Hours", starter: true, prestige: true, elite: true, icon: <FaClock className="text-[#d4af37]" /> },
        { name: "Digital Company Document", starter: true, prestige: true, elite: true, icon: <FaFileAlt className="text-[#d4af37]" /> },
        { name: "DSA (Director Service Address for 12 months)", starter: false, prestige: true, elite: true, icon: <FaUserTie className="text-[#d4af37]" /> },
        { name: "RO (Registered Office for 12 months)", starter: false, prestige: true, elite: true, icon: <FaBuilding className="text-[#d4af37]" /> },
        { name: "VBA (Virtual Business Address for 12 months)", starter: false, prestige: false, elite: true, icon: <FaMapMarkerAlt className="text-[#d4af37]" /> },
        { name: "Company Formation", starter: true, prestige: true, elite: true, icon: <FaBriefcase className="text-[#d4af37]" /> },
        { name: "VAT Assistance", starter: false, prestige: false, elite: true, icon: <span className="text-[#d4af37] text-[10px] font-bold border border-[#d4af37] rounded-full px-1 py-0.5">VAT</span> },
        // { name: "Fintechs Set Up Assistance", starter: false, prestige: false, elite: true, icon: <FaUniversity className="text-[#d4af37]" /> },
        // { name: "Banking Assistance", starter: false, prestige: false, elite: true, icon: <FaUniversity className="text-[#d4af37]" /> },
        { name: "Full Compliance Review", starter: false, prestige: false, elite: true, icon: <FaCheckCircle className="text-[#d4af37]" /> },
        { name: "Amazon FBA Onboarding Guidance", starter: false, prestige: false, elite: true, icon: <FaAmazon className="text-[#d4af37]" /> },
        { name: "Compliance Assistance", starter: false, prestige: false, elite: true, icon: <FaFileAlt className="text-[#d4af37]" /> },
        { name: "Business Consultation", starter: false, prestige: false, elite: true, icon: <FaUserTie className="text-[#d4af37]" /> },
        { name: "Dedicated Support", starter: false, prestige: false, elite: true, icon: <FaHeadset className="text-[#d4af37]" /> },
        { name: "Premium Branding / Presentation", starter: false, prestige: false, elite: true, icon: <FaStar className="text-[#d4af37]" /> },
    ];

    return (
        <div className="w-full py-12 px-4 md:px-8 text-foreground">
            <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide pb-8">
                {/* Main Grid container */}
                <div className="min-w-[768px] lg:min-w-full grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-x-2 md:gap-x-4 pt-6">

                    {/* Header Row */}
                    <div className="flex flex-col justify-end pb-4 md:pb-6 px-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight">
                            <span className="text-foreground uppercase">Compare</span><br />
                            <span className="text-[#d4af37] uppercase">Our Packages</span>
                        </h2>
                        <p className="text-xs md:text-sm mt-2 md:mt-4 text-muted-foreground pr-2 md:pr-4">Choose the perfect package to start, grow and scale your business with confidence.</p>
                    </div>

                    {/* Starter Header */}
                    <div className="border-t border-l border-r border-[#d4af37] rounded-t-xl flex flex-col items-center pt-6 md:pt-8 pb-4 md:pb-6 bg-transparent">
                        <FaRocket className="text-3xl md:text-4xl mb-2 md:mb-3 text-[#d4af37]" />
                        <span className="text-sm md:text-lg font-serif font-bold uppercase tracking-widest text-[#d4af37]">Starter</span>
                        <div className="flex items-center gap-2 my-1">
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                            <FaStar className="text-[#d4af37] text-[8px] md:text-[10px]" />
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                        </div>
                        <span className="text-3xl md:text-5xl font-bold text-[#d4af37] mt-1 md:mt-2">£199</span>
                    </div>

                    {/* Prestige Header */}
                    <div className="border-t border-l border-r border-[#d4af37] rounded-t-xl flex flex-col items-center pt-6 md:pt-8 pb-4 md:pb-6 relative bg-transparent">
                        <div className="absolute -top-3 md:-top-4 bg-[#d4af37] text-black text-[8px] md:text-[10px] font-bold px-3 md:px-6 py-1 md:py-1.5 uppercase rounded-sm shadow-md tracking-wider">Most Chosen</div>
                        <FaCrown className="text-3xl md:text-4xl mb-2 md:mb-3 text-[#d4af37]" />
                        <span className="text-sm md:text-lg font-serif font-bold uppercase tracking-widest text-[#d4af37]">The Prestige</span>
                        <div className="flex items-center gap-2 my-1">
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                            <FaStar className="text-[#d4af37] text-[8px] md:text-[10px]" />
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                        </div>
                        <span className="text-3xl md:text-5xl font-bold text-[#d4af37] mt-1 md:mt-2">£299</span>
                    </div>

                    {/* Elite Header */}
                    <div className="border-t border-l border-r border-[#d4af37] rounded-t-xl flex flex-col items-center pt-6 md:pt-8 pb-4 md:pb-6 bg-transparent">
                        <FaGem className="text-3xl md:text-4xl mb-2 md:mb-3 text-[#d4af37]" />
                        <span className="text-sm md:text-lg font-serif font-bold uppercase tracking-widest text-[#d4af37]">The Elite</span>
                        <div className="flex items-center gap-2 my-1">
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                            <FaStar className="text-[#d4af37] text-[8px] md:text-[10px]" />
                            <div className="w-2 md:w-3 h-[1px] bg-[#d4af37]"></div>
                        </div>
                        <span className="text-3xl md:text-5xl font-bold text-[#d4af37] mt-1 md:mt-2">£399</span>
                    </div>

                    {/* Spacer Row for alignment */}
                    <div></div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent h-6"></div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent h-6"></div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent h-6"></div>

                    {/* Features Header Row */}
                    <div className="bg-gradient-to-r from-[#d4af37] to-[#bfa040] text-black font-bold px-3 md:px-4 py-2 rounded-t-md uppercase flex items-center shadow-lg h-8 md:h-10 text-xs md:text-base">
                        Features
                    </div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent"></div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent"></div>
                    <div className="border-l border-r border-[#d4af37] bg-transparent"></div>

                    {/* Features List */}
                    {features.map((row, idx) => (
                        <React.Fragment key={idx}>
                            {/* Feature Name */}
                            <div className="flex items-center text-[11px] md:text-[13px] text-foreground/80 py-2 md:py-3 px-1 md:px-2 border-b border-b-gray-300 dark:border-b-gray-800/50 bg-transparent">
                                <div className="w-5 md:w-6 flex justify-center mr-2 md:mr-3 shrink-0">{row.icon}</div>
                                <span>{row.name}</span>
                            </div>

                            {/* Starter */}
                            <div className="flex items-center justify-center border-l border-r border-[#d4af37] border-b border-b-gray-300 dark:border-b-gray-800/50 bg-transparent">
                                {row.starter ? <FaCheck className="text-[#d4af37] w-3 h-3 md:w-4 md:h-4" /> : <div className="w-2 h-[1px] md:w-3 md:h-0.5 bg-gray-500 rounded-full"></div>}
                            </div>

                            {/* Prestige */}
                            <div className="flex items-center justify-center border-l border-r border-[#d4af37] border-b border-b-gray-300 dark:border-b-gray-800/50 bg-transparent">
                                {row.prestige ? <FaCheck className="text-[#d4af37] w-3 h-3 md:w-4 md:h-4" /> : <div className="w-2 h-[1px] md:w-3 md:h-0.5 bg-gray-500 rounded-full"></div>}
                            </div>

                            {/* Elite */}
                            <div className="flex items-center justify-center border-l border-r border-[#d4af37] border-b border-b-gray-300 dark:border-b-gray-800/50 bg-transparent">
                                {row.elite ? <FaCheck className="text-[#d4af37] w-3 h-3 md:w-4 md:h-4" /> : <div className="w-2 h-[1px] md:w-3 md:h-0.5 bg-gray-500 rounded-full"></div>}
                            </div>
                        </React.Fragment>
                    ))}

                    {/* Bottom Buttons Row */}
                    <div></div>

                    {/* Starter Button */}
                    <div className="border-b border-l border-r border-[#d4af37] rounded-b-xl pb-6 md:pb-8 pt-4 md:pt-6 flex flex-col items-center gap-3 bg-transparent">
                        <a href="https://buy.stripe.com/eVqcMXgRig29685e3Ofw409" target="_blank" rel="noopener noreferrer" className="border border-[#d4af37] text-foreground pl-3 md:pl-5 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-bold uppercase text-[9px] md:text-[11px] tracking-wide hover:bg-[#d4af37] hover:text-black transition-colors flex items-center gap-2 md:gap-3">
                            Start Now <span className="bg-[#d4af37] text-black rounded-full p-1 md:p-1.5"><FaArrowRight className="w-2 h-2 md:w-3 md:h-3" /></span>
                        </a>
                        <a href="https://wa.me/447447488755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-emerald-500 hover:text-emerald-400 transition-colors">
                            <FaWhatsapp className="w-3.5 h-3.5" /> Talk to an expert
                        </a>
                    </div>

                    {/* Prestige Button */}
                    <div className="border-b border-l border-r border-[#d4af37] rounded-b-xl pb-6 md:pb-8 pt-4 md:pt-6 flex flex-col items-center gap-3 bg-transparent">
                        <a href="https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a" target="_blank" rel="noopener noreferrer" className="bg-[#d4af37] text-black pl-3 md:pl-5 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-bold uppercase text-[9px] md:text-[11px] tracking-wide hover:bg-[#bfa040] transition-colors flex items-center gap-2 md:gap-3">
                            Start Your Company <span className="bg-black text-[#d4af37] rounded-full p-1 md:p-1.5"><FaArrowRight className="w-2 h-2 md:w-3 md:h-3" /></span>
                        </a>
                        <a href="https://wa.me/447447488755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-emerald-500 hover:text-emerald-400 transition-colors">
                            <FaWhatsapp className="w-3.5 h-3.5" /> Talk to an expert
                        </a>
                    </div>

                    {/* Elite Button */}
                    <div className="border-b border-l border-r border-[#d4af37] rounded-b-xl pb-6 md:pb-8 pt-4 md:pt-6 flex flex-col items-center gap-3 bg-transparent">
                        <a href="https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402" target="_blank" rel="noopener noreferrer" className="bg-[#d4af37] text-black pl-3 md:pl-5 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-bold uppercase text-[9px] md:text-[11px] tracking-wide hover:bg-[#bfa040] transition-colors flex items-center gap-2 md:gap-3">
                            Become Elite <span className="bg-black text-[#d4af37] rounded-full p-1 md:p-1.5"><FaArrowRight className="w-2 h-2 md:w-3 md:h-3" /></span>
                        </a>
                        <a href="https://wa.me/447447488755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-emerald-500 hover:text-emerald-400 transition-colors">
                            <FaWhatsapp className="w-3.5 h-3.5" /> Talk to an expert
                        </a>
                    </div>

                </div>

                {/* Footer Badges */}
                <div className="mt-8 border border-[#d4af37]/40 rounded-xl py-6 px-4 md:px-6 w-full bg-transparent">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center justify-start sm:justify-center gap-4">
                            <FaShieldAlt className="text-[#d4af37] text-2xl md:text-3xl shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-foreground font-bold text-[11px] md:text-[12px] uppercase tracking-wide">Trusted & Secure</span>
                                <span className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">Your business is safe with us</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-start sm:justify-center gap-4">
                            <FaHeadset className="text-[#d4af37] text-2xl md:text-3xl shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-foreground font-bold text-[11px] md:text-[12px] uppercase tracking-wide">Expert Support</span>
                                <span className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">We're here to help you</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-start sm:justify-center gap-4">
                            <FaLock className="text-[#d4af37] text-2xl md:text-3xl shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-foreground font-bold text-[11px] md:text-[12px] uppercase tracking-wide">Secure & Compliant</span>
                                <span className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">100% compliant & reliable</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-start sm:justify-center gap-4">
                            <FaMedal className="text-[#d4af37] text-2xl md:text-3xl shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-foreground font-bold text-[11px] md:text-[12px] uppercase tracking-wide">100% Satisfaction</span>
                                <span className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">Your success is our priority</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

