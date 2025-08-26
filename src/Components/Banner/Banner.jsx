
import React from "react";
import { motion } from "framer-motion";
import TextChange from "../TextChange";
import myphoto from "../../assets/about/shafayat pic.jpg";

const Banner = () => {
    return (
        <div className="text-white flex flex-col md:flex-row w-full my-20 justify-between items-center p-10 md:p-20">
            {/* Left Side */}
            <div className="md:w-2/4 md:pt-10 text-center md:text-left">
                <TextChange />
                <p className="text-sm md:text-2xl tracking-tight mt-10">
                    I am passionate about building beautiful and responsive web applications using React and Tailwind CSS.
                </p>
                <button className="mt-5 md:mt-10 text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1rfqPhqBICCIiXBmHqmuSObjU0tPsiNH9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </button>

            </div>

            {/* Right Side - Circle Image */}
            <div className="mt-10 md:mt-0 flex justify-center">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                >
                    <img
                        src={myphoto}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full border-4 border-[#0f1629]"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
