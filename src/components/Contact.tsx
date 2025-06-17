
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always eager to connect with fellow tech enthusiasts, creative professionals, 
            and anyone interested in collaborating on exciting projects. Let's explore 
            potential opportunities together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=devenmallaofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">devenmallaofficial@gmail.com</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/deven-malla-710819360/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Linkedin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/devenmalla"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Github size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">View my projects</p>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">Based in Nagaland, India</p>
            <p className="text-sm text-gray-500">
              Open to opportunities • Available for collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
