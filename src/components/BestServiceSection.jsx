import { NavLink } from "react-router-dom";
import brochure from "../assets/karyanInfotech.pdf";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const BestServiceSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closePopup = () => setShowPopup(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://server.3karyaninfotech.in/api/starter",
        formData
      );
      if (response.status === 201) {
        setSubmitted(true);
        setFormData({ name: "", mobile: "", email: "" });
        alert("Thank you! Your details have been submitted.");
        setTimeout(() => {
          closePopup();
          // Download brochure
          const link = document.createElement("a");
          link.href = brochure;
          link.download = "3KARYAN-Brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 2000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      title: "Digital Marketing Strategies",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-2.svg",
      link: "/services/digital-marketing-in-bihar",
    },
    {
      title: "Creative Web Design Solutions",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-4.svg",
      link: "/services/web-development-in-bihar",
    },
    {
      title: "Social Media Management",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-7.svg",
      link: "/services/social-media-gainer-in-bihar",
    },
    {
      title: "SEO Optimization Solutions",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-9.svg",
      link: "/services/web-development-in-bihar",
    },
    {
      title: "Graphic Design Services",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-3.svg",
      link: "/services/graphic-designing-in-bihar",
    },
    {
      title: "Video Editing Services",
      description:
        "Before starting any new activity, ask yourself if that activity.",
      image:
        "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/services-icon-10.svg",
      link: "services/video-editing-in-bihar",
    },
  ];

  return (
    <section className="bg-white text-blue-950 py-20 px-4 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Your Trusted{" "}
          <span className="text-orange-500">Digital Service Partner</span> in
          Bihar
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-blue-950">3K ARYAN Infotech</span>
          , we empower your brand with creative and result-driven solutions. We
          offer top-tier{" "}
          <span className="text-orange-500 font-medium">Digital Marketing</span>
          , impactful{" "}
          <span className="text-orange-500 font-medium">Graphic Designing</span>
          , modern{" "}
          <span className="text-orange-500 font-medium">
            Website Designing & Development
          </span>
          , and a full range of branding & IT services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-orange-200 transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              Digital Marketing
            </h3>
            <p className="text-gray-700">
              Grow your business with SEO, Google Ads, social media marketing,
              lead generation, and content strategies tailored to your brand.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-orange-200 transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              Graphic Design
            </h3>
            <p className="text-gray-700">
              From logos and banners to brochures and branding kits, we turn
              concepts into visuals that speak to your audience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-orange-200 transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              Website Design
            </h3>
            <p className="text-gray-700">
              We design responsive, fast, and user-friendly websites that leave
              a lasting impression—tailored for businesses, startups, and
              eCommerce.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-orange-200 transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              Complete Branding
            </h3>
            <p className="text-gray-700">
              We craft your brand identity—from logo to voice—ensuring
              consistency across all digital and print platforms.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="md:mt-20 mt-5 ">
          <h2 className="text-orange-500 text-md text-center">
            [OUR SERVICES]
          </h2>
          <p className="text-xl md:text-4xl font-semibold text-center mt-10 ">
            Exploring Buisness World <br /> through Our Services
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-50 rounded-xl shadow hover:shadow-xl p-6 relative transition-all"
            >
              <div className="relative z-10 mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <NavLink
                to={service.link}
                className="inline-flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
          className="border border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 shadow-md"
          onClick={() => setShowPopup(true)}
        >
          Download Brochure
        </button>
      </div>

      {/* ✅ POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Download Brochure
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                {loading ? "Submitting..." : "Submit & Download"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestServiceSection;
