import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ParticleCanvas from './components/ParticleCanvas';
import ScrollProgress from './components/ScrollProgress';
import SEOHead from './components/SEOHead';

const Education = lazy(() => import('./components/Education'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

function HomePage() {
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
          <Suspense fallback={null}>
            <Education />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Suspense>
  );
}


export default App;