"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";

export default function UKComparisonTable() {
    const features = [
        { name: "Company Formation", starter: true, prestige: true, elite: true },
        { name: "Registered Office (RO)", starter: false, prestige: true, elite: true },
        { name: "Director Service Address (DSA)", starter: false, prestige: true, elite: true },
        { name: "Virtual Business Address (VBA)", starter: false, prestige: true, elite: true },
        { name: "Banking Assistance", starter: false, prestige: false, elite: true },
        { name: "VAT Registration (optional)", starter: false, prestige: false, elite: true },
        { name: "Banking Assistance", starter: false, prestige: false, elite: true },
        { name: "VAT Registration", starter: false, prestige: false, elite: true },
        { name: "Compliance Review", starter: false, prestige: false, elite: true },
        { name: "Priority Setup", starter: false, prestige: false, elite: true },
        { name: "Stripe / Amazon Support", starter: false, prestige: false, elite: true },
        { name: "Mail & Parcel Handling", starter: false, prestige: false, elite: true },
    ];

    return (
        <div className="w-full overflow-hidden rounded-xl bg-black text-white border border-[#d4af37]/30 shadow-2xl">
            {/* Header Title */}
            <div className="bg-black py-6 text-center border-b border-[#d4af37]/30">
                <h3 className="text-2xl font-serif text-[#d4af37] tracking-wide uppercase">Compare Our UK Packages</h3>
            </div>

            {/* Scrollable Container */}
            <div className="w-full overflow-x-auto scrollbar-hide">
                {/* Table grid */}
                <div className="w-full min-w-[800px]"> {/* Ensure min width for scrolling on mobile */}
                    {/* Header Row */}
                    <div className="grid grid-cols-4 bg-black/50">
                        <div className="sticky left-0 z-10 bg-black p-4 flex items-center justify-center border-b border-r border-[#d4af37]/20 shadow-[2px_0_10px_rgba(0,0,0,0.5)]">
                            <div className="flex flex-col items-center">
                                {/* <span className="text-xl font-serif text-[#d4af37]">Starter</span> */}
                                {/* <span className="text-2xl font-bold">£99</span> */}
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-center border-b border-r border-[#d4af37]/20">
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-serif text-[#d4af37]">Starter</span>
                                <span className="text-2xl font-bold">£99</span>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-center border-b border-r border-[#d4af37]/20">
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-serif text-[#d4af37]">Prestige</span>
                                <span className="text-2xl font-bold">£230</span>
                            </div>
                        </div>
                        <div className="relative p-4 flex items-center justify-center bg-gradient-to-b from-[#d4af37] to-[#bfa040] text-black">
                            <div className="absolute top-0 right-1/3 md:right-1/2 translate-x-1/2 bg-[#f3d066] text-[10px] font-bold px-3 py-1 uppercase shadow-md rounded-b-md">
                                Most Popular
                            </div>
                            <div className="flex flex-col items-center mt-2">
                                <span className="text-2xl font-serif font-bold">Elite</span>
                                <span className="text-3xl font-bold">£399</span>
                            </div>
                        </div>
                    </div>

                    {/* Rows */}
                    {features.map((row, idx) => (
                        <div key={idx} className={`grid grid-cols-4 border-b border-[#d4af37]/10 ${idx % 2 === 0 ? "bg-white/5" : "bg-transparent"} hover:bg-[#d4af37]/5 transition-colors`}>
                            {/* Feature Name */}
                            <div className={`sticky left-0 z-10 p-4 flex items-center text-xs sm:text-sm font-medium text-gray-200 border-r border-[#d4af37]/20 shadow-[2px_0_10px_rgba(0,0,0,0.5)] ${idx % 2 === 0 ? "bg-[#111]" : "bg-black"}`}>
                                {row.name}
                            </div>

                            {/* Starter */}
                            <div className="p-4 flex items-center justify-center border-r border-[#d4af37]/20 text-[#d4af37]">
                                {row.starter ? <FaCheck className="w-5 h-5" /> : <div className="w-4 h-1 bg-[#d4af37]/30 rounded-full" />}
                            </div>

                            {/* Prestige */}
                            <div className="p-4 flex items-center justify-center border-r border-[#d4af37]/20 text-[#d4af37]">
                                {row.prestige ? <FaCheck className="w-5 h-5" /> : <div className="w-4 h-1 bg-[#d4af37]/30 rounded-full" />}
                            </div>

                            {/* Elite */}
                            <div className="p-4 flex items-center justify-center text-white bg-white/5">
                                {row.elite ? <FaCheck className="w-5 h-5 text-[#d4af37]" /> : <div className="w-4 h-1 bg-white/30 rounded-full" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="py-6 text-center border-t border-[#d4af37]/30 px-4">
                <p className="text-[#d4af37] italic font-serif">
                    Most clients choose <span className="font-bold">Elite</span> for Bank & Card Approval, Business Address, and <span className="font-bold">Full Operations</span>.
                </p>
            </div>
        </div>
    );
}
