import { useEffect, useRef } from 'react';
import Card3 from '../ui/Card3';
import devsData from '../../data/devs.json';

type TeamMember = {
  name: string;
  position: string;
  photoUrl: string;
  facebookUrl: string;
  xUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
};

const { devs, researchTeam } = devsData as {
  devs: TeamMember[];
  researchTeam: TeamMember[];
};

const SectionHeader = ({ title }: { title: string }) => (
  <h4 style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 650,
    fontSize: '1.3rem',
    color: '#505050ff',
    textAlign: 'center',
    marginBottom: '0.7rem',
    marginTop: 0,
  }}>
    {title}
  </h4>
);

// MembersRow with refs for animation
const MembersRowObserved = ({ members, rowRefs }: { members: TeamMember[], rowRefs: React.MutableRefObject<(HTMLDivElement | null)[]> }) => {
  const rows = [];
  for (let i = 0; i < members.length; i += 3) {
    const chunk = members.slice(i, i + 3);
    rows.push(
      <div
        key={i}
        ref={el => { rowRefs.current[i / 3] = el; }}
        className="devs-row"
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

const Devs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const devHeaderRef = useRef<HTMLHeadingElement>(null);
  const researchHeaderRef = useRef<HTMLHeadingElement>(null);
  const devRowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const researchRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Section fade-in
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line
    const fadeSlideClass = 'devs-fade-slide';
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

    // Observer for team section headers
    const headerSlideClass = 'devs-header-animate';
    const headerObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(headerSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (devHeaderRef.current) headerObserver.observe(devHeaderRef.current);
    if (researchHeaderRef.current) headerObserver.observe(researchHeaderRef.current);

    // Observer for dev rows
    const rowSlideClass = 'devs-row-animate';
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
    devRowsRef.current.forEach(ref => { if (ref) rowObserver.observe(ref); });
    researchRowsRef.current.forEach(ref => { if (ref) rowObserver.observe(ref); });

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (devHeaderRef.current) headerObserver.unobserve(devHeaderRef.current);
      if (researchHeaderRef.current) headerObserver.unobserve(researchHeaderRef.current);
      devRowsRef.current.forEach(ref => { if (ref) rowObserver.unobserve(ref); });
      researchRowsRef.current.forEach(ref => { if (ref) rowObserver.unobserve(ref); });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="devs-section"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem',
        position: 'relative',
        background: '#FCEFF7',
        padding: '3rem 0',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        right: '5%',
        top: '15%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 6%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 0,
        boxShadow: '0 0 20px 0 rgba(190, 227, 248, 0.5)',
      }} />
      <div style={{
        position: 'absolute',
        left: '8%',
        top: '30%',
        width: '120px',
        height: '120px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 6%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.8,
        zIndex: 0,
        boxShadow: '0 0 25px 0 rgba(195, 218, 254, 0.6)',
      }} />
      <div style={{
        position: 'absolute',
        right: '12%',
        bottom: '20%',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 6%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 0,
        boxShadow: '0 0 15px 0 rgba(190, 227, 248, 0.5)',
      }} />
      <div style={{
        position: 'absolute',
        left: '15%',
        bottom: '10%',
        width: '90px',
        height: '90px',
        background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #FFF 6%, #F5DCE9 35%, #F5DCE9 100%)',
        borderRadius: '50%',
        opacity: 0.8,
        zIndex: 0,
        boxShadow: '0 0 20px 0 rgba(195, 218, 254, 0.6)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
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
          Meet the Devs
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

      <div style={{ marginTop: '0.5rem', position: 'relative', zIndex: 1 }}>
        <h4
          ref={devHeaderRef}
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
          Development Team
        </h4>
        <MembersRowObserved members={devs} rowRefs={devRowsRef} />
      </div>
      <div style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
        <h4
          ref={researchHeaderRef}
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
          Research Team
        </h4>
        <MembersRowObserved members={researchTeam} rowRefs={researchRowsRef} />
      </div>
      <style>
        {`
          .devs-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .devs-header-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .devs-row-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Devs;