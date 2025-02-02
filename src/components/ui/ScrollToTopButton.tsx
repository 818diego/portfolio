import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <div className="fixed bottom-12 mr-10 right-4 z-60">
            <button
                onClick={scrollToTop}
                className={`bg-green-500 text-white p-4 rounded-full hover:bg-green-600 hover:scale-110 duration-500 transform transition-transform ease-in-out shadow-lg ${isVisible ? 'fade-in' : 'fade-out'}`}
            >
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
