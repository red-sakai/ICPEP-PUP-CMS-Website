{/* longer card */}

import React from 'react';

type Card2Props = {
  description: string;
};

const Card2: React.FC<Card2Props> = ({ description }) => (
  <div
    style={{
      background: '#F9F7FB',
      borderRadius: '18px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      padding: '2rem 3rem',
      width: '100%',
      maxWidth: '900px', // limit for readability
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.2rem',
      margin: '0 auto',
    }}
  >
    <p
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.15rem',
        color: '#222',
        margin: 0,
        lineHeight: 1.6,
        textAlign: 'justify',
      }}
    >
      {description}
    </p>
  </div>
);

export default Card2;