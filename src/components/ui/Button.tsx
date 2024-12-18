import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'outline' | 'danger-outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    'danger-outline': 'bg-red-100 text-red-600 hover:bg-red-200',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}