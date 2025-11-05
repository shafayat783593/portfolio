import React from "react";
import { Link } from "react-router"; // এটা যোগ করো

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
    <div id="Projects" className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`} // এই লিংকটা Details পেজে নিয়ে যাবে
            className="block"
          >
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl cursor-pointer">
              {/* ছবি */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* কন্টেন্ট */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.main}</p>

                {/* টেক স্ট্যাক */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-cyan-900 text-cyan-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* বাটন */}
                <div className="flex gap-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg text-sm font-medium"
                    onClick={(e) => e.stopPropagation()} // লিংক ক্লিক হলে Details পেজে যাবে না
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                  </a>

                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Server
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;