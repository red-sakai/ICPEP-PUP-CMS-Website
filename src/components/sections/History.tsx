import { useEffect, useRef } from 'react';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card2 from '../ui/Card2';

const History = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    if (headingRef.current) fadeObserver.observe(headingRef.current);
    if (lineRef.current) fadeObserver.observe(lineRef.current);

    // Observer for each Card2
    const cardSlideClass = 'history-card-animate';
    const cardObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(cardSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach(ref => { if (ref) cardObserver.observe(ref); });

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      cardRefs.current.forEach(ref => { if (ref) cardObserver.unobserve(ref); });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="history-section"
      style={{
        width: '100%',
        padding: '3rem 1rem 5rem',
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
            margin: '0 auto 3rem auto',
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        />

        {/* History Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Founding and History */}
          <div ref={el => { cardRefs.current[0] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HistoryEduIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Founding and History"
              description="The Institute of Computer Engineers of the Philippines (ICpEP) originated in 1992 as the Philippine Institute of Computer Engineers (PhICEs). After a period of dormancy, it was revitalized in 2008 by leaders including Engr. Erwin G. Mendoza and Engr. Alexander B. Ybasco, and officially rebranded as ICpEP." 
            />
          </div>

          {/* Organizational Identity */}
          <div ref={el => { cardRefs.current[1] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountTreeIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Organizational Identity"
              description="ICpEP is a non-stock, non-profit professional organization registered with the Securities and Exchange Commission (SEC Reg. No. 201120675). It is widely recognized as the official body representing computer engineers in the Philippines, both in industry and academe." 
            />
          </div>

          {/* Role and Contributions */}
          <div ref={el => { cardRefs.current[2] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessibilityNewIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Role and Contributions"
              description="Since its revival, ICpEP has been instrumental in promoting professional standards, encouraging continuing education, and fostering innovation in technology and engineering practices. It actively represents the profession in national discussions and provides a unified voice for computer engineers across the country." 
            />
          </div>

          {/* Industry Partnerships */}
          <div ref={el => { cardRefs.current[3] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HandshakeIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Industry Partnerships"
              description="ICpEP has established collaborations with major global and local technology companies, including Intel, Microsoft, HP, Lenovo, and Epson. It has also partnered with organizations such as SM Mall of Asia and the NIDO Fortified Science Discovery Center, showcasing student and professional innovations in computer engineering." 
            />
          </div>

          {/* Student Edition (ICpEP.SE) */}
          <div ref={el => { cardRefs.current[4] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SchoolIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Student Edition (ICpEP.SE)"
              description="The Student Edition of ICpEP (ICpEP.SE) was launched in 2008, starting with 11 schools, including the Polytechnic University of the Philippines (PUP), Pamantasan ng Lungsod ng Maynila, Mapúa University, and De La Salle University. Today, ICpEP.SE has expanded to over 68 institutions nationwide, serving as the official student arm that nurtures future computer engineers." 
            />
          </div>

          {/* Continuing Mission */}
          <div ref={el => { cardRefs.current[5] = el; }} style={{ opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
            <Card2 
              icon={
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUpIcon style={{ fontSize: 40, color: '#9362CD' }} />
                </div>
              }
              title="Continuing Mission"
              description="ICpEP remains committed to advancing the profession, providing opportunities for professional development, and contributing to the technological growth of the Philippines. Through its professional and student chapters, it ensures that computer engineers play a vital role in shaping the country's future." 
            />
          </div>
        </div>
      <style>
        {`
          .history-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .history-card-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default History;