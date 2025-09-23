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

const MembersRow = ({ members }: { members: Officer[] }) => {
  const rows = [];
  for (let i = 0; i < members.length; i += 3) {
    const chunk = members.slice(i, i + 3);
    rows.push(
      <div key={i} style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
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

const Officers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  }, []);

  const ensureProtocol = (url: string) =>
    url && !/^https?:\/\//i.test(url) ? `https://${url}` : url;

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
        padding: '3rem 0',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
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

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '2.2rem',
            color: '#505050ff',
            textAlign: 'center',
            marginBottom: '0.7rem',
            marginTop: 0,
          }}
        >
          ICPEP SE - PUP Manila Officers 2025-2026
        </h1>
        <div
          style={{
            width: '160px',
            height: '8px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
            margin: '0 auto 3rem auto',
          }}
        />
      </div>

      {/* Executive Members */}
      <div
        style={{
          marginTop: '0.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <SectionHeader title="Executive Members" />
        {/* President */}
        <div style={{ marginTop: '2rem' }}>
          <Card3
            name={currentPresident[0].name}
            position={currentPresident[0].position}
            photoUrl={currentPresident[0].photoUrl}
            width="650px"
            photoSize="150px"
            facebookUrl={ensureProtocol(currentPresident[0].facebookUrl)}
            instagramUrl={ensureProtocol(currentPresident[0].instagramUrl)}
            linkedinUrl={ensureProtocol(currentPresident[0].linkedinUrl)}
          />
        </div>
        {/* Other Executive Members */}
        <MembersRow members={executiveMembers.map(m => ({
          ...m,
          facebookUrl: ensureProtocol(m.facebookUrl),
          instagramUrl: ensureProtocol(m.instagramUrl),
          linkedinUrl: ensureProtocol(m.linkedinUrl),
        }))} />
      </div>
    </div>
  );
};

export default Officers;