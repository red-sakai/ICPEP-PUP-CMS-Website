import Navbar from './Navbar';
import Card2 from '../ui/Card2';

const missionText = `The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) is committed to bridging the gap between the industry and the academe by empowering the interests, welfare, and ideals of its members, developing a strong and harmonious foundation within its community, and professionalizing the skills of its officers and members for global competitiveness and national progression.`;

const visionText = `The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) envisions itself as the foundation of world-class computer engineers and a motivator of students' interests towards excellence in Computer Engineering as their field of specialization.`;

const MissionVision = () => (
  <div id="mission-vision-section" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', boxSizing: 'border-box', background: '#fff' }}>
    <Navbar />
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '3rem 1rem 0 1rem',
      }}
    >
      {/* Mission */}
      <h2
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: '2.2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0.7rem',
          marginTop: 0,
        }}
      >
        Mission
      </h2>
      <div
        style={{
          width: '160px',
          height: '8px',
          borderRadius: '8px',
          background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          margin: '0 auto 2rem auto',
        }}
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <Card2 description={missionText} />
      </div>
      {/* Vision */}
      <h2
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: '2.2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0.7rem',
          marginTop: '2.5rem',
        }}
      >
        Vision
      </h2>
      <div
        style={{
          width: '160px',
          height: '8px',
          borderRadius: '8px',
          background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
          margin: '0 auto 2rem auto',
        }}
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <Card2 description={visionText} />
      </div>
    </div>
  </div>
);

export default MissionVision;
