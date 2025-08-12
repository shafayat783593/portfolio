import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import logo from "../../assets/about/shafayat-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-white px-10 py-2 md:px-20 backdrop-blur-md bg-black/50">
        {/* Logo */}
        <img className="w-20" src={logo} alt="Logo" />

        {/* Menu Links */}
        <ul
          className={`
  fixed top-16 left-0
  h-[calc(100vh-4rem)] w-56
  bg-black backdrop-blur-md md:bg-none
  flex flex-col items-center gap-6 px-6 pt-10
  transition-transform duration-300 ease-in-out
  md:static md:h-auto md:w-auto md:flex-row md:pt-0 md:px-0
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0
  text-white
`}

        >
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-xl hover:text-blue-400 transition duration-300 ease-in-out hover:scale-105"
              >
                {item === "Experience" ? "Skills" : item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>

      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
