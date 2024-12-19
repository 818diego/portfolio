import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  icon?: React.ReactNode; // Added icon prop
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', icon }) => {
  const baseStyles = "px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1";
  const variants = {
    default: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    outline: "border border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {icon && <span className="w-4 h-4">{icon}</span>} {/* Render icon if provided */}
      {children}
    </span>
  );
};