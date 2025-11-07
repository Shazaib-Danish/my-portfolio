import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { db } from '../firebase'; // adjust the path if needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Mobile App Development',
    'Web Development',
    'Payment Integration',
    'ERP Development',
    'CRM Development',
    'E-commerce Development',
    'UI/UX Design',
    'Custom Development'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });

      // Hide success after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shazaibdanish4@gmail.com',
      href: 'mailto:shazaibdanish4@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 304 4945 128',
      href: 'tel:+923044945128'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+923044945128',
      href: 'https://wa.me/+923044945128'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      href: '#'
    }
  ];

return ( <section id="contact" className="py-20 px-6 relative"> <div className="container mx-auto max-w-6xl"> <div className="text-center mb-16"> <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6"> <span className="text-cyan-400 text-sm font-medium">Contact</span> </div> <h2 className="text-4xl md:text-5xl font-bold mb-6"> <span className="text-white">Let's Start </span> <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Your Project </span> </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto"> Ready to transform your ideas into reality? Get in touch and let's discuss how I can help bring your project to life. </p> </div> <div className="grid lg:grid-cols-2 gap-12"> {/* Contact Form */} <div className="relative"> <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25"></div> <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"> {isSubmitted ? ( <div className="text-center py-12"> <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" /> <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3> <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p> </div> ) : ( <> <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3> <form onSubmit={handleSubmit} className="space-y-6"> <div className="grid md:grid-cols-2 gap-6"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"> Full Name * </label> <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" placeholder="Your full name" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"> Email Address * </label> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" placeholder="your@email.com" /> </div> </div> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" placeholder="+92 304 4945 128" /> </div> <div className="grid md:grid-cols-2 gap-6"> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"> Service Required * </label> <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option value="">Select a service</option> {services.map((service) => ( <option key={service} value={service}>{service}</option> ))} </select> </div> <div> <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2"> Budget Range </label> <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option value="">Select budget range</option> {budgetRanges.map((range) => ( <option key={range} value={range}>{range}</option> ))} </select> </div> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"> Project Details * </label> <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none" placeholder="Tell me about your project requirements, timeline, and any specific features you need..." /> </div> <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl" > {isSubmitting ? ( <> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> <span>Sending...</span> </> ) : ( <> <Send className="h-5 w-5" /> <span>Send Message</span> </> )} </button> </form> </> )} </div> </div> {/* Contact Information */} <div className="space-y-8"> <div> <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3> <p className="text-gray-400 leading-relaxed mb-8"> I'm always excited to work on new projects and help bring innovative ideas to life. Whether you need a mobile app, web application, or payment integration, I'm here to help. </p> </div> <div className="space-y-6"> {contactInfo.map((info, index) => ( <div key={index} className="group"> <a href={info.href} className="flex items-center space-x-4 p-4 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300" > <div className="flex-shrink-0"> <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <info.icon className="h-6 w-6 text-white" /> </div> </div> <div> <div className="text-sm text-gray-400">{info.label}</div> <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300"> {info.value} </div> </div> </a> </div> ))} </div> <div className="relative"> <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25"></div> <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"> <h4 className="text-xl font-bold text-white mb-4">Why Choose Me?</h4> <ul className="space-y-3 text-gray-300"> <li className="flex items-center space-x-3"> <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /> <span>5+ years of professional experience</span> </li> <li className="flex items-center space-x-3"> <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /> <span>30+ payment gateways integrated</span> </li> <li className="flex items-center space-x-3"> <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /> <span>100+ successful projects delivered</span> </li> <li className="flex items-center space-x-3"> <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /> <span>24/7 support and maintenance</span> </li> <li className="flex items-center space-x-3"> <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /> <span>Money-back guarantee</span> </li> </ul> </div> </div> </div> </div> </div> </section> ); };
export default Contact;
