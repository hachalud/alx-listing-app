import React from 'react';

interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap
        ${isActive 
          ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
        }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};