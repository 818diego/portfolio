import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const ContactInfo: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const sanitizeMessage = (text: string): string => {
        return text.trim();
    };

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            toast.error(t("Please fill in all fields"));
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error(t("Please enter a valid email"));
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
            toast.success(t("Message sent successfully!"));
        } catch (error) {
            console.error("Error sending message", error);
            toast.error(t("Failed to send message. Please try again later."));
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
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{t("Send me a message")}</h3>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="flex text-green-600 dark:text-green-400 text-[15px] font-bold mb-2" htmlFor="name">
                            {t("Name")}
                        </label>
                        <input
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
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
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
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
                            className="rounded w-full py-2 px-3 bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
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