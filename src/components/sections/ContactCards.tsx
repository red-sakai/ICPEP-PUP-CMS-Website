import Card from '../ui/Card';
import { FiPhone, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';

const ContactCards = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2.5rem',
      margin: '3rem 0',
    }}
  >
    <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center' }}>
      <Card
        icon={<FiPhone size={28} color="#6C63FF" />}
        title="Phone"
        description="+63 XXX XXX XXXX"
      />
      <Card
        icon={<FiMapPin size={28} color="#6C63FF" />}
        title="Location"
        description={
          "Polytechnic University of the Philippines\nSta. Mesa, Manila, Philippines"
        }
      />
    </div>
    <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center' }}>
      <Card
        icon={<FiMail size={28} color="#6C63FF" />}
        title="Email"
        description="m@gmail.com"
      />
      <Card
        icon={<FiMessageCircle size={28} color="#6C63FF" />}
        title="Social Media"
        description="Social Media Link Here"
      />
    </div>
  </div>
);

export default ContactCards;
