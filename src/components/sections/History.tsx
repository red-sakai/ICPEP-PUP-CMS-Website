import { BsBank } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { FaFingerprint, FaHandshake } from "react-icons/fa";

import Card2 from '../ui/Card2';

const History = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '3rem 1rem 5rem',
        boxSizing: 'border-box',
        background: '#fff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#505050',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}
        >
          Our History
        </h1>
        <div
          style={{
            width: '160px',
            height: '8px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
            margin: '0 auto 3rem auto',
          }}
        />

        {/* History Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Founding and History */}
          <Card2 
            icon={<BsBank size={30} color="#9362CD" />}
            title="Founding and History"
            description="The Institute of Computer Engineers of the Philippines (ICpEP) originated in 1992 as the Philippine Institute of Computer Engineers (PhICEs). After a period of dormancy, it was revitalized in 2008 by leaders including Engr. Erwin G. Mendoza and Engr. Alexander B. Ybasco, and officially rebranded as ICpEP." 
          />

          {/* Organizational Identity */}
          <Card2 
            icon={<FaFingerprint size={30} color="#9362CD" />}
            title="Organizational Identity"
            description="ICpEP is a non-stock, non-profit professional organization registered with the Securities and Exchange Commission (SEC Reg. No. 201120675). It is widely recognized as the official body representing computer engineers in the Philippines, both in industry and academe." 
          />

          {/* Role and Contributions */}
          <Card2 
            icon={<PiHandCoinsDuotone size={30} color="#9362CD" />}
            title="Role and Contributions"
            description="Since its revival, ICpEP has been instrumental in promoting professional standards, encouraging continuing education, and fostering innovation in technology and engineering practices. It actively represents the profession in national discussions and provides a unified voice for computer engineers across the country." 
          />

          {/* Industry Partnerships */}
          <Card2 
            icon={<FaHandshake size={30} color="#9362CD" />}
            title="Industry Partnerships"
            description="ICpEP has established collaborations with major global and local technology companies, including Intel, Microsoft, HP, Lenovo, and Epson. It has also partnered with organizations such as SM Mall of Asia and the NIDO Fortified Science Discovery Center, showcasing student and professional innovations in computer engineering." 
          />

          {/* Student Edition (ICpEP.SE) */}
          <Card2 
            icon={<IoIosSchool size={30} color="#9362CD" />}
            title="Student Edition (ICpEP.SE)"
            description="The Student Edition of ICpEP (ICpEP.SE) was launched in 2008, starting with 11 schools, including the Polytechnic University of the Philippines (PUP), Pamantasan ng Lungsod ng Maynila, Mapúa University, and De La Salle University. Today, ICpEP.SE has expanded to over 68 institutions nationwide, serving as the official student arm that nurtures future computer engineers." 
          />

          {/* Continuing Mission */}
          <Card2 
            icon={<LiaSpaceShuttleSolid size={30} color="#9362CD" />}
            title="Continuing Mission"
            description="ICpEP remains committed to advancing the profession, providing opportunities for professional development, and contributing to the technological growth of the Philippines. Through its professional and student chapters, it ensures that computer engineers play a vital role in shaping the country's future." 
          />
        </div>
      </div>
    </div>
  );
};

export default History;
