import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'gradientOutline';
  style?: React.CSSProperties;
  onClick?: () => void;
  iconRight?: React.ReactNode;
};

const Button = ({
  children,
  variant = 'primary',
  style,
  onClick,
  iconRight,
}: ButtonProps) => {
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
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75em',
  };

  const outline: React.CSSProperties =
    variant === 'outline'
      ? {
          background: 'transparent',
          color: '#fff',
          border: '2px solid rgba(255,255,255,.9)',
        }
      : {};

  const gradientOutline: React.CSSProperties =
    variant === 'gradientOutline'
      ? {
          background: 'transparent',
          color: '#fff',
          border: '2px solid #fff',
          boxShadow: 'none',
          position: 'relative',
          zIndex: 1,
        }
      : {};

  return (
    <button
      onClick={onClick}
      style={{
        ...base,
        ...outline,
        ...gradientOutline,
        ...(variant === 'primary'
          ? { boxShadow: '0 6px 18px -4px rgba(93,49,158,.5)' }
          : {}),
        ...style,
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = '#8B57CC';
        else if (variant === 'gradientOutline') e.currentTarget.style.opacity = '0.92';
        else e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = '#9D6AD6';
        else if (variant === 'gradientOutline') e.currentTarget.style.opacity = '1';
        else e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
