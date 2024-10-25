import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-24">
            <motion.div
                className="text-3xl font-bold text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                This section is under development
            </motion.div>
        </div>
    );
};

export default About;
