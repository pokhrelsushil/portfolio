import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGoogleScholar } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Resources",
    "Contact",
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // add border at the top of the footer
    <footer className="dark:bg-white py-12 sm:py-16 md:py-6 px-6 sm:px-12 lg:px-16 border-t border-gray-300 shadow-xl">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Left: Name & Description + Social Icons */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer"
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-gray-900">Sushil</span>
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    Pokhrel
                  </span>
                </h3>
              </Link>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0 mt-2">
                Interdisciplinary researcher in materials science, engineering, robotics, and machine learning.
              </p>
            </div>

            {/* Social Icons - Centered on mobile */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-3">
              <Link
                to="https://www.linkedin.com/in/sushilpokhrel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 bg-blue-900/30 rounded-xl text-blue-500 hover:text-blue-700 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                to="https://github.com/pokhrelsushil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 bg-blue-900/30 rounded-xl text-blue-500 hover:text-blue-700 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                to="https://mail.google.com/mail/u/0/#compose?to=sushil.pokhrel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 bg-blue-900/30 rounded-xl text-blue-500 hover:text-blue-700 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                to="https://scholar.google.com/citations?user=BPN7wnsAAAAJ&hl=en"
                className="p-3 sm:p-3.5 bg-blue-900/30 rounded-xl text-blue-500 hover:text-blue-700 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="Google Scholar"
              >
                <FaGoogleScholar className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
            </div>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-4 inline-block">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`#${link.toLowerCase()}`}
                    onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
                    className="text-base sm:text-lg text-gray-600 hover:text-blue-500 transition-colors duration-300 block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6">
              Research -Interests 
            </h4>
            <ul className="space-y-4 inline-block">
              {[
                "Human–AI Interaction",
                "Reinforcement Learning & Autonomous Agents",
                " Robot Learning",
                "Complex Systems Design",
                "Material Science and Computing", 
              ].map((interests) => (
                <li key={interests}>
                  <span className="text-base sm:text-lg text-gray-600 hover:text-blue-500 transition-colors duration-300 cursor-pointer block">
                    {interests}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6">
              Contact
            </h4>
            <div className="space-y-5 inline-block text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-600">
                  South & East Asia/ North America 
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0" />
                <Link
                  to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sushil.pokhrel@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  sushil.pokhrel@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Sushil Pokhrel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
