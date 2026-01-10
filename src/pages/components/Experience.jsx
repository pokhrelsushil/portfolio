import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import icon from "../../assets/logo.png";

const Experience = () => {
  const experienceList = [
    {
      title: "Content Creator",
      company: "YouTube",
      period: "2021 - Present",
      location: "Remote",
      current: true,
      description:
        "Create technical content on software engineering and applied machine learning.",
      responsibilities: [
        "Produce concise technical tutorials",
        "Script, edit, and publish videos",
        "Maintain and grow a technical audience",
      ],
    },
    {
      title: "Machine Learning Researcher (Reinforcement Learning)",
      company: "Google DeepMind",
      period: "June 2024 - Present",
      location: "New York, USA",
      current: true,
      description:
        "Research reinforcement learning and intelligent agents for sequential decision-making.",
      responsibilities: [
        "Develop and evaluate RL algorithms",
        "Run experiments and analyze results",
        "Collaborate on research projects",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-100 py-12 sm:py-16 md:py-20 px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Experience
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        <div className="flex sm:flex-row pl-2 md:pl-4 lg:pl-6 gap-4 mb-2">
          <Briefcase className="w-7 h-7 md:w-12 md:h-12 text-gray-600" />
          <h3 className="text-2xl sm:text-2xl md:text-4xl font-bold text-blue-600 mb-2">
            Work Experience
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-transparent" />

          <div className="relative space-y-12 md:space-y-14">
            {experienceList.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 sm:gap-8 md:gap-10 pl-14 sm:pl-16 md:pl-20 lg:pl-24"
              >
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] lg:left-[42px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg shadow-blue-500/50 z-10" />

                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src={icon}
                          alt="logo"
                          className="w-12 h-12 rounded-xl"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-2xl text-gray-700">
                          {exp.company}
                        </p>
                      </div>

                      {exp.current && (
                        <span className="px-2 py-1 bg-green-500 text-white text-sm font-medium rounded-full border border-green-500/50">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex sm:flex-row gap-8 text-gray-600 font-medium mb-5 md:mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-600 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-600 font-medium">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    <div className="mt-2">
                      <span className="text-xl font-semibold text-blue-600">
                        Key Responsibilities:
                      </span>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-2.5 h-2.5 bg-blue-400 rounded-full mt-2.5"></div>
                          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
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

export default Experience;
