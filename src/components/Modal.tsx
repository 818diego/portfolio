import React from "react";
import { motion } from "framer-motion";
import { modalData } from "../data/dataModal";
import { FaTimes, FaCheckCircle, FaTools } from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
    const modalContent = modalData.find(
        (item: { id: number }) => item.id === id
    );

    if (!modalContent) return null;

    return isOpen ? (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={onClose}>
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg p-6 relative w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaTimes />
                </button>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold flex items-center">
                        <FaCheckCircle className="mr-2 text-green-500 text-lg" />
                        {modalContent.title}
                    </h2>
                </div>
                <p className="mb-4">{modalContent.content.description}</p>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaTools className="mr-2 text-blue-500 text-lg" />
                    Tecnologías utilizadas:
                </h3>
                <ul className="list-disc list-inside mb-4 pl-5">
                    {modalContent.content.technologies.map(
                        (
                            tech:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                  >
                                | Iterable<React.ReactNode>
                                | React.ReactPortal
                                | null
                                | undefined,
                            index: React.Key | null | undefined
                        ) => (
                            <li key={index} className="mb-1">
                                {tech}
                            </li>
                        )
                    )}
                </ul>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaTools className="mr-2 text-blue-500 text-lg" />
                    Metodologías:
                </h3>
                <ul className="list-disc list-inside mb-4 pl-5">
                    {modalContent.content.methodologies.map(
                        (
                            method:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                  >
                                | Iterable<React.ReactNode>
                                | React.ReactPortal
                                | null
                                | undefined,
                            index: React.Key | null | undefined
                        ) => (
                            <li key={index} className="mb-1">
                                {method}
                            </li>
                        )
                    )}
                </ul>
                <p
                    dangerouslySetInnerHTML={{
                        __html: modalContent.content.hosting,
                    }}></p>
            </motion.div>
        </motion.div>
    ) : null;
};

export default Modal;
