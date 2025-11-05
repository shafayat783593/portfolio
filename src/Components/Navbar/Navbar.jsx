import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import logo from "../../assets/about/shafayat-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Projects", "Contact"];

  const handleNavClick = (item) => {
    setIsOpen(false);
    const element = document.getElementById(item);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled
          ? "bg-black/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center hover:scale-105 transition-transform duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                className="w-16 md:w-20"
                src={logo}
                alt="Shafayat Logo"
              />
            </a>

            {/* Desktop Menu Links - SHOW ON DESKTOP ONLY */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="
                      text-lg font-medium text-white 
                      hover:text-blue-400 
                      transition-all duration-300 ease-in-out
                      hover:scale-105
                      relative
                      after:content-[''] after:absolute after:w-0 after:h-0.5 
                      after:bg-blue-400 after:left-0 after:-bottom-1
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {item === "Experience" ? "Skills" : item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button - SHOW ON MOBILE ONLY */}
            <button
              className="md:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <RiCloseLine size={28} className="text-white" />
              ) : (
                <RiMenu2Line size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - SHOW ON MOBILE ONLY WHEN OPEN - NOW HALF SCREEN FROM LEFT */}
        <div className={`
          md:hidden
          fixed top-0 left-0 w-3/4 h-screen
          bg-black/95 backdrop-blur-md
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          pt-20
          flex flex-col items-start
          border-r border-white/20
        `}>
          <div className="flex flex-col items-start space-y-8 w-full px-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="
                  text-xl font-medium text-white 
                  hover:text-blue-400 
                  transition-all duration-300 ease-in-out
                  hover:scale-105
                  py-3 px-4
                  border-b-2 border-transparent hover:border-blue-400
                  w-full text-left
                "
              >
                {item === "Experience" ? "Skills" : item}
              </button>
            ))}
          </div>

          {/* Close Hint for Mobile */}
          <div className="absolute bottom-10 left-6 text-gray-400 text-sm">
            Tap outside to close
          </div>
        </div>
      </nav>

      {/* Overlay - SHOW ON MOBILE ONLY WHEN MENU IS OPEN */}
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