import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Experience = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DBFB]" size={40} /> },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" size={40} /> },
  ];

  return (
    <div id = "Experience"  className="p-6 md:p-16  text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#38bdf8]">
        Education and Skills
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Card */}
        <motion.div
          className="p-8 bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-3xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, borderColor: "#38bdf8" }}
        >
          <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">
            🎓 Education
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            Diploma in Computer Technology
          </h3>
          <p className="text-gray-400 text-sm mb-2">XYZ Polytechnic Institute</p>
          <p className="text-gray-500 text-sm mb-4">2023 – Present</p>
          <p className="text-gray-300 leading-relaxed">
            Currently pursuing a diploma with a focus on modern web development,
            backend systems, and software solutions.
          </p>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          className="p-8 bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-3xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, borderColor: "#38bdf8" }}
        >
          <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">💡 Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl border border-gray-600 hover:bg-[#38bdf8] hover:text-black transition duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {skill.icon}
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
