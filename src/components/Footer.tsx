import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 w-full shadow-inner">
            <p className="text-gray-800 dark:text-gray-200">
                &copy; {new Date().getFullYear()} Diego Merino. Todos los
                derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
