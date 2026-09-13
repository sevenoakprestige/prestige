'use client';

import React, { useState } from 'react';
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface LeadFormProps {
    source: string;
    title?: string;
    buttonText?: string;
    children?: React.ReactNode;
    lang?: 'en' | 'fr';
}

export default function LeadForm({ source, title, buttonText, lang = 'en', children }: LeadFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const isFr = lang === 'fr';
    const defaultTitle = isFr ? "Contactez-nous" : "Get in touch";
    const defaultBtnText = isFr ? "Envoyer" : "Submit Request";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        
        const formData = new FormData(e.currentTarget);
        // Gather all fields dynamically
        const data: Record<string, string> = { source, lang };
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok && result.success) {
                setStatus('success');
            } else {
                throw new Error(result.error || (isFr ? "Échec de l'envoi du formulaire" : 'Failed to submit form'));
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            setErrorMessage(error.message || (isFr ? "Une erreur s'est produite. Veuillez réessayer." : 'Something went wrong. Please try again.'));
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4">
                <FaCheckCircle className="text-5xl text-green-500" />
                <h3 className="text-2xl font-display font-bold text-gray-900">{isFr ? "Merci !" : "Thank You!"}</h3>
                <p className="text-gray-600">
                    {isFr 
                        ? "Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera sous peu."
                        : "We have successfully received your request. A member of our team will contact you shortly."}
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{title || defaultTitle}</h3>
            
            {status === 'error' && (
                <div className="mb-6 flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-200">
                    <FaExclamationCircle className="shrink-0" />
                    <p>{errorMessage}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input 
                        type="text" 
                        name="fullName"
                        required
                        placeholder={isFr ? "Nom complet *" : "Full name *"} 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        required
                        placeholder={isFr ? "Adresse e-mail *" : "Email address *"} 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                </div>
                <div className="flex border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#001328] focus-within:border-transparent bg-white">
                    <div className="flex items-center px-3 border-r border-gray-300 bg-gray-50 text-gray-700 rounded-l-md">
                        <span className="text-sm">{isFr ? "Téléphone" : "Phone"}</span>
                    </div>
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder={isFr ? "WhatsApp / Téléphone (facultatif)" : "WhatsApp / Phone (optional)"} 
                        className="w-full px-4 py-3 rounded-r-md focus:outline-none bg-white text-gray-900 placeholder-gray-500"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="companyName"
                        placeholder={isFr ? "Nom de la société (facultatif)" : "Company Name (optional)"} 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                </div>
                <div>
                    <textarea 
                        name="message"
                        rows={3}
                        placeholder={isFr ? "Comment pouvons-nous vous aider ? (facultatif)" : "How can we help you? (optional)"} 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                    />
                </div>
                
                {children}

                <p className="text-xs text-gray-500 pt-2">
                    {isFr 
                        ? "En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions de service."
                        : "By submitting this form, you agree to our privacy policy and terms of service."}
                </p>

                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-[#001328] text-white font-semibold py-4 px-6 rounded-md hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001328] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <>
                            <FaSpinner className="animate-spin" />
                            {isFr ? "Envoi..." : "Sending..."}
                        </>
                    ) : (buttonText || defaultBtnText)}
                </button>
            </form>
        </div>
    );
}
