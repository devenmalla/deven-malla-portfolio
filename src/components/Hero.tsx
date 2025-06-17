
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Deven Malla
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Code. Innovate. Grow.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            B.Tech IT Student | Passionate about Web Development, App Development & Machine Learning
          </p>
          <p className="text-md text-gray-500 mb-12">
            Nagaland, India
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=devenmallaofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/deven-malla-710819360/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/devenmalla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
