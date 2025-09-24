import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Add keyframe animations
const dropdownStyles = `
  @keyframes dropdownSlideIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .dropdown-link:hover {
    background-color: #f3f4f6 !important;
    color: #1f2937 !important;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState(90);
  const navigate = useNavigate();
  const gradient = 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)';

  // Inject styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = dropdownStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };

    if (aboutDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdownOpen]);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, [menuOpen]);

  // Handle scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Change navbar after scrolling 100px
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Import Montserrat font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
        `}
      </style>
      <nav
        ref={navRef}
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
          padding: '0 60px',
          background: isScrolled 
            ? '#ffffff' 
            : 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
          fontFamily: 'Montserrat, sans-serif',
          transition: 'all 0.3s ease-in-out',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {/* Logo (clickable) */}
        <div style={{ 
          fontWeight: 900, 
          fontSize: 32, 
          background: isScrolled 
            ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)' 
            : 'transparent',
          color: isScrolled ? 'transparent' : '#fff',
          WebkitBackgroundClip: isScrolled ? 'text' : 'unset',
          backgroundClip: isScrolled ? 'text' : 'unset',
          letterSpacing: 2, 
          fontFamily: 'Montserrat, sans-serif', 
          marginLeft: 16, 
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out'
        }}
          onClick={() => {
            if (window.location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Go to Home"
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              if (window.location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
          }}
        >
          ICPEP
        </div>
        {/* Desktop Navigation */}
        <div className="navbar-links" style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          <Link to="/" style={{ 
            color: isScrolled ? '#6b7280' : '#fff', 
            fontWeight: 500, 
            fontSize: 16, 
            textDecoration: 'none', 
            fontFamily: 'Montserrat, sans-serif',
            transition: 'color 0.3s ease-in-out'
          }}>Home</Link>
          <div 
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <div style={{ 
              color: isScrolled ? '#6b7280' : '#fff', 
              fontWeight: 500, 
              fontSize: 16, 
              fontFamily: 'Montserrat, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <Link 
                to="/about" 
                style={{ 
                  color: isScrolled ? '#6b7280' : '#fff', 
                  fontWeight: 500, 
                  fontSize: 16, 
                  textDecoration: 'none', 
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'color 0.3s ease-in-out'
                }}
              >
                About Us
              </Link>
              <ArrowDropDownIcon 
                style={{ 
                  fontSize: 20, 
                  color: isScrolled ? '#6b7280' : '#fff',
                  transition: 'transform 0.2s ease, color 0.3s ease-in-out', 
                  transform: aboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                }} 
              />
            </div>
            {aboutDropdownOpen && (
              <>
                {/* Invisible bridge area */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-120px',
                    width: '380px',
                    height: '12px',
                    background: 'transparent',
                    zIndex: 999
                  }}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                />
                {/* Dropdown menu */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-120px',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    minWidth: '380px',
                    zIndex: 1000,
                    marginTop: '12px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    animation: 'dropdownSlideIn 0.2s ease-out',
                    display: 'flex',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  {/* Left section with ICPEP logo */}
                  <div style={{
                    width: '140px',
                    padding: '24px 20px',
                    background: 'linear-gradient(135deg, #9362CD 0%, #E80F50 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <img 
                      src="/ICPEP-logo.svg" 
                      alt="ICPEP Logo" 
                      style={{
                        width: '60px',
                        height: '60px',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                    
                  </div>
                  
                  {/* Divider */}
                  <div style={{
                    width: '1px',
                    background: 'rgba(0,0,0,0.08)'
                  }} />
                  
                  {/* Right section with menu items */}
                  <div style={{
                    flex: 1,
                    padding: '16px 0'
                  }}>
                    <Link 
                      to="/about/history" 
                      className="dropdown-link"
                      style={{ 
                        display: 'block',
                        color: '#374151', 
                        fontWeight: 500, 
                        fontSize: 15, 
                        textDecoration: 'none', 
                        fontFamily: 'Montserrat, sans-serif',
                        padding: '12px 20px',
                        transition: 'all 0.2s ease',
                        borderRadius: '8px',
                        margin: '0 8px'
                      }}
                      onClick={e => {
                        e.preventDefault();
                        setAboutDropdownOpen(false);
                        if (window.location.pathname !== '/about') {
                          navigate('/about');
                          setTimeout(() => {
                            const el = document.getElementById('history-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          const el = document.getElementById('history-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Our History
                    </Link>
                    <Link 
                      to="/about/mission" 
                      className="dropdown-link"
                      style={{ 
                        display: 'block',
                        color: '#374151', 
                        fontWeight: 500, 
                        fontSize: 15, 
                        textDecoration: 'none', 
                        fontFamily: 'Montserrat, sans-serif',
                        padding: '12px 20px',
                        transition: 'all 0.2s ease',
                        borderRadius: '8px',
                        margin: '0 8px'
                      }}
                      onClick={e => {
                        e.preventDefault();
                        setAboutDropdownOpen(false);
                        if (window.location.pathname !== '/about') {
                          navigate('/about');
                          setTimeout(() => {
                            const el = document.getElementById('mission-vision-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          const el = document.getElementById('mission-vision-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      to="/about/officers" 
                      className="dropdown-link"
                      style={{ 
                        display: 'block',
                        color: '#374151', 
                        fontWeight: 500, 
                        fontSize: 15, 
                        textDecoration: 'none', 
                        fontFamily: 'Montserrat, sans-serif',
                        padding: '12px 20px',
                        transition: 'all 0.2s ease',
                        borderRadius: '8px',
                        margin: '0 8px'
                      }}
                      onClick={e => {
                        e.preventDefault();
                        setAboutDropdownOpen(false);
                        if (window.location.pathname !== '/about') {
                          navigate('/about');
                          setTimeout(() => {
                            const el = document.getElementById('officers-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          const el = document.getElementById('officers-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Officers
                    </Link>
                    <div 
                      className="dropdown-link"
                      style={{ 
                        display: 'block',
                        color: '#374151', 
                        fontWeight: 500, 
                        fontSize: 15, 
                        textDecoration: 'none', 
                        fontFamily: 'Montserrat, sans-serif',
                        padding: '12px 20px',
                        transition: 'all 0.2s ease',
                        borderRadius: '8px',
                        margin: '0 8px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        window.location.href = "https://www.facebook.com/icpepse.pupmanila";
                      }}
                    >
                      Membership
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <Link to="/contact" style={{ 
            color: isScrolled ? '#6b7280' : '#fff', 
            fontWeight: 500, 
            fontSize: 16, 
            textDecoration: 'none', 
            fontFamily: 'Montserrat, sans-serif',
            transition: 'color 0.3s ease-in-out'
          }}>Contact Us</Link>
        </div>
        <div className="navbar-btn" style={{ minWidth: 0, marginRight: 16 }}>
          <Button
            style={{ 
              padding: '14px 22px',
              background: isScrolled 
                ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)'
                : '#9D6AD6',
              transition: 'all 0.3s ease-in-out'
            }}
            onClick={() => window.location.href = "https://www.facebook.com/icpepse.pupmanila"}
          >
            Join Now
          </Button>
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
            background: isScrolled 
              ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)'
              : '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
            transition: 'background 0.3s ease-in-out',
          }} />
          <span style={{
            width: 28,
            height: 4,
            background: isScrolled 
              ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)'
              : '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
            transition: 'background 0.3s ease-in-out',
          }} />
          <span style={{
            width: 28,
            height: 4,
            background: isScrolled 
              ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)'
              : '#fff',
            margin: '4px 0',
            borderRadius: 2,
            display: 'block',
            transition: 'background 0.3s ease-in-out',
          }} />
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{
            position: 'fixed',
            top: navHeight,
            left: 0,
            right: 0,
            height: '31vh',
            maxHeight: `calc(100vh - ${navHeight}px)`,
            background: isScrolled ? '#ffffff' : gradient,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            padding: '28px 0 32px',
            fontFamily: 'Montserrat, sans-serif',
            zIndex: 99,
            overflowY: 'auto',
            borderRadius: '0 0 24px 24px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
            border: isScrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
            transition: 'background 0.3s ease-in-out'
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              color: isScrolled ? '#6b7280' : '#fff',
              transition: 'color 0.3s ease-in-out',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              color: isScrolled ? '#6b7280' : '#fff',
              transition: 'color 0.3s ease-in-out',
            }}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            style={{
              fontWeight: 600,
              fontSize: 22,
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              color: isScrolled ? '#6b7280' : '#fff',
              transition: 'color 0.3s ease-in-out',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Button
            style={{
              background: isScrolled ? gradient : '#9D6AD6',
              color: '#ffffff',
              transition: 'all 0.3s ease-in-out'
            }}
            onClick={() => window.location.href = "https://www.facebook.com/icpepse.pupmanila"}
          >
            Join Now
          </Button>
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
            .navbar-spacer {
              display: none !important;
            }
          }
          @media (min-width: 901px) {
            .navbar-mobile-menu {
              display: none !important;
            }
            .navbar-spacer {
              display: block !important;
            }
          }
          .dropdown-link:hover {
            background-color: #f5f5f5 !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      {!menuOpen && <div className="navbar-spacer" style={{ height: 90 }} />}
    </>
  );
};

export default Navbar;