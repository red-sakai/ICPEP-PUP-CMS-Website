import Card3 from '../ui/Card3';

const devs = [
  {
    name: 'Ezekiel Bustamante',
    position: 'UI/UX Designer',
    photoUrl: "#",
    facebookUrl: "https://www.facebook.com/ezekiel.bustamante.549",
    xUrl: "#",
    instagramUrl: "https://www.instagram.com/kielsough/",
    linkedinUrl: "https://www.linkedin.com/in/ezekiel-bustamante-166493353/"
  },
  {
    name: 'Jhered Republica',
    position: 'Frontend Developer',
    photoUrl: "Jhered.jpg",
    facebookUrl: "https://www.facebook.com/jay.mcrr",
    xUrl: "#",
    instagramUrl: "https://www.instagram.com/jay_mcrr/",
    linkedinUrl: "https://www.linkedin.com/in/jhered-miguel-republica-13884b322/"
  },
  {
    name: 'Marjoy Caranto',
    position: 'Frontend Developer',
    photoUrl: "#",
    facebookUrl: "https://www.facebook.com/marjoycarantoaccount",
    xUrl: "#",
    instagramUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/marjoycaranto/"
  }
];

const researchTeam = [
  {
    name: 'Carl Erosa',
    position: 'Researcher',
    photoUrl: "Carl-E.jpg",
    facebookUrl: "https://www.facebook.com/CmDrew13",
    xUrl: "#",
    instagramUrl: "https://www.instagram.com/itsyaboikaruu/",
    linkedinUrl: "https://www.linkedin.com/in/carl-melvin-erosa-4805b4304/"
  },
  {
    name: 'Carl Blancaflor',
    position: 'Researcher',
    photoUrl: "#",
    facebookUrl: "https://www.facebook.com/BlancaflorCarl",
    xUrl: "#",
    instagramUrl: "https://www.instagram.com/blancaflor_carl/",
    linkedinUrl: "https://www.linkedin.com/in/carl-blancaflor-013881323/"
  }
];

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

const MembersRow = ({ members }: { members: typeof devs | typeof researchTeam }) => {
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

const Devs = () => {
  return (
    <div
      id="devs-section"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '10rem',
        position: 'relative',
        background: '#FCEFF7',
        padding: '3rem 0',
        overflow: 'hidden',
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
          Meet the Devs
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

      <div style={{ marginTop: '0.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader title="Development Team" />
        <MembersRow members={devs} />
      </div>
      <div style={{ marginTop: '3rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader title="Research Team" />
        <MembersRow members={researchTeam} />
      </div>
    </div>
  );
};

export default Devs;
