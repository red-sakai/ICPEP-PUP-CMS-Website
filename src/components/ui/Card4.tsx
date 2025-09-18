import React, { useState } from 'react';

type Card4Props = {
  question: string;
  answer: string;
};

const Card4: React.FC<Card4Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: '#F9F7FB',
        borderRadius: '18px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        padding: '2rem 3rem',
        width: '100%',
        maxWidth: '900px',
        boxSizing: 'border-box',
        margin: '0 auto',
        marginBottom: '1.5rem',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#333',
            margin: 0,
          }}
        >
          {question}
        </h3>
        <span
          style={{
            fontSize: '1.8rem',
            color: '#9362CD',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            marginLeft: '1rem',
            userSelect: 'none',
          }}
        >
          ▼
        </span>
      </div>
      {open && (
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.15rem',
            color: '#222',
            margin: '1.2rem 0 0 0',
            lineHeight: 1.6,
            textAlign: 'justify',
            transition: 'opacity 0.2s',
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

export default Card4;
