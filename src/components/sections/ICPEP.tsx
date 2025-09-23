import { useEffect, useRef } from 'react';
import Card from '../ui/Card';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';

const ICPEP = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const logoRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate section
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line (fade-in slide-up)
    const fadeSlideClass = 'icpep-fade-slide';
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

    // Observer for logo image (separate animation)
    const logoSlideClass = 'icpep-logo-slide';
    const logoObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(logoSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (logoRef.current) logoObserver.observe(logoRef.current);

    // Observer for description paragraph (separate animation)
    const descSlideClass = 'icpep-desc-slide';
    const descObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(descSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (descRef.current) descObserver.observe(descRef.current);

    // Observer for cards
    const cardObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('icpep-card-animate');
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.forEach(ref => {
      if (ref.current) {
        cardObserver.observe(ref.current);
      }
    });
    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (logoRef.current) logoObserver.unobserve(logoRef.current);
      if (descRef.current) descObserver.unobserve(descRef.current);
      cardRefs.forEach(ref => {
        if (ref.current) cardObserver.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem 2rem 1rem',
        background: '#fff',
        margin: '2.5rem 0',
        opacity: 0,
        transform: 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <h2
        ref={headingRef}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: '2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0rem',
          marginTop: 0,
          opacity: 0,
          transform: 'translateY(48px)',
          transition:
            'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      >
        What is ICPEP SE - PUP Manila?
      </h2>
      <div
        ref={lineRef}
        style={{
          width: '180px',
          height: '10px',
          borderRadius: '8px',
          background:
            'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          opacity: 0,
          transform: 'translateY(48px)',
          transition:
            'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      />
      <img
        ref={logoRef}
        src="/ICPEP-logo.svg"
        alt="ICPEP SE PUP Logo"
        draggable={false}
        style={{
          width: '300px',
          height: 'auto',
          display: 'block',
          opacity: 0,
          transform: 'translateY(48px)',
          transition:
            'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      />
      <p
        ref={descRef}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.2rem',
          color: '#666',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: 1.4,
          opacity: 0,
          transform: 'translateY(48px)',
          transition:
            'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      >
        The Institute of Computer Engineers of the Philippines – Student Edition
        at the Polytechnic University of the Philippines (ICpEP.SE-PUP) is a
        student organization committed to advancing computer engineering and
        computer science education.
      </p>
      {/* Cards row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '2rem',
          marginTop: '3rem',
          flexWrap: 'wrap',
        }}
      >
        <div className="icpep-card-hover" ref={cardRefs[0]}>
          <Card
            icon={<CodeIcon style={{ fontSize: '2rem', color: '#9362CD' }} />}
            title="Academic Excellence"
            description="Promoting academic excellence in software engineering through collaboration, mentoring, and shared learning."
          />
        </div>
        <div className="icpep-card-hover" ref={cardRefs[1]}>
          <Card
            icon={<GroupIcon style={{ fontSize: '2rem', color: '#9362CD' }} />}
            title="Professional Community"
            description="A vibrant network of students focused on growth, teamwork, and professional development within PUP."
          />
        </div>
        <div className="icpep-card-hover" ref={cardRefs[2]}>
          <Card
            icon={<LightbulbOutlineIcon style={{ fontSize: '2rem', color: '#9362CD' }} />}
            title="Innovation and Research"
            description="Encouraging innovation and research by exploring new ideas, technologies, and methodologies in software engineering."
          />
        </div>
      </div>
      <style>
        {`
          .icpep-card-hover {
            opacity: 0;
            transform: translateY(48px);
            transition:
              opacity 0.7s cubic-bezier(.4,0,.2,1),
              transform 0.7s cubic-bezier(.4,0,.2,1),
              box-shadow 0.22s cubic-bezier(.4,0,.2,1);
          }
          .icpep-card-animate {
            opacity: 1 !important;
            transform: translateY(0);
          }
          .icpep-card-hover:hover {
            transform: scale(1.050);
            opacity: 1;
          }
          .icpep-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .icpep-logo-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition:
              opacity 0.7s cubic-bezier(.4,0,.2,1),
              transform 0.7s cubic-bezier(.4,0,.2,1);
          }
          .icpep-desc-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition:
              opacity 0.7s cubic-bezier(.4,0,.2,1),
              transform 0.7s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </section>
  );
};

export default ICPEP;