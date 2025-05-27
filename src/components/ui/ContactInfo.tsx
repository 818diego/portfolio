import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export const ContactInfo: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
    }

    const handleSubmit = async () => {
        const webhookUrl = 'https://discord.com/api/webhooks/1364675211454189700/gddcWXAR1fzlYUgq6oWgaisXXJ01zTZ793Ti6sb_ex5tr7A27UcKRPZNQnzIRQK-Vbsg';
        const embed = {
            title: "New Contact Form Submission",
            fields: [
                { name: "Name", value: sanitizeMessage(name), inline: true },
                { name: "Email", value: sanitizeMessage(email), inline: true },
                { name: "Message", value: sanitizeMessage(message) }
            ]
        };

        try {
            await axios.post(webhookUrl, {
                embeds: [embed],
                tts: false,
            });
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message to Discord", error);
            alert("Failed to send message.");
        }
    };

    return (
        <div className="max-w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden flex">
            <div className="flex flex-col justify-center items-center p-6 w-1/2">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400">{t("I'd love to hear from you!")}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{t("If you have any questions or want to discuss a project, feel free to contact me.")}</p>
            </div>
            <div className="border-l border-gray-300 dark:border-zinc-700"></div>
            <div className="p-6 w-1/2">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{t("Send me a message")}</h3>
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
                        />
                    </div>
                    <div className="flex items-center justify-around">
                        <button
                            className="bg-green-500 hover:bg-green-700 transition-all text-black font-bold py-2 px-4 rounded focus:outline-none"
                            type="button"
                            onClick={handleSubmit}
                        >
                            {t("Send")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
