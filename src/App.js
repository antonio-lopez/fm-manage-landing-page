import './App.css';
import CTA from './components/CTA/CTA';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}

export default App;
