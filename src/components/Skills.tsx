import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'ReactJS', level: 80 },
    { name: 'React Native', level: 78 },
    { name: 'PHP', level: 75 },
    { name: 'MySQL', level: 70 },
    { name: 'C/C++', level: 75 },
    { name: 'Python', level: 90 }
  ];

  const certifications = [
    'Introduction to Machine Learning',
    'Digital Marketing Fundamentals',
    'AI For India 2.0',
    'C++ Programming',
    'The Guinness World Record Event',
    'Cyber Security Essentials Bootcamp'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Skills & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Top Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-emerald-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-700">{cert}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Achievement Highlight</h4>
              <p className="text-sm opacity-90">
                Most users to take an online computer programming lesson in 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
