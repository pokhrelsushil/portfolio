import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, Twitter, X, } from "lucide-react";
import { FaGoogleScholar } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", path: "#home", id: "home" },
    { name: "About", path: "#about", id: "about" },
    { name: "Experience", path: "#experience", id: "experience" },
    { name: "Education", path: "#education", id: "education" },
    // { name: "Achievements", path: "#achievements", id: "achievements" },
    { name: "Resources", path: "#resources", id: "resources" },
    { name: "Contact", path: "#contact", id: "contact" },
  ];

    // Track scroll position and update active section
  useEffect(() => {
    const sections = navLinks
      .filter((link) => link.id)
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height

      let current = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const handleLinkClick = (path = false) => {
    setIsMobileMenuOpen(false);

    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 dark:bg-white backdrop-blur-xl shadow-xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <span className="text-2xl sm:text-3xl font-extrabold">
                <span className="text-gray-900">Sushil</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Sharma
                </span>
              </span>
            </Link>
            </div> */}

            <div className="pt-1 md:pt-0.5">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-1">
                {[
                  { icon: Linkedin, label: "LinkedIn", to: "#" },
                  { icon: Github, label: "GitHub", to: "#" },
                  { icon: FaGoogleScholar, label: "Google Scholar", to: "#" },
                  {
                    icon: Mail,
                    label: "Email",
                    href: "mailto:your.email@example.com",
                  },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourprofile" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 sm:p-3.5 text-black hover:text-blue-700"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      strokeWidth={2.1}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = link.id === activeSection;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-lg font-medium text-black hover:text-blue-500 transition-colors duration-200 relative group ${
                      isActive
                        ? "text-blue-500"
                        : "text-black hover:text-blue-700"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full w-0 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="cursor-pointer lg:hidden p-3 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-blue-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-55 max-w-[90vw] dark:bg-white shadow-xl overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
                  Menu
                </h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  <X className="w-6 h-6 dark:text-white " />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = link.id === activeSection;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(link.path)}
                      // onClick={() => setIsMobileMenuOpen(false)}
                      // className="flex items-center justify-between px-4 py-4 text-2xl font-medium rounded-xl transition-all duration-300 hover:bg-blue-900/40"
                      className={`px-6 py-4 text-2xl font-medium rounded-xl transition-all duration-300 hover:bg-blue-900/40 ${
                        isActive
                          ? "bg-gray-400 text-blue-600"
                          : "text-black hover:bg-gray-500 hover:text-blue-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;