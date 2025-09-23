{/* longer card */}

import React from 'react';

type ReactNode = React.ReactNode;

type Card2Props = {
  description: string;
  title?: string;
  icon?: ReactNode;
};

const Card2: React.FC<Card2Props> = ({ description, title, icon }) => (
  <div
    style={{
      background: '#F9F7FB',
      borderRadius: '18px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      padding: '2rem 3rem',
      width: '100%',
      maxWidth: '900px', 
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.2rem',
      margin: '0 auto',
    }}
  >
    {(title || icon) && (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
        {icon && <div style={{ color: '#9362CD' }}>{icon}</div>}
        {title && (
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#333',
              margin: 0,
            }}
          >
            {title}
          </h3>
        )}
      </div>
    )}
    <p
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.2rem',
        color: '#222',
        margin: 0,
        lineHeight: 1.4,
        textAlign: 'justify',
      }}
    >
      {description}
    </p>
  </div>
);

export default Card2;