import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import ICPEP from './components/sections/ICPEP';

function App() {
  return (
    <>
    <div style={{ minHeight: '100vh', background: '#f9f9f9', fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Hero />
      <ICPEP />
    </div>
    
    </>
  )
}

export default App
