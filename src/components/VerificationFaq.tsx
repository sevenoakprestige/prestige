"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the Companies House personal code?",
    a: "It is a unique 11-character code issued to an individual after successful Companies House identity verification. It is personal to you and should be kept secure.",
  },
  {
    q: "Who needs to verify their identity?",
    a: "Companies House identity-verification requirements apply to relevant directors and People with Significant Control, with timing depending on whether the person is forming a company, being appointed or completing a required filing.",
  },
  {
    q: "Can non-UK residents use this service?",
    a: "Yes, subject to an initial review. The appropriate verification route depends on your identity documents and circumstances, so additional information may be required.",
  },
  {
    q: "How long does the process take?",
    a: "The personal code is typically issued within up to 48 hours after successful completion of the required verification checks. Additional evidence, technical issues or external processing can extend the timeframe.",
  },
  {
    q: "What documents will I need?",
    a: "You may need a valid passport or another eligible identity document, current personal details, your date of birth and residential address. Requirements vary by applicant and verification route.",
  },
  {
    q: "What happens if additional information is required?",
    a: "We explain what clarification or supporting information is needed and help you respond. Verification cannot be completed until the relevant checks are successfully satisfied.",
  },
  {
    q: "Can I use the same personal code for more than one company?",
    a: "Yes. The personal code belongs to the individual and is reused across their relevant company roles; you do not obtain a different personal code for every company.",
  },
  {
    q: "When do directors and PSCs need to provide the code?",
    a: "New directors need the code when incorporating a company or being appointed. Existing directors and PSCs use it in connection with the applicable Companies House filing or verification requirement.",
  },
];

export default function VerificationFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                <span className={`mt-1 shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                </span>
              </button>
            </h3>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
