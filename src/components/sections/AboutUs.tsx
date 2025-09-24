import { useRef, useEffect } from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.opacity = '1';
      textRef.current.style.transform = 'translateY(0)';
    }

    // Animate circles with staggered delays
    if (circlesRef.current) {
      const circles = circlesRef.current.querySelectorAll('[data-circle]');
      circles.forEach((circle, index) => {
        const element = circle as HTMLElement;
        setTimeout(() => {
          element.style.opacity = element.dataset.opacity || '0.3';
          element.style.transform = element.dataset.transform || 'scale(1)';
        }, index * 150);
      });
    }
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', boxSizing: 'border-box', margin: 0, padding: 0 }}>
      <Navbar />
      {/* Gradient header */}
      <div
        style={{
          width: '100%',
          minHeight: '340px',
          background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          margin: 0,
          padding: '0 1rem',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <div
          ref={textRef}
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            padding: '1rem 0 2rem 0',
            boxSizing: 'border-box',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 7vw, 3.8rem)',
              lineHeight: 1.15,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '1.2rem',
              marginTop: 0,
              letterSpacing: '0.02em',
              overflowWrap: 'break-word',
            }}
          >
            ABOUT ICPEP SE - PUP Manila
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.15rem',
              color: '#fff',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Learn about the Institute of Computer Engineers of the Philippines, our mission, vision, and the people who lead our organization.
          </p>
        </div>
        {/* Decorative circles */}
        <div ref={circlesRef}>
          <div 
            data-circle
            data-opacity="0.3"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              right: '15%',
              top: '20%',
              width: '42px',
              height: '42px',
              background: 'radial-gradient(circle at 65% 75%, #9362cd 50%, #fde5d9 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 6s ease-in-out infinite',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.4"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              left: '10%',
              top: '70%',
              width: '58px',
              height: '58px',
              background: 'radial-gradient(circle at 35% 25%, #fde5d9 60%, #e80f50 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 8s ease-in-out infinite reverse',
              animationDelay: '1s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.25"
            data-transform="scale(1) translateX(-50%)"
            style={{
              position: 'absolute',
              left: '45%',
              top: '12%',
              width: '30px',
              height: '30px',
              background: 'radial-gradient(circle at 85% 35%, #9362cd 65%, #fde5d9 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3) translateX(-50%)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '0.5s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.35"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              right: '30%',
              top: '85%',
              width: '38px',
              height: '38px',
              background: 'radial-gradient(circle at 25% 65%, #fde5d9 75%, #9362cd 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 9s ease-in-out infinite reverse',
              animationDelay: '2s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.3"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              left: '28%',
              top: '35%',
              width: '24px',
              height: '24px',
              background: 'radial-gradient(circle at 55% 85%, #e80f50 45%, #fde5d9 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 5s ease-in-out infinite',
              animationDelay: '1.5s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.2"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              right: '18%',
              top: '65%',
              width: '48px',
              height: '48px',
              background: 'radial-gradient(circle at 95% 45%, #fde5d9 55%, #9362cd 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '3s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.4"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              left: '72%',
              top: '28%',
              width: '34px',
              height: '34px',
              background: 'radial-gradient(circle at 25% 75%, #9362cd 65%, #e80f50 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 6.5s ease-in-out infinite reverse',
              animationDelay: '0.8s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.35"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              left: '65%',
              top: '78%',
              width: '20px',
              height: '20px',
              background: 'radial-gradient(circle at 75% 15%, #fde5d9 65%, #9362cd 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 7.5s ease-in-out infinite',
              animationDelay: '2.5s',
            }} 
          />
          <div 
            data-circle
            data-opacity="0.3"
            data-transform="scale(1)"
            style={{
              position: 'absolute',
              left: '38%',
              top: '88%',
              width: '26px',
              height: '26px',
              background: 'radial-gradient(circle at 85% 55%, #e80f50 55%, #fde5d9 100%)',
              borderRadius: '50%',
              opacity: 0,
              zIndex: 1,
              transform: 'scale(0.3)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: 'float 8.5s ease-in-out infinite reverse',
              animationDelay: '1.2s',
            }} 
          />
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) scale(var(--scale, 1));
            }
            50% { 
              transform: translateY(-10px) scale(var(--scale, 1));
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AboutUs;