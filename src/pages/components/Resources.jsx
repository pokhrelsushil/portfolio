import React, { useMemo, useState } from "react";
import { Star, Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import resourceImage from "../../assets/Patternrecognition.png";

const Resources = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const resources = [
    {
      title: "Pattern Recognition and Machine Learning",
      date: "January 10, 2026",
      category: "AI/ML",
      featured: true,
      image: resourceImage,
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf",
      description: "A rigorous reference for machine learning foundations and probabilistic modeling.",
    },
    {
      title: "Reinforcement Learning: An Introduction (Sutton & Barto)",
      date: "June 29, 2025",
      category: "AI/ML",
      featured: false,
      image: resourceImage,
      url: "http://incompleteideas.net/book/RLbook2018.pdf",
      description: "Foundational reinforcement learning concepts and core algorithms.",
    },
    {
      title: "A Practical Guide to Building Agents",
      date: "October 3, 2025",
      category: "LLM",
      featured: false,
      image: resourceImage,
      url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
      description: "A practical guide to building agentic systems and workflows.",
    },
    {
      title:
        "World Models in Artificial Intelligence: Sensing, Learning, and Reasoning Like a Child",
      date: "March 19, 2025",
      category: "Research",
      featured: true,
      image: resourceImage,
      url: "https://arxiv.org/pdf/2503.15168",
      description: "Perspectives on world models and reasoning in modern AI systems.",
    },
    {
      title: "Best AI and LLM Engineering Resources",
      date: "January 2026",
      category: "AI/ML",
      featured: true,
      image: resourceImage,
      url: "https://github.com/javabuddy/best-ai-and-llm-engineering-resource",
      description: "A curated list of practical resources for AI and LLM engineering.",
    },
    {
      title: "C# Fundamentals",
      date: "June 21, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description: "Introductory material on C# and .NET fundamentals.",
    },
    {
      title: "C++ Programming Basics",
      date: "November 5, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description: "Core C++ syntax, data types, and control structures.",
    },
    {
      title: "Introduction to Computer Science",
      date: "March 13, 2025",
      category: "Programming",
      featured: false,
      image: resourceImage,
      url: "#",
      description: "Algorithms, data structures, and problem-solving fundamentals.",
    },
  ];

  const filteredResources = useMemo(() => {
    if (filter === "featured") return resources.filter((r) => r.featured);
    return resources;
  }, [filter, resources]);

  const totalPages = Math.max(1, Math.ceil(filteredResources.length / itemsPerPage));

  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredResources.slice(start, start + itemsPerPage);
  }, [filteredResources, currentPage]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  const allCount = resources.length;
  const featuredCount = resources.filter((r) => r.featured).length;

  return (
    <section id="resources" className="min-h-screen bg-gray-100 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Learning Resources
          </h2>
          <div className="w-24 sm:w-32 md:w-60 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60" />
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-10 md:mb-16">
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md ${
              filter === "all"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white hover:text-white hover:bg-blue-600 border-2 border-blue-600 text-blue-600"
            }`}
          >
            All Resources ({allCount})
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("featured")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-2 ${
              filter === "featured"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white hover:text-white hover:bg-blue-600 border-2 border-blue-600 text-blue-600"
            }`}
          >
            <Star className="w-5 h-5" aria-hidden="true" />
            Featured ({featuredCount})
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedResources.map((r) => (
            <div
              key={`${r.title}-${r.date}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-blue-600">{r.category}</span>
                  {r.featured ? (
                    <span className="text-xs font-semibold text-orange-600 flex items-center gap-1">
                      <Star className="w-4 h-4" aria-hidden="true" /> Featured
                    </span>
                  ) : null}
                </div>

                <h3 className="text-lg font-bold text-gray-900">{r.title}</h3>

                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span className="text-sm">{r.date}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{r.description}</p>

                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-blue-600 text-white	params font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 ? (
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentPage === 1}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="text-gray-700 font-semibold">
              Page {currentPage} of {totalPages}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Resources;
