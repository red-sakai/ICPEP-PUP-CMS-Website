{/* shorter card */}

import React from 'react';
import './Card.css';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode; // changed from string to React.ReactNode
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="contact-card">
    <div className="contact-card-icon">
      {icon}
    </div>
    <h3 className="contact-card-title">
      {title}
    </h3>
    <div className="contact-card-description">
      {description}
    </div>
  </div>
);

export default Card;
