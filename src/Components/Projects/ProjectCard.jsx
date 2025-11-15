import React from "react";
import { Link } from "react-router";

import incurancePolice from "../../assets/about/lifeincurance.png";
import vibePassImg from "../../assets/about/vibepass.png";
import tourmanagement from "../../assets/about/tour management.png";

const projects = [
  {
    id: "life-insurance",
    title: "Life Insurance Management Platform",
    main: "Policy Management: Users can view detailed policy info, manage beneficiaries, and track premiums.",
    imgSrc: incurancePolice,
    demoLink: "https://insurance-management-8aa90.web.app/",
    sourceLink: "https://github.com/shafayat783593/Life-Insurance-Management-Platform",
    stack: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: "vibe-pass",
    title: "Vibe Pass – Online Movie Ticket Booking",
    main: "Real-time seat selection, secure payments, QR e-tickets, and admin dashboard.",
    imgSrc: vibePassImg,
    demoLink: "https://vibe-pass.vercel.app/",
    sourceLink: "https://github.com/niloyahmadramjan/Vibe-Pass",
    serverLink: "https://github.com/niloyahmadramjan/vibe-pass-server",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
  },
  {
    id: "tour-management",
    title: "Tour Management",
    main: "Tour Listings: Users can explore tours, filter by price, destination, and duration.",
    imgSrc: tourmanagement,
    demoLink: "https://tour-management-c1ca2.web.app/",
    sourceLink: "https://github.com/shafayat783593/Tout-management-clint",
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
];

const ProjectSection = () => {
  return (
    <div id="Projects" className="py-16 px-6 bg-[#0f172a] text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-700"
          >
            {/* Image Section - Fixed Height */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content Section - Flexible but consistent */}
            <div className="flex-1 p-5 flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 min-h-[3.5rem]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                {project.main}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-cyan-900/50 text-cyan-300 rounded-full border border-cyan-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons - Always at bottom */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Live Demo
                </a>

                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Code
                </a>

                {project.serverLink && (
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Server
                  </a>
                )}
              </div>

              {/* Details Link */}
              <Link
                to={`/projects/${project.id}`}
                className="block w-full text-center mt-3 text-cyan-400 hover:text-cyan-300 text-sm font-medium py-2 border border-cyan-600/30 rounded-lg hover:bg-cyan-600/10 transition-all duration-200"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;