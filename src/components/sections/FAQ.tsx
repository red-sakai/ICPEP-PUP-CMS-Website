import { useRef, useEffect, useState } from 'react';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const faqItemsRef = useRef<HTMLDivElement>(null);
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
    // Animate section
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }

    // Observer for heading and color line (fade-in slide-up)
    const fadeSlideClass = 'faq-fade-slide';
    const fadeObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(fadeSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) fadeObserver.observe(headingRef.current);
    if (lineRef.current) fadeObserver.observe(lineRef.current);

    // Observer for description paragraph (separate animation)
    const descSlideClass = 'faq-desc-slide';
    const descObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(descSlideClass);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (descRef.current) descObserver.observe(descRef.current);

    // Observer for FAQ items container
    const faqItemsSlideClass = 'faq-items-slide';
    const faqItemsObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(faqItemsSlideClass);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (faqItemsRef.current) faqItemsObserver.observe(faqItemsRef.current);

    return () => {
      if (headingRef.current) fadeObserver.unobserve(headingRef.current);
      if (lineRef.current) fadeObserver.unobserve(lineRef.current);
      if (descRef.current) descObserver.unobserve(descRef.current);
      if (faqItemsRef.current) faqItemsObserver.unobserve(faqItemsRef.current);
    };
  }, []);

  const faqData = [
    {
      question: "What is ICPEP SE - PUP Manila?",
      answer: "ICPEP SE – PUP Manila is a student organization under ICpEP.SE – NCR that provides PUP Computer Engineering(both BS and Diploma) students with opportunities to learn, grow, and connect with technology-driven communities and industries."
    },
    {
      question: "How do I become a member?",
      answer: "Membership details will be announced soon. Stay tuned through our facebook page for updates!"
    },
    {
      question: "What activities do you offer?",
      answer: "We organize a variety of activities including seminars, workshops, competitions, mentorship programs, social events, and exclusive member initiatives. Stay connected through our social media channels to get the latest updates!"
    },
    {
      question: "Who can join?",
      answer: "All Computer Engineering students in both BS and Diploma programs at PUP-Sta.Mesa are welcome to join."
    },
    {
      question: "How can I contact the officers?",
      answer: "You can reach out via our official email, social media channels or through our facebook page."
    }
  ];

  return (
    <section
      id="faq-section"
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
            ref={headingRef}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: '3rem',
              color: '#333',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              opacity: 0,
              transform: 'translateY(48px)',
              transition:
                'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            ref={lineRef}
            style={{
              width: '160px',
              height: '8px',
              borderRadius: '8px',
              background:
                'linear-gradient(90deg, #9362CD 0%, #E80F50 60%, #FDE5D9 100%)',
              marginBottom: '2rem',
              opacity: 0,
              transform: 'translateY(48px)',
              transition:
                'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
            }}
          />
          <p
            ref={descRef}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6',
              opacity: 0,
              transform: 'translateY(48px)',
              transition:
                'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
            }}
          >
            Find answers to common questions about ICPEP SE - PUP Manila membership and activities.
          </p>
        </div>

        {/* Right Side - FAQ Items */}
        <div
          ref={faqItemsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            opacity: 0,
            transform: 'translateY(48px)',
            transition:
              'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid transparent',
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

          .faq-fade-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .faq-desc-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition:
              opacity 0.7s cubic-bezier(.4,0,.2,1) 0.2s,
              transform 0.7s cubic-bezier(.4,0,.2,1) 0.2s;
          }

          .faq-items-slide {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition:
              opacity 0.7s cubic-bezier(.4,0,.2,1) 0.4s,
              transform 0.7s cubic-bezier(.4,0,.2,1) 0.4s;
          }

          .faq-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(147, 98, 205, 0.15);
            border-color: rgba(147, 98, 205, 0.2);
          }

          .faq-card:active {
            transform: translateY(-1px);
          }

          @media (max-width: 768px) {
            .faq-container {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            
            .faq-card:hover {
              transform: none;
              box-shadow: 0 2px 10px rgba(0,0,0,0.08);
              border-color: transparent;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
