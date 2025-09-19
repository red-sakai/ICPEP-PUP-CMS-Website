import { useEffect, useRef } from 'react';
import Card from '../ui/Card';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';

const ICPEP = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
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
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: '2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0rem',
          marginTop: 0,
        }}
      >
        What is ICPEP SE - PUP Manila?
      </h2>
      <div
        style={{
          width: '180px',
          height: '10px',
          borderRadius: '8px',
          background:
            'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
        }}
      />
      <img
        src="/ICPEP-logo.svg"
        alt="ICPEP SE PUP Logo"
        draggable={false}
        style={{
          width: '300px',
          height: 'auto',
          display: 'block',
        }}
      />
      <p
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.2rem',
          color: '#666',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: 1.4,
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
        <Card
          icon={<CodeIcon style={{ fontSize: '2rem', color: '#9362CD' }} />}
          title="Academic Excellence"
          description="We promote academic excellence in software engineering through collaborative learning, peer mentoring, and knowledge sharing among students."
        />
        <Card
          icon={<GroupIcon style={{ fontSize: '2rem', color: '#9362CD' }} />}
          title="Professional Community"
          description="A vibrant community of software engineering students fostering collaboration, networking, and professional development within PUP."
        />
        <Card
          icon={
            <LightbulbOutlineIcon style={{ fontSize: '2rem', color: '#9362CD' }} />
          }
          title="Innovation and Research"
          description="We encourage innovation and research in software engineering, providing platforms for students to explore cutting-edge technologies and methodologies."
        />
      </div>
    </section>
  );
};

export default ICPEP;