import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Activities />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;