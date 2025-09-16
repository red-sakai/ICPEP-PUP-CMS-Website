import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';
import Footer from './components/sections/Footer';
import Facts from './components/sections/Facts';
import AboutUs from './components/sections/AboutUs';
import MissionVision from './components/sections/Mission&Vision';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ICPEP />
      <Facts />
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <AboutUs />
      <MissionVision />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
