import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="Contact"
      className="bg-[#0f172a] min-h-screen flex flex-col items-center justify-center p-6 md:p-20 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-[#38bdf8]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl w-full bg-[#1e293b] p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-12">
        {/* Left side: Contact Info */}
        <div className="flex flex-col gap-10 md:w-1/3">
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-[#25D366] hover:text-green-400 transition cursor-pointer"
          >
            <FaWhatsapp size={40} />
            <span className="text-lg font-semibold">+880 1234 567 890</span>
          </a>

          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-4 text-[#60a5fa] hover:text-blue-400 transition cursor-pointer"
          >
            <FaEnvelope size={40} />
            <span className="text-lg font-semibold">your.email@example.com</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-400 hover:text-white transition cursor-pointer"
          >
            <FaGithub size={40} />
            <span className="text-lg font-semibold">github.com/yourusername</span>
          </a>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-2/3">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <input
                required
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 focus:border-[#38bdf8] outline-none transition"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 focus:border-[#38bdf8] outline-none transition"
              />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 focus:border-[#38bdf8] outline-none transition resize-none"
              />
              <button
                type="submit"
                className="bg-[#38bdf8] hover:bg-cyan-600 transition text-black font-semibold py-3 rounded-full"
              >
                Send Message
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-400 font-semibold"
            >
              Thank you! I will get back to you soon.
              <br />
              <button
                className="mt-4 px-6 py-2 bg-[#38bdf8] rounded-full font-semibold hover:bg-cyan-600 transition"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
