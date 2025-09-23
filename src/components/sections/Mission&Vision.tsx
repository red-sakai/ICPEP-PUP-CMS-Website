import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Card2 from '../ui/Card2';

const missionText = `The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) is committed to bridging the gap between the industry and the academe by empowering the interests, welfare, and ideals of its members, developing a strong and harmonious foundation within its community, and professionalizing the skills of its officers and members for global competitiveness and national progression.`;

const visionText = `The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) envisions itself as the foundation of world-class computer engineers and a motivator of students' interests towards excellence in Computer Engineering as their field of specialization.`;

const MissionVision = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transform = 'translateY(0)';
    }

    // Observer for Vision fade-in slide-up
    const fadeSlideClass = 'mv-fade-slide';
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
    if (visionRef.current) fadeObserver.observe(visionRef.current);
    return () => {
      if (visionRef.current) fadeObserver.unobserve(visionRef.current);
    };
  }, []);

  return (
    <div id="mission-vision-section" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', boxSizing: 'border-box', background: '#fff' }}>
      <Navbar />
      <div
        ref={contentRef}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          padding: '0rem 1rem 0 1rem',
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {/* Mission Section */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', background: '#F9F7FB', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginBottom: '2.5rem', padding: '2.5rem 2rem', gap: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg, #9362CD 0%, #E80F50 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/mission.jpg" alt="Mission" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2.2rem', color: '#333', marginBottom: '0.7rem', marginTop: 0 }}>Mission</h2>
            <div style={{ width: '120px', height: '8px', borderRadius: '8px', background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)', marginBottom: '1.2rem' }} />
            <Card2 description={missionText} />
          </div>
        </div>
        {/* Vision Section */}
        <div
          ref={visionRef}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: '#F9F7FB',
            borderRadius: '18px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            marginBottom: '2.5rem',
            padding: '2.5rem 2rem',
            gap: '2.5rem',
            flexWrap: 'wrap',
            opacity: 0,
            transform: 'translateY(48px)',
            transition:
              'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <div style={{ flex: '0 0 220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg, #E80F50 0%, #9362CD 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/vision.jpg" alt="Vision" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2.2rem', color: '#333', marginBottom: '0.7rem', marginTop: 0 }}>Vision</h2>
            <div style={{ width: '120px', height: '8px', borderRadius: '8px', background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)', marginBottom: '1.2rem' }} />
            <Card2 description={visionText} />
          </div>
        </div>
      </div>
      <style>
        {`
          .mv-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default MissionVision;
