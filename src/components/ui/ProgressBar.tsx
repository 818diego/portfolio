import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-400 to-green-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
