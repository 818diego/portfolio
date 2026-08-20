import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { prefersReducedMotion } from '@/utils/gsap';

const ScrollToTopButton: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleVisibility = () => {
        if (window.pageYOffset > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        if (!buttonRef.current) return;
        if (prefersReducedMotion()) {
            gsap.set(buttonRef.current, { opacity: isVisible ? 1 : 0, scale: 1 });
            return;
        }
        if (isVisible) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.7)' }
            );
        } else {
            gsap.to(buttonRef.current, { opacity: 0, scale: 0.5, duration: 0.2, ease: 'power2.in' });
        }
    }, [isVisible]);

    return (
        <div className="fixed bottom-12 mr-10 right-4 z-60">
            <button
                ref={buttonRef}
                onClick={scrollToTop}
                className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 shadow-lg cursor-pointer"
                aria-label={t('common.scrollToTop')}
            >
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;