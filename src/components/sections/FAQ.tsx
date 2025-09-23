import { useRef, useEffect } from 'react';
import Card4 from '../ui/Card4';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FCEFFB',
        padding: '4rem 0 6rem 0',
        width: '100%',
        minHeight: '100vh',
        opacity: 0,
        transform: 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '0.5rem',
          }}
        >
          Frequently Asked Questions
        </h2>
        <div
          style={{
            width: '160px',
            height: '8px',
            borderRadius: '8px',
            background:
              'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
            margin: '0 auto 2rem auto',
          }}
        />
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.18rem',
            color: '#444',
            marginBottom: '2.5rem',
          }}
        >
          Find answers to common questions about ICPEP SE PUP membership
          <br />
          and activities.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <Card4
          question="What is ICPEP SE PUP?"
          answer="ICPEP SE PUP is a student organization for Computer Engineering students at PUP."
        />
        <Card4
          question="How do I become a member?"
          answer="Membership details will be announced soon. Stay tuned for updates!"
        />
        <Card4
          question="What activities do you offer?"
          answer="We offer seminars, workshops, competitions, and social events for members."
        />
        <Card4
          question="Who can join?"
          answer="All Computer Engineering students at PUP are welcome to join."
        />
        <Card4
          question="How can I contact the officers?"
          answer="You can reach out via our official email or social media channels."
        />
      </div>
    </section>
  );
};

export default FAQ;
