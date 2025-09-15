import Button from '../ui/Button';

const Hero = () => {
  return (
    <>
    <section
      style={{
        backgroundImage: 'url("/bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: -1
      }}
    >
      {/* Import Montserrat font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
        `}
      </style>
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{ marginTop: "-5rem", marginLeft: "4rem" }}>
          <h1 style={{
            fontSize: "3.5rem",
            margin: 0,
            fontWeight: 900,
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: 1,
          }}>
            Engineering Tomorrow,<br /><br />
            One Student at a Time
          </h1>
        </div>
        {/* Buttons below heading */}
        <div style={{
          position: "absolute",
          top: "14rem",
          left: 0,
          width: "100%",
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center"
        }}>
          <Button variant="primary">Become a Member</Button>
          <Button
            variant="gradientOutline"
            iconRight={
              <span style={{ display: 'inline-block', marginLeft: '0.5em', fontSize: '1.2em' }}>
                &#8594;
              </span>
            }
            style={{
              color: '#fff',
              border: '2px solid #fff',
              boxShadow: 'none',
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;