import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Mobile App For iOS and Android',
    'Webiste Development',
    'AI Development',
    'MVP Solutions',
    'HRM & POS Systems',
    'E-commerce Development',
     'Payment Integrations'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentText.length) {
          setTypewriterText(currentText.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4 mt-16 md:mt-0">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 text-sm font-medium">🚀 Available for Projects</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Expert</span>
                <span className="block bg-gradient-to-r from-blue-400 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300">
                Specializing in{' '}
                <span className="text-cyan-400 font-semibold">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Helping startups and businesses scale faster with high-performance websites, mobile apps, and AI automation solutions. I build modern, reliable, and growth-focused products that turn ideas into real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative bg-gradient-to-r from-blue-500 to-green-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Hire Me Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center justify-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <span>View Projects</span>
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">60+</div>
                <div className="text-sm text-gray-400">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">98%</div>
                <div className="text-sm text-gray-400">Quality of work</div>
              </div>
            </div>
          </div>

          {/* Developer Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-100 h-100 md:w-96 md:h-96 overflow-hidden  border-gradient-to-r from-cyan-400 to-purple-500 ">
                <img
                  src="assets\bg_web_profile.png"
                  alt="Professional Developer"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-cyan-500 text-white p-3 rounded-full animate-bounce">
                📱
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full animate-bounce" style={{ animationDelay: '1s' }}>
                💻
              </div>
              <div className="absolute top-1/2 -right-8 bg-green-500 text-white p-3 rounded-full animate-bounce" style={{ animationDelay: '2s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;