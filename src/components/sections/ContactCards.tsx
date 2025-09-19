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
        margin: '3rem 0',
        opacity: 0,
        transform: 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center' }}>
        <Card
          icon={<FiMapPin size={28} color="#6C63FF" />}
          title="Location"
          description={
            'Polytechnic University of the Philippines\nSta. Mesa, Manila, Philippines'
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
                gap: '1.2rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.facebook.com/icpepse.pupmanila"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6C63FF' }}
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://www.instagram.com/icpep.se_pup/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6C63FF' }}
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/company/icpepse-pupmanila/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6C63FF' }}
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ContactCards;
