import { useRef, useEffect, useState } from 'react';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const isCurrentlyOpen = prev[index];
      // If clicking the same item that's open, close it
      if (isCurrentlyOpen) {
        return { [index]: false };
      }
      // Otherwise, close all others and open this one
      return { [index]: true };
    });
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  const faqData = [
    {
      question: "What is ICPEP SE PUP?",
      answer: "ICPEP SE PUP is a student organization for Computer Engineering students at PUP."
    },
    {
      question: "How do I become a member?",
      answer: "Membership details will be announced soon. Stay tuned for updates!"
    },
    {
      question: "What activities do you offer?",
      answer: "We offer seminars, workshops, competitions, and social events for members."
    },
    {
      question: "Who can join?",
      answer: "All Computer Engineering students at PUP are welcome to join."
    },
    {
      question: "How can I contact the officers?",
      answer: "You can reach out via our official email or social media channels."
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FCEFFB',
        padding: '6rem 2rem 6rem 2rem',
        marginTop: '16rem',
        width: '100%',
        opacity: 0,
        transform: 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <div
        className="faq-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left Side - Title and Description */}
        <div>
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: '3rem',
              color: '#333',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              width: '160px',
              height: '8px',
              borderRadius: '8px',
              background:
                'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
              marginBottom: '2rem',
            }}
          />
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}
          >
            Find answers to common questions about ICPEP SE PUP membership and activities.
          </p>
        </div>

        {/* Right Side - FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                onClick={() => toggleItem(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#333',
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>
                <span
                  style={{
                    fontSize: '1.5rem',
                    color: '#9362CD',
                    fontWeight: 'bold',
                    transition: 'transform 0.3s ease',
                    transform: openItems[index] ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </div>
              {openItems[index] && (
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #f0f0f0',
                    animation: 'fadeIn 0.3s ease-in-out',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .faq-container {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
