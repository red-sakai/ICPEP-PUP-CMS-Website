import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const iconStyle = { fontSize: '2rem', marginRight: '1.5rem', color: '#A5A5A9', verticalAlign: 'middle' };

const Footer = () => (
  <>
    <style>
      {`
        .footer-link {
          cursor: pointer;
          transition: text-decoration 0.2s ease;
        }
        .footer-link:hover {
          text-decoration: underline;
        }
      `}
    </style>
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
        gap: '5rem',
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
            ICPEP SE - PUP Manila
          </span>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#A5A5A9', marginBottom: '1rem' }}>
          Institute of Computer Engineers of the Philippines - Polytechnic University of the Philippines.
        </div>
        <div>
          <a href="https://www.facebook.com/icpepse.pupmanila" target="_blank" rel="noopener noreferrer">
            <span style={iconStyle}><FacebookIcon /></span>
          </a>
          <a href="https://www.instagram.com/icpep.se_pup/" target="_blank" rel="noopener noreferrer">
            <span style={iconStyle}><InstagramIcon /></span>
          </a>
          <a href="https://www.linkedin.com/company/icpepse-pupmanila/" target="_blank" rel="noopener noreferrer">
            <span style={iconStyle}><LinkedInIcon /></span>
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Quick Links</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <a className="footer-link" href="/" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Home</a>
          </li>
          <li>
            <a className="footer-link" href="/about" style={{ color: '#A5A5A9', textDecoration: 'none' }}>About Us</a>
          </li>
          <li>
            <a className="footer-link" href="/about#mission-vision-section" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Mission & Vision</a>
          </li>
          <li>
            <a className="footer-link" href="/about#officers-section" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Officers</a>
          </li>
          <li>
            <a className="footer-link" href="/contact" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Contacts</a>
          </li>
        </ul>
      </div>
      {/* Organization */}
      <div style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Organization</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <a className="footer-link" href="/about#history-section" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Our History</a>
          </li>
          <li>
            <a className="footer-link" href="/contact#faq-section" style={{ color: '#A5A5A9', textDecoration: 'none' }}>Membership</a>
          </li>
          <li>
            <a className="footer-link" href="/contact#faq-section" style={{ color: '#A5A5A9', textDecoration: 'none' }}>FAQs</a>
          </li>
        </ul>
      </div>
      {/* Contact Info */}
      <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Contact Info</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '0.9rem', verticalAlign: 'middle' }}><LocationOnIcon /></span>
            Polytechnic University of the Philippines, Sta. Mesa, Manila, Philippines
          </li>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '0.9rem', verticalAlign: 'middle' }}><EmailIcon /></span>
            icpepse.pupmanila@gmail.com
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
      color: '#A5A5A9',
      fontSize: '0.8rem',
      marginTop: '0.5rem',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      © 2024 ICPEP SE PUP. All rights reserved. | Empowering the future of computer engineering.
    </div>
  </footer>
  </>
);

export default Footer;
