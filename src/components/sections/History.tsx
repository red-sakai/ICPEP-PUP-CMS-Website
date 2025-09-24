import { useEffect, useRef, useState } from 'react';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card2 from '../ui/Card2';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const History = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section fade-in
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line
    const fadeSlideClass = 'history-fade-slide';
    const fadeObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(fadeSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    // Observer for carousel entrance animation
    const carouselObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardsVisible(true);
            }, 200); 
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (headingRef.current) fadeObserver.observe(headingRef.current);
    if (lineRef.current) fadeObserver.observe(lineRef.current);
    if (carouselRef.current) carouselObserver.observe(carouselRef.current);

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (carouselRef.current) carouselObserver.unobserve(carouselRef.current);
    };
  }, []);

  // Carousel data
  const cards = [
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><HistoryEduIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Founding and History',
      description: 'The Institute of Computer Engineers of the Philippines (ICpEP) originated in 1992 as the Philippine Institute of Computer Engineers (PhICEs). After a period of dormancy, it was revitalized in 2008 by leaders including Engr. Erwin G. Mendoza and Engr. Alexander B. Ybasco, and officially rebranded as ICpEP.'
    },
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AccountTreeIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Organizational Identity',
      description: 'ICpEP is a non-stock, non-profit professional organization registered with the Securities and Exchange Commission (SEC Reg. No. 201120675). It is widely recognized as the official body representing computer engineers in the Philippines, both in industry and academe.'
    },
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AccessibilityNewIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Role and Contributions',
      description: 'Since its revival, ICpEP has been instrumental in promoting professional standards, encouraging continuing education, and fostering innovation in technology and engineering practices. It actively represents the profession in national discussions and provides a unified voice for computer engineers across the country.'
    },
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><HandshakeIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Industry Partnerships',
      description: 'ICpEP has established collaborations with major global and local technology companies, including Intel, Microsoft, HP, Lenovo, and Epson. It has also partnered with organizations such as SM Mall of Asia and the NIDO Fortified Science Discovery Center, showcasing student and professional innovations in computer engineering.'
    },
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SchoolIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Student Edition (ICpEP.SE)',
      description: 'The Student Edition of ICpEP (ICpEP.SE) was launched in 2008, starting with 11 schools, including the Polytechnic University of the Philippines (PUP), Pamantasan ng Lungsod ng Maynila, Mapúa University, and De La Salle University. Today, ICpEP.SE has expanded to over 68 institutions nationwide, serving as the official student arm that nurtures future computer engineers.'
    },
    {
      icon: <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUpIcon style={{ fontSize: 40, color: '#9362CD' }} /></div>,
      title: 'Continuing Mission',
      description: 'ICpEP remains committed to advancing the profession, providing opportunities for professional development, and contributing to the technological growth of the Philippines. Through its professional and student chapters, it ensures that computer engineers play a vital role in shaping the country\'s future.'
    },
  ];

  const [current, setCurrent] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = cards.length;

  // Mobile detection and swipe refs/handlers
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 900);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);
  const touchMoveY = useRef<number | null>(null);

  // Hint: show on mobile, auto-hide, dismiss on interaction
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setShowSwipeHint(true);
      const timer = setTimeout(() => setShowSwipeHint(false), 4000);
      return () => clearTimeout(timer);
    } else {
      setShowSwipeHint(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchMoveX.current = null;
    touchMoveY.current = null;
    setShowSwipeHint(false);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchMoveX.current = e.touches[0].clientX;
    touchMoveY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = () => {
    if (
      isTransitioning ||
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchMoveX.current === null ||
      touchMoveY.current === null
    ) {
      touchStartX.current = touchStartY.current = touchMoveX.current = touchMoveY.current = null;
      return;
    }
    const dx = (touchMoveX.current ?? 0) - (touchStartX.current ?? 0);
    const dy = (touchMoveY.current ?? 0) - (touchStartY.current ?? 0);
    const threshold = 40;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
      if (dx < 0) goRight();
      else goLeft();
    }
    touchStartX.current = touchStartY.current = touchMoveX.current = touchMoveY.current = null;
  };

  const goLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % total);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  // Reuse app gradient for high-contrast buttons
  const gradient = 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)';

  return (
    <div
      ref={sectionRef}
      id="history-section"
      style={{
        width: '100%',
        padding: '3rem 1rem 9rem', 
        boxSizing: 'border-box',
        background: '#fff',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <h1
          ref={headingRef}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '2.5rem',
            color: '#333',
            textAlign: 'center',
            marginBottom: '0.5rem',
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          Our History
        </h1>
        <div
          ref={lineRef}
          style={{
            width: '160px',
            height: '8px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
            margin: '0 auto 7rem auto',
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        />

        {/* Carousel */}
        <div
          ref={carouselRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 700,
            margin: '0 auto',
            height: 340,
            perspective: '1500px',
            transformStyle: 'preserve-3d',
            touchAction: isMobile ? 'pan-y' : undefined, // allow vertical scroll, capture horizontal swipes
          }}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          {/* Left Button (hidden on mobile) */}
          {!isMobile && (
            <button
              aria-label="Previous"
              onClick={goLeft}
              disabled={isTransitioning}
              style={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                background: gradient,
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                boxShadow: '0 8px 24px rgba(147,98,205,0.35)',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(6px)',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
                  e.currentTarget.style.filter = 'brightness(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.filter = 'none';
                }
              }}
            >
              <ChevronLeftIcon style={{ fontSize: 28, color: '#fff' }} />
            </button>
          )}
          {/* Right Button (hidden on mobile) */}
          {!isMobile && (
            <button
              aria-label="Next"
              onClick={goRight}
              disabled={isTransitioning}
              style={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                background: gradient,
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                boxShadow: '0 8px 24px rgba(147,98,205,0.35)',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(6px)',
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
                  e.currentTarget.style.filter = 'brightness(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.filter = 'none';
                }
              }}
            >
              <ChevronRightIcon style={{ fontSize: 28, color: '#fff' }} />
            </button>
          )}

          {/* Mobile swipe hint */}
          {isMobile && showSwipeHint && (
            <div
              onClick={() => setShowSwipeHint(false)}
              style={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '10px 14px',
                background: 'rgba(17,24,39,0.85)',
                color: '#fff',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14,
                borderRadius: 999,
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                zIndex: 30,
                animation: 'swipeHintPop 0.5s ease-out',
              }}
              aria-live="polite"
            >
              <ChevronLeftIcon style={{ fontSize: 18, color: '#fff' }} />
              <span>Swipe to see more</span>
              <ChevronRightIcon style={{ fontSize: 18, color: '#fff' }} />
            </div>
          )}

          {/* Carousel Cards */}
          <div
            style={{
              width: '100%',
              height: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'visible',
              perspective: '1500px',
              transformStyle: 'preserve-3d',
            }}
          >
            {cards.map((card, cardIndex) => {
              // Calculate position relative to current card
              let offset = cardIndex - current;
              
              // Normalize offset to be between -2 and 2 (show 5 cards total)
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;
              
              // Only render cards that should be visible
              const isVisible = Math.abs(offset) <= 2;
              
              if (!isVisible) return null;
              
              // Smooth morphing animation calculations
              const scale = offset === 0 ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.2);
              const translateX = offset * 280;
              const rotateY = offset * -25;
              const translateZ = offset === 0 ? 0 : -Math.abs(offset) * 50;
              const opacity = Math.abs(offset) > 2 ? 0 : Math.max(0.3, 1 - Math.abs(offset) * 0.3);
              
              let style: React.CSSProperties = {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${scale}) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                zIndex: 10 - Math.abs(offset),
                opacity: opacity,
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: offset === 0 ? 'none' : `blur(${Math.abs(offset) * 1.5}px)`,
                boxShadow: offset === 0 
                  ? '0 20px 60px rgba(147,98,205,0.25)' 
                  : `0 ${Math.max(2, 8 - Math.abs(offset) * 2)}px ${Math.max(5, 20 - Math.abs(offset) * 5)}px rgba(0,0,0,${Math.max(0.02, 0.1 - Math.abs(offset) * 0.02)})`,
                pointerEvents: offset === 0 ? 'auto' : 'none',
                width: 380,
                maxWidth: '90vw',
                background: '#fff',
                borderRadius: 18,
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, filter',
              };
              
              return (
                <div 
                  key={cardIndex} 
                  style={style} 
                  className={`carousel-card-smooth ${cardsVisible ? 'card-entrance-visible' : 'card-entrance-hidden'}`}
                  aria-hidden={offset !== 0}
                >
                  <Card2 icon={card.icon} title={card.title} description={card.description} />
                </div>
              );
            })}
          </div>
          {/* Carousel Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, position: 'absolute', left: 0, right: 0, bottom: -110 }}>
            {cards.map((_, idx) => (
              <span
                key={idx}
                onClick={() => {
                  if (!isTransitioning && idx !== current) {
                    setIsTransitioning(true);
                    setCurrent(idx);
                    setTimeout(() => setIsTransitioning(false), 400);
                  }
                }}
                style={{
                  display: 'inline-block',
                  width: idx === current ? 16 : 12,
                  height: idx === current ? 16 : 12,
                  borderRadius: '50%',
                  background: idx === current ? 'linear-gradient(90deg, #9362CD 0%, #E80F50 100%)' : '#ddd',
                  margin: '0 6px',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  border: idx === current ? '2px solid rgba(147,98,205,0.3)' : '2px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: idx === current ? 'scale(1)' : 'scale(0.8)',
                  boxShadow: idx === current ? '0 4px 12px rgba(147,98,205,0.4)' : 'none',
                  opacity: isTransitioning ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (idx !== current && !isTransitioning) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = '#bbb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idx !== current && !isTransitioning) {
                    e.currentTarget.style.transform = 'scale(0.8)';
                    e.currentTarget.style.background = '#ddd';
                  }
                }}
              />
            ))}
          </div>
        </div>
        <style>
          {`
            .history-fade-slide {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
            
            .card-entrance-hidden {
              opacity: 0 !important;
              transform: translate(-50%, -50%) scale(0.5) translateY(100px) rotateX(45deg) !important;
              filter: blur(10px) !important;
            }
            
            .card-entrance-visible {
              transition: all 1.2s cubic-bezier(0.23, 1, 0.320, 1) !important;
            }
            
            button[aria-label="Previous"], button[aria-label="Next"] {
              outline: none !important;
            }
            button[aria-label="Previous"]:focus, button[aria-label="Next"]:focus {
              outline: 2px solid rgba(147,98,205,0.6) !important;
              outline-offset: 2px !important;
            }
            button[aria-label="Previous"]:disabled, button[aria-label="Next"]:disabled {
              pointer-events: none;
              opacity: 0.6;
            }
            
            /* Smooth card transitions with spring effect */
            .carousel-card-smooth {
              backface-visibility: hidden;
              transform-style: preserve-3d !important;
              transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
            }
            
            /* Enhanced carousel container for better 3D effect */
            .carousel-container {
              transform-style: preserve-3d;
              perspective: 1500px;
            }
            
            /* Prevent text selection during transitions */
            .carousel-card-smooth * {
              user-select: none;
            }

            @keyframes swipeHintPop {
              from {
                opacity: 0;
                transform: translateX(-50%) translateY(8px) scale(0.96);
              }
              to {
                opacity: 1;
                transform: translateX(-50%) translateY(0) scale(1);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default History;