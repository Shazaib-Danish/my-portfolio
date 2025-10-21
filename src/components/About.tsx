import React from 'react';
import { Award, Code, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Code,
      number: '5+',
      label: 'Years Experience',
      color: 'text-cyan-400'
    },
    {
      icon: Globe,
      number: '30+',
      label: 'Payment Gateways',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Happy Clients',
      color: 'text-green-400'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Projects Done',
      color: 'text-yellow-400'
    }
  ];

  const expertise = [
    'Flutter Mobile Development (95% Expertise)',
    'Laravel & PHP Web Development',
    'Payment Gateway Integrations (30+ Gateways)',
    'ERP, CRM, POS System Development',
    'E-commerce Platform Development',
    'Firebase & Supabase Backend',
    'MySQL Database Design',
    'API Development & Integration',
    'UI/UX Design with Figma',
    'Cloud Deployment & Hosting'
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Building </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer specializing in Flutter mobile apps and Laravel web solutions, with extensive experience in payment gateway integrations and enterprise systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 5 years of experience in software development, I specialize in creating innovative mobile and web solutions. My expertise lies in Flutter for mobile development and Laravel for web applications, with a unique specialization in payment gateway integrations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I've successfully integrated 30+ payment gateways across different countries, helping businesses expand their reach globally. From small startups to enterprise-level solutions, I deliver high-quality, scalable applications that drive business growth.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Core Expertise</h4>
              <div className="grid gap-2">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center transform group-hover:scale-105 transition-all duration-300">
                  <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <span className="text-gray-300">Ready to start your project?</span>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;