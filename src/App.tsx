import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';

function App() {
  return (
    <>
    <div style={{ minHeight: '100vh', background: '#f9f9f9', fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Hero/>
    </div>
    
    </>
  )
}

export default App
