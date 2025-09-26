import { useRef, useEffect } from 'react';
import Card from '../ui/Card';
import { FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        margin: '9rem 0 -4rem 0',
        opacity: 0,
        transform: 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          gap: 'clamp(1rem, 4vw, 2.5rem)', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          width: '100%',
          padding: '0 clamp(0.5rem, 3vw, 1rem)'
        }}
      >
        <Card
          icon={<FiMapPin size={28} color="#6C63FF" />}
          title="Location"
          description={
            '3rd Floor College of Engineering and Architecture Building, Pureza St., Manila, Philippines'
          }
        />
        <Card
          icon={<FiMail size={28} color="#6C63FF" />}
          title="Email"
          description="icpepse.pupmanila@gmail.com"
        />
        <Card
          icon={<FiMessageCircle size={28} color="#6C63FF" />}
          title="Social Media"
          description={
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.facebook.com/icpepse.pupmanila"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(24,119,242,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/icpep.se_pup/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(221,42,123,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/icpepse-pupmanila/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#0A66C2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10,102,194,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ContactCards;
