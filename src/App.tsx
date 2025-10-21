import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import ScrollProgress from './components/ScrollProgress';
import ServiceDetail from './pages/ServiceDetail';
import SEOHead from './components/SEOHead';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Expert Flutter & Laravel Developer | Mobile Apps & Web Development Services"
        description="Professional Flutter mobile app developer and Laravel web developer. 30+ payment gateways integrated. ERP, CRM, POS, E-commerce solutions. Hire top developer for your project."
        keywords="Flutter developer, Laravel developer, mobile app development, web development, payment gateway integration, ERP development, CRM development, POS system, e-commerce development"
      />
      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        <ParticleCanvas />
        <ScrollProgress />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;