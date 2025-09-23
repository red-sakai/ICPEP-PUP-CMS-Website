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
    // Observer for fade-in slide-up animation
    const cardClass = 'facts-card-animate';
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(cardClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
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
            className="facts-card facts-card-group"
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
              transform: 'translateY(48px)',
              transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {/* Decorative elements */}
            <div className="facts-circle facts-circle-1" />
            <div className="facts-circle facts-circle-2" />
            <div className="facts-circle facts-circle-3" />

            {/* Content */}
            <div
              className="facts-text-group"
              style={{
                flex: '1',
                minWidth: '300px',
                order: idx % 2 === 0 ? 1 : 2,
                zIndex: 2,
                position: 'relative',
              }}
            >
              <h2
                className="facts-title"
                style={{
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  color: '#333',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), text-shadow 0.35s',
                }}
              >
                {fact.title}
              </h2>
              <p
                className="facts-desc"
                style={{
                  fontSize: '1.2rem',
                  color: '#333',
                  lineHeight: '1.6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400',
                  transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), text-shadow 0.35s',
                }}
              >
                {fact.description}
              </p>
            </div>

            {/* Illustration placeholder */}
            <div
              className="facts-illustration-container"
              style={{
                flex: '1',
                minWidth: '250px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                order: idx % 2 === 0 ? 2 : 1,
                zIndex: 2,
                position: 'relative',
              }}
            >
              <div
                className="facts-illustration"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(80, 60, 120, 0.10)',
                  transition: 'box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                }}
              >
                {fact.illustration.includes('.svg') || fact.illustration.includes('.jpg') || fact.illustration.includes('.png') ? (
                  <img
                    src={fact.illustration}
                    alt={fact.title}
                    className="facts-illustration-img"
                    style={{
                      width: '400px',
                      height: '400px',
                      objectFit: 'contain',
                      transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
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
      <style>
        {`
          .facts-card-animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
          }
          .facts-card-group:hover .facts-illustration {
            box-shadow: 0 16px 48px rgba(80, 60, 120, 0.18);
          }
          .facts-card-group:hover .facts-illustration-img {
            transform: scale(1.08);
          }
          .facts-card-group:hover .facts-title {
            transform: scale(1.04) translateY(-6px);
            text-shadow: 0 2px 16px rgba(80,60,120,0.10);
          }
          .facts-card-group:hover .facts-desc {
            transform: scale(1.03) translateY(-2px);
            text-shadow: 0 1px 8px rgba(80,60,120,0.08);
          }
          .facts-card-group:hover .facts-circle-1 {
            transform: rotate(-18deg) translate(-18px, -18px) scale(1.12);
            background: rgba(255,255,255,0.28);
            filter: blur(1px);
          }
          .facts-card-group:hover .facts-circle-2 {
            transform: rotate(24deg) translate(18px, 18px) scale(1.10);
            background: rgba(255,255,255,0.38);
            filter: blur(1.5px);
          }
          .facts-card-group:hover .facts-circle-3 {
            transform: rotate(-12deg) translate(0px, -12px) scale(1.08);
            background: rgba(255,255,255,0.22);
            filter: blur(0.5px);
          }
          .facts-circle {
            position: absolute;
            border-radius: 50%;
            transition: transform 0.5s cubic-bezier(.4,0,.2,1), background 0.35s, filter 0.35s;
          }
          .facts-circle-1 {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.2);
            top: 20px;
            left: 20px;
          }
          .facts-circle-2 {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.3);
            bottom: 30px;
            right: 50px;
          }
          .facts-circle-3 {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.15);
            top: 60%;
            right: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default Facts;
