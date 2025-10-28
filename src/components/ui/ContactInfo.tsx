import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export const ContactInfo: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sanitizeMessage = (text: string): string => {
        return text
            .replace(/@everyone/gi, '@\u200beveryone')
            .replace(/@here/gi, '@\u200bhere')
            .replace(/\/tts/gi, '/\u200btts')
            .replace(/\/me/gi, '/\u200bme')
            .replace(/[`*~_|{}\[\]<>]/g, '')
            .replace(/['"]/g, '')
            .replace(/\\/g, '')
            .replace(/https?:\/\/[^\s]+/gi, '[link removed]');
    };
    const handleSubmit = async () => {
        if (!name || !email || !message) {
            alert(t("Please fill in all fields"));
            return;
        }
        setIsSubmitting(true);
        const webhookUrl = 'https://discord.com/api/webhooks/1432577141836611667/u0JcOXVKUO63uemwNX6Y3s8oecEXl183eXFoUzsjdbbytNgJw_VVsGbqDZCkjY21iwbC';
        const embed = {
            title: "Nuevo mensaje de contacto en tu portfolio",
            fields: [
                { name: "Nombre", value: sanitizeMessage(name), inline: true },
                { name: "Correo electrónico", value: sanitizeMessage(email), inline: true },
                { name: "Mensaje", value: sanitizeMessage(message) }
            ]
        };

        try {
            await axios.post(webhookUrl, {
                embeds: [embed],
                tts: false,
            });
            setName('');
            setEmail('');
            setMessage('');
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        } catch (error) {
            console.error("Error sending message to Discord", error);
            alert(t("Failed to send message. Please try again later."));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center p-6 w-full md:w-1/2">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400">{t("I'd love to hear from you!")}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{t("If you have any questions or want to discuss a project, feel free to contact me.")}</p>
            </div>
            <div className="hidden md:block border-l border-gray-300 dark:border-zinc-700"></div>
            <div className="p-6 w-full md:w-1/2 relative">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{t("Send me a message")}</h3>                <div className={`fixed inset-0 flex items-center justify-center z-10 pointer-events-none ${showSuccess ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                    <div className="bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg p-4 shadow-lg max-w-xs w-full mx-4">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-green-700 dark:text-green-300 font-medium">{t("Message sent successfully!")}</p>
                        </div>
                    </div>
                </div>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="flex text-green-600 dark:text-green-400 text-[15px] font-bold mb-2" htmlFor="name">
                            {t("Name")}
                        </label>
                        <input
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none"
                            id="name"
                            type="text"
                            placeholder={t("Your name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex text-green-600 dark:text-green-400 text-[15px] font-bold mb-2" htmlFor="email">
                            {t("Email Address")}
                        </label>
                        <input
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none"
                            id="email"
                            type="email"
                            placeholder={t("Your email address")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex text-green-600 dark:text-green-400 text-[15px] font-bold mb-2" htmlFor="message">
                            {t("Message")}
                        </label>
                        <textarea
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none"
                            id="message"
                            placeholder={t("Your message")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={isSubmitting}
                            rows={4}
                        />
                    </div>
                    <div className="flex items-center justify-around">
                        <button
                            className={`bg-green-500 hover:bg-green-700 transition-all text-black font-bold py-2 px-4 rounded focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t("Sending...") : t("Send")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};