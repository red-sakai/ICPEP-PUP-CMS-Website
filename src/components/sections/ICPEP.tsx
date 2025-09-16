import React from 'react';

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
  </section>
);

export default ICPEP;