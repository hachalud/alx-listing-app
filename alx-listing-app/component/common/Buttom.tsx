import React from 'react';
import { ButtonProps } from '../../interfaces';

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  // Base styling classes (Assuming Tailwind CSS is used)
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-emerald-300',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 disabled:bg-amber-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:text-gray-400',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;