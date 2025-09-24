import { useRef, useEffect } from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
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
              fontSize: '3.8rem',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '1.2rem',
              marginTop: 0,
              letterSpacing: '0.02em',
            }}
          >
            Contact Us
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
            Get in touch with ICPEP SE PUP. We&apos;re here to answer your questions and help you get involved.
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
              right: '12%',
              top: '25%',
              width: '40px',
              height: '40px',
              background: 'radial-gradient(circle at 60% 80%, #9362cd 55%, #fde5d9 100%)',
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
              left: '8%',
              top: '65%',
              width: '55px',
              height: '55px',
              background: 'radial-gradient(circle at 40% 20%, #fde5d9 65%, #e80f50 100%)',
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
              left: '50%',
              top: '15%',
              width: '28px',
              height: '28px',
              background: 'radial-gradient(circle at 80% 30%, #9362cd 70%, #fde5d9 100%)',
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
              right: '35%',
              top: '80%',
              width: '35px',
              height: '35px',
              background: 'radial-gradient(circle at 20% 60%, #fde5d9 80%, #9362cd 100%)',
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
              left: '25%',
              top: '40%',
              width: '22px',
              height: '22px',
              background: 'radial-gradient(circle at 50% 90%, #e80f50 40%, #fde5d9 100%)',
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
              right: '20%',
              top: '70%',
              width: '45px',
              height: '45px',
              background: 'radial-gradient(circle at 90% 40%, #fde5d9 50%, #9362cd 100%)',
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
              left: '75%',
              top: '30%',
              width: '32px',
              height: '32px',
              background: 'radial-gradient(circle at 30% 70%, #9362cd 60%, #e80f50 100%)',
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
              left: '60%',
              top: '75%',
              width: '18px',
              height: '18px',
              background: 'radial-gradient(circle at 70% 20%, #fde5d9 70%, #9362cd 100%)',
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
              left: '40%',
              top: '90%',
              width: '25px',
              height: '25px',
              background: 'radial-gradient(circle at 80% 60%, #e80f50 50%, #fde5d9 100%)',
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

export default ContactUs;