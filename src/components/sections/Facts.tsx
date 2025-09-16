const facts = [
  // Placeholder facts, add/remove/edit as needed
  "Lorem ipsum shet",
  "Another placeholder shet",
  "another fact goes here shet"
];

const Facts = () => {
  return (
    <section style={{ padding: '4rem 0', background: '#f3eafd', minHeight: '300px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        {facts.map((fact, idx) => (
          <div key={idx} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
              ICPEP x PUP Fact #{idx + 1}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              {fact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;
