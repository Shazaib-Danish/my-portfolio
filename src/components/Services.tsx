import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  CreditCard, 
  BarChart3, 
  ShoppingCart, 
  Database,
  Palette,
  Cloud,
  ArrowRight,
  Brain
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Custom Flutter mobile apps for iOS and Android with native performance and beautiful UI.',
      features: ['Cross-platform compatibility', 'Native performance', 'Beautiful UI/UX', 'App Store deployment'],
      price: 'Starting from $2,000',
      color: 'from-blue-500 to-green-600'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Website Development',
      description: 'Professional web applications with modern frontend technologies.',
      features: ['Beautiful designs','Responsive design', 'SEO optimized', 'Fast loading', 'Admin panels'],
      price: 'Starting from $1,500',
      color: 'from-purple-500 to-green-600'
    },
        {
      id: 'ui-ux-design',
      icon: Brain,
      title: 'AI Developments',
      description: 'I build smart, scalable AI solutions that automate workflows and enhance user experiences for modern businesses.',
      features: ['AI chatbot development', 'Workflow automation', 'Business Automation', 'Custom AI model training', 'Smart analytics and insights'],
      price: 'Starting from $2,000',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'payment-integration',
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payment solutions with 30+ gateways for global business expansion.',
      features: ['Multi-currency support', 'Secure transactions', 'Global reach', '30+ gateways'],
      price: 'Starting from $800',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'erp-development',
      icon: BarChart3,
      title: 'ERP & CRM Development',
      description: 'Enterprise resource planning and customer relationship management systems.',
      features: ['Custom workflows', 'Data analytics', 'Multi-user access', 'Cloud-based'],
      price: 'Starting from $5,000',
      color: 'from-yellow-500 to-green-600'
    },
    {
      id: 'ecommerce-development',
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete online stores with payment processing and inventory management.',
      features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order management'],
      price: 'Starting from $3,000',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'database-design',
      icon: Database,
      title: 'MVP Solutions',
      description: 'I deliver fast, cost-effective MVPs that turn your idea into a working product ready for real-world validation.',
      features: ['Optimized queries', 'Scalable structure', 'API documentation', 'Security focused'],
      price: 'Starting from $1,500',
      color: 'from-indigo-500 to-purple-600'
    },

    {
      id: 'cloud-deployment',
      icon: Cloud,
      title: 'Cloud Deployment & Hosting',
      description: 'Reliable cloud infrastructure setup and application deployment services.',
      features: ['Auto-scaling', 'Load balancing', 'Monitoring', 'Backup solutions'],
      price: 'Starting from $500',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Complete </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From mobile apps to enterprise systems, I provide comprehensive development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 h-full flex flex-col transform group-hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto space-y-4">
                  <div className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  
                  {/* <Link
                    to={`/services/${service.id}`}
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-purple-500 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-transparent px-4 py-3 rounded-lg font-semibold transition-all duration-300 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <span className="text-gray-300">Need a custom solution?</span>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;