import Card3 from '../ui/Card3';

const adviser = [
  {
    name: 'Engr. Rolito L. Mahaguay',
    position: 'ICPEP SE PUP ADVISER',
    // photoUrl: "images/adviser.svg",
    facebookUrl: "https://facebook.com",
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
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15rem',
      }}
    >
      {/* Card with name, position, photo, and social media */}
      <Card3
        name = {adviser[0].name}
        position = {adviser[0].position}
        // photo = {adviser[0].photoUrl}
        width="450px"
        photoSize="150px"
        facebookUrl= {adviser[0].facebookUrl}// example para sa clickable na icon (replace the link nalang po)
        // xUrl= {adviser[0].xUrl}
        // instagramUrl= {adviser[0].instagramUrl}
        // linkedinUrl= {adviser[0].linkedinUrl}
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
