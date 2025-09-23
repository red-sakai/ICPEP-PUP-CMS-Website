import { useEffect, useRef } from 'react';
import Card3 from '../ui/Card3';

const adviser = [
  {
    name: 'Engr. Rolito L. Mahaguay',
    position: 'ICPEP SE PUP ADVISER',
    photoUrl: "Engr-Mahaguay.jpg",
    facebookUrl: "https://www.facebook.com/rmahaguay",
    xUrl: "https://x.com",
    instagramUrl: "https://instagram.com",
    linkedinUrl: "https://linkedin.com"
  }
]

const adviserDescription = `
Engr. Rolito L. Mahaguay, MSE-Computer, is an Associate Professor I and the Chairperson of the Department of Computer 
Engineering at the Polytechnic University of the Philippines – College of Engineering, where he drives initiatives to improve 
curriculum, laboratory resources, and student development. Beyond his role in the department, he also serves as the 
Faculty Adviser of ICpEP.SE – PUP Chapter, the official student organization for computer engineering, where he actively 
guides and inspires future engineers to uphold excellence, innovation, and camaraderie.
`;

const Adviser = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15rem',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {/* Card with name, position, photo, and social media */}
      <Card3
  name={adviser[0].name}
  position={adviser[0].position}
  photoUrl={adviser[0].photoUrl}
  width="450px"
  photoSize="150px"
  facebookUrl={adviser[0].facebookUrl}
  instagramUrl={adviser[0].instagramUrl}
  linkedinUrl={adviser[0].linkedinUrl}
      />

      {/* Description */}
      <div
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
        {adviserDescription}
      </div>
    </div>
  );
};

export default Adviser;
