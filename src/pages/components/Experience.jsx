import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const researchExperience = [
    {
      title: "Graduate Research Assistant",
      company: "Systems Design Engineering, University of Waterloo",
      period: "September 2022 - Present",
      location: "Waterloo, ON, Canada",
      current: true,
      description:
        "Conducting doctoral research on building principled AI agents for human-AI collaboration in complex sequential decision-making tasks, with applications in autonomous vehicles, small modular reactors, and societal integration.",
      responsibilities: [
        "Developing interactive AI systems integrating reinforcement learning, human-AI interaction, and foundation models",
        "Investigating human factors in safety-critical systems including autonomous vehicles and nuclear reactors",
        "Publishing research in top-tier venues on machine learning for ethical decision-making in AVs",
        "Conducting human subjects studies on driver behavior, cognitive workload, and gap acceptance at intersections",
        "Collaborating with interdisciplinary teams across cognitive ergonomics, human factors, and AI safety",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company: "Biomedical Engineering, SUNY Binghamton University",
      period: "August 2020 - May 2022",
      location: "Vestal, NY, USA",
      current: false,
      description:
        "Conducted research in computational biology and drug discovery, applying machine learning and cheminformatics to identify therapeutic candidates for various diseases.",
      responsibilities: [
        "Developed computational pipelines for virtual screening and molecular dynamics simulations",
        "Applied pharmacophore-based methods and quantum mechanics calculations for drug candidate identification",
        "Published multiple papers on antiviral drug discovery targeting COVID-19 and cancer therapeutics",
        "Utilized GROMACS, VMD, and Python-based analysis tools for biomolecular simulations",
        "Collaborated with international research teams on systematic reviews and computational studies",
      ],
    },
    {
      title: "Erasmus Mundus Research Scholar",
      company: "Computational Quantum Chemistry Laboratory, Sorbonne University",
      period: "September 2017 - June 2018",
      location: "Paris, France",
      current: false,
      description:
        "Conducted computational chemistry research as part of fully-funded Erasmus Mundus exchange scholarship program, focusing on quantum computational methods and molecular modeling.",
      responsibilities: [
        "Conducted quantum chemistry calculations and computational modeling projects",
        "Applied computational protocols for molecular property prediction and analysis",
        "Contributed to research on computational drug design approaches",
        "Collaborated with international research teams on theoretical chemistry investigations",
      ],
    },
  ];

  const teachingExperience = [
    {
      title: "Teaching Assistant - STV 208: AI and Society",
      company: "Systems Design Engineering, University of Waterloo",
      period: "Winter 2025, Winter 2026",
      location: "Waterloo, ON, Canada",
      current: true,
      description:
        "Supporting instruction on artificial intelligence impacts, ethics, and equity in society, engaging students in critical discussions about AI's societal implications.",
      responsibilities: [
        "Lead tutorial sessions on AI ethics, fairness, and societal impact case studies",
        "Facilitate discussions on responsible AI development and deployment",
        "Evaluate student projects analyzing real-world AI ethical dilemmas",
        "Hold office hours to guide students through course concepts and assignments",
      ],
    },
    {
      title: "Teaching Assistant - BME 401L: Communications in BME",
      company: "Biomedical Engineering, University of Waterloo",
      period: "Fall 2025",
      location: "Waterloo, ON, Canada",
      current: false,
      description:
        "Assisted in teaching professional communication and data visualization skills for biomedical engineering students.",
      responsibilities: [
        "Guided students in creating effective scientific visualizations and presentations",
        "Provided feedback on technical writing and research communication",
        "Evaluated lab reports and presentation materials for clarity and technical accuracy",
        "Mentored students on professional communication best practices in engineering",
      ],
    },
    {
      title: "Teaching Assistant - MTE 351: Systems Models",
      company: "Mechatronics Engineering, University of Waterloo",
      period: "Spring 2025",
      location: "Waterloo, ON, Canada",
      current: false,
      description:
        "Supported instruction in systems modeling and control theory for mechatronics engineering students.",
      responsibilities: [
        "Conducted tutorial sessions on system dynamics and control design",
        "Assisted students with MATLAB/Simulink implementations of control systems",
        "Graded assignments on state-space modeling and frequency response analysis",
        "Provided guidance on course projects involving real-time embedded systems",
      ],
    },
    {
      title: "Teaching Assistant - ARCH/CIVE 265",
      company: "School of Architecture & Civil Engineering, University of Waterloo",
      period: "Fall 2024",
      location: "Waterloo, ON, Canada",
      current: false,
      description:
        "Assisted in teaching foundational concepts to architecture and civil engineering students.",
      responsibilities: [
        "Led discussion sections and review sessions for course material",
        "Evaluated student assignments and provided constructive feedback",
        "Held regular office hours to support student learning",
        "Contributed to development of course materials and problem sets",
      ],
    },
    {
      title: "Teaching Assistant - MSE 220L: Nano Engineering",
      company: "Materials Science and Engineering, University of Waterloo",
      period: "Fall 2023",
      location: "Waterloo, ON, Canada",
      current: false,
      description:
        "Supported laboratory instruction in nano-engineering principles and experimental techniques.",
      responsibilities: [
        "Supervised laboratory experiments on nanomaterial characterization",
        "Guided students through experimental design and data analysis",
        "Evaluated lab reports on nanoscale phenomena and measurement techniques",
        "Provided technical support for characterization equipment and procedures",
      ],
    },
    {
      title: "Teaching Assistant - Experimental Design & Statistical Analysis",
      company: "Biomedical Engineering, SUNY Binghamton University",
      period: "Fall 2020 - Spring 2022",
      location: "Vestal, NY, USA",
      current: false,
      description:
        "Assisted graduate-level course on experimental design methodology and statistical analysis for biomedical research.",
      responsibilities: [
        "Led recitation sessions on statistical hypothesis testing and experimental design",
        "Guided students through data analysis using R and statistical software",
        "Evaluated student projects on designing and analyzing biomedical experiments",
        "Provided support on power analysis, ANOVA, regression, and non-parametric methods",
      ],
    },
    {
      title: "Student Mentor",
      company: "Computational Quantum Chemistry Lab, Sorbonne University",
      period: "September 2017 - June 2018",
      location: "Paris, France",
      current: false,
      description:
        "Mentored undergraduate students in computational chemistry concepts, laboratory techniques, and research methodology.",
      responsibilities: [
        "Assisted students with theoretical chemistry assignments and problem sets",
        "Provided guidance on laboratory experiments and computational protocols",
        "Supported students in understanding quantum chemistry concepts and applications",
        "Facilitated learning through one-on-one tutoring and group study sessions",
      ],
    },
  ];

  const ExperienceCard = ({ exp, index }) => (
    <div
      key={index}
      className="relative flex items-start gap-6 sm:gap-8 md:gap-10 pl-14 sm:pl-16 md:pl-20"
    >
      <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />

      <div className="flex-1">
        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                {exp.company}
              </p>
            </div>

            {exp.current && (
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
                Current
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{exp.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{exp.location}</span>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            {exp.description}
          </p>

          <div className="space-y-2">
            {exp.responsibilities.map((responsibility, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Experience
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Research & Teaching */}
          <div className="space-y-16">
            {/* Research Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-gray-900" />
                <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 flex-1">
                  Research Experience
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-0.5 bg-gray-300" />

                <div className="relative space-y-12">
                  {researchExperience.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Teaching & Mentorship */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-gray-900" />
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 flex-1">
                Teaching & Mentorship
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-0.5 bg-gray-300" />

              <div className="relative space-y-12">
                {teachingExperience.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;