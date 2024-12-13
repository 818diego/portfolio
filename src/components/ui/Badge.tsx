import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const baseStyles = "px-2 py-1 rounded-full text-sm font-medium";
  const variants = {
    default: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    outline: "border border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </span>
  );
};