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

  return (
    <section id="About" className="min-h-screen bg-[#171d32] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* Left Side - Image with Floating Animation */}
          <motion.div
            variants={imageVariants}
            animate="floating"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75"></div>

              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-[#171d32]">
                <img
                  className="w-full h-full object-cover"
                  src={shafayat}
                  alt="Shafayat - Frontend Developer"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg  text-gray-300 leading-relaxed">
                My programming journey began with <span className="text-blue-300 font-semibold">curiosity and passion</span> during my diploma studies in computer science. From learning the basics of HTML and CSS to mastering React and Node.js, I've embraced every step as an opportunity to create <span className="text-purple-300 font-semibold">meaningful digital experiences</span>.
              </p>

              <p className="text-lg  text-gray-300 leading-relaxed">
                I specialize in building <span className="text-blue-300 font-semibold">interactive, responsive, and user-friendly</span> frontend applications that delight users and solve real problems. Writing clean code and collaborating with others inspire me every day to push the boundaries of what's possible on the web.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me <span className="text-green-300 font-semibold">playing football and badminton</span><span className="text-yellow-300 font-semibold"></span>. These creative outlets keep me inspired and help maintain a healthy work-life balance.
                </p>
              </div>

              <p className="text-lg  text-gray-300 leading-relaxed">
                I'm a <span className="text-blue-300 font-semibold">motivated and enthusiastic learner</span> who thrives on challenges and continuous improvement. I believe in blending technical expertise with creative vision to craft <span className="text-purple-300 font-semibold">beautiful and functional web applications</span> that make a difference.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#Projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                View My Work
                <IoArrowForward className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </motion.div>

            {/* Stats or Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">10%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;