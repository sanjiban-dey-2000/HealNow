import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Therapists", to: "/therapists" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-teal-600">
            HealNow<span className="text-gray-500 font-light">.care</span>
          </Link>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex space-x-6 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-600 text-xl hover:text-teal-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-teal-600 text-xl hover:text-teal-800 font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-teal-600 text-white text-xl px-4 py-2 rounded-xl hover:bg-teal-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-gray-600"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col space-y-4">
            <Link
              to="/login"
              className="text-teal-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/get-started"
              className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
