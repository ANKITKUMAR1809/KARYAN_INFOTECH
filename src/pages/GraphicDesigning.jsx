import React from "react";
import service from "../assets/service.jpg";
import { NavLink } from "react-router-dom";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { PaletteIcon, Wand2Icon, LayoutTemplateIcon, PhoneCallIcon, MessageCircleIcon } from "lucide-react";
const GraphicDesigning = () => {
  return (
    <>
      <section className="relative">
        <div className="w-full relative">
          <img src={service} alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text:xl md:text-5xl font-semibold">
            Graphic Designing In Bihar
          </h2>
          <p>
            <NavLink to="/" className="text-orange-500 hover:underline">
              Home
            </NavLink>{" "}
            / Graphic-Designing
          </p>
        </div>
      </section>
      
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800">हम क्या Use करते हैं? (What We Use)</h2>
          <p className="text-gray-600 mt-4">
            हम latest designing tools और platforms का उपयोग करते हैं जिससे आपके designs दिखें सबसे modern और impactful।
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <PaletteIcon className="text-orange-500 w-10 h-10 mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Adobe Suite</h4>
            <p className="text-gray-600">Photoshop, Illustrator, InDesign से creatives बनाते हैं।</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Wand2Icon className="text-orange-500 w-10 h-10 mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Figma / Canva</h4>
            <p className="text-gray-600">Quick design mockups और social graphics.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <LayoutTemplateIcon className="text-orange-500 w-10 h-10 mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Modern Templates</h4>
            <p className="text-gray-600">Latest trends और designs का ध्यान रखते हैं।</p>
          </motion.div>
        </div>
      </section>

      {/* How We Do Section */}
      <section className="py-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800">हम कैसे काम करते हैं? (How We Do)</h2>
          <p className="text-gray-600 mt-4">
            क्लाइंट से discussion करके हर element को attention के साथ design करते हैं — आपकी branding को ध्यान में रखते हुए।
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto space-y-4 text-gray-700">
          <p>✔️ Brief और purpose समझना</p>
          <p>✔️ Sketch और mockup बनाना</p>
          <p>✔️ Final design approval के बाद delivery</p>
        </div>
      </section>

      {/* How We Help You Section */}
      <section className="py-20 px-6 md:px-24 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800">कैसे हम आपकी मदद करते हैं? (How We Help You)</h2>
          <p className="text-gray-600 mt-4">
            Logo, brochures, banners, business cards या social media creatives — हर एक चीज़ में perfection और uniqueness हमारी पहचान है।
          </p>
        </motion.div>
      </section>

      {/* Ek Call & Message Distance */}
      <section className="py-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800">बस एक कॉल और मैसेज की दूरी पर</h2>
          <p className="text-gray-600 mt-4">हमारी creative टीम से जुड़िए और अपने brand को एक नयी पहचान दीजिए।</p>
          <div className="flex justify-center gap-6 mt-6 text-orange-500 text-xl">
            <a href="tel:+917091060239" className="flex items-center gap-2 hover:underline">
              <PhoneCallIcon /> Call Us
            </a>
            <a href="mailto:infoaman@3karyaninfotech.in" className="flex items-center gap-2 hover:underline">
              <MessageCircleIcon /> Message Us
            </a>
          </div>
        </motion.div>
      </section>


      {/* contact section starts here */}
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

export default GraphicDesigning;
