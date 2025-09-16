import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';
import Footer from './components/sections/Footer';
import Facts from './components/sections/Facts';
import AboutUs from './components/sections/AboutUs';
import MissionVision from './components/sections/Mission&Vision';
import { useEffect } from 'react';

function LandingPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <ICPEP />
      <Facts />
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <AboutUs />
      <MissionVision />
      <Footer />
    </div>
  );
}

function App() {
  // Add global styles to ensure full-width layout
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';

    const htmlElement = document.documentElement;
    htmlElement.style.margin = '0';
    htmlElement.style.padding = '0';
    htmlElement.style.width = '100%';
    htmlElement.style.overflowX = 'hidden';
  }, []);

  return (
    <Router>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
