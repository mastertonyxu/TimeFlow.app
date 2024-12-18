import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div className={`flex-1 bg-gray-200 rounded-full h-6 ${className}`}>
      <div
        className="bg-blue-500 h-6 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}