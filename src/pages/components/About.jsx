import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";
import { Tweet } from "react-tweet";
import XTimeline from "../../components/XTimeline";
import profileImage from '../../assets/image.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50/80 py-12 px-4 sm:px-6 md:px-8 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            About
          </h2>
          <div className="w-28 md:w-32 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content – 75% left / 25% right on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 lg:gap-20 items-start">
          {/* Left – About Me (75%) */}
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              About Me
            </h2>
             
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-30 blur-3xl -z-10 animate-pulse"></div>

              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden border-4 md:border-8 border-blue-400 shadow-xl flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Sushil Sharma"
                  className="w-full h-auto object-cover aspect-square sm:aspect-[4/5] lg:aspect-auto max-w-full max-h-full"
                />
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center lg:text-left px-2 sm:px-0">
              I am a passionate Web Developer with experience in creating{" "}
              <span className="text-blue-500 font-semibold">
                responsive and easy-to-use websites
              </span>
              . I am skilled in{" "}
              <span className="text-blue-500 font-semibold">
                Python, C, C++, HTML, CSS, and JavaScript
              </span>
              . I have worked with teams to build fast and scalable web
              solutions. I am excited to use my technical skills and creativity
              in a dynamic development team.
            </p>

            {/* Contact Details (commented out in your code – uncomment if needed) */}
            {/* ... your contact block here ... */}
          </div>

          {/* Right – Latest from X (25%) */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Latest from X
            </h3>

            {/* Scrollable Twitter Feed Container */}
            <div
              className="
                relative w-full 
                max-w-[300px] 
                h-[450px] sm:h-[550px] md:h-[650px] lg:h-[630px]
                overflow-y-auto 
                bg-gray-900 rounded-2xl 
                shadow-2xl shadow-blue-500/20 
                border border-gray-700
                scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800
                scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                lg:scrollbar-w-2 scrollbar-w-1
              "
            >
              <div className="p-5 sm:p-6 space-y-6 md:space-y-8">
                <Tweet id="2006420126438994042" />
                <Tweet id="2006857672063123924" />
                <Tweet id="1984297576665854457" />
              </div>

              {/* <a class="twitter-timeline" data-lang="en" data-theme="dark" 
              href="https://twitter.com/sushilpokhrel?ref_src=twsrc%5Etfw"
              data-width="50" data-height="100"
              data-chrome="nofooter noborders"
              data-tweet-limit="10"
              data-aria-polite="assertive"
              >Tweets by sushilpokhrel</a> 
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
               
              {/* <div className="flex justify-center">
        <XTimeline />
      </div> */}

            </div>
            <p className="mt-6 text-sm text-gray-500 text-center lg:text-left">
              Want to see more?{" "}
              <a
                href="https://x.com/sushilpokhrel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Follow me on X →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;