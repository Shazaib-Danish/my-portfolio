import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Ricardo Mandini',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Ricardo+Mandini&background=0d9488&color=fff&size=150',
      rating: 5,
      text: 'Great development services provided and great communication. We will keep using him for all our designs and we highly recommend his services.',
      country: 'United States 🇺🇸'
    },
    {
      id: 2,
      name: 'Amir Zee',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Amir+Zee&background=7c3aed&color=fff&size=150',
      rating: 5,
      text: "The seller is an expert & very professional in his work. I love his work as he presents the animated splash screen for my app & also gives me a brilliant idea for my app as well. He committed to the work & delivered before the deadline. Simply, the vendor delivered exactly what I needed. Would definitely recommend it. Thank you, Man.",
      country: 'United Arab Emirates 🇦🇪'
    },
    {
      id: 3,
      name: 'Gabriel Inyaagha',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Gabriel+Inyaagha&background=0891b2&color=fff&size=150',
      rating: 5,
      text: "Danish is highly skilled and professional. He's a disciplined expert. It's always a delight to work with him.",
      country: 'Nigeria 🇳🇬'
    },
    {
      id: 4,
      name: 'Kareem',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Kareem&background=db2777&color=fff&size=150',
      rating: 5,
      text: 'Great work, worked around the hour, and joined a Zoom call to help as well.',
      country: 'Jordan 🇯🇴'
    },
    {
      id: 5,
      name: 'Trelllowe416',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Trelllowe&background=ca8a04&color=fff&size=150',
      rating: 5,
      text: 'Very good at what he does and works well with team.',
      country: 'United States 🇺🇸'
    },
    {
      id: 6,
      name: 'Ammar Al Hinai',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Ammar+Al+Hinai&background=059669&color=fff&size=150',
      rating: 5,
      text: 'Thank you very much for your help.',
      country: 'Oman 🇴🇲'
    },
    {
      id: 7,
      name: 'Ataxan Rahimli',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Ataxan+Rahimli&background=4338ca&color=fff&size=150',
      rating: 5,
      text: 'Thanks so much, great work!',
      country: 'Azerbaijan 🇦🇿'
    },
    {
      id: 8,
      name: 'Bonsoh',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Bonsoh&background=b45309&color=fff&size=150',
      rating: 5,
      text: 'Great Job!',
      country: 'Germany 🇩🇪'
    },
    {
      id: 9,
      name: 'Rolligator',
      role: 'Verified Client',
      image: 'https://ui-avatars.com/api/?name=Rolligator&background=be123c&color=fff&size=150',
      rating: 5,
      text: 'Made a good job, thanks!',
      country: 'China 🇨🇳'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Client </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me on their projects.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25"></div>
                      <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700">
                        <Quote className="h-12 w-12 text-cyan-400 mb-6 opacity-50" />
                        
                        <div className="text-center mb-8">
                          <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-6">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-75"></div>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              loading="lazy"
                              decoding="async"
                              className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                            />
                          </div>
                          
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                            <p className="text-cyan-400 font-medium">{testimonial.role}</p>
                            <p className="text-sm text-gray-400 mt-1">{testimonial.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <span className="text-gray-300">Ready to join my happy clients?</span>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;