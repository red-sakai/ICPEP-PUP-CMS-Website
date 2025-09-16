import React from 'react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div
    style={{
      background: '#F9F7FB',
      borderRadius: '18px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      padding: '2rem 2rem 1.5rem 2rem',
      minWidth: '320px',
      maxWidth: '370px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.2rem',
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
        marginBottom: '0.5rem',
      }}
    >
      {icon}
    </div>
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 900,
        fontSize: '1.35rem',
        color: '#222',
        margin: 0,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.08rem',
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
