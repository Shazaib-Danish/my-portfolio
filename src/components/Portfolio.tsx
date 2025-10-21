import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, CreditCard } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Flutter App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Complete e-commerce mobile app with payment integration, built with Flutter and Laravel backend.',
      technologies: ['Flutter', 'Laravel', 'MySQL', 'Stripe'],
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Tracking'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Restaurant Management System',
      category: 'web',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Comprehensive restaurant management web application with POS system and inventory management.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      features: ['POS System', 'Inventory Management', 'Staff Management', 'Sales Analytics', 'Customer Management'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Multi-Gateway Payment System',
      category: 'payment',
      image: 'https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Universal payment integration system supporting 30+ payment gateways worldwide.',
      technologies: ['Laravel', 'PHP', 'Multiple APIs', 'Webhooks'],
      features: ['30+ Gateways', 'Multi-Currency', 'Webhook Handling', 'Transaction Logs', 'Refund Management'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Patient management and telemedicine Flutter app with video calling and appointment booking.',
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Push Notifications'],
      features: ['Video Calling', 'Appointment Booking', 'Medical Records', 'Prescription Management', 'Chat Support'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'CRM Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Advanced CRM system with analytics, lead management, and automated workflows.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js'],
      features: ['Lead Management', 'Sales Pipeline', 'Analytics Dashboard', 'Email Automation', 'Team Collaboration'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fintech Payment Gateway',
      category: 'payment',
      image: 'https://images.pexels.com/photos/1405859/pexels-photo-1405859.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Secure fintech payment processing system with fraud detection and compliance features.',
      technologies: ['Laravel', 'Machine Learning', 'Encryption', 'API Security'],
      features: ['Fraud Detection', 'KYC Verification', 'Multi-Factor Auth', 'Compliance Reporting', 'Real-time Monitoring'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'web', label: 'Web Applications', icon: Globe },
    { id: 'payment', label: 'Payment Systems', icon: CreditCard }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my latest work showcasing expertise in mobile development, web applications, and payment integrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <filter.icon className="h-5 w-5" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transform group-hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-cyan-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-gray-600"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <span className="text-gray-300">Want to see more projects?</span>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;