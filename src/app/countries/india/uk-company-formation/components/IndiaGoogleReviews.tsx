"use client";

import { FaStar } from "react-icons/fa";

export default function IndiaGoogleReviews() {
    const reviews = [
        {
            name: "Arjun Mehta",
            title: "SaaS Founder, Bengaluru",
            text: "Seven Oak Prestige made the entire UK company formation process smooth and stress-free. Their team is professional, responsive and very clear in communication."
        },
        {
            name: "Neha Sharma",
            title: "E-Commerce Entrepreneur, Delhi",
            text: "Excellent support with documentation and banking-readiness. Highly recommended for Indian founders looking to go global."
        },
        {
            name: "Rohan Iyer",
            title: "IT Consultant, Mumbai",
            text: "Very transparent pricing and great guidance throughout. Got my company incorporated quickly and without any hassle."
        },
        {
            name: "Priya Patel",
            title: "Export Business, Ahmedabad",
            text: "I was worried about the compliance and EORI requirements, but Seven Oak Prestige guided us step-by-step. Incredibly knowledgeable about cross-border trade."
        },
        {
            name: "Sameer Reddy",
            title: "Web3 Developer, Hyderabad",
            text: "Super fast incorporation. I had my company registered and documents in hand within 24 hours. The best service for tech founders in India."
        },
        {
            name: "Vikram Desai",
            title: "Digital Agency Owner, Pune",
            text: "The team handled our VAT registration and banking setup seamlessly. Having a prestigious London address has completely changed how international clients view us."
        }
    ];

    return (
        <section className="py-16 border-t border-border relative overflow-hidden">
            <div className="premium-section-bg"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-2xl font-bold text-foreground">Google Reviews</span>
                    </div>
                </div>

                <div className="relative max-w-[100vw] -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden group">
                    <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-4 sm:px-6 lg:px-8">
                        {[...reviews, ...reviews].map((review, idx) => (
                            <div 
                                key={idx} 
                                className="premium-standard-card flex flex-col justify-between w-[85vw] md:w-[350px] shrink-0"
                            >
                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-[#fbbc04]" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground mb-6 line-clamp-4 leading-relaxed">
                                        "{review.text}"
                                    </p>
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
