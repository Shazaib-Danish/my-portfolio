import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95, color: 'from-cyan-500 to-blue-500' },
        { name: 'iOS Development', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'Android Development', level: 90, color: 'from-green-500 to-green-600' },
        { name: 'React Native', level: 75, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'Laravel', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'PHP', level: 88, color: 'from-purple-500 to-purple-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-500' },
        { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-orange-600' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'MySQL', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Supabase', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'API Development', level: 88, color: 'from-indigo-500 to-indigo-600' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'Figma', level: 80, color: 'from-pink-500 to-pink-600' },
        { name: 'AWS/Cloud', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'Payment Gateways', level: 95, color: 'from-emerald-500 to-emerald-600' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 relative" ref={skillsRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My comprehensive skill set spans across modern technologies and frameworks, with specialization in mobile and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
                    <div 
                      className={`relative h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Skills;