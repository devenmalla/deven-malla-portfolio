
import React from 'react';
import { Book } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - BTech, Information Technology',
      institution: 'Nagaland University',
      duration: 'August 2022 - June 2026',
      type: 'Undergraduate Degree'
    },
    {
      degree: '12th, Science',
      institution: 'Don Bosco Higher Secondary School',
      duration: 'Completed',
      type: 'Higher Secondary'
    },
    {
      degree: '10th',
      institution: 'Bethel Higher Secondary School',
      duration: 'Completed',
      type: 'Secondary Education'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <Book className="text-emerald-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                      <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-emerald-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
