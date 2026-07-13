import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Superior University, Pakistan',
      duration: '2018 - 2022',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Academic </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
