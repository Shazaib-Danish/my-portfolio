import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Website Development', href: '/services/web-development' },
    { name: 'Payment Integration', href: '/services/payment-integration' },
    { name: 'ERP Development', href: '/services/erp-development' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shazaib-Danish?tab=overview&from=2025-11-01&to=2025-11-08', label: 'GitHub' },
    { icon: Linkedin, href: 'linkedin.com/in/shazaib-danish-30bb9a180', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shazaibdanish4@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Shazaib Danish
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
             
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Shazaib Danish made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for amazing projects.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;