import React from "react";
import incurancePolice from "../../assets/about/lifeincurance.png";
import tourmanagement from "../../assets/about/tour management.png";
import frellancer from "../../assets/about/frellancer.png";
import { motion } from "framer-motion";
import { Link } from "react-router"; // Use react-router-dom for SPA routing

const projects = [
  {
    id: "life-insurance",
    title: "Life Insurance Management Platform",
    main: "A YouTube clone project built with React.",
    imgSrc: incurancePolice,
    demoLink: "https://insurance-management-8aa90.web.app/",
    sourceLink: "https://github.com/shafayat783593/Life-Insurance-Management-Platform",
    stack: "React, Firebase, Tailwind CSS",
    description: "A platform to manage life insurance policies...",
    challenges: "Handling real-time data and state management...",
    improvements: "Add user dashboard, improve UI responsiveness...",
  },
  {
    id: "tour-management",
    title: "Tour Management",
    main: "This is a blogging website created in Next.js...",
    imgSrc: tourmanagement,
    demoLink: "https://tour-management-c1ca2.web.app/",
    sourceLink: "https://github.com/shafayat783593/Tout-management-clint",
    stack: "Next.js, React, Tailwind CSS",
    description: "A tour booking and management system...",
    challenges: "Integrating with third-party APIs for tours...",
    improvements: "Implement user reviews, add payment integration...",
  },
  {
    id: "freelance-task",
    title: "Freelance Task",
    main: "Netflix clone created using React and styled components.",
    imgSrc: frellancer,
    demoLink: "https://freelance-task-8606e.web.app/",
    sourceLink: "https://github.com/yourusername/netflix-clone",
    stack: "React, Styled Components, Firebase",
    description: "A Netflix UI clone with custom features...",
    challenges: "Responsive UI and media playback syncing...",
    improvements: "Add user profiles and watch history...",
  },
];

const ProjectCardPage = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white min-h-screen bg-[#0b0c17]">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center tracking-wide">Projects</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map(({ id, title, main, imgSrc, demoLink, sourceLink }, index) => (
          <motion.div
            key={id}
            className="relative w-80 bg-[#111423] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(70, 86, 151, 0.5)" }}
          >
            <div className="relative overflow-hidden h-48 md:h-56">
              <motion.img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 flex-grow">{main}</p>

              <div className="mt-6 flex gap-4 justify-center md:justify-start flex-wrap">
                {demoLink ? (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-[#465697] font-semibold text-white hover:bg-[#334578] transition"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="px-5 py-2 rounded-full bg-gray-600 font-semibold text-white cursor-not-allowed opacity-60 select-none">
                    Demo N/A
                  </span>
                )}

                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#465697] font-semibold text-white hover:bg-[#334578] transition"
                >
                  Source Code
                </a>

                {/* View More button navigates to detail page */}
                <Link
                  to={`/projects/${id}`}
                  className="px-5 py-2 rounded-full bg-[#3b82f6] font-semibold text-white hover:bg-[#2563eb] transition"
                >
                  View More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardPage;
