
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Summary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a dedicated B.Tech student specializing in Information Technology, 
                I am deeply passionate about developing innovative solutions within the tech industry. 
                My skill set encompasses web development using React, Node, HTML, JavaScript and Python, 
                coupled with a growing interest in machine learning technologies.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                In addition to my academic undertakings, I actively participate in 
                various sports, including cricket, volleyball, and basketball, which 
                enhance my teamwork and leadership abilities. I also commit to 
                community service through volunteering initiatives that aim to make a 
                positive impact.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Currently, I serve as the General Secretary of the Nagaland 
                University Students Union-Kohima Campus, where I advocate for 
                student interests and foster a supportive environment. Moreover, as 
                the Event Coordinator for TechAura, a technical college group, I 
                have the opportunity to organize and oversee engaging tech-related 
                events.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I am eager to continue my learning journey, engage in practical 
                projects, and connect with fellow tech enthusiasts and creative 
                professionals. I look forward to exploring potential collaborations that 
                may lead to exciting and meaningful outcomes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">B.Tech IT Student</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">App Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Machine Learning Explorer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">General Secretary, NUSU-KC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Event Coordinator, TechAura</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sports Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
