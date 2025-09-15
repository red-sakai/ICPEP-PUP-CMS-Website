import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({ children, variant = 'primary', style, onClick }: ButtonProps) => {
  const base: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    borderRadius: 12,
    padding: '14px 32px',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    transition: 'all .25s ease',
    border: 'none',
    background: '#9D6AD6',
    color: '#fff',
  };

  const outline: React.CSSProperties =
    variant === 'outline'
      ? {
          background: 'transparent',
          color: '#fff',
          border: '2px solid rgba(255,255,255,.9)',
        }
      : {};

  return (
    <button
      onClick={onClick}
      style={{
        ...base,
        ...outline,
        ...(variant === 'primary'
          ? { boxShadow: '0 6px 18px -4px rgba(93,49,158,.5)' }
          : {}),
        ...style,
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = '#8B57CC';
        else e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = '#9D6AD6';
        else e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
};

export default Button;
