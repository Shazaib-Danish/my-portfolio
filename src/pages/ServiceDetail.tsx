import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, DollarSign, Star, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();

  const serviceDetails: Record<string, any> = {
    'mobile-app-development': {
      title: 'Flutter Mobile App Development',
      description: 'Professional cross-platform mobile app development using Flutter framework for iOS and Android platforms.',
      metaDescription: 'Expert Flutter mobile app development services. Build cross-platform iOS and Android apps with native performance. 95% Flutter expertise, fast delivery.',
      keywords: 'Flutter developer, mobile app development, cross-platform apps, iOS development, Android development, Flutter apps',
      heroImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$2,000 - $15,000',
      timeline: '4-12 weeks',
      rating: 4.9,
      reviews: 45,
      features: [
        'Cross-platform compatibility (iOS & Android)',
        'Native performance with 60fps animations',
        'Beautiful Material Design and Cupertino UI',
        'Offline functionality with local storage',
        'Push notifications integration',
        'API integration and backend connectivity',
        'App Store and Play Store deployment',
        'Source code ownership and documentation'
      ],
      benefits: [
        'Save 50% development time with single codebase',
        'Consistent UI/UX across both platforms',
        'Faster time-to-market for your product',
        'Lower maintenance costs',
        'Access to device-specific features',
        'Hot reload for rapid development'
      ],
      process: [
        'Requirements Analysis & Planning',
        'UI/UX Design & Prototyping',
        'Development & Testing',
        'App Store Submission',
        'Launch & Post-Launch Support'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'SQLite', 'Git'],
      portfolio: [
        {
          name: 'E-commerce Shopping App',
          description: 'Full-featured shopping app with payment integration',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          name: 'Healthcare Management App',
          description: 'Patient management with telemedicine features',
          image: 'https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    },
    'web-development': {
      title: 'Laravel Web Development',
      description: 'Professional web application development using Laravel PHP framework with modern frontend technologies.',
      metaDescription: 'Expert Laravel web development services. Build scalable, secure web applications with PHP Laravel framework. Professional full-stack development.',
      keywords: 'Laravel developer, PHP development, web application development, full-stack development, Laravel web development',
      heroImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$1,500 - $10,000',
      timeline: '3-10 weeks',
      rating: 4.8,
      reviews: 38,
      features: [
        'Custom web application development',
        'Responsive design for all devices',
        'Admin dashboard and CMS',
        'Database design and optimization',
        'RESTful API development',
        'Payment gateway integration',
        'SEO optimization and fast loading',
        'Security best practices implementation'
      ],
      benefits: [
        'Scalable and maintainable codebase',
        'Fast development with Laravel framework',
        'Built-in security features',
        'Easy content management',
        'Mobile-responsive design',
        'SEO-friendly structure'
      ],
      process: [
        'Requirements Gathering & Analysis',
        'Database Design & Architecture',
        'Backend Development & API Creation',
        'Frontend Development & Integration',
        'Testing, Deployment & Maintenance'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Vue.js'],
      portfolio: [
        {
          name: 'Restaurant Management System',
          description: 'Complete POS and inventory management system',
          image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          name: 'CRM Dashboard',
          description: 'Advanced customer relationship management system',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    },
    'payment-integration': {
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing solutions with 30+ payment gateways for global business expansion.',
      metaDescription: 'Expert payment gateway integration services. 30+ payment gateways including Stripe, PayPal, Razorpay. Secure, multi-currency payment solutions.',
      keywords: 'payment gateway integration, Stripe integration, PayPal integration, payment processing, secure payments, multi-currency payments',
      heroImage: 'https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$800 - $3,000',
      timeline: '1-4 weeks',
      rating: 5.0,
      reviews: 52,
      features: [
        '30+ payment gateways supported',
        'Multi-currency payment processing',
        'Secure tokenization and encryption',
        'Webhook handling and notifications',
        'Refund and dispute management',
        'Subscription and recurring payments',
        'Mobile payment solutions',
        'Compliance with PCI DSS standards'
      ],
      benefits: [
        'Global customer reach with local payments',
        'Reduced cart abandonment rates',
        'Enhanced security and fraud prevention',
        'Automated recurring billing',
        'Real-time payment notifications',
        'Comprehensive payment analytics'
      ],
      process: [
        'Payment Gateway Selection & Setup',
        'Integration Development & Testing',
        'Security Implementation & Compliance',
        'Webhook Configuration & Testing',
        'Go-Live & Monitoring Support'
      ],
      technologies: ['Stripe API', 'PayPal SDK', 'Razorpay', 'Square', 'Webhooks', 'SSL/TLS'],
      portfolio: [
        {
          name: 'Multi-Gateway Payment System',
          description: 'Universal payment system with 15+ gateways',
          image: 'https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          name: 'Fintech Payment Platform',
          description: 'Secure payment processing with fraud detection',
          image: 'https://images.pexels.com/photos/1405859/pexels-photo-1405859.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    },
    'erp-development': {
      title: 'ERP & CRM Development',
      description: 'Enterprise resource planning and customer relationship management systems for business automation.',
      metaDescription: 'Custom ERP and CRM development services. Build enterprise resource planning and customer management systems. Business automation solutions.',
      keywords: 'ERP development, CRM development, enterprise software, business automation, custom ERP, CRM system',
      heroImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$5,000 - $25,000',
      timeline: '8-20 weeks',
      rating: 4.9,
      reviews: 28,
      features: [
        'Custom workflow automation',
        'Multi-module system architecture',
        'Role-based access control',
        'Real-time analytics and reporting',
        'Integration with third-party services',
        'Cloud-based deployment',
        'Mobile app companion',
        'Data migration and training'
      ],
      benefits: [
        'Streamlined business processes',
        'Improved data accuracy and consistency',
        'Enhanced team collaboration',
        'Better decision-making with analytics',
        'Reduced operational costs',
        'Scalable system architecture'
      ],
      process: [
        'Business Analysis & Requirements',
        'System Architecture & Database Design',
        'Module Development & Integration',
        'Testing, Training & Deployment',
        'Ongoing Support & Maintenance'
      ],
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'API Integration', 'Cloud Services', 'Docker'],
      portfolio: [
        {
          name: 'Manufacturing ERP System',
          description: 'Complete ERP solution for manufacturing company',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          name: 'Sales CRM Platform',
          description: 'Advanced CRM with sales pipeline management',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    },
    'ecommerce-development': {
      title: 'E-commerce Development',
      description: 'Complete online store development with payment processing, inventory management, and modern features.',
      metaDescription: 'Professional e-commerce website development. Build online stores with payment integration, inventory management, and modern shopping features.',
      keywords: 'ecommerce development, online store development, shopping website, ecommerce platform, online shop development',
      heroImage: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$3,000 - $20,000',
      timeline: '6-16 weeks',
      rating: 4.8,
      reviews: 35,
      features: [
        'Product catalog with categories',
        'Shopping cart and checkout process',
        'Payment gateway integration',
        'Order management system',
        'Inventory tracking and alerts',
        'Customer account management',
        'Admin dashboard and analytics',
        'Mobile-responsive design'
      ],
      benefits: [
        '24/7 online sales capability',
        'Automated order processing',
        'Global customer reach',
        'Integrated payment solutions',
        'Real-time inventory management',
        'Customer behavior analytics'
      ],
      process: [
        'E-commerce Strategy & Planning',
        'Design & User Experience',
        'Development & Payment Integration',
        'Testing & Quality Assurance',
        'Launch & Marketing Support'
      ],
      technologies: ['Laravel', 'MySQL', 'Stripe', 'PayPal', 'Bootstrap', 'JavaScript'],
      portfolio: [
        {
          name: 'Fashion E-commerce Store',
          description: 'Modern fashion store with advanced filtering',
          image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          name: 'Multi-vendor Marketplace',
          description: 'Complete marketplace with vendor management',
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    }
  };

  const service = serviceDetails[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link 
            to="/" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${service.title} Services | Professional Development`}
        description={service.metaDescription}
        keywords={service.keywords}
        image={service.heroImage}
      />
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
          <div className="container mx-auto max-w-6xl px-6 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-semibold">{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    <span className="text-cyan-400">{service.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-400">({service.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/#contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started Now
                  </a>
                  <a
                    href="/#portfolio"
                    className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">What You'll </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Get</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-white">Why Choose </span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">This Service</span>
                </h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
                <div className="space-y-4">
                  {service.process.map((step: string, index: number) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Technologies </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Used</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div key={index} className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Recent </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.portfolio.map((project: any, index: number) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Ready to Start </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your requirements and create something amazing together. 
              Get a free consultation and detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <a
                href="mailto:hello@developer.com"
                className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;