import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import shafayt  from "../../assets/about/shfayat 3.png"
const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center md:items-start md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 gap-10"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [-20, 0, -20] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex justify-center w-full mt-20 md:w-1/2"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-lg">
          <img
            className="w-full h-full object-cover rounded-full border-4 border-black"
            src={shafayt}
            alt="About img"
          />
        </div>
      </motion.div>

      {/* Right Side - Text */}
      <div className="max-w-xl text-sm md:text-md leading-relaxed space-y-6 md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">About Me</h2>
        <p>
          My programming journey began with curiosity and passion during my diploma
          studies in computer science. From learning the basics of HTML and CSS to
          mastering React and Node.js, I have embraced every step as an opportunity
          to create meaningful digital experiences.
        </p>
        <p>
          I enjoy building interactive, responsive, and user-friendly frontend
          applications that delight users and solve real problems. Writing clean
          code and collaborating with others inspire me every day.
        </p>
        <p>
          Outside programming, I love playing football and badminton, and I’m
          passionate about photography and painting. These hobbies keep my
          creativity flowing and help me maintain a healthy work-life balance.
        </p>
        <p>
          I am a motivated and enthusiastic learner who enjoys challenges and
          continuous improvement. I believe in blending technical skills with
          creativity to craft beautiful and functional web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
