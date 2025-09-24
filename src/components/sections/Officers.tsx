import { useEffect, useRef } from 'react';
import Card3 from '../ui/Card3';
import officersData from '../../data/officers.json';

type Officer = {
  name: string;
  position: string;
  photoUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
};

const { currentPresident, executiveMembers } = officersData as {
  currentPresident: Officer[];
  executiveMembers: Officer[];
};

// (Removed unused MembersRow)

const Officers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const execHeaderRef = useRef<HTMLHeadingElement>(null);
  const presidentCardRef = useRef<HTMLDivElement>(null);
  const membersRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Section fade-in
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line
    const fadeSlideClass = 'officers-fade-slide';
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

    // Observer for executive members section header
    const execHeaderClass = 'officers-exec-header-animate';
    const execHeaderObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(execHeaderClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (execHeaderRef.current) execHeaderObserver.observe(execHeaderRef.current);

    // Observer for president card
    const cardSlideClass = 'officers-card-animate';
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
    if (presidentCardRef.current) cardObserver.observe(presidentCardRef.current);

    // Observer for each executive members row
    const rowSlideClass = 'officers-row-animate';
    const rowObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(rowSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    membersRowRefs.current.forEach(ref => {
      if (ref) rowObserver.observe(ref);
    });

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (execHeaderRef.current) execHeaderObserver.unobserve(execHeaderRef.current);
      if (presidentCardRef.current) cardObserver.unobserve(presidentCardRef.current);
      membersRowRefs.current.forEach(ref => {
        if (ref) rowObserver.unobserve(ref);
      });
    };
  }, []);

  const ensureProtocol = (url: string) =>
    url && !/^https?:\/\//i.test(url) ? `https://${url}` : url;

  // Custom MembersRow with refs for animation
  const MembersRowObserved = ({ members }: { members: Officer[] }) => {
    const rows = [];
    for (let i = 0; i < members.length; i += 3) {
      const chunk = members.slice(i, i + 3);
      rows.push(
        <div
          key={i}
          ref={el => { membersRowRefs.current[i / 3] = el; }}
          className="officers-row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {chunk.map((member, index) => (
            <Card3
              key={index}
              name={member.name}
              position={member.position}
              photoUrl={member.photoUrl}
              width="400px"
              photoSize="150px"
              facebookUrl={member.facebookUrl}
              instagramUrl={member.instagramUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      );
    }
    return <>{rows}</>;
  };

  return (
    <div
      ref={sectionRef}
      id="officers-section"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '0',
        position: 'relative',
        background: '#FCEFF7',
        padding: '3rem 2rem',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
        boxSizing: 'border-box',
      }}
    >
      {/* Decorative circles with shine effect */}
      <div style={{
        position: 'absolute',
        right: '5%',
        top: '15%',
        width: '120px',
        height: '120px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 5%, #F8D7E9 30%, #F8D7E9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 0,
        boxShadow: '0 0 20px 0 rgba(248, 215, 233, 0.5)',
      }} />
      <div style={{
        position: 'absolute',
        left: '8%',
        top: '30%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle at 25% 25%, #FFF 0%, #FFF 5%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.8,
        zIndex: 0,
        boxShadow: '0 0 25px 0 rgba(245, 220, 233, 0.6)',
      }} />
      <div style={{
        position: 'absolute',
        right: '12%',
        bottom: '20%',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle at 20% 20%, #FFF 0%, #FFF 8%, #F8D7E9 40%, #F8D7E9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 0,
        boxShadow: '0 0 15px 0 rgba(248, 215, 233, 0.5)',
      }} />
      <div style={{
        position: 'absolute',
        left: '15%',
        bottom: '10%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 6%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.8,
        zIndex: 0,
        boxShadow: '0 0 20px 0 rgba(245, 220, 233, 0.6)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
        <h1
          ref={headingRef}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '2.2rem',
            color: '#333',
            textAlign: 'center',
            marginBottom: '0.7rem',
            marginTop: 0,
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          ICPEP SE - PUP Manila Officers 2025-2026
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
      </div>

      {/* Executive Members */}
      <div
        style={{
          marginTop: '0.5rem',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <h4
          ref={execHeaderRef}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 650,
            fontSize: '1.3rem',
            color: '#333',
            textAlign: 'center',
            marginBottom: '0.7rem',
            marginTop: 0,
            opacity: 0,
            transform: 'translateY(48px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          Executive Members
        </h4>
        {/* President */}
        <div ref={presidentCardRef} style={{ 
          marginTop: '2rem', 
          opacity: 0, 
          transform: 'translateY(48px)', 
          transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <Card3
            name={currentPresident[0].name}
            position={currentPresident[0].position}
            photoUrl={currentPresident[0].photoUrl}
            width="500px"
            photoSize="150px"
            facebookUrl={ensureProtocol(currentPresident[0].facebookUrl)}
            instagramUrl={ensureProtocol(currentPresident[0].instagramUrl)}
            linkedinUrl={ensureProtocol(currentPresident[0].linkedinUrl)}
          />
        </div>
        {/* Other Executive Members */}
        <MembersRowObserved members={executiveMembers.map(m => ({
          ...m,
          facebookUrl: ensureProtocol(m.facebookUrl),
          instagramUrl: ensureProtocol(m.instagramUrl),
          linkedinUrl: ensureProtocol(m.linkedinUrl),
        }))} />
      </div>
      <style>
        {`
          .officers-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .officers-exec-header-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .officers-card-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .officers-row-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Officers;