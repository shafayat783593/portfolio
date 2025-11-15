import React from "react";
import { motion } from "framer-motion";
import TextChange from "../TextChange";
import myphoto from "../../assets/about/shafayat pic.jpg";
import { Download, Sparkles, Code, Palette } from "lucide-react";

const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0f172a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-6 lg:space-y-8 relative z-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Animated Icons */}
                      

                        {/* Animated Text */}
                        <div className="space-y-4">
                            <TextChange />
                            <motion.p
                                className="text-md md:text-xl text-gray-300 leading-relaxed "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                I craft beautiful, responsive, and high-performance web applications using modern technologies like React, Tailwind CSS, and Node.js. Passionate about creating exceptional user experiences.
                            </motion.p>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <motion.button
                                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-semibold shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Download className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Download Resume</span>
                                <a
                                    href="https://drive.google.com/file/d/1TOfIAA8Psm5OkgmRJ91EwFNu7fy9vrn8/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0"
                                ></a>
                            </motion.button>

                            <motion.a href="#Projects"
                                className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span >View Projects</span>
                                <motion.a
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.a>
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            {[
                                { number: "5+", label: "Projects" },
                                { number: "1+", label: "Years" },
                                { number: "5+", label: "Techs" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />

                        {/* Main Image Container */}
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 2, 0, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-gray-900">
                                    <img
                                        src={myphoto}
                                        alt="Md Shafayat Hossain"
                                        className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Code className="w-4 h-4" />
                                <span>Developer</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2"
                                animate={{ scale: [1.1, 1, 1.1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            >
                                <Palette className="w-4 h-4" />
                                <span>Designer</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;