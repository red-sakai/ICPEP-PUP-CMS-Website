import Card3 from '../ui/Card3';

const currentPresident = [
  {
    name: 'Gladwin Ferdz Del Rosario',
    position: 'President',
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

const executiveMembers = [
  {
    name: 'Name',
    position: 'Position',
    photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

const committeeMembers = [
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

const pastPresidents = [
  {
    name: 'Marvin Erosa',
    position: "'24-'25 pres.",
    // photoUrl: "images/member.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

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

const MembersRow = ({ members }: { members: typeof executiveMembers }) => {
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
            // photoUrl={member.photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={member.facebookUrl}
            xUrl={member.xUrl}
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
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15rem',
      }}
    >
      <div>
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
        ICpEp.se PUP Officers 2025-2026
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
          marginTop: '0.5rem'
        }}
      >
        <SectionHeader title="Executive Members" />
        {/* President */}
        <div style={{ marginTop: '2rem' }}>
          <Card3
          name={currentPresident[0].name}
          position={currentPresident[0].position}
          // photoUrl={currentPresident[0].photoUrl}
          width="650px"
          photoSize="150px"
          facebookUrl={currentPresident[0].facebookUrl}
          xUrl={currentPresident[0].xUrl}
          instagramUrl={currentPresident[0].instagramUrl}
          linkedinUrl={currentPresident[0].linkedinUrl}
          />
        </div>
        {/* Other Executive Members */}
        <MembersRow members={executiveMembers} />
      </div>

      {/* Committee Members */}
      <div style={{ marginTop: '3rem' }}>
        <SectionHeader title="Committee Members" />
        <MembersRow members={committeeMembers} />
      </div>
      
      {/* Past Presidents */}
      <div style={{ marginTop: '3rem' }}>
        <SectionHeader title="Past Presidents" />
        <MembersRow members={pastPresidents} />
      </div>
    </div>
  );
};

export default Officers;