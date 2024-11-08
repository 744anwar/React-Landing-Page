import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header
        id="header"
        className="w-full h-[80px] flex justify-center items-baseline p-5 bg-white text-black"
      >
        {/* Mobile View: Logo and Menu Button */}
        <div className="w-full flex justify-between p-1 sm:hidden relative">
          <a href="#herosection">
            <h1>React Landing Page</h1>
          </a>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-20 left-6 z-10 max-w-xl md:w-full bg-white flex flex-col items-start overflow-x-hidden">
            <nav className="flex flex-col items-start w-full">
              <ul className="flex flex-col gap-3 w-full">
                <li>
                  <a href="#features" onClick={() => setIsMenuOpen(false)}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team" onClick={() => setIsMenuOpen(false)}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Desktop View: Logo and Navigation Links */}
        <div className="w-full md:flex hidden">
          <div className="w-2/6 flex justify-center ">
            <h2 className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
              React Landing Page
            </h2>
          </div>
          <div className="w-4/6">
            <nav className="flex justify-between px-10">
              <ul className="flex justify-end space-x-4">
                <li>
                  <a
                    href="#features"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#about"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#services"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#gallery"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#testimonials"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#team"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Team
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#contact"
                    className="text-lg font-normal uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;