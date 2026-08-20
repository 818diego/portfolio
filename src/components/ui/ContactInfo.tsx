import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { gsap } from 'gsap';
import { FaClock, FaLanguage, FaGlobe } from 'react-icons/fa';
import { useGsapScope, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

export const ContactInfo: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    useGsapScope(() => {
        if (!rootRef.current) return;
        const left = rootRef.current.querySelectorAll('[data-ci-left]');
        const right = rootRef.current.querySelectorAll('[data-ci-right]');

        if (prefersReducedMotion()) {
            gsap.fromTo([left, right], { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.04 });
        } else {
            staggerReveal(left as unknown as gsap.DOMTarget, { x: -20, stagger: 0.08, duration: 0.6 });
            staggerReveal(right as unknown as gsap.DOMTarget, { x: 20, stagger: 0.08, duration: 0.6, delay: 0.1 });
        }
    }, rootRef);

    const sanitizeMessage = (text: string): string => {
        return text.trim();
    };

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            toast.error(t("contact.errors.fillAllFields"));
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error(t("contact.errors.invalidEmail"));
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: sanitizeMessage(name),
                    from_email: email,
                    message: sanitizeMessage(message),
                    to_email: 'diego.fmerinoh@gmail.com'
                }
            );
            setName('');
            setEmail('');
            setMessage('');
            toast.success(t("contact.success"));
        } catch (error) {
            console.error("Error sending message", error);
            toast.error(t("contact.failure"));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={rootRef} className="max-w-full mx-auto bg-zinc-800 rounded-xl shadow-sm border border-zinc-700/50 overflow-hidden flex flex-col md:flex-row">
            <div data-ci-left className="flex flex-col justify-center p-8 w-full md:w-1/2 bg-zinc-900/20">
                <h3 className="text-2xl font-black text-white leading-tight">
                    {t("contact.title")}
                </h3>
                <p className="mt-4 text-gray-400 text-[15px] leading-relaxed">
                    {t("contact.subtitle")}
                </p>
                <div className="mt-8 space-y-4">
                    <div data-ci-left className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-green-400 font-bold uppercase tracking-wide">
                            {t("contact.available")}
                        </span>
                    </div>
                    <div data-ci-left className="flex items-center justify-between p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <FaClock className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[12px] font-bold text-blue-400/70 uppercase tracking-widest">{t("contact.responseTime")}</span>
                        </div>
                        <span className="text-sm text-zinc-300 font-bold">24/72 hrs</span>
                    </div>
                    <div data-ci-left className="flex items-center justify-between p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <FaLanguage className="w-5 h-5 text-orange-400" />
                            </div>
                            <span className="text-[12px] font-bold text-orange-400/70 uppercase tracking-widest">{t("contact.spokenLanguages")}</span>
                        </div>
                        <span className="text-sm text-zinc-300 font-bold">{t("contact.spokenLanguagesValue")}</span>
                    </div>
                    <div data-ci-left className="flex items-center justify-between p-4 rounded-xl bg-zinc-500/5 border border-zinc-500/10">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-500/20 flex items-center justify-center">
                                <FaGlobe className="w-5 h-5 text-zinc-400" />
                            </div>
                            <span className="text-[12px] font-bold text-zinc-400/70 uppercase tracking-widest">{t("contact.timezone")}</span>
                        </div>
                        <span className="text-sm text-zinc-300 font-bold">UTC -6</span>
                    </div>
                </div>
            </div>
            <div data-ci-right className="p-8 w-full md:w-1/2 relative">
                <h3 className="text-xl font-bold text-white mb-6">
                    {t("contact.sendMessage")}
                </h3>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div data-ci-right>
                        <label className="block text-[13px] font-bold text-green-400 uppercase tracking-wider mb-2" htmlFor="name">
                            {t("contact.name")}
                        </label>
                        <input
                            className="w-full py-2.5 px-4 bg-zinc-900/50 text-zinc-100 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 placeholder:text-zinc-600"
                            id="name"
                            type="text"
                            placeholder={t("contact.namePlaceholder")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div data-ci-right>
                        <label className="block text-[13px] font-bold text-green-400 uppercase tracking-wider mb-2" htmlFor="email">
                            {t("contact.email")}
                        </label>
                        <input
                            className="w-full py-2.5 px-4 bg-zinc-900/50 text-zinc-100 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 placeholder:text-zinc-600"
                            id="email"
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div data-ci-right>
                        <label className="block text-[13px] font-bold text-green-400 uppercase tracking-wider mb-2" htmlFor="message">
                            {t("contact.message")}
                        </label>
                        <textarea
                            className="w-full py-2.5 px-4 bg-zinc-900/50 text-zinc-100 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 min-h-[120px] resize-none placeholder:text-zinc-600"
                            id="message"
                            placeholder={t("contact.messagePlaceholder")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <button
                        data-ci-right
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full py-2.5 px-6 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold rounded-lg border border-green-500/20 hover:border-green-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-green-500/30 border-t-green-500 rounded-full" />
                        ) : (
                            <>
                                <span className="text-[14px] uppercase tracking-widest">{t("contact.submit")}</span>
                                <span>→</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};