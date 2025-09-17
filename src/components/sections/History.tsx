import Card2 from '../ui/Card2';

// Icons for each section
const FoundingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3333 35H6.66667V16.6667H33.3333V35ZM20 5L33.3333 15H6.66667L20 5ZM13.3333 21.6667H10V25H13.3333V21.6667ZM21.6667 21.6667H18.3333V25H21.6667V21.6667ZM30 21.6667H26.6667V25H30V21.6667Z" fill="#9362CD" />
  </svg>
);

const IdentityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35ZM20 31.6667C22.6522 31.6667 25.1957 30.6149 27.0711 28.7395C28.9464 26.8642 30 24.3207 30 21.6667C30 19.0128 28.9464 16.4692 27.0711 14.5939C25.1957 12.7202 22.6522 11.6667 20 11.6667C17.3478 11.6667 14.8043 12.7202 12.9289 14.5939C11.0536 16.4692 10 19.0128 10 21.6667C10 24.3207 11.0536 26.8642 12.9289 28.7395C14.8043 30.6149 17.3478 31.6667 20 31.6667ZM13.3333 21.6667C13.3333 19.8986 14.0357 18.2029 15.2859 16.9526C16.5362 15.7024 18.2319 15 20 15C21.7681 15 23.4638 15.7024 24.7141 16.9526C25.9643 18.2029 26.6667 19.8986 26.6667 21.6667C26.6667 23.4348 25.9643 25.1304 24.7141 26.3807C23.4638 27.631 21.7681 28.3333 20 28.3333C18.2319 28.3333 16.5362 27.631 15.2859 26.3807C14.0357 25.1304 13.3333 23.4348 13.3333 21.6667Z" fill="#9362CD" />
  </svg>
);

const RoleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35ZM20 13.3333C18.2319 13.3333 16.5362 14.0357 15.2859 15.2859C14.0357 16.5362 13.3333 18.2319 13.3333 20C13.3333 21.7681 14.0357 23.4638 15.2859 24.7141C16.5362 25.9643 18.2319 26.6667 20 26.6667C21.7681 26.6667 23.4638 25.9643 24.7141 24.7141C25.9643 23.4638 26.6667 21.7681 26.6667 20C26.6667 18.2319 25.9643 16.5362 24.7141 15.2859C23.4638 14.0357 21.7681 13.3333 20 13.3333Z" fill="#9362CD" />
  </svg>
);

const PartnershipIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15C30 16.9891 29.2098 18.8968 27.8033 20.3033C26.3968 21.7098 24.4891 22.5 22.5 22.5C20.5109 22.5 18.6032 21.7098 17.1967 20.3033C15.7902 18.8968 15 16.9891 15 15C15 13.0109 15.7902 11.1032 17.1967 9.6967C18.6032 8.29018 20.5109 7.5 22.5 7.5C24.4891 7.5 26.3968 8.29018 27.8033 9.6967C29.2098 11.1032 30 13.0109 30 15ZM7.5 12.5C7.5 13.8261 8.02678 15.0979 8.96447 16.0355C9.90215 16.9732 11.1739 17.5 12.5 17.5C13.8261 17.5 15.0979 16.9732 16.0355 16.0355C16.9732 15.0979 17.5 13.8261 17.5 12.5C17.5 11.1739 16.9732 9.90215 16.0355 8.96447C15.0979 8.02678 13.8261 7.5 12.5 7.5C11.1739 7.5 9.90215 8.02678 8.96447 8.96447C8.02678 9.90215 7.5 11.1739 7.5 12.5ZM32.5 30V32.5H5V30C5 27.3478 6.05357 24.8043 7.92893 22.9289C9.8043 21.0536 12.3478 20 15 20H22.5C25.1522 20 27.6957 21.0536 29.5711 22.9289C31.4464 24.8043 32.5 27.3478 32.5 30Z" fill="#9362CD"/>
  </svg>
);

const StudentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L5 12.5L20 20L35 12.5L20 5ZM20 22.5L8.75 16.875V26.875C8.75 29.0625 13.125 31.25 20 31.25C26.875 31.25 31.25 29.0625 31.25 26.875V16.875L20 22.5Z" fill="#9362CD"/>
  </svg>
);

const ContinuingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C24.7399 35 28.9798 32.6852 31.6187 29.1651L35.4532 33.0002L37.5745 30.8789L33.6806 27.0837C34.5128 24.9292 35 22.5336 35 20C35 11.7157 28.2843 5 20 5ZM20 31.6667C13.5567 31.6667 8.33333 26.4433 8.33333 20C8.33333 13.5567 13.5567 8.33333 20 8.33333C26.4433 8.33333 31.6667 13.5567 31.6667 20C31.6667 21.5814 31.3689 23.092 30.8248 24.4823L20.7915 14.449L18.3336 16.9069L28.4413 27.0146C26.2794 29.9058 23.1387 31.6667 20 31.6667Z" fill="#9362CD"/>
  </svg>
);

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
            icon={<FoundingIcon />}
            title="Founding and History"
            description="The Institute of Computer Engineers of the Philippines (ICpEP) originated in 1992 as the Philippine Institute of Computer Engineers (PhICEs). After a period of dormancy, it was revitalized in 2008 by leaders including Engr. Erwin G. Mendoza and Engr. Alexander B. Ybasco, and officially rebranded as ICpEP." 
          />

          {/* Organizational Identity */}
          <Card2 
            icon={<IdentityIcon />}
            title="Organizational Identity"
            description="ICpEP is a non-stock, non-profit professional organization registered with the Securities and Exchange Commission (SEC Reg. No. 201120675). It is widely recognized as the official body representing computer engineers in the Philippines, both in industry and academe." 
          />

          {/* Role and Contributions */}
          <Card2 
            icon={<RoleIcon />}
            title="Role and Contributions"
            description="Since its revival, ICpEP has been instrumental in promoting professional standards, encouraging continuing education, and fostering innovation in technology and engineering practices. It actively represents the profession in national discussions and provides a unified voice for computer engineers across the country." 
          />

          {/* Industry Partnerships */}
          <Card2 
            icon={<PartnershipIcon />}
            title="Industry Partnerships"
            description="ICpEP has established collaborations with major global and local technology companies, including Intel, Microsoft, HP, Lenovo, and Epson. It has also partnered with organizations such as SM Mall of Asia and the NIDO Fortified Science Discovery Center, showcasing student and professional innovations in computer engineering." 
          />

          {/* Student Edition (ICpEP.SE) */}
          <Card2 
            icon={<StudentIcon />}
            title="Student Edition (ICpEP.SE)"
            description="The Student Edition of ICpEP (ICpEP.SE) was launched in 2008, starting with 11 schools, including the Polytechnic University of the Philippines (PUP), Pamantasan ng Lungsod ng Maynila, Mapúa University, and De La Salle University. Today, ICpEP.SE has expanded to over 68 institutions nationwide, serving as the official student arm that nurtures future computer engineers." 
          />

          {/* Continuing Mission */}
          <Card2 
            icon={<ContinuingIcon />}
            title="Continuing Mission"
            description="ICpEP remains committed to advancing the profession, providing opportunities for professional development, and contributing to the technological growth of the Philippines. Through its professional and student chapters, it ensures that computer engineers play a vital role in shaping the country's future." 
          />
        </div>
      </div>
    </div>
  );
};

export default History;