import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/logoKiec.png"; // Update path if needed

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);

  const serviceLinks = [
    {
      label: "Website Development",
      href: "/services/web-development-in-bihar",
    },
    {
      label: "Digital Marketing",
      href: "/services/digital-marketing-in-bihar",
    },
    {
      label: "Graphic Designing",
      href: "/services/graphic-designing-in-bihar",
    },
    { label: "Video Editing", href: "/services/video-editing-in-bihar" },
    {
      label: "Social Media Gainer",
      href: "/services/social-media-gainer-in-bihar",
    },
  ];

  const otherLinks = [
    { label: "Internship", href: "https://3karyaninfotech.in/internship" },
    { label: "Blog", href: "https://3karyaninfotech.in/blog" },
    {
      label: "Marksheet Verification",
      href: "https://3karyaninfotech.in/student/verify-mark.php",
    },
    {
      label: "Certificate Verification",
      href: "https://3karyaninfotech.in/student/verify-certificate.php",
    },
    {
      label: "Registration Verification",
      href: "https://3karyaninfotech.in/student/verify-registration.php",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-200 w-full border border-black px-4 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left hidden md:block">
            <h2 className="text-sm font-semibold">📞 +91 7091060239</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 text-center">
            <h2 className="text-sm font-medium ">
              Join Our Mentorship Program | Learn From Industry Experts
            </h2>
            <Link
              to="/apply"
              className="text-white bg-orange-500 px-4 py-1 rounded-xl hover:bg-orange-600 transition"
            >
              Apply Now
            </Link>
          </div>
          <div className="hidden md:flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.facebook.com/share/155X8TzEyb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@KiEC2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.instagram.com/karyaninfotech?igsh=NHZ6OWhrZHB0aWI2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/karyan-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 bg-white-50 bg-opacity-30 backdrop-blur-sm shadow-lg z-50 w-full h-auto py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between relative items-center h-auto py-4 ">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <h1 className="text-lg md:text-xl font-semibold hidden md:block">
              3K ARYAN INFOTECH
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium text-xl"
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className="text-gray-700 hover:text-blue-600 font-medium text-xl"
            >
              About
            </NavLink>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServiceVisible(true)}
              onMouseLeave={() => setIsServiceVisible(false)}
            >
              <button
                onClick={() => navigate("/services")}
                className="text-gray-700 hover:text-blue-600 font-medium text-xl"
              >
                Services <ChevronDown size={16} className="inline" />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 bg-white shadow rounded transition-all z-50 ${
                  isServiceVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                {serviceLinks.map((link) => (
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
              href="https://3karyaninfotech.in/institute"
              className="text-gray-700 hover:text-blue-600 font-medium text-xl cursor-pointer"
            >
              Institute
            </a>
            <NavLink
              to="/contact-us"
              className="text-gray-700 hover:text-blue-600 font-medium text-xl"
            >
              Contact
            </NavLink>
            {/* Others Dropdown */}
            <a
              href="https://3karyaninfotech.in/institute/freebies.php"
              className="text-gray-700 hover:text-blue-600 font-medium text-xl cursor-pointer"
            >
              Freebies
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600"
              >
                Home
              </NavLink>

              <div className="pl-2">
                <p className="text-gray-700 font-semibold">Services</p>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block pl-4 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <a
                href="https://3karyaninfotech.in/institute"
                className="text-gray-800 hover:text-blue-600"
              >
                Institute
              </a>
              <a
                href="https://3karyaninfotech.in/institute/freebies.php"
                className="text-gray-800 hover:text-blue-600"
              >
                Freebies
              </a>
              <NavLink
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600"
              >
                About
              </NavLink>
              <NavLink
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
