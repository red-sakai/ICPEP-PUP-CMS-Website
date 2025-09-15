const Hero = () => {
  return (
    <>
    <section
      style={{
        backgroundImage: 'url("/background2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
    <h1 style={{ color: "white", 
    marginTop: "-190px",
    marginLeft: "140px", 
    fontSize: "4rem" }}>Engineering Tomorrow,</h1>
    <h1 style={{ color: "white", 
    marginTop: "90px",
    marginLeft: "-780px", 
    fontSize: "4rem" }}>One Student at a Time</h1>
    </section>
    </>
  );
};

export default Hero;