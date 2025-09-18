import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';
import Footer from './components/sections/Footer';
import Facts from './components/sections/Facts';
import AboutUs from './components/sections/AboutUs';
import MissionVision from './components/sections/Mission&Vision';
import Adviser from './components/sections/Adviser';
import Officers from './components/sections/Officers';
import History from './components/sections/History';
import ContactUs from './components/sections/ContactUs';
import ContactCards from './components/sections/ContactCards';
import FAQ from './components/sections/FAQ';
import { useEffect } from 'react';

{/* Landing Page section */}
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

{/* About Page section */}
function AboutPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <AboutUs />
      <MissionVision />
      <Adviser />
      <Officers />
      <History />
      <Footer />
    </div>
  );
}

{/* Contact Us section */}
function ContactPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <ContactUs />
      <ContactCards />
      <FAQ />
      <Footer />
    </div>
  )
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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
