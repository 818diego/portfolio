import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <header className="w-full">
                <Navbar />
            </header>
            <main className="flex-grow w-full">{children}</main>
        </div>
    );
};

export default Layout;
