import Card3 from '../ui/Card3';

const adviserName = 'Sir Mahaguay';
const adviserPosition = 'ICPEP SE PUP ADVISER';

const adviserDescription = `
Engr. Rolito L. Mahaguay, MSE-Computer, is an Associate Professor I and the Chairperson of the Department of Computer 
Engineering at the Polytechnic University of the Philippines – College of Engineering, where he drives initiatives to improve 
curriculum, laboratory resources, and student development. Beyond his role in the department, he also serves as the 
Faculty Adviser of ICpEP.SE – PUP Chapter, the official student organization for computer engineering, where he actively 
guides and inspires future engineers to uphold excellence, innovation, and camaraderie.
`;

const Adviser = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2.5rem',
      }}
    >
      {/* Card with name, position, photo, and social media */}
      <Card3
        name = "Sir Mahaguay"
        position = "ICPEP SE PUP ADVISER"
        // photo = "images/adviser.svg"
        width="450px"
        photoSize="150px"
        facebookUrl="https://facebook.com" // example para sa clickable na icon (replace the link nalang po)
        // twitterUrl="https://twitter.com"
        // instagramUrl="https://instagram.com"
        // linkedinUrl="https://linkedin.com"
      />

      {/* Description */}
      <div
        style={{
          maxWidth: '1500px',
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '1.3rem',
          lineHeight: '1.5',
          color: '#777',
        }}
      >
        {adviserDescription}
      </div>
    </div>
  );
};

export default Adviser;
