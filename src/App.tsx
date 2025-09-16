import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';
import Footer from './components/sections/Footer';
import Facts from './components/sections/Facts';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <ICPEP />
      <Facts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Montserrat, sans-serif' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
