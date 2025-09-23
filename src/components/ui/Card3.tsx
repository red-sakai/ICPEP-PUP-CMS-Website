// Adviser and Officers Card

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

type Card3Props = {
  name: string;
  position: string;
  photoUrl?: string;
  width?: string | number;
  height?: string | number;
  photoSize?: string | number;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

const Card3: React.FC<Card3Props> = ({
  name,
  position,
  photoUrl,
  width = '260px',
  height = 'auto',
  photoSize = '100px',
  facebookUrl,
  instagramUrl,
  linkedinUrl,
}) => {

  const [hovered, setHovered] = React.useState<number | null>(null);
  const icons = [
    { Icon: FaFacebookF, url: facebookUrl },
    { Icon: FaInstagram, url: instagramUrl },
    { Icon: FaLinkedinIn, url: linkedinUrl },
  ];

  const renderIcon = (Icon: React.ElementType, url: string | undefined, idx: number) => {
    const isHovered = hovered === idx;
    const isOther = hovered !== null && hovered !== idx;
    let transform = 'none';
    if (isHovered) transform = 'scale(1.25)';
    else if (isOther) transform = idx < hovered! ? 'translateX(-12px)' : 'translateX(12px)';
    return url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'inherit',
          transition: 'transform 0.25s cubic-bezier(.4,0,.2,1)',
          transform,
          zIndex: isHovered ? 2 : 1,
        }}
        onMouseEnter={() => setHovered(idx)}
        onMouseLeave={() => setHovered(null)}
      >
        <Icon />
      </a>
    ) : (
      <span
        style={{
          opacity: 0.5,
          cursor: 'default',
          transition: 'transform 0.25s cubic-bezier(.4,0,.2,1)',
          transform,
        }}
        onMouseEnter={() => setHovered(idx)}
        onMouseLeave={() => setHovered(null)}
      >
        <Icon />
      </span>
    );
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '18px',
        border: '1px solid #ddd',
        padding: '2rem 1.5rem',
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      {/* Resizable Photo */}
      <div
        style={{
          width: photoSize,
          height: photoSize,
          borderRadius: '50%',
          backgroundColor: '#e0e0e0',
          backgroundImage: photoUrl ? `url(${photoUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Name & Position */}
      <div>
        <h3
          style={{
            margin: '0',
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#111',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            margin: '0.3rem 0 0',
            fontSize: '1rem',
            color: '#555',
          }}
        >
          {position}
        </p>
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '0.5rem',
          color: '#999',
          fontSize: '1.3rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icons.map(({ Icon, url }, idx) => renderIcon(Icon, url, idx))}
      </div>
    </div>
  );
};

export default Card3;