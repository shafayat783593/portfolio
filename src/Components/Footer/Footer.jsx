import React from "react";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-xl text-gray-400 hover:text-white transition">
          <a
            href="https://wa.me/01610665069"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#25D366]"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:your.sshapa17@gmail.com"
            aria-label="Email"
            className="hover:text-[#60a5fa]"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/shafayat783593"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shafayat-hosan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0a66c2]"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Small note or anything */}
        <p className="text-sm md:text-base">Made with ❤️ using React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
