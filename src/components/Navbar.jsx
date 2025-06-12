import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact-us" },

    { label: "Internship", href: "/internship" },
  ];

  const otherLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Review", href: "/review" },
    { label: "Certificate", href: "/certificate" },
    { label: "Event", href: "/event" },
  ];

  return (
    <header className="w-full top-0 bg-white shadow z-50 md:py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}

        <NavLink to="/" className="flex-shrink-0 flex items-center space-x-2">
          <img
            src="https://www.3karyaninfotech.in/assets/img/nlogo.png"
            alt="KARYAN Infotech Logo"
            className="h-10 w-auto"
          />
          <h1 className="md:text-2xl font-bold">KARYAN INFOTECH</h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              to={link.href}
              key={link.label}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {link.label}
            </NavLink>
          ))}

          {/* Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition font-medium">
              Others ▼
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
              {otherLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Brochure
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-4 p-4">
            {[...navLinks, ...otherLinks].map((link) => (
              <NavLink
                to={link.href}
                key={link.label}
                className="text-gray-800 hover:text-blue-600"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 text-center rounded hover:bg-blue-700"
            >
              Download Brochure
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
