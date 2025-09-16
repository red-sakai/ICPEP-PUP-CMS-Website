import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const waveRef = useRef<HTMLDivElement>(null);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
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
        // zIndex: -1, // remove this line
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
            background: linear-gradient(120deg, #9362CD, #E80F50, #FDE5D9);
            background-size: 200% 200%;
            animation: gradientMove 8s ease-in-out infinite;
          }
          .blur-overlay {
            position: absolute;
            left: 0; top: 0;
            width: 100vw; height: 100vh;
            z-index: 1;
            pointer-events: none;
            backdrop-filter: blur(32px);
            opacity: 0.7;
          }
        `}
      </style>
      <div className="animated-gradient-bg"></div>
      <div className="blur-overlay"></div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh", // ensure vertical centering
        position: "relative",
        zIndex: 2
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
        <div style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center" // ensure buttons are centered horizontally
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
          >
            Learn More
          </Button>
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