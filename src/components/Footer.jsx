import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      itemType="https://schema.org/WPFooter"
      itemScope
      id="colophon"
      role="contentinfo"
      className="bg-gray-100 text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/kiec/" className="mb-4">
              <h1 className="text-2xl font-semibold">KARYAN INFOTECH</h1>
            </NavLink>
            <h2 className="text-lg font-semibold text-center md:text-left">
              Elevate Your Learning Journey with Cutting-Edge Education
              Technology.
            </h2>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="http://facebook.com/KARYAN INFOTECHofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://youtube.com/@KARYANINFOTECHofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="http://in.pinterest.com/KARYANINFOTECH_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-400"
                aria-label="Pinterest"
              >
                <FaPinterest size={24} />
              </a>
              <a
                href="http://instagram.com/KARYANINFOTECH_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="http://linkedin.com/company/KARYANINFOTECHofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <NavLink
                  to="/kiec/about-us"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kiec/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kiec/blog"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kiec/privacy-policy"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kiec/terms-condition"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kiec/disclaimer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Disclaimer
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Our Programs</h2>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-600">Website Development</li>
              <li className="text-gray-600">Graphics Designing</li>
              <li className="text-gray-600">Search Engine Optimization</li>
              <li className="text-gray-600">Meta Ads</li>
              <li className="text-gray-600">Google Ads</li>
              <li className="text-gray-600">Artificial Intelligence</li>
              <li className="text-gray-600">Social Media Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-gray-600" />
                <span className="text-gray-600">
                  Address: Ashok Nagar road no.5, Kankarbagh,Patna 20
                  Bihar,India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-gray-600" />
                <span className="text-gray-600">
                  Mail: infoaman@3karyaninfotech.in
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-gray-600" />
                <span className="text-gray-600">Phone: +91 7091060239</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <span className="text-gray-600">
            Copyright © 2025 KARYAN INFOTECH | Powered by KARYAN INFOTECH
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
