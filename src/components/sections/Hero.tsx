import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

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
        position: "relative", // was "fixed"
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
          .background-image {
            position: absolute;
            right: 0; top: 0;
            width: 50vw; height: 100vh;
            z-index: 0;
            background: url('/studentsupport.jpg') center/cover no-repeat;
            background-size: cover;
            -webkit-mask: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%);
            mask: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%);
          }
          .image-overlay {
            position: absolute;
            right: 0; top: 0;
            width: 50vw; height: 100vh;
            z-index: 1;
            background: linear-gradient(120deg, 
              rgba(147, 98, 205, 0.15), 
              rgba(232, 15, 80, 0.1), 
              rgba(253, 229, 217, 0.05));
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
            width: 75vw; height: 100vh;
            z-index: 1;
            background: linear-gradient(to right, 
              rgba(147, 98, 205, 0.95), 
              rgba(147, 98, 205, 0.90), 
              rgba(190, 56, 142, 0.70), 
              rgba(232, 15, 80, 0.65), 
              rgba(242, 135, 118, 0.35), 
              rgba(253, 229, 217, 0.20), 
              rgba(253, 229, 217, 0.05), 
              transparent);
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
        }}>
          <h1 style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "3.2rem",
            margin: 0,
            textAlign: "center",
          }}>
            Engineering Tomorrow,
          </h1>
          <h1 style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "3.2rem",
            margin: "3rem 0 3.5rem 0",
            textAlign: "center",
          }}>
            One Student at a Time
          </h1>
          <div ref={btnRef} style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.8s 0.3s cubic-bezier(.4,0,.2,1), transform 0.8s 0.3s cubic-bezier(.4,0,.2,1)",
          }}>
            <Button variant="primary">Become a Member</Button>
            <Button
              variant="gradientOutline"
              iconRight={
                <span style={{ display: 'inline-block', marginLeft: '0.5em', fontSize: '1.2em' }}>
                  &#8594;
                </span>
              }
              style={{
                color: '#fff',
                border: '2px solid #fff',
                boxShadow: 'none',
              }}
              onClick={() => window.location.href = "https://www.facebook.com/icpepse.pupmanila"}
            >
              Learn More
            </Button>
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