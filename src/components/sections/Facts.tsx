import { useRef, useEffect } from 'react';

const facts = [
  {
    title: "ICPEP x PUP Fact #1",
    description: "ICpEP. org (representing CpE students) joins inter-organization competitions, like quiz bees, hackathons, and programming",
    background: "linear-gradient(135deg, #E8D5FF 0%, #C8A8FF 100%)",
    illustration: "/sapiens 1.svg" // Sapiens 1 illustration
  },
  {
    title: "ICPEP x PUP Fact #2",
    description: "From inter-org competitions, academic seminars, to community outreach — ICpEP joins in PUP initiatives as the CpE representative.",
    background: "linear-gradient(135deg, #FFB8B8 0%, #FF9999 100%)",
    illustration: "/sapiens 2.svg" // Sapiens 2 illustration
  },
  {
    title: "ICPEP x PUP Fact #3",
    description: "It’s the recognized student chapter of ICpEP at PUP. It serves as the official academic organization for Computer Engineering (CpE) students.",
    background: "linear-gradient(135deg, #FFD4B8 0%, #FFBF99 100%)",
    illustration: "/sapiens 3.svg" // Sapiens 3 illustration
  }
];

const Facts = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 200 + idx * 150); // stagger animation
      }
    });
  }, []);

  return (
    <section style={{ 
      minHeight: '100vh', 
      padding: '4rem 0', 
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        {facts.map((fact, idx) => (
          <div 
            key={idx}
            ref={el => { cardRefs.current[idx] = el; }}
            style={{ 
              background: fact.background,
              borderRadius: '32px',
              padding: '3rem',
              marginBottom: idx === facts.length - 1 ? '0' : '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              minHeight: '250px',
              position: 'relative',
              overflow: 'hidden',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              top: '20px',
              left: '20px'
            }} />
            <div style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
              bottom: '30px',
              right: '50px'
            }} />
            <div style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              top: '60%',
              right: '20px'
            }} />

            {/* Content */}
            <div style={{ 
              flex: '1', 
              minWidth: '300px',
              order: idx % 2 === 0 ? 1 : 2,
              zIndex: 2,
              position: 'relative'
            }}>
              <h2 style={{ 
                fontWeight: 800, 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem', 
                color: '#333',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                {fact.title}
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#333', 
                lineHeight: '1.6',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '400'
              }}>
                {fact.description}
              </p>
            </div>

            {/* Illustration placeholder */}
            <div style={{ 
              flex: '1', 
              minWidth: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: idx % 2 === 0 ? 2 : 1,
              zIndex: 2,
              position: 'relative'
            }}>
              <div style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                {fact.illustration.includes('.svg') || fact.illustration.includes('.jpg') || fact.illustration.includes('.png') ? (
                  <img 
                    src={fact.illustration} 
                    alt={fact.title}
                    style={{
                      width: '400px',
                      height: '400px',
                      objectFit: 'contain'
                    }}
                    draggable={false}
                  />
                ) : (
                  fact.illustration
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;
