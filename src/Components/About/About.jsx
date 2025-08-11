import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-10">
          {/* Animated Floating Image */}
          <motion.img
            className="md:h-80 rounded-lg shadow-lg"
            src={AboutImg}
            alt="About img"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: [-20, 0, -20], // float up and down
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          {/* Introduction Text */}
          <div className="max-w-xl text-sm md:text-md leading-relaxed space-y-6">
            <p>
              My programming journey began with curiosity and passion during my
              diploma studies in computer science. From learning the basics of
              HTML and CSS to mastering React and Node.js, I have embraced every
              step as an opportunity to create meaningful digital experiences.
            </p>
            <p>
              I enjoy building interactive, responsive, and user-friendly
              frontend applications that delight users and solve real problems.
              Writing clean code and collaborating with others inspire me every
              day.
            </p>
            <p>
              Outside programming, I love playing football and badminton, and I
              ’m passionate about photography and painting. These hobbies keep
              my creativity flowing and help me maintain a healthy work-life
              balance.
            </p>
            <p>
              I am a motivated and enthusiastic learner who enjoys challenges
              and continuous improvement. I believe in blending technical
              skills with creativity to craft beautiful and functional web
              applications.
            </p>

            {/* Skills List */}
            <ul className="space-y-6 mt-6">
              <li className="flex gap-3">
                <IoArrowForward size={30} className="mt-1 text-[#3b82f6]" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Frontend Developer
                  </h3>
                  <p>
                    Skilled in HTML, CSS, Tailwind CSS, React.js for building
                    responsive and user-friendly web applications.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <IoArrowForward size={30} className="mt-1 text-[#3b82f6]" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Backend Developer
                  </h3>
                  <p>
                    Experience with Node.js and Express for creating fast and
                    scalable server-side applications.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <IoArrowForward size={30} className="mt-1 text-[#3b82f6]" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Database
                  </h3>
                  <p>
                    Working knowledge of MongoDB for designing and managing
                    NoSQL databases.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
