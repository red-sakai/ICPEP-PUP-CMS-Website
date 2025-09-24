import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Devs from './components/sections/Devs';
import { useEffect, useState } from 'react';

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
      <Devs />
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

// Splash screen shown before landing page
function SplashScreen() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      zIndex: 9999
    }}>
      <style>
        {`
          @keyframes icpepSplash {
            0% { opacity: 0; transform: scale(0.8); }
            40% { opacity: 1; transform: scale(1.05); }
            70% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.1); }
          }
        `}
      </style>
      <img
        src="/ICPEP-logo.svg"
        alt="ICPEP Logo"
        style={{
          width: 'min(48vw, 260px)',
          height: 'auto',
          animation: 'icpepSplash 1800ms ease-in-out forwards'
        }}
      />
    </div>
  );
}

// Gate the LandingPage behind the splash animation
function GatedLanding() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1900); // slightly longer than animation
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;
  return <LandingPage />;
}

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
      <ScrollToTop />
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<GatedLanding />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
