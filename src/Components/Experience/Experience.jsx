import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaNodeJs, FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJsonwebtokens, SiJavascript, SiFirebase, SiNextdotjs, SiAxios, SiTypescript, SiRedux } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Experience = () => {
  const education = [
    {
      degree: "Diploma in Computer Technology",
      institution: "Feni Polytechnic Institute",
      period: "2023 – Present",
      description: "Currently pursuing a diploma with focus on modern web development, backend systems, and software solutions. Emphasis on practical knowledge and industry-ready skill development.",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      achievements: ["Web Development Fundamentals", "Database Management", "Software Engineering Principles"]
    },
  ];

  const experiences = [
    {
      position: "MERN Stack Developer (Trainee)",
      company: "Programming Hero",
      period: "Dec 2024 – Aug 2025",
      description: "Completed intensive MERN Stack development training. Built full-stack projects with React, Node.js, MongoDB, and implemented JWT authentication. Gained experience in team collaboration using Git and GitHub.",
      icon: "💼",
      color: "from-green-500 to-emerald-500",
      projects: ["E-commerce Platform", "Task Management App", "Social Media Dashboard"]
    }
  ];

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Technologies",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DBFB]" size={24} />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={24} />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} />, level: 75 },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={24} />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={24} />, level: 88 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" size={24} />, level: 92 },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={24} />, level: 80 }
      ]
    },
    {
      id: "backend",
      title: "Backend Technologies",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" size={24} />, level: 80 },
        { name: "Express.js", icon: <SiExpress className="text-white" size={24} />, level: 78 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" size={24} />, level: 75 },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[#d63aff]" size={24} />, level: 70 },
        { name: "REST API", icon: <TbApi className="text-[#FF6B6B]" size={24} />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={24} />, level: 82 }
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-500/30",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} />, level: 85 },
        { name: "GitHub", icon: <FaGithub className="text-white" size={24} />, level: 90 },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={24} />, level: 65 },
        { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" size={24} />, level: 60 },
        { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" size={24} />, level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="Experience" className="min-h-screen py-20 px-4 md:px-8 lg:px-16  relative overflow-hidden">
      {/* Subtle Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <FaRocket className="text-white text-xl" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">
            Journey & Skills
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My educational path, professional experience, and technical expertise
          </p>
        </motion.div>

        {/* Education & Experience Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div
            className="p-6  rounded-2xl shadow-xl border border-slate-700/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <FaGraduationCap className="text-blue-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </h2>
                <p className="text-gray-400 text-sm">Academic background</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-xs">{edu.period}</p>
                    </div>
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <span className="text-sm">{edu.icon}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {edu.achievements.map((achievement, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs border border-blue-500/20">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="p-6  rounded-2xl shadow-xl border border-slate-700/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <FaBriefcase className="text-green-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Experience
                </h2>
                <p className="text-gray-400 text-sm">Professional journey</p>
              </div>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  whileHover={{ borderColor: "rgba(34, 197, 94, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-green-400 font-medium text-sm mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                    </div>
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <span className="text-sm">{exp.icon}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.projects.map((project, i) => (
                      <span key={i} className="px-2 py-1 bg-green-500/20 text-green-300 rounded-lg text-xs border border-green-500/20">
                        {project}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl shadow-xl border border-slate-700/50 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Skills Header */}
          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg">
                <FaRocket className="text-white text-xl" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">
              Technical Skills
            </h2>
            <p className="text-gray-400">
              Technologies and tools I use to build amazing projects
            </p>
          </motion.div>

          {/* Skills Grid - Vertical Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                className={`p-5 bg-slate-800/30 rounded-xl border ${category.borderColor} backdrop-blur-sm`}
                variants={itemVariants}
                whileHover={{
                  borderColor: category.borderColor.replace('30', '50'),
                  backgroundColor: 'rgba(30, 41, 59, 0.4)'
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/50">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List - Vertical Layout */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded-lg"
                      variants={skillItemVariants}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 p-2 bg-slate-700/50 rounded-lg">
                        {skill.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-white truncate">
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-slate-300 ml-2">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={skill.level}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Footer */}
          <motion.div
            className="text-center mt-6 pt-4 border-t border-slate-700/30"
            variants={itemVariants}
          >
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;