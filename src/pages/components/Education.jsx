import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationList = [
  {
    degree: "PhD: Systems Design Engineering (SYDE)",
    institution: "University of Waterloo",
    location: "Waterloo, Ontario, Canada",
    period: "Present",
    description:
    Thesis : Adaptive automation in SMR control room via Physics induced MARL 
      " Research Areas: Design of principled AI agents and human–AI collaboration for complex, sequential decision-making. Core methods include reinforcement learning, interpretable and adaptive interactive AI, value elicitation and alignment, and foundation models for high-stakes systems. Research spans robotics, cyber–physical systems, biomedical engineering (BME), and secure intelligent systems (including cryptographic and privacy-aware computation). Interdisciplinary directions include physics-informed and materials-aware AI for scientific discovery. Application domains include safety-critical autonomy (e.g., autonomous vehicles), small modular reactors, and large-scale socio-technical systems, with emphasis on safety, robustness, and trustworthy deployment.",
  },
  {
    degree: "MS: Biomedical Engineering (BME)",
    institution: "State University of New York (SUNY),Binghamton University(BU)",
    location: "Vestal, New York, USA",
    description:
      "Master’s training in biomedical engineering with emphasis on computational methods for healthcare. Focus areas included biomedical signal processing, medical imaging, machine learning for health data, and modeling of biological systems, alongside foundations for health-oriented cyber–physical systems. Developed interdisciplinary expertise at the interface of engineering, computation, and medicine, with attention to translational impact and responsible use in clinical contexts.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-50/80 py-12 sm:py-16 md:py-20 px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Education
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - visible on all screens */}
          <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-transparent" />

          <div className="relative space-y-12 md:space-y-14">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 sm:gap-8 md:gap-10 pl-14 sm:pl-16 md:pl-20 lg:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] lg:left-[42px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg shadow-blue-500/50 z-10" />

                {/* Education Card */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Header with Icon */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-5 md:mb-6">
                      <div className="p-3 md:p-4 bg-blue-600/30 rounded-2xl flex-shrink-0">
                        <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-lg md:text-2xl text-gray-700">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Period + Location */}
                    <div className="flex sm:flex-row gap-8 text-gray-600 font-medium mb-5 md:mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-600 font-medium">
                          {edu.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-600 font-medium">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
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
