import React from 'react';

const iconStyle = { fontSize: '2rem', marginRight: '1.5rem', color: '#fff', verticalAlign: 'middle' };

const Footer = () => (
  <footer
    style={{
      background: '#23222A',
      color: '#fff',
      padding: '3.5rem 0 1.5rem 0',
      fontFamily: 'Montserrat, sans-serif',
      width: '100%',
      marginTop: '4rem',
    }}
  >
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        padding: '0 2rem',
      }}
    >
      {/* Logo and org name */}
      <div style={{ flex: '1 1 320px', minWidth: '260px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
          <img
            src="/ICPEP-logo.svg"
            alt="ICPEP SE PUP Logo"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              marginRight: '1.2rem',
              background: '#fff',
              objectFit: 'cover',
            }}
            draggable={false}
          />
          <span style={{ fontWeight: 900, fontSize: '1.45rem', letterSpacing: '0.02em' }}>
            ICPEP SE PUP
          </span>
        </div>
        <div style={{ fontSize: '1rem', color: '#ccc', marginBottom: '1.5rem' }}>
          Institute of Computer Engineers of the Philippines - Polytechnic University of the Philippines.
        </div>
        <div>
          <span style={iconStyle}><i className="fab fa-facebook-f" /></span>
          <span style={iconStyle}><i className="fab fa-x-twitter" /></span>
          <span style={iconStyle}><i className="fab fa-instagram" /></span>
          <span style={iconStyle}><i className="fab fa-linkedin-in" /></span>
        </div>
      </div>
      {/* Quick Links */}
      <div style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Quick Links</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '1rem', lineHeight: '2.1' }}>
          <li>Home</li>
          <li>About Us</li>
          <li>Mission & Vision</li>
          <li>Officers</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/* Organization */}
      <div style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Organization</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '1rem', lineHeight: '2.1' }}>
          <li>Our History</li>
          <li>Events</li>
          <li>Membership</li>
          <li>Resources</li>
          <li>News</li>
        </ul>
      </div>
      {/* Contact Info */}
      <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Contact Info</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '1rem', lineHeight: '2.1' }}>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '1.2rem', verticalAlign: 'middle' }}>📍</span>
            Polytechnic University of the Philippines<br />Sta. Mesa, Manila, Philippines
          </li>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '1.2rem', verticalAlign: 'middle' }}>📞</span>
            +63 XXX XXX XXXX
          </li>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '1.2rem', verticalAlign: 'middle' }}>✉️</span>
            m@gmail.com
          </li>
        </ul>
      </div>
    </div>
    {/* Divider */}
    <div style={{
      width: '90%',
      margin: '2.5rem auto 1.2rem auto',
      borderBottom: '1px solid #444',
    }} />
    {/* Copyright */}
    <div style={{
      textAlign: 'center',
      color: '#ccc',
      fontSize: '1rem',
      marginTop: '0.5rem',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      © 2024 ICPEP SE PUP. All rights reserved. | Empowering the future of computer engineering.
    </div>
  </footer>
);

export default Footer;
