import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  tech: { name: string; icon: React.ComponentType }[];
  features: string[];
  methodology: string;
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  const nextImage = () => {
    if (images.length <= 1) return;
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsImageChanging(false);
    }, 150);
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsImageChanging(false);
    }, 150);
  };

  const goToImage = (index: number) => {
    if (images.length <= 1 || index === currentImageIndex) return;
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsImageChanging(false);
    }, 150);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white dark:bg-zinc-800 rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar modal-content mx-4 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-zinc-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-green-300">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="relative mb-6">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
              <img
                src={images[currentImageIndex]}
                alt={project.title}
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                  isImageChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={isImageChanging}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={isImageChanging}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      disabled={isImageChanging}
                      className={`w-3 h-3 rounded-full transition-all disabled:cursor-not-allowed ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-green-300">
                {t('Description')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-green-300">
                {t('Technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="default" icon={<tech.icon />}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-green-300">
                {t('Features')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-green-300 mb-2">
                  {t('Methodology')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{project.methodology}</p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-green-300 mb-2">
                  {t('Team Size')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{project.teamSize}</p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-green-300 mb-2">
                  {t('Duration')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-green-300 mb-2">
                  {t('Impact')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-zinc-700">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaCode className="w-4 h-4" />
                  <span>{t('Github Repository')}</span>
                </a>
              ) : (
                <span className="flex items-center gap-2 px-6 py-3 text-gray-500 dark:text-gray-400">
                  <FaCode className="w-4 h-4" />
                  <span>{t('No code available')}</span>
                </span>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>{t('Live Preview')}</span>
                </a>
              ) : (
                <span className="flex items-center gap-2 px-6 py-3 text-gray-500 dark:text-gray-400">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>{t('No demo available')}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
