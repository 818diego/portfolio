import React from 'react';
import { GrContact } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import { ContactInfo } from '@/components/ui/ContactInfo';

export const ContactSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-0 text-center">
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