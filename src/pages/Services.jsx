import React from "react";
import service from "../assets/service.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
const Services = () => {
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
  const testimonials = [
    {
      name: "John Doe",
      position: "Director",
      text: "So how do we get clarity? Simply by asking ourselves lots of questions: What do I really want? What does success look like to me? Why do I want a particular thing? How will this achievement change my life?",
      stars: 5,
    },
    {
      name: "Mellissa",
      position: "Doe Analyst",
      text: "The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question, responses will be superficial at best, and at worst, will be what someone else wants for them.",
      stars: 4,
    },
    {
      name: "Paul Flavius",
      position: "Coordinator",
      text: "Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion.",
      stars: 3,
    },
    {
      name: "Simon Cyrene",
      position: "Manager",
      text: "So how do we get clarity? Simply by asking ourselves lots of questions: What do I really want? What does success look like to me? Why do I want a particular thing? How will this achievement change my life?",
      stars: 5,
    },
  ];
  const followUps = [
    {
      icon: <FaInstagram />,
      title: "Instagram Services",
      description:
        "Instagram Followers, Instagram Likes, Instagram Views, & Other Instagram Services",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook Services",
      description:
        "Facebook Page Followers, Facebook Likes, Facebook Views, & Other Facebook Services",
    },
    {
      icon: <FaTwitter />,
      title: "X/Twitter Services",
      description:
        "X/Twitter Followers, X/Twitter Likes, X/Twitter Views, & Other X/Twitter Services",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn Services",
      description:
        "LinkedIn Followers, Post Likes, Post Views, & Other LinkedIn Services",
    },
    {
      icon: <FaYoutube />,
      title: "YouTube Services",
      description:
        "YouTube Subscribers, YouTube Likes, YouTube Views, & Other YouTube Services",
    },
    {
      icon: <FaTelegramPlane />,
      title: "Telegram Services",
      description:
        "Telegram Members, Post Views, Post Reactions, & Other Telegram Services",
    },
    {
      icon: <FaTiktok />,
      title: "TikTok Services",
      description:
        "TikTok Followers, TikTok Likes, TikTok Views, & Other TikTok Services",
    },
    {
      icon: <FaSpotify />,
      title: "Spotify Services",
      description:
        "Spotify Plays, Followers, Monthly Listeners, & Other Spotify Services",
    },
    {
      icon: <FaSpotify />,
      title: "Snapchat Services",
      description: "Snapchat Snap Score, Followers, & Other Snapchat Services",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Helmet>
        <title>
          Website, Marketing & Design Services | 3K Aryan Infotech, Bihar
        </title>
        <meta
          name="description"
          content="Explore all-in-one IT services from 3K Aryan Infotech – expert in website development, SEO, social media marketing, graphic design, and video editing in Patna."
        />
        <meta
          name="keywords"
          content="website design in Patna, digital marketing services Bihar, graphic design Patna, SEO company in Patna"
        />
      </Helmet>

      <section className="relative">
        <div className="w-full relative">
          <img src={service} alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text:xl md:text-5xl font-semibold">Services</h2>
          <p>
            <NavLink to="/" className="text-orange-500 hover:underline">
              Home
            </NavLink>{" "}
            / Services
          </p>
        </div>
      </section>
      <section>
        <div className="md:mt-20 mt-5 ">
          <h2 className="text-orange-500 text-md text-center">
            [OUR SERVICES]
          </h2>
          <p className="text-xl md:text-4xl font-semibold text-center mt-10 ">
            Exploring Buisness World <br></br> through Our Services
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
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {followUps.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 hover:bg-white shadow rounded-lg border border-gray-200"
              >
                <div className="text-3xl text-orange-500">{service.icon}</div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {service.title}
                  </p>
                  <small className="text-gray-600 text-sm">
                    {service.description}
                  </small>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/portfolio_03.jpg"
              alt="Why Choose Us"
              className="rounded-lg w-full shadow-lg"
            />

            <div className="absolute top-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                IT Solutions For The Modern Workplace.
              </h3>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="uppercase text-sm tracking-widest text-orange-500 font-medium">
                [ why choose 3K ARYAN ]
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                We Build Solutions for Your Growth
              </h2>
            </div>

            <p className="text-gray-700 text-base md:text-lg">
              A sleek and modern solution designed for IT companies, tech
              startups, and digital service providers. Fully responsive,
              SEO-optimized, and packed with features to help you build a strong
              and professional online presence.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {[
                {
                  label: "IT Solution & Management",
                  percent: 80,
                },
                {
                  label: "Development Experience",
                  percent: 90,
                },
                {
                  label: "SEO & Digital Marketing",
                  percent: 85,
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-800">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <NavLink
              to={"/about-us"}
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.5 3l1.41 1.41L8.83 11H20v2H8.83l7.08 7.09L14.5 21l-9-9z" />
              </svg>
              Discover More
            </NavLink>
          </motion.div>
        </div>
      </section>
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
    </>
  );
};

export default Services;
