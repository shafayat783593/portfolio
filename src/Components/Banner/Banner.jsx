import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Banner = () => {
    return (
        <div className="text-white flex w-full py-20 justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10 ">
                <TextChange />
                <p className="text-sm md:text-2xl tracking-tight mt-4">
                    I am passionate about building beautiful and responsive web applications using React and Tailwind CSS.
                </p>

                <button className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Contact Me
                </button>
            </div>
            <div>
                <motion.img
                    src={avatarImg}
                    alt="Avatar"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Banner;
