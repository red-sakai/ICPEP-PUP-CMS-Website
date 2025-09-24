import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import CrownIcon from '@mui/icons-material/WorkspacePremium';

const Hero = ({ id }: { id?: string }) => {
  const waveRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Wave is hidden at bottom, pops up as user scrolls (max 120px)
      if (waveRef.current) {
        const maxOffset = 180; // height of wave
        const popAmount = Math.min(scrollY, 120) / 120; // 0 to 1
        waveRef.current.style.transform = `translateY(${maxOffset * (1 - popAmount)}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial position
    if (waveRef.current) {
      waveRef.current.style.transform = `translateY(180px)`;
    }
    // Animate text and buttons
    if (textRef.current) {
      textRef.current.style.opacity = '1';
      textRef.current.style.transform = 'translateY(0)';
    }
    if (btnRef.current) {
      btnRef.current.style.opacity = '1';
      btnRef.current.style.transform = 'translateY(0)';
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id={id}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative", 
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient background */}
      <style>
        {`
          html, body {
            box-sizing: border-box;
            overflow-x: hidden;
            width: 100vw;
          }
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient-bg {
            position: absolute;
            left: 0; top: 0;
            width: 100vw; height: 100vh;
            z-index: 0;
            background: url('/pup.jpg') center/cover no-repeat;
            background-size: cover;
          }
          /* Hide background image on mobile */
          @media (max-width: 768px) {
            .animated-gradient-bg {
              display: none !important;
            }
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .blur-overlay {
            position: absolute;
            left: 0; top: 0;
            width: 100vw; height: 100vh;
            z-index: 2;
            pointer-events: none;
            backdrop-filter: blur(1px);
            opacity: 0.05;
          }
          .purple-overlay {
            position: absolute;
            left: 0; top: 0;
            width: 100vw; height: 100vh;
            z-index: 1;
            background: linear-gradient(135deg, 
              rgba(147, 98, 205, 0.85), 
              rgba(190, 56, 142, 0.75), 
              rgba(232, 15, 80, 0.65), 
              rgba(242, 135, 118, 0.55), 
              rgba(253, 229, 217, 0.45));
          }
          /* Comprehensive responsive design for all viewports */
          
          /* Extra Small Mobile (320px - 480px) */
          @media (max-width: 480px) {
            .animated-gradient-bg {
              display: none !important;
            }
            .purple-overlay {
              background: linear-gradient(135deg, 
                rgba(147, 98, 205, 0.98), 
                rgba(190, 56, 142, 0.90), 
                rgba(232, 15, 80, 0.82), 
                rgba(242, 135, 118, 0.74), 
                rgba(253, 229, 217, 0.66)) !important;
            }
            .hero-content {
              padding: 0 1rem !important;
            }
            .hero-text {
              margin-top: -80px !important;
            }
            .welcome-message {
              font-size: 0.8rem !important;
              letter-spacing: 0.5px !important;
              margin: 0 0 0.8rem 0 !important;
              gap: 4px !important;
            }
            .crown-icon {
              font-size: 0.9rem !important;
            }
            .hero-title {
              font-size: 1.8rem !important;
              margin: 0.1rem 0 !important;
            }
            .hero-title:last-of-type {
              margin: 0.1rem 0 1.2rem 0 !important;
            }
            .hero-description {
              font-size: 0.9rem !important;
              margin: 0 0 1.5rem 0 !important;
              line-height: 1.4 !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              gap: 0.8rem !important;
              max-width: 260px !important;
            }
            .hero-buttons button {
              font-size: 13px !important;
              padding: 12px 20px !important;
              height: 44px !important;
            }
          }
          
          /* Small Mobile (481px - 600px) */
          @media (min-width: 481px) and (max-width: 600px) {
            .animated-gradient-bg {
              display: none !important;
            }
            .purple-overlay {
              background: linear-gradient(135deg, 
                rgba(147, 98, 205, 0.96), 
                rgba(190, 56, 142, 0.88), 
                rgba(232, 15, 80, 0.80), 
                rgba(242, 135, 118, 0.72), 
                rgba(253, 229, 217, 0.64)) !important;
            }
            .hero-content {
              padding: 0 1.2rem !important;
            }
            .hero-text {
              margin-top: -100px !important;
            }
            .welcome-message {
              font-size: 0.85rem !important;
              letter-spacing: 0.8px !important;
              margin: 0 0 0.9rem 0 !important;
            }
            .hero-title {
              font-size: 2rem !important;
            }
            .hero-description {
              font-size: 0.95rem !important;
              margin: 0 0 1.7rem 0 !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              gap: 0.9rem !important;
              max-width: 270px !important;
            }
          }
          
          /* Large Mobile / Small Tablet (601px - 768px) */
          @media (min-width: 601px) and (max-width: 768px) {
            .animated-gradient-bg {
              display: none !important;
            }
            .purple-overlay {
              background: linear-gradient(135deg, 
                rgba(147, 98, 205, 0.95), 
                rgba(190, 56, 142, 0.85), 
                rgba(232, 15, 80, 0.75), 
                rgba(242, 135, 118, 0.65), 
                rgba(253, 229, 217, 0.55)) !important;
            }
            .hero-content {
              padding: 0 1.5rem !important;
            }
            .hero-text {
              margin-top: -110px !important;
            }
            .welcome-message {
              font-size: 0.9rem !important;
              letter-spacing: 1px !important;
              margin: 0 0 1rem 0 !important;
            }
            .hero-title {
              font-size: 2.2rem !important;
            }
            .hero-description {
              font-size: 1rem !important;
              margin: 0 0 2rem 0 !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              gap: 1rem !important;
              max-width: 280px !important;
            }
          }
          
          /* Tablet Portrait (769px - 1024px) */
          @media (min-width: 769px) and (max-width: 1024px) {
            .hero-content {
              padding: 0 2rem !important;
            }
            .welcome-message {
              font-size: 1rem !important;
            }
            .hero-title {
              font-size: 2.8rem !important;
            }
            .hero-description {
              font-size: 1.05rem !important;
            }
          }
          
          /* Tablet Landscape / Small Desktop (1025px - 1200px) */
          @media (min-width: 1025px) and (max-width: 1200px) {
            .welcome-message {
              font-size: 1.05rem !important;
            }
            .hero-title {
              font-size: 3rem !important;
            }
            .hero-description {
              font-size: 1.08rem !important;
            }
          }
          
          /* Medium Desktop (1201px - 1440px) */
          @media (min-width: 1201px) and (max-width: 1440px) {
            .welcome-message {
              font-size: 1.08rem !important;
            }
            .hero-title {
              font-size: 3.1rem !important;
            }
            .hero-description {
              font-size: 1.1rem !important;
            }
          }
          
          /* Large Desktop (1441px+) */
          @media (min-width: 1441px) {
            .welcome-message {
              font-size: 1.1rem !important;
            }
            .hero-title {
              font-size: 3.2rem !important;
            }
            .hero-description {
              font-size: 1.1rem !important;
            }
          }
          
          /* Common mobile styles for all small screens */
          @media (max-width: 768px) {
            .hero-text {
              max-width: 100% !important;
              width: 100% !important;
            }
            .crown-icon {
              font-size: 1rem !important;
            }
            .hero-title {
              margin: 0.2rem 0 !important;
              line-height: 1.1 !important;
            }
            .hero-title:last-of-type {
              margin: 0.2rem 0 1.5rem 0 !important;
            }
            .hero-description {
              max-width: 100% !important;
              width: 100% !important;
              line-height: 1.5 !important;
              padding: 0 !important;
            }
            .hero-buttons {
              width: 100% !important;
            }
            .hero-buttons > * {
              width: 100% !important;
            }
            .hero-buttons button {
              width: 100% !important;
              min-width: auto !important;
              font-size: 14px !important;
              padding: 14px 24px !important;
              height: 48px !important;
            }
          }
        `}
      </style>
      <div className="animated-gradient-bg"></div>
      <div className="purple-overlay"></div>
      <div className="blur-overlay"></div>
      <div className="hero-content" style={{
        position: "relative",
        zIndex: 3,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div className="hero-text" ref={textRef} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity: 0,
          transform: "translateY(40px)",
          transition: "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
          marginTop: "-120px",
        }}>
          <div className="welcome-message" style={{
            background: "linear-gradient(90deg, #FFB6C1, #DDA0DD, #87CEEB)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            margin: "0 0 1.5rem 0",
            textAlign: "center",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}>
            <CrownIcon className="crown-icon" style={{ fontSize: "1.2rem", color: "#FFB6C1" }} />
            Welcome to ICPEP!
          </div>
          <h1 className="hero-title" style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "3.2rem",
            margin: 0,
            textAlign: "center",
            lineHeight: "1.1",
          }}>
            Engineering Tomorrow,
          </h1>
          <h1 className="hero-title" style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "3.2rem",
            margin: "0.5rem 0 2rem 0",
            textAlign: "center",
            lineHeight: "1.1",
          }}>
            One Student at a Time
          </h1>
          <p className="hero-description" style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "1.1rem",
            margin: "0 0 2.5rem 0",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.6",
            opacity: 0.9,
          }}>
            Join the Institute of Computer and Electronics Engineers - PUP Manila Chapter, 
            where innovation meets excellence and future engineers shape tomorrow's technology.
          </p>
          <div ref={btnRef} className="hero-buttons" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.8s 0.5s cubic-bezier(.4,0,.2,1), transform 0.8s 0.5s cubic-bezier(.4,0,.2,1)",
          }}>
            <Button
              variant="primary"
              style={{
                background: '#9362CD',
                border: 'none',
                boxShadow: '0 4px 15px rgba(147, 98, 205, 0.3)',
                padding: '16px 32px',
                minWidth: '160px',
                fontSize: '16px',
                fontWeight: '600',
                height: '50px',
              }}
              onClick={() => {
                // Enhanced navigation with perfect scrolling
                const currentPath = window.location.pathname;
                if (currentPath === "/about" || currentPath === "/") {
                  // If already on about page or home, scroll to about section
                  const aboutSection = document.getElementById("about-section");
                  if (aboutSection) {
                    const getScrollOffset = () => {
                      const viewportWidth = window.innerWidth;
                      if (viewportWidth <= 480) return 60;
                      if (viewportWidth <= 768) return 70;
                      if (viewportWidth <= 1024) return 80;
                      if (viewportWidth <= 1440) return 90;
                      return 100;
                    };
                    const elementTop = aboutSection.offsetTop;
                    const offset = getScrollOffset();
                    const targetPosition = Math.max(0, elementTop - offset);
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                  } else {
                    window.location.href = "/about";
                  }
                } else {
                  window.location.href = "/about";
                }
              }}
            >
              Learn More
            </Button>
            <div 
              onMouseEnter={(e) => {
                const button = e.currentTarget.querySelector('button');
                const arrow = e.currentTarget.querySelector('span');
                if (button) {
                  button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  button.style.borderColor = '#FDE5D9';
                }
                if (arrow) {
                  arrow.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                const button = e.currentTarget.querySelector('button');
                const arrow = e.currentTarget.querySelector('span');
                if (button) {
                  button.style.backgroundColor = 'transparent';
                  button.style.borderColor = '#fff';
                }
                if (arrow) {
                  arrow.style.transform = 'translateX(0px)';
                }
              }}
            >
              <Button
                variant="gradientOutline"
                iconRight={
                  <span style={{ 
                    display: 'inline-block', 
                    marginLeft: '0.5em', 
                    fontSize: '1.2em',
                    transition: 'transform 0.3s ease'
                  }}>
                    &#8594;
                  </span>
                }
                style={{
                  color: '#fff',
                  border: '2px solid #fff',
                  boxShadow: 'none',
                  padding: '16px 32px',
                  minWidth: '160px',
                  fontSize: '16px',
                  fontWeight: '600',
                  height: '50px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  // Enhanced navigation with perfect scrolling
                  const currentPath = window.location.pathname;
                  if (currentPath === "/contact" || currentPath === "/") {
                    // If already on contact page or home, scroll to contact section
                    const contactSection = document.getElementById("contact-section");
                    if (contactSection) {
                      const getScrollOffset = () => {
                        const viewportWidth = window.innerWidth;
                        if (viewportWidth <= 480) return 60;
                        if (viewportWidth <= 768) return 70;
                        if (viewportWidth <= 1024) return 80;
                        if (viewportWidth <= 1440) return 90;
                        return 100;
                      };
                      const elementTop = contactSection.offsetTop;
                      const offset = getScrollOffset();
                      const targetPosition = Math.max(0, elementTop - offset);
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    } else {
                      window.location.href = "/contact";
                    }
                  } else {
                    window.location.href = "/contact";
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Ice cream wave SVG at bottom */}
      <div
        ref={waveRef}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100vw",
          maxWidth: "100%",
          height: "180px",
          zIndex: 3,
          pointerEvents: "none",
          transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: "block",
          }}
        >
          <path
            d="
              M0,120
              Q320,180 480,120
              Q640,60 960,120
              Q1280,180 1440,120
              Q1600,60 1920,120
              V180 H0 Z
            "
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;