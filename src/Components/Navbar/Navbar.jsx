import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-white px-10 py-4 md:px-20 backdrop-blur-md bg-black/50">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide">Portfolio</span>
 
        {/* Menu Links */}
        <ul
          className={`fixed top-0 left-0 h-80  w-40  ${isOpen ? "bg-black mt-10 backdrop-blur-md" : "bg-transparent"
            } md:bg-transparent md:static md:h-full md:w-auto flex flex-col md:flex-row items-center gap-6 px-6 pt-20 md:pt-0 md:px-0 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <a href="#About" onClick={() => setIsOpen(false)}>
            <li className="py-2 md:py-0 hover:text-gray-300">About</li>
          </a>
          <a href="#Experience" onClick={() => setIsOpen(false)}>
            <li className="py-2 md:py-0 hover:text-gray-300">Skills</li>
          </a>
          <a href="#Projects" onClick={() => setIsOpen(false)}>
            <li className="py-2 md:py-0 hover:text-gray-300">Projects</li>
          </a>
          <a href="#Contact" onClick={() => setIsOpen(false)}>
            <li className="py-2 md:py-0 hover:text-gray-300">Contact</li>
          </a>
        </ul>

        {/* Hamburger / Close Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
