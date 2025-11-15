import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_0mbftgf",
        "template_2gnk698",
        formRef.current,
        "6N1vU5ODFo6EvVcev"
      );

      if (result.text === "OK") {
        setSubmitted(true);
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 md:p-20 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/4 w-6 h-6 bg-cyan-500/20 rounded-full animate-ping"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information - Left Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <motion.a
                  href="https://wa.me/8801610665069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition">
                    <FaWhatsapp size={24} className="text-green-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-white block">WhatsApp</span>
                    <span className="text-green-300 text-sm">+880 1610665069</span>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:sshapa17@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition">
                    <FaEnvelope size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-white block">Email</span>
                    <span className="text-blue-300 text-sm">sshapa17@gmail.com</span>
                  </div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/shafayat783593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition">
                    <FaGithub size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-white block">GitHub</span>
                    <span className="text-purple-300 text-sm">shafayat783593</span>
                  </div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </motion.a>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 text-sm font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              {!submitted ? (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-cyan-300 text-sm font-medium mb-2 block">Your Name</label>
                      <input
                        required
                        type="text"
                        name="from_name"
                        placeholder="Enter your full name"
                        className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="text-cyan-300 text-sm font-medium mb-2 block">Your Email</label>
                      <input
                        required
                        type="email"
                        name="from_email"
                        placeholder="Enter your email address"
                        className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cyan-300 text-sm font-medium mb-2 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label className="text-cyan-300 text-sm font-medium mb-2 block">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 resize-none placeholder-gray-400 backdrop-blur-sm"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <IoIosSend size={20} className="group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                    <FaPaperPlane size={32} className="text-green-400 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                    Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/25"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-purple-400/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Contact;