import Card3 from '../ui/Card3';

const executiveMembers = [
  {
    name: 'Gladwin Ferdz Del Rosario',
    position: 'President',
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/president.svg",
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
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/president.svg",
    facebookUrl: "https://facebook.com",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: 'Name',
    position: 'Position',
    // photoUrl: "images/president.svg",
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
    // photoUrl: "images/president.svg",
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
        <div>
          <Card3
            name = {executiveMembers[0].name}
            position = {executiveMembers[0].position}
            // photo = {executiveMembers[0].photoUrl}
            width="650px"
            photoSize="150px"
            facebookUrl= {executiveMembers[0].facebookUrl}
            xUrl= {executiveMembers[0].xUrl}
            instagramUrl= {executiveMembers[0].instagramUrl}
            linkedinUrl= {executiveMembers[0].linkedinUrl}
          />
        </div>
        {/* Other Executive Members */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem', 
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <Card3
            name={executiveMembers[1].name}
            position={executiveMembers[1].position}
            // photoUrl={executiveMembers[1].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={executiveMembers[1].facebookUrl}
            xUrl={executiveMembers[1].xUrl}
            instagramUrl={executiveMembers[1].instagramUrl}
            linkedinUrl={executiveMembers[1].linkedinUrl}
          />
          <Card3
            name={executiveMembers[2].name}
            position={executiveMembers[2].position}
            // photoUrl={executiveMembers[2].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={executiveMembers[2].facebookUrl}
            xUrl={executiveMembers[2].xUrl}
            instagramUrl={executiveMembers[2].instagramUrl}
            linkedinUrl={executiveMembers[2].linkedinUrl}
          />
          <Card3
            name={executiveMembers[3].name}
            position={executiveMembers[3].position}
            // photoUrl={executiveMembers[3].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={executiveMembers[3].facebookUrl}
            xUrl={executiveMembers[3].xUrl}
            instagramUrl={executiveMembers[3].instagramUrl}
            linkedinUrl={executiveMembers[3].linkedinUrl}
          />
        </div>
      </div>

      {/* Committee Members */}
      <div
        style={{
          marginTop: '3rem'
        }}
      >
        <SectionHeader title="Committee Members" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <Card3
            name={committeeMembers[0].name}
            position={committeeMembers[0].position}
            // photoUrl={committeeMembers[0].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={committeeMembers[0].facebookUrl}
            xUrl={committeeMembers[0].xUrl}
            instagramUrl={committeeMembers[0].instagramUrl}
            linkedinUrl={committeeMembers[0].linkedinUrl}
          />
          <Card3
            name={committeeMembers[1].name}
            position={committeeMembers[1].position}
            // photoUrl={committeeMembers[1].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={committeeMembers[1].facebookUrl}
            xUrl={committeeMembers[1].xUrl}
            instagramUrl={committeeMembers[1].instagramUrl}
            linkedinUrl={committeeMembers[1].linkedinUrl}
          />
          <Card3
            name={committeeMembers[2].name}
            position={committeeMembers[2].position}
            // photoUrl={committeeMembers[2].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={committeeMembers[2].facebookUrl}
            xUrl={committeeMembers[2].xUrl}
            instagramUrl={committeeMembers[2].instagramUrl}
            linkedinUrl={committeeMembers[2].linkedinUrl}
          />
        </div>
      </div>
      
      {/* Past Presidents */}
      <div
        style={{
          marginTop: '3rem'
        }}
      >
        <SectionHeader title="Past Presidents" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <Card3
            name={pastPresidents[0].name}
            position={pastPresidents[0].position}
            // photoUrl={pastPresidents[0].photoUrl}
            width="400px"
            photoSize="150px"
            facebookUrl={pastPresidents[0].facebookUrl}
            xUrl={pastPresidents[0].xUrl}
            instagramUrl={pastPresidents[0].instagramUrl}
            linkedinUrl={pastPresidents[0].linkedinUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Officers;
