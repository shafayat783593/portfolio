import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import shafayat from "../../assets/about/shfayat 3.png";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Digital skills data
  const digitalSkills = [
    "React.js", "JavaScript", "Node.js", "Tailwind CSS",
    "Responsive Design", "UI/UX Principles"
  ];

  return (
    <section id="About" className="min-h-screen bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Digital Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-40 items-center relative z-10"
        >

          {/* Left Side - Image with Digital Theme */}
          <motion.div
            variants={imageVariants}
            animate="floating"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Digital Gradient Border with Animation */}
              {/* <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-gradient-xy"></div> */}

              {/* Digital Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-md opacity-50"></div>

              {/* Main Image Container with Digital Style */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-[#171d32] shadow-2xl shadow-blue-500/20">
                <img
                  className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-500"
                  src={shafayat}
                  alt="Shafayat - Digital Frontend Developer"
                  loading="lazy"
                />

                {/* Digital Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
              </div>

              {/* Animated Digital Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Right Side - Digital Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Digital Section Header */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
             About 
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <p className="text-lg text-gray-400 mt-2">Crafting Digital Experiences</p>
            </motion.div>

            {/* Digital Content Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey into the <span className="text-blue-300 font-semibold">digital realm</span> began with curiosity during my computer science studies. From mastering HTML/CSS to building complex React applications, I've embraced the digital evolution to create <span className="text-cyan-300 font-semibold">immersive web experiences</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in developing <span className="text-blue-300 font-semibold">cutting-edge digital solutions</span> that combine innovative technology with user-centered design. Every line of code is crafted to deliver seamless, responsive, and engaging digital interactions.
              </p>

              {/* Digital Skills Grid */}
              <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Digital Expertise</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {digitalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors"
                    >
                      <span className="text-blue-300 text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Beyond the digital world, I find balance in <span className="text-green-300 font-semibold">sports and physical activities</span>. This harmony between digital creation and real-world experiences fuels my creativity and maintains optimal performance.
                </p>
              </div>
            </motion.div>

            {/* Digital Call to Action */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#Projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group flex-1 text-center"
              >
                Explore My Digital Work
                <IoArrowForward className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <a
                href="#Contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-blue-400/30 text-blue-300 rounded-2xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 group flex-1 text-center"
              >
                Start Digital Journey
              </a>
            </motion.div>

            {/* Digital Stats */}
       
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom animation for gradient */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(10px) translateY(10px); }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;