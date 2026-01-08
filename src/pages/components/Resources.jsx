import React, { useState } from "react";
import {
  ShieldCheck,
  Star,
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
// import { Link } from "react-router-dom";
import resourceImage from '../../assets/resource.png';

const Resources = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResource] = useState(null);
  const itemsPerPage = 6;

  const resources = [
    {
      title: "Introduction to AI with Python",
      date: "May 10, 2024",
      category: "AI",
      featured: true,
      image: resourceImage,
      url: "https://www.example.com/certificate/mern-stack",
      description:
        "Completed an introductory course on Artificial Intelligence using Python programming.",
    },
    {
      title: "Design Principles for Developers",
      date: "June 29, 2025",
      category: "UI/UX Design",
      featured: false,
      image: resourceImage,
      url: "#",
      description:
        "Gained foundational knowledge in design principles and user experience concepts.",
    },
    {
      title: "HTML & CSS Fundamentals",
      date: "October 3, 2025",
      category: "Web Development",
      featured: false,
      image: resourceImage,
      url: "#",
      description:
        "Completed basic training in web development focusing on HTML and CSS technologies.",
    },
    {
      title: "How to Articles in Google Scholar",
      date: "September 1, 2024",
      category: "Research",
      featured: true,
      image: resourceImage,
      url: "#",
      description:
        "Learned how to effectively search and utilize articles in Google Scholar for academic research.",
    },
    {
      title: "C Programming Basics",
      date: "April 24, 2025",
      category: "Programming",
      featured: true,
      image: resourceImage,
      url: "#",
      description:
        "Completed foundational courses in C programming language covering syntax and basic programming concepts.",
    },
    {
      title: "C # Fundamentals",
      date: "June 21, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description:
        "Completed introductory courses in C# programming language and .NET framework basics.",
    },
    {
      title: "c++ Programming Basics  ",
      date: "November 5, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description:
        "Learned the fundamentals of C++ programming including syntax, data types, and control structures.",
    },
    {
      title: "Introduction of Computer Science",
      date: "March 13, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description:
        "Introduction to the fundamental concepts of computer science including algorithms, data structures, and problem-solving techniques.",
    },
  ];

  // Filter
  const filteredResources =
    filter === "featured"
      ? resources.filter((c) => c.featured)
      : resources;

  // Pagination
  const totalItems = filteredResources.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const allCount = resources.length;
  const featuredCount = resources.filter((c) => c.featured).length;

  const goToPage = (page) => setCurrentPage(page);
  const goPrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section
      id="resources"
      className="min-h-screen bg-gray-100 py-12 sm:py-16 md:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Learning Resources
          </h2>
          {/* <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my
            expertise
          </p> */}
         <div className="w-24 sm:w-32 md:w-60 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 md:mb-16">
          <button
            onClick={() => handleFilterChange("all")}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
              filter === "all"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "dark:bg-white hover:text-white hover:bg-blue-600 border-2 border-blue-600 text-blue-600 text-base sm:text-lg"
            }`}
          >
            All Resources ({allCount})
          </button>
          <button
            onClick={() => handleFilterChange("featured")}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "featured"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "dark:bg-white hover:text-white hover:bg-blue-600 border-2 border-blue-600 text-blue-600 text-base sm:text-lg"
            }`}
          >
            <Star className="w-5 h-5" />
            Featured ({featuredCount})
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {paginatedResources.map((resource, index) => {
            return (
              <div
                key={index}
                className="dark:bg-white rounded-xl overflow-hidden border border-gray-400 
                 hover:-translate-y-1
              shadow-[0_-4px_25px_-8px_rgba(0,0,0,0.6),0_3px_20px_-8px_rgba(0,0,0,0.04)]
              dark:shadow-[0_-2px_36px_-16px_rgba(0,0,0,0.3),0_2px_16px_-10px_rgba(0,0,0,0.20)]
  
              hover:shadow-[0_-8px_30px_-8px_rgba(0,0,0,0.12),0_10px_20px_-8px_rgba(0,0,0,0.1)]
              dark:hover:shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.2),0_10px_16px_-6px_rgba(0,0,0,0.20)]
  
              transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-28 sm:gap-34">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-green-600 dark:text-white text-xs sm:text-sm  font-medium rounded-full flex items-center gap-1.5 border border-green-500/50">
                      {resource.category}
                    </span>
                    {resource.featured && (
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-orange-600 dark:text-white text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 border border-orange-500/50">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 dark:text-white" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-6 space-y-5">
                  <h3 className="text-xl md:text-xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>

                  {/* Issuer & Date */}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-base text-gray-600 md:text-md">{resource.date}</span>
                    </div>

                  {/* Description */}
                  <p className="text-black text-base leading-relaxed">
                    {resource.description}
                  </p>

                {/* Buttons */}
                <div className="pt-2 border-t border-blue-800/40">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              disabled={currentPage === 1}
              className={`cursor-pointer p-3 rounded-full transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Pagination */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === i + 1
                      ? "bg-blue-400 w-6 h-3"
                      : "bg-gray-500 w-3 h-3"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={goNext}
              disabled={currentPage === totalPages}
              className={`cursor-pointer p-3 rounded-full transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Modal (unchanged - shows all techs) */}
      {selectedResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedResource(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-gray-900 rounded-md shadow-2xl overflow-hidden border border-blue-800/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedResource(null)}
              className="cursor-pointer absolute top-4 right-7 z-10 p-3 bg-black/60 rounded-full text-gray-400 border border-gray-600 hover:text-white hover:bg-black/90 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
              <div className="p-6 md:p-6 bg-gradient-to-b from-blue-900/20 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
                  {selectedResource.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-green-500/30 text-green-400 font-sm rounded-full flex items-center gap-2 border border-green-500/50">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Credential
                  </span>
                </div>
              </div>

              <div className="px-6 md:px-6 pb-6">
                <div className="bg-gray-700/60 border border-gray-700 rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl">
                  {/* Container with fixed aspect ratio to center image */}
                  <div className="relative w-full bg-black/20 flex items-center justify-center pl-25 md:pl-25 pr-25 md:pr-25">
                    <img
                      src={selectedResource.image}
                      alt={selectedResource.title}
                      className="max-w-full max-h-full h-auto w-auto object-contain shadow-inner"
                      style={{ maxHeight: "70vh" }} // Prevents image from being too tall on small screens
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-6 pb-8 space-y-6">
                <div className="bg-gray-700/50 rounded-xl border border-gray-700 p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-12">
                    {/* Issuing Institution */}
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-900/40 rounded-xl flex-shrink-0">
                        <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm md:text-base mb-1">
                          Issuing Institution
                        </p>
                        <p className="text-lg md:text-xl lg:text-xl text-white font-medium">
                          {selectedResource.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Issue Date */}
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-900/40 rounded-xl flex-shrink-0">
                        <Calendar className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm md:text-base mb-1">
                          Issue Date
                        </p>
                        <p className="text-lg md:text-xl lg:text-xl text-white font-medium">
                          {selectedResource.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 px-4 py-4 rounded-xl border border-gray-700">
                  <p className="dark:text-white text-2xl mb-3">
                    Skills & Competencies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedResource.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-900/60 text-blue-300 font-md rounded-full border border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                    <a
                      href={selectedResource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 md:py-5 px-6 border border-blue-700 bg-gradient-to-r from-blue-500 to-blue-600 dark:text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-md hover:shadow-blue-500/50 hover:scale-102 transition-all duration-300"
                    >
                      <ExternalLink className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 flex-shrink-0" />
                      View & Verify Credential
                    </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resources;
