import { useEffect, useRef } from 'react';
import Card3 from '../ui/Card3';

const adviser = [
  {
    name: 'Engr. Rolito L. Mahaguay',
    position: 'ICPEP SE PUP ADVISER',
    photoUrl: "Engr-Mahaguay.jpg",
    facebookUrl: "https://www.facebook.com/rmahaguay",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

const adviserDescription = `
Engr. Rolito L. Mahaguay, MSE-Computer, is an Associate Professor I and the Chairperson of the Department of Computer 
Engineering at the Polytechnic University of the Philippines – College of Engineering, where he drives initiatives to improve 
curriculum, laboratory resources, and student development. Beyond his role in the department, he also serves as the 
Faculty Adviser of ICPEP SE – PUP Manila, the official student organization for computer engineering, where he actively 
guides and inspires future engineers to uphold excellence, innovation, and camaraderie.
`;

const Adviser = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section fade-in
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line
    const fadeSlideClass = 'adviser-fade-slide';
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

    // Observer for card
    const cardSlideClass = 'adviser-card-animate';
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
    if (cardRef.current) cardObserver.observe(cardRef.current);

    // Observer for description
    const descSlideClass = 'adviser-desc-slide';
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

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (cardRef.current) cardObserver.unobserve(cardRef.current);
      if (descRef.current) descObserver.unobserve(descRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '8rem',
        padding: '0 1.5rem',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <h1
        ref={headingRef}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: '2.2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0.5rem',
          marginTop: '1.5rem',
          letterSpacing: '0.5px',
          opacity: 0,
          transform: 'translateY(48px)',
          transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      >
        ICPEP SE - PUP MANILA ADVISER
      </h1>
      <div
        ref={lineRef}
        style={{
          width: '160px',
          height: '8px',
          borderRadius: '8px',
          background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          margin: '0 auto 2.2rem auto',
          opacity: 0,
          transform: 'translateY(48px)',
          transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      />
      {/* Card with name, position, photo, and social media */}
      <div ref={cardRef} style={{ marginBottom: '2.5rem', width: '100%', display: 'flex', justifyContent: 'center', opacity: 0, transform: 'translateY(48px)', transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)' }}>
        <Card3
          name={adviser[0].name}
          position={adviser[0].position}
          photoUrl={adviser[0].photoUrl}
          width="450px"
          photoSize="150px"
          facebookUrl={adviser[0].facebookUrl}
          instagramUrl={adviser[0].instagramUrl}
          linkedinUrl={adviser[0].linkedinUrl}
        />
      </div>

      {/* Description */}
      <div
        ref={descRef}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.15rem',
          color: '#666',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: 1.6,
          padding: '0 0.5rem',
          opacity: 0,
          transform: 'translateY(48px)',
          transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {adviserDescription}
      </div>
      <style>
        {`
          .adviser-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .adviser-card-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .adviser-desc-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Adviser;
