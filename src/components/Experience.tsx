
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Intern',
      company: 'Edunet Foundation',
      duration: 'December 2024 - January 2025 (1 month)',
      description: 'Working on innovative projects and gaining hands-on experience in technology solutions.'
    },
    {
      title: 'Industrial Training and Internship on Machine Learning',
      company: 'Tool Room and Training Centre',
      duration: 'July 2024 - August 2024 (1 month)',
      location: 'Nachi, Dimapur, Assam, India',
      description: 'Intensive training program focused on machine learning applications and industrial implementations.'
    },
    {
      title: 'Python Developer Intern',
      company: 'TechnoHacks EduTech Official',
      duration: 'February 2024 - March 2024 (1 month)',
      description: 'Developed Python applications and gained experience in educational technology solutions.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-5 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <Briefcase size={12} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-emerald-600 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{exp.duration}</p>
                    {exp.location && (
                      <p className="text-gray-500 text-sm mb-3">{exp.location}</p>
                    )}
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
