import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';
import Footer from './components/sections/Footer';
import Facts from './components/sections/Facts';

function App() {
  return (
    <>
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Hero />
      <ICPEP />
      <Facts />
      <Footer />
    </div>
    
    </>
  )
}

export default App
