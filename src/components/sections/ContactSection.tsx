import React, { useRef } from 'react';
import { GrContact } from 'react-icons/gr';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { ContactInfo } from '@/components/ui/ContactInfo';
import { useGsapScope, fadeUp, prefersReducedMotion } from '@/utils/gsap';

export const ContactSection: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    useGsapScope(() => {
        fadeUp('[data-contact-title]', { y: 24 });

        const container = sectionRef.current?.querySelector('[data-contact-container]');
        if (!container) return;
        if (prefersReducedMotion()) {
            gsap.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 0.01 });
        } else {
            gsap.from(container, { y: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
        }
    }, sectionRef);

    return (
        <section id="contact" ref={sectionRef} className="container mx-auto px-0 text-center">
            <div className="container mx-auto px-6">
                <h2 data-contact-title className="text-3xl font-bold mb-12 text-center text-green-400 flex items-center justify-center gap-2">
                    <GrContact className="w-8 h-8 text-green-500" />
                    {t("Contact")}
                </h2>
                <div data-contact-container>
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
}