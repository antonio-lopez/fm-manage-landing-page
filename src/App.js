import './App.css';
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
    </>
  );
}

export default App;
