import React from "react";
import service from "../assets/service.jpg";
import { NavLink } from "react-router-dom";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { Code2, Rocket, Server } from "lucide-react";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full relative">
          <img src={service} alt="" className="w-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/60">
          <h2 className="text-xl md:text-5xl font-semibold text-center">
            Website Designing In Bihar
          </h2>
          <p className="mt-5">
            <NavLink to="/" className="text-orange-500 hover:underline">
              Home
            </NavLink>{" "}
            / Web-Development
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-24 bg-orange-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <p className="text-orange-500 font-semibold uppercase">
            [ Tech Stack ]
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            हम किस Technology से Website Design करते हैं?
          </h3>
          <p className="text-gray-600 mt-4">
            3K ARYAN INFOTECH में हम use करते हैं latest और robust technologies
            जैसे कि:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Code2 className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">MERN Stack</h4>
            <p className="text-gray-600">
              MongoDB, Express, ReactJS और NodeJS का इस्तेमाल करके हम बनाते हैं
              fast और scalable web apps.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Server className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">PHP & MySQL</h4>
            <p className="text-gray-600">
              Traditional लेकिन powerful stack PHP और MySQL का उपयोग करके भी हम
              secure websites develop करते हैं.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Rocket className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="text-xl font-semibold mb-2">Responsive UI/UX</h4>
            <p className="text-gray-600">
              TailwindCSS और Figma के साथ हम बनाते हैं modern, responsive और
              user-friendly interfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Work Progress Section */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-orange-500 font-semibold uppercase">
            [ Live Tracking ]
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            हम आपके Project को कैसे Handle करते हैं?
          </h3>
          <p className="text-gray-600 mt-4">
            जब आप अपना प्रोजेक्ट हमें देते हैं, हम उसे तुरंत एक temporary server
            (जैसे Vercel) पर live करते हैं, ताकि आप real-time changes देख सकें
            और कोई भी feedback तुरंत दे सकें.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            ✅ Real-time Preview
            <br />✅ Regular Updates on WhatsApp
            <br />✅ Aap jo chahein, wahi hoga! 😄
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-24">
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

export default WebDevelopment;
