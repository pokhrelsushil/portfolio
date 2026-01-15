import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Tweet } from "react-tweet";
import profileImage from '../../assets/sushilpokhrel1.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            About
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Main Content (75%) */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Profile Section */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                About Me
              </h2>
              
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-blue-600 opacity-10 blur-2xl rounded-2xl"></div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 shadow-xl">
                    <img
                      src={profileImage}
                      alt="Sushil Pokhrel - Researcher"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Interdisciplinary researcher specializing in the convergence of materials science, computing, 
                chemical engineering, electrical engineering, robotics, biomedical engineering, and machine learning. 
                My research focuses on bridging theoretical foundations with practical applications to address 
                complex real-world challenges through innovative, cross-disciplinary approaches.
              </p>
            </div>

            {/* Research Interests */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Research Interests
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Human–AI Interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Reinforcement Learning & Autonomous Agents</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Robot Learning & Control Theory</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Complex Systems Design & Cyber-Physical Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Materials Science (Physics, Chemistry, Biology) & Computing</span>
                </li>
              </ul>
            </div>

            {/* Collaboration */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                For comprehensive details regarding my research background, professional experience, and project 
                portfolio, or to discuss potential collaborations, please contact me directly with your specific 
                area of interest.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Beyond Research
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  Beyond my scholarly and professional pursuits, I maintain a deep commitment to reading as 
                  a foundational practice of intellectual development. Literature serves not merely as a source 
                  of information but as a catalyst for sustained reflection, critical inquiry, and the continual 
                  expansion of perspective.
                </p>
                <p className="leading-relaxed">
                  Through deliberate engagement with diverse texts, I cultivate a nuanced understanding of 
                  complex systems, human behavior, and interdisciplinary knowledge. This practice of reading 
                  represents both a disciplined pursuit of wisdom and a contemplative space for synthesis and 
                  innovation. A curated selection of influential works is available in the recommended reading 
                  section. Additionally, I regularly engage with intellectually rigorous podcasts that complement 
                  and enhance my ongoing learning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Twitter Feed (25%) */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Latest Updates
              </h3>
              
              {/* Twitter Feed Container */}
              <div className="relative">
                <div
                  className="
                    w-full 
                    max-h-[700px]
                    overflow-y-auto 
                    bg-white
                    rounded-lg 
                    shadow-lg
                    border border-gray-200
                    scrollbar-thin 
                    scrollbar-thumb-gray-400 
                    scrollbar-track-gray-100
                  "
                  style={{
                    scrollbarWidth: 'thin',
                  }}
                >
                  <div className="p-4 space-y-6">
                    <Tweet id="2010741574364479825" />
                    <Tweet id="2006420126438994042" />
                    <Tweet id="2006857672063123924" />
                    <Tweet id="1984297576665854457" />
                  </div>
                </div>
              </div>

              {/* Follow Link */}
              <div className="text-center lg:text-left">
                <a
                  href="https://x.com/sushilpokhrel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Follow on X
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </section>
  );
};

export default About;