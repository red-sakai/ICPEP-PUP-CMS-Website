{/* shorter card */}

import React from 'react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div
    style={{
      background: '#FBF9FD',
      borderRadius: '18px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      padding: '1.5rem 2.5rem 1.25rem 2.5rem',
      minWidth: '400px',
      maxWidth: '450px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
      margin: '0 1rem',
    }}
  >
    <div
      style={{
        background: '#EAE8F6',
        borderRadius: '12px',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0.25rem',
      }}
    >
      {icon}
    </div>
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#222',
        margin: 0,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        color: '#555',
        margin: 0,
        lineHeight: 1.5,
      }}
    >
      {description}
    </p>
  </div>
);

export default Card;
