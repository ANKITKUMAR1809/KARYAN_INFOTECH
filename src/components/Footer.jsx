import { NavLink } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import kiLogo from "../assets/logoKiec.png"; // Adjust the path as necessary
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
        <div className="border-t border-gray-300 mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <NavLink to="/" className="mb-4 text-center">
              <img src={kiLogo} alt="" className="w-20 h-auto" />
              {/* <h1 className="text-2xl font-bold flex justify-center items-center">
                3K ARYAN INFOTECH
              </h1> */}
            </NavLink>
            <p className="text-base">
              MAKE CAREER IN IT INDUSTRY WITH 3K ARYAN INFOTECH. We provide
              comprehensive training and services in web development, graphics
              designing, SEO, and digital marketing. Join us to enhance your
              skills and build a successful career in the IT industry.
              <br />
              <br />
              <strong>
                Follow us on social media for updates and insights!
              </strong>
            </p>
            <div className="flex space-x-4 mt-4">
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

          {/* Company Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about-us"],
                ["Contact", "/contact"],
                ["Blog", "https://3karyaninfotech.in/institute/blog.php"],
                ["Services", "/services"],
                ["Freebies", "https://3karyaninfotech.in/institute/freebies.php"],
                ["Services", ""],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms-condition"],
                ["Disclaimer", "/disclaimer"],
              ].map(([text, link]) => (
                <li key={link}>
                  <NavLink
                    to={link}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Our Programs</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Website Development",
                "Graphics Designing",
                "Search Engine Optimization",
                "Meta Ads",
                "Google Ads",
                "Artificial Intelligence",
                "Social Media Optimization",
              ].map((program) => (
                <li key={program} className="text-gray-600">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="text-gray-600 mt-1" size={20} />
                <span className="text-gray-600">
                  Ashok Nagar Rd No.5, Kankarbagh, Patna 800020, Bihar, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-gray-600" size={20} />
                <span className="text-gray-600">
                  infoaman@3karyaninfotech.in
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-gray-600" size={20} />
                <span className="text-gray-600">+91 7091060239</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          © 2025 3K ARYAN INFOTECH | Powered by 3K ARYAN INFOTECH
        </div>
      </div>
    </footer>
  );
};

export default Footer;
