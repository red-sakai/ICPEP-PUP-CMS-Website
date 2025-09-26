import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { useCallback } from 'react';

const iconStyle = { fontSize: '2rem', marginRight: '1.5rem', color: '#A5A5A9', verticalAlign: 'middle' };

const Footer = () => {
  // Enhanced smooth scroll with perfect positioning for all viewports
  const handleFooterLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    // Only handle internal links
    if (href.startsWith('/')) {
      const currentPath = window.location.pathname + window.location.hash;
      
      // If already on the page, scroll to section or top
      if (currentPath === href || (href === '/' && window.location.pathname === '/')) {
        e.preventDefault();
        
        // If hash present, scroll to section with offset adjustment
        const hashIdx = href.indexOf('#');
        if (hashIdx !== -1) {
          const sectionId = href.slice(hashIdx + 1);
          const el = document.getElementById(sectionId);
          if (el) {
            // Calculate offset based on viewport size for perfect positioning
            const getScrollOffset = () => {
              const viewportWidth = window.innerWidth;
              
              // Different offsets for different screen sizes
              if (viewportWidth <= 480) return 60; // Mobile phones
              if (viewportWidth <= 768) return 70; // Tablets portrait
              if (viewportWidth <= 1024) return 80; // Tablets landscape
              if (viewportWidth <= 1440) return 90; // Desktop small
              return 100; // Desktop large
            };
            
            const elementTop = el.offsetTop;
            const offset = getScrollOffset();
            const targetPosition = Math.max(0, elementTop - offset);
            
            window.scrollTo({ 
              top: targetPosition, 
              behavior: 'smooth' 
            });
          }
        } else {
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (
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
          
          /* Responsive Footer Styles for All Viewports */
          
          /* Extra Small Mobile (320px - 480px) */
          @media (max-width: 480px) {
            .footer-container {
              flex-direction: column !important;
              gap: 2rem !important;
              padding: 0 1rem !important;
              text-align: center !important;
            }
            .footer-section {
              min-width: 100% !important;
              flex: none !important;
            }
            .footer-logo-section {
              margin-bottom: 1.5rem !important;
            }
            .footer-logo-section img {
              width: 48px !important;
              height: 48px !important;
            }
            .footer-org-name {
              font-size: 1.25rem !important;
            }
            .footer-social-icons {
              justify-content: center !important;
              gap: 1rem !important;
            }
            .footer-social-icon {
              font-size: 1.8rem !important;
              margin-right: 0 !important;
            }
          }
          
          /* Small Mobile (481px - 600px) */
          @media (min-width: 481px) and (max-width: 600px) {
            .footer-container {
              gap: 2.5rem !important;
              padding: 0 1.5rem !important;
            }
            .footer-section {
              min-width: calc(50% - 1.25rem) !important;
            }
          }
          
          /* Large Mobile / Small Tablet (601px - 768px) */
          @media (min-width: 601px) and (max-width: 768px) {
            .footer-container {
              gap: 3rem !important;
              padding: 0 2rem !important;
            }
            .footer-section {
              min-width: calc(50% - 1.5rem) !important;
            }
          }
          
          /* Tablet Portrait (769px - 1024px) */
          @media (min-width: 769px) and (max-width: 1024px) {
            .footer-container {
              gap: 3.5rem !important;
              padding: 0 2.5rem !important;
            }
            .footer-section {
              min-width: calc(50% - 1.75rem) !important;
            }
          }
          
          /* Tablet Landscape / Small Desktop (1025px - 1200px) */
          @media (min-width: 1025px) and (max-width: 1200px) {
            .footer-container {
              gap: 4rem !important;
              padding: 0 3rem !important;
            }
          }
          
          /* Medium Desktop (1201px - 1440px) */
          @media (min-width: 1201px) and (max-width: 1440px) {
            .footer-container {
              gap: 4.5rem !important;
            }
          }
          
          /* Large Desktop (1441px+) */
          @media (min-width: 1441px) {
            .footer-container {
              gap: 5rem !important;
            }
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
        marginTop: '0',
      }}
    >
    <div
      className="footer-container"
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
      <div className="footer-section footer-logo-section" style={{ flex: '1 1 320px', minWidth: '260px' }}>
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
          <span className="footer-org-name" style={{ fontWeight: 900, fontSize: '1.45rem', letterSpacing: '0.02em' }}>
            ICPEP SE - PUP Manila
          </span>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#A5A5A9', marginBottom: '1rem' }}>
          Institute of Computer Engineers of The Philippines Student Edition – Polytechnic University of The Philippines Manila
        </div>
        <div className="footer-social-icons" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://www.facebook.com/icpepse.pupmanila" target="_blank" rel="noopener noreferrer">
            <span className="footer-social-icon" style={{ ...iconStyle }}><FacebookIcon /></span>
          </a>
          <a href="https://www.instagram.com/icpep.se_pup/" target="_blank" rel="noopener noreferrer">
            <span className="footer-social-icon" style={{ ...iconStyle }}><InstagramIcon /></span>
          </a>
          <a href="https://www.linkedin.com/company/icpepse-pupmanila/" target="_blank" rel="noopener noreferrer">
            <span className="footer-social-icon" style={{ ...iconStyle }}><LinkedInIcon /></span>
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="footer-section" style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Quick Links</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <a className="footer-link" href="/" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>Home</a>
          </li>
          <li>
            <a className="footer-link" href="/about" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>About Us</a>
          </li>
          <li>
            <a className="footer-link" href="/about#mission-vision-section" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>Mission & Vision</a>
          </li>
          <li>
            <a className="footer-link" href="/about#officers-section" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>Officers</a>
          </li>
          <li>
            <a className="footer-link" href="/contact" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>Contacts</a>
          </li>
        </ul>
      </div>
      {/* Organization */}
      <div className="footer-section" style={{ flex: '1 1 180px', minWidth: '160px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Organization</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <a className="footer-link" href="/about#history-section" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>Our History</a>
          </li>
          <li>
            <a className="footer-link" href="https://www.facebook.com/icpepse.pupmanila" target="_blank" rel="noopener noreferrer" style={{ color: '#A5A5A9' }}>Membership</a>
          </li>
          <li>
            <a className="footer-link" href="/contact#faq-section" style={{ color: '#A5A5A9' }} onClick={handleFooterLinkClick}>FAQs</a>
          </li>
        </ul>
      </div>
      {/* Contact Info */}
      <div className="footer-section" style={{ flex: '1 1 260px', minWidth: '220px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem' }}>Contact Info</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A5A5A9', fontSize: '0.9rem', lineHeight: '2.1' }}>
          <li>
            <span style={{ marginRight: '0.7rem', fontSize: '0.9rem', verticalAlign: 'middle' }}><LocationOnIcon /></span>
            3rd Floor College of Engineering and Architecture Building, Pureza St., Manila, Philippines
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
      © 2025 ICPEP SE - PUP Manila. All rights reserved. | Empowering the future of computer engineering.
    </div>
    </footer>
    </>
  );
};

export default Footer;
