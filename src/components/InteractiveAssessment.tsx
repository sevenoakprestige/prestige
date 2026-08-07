"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaArrowRight, FaArrowLeft, FaCheck, FaTimes, FaDownload, FaRedo } from "react-icons/fa";

const questions = [
    // Corporate Identity
    { id: 1, text: "Do you have a consistent trading name across all your public profiles?", category: "Corporate Identity" },
    { id: 2, text: "Is your intended business activity clearly defined and easy to explain?", category: "Corporate Identity" },
    { id: 3, text: "Do you have professional, dedicated business contact details (email and phone)?", category: "Corporate Identity" },
    { id: 4, text: "Are your company directors and major shareholders visible and verified?", category: "Corporate Identity" },
    
    // Business Documentation
    { id: 5, text: "Are your Certificate of Incorporation and Memorandum & Articles of Association readily available?", category: "Business Documentation" },
    { id: 6, text: "Can you provide valid, unexpired government-issued ID for all directors and >25% shareholders?", category: "Business Documentation" },
    { id: 7, text: "Do you have recent (within 3 months) proof of residential address for all key stakeholders?", category: "Business Documentation" },
    { id: 8, text: "Do you have detailed organizational charts if your corporate structure involves multiple entities?", category: "Business Documentation" },
    
    // Website & Digital Presence
    { id: 9, text: "Is your business website live, fully functional, and secured with SSL?", category: "Website & Digital Presence" },
    { id: 10, text: "Does your website clearly describe the products or services you offer?", category: "Website & Digital Presence" },
    { id: 11, text: "Are your company's registration number and registered address clearly stated on the website?", category: "Website & Digital Presence" },
    { id: 12, text: "Are your Terms & Conditions and Privacy Policy publicly accessible?", category: "Website & Digital Presence" },
    
    // Financial Readiness
    { id: 13, text: "Can you clearly document your initial Source of Wealth and Source of Funds?", category: "Financial Readiness" },
    { id: 14, text: "Have you prepared realistic financial projections or a business plan for the next 12 months?", category: "Financial Readiness" },
    { id: 15, text: "Do you have clear expectations for your monthly transaction volume and values?", category: "Financial Readiness" },
    { id: 16, text: "Can you provide supporting invoices, contracts, or agreements if requested?", category: "Financial Readiness" },
    
    // Compliance & Governance
    { id: 17, text: "Are you aware of and compliant with UK data protection regulations (GDPR)?", category: "Compliance & Governance" },
    { id: 18, text: "If applicable, do you have the necessary licenses or registrations for your industry?", category: "Compliance & Governance" },
    { id: 19, text: "Do you have a clear understanding of the countries you will be sending funds to and receiving funds from?", category: "Compliance & Governance" },
    { id: 20, text: "Have you appointed an accountant or tax advisor for your UK corporate tax obligations?", category: "Compliance & Governance" }
];

type AssessmentState = 'start' | 'questions' | 'results';

export default function InteractiveAssessment() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const [step, setStep] = useState<AssessmentState>('start');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<boolean[]>(new Array(20).fill(false));

    const handleStart = () => {
        setStep('questions');
        setCurrentQuestionIndex(0);
        setAnswers(new Array(20).fill(false));
    };

    const handleAnswer = (value: boolean) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = value;
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setStep('results');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        return answers.filter(a => a).length * 5;
    };

    const getTier = (score: number) => {
        if (score >= 90) return { title: "Excellent Readiness", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30", desc: "Your business demonstrates a strong level of organisational preparation and corporate consistency." };
        if (score >= 75) return { title: "Good Readiness", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30", desc: "Most key elements appear to be in place. Review any remaining gaps before beginning an application." };
        if (score >= 60) return { title: "Developing Readiness", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30", desc: "Several important areas may benefit from further preparation to create a complete business profile." };
        return { title: "Preparation Recommended", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/30", desc: "Consider reviewing your business structure, documentation, and compliance arrangements." };
    };

    if (step === 'start') {
        return (
            <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/5 to-[#d4af37]/10 p-8 md:p-12 backdrop-blur-md relative overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500 mt-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-4">
                            Interactive Tool
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                            Evaluate Your Banking Readiness
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Take our 20-question assessment to calculate your Banking Readiness Score™. Identify gaps in your corporate profile before you apply for a UK business bank account.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "20 strategic questions",
                                "Instant readiness score",
                                "Actionable feedback",
                                "Downloadable report"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                                        <FaCheck className="w-3 h-3" />
                                    </div>
                                    <span className="text-foreground/90 font-medium text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full md:w-auto mt-6 md:mt-0">
                        <button 
                            onClick={handleStart}
                            className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black font-bold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                        >
                            Start Assessment <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'questions') {
        const question = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / questions.length) * 100;

        return (
            <div className="rounded-3xl border border-border/20 bg-card/20 p-6 md:p-10 backdrop-blur-md relative overflow-hidden mt-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-background">
                    <div 
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3d066] transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto pt-4">
                    <div className="flex items-center justify-between mb-8 mt-2">
                        <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">
                            {question.category}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10 leading-tight">
                        {question.text}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <button 
                            onClick={() => handleAnswer(true)}
                            className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-border/50 bg-foreground/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 font-semibold text-lg"
                        >
                            <FaCheck /> Yes
                        </button>
                        <button 
                            onClick={() => handleAnswer(false)}
                            className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-border/50 bg-foreground/5 hover:bg-rose-500/10 hover:border-rose-500/50 hover:text-rose-400 transition-all duration-300 font-semibold text-lg"
                        >
                            <FaTimes /> No
                        </button>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border/20">
                        <button 
                            onClick={handleBack}
                            disabled={currentQuestionIndex === 0}
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${currentQuestionIndex === 0 ? 'text-foreground/20 cursor-not-allowed' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <FaArrowLeft /> Previous Question
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'results') {
        const score = calculateScore();
        const tier = getTier(score);

        const printableReport = mounted ? createPortal(
            <div id="printable-report-portal" className="hidden print:block w-full bg-white text-black">
                <style dangerouslySetInnerHTML={{ __html: `
                    @media print {
                        body > * { display: none !important; }
                        body > #printable-report-portal { display: block !important; }
                        #printable-report-portal { padding: 40px; font-family: sans-serif; }
                        html, body { height: auto !important; overflow: visible !important; margin: 0 !important; padding: 0 !important; background: white !important; }
                        @page { margin: 20mm; }
                    }
                `}} />
                
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Banking Readiness Assessment Report</h1>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: score >= 75 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444' }}>
                        Overall Score: {score} / 100
                    </div>
                    <div style={{ fontSize: '18px', marginTop: '10px', color: '#4b5563', fontWeight: 'bold' }}>Tier: {tier.title}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {questions.map((q, idx) => {
                        const isYes = answers[idx];
                        return (
                            <div key={q.id} style={{ 
                                padding: '15px', 
                                border: '1px solid', 
                                borderRadius: '8px',
                                backgroundColor: isYes ? '#f9fafb' : '#fef2f2',
                                borderColor: isYes ? '#e5e7eb' : '#fca5a5',
                                pageBreakInside: 'avoid'
                            }}>
                                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b7280', marginBottom: '6px', textTransform: 'uppercase' }}>{q.category}</div>
                                <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px', color: '#111827' }}>{idx + 1}. {q.text}</div>
                                <div style={{ 
                                    display: 'inline-block', 
                                    padding: '6px 12px', 
                                    borderRadius: '6px', 
                                    fontSize: '14px', 
                                    fontWeight: 'bold',
                                    backgroundColor: isYes ? '#d1fae5' : '#fee2e2',
                                    color: isYes ? '#065f46' : '#991b1b',
                                    border: `1px solid ${isYes ? '#a7f3d0' : '#fecaca'}`
                                }}>
                                    {isYes ? 'YES' : 'NO'}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>,
            document.body
        ) : null;

        return (
            <div id="assessment-report" className="rounded-3xl border border-[#d4af37]/30 bg-card/20 p-8 md:p-12 backdrop-blur-md relative overflow-hidden mt-8 text-center print:hidden">
                {printableReport}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Assessment Complete</p>
                    
                    <div className="relative w-48 h-48 mx-auto mb-8">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-border/40" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="283" strokeDashoffset={283 - (283 * score) / 100} className="text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-1000" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-mono font-bold text-foreground tracking-tighter">{score}</span>
                            <span className="text-[10px] text-[#d4af37] font-bold tracking-widest uppercase mt-1">/ 100</span>
                        </div>
                    </div>

                    <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold font-mono border mb-6 ${tier.bg} ${tier.color} ${tier.border}`}>
                        {tier.title}
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                        {tier.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => window.print()}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black font-bold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                        >
                            <FaDownload /> Download Report
                        </button>
                        <button 
                            onClick={handleStart}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-foreground/5 text-foreground border border-border/50 font-bold flex items-center justify-center gap-3 hover:bg-foreground/10 transition-all duration-300"
                        >
                            <FaRedo /> Retake Assessment
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
