import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};