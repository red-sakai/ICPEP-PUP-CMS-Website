import React from 'react';
import Card from '../ui/Card';

const ICPEP = () => (
  <section
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
    }}
  >
    <h2
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 900,
        fontSize: '2rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '1.2rem',
        marginTop: 0,
      }}
    >
      What is ICPEP SE PUP?
    </h2>
    <div
      style={{
        width: '180px',
        height: '10px',
        borderRadius: '8px',
        background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
        marginBottom: '2rem',
      }}
    />
    <img
      src="/ICPEP-logo.svg"
      alt="ICPEP SE PUP Logo"
      draggable={false}
      style={{
        width: '260px',
        height: 'auto',
        marginBottom: '2rem',
        display: 'block',
      }}
    />
    <p
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.35rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: 1.4,
      }}
    >
      The Institute of Computer Engineers of the Philippines – Student Edition at the Polytechnic University of the Philippines (ICpEP.SE-PUP) is a student organization committed to advancing computer engineering and computer science education.
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
        icon={<span style={{ fontSize: '2rem', color: '#9362CD' }}>{/* code icon */}&#60;&#47;&#62;</span>}
        title="Academic Excellence"
        description="We promote academic excellence in software engineering through collaborative learning, peer mentoring, and knowledge sharing among students."
      />
      <Card
        icon={<span style={{ fontSize: '2rem', color: '#9362CD' }}>{/* people icon */}&#128101;</span>}
        title="Professional Community"
        description="A vibrant community of software engineering students fostering collaboration, networking, and professional development within PUP."
      />
      <Card
        icon={<span style={{ fontSize: '2rem', color: '#9362CD' }}>{/* bulb icon */}&#128161;</span>}
        title="Innovation and Research"
        description="We encourage innovation and research in software engineering, providing platforms for students to explore cutting-edge technologies and methodologies."
      />
    </div>
  </section>
);

export default ICPEP;