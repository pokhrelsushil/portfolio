import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const News = () => {
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 4;

      const readingList = [
            {
                  title:
                        "Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig",
            },
            {
                  title: "Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
            },
            {
                  title: "Pattern Recognition and Machine Learning by Christopher M. Bishop",
            },
            {
                  title: "Reinforcement Learning: An Introduction by Richard S. Sutton and Andrew G. Barto",
            },
      ];

     const newsList = [
       {
         date: "11/2025",
         description:
           "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
       },
       {
         date: "05/2025",
         description:
           "Our paper titled A Median Perspective on Unlabeled Data for Out-of-Distribution Detection is now available on arXiv.",
       },
       {
         date: "09/2025",
         description:
           "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
       },
       {
         date: "02/2025",
         description:
           "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
       },
       {
         date: "06/2025",
         description:
           "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
       },
       {
         date: "02/2025",
         description:
           "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
       },
     ];

       // Pagination
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const paginatednews = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => setCurrentPage(page);
  const goPrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goNext = () =>
  currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  return (
    <section
      id="news"
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Research Interests:
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-semibold text-base sm:text-lg md:text-xl text-gray-800">
            <li>Human–AI Interaction</li>
            <li>Reinforcement Learning & Autonomous Agents</li>
            <li>Robot Learning/Control Theory</li>
            <li>Complex Systems Design/Cyber Physical System</li>
            <li>Material Science(Physics, chemistry , biology) and Computing</li>
          </ul>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            To get a comprehensive understanding of my Research and Work experiences, as well as
            my Projects, please take a look at my detailed description.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            Besides my professional pursuits, I have a deep passion for reading. I consider myself a true
            bookworm and find joy in immersing myself in books, expanding my knowledge, and exploring
            different worlds through literature. Reading is not only a hobby for me, but also a way to relax,
            learn, and broaden my perspective. You can view some of my favorite books in the Misc. tab.
            In addition to books, I also enjoy listening to podcasts.
          </p>
        </div>


      {/* Reading List */}
        <div className="space-y-6 md:space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Reading List
          </h2>
         {readingList.map((read, index) => (
          <ul key={index} className="list-disc pl-6 space-y-4 text-base font-semibold sm:text-lg md:text-xl text-gray-800">
            <li>
                  {read.title} <a href="#"  target="_blank" rel="noopener noreferrer"  className="font-semibold underline text-blue-500">Read </a>
            </li>
          </ul>
      ))}
        </div>

        {/* News Section */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            News
          </h2>
         {paginatednews.map((news, index) => (
          <ul key={index} className="list-disc pl-6 space-y-1 text-base sm:text-lg md:text-xl text-gray-800">
            <li>
              <span className="font-semibold">[{news.date}] </span>
                  {news.description} <a href="#"  target="_blank" rel="noopener noreferrer"  className="font-semibold underline text-blue-500">Read More </a>
            </li>
          </ul>
      ))}
        </div>
      </div>

       {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              disabled={currentPage === 1}
              className={`cursor-pointer p-2.5 rounded-full transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Pagination */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === i + 1
                      ? "bg-blue-400 w-5 h-3"
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
              className={`cursor-pointer p-2.5 rounded-full transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

    </section>
  );
};

export default News;