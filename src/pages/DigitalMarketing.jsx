import React from "react";
import service from "../assets/service.jpg";
import { NavLink } from "react-router-dom";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { RocketIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <>
      <section className="relative">
        <div className="w-full relative">
          <img src={service} alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text:xl md:text-5xl font-semibold">
            Digital Marketing In Bihar
          </h2>
          <p>
            <NavLink to="/" className="text-orange-500 hover:underline">
              Home
            </NavLink>{" "}/ Digital-Marketing
          </p>
        </div>
      </section>

      {/* How We Help You Section */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            कैसे हम आपकी मदद करते हैं? (How We Help You)
          </h2>
          <p className="text-gray-600 mt-4">
            आपकी बिज़नेस ग्रोथ के लिए हम डिजिटल प्लेटफॉर्म्स पर आपकी ब्रांडिंग, आउटरीच और कस्टमर एंगेजमेंट बढ़ाते हैं।
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <UsersIcon className="text-orange-500 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Audience Reach</h4>
            <p className="text-gray-600">
              हम सही audience को target कर आपके ब्रांड को पहचान दिलाते हैं।
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <RocketIcon className="text-orange-500 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Brand Boost</h4>
            <p className="text-gray-600">
              सोशल मीडिया, गूगल और अन्य प्लेटफॉर्म्स पर ब्रांड की visibility बढ़ाते हैं।
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <TrendingUpIcon className="text-orange-500 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Lead Generation</h4>
            <p className="text-gray-600">
              Ads और organic methods से ज़्यादा leads और customers हासिल करें।
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            How We Do It (हम कैसे करते हैं?)
          </h2>
          <p className="text-gray-600 mt-4">
            हमारी टीम strategies बनाकर उन्हें execute करती है — transparency के साथ।
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-center">
          <p>✔️ Research करके आपकी niche और audience समझते हैं।</p>
          <p>✔️ High-converting content बनाते हैं और campaigns launch करते हैं।</p>
          <p>✔️ हर स्टेप पर आपकी रिपोर्टिंग और suggestions को शामिल किया जाता है।</p>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-6 md:px-24 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            हर स्टेप आपके साथ (Every Step With You)
          </h2>
          <p className="text-gray-600 mb-6">
            हम आपके project को live trackable बनाते हैं (जैसे Vercel पर temporary link) ताकि आप हर update देख सकें। कोई भी बदलाव तुरंत implement किया जा सकता है।
          </p>
          <p className="text-gray-700 font-medium">
            हम मानते हैं कि ग्राहक को उसके project की पूरी जानकारी और नियंत्रण होना चाहिए। यही transparency 3K ARYAN Infotech को अलग बनाती है।
          </p>
        </motion.div>
      </section>

      {/* Existing Contact Form Section */}
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
                  <BiEnvelope className="text-orange-500" />
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

export default DigitalMarketing;