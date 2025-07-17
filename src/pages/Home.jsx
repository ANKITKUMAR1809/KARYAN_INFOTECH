import React from "react";
import TypingText from "../components/TypingText";
import TabbedPrograms from "../components/TabbedPrograms";
import LearningHighlights from "../components/LearningHighlights";
import HighlightsSection from "../components/HighlightsSection";
import HighlightsGrid from "../components/HighlightsGrid";
import HomeImg from "../assets/slider.jpg";
import BestServiceSection from "../components/BestServiceSection";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import CountersOnly from "../components/CountersOnly";
import FaqSection from "../components/Faq";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const testimonials = [
    {
      name: "Ravi Kumar",
      position: "Business Owner",
      text: "3K ARYAN Infotech ki wajah se mera local business online grow kar gaya. Unki digital marketing strategy ne mujhe naye customers tak pahunchaya. Bahut hi helpful team hai!",
      stars: 5,
    },
    {
      name: "Anjali Sharma",
      position: "Freelancer",
      text: "Mujhe ek professional logo chahiye tha apne brand ke liye, aur 3K ARYAN Infotech ne sirf 2 din mein design deliver kar diya. Design classy bhi tha aur affordable bhi.",
      stars: 4,
    },
    {
      name: "Rahul Verma",
      position: "Startup Founder",
      text: "Hamare startup ke liye unhone pura branding package ready kiya – graphic designing se leke SEO tak. 3K ARYAN team ne full support diya. Dil se thank you!",
      stars: 5,
    },
    {
      name: "Simran Singh",
      position: "Fashion Store Owner",
      text: "Mujhe online dikhna tha aur logo nahi tha. 3K ARYAN Infotech ne mujhe ek stunning logo diya aur Instagram marketing bhi setup kiya. Result aaj tak mil raha hai.",
      stars: 5,
    },
  ];

  const audienceHighlights = [
    {
      title: "Students",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/9-1.png",
    },
    {
      title: "Working Professionals",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/10-1.png",
    },
    {
      title: "Freelancer",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/11-1.png",
    },
  ];
  const audienceItems = [
    {
      title: "Career Shifters",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/12-1.png",
    },
    {
      title: "Parents",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/13-1.png",
    },
    {
      title: "Dreamers",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/14-1.png",
    },
  ];


  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>
          3K Aryan Infotech | Best IT, Marketing & Training Company in Bihar
        </title>
        <meta
          name="description"
          content="Discover 3K Aryan Infotech – Bihar's top-rated IT company for website development, digital marketing, graphic design, and practical career training in Patna."
        />
        <meta
          name="keywords"
          content="IT company in Patna, digital marketing company in Bihar, website development in Patna, IT training in Patna"
        />
      </Helmet>

      <section className="relative w-full ">
        <img
          src={HomeImg}
          alt="Home banner"
          className="w-full h-auto object-cover"
        />
      </section>
      <BestServiceSection />
      {/* <section className="w-full flex justify-center bg-white py-10 px-4">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Transform Your Career With
          </h2>
        </div>
      </section>
      <section className="w-full bg-white py-10 px-4 flex justify-center">
        <div className="max-w-4xl w-full text-center space-y-6">
          <TypingText />
          <h4 className="text-lg md:text-xl font-medium">
            <strong className="text-2xl text-blue-950">40,000+</strong> learners
            already have! When will you?
          </h4>
          <NavLink
            to="/courses"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Find the right program for you
          </NavLink>
        </div>
      </section> */}
      {/* <CopyServices/> */}
      {/* about section */}

      <section className="w-full py-20 px-4 md:px-12 lg:px-24 bg-white text-blue-950">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="absolute -bottom-0 -right-0 p-8 text-2xl md:text-3xl font-bold text-orange-600 bg-blue-950 text-center rounded shadow">
              <span>9+</span>
              <p className="text-xs text-white mt-1">Years of Experience</p>
            </div>
            <img
              src="https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/about-3.png"
              alt="About us illustration"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full"
          >
            <p className="text-orange-500 font-semibold mb-2">
              [ About 3K ARYAN INFOTECH ]
            </p>
            <h3 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
              Providing technology for smart IT solutions
            </h3>
            <p className="mb-6 text-gray-600">
              The best way is to develop and follow a plan. Start with your
              goals in mind and then work backwards to develop the plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> Technology
                  Consultancy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> We Provide Best
                  Services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> Maintenance And
                  Support
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> 230+ Successful
                  Projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> Professional
                  Engineers Provide
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span> Requirements
                  Gathering
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <NavLink
                to="/about-us"
                className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 60 60"
                >
                  <path
                    fill="currentColor"
                    d="M154.116,71.209L114,111.326,118.744,116,158.86,75.954c-0.435,12.323,4.215,19.747,10.466,25.255L174,96.535c-9.986-8.874-12.553-24.631,0-35.791L169.326,56C159.14,67.789,143,67.056,133.535,56l-4.675,4.744C133.793,66.4,141.172,71.822,154.116,71.209Z"
                    transform="translate(-114 -56)"
                  ></path>
                </svg>
                About Us
              </NavLink>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call Us Now</h4>
                  <p className="text-sm text-gray-600">+91 7091060239</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <section className="flex justify-center align-center">
        <h1 className="md:text-4xl text-xl text-center font-bold">
          3K ARYAN INTERNSHIP PROGRAM
        </h1>
      </section>
      <div>
        <TabbedPrograms />
      </div> */}
      <CountersOnly />
      <div className="flex flex-col justify-center items-center py-10 px-4">
        <h3 className="text-4xl font-bold text-center">
          Who is <span className="text-orange-500">3K ARYAN INFOTECH</span> For?
        </h3>
        <div className="w-2/12 h-0.5 bg-black mt-4"></div>
      </div>
      <div>
        <HighlightsGrid items={audienceHighlights} bg="white" />
      </div>
      <div>
        <HighlightsGrid items={audienceItems} bg="white" />
      </div>
      <div className="flex justify-center items-center bg-white py-10 px-4">
        <h3 className="text-4xl font-bold pb-4">Why 3K ARYAN INFOTECH?</h3>
      </div>
      <div>
        <LearningHighlights />
        <HighlightsSection />
      </div>
      <FaqSection />
      <section className="bg-gray-100 py-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-orange-500 font-semibold uppercase">
            [ Testimonials ]
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Read what Our Client say about work
          </h2>
          <p className="text-gray-600 mt-4">
            The best way is to develop and follow a plan. Start with your goals
            in mind and then work backwards to develop the plan. What steps are
            required to get you to the goals.
          </p>
        </motion.div>

        {/* Mini Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto mt-12"
        >
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2024/08/avatar-1.jpg"
              alt="avatar-1"
            />
            <img
              className="w-12 h-12 rounded-full"
              src="https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2024/08/avatar-2.jpg"
              alt="avatar-2"
            />
            <img
              className="w-12 h-12 rounded-full"
              src="https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2024/08/avatar-4.jpg"
              alt="avatar-4"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gray-900">1,000+</span>
            <p className="text-gray-700">Client Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700">
              Customers are Satisfied with the Technology Services.
            </p>
            <p className="text-3xl font-bold text-orange-500">4.5</p>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center mb-3 text-yellow-400">
                {[...Array(item.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - item.stars)].map((_, i) => (
                  <FaStar key={`empty-${i}`} className="text-gray-300" />
                ))}
              </div>
              <div className="text-orange-500 text-xl mb-2">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 mb-4">{item.text}</p>
              <h6 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h6>
              <span className="text-sm text-gray-500">{item.position}</span>
            </motion.div>
          ))}
        </div>
      </section>
      <section className=" py-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-orange-500 font-semibold uppercase">
            [ Contact Us ]
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            Need assistance? Please fill the form
          </h3>
          <p className="text-gray-600 mt-4">
            So, make the decision to move forward. Commit your decision to
            paper, just to bring it into focus. Then, go for it!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h5 className="text-xl font-semibold text-gray-800">
                Head Office
              </h5>
              <p className="text-gray-600">
                Rd Number 5, near rkd college ram bhavan ke, opposite Wali gali,
                RMS Colony, Ashok Nagar, Kankarbagh, Patna, Bihar 800020
              </p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <BiPhoneCall className="text-orange-500" /> +91 7091060239
                </p>
                <p className="flex items-center gap-2">
                  <BiEnvelope className="text-orange-500" />{" "}
                  infoaman@3karyaninfotech.in
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14393.862652952037!2d85.1435822!3d25.5894382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5880ea13fe49%3A0x4dbc54fff3d784f1!2sKaryan%20infotech!5e0!3m2!1sen!2sin!4v1751278689007!5m2!1sen!2sin"
                title="3K ARYAN Infotech Location"
                className="w-full h-[450px] border-0"
                allowFullScreen
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              Please Fill In The Information Below
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                placeholder="Company / Organization about*"
                rows="3"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <textarea
                placeholder="Write a Message"
                rows="4"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
