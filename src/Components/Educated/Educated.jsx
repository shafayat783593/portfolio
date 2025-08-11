import React from "react";
import { motion } from "framer-motion";

const EducationSection = () => {
    return (
        <div id="Education" className="p-10 md:p-24 text-white flex justify-center">
            <motion.div
                className="p-8 w-full max-w-lg bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] rounded-3xl shadow-2xl text-white border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, borderColor: "#64748b" }}
            >
                <h1 className="text-3xl font-bold mb-4 text-[#38bdf8]">
                    🎓 Diploma in Computer Technology
                </h1>
                <p className="text-lg font-semibold mb-2 text-gray-300">
                    Feni Polytechnic Institute
                </p>
                <p className="text-sm text-gray-400 mb-4">2023 – Present</p>
                <p className="leading-relaxed text-sm md:text-base text-gray-300">
                    Currently pursuing a diploma in Computer Technology with focus on programming,
                    web development, database management, and networking.
                    Working on academic and personal projects to build real-world development skills.
                </p>
            </motion.div>
        </div>
    );
};

export default EducationSection;
