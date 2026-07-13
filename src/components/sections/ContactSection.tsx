import React, { useEffect, useRef } from 'react';
import { GrContact } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import { ContactInfo } from '../ui/ContactInfo';

export const ContactSection: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section
            ref={sectionRef}
            className="container mx-auto px-0 text-center scroll-fade-in"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-green-400 flex items-center justify-center gap-2">
                    <GrContact className="w-8 h-8 text-green-500" />
                    {t("Contact")}
                </h2>
                <ContactInfo />
            </div>
        </section>
    );
}