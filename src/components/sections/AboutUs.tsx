import Navbar from './Navbar';

const AboutUs = () => (
  <div style={{ width: '100%', overflowX: 'hidden', boxSizing: 'border-box', margin: 0, padding: 0 }}>
    <Navbar />
    {/* Gradient header */}
    <div
      style={{
        width: '100%',
        minHeight: '340px',
        background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: 0,
        padding: '0 1rem',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '3rem 0 2rem 0', boxSizing: 'border-box' }}>
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '2.5rem',
            color: '#fff',
            textAlign: 'center',
            marginBottom: '1.2rem',
            marginTop: 0,
            letterSpacing: '0.02em',
          }}
        >
          ABOUT ICPEP SE PUP
        </h1>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.15rem',
            color: '#fff',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Learn about the Institute of Computer Engineers of the Philippines, our mission, vision, and the people who lead our organization.
        </p>
      </div>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        right: '40px',
        top: '60%',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle at 70% 70%, #9362cd 60%, #fde5d9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        left: '40px',
        top: '60%',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle at 30% 30%, #fde5d9 70%, #9362cd 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        right: '160px',
        top: '30%',
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle at 70% 70%, #9362cd 60%, #fde5d9 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        left: '160px',
        top: '30%',
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle at 30% 30%, #fde5d9 70%, #9362cd 100%)',
        borderRadius: '50%',
        opacity: 0.7,
        zIndex: 1,
      }} />
    </div>
  </div>
);

export default AboutUs;