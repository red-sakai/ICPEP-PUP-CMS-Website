import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Import Montserrat font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
        `}
      </style>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          width: '100%',
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px', // increased from 40px
          background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 900, fontSize: 32, color: '#fff', letterSpacing: 2, fontFamily: 'Montserrat, sans-serif', marginLeft: 16 }}>
          ICPEP
        </div>
        {/* Desktop Navigation */}
        <div className="navbar-links" style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          <Link to="/" style={{ color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Home</Link>
          <div style={{ position: 'relative' }}>
            <Link to="/about" style={{ color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>
              About Us <span style={{ fontSize: 14 }}>▼</span>
            </Link>
          </div>
          <Link to="/contact" style={{ color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Contact Us</Link>
        </div>
        <div className="navbar-btn" style={{ minWidth: 0, marginRight: 16 }}>
          <Button style={{ padding: '14px 22px' }}>Join Now</Button>
        </div>
        {/* Hamburger for mobile */}
        <div
          className="navbar-hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: 40,
            height: 40,
            minWidth: 0,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{
            width: 28,
            height: 4,
            background: '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
          }} />
          <span style={{
            width: 28,
            height: 4,
            background: '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
          }} />
          <span style={{
            width: 28,
            height: 4,
            background: '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
          }} />
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{
            position: 'fixed',
            top: 90, // changed from 70
            left: 0,
            right: 0,
            background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            padding: '24px 0',
            zIndex: 99,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
            }}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Button>Join Now</Button>
        </div>
      )}
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            nav {
              padding: 0 12px !important;
              height: auto !important;
            }
            .navbar-links, .navbar-btn {
              display: none !important;
            }
            .navbar-hamburger {
              display: flex !important;
            }
            .navbar-btn button {
              font-size: 18px !important;
              padding: 10px 18px !important;
            }
          }
          @media (min-width: 901px) {
            .navbar-mobile-menu {
              display: none !important;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      {/* Spacer to prevent content being hidden under fixed navbar */}
      <div style={{ height: 90 }} />
    </>
  );
};

export default Navbar;
