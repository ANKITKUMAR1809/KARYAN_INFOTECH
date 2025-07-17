import React from "react";
import service from "../assets/service.jpg";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Megaphone, UserCheck2, Eye, Rocket } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
  FaSpotify,
  FaSnapchatGhost,
} from "react-icons/fa";

const SocialMediaGainer = () => {
  return (
    <>
      <section className="relative">
        <div className="w-full relative">
          <img src={service} alt="Social Media Banner" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-xl md:text-5xl font-semibold">
            Social Media Gainer In Bihar
          </h2>
          <p>
            <NavLink to="/" className="text-orange-500 hover:underline">
              Home
            </NavLink>{" "}
            / Social-Media-Gainer
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-orange-500 font-semibold uppercase">
            [ Our Work Process ]
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            Social Media Growth के लिए Best Strategy
          </h3>
          <p className="text-gray-600 mt-4">
            हम आपके हर सोशल मीडिया प्लेटफॉर्म पर ट्रैफिक और फॉलोअर्स को बढ़ाने
            में मदद करते हैं – चाहे वो Instagram हो, Facebook, LinkedIn या
            YouTube. हम Organic और Authentic तरीके से आपकी Brand Visibility
            बढ़ाते हैं।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border rounded-lg shadow-md"
          >
            <Megaphone className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="font-semibold text-lg">Influencer Strategy</h4>
            <p className="text-gray-600 mt-2">
              Top influencers ke sath collaboration to reach wider audience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border rounded-lg shadow-md"
          >
            <UserCheck2 className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="font-semibold text-lg">Organic Growth</h4>
            <p className="text-gray-600 mt-2">
              Real engagement with no fake followers – आपकी credibility बनी रहती
              है।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border rounded-lg shadow-md"
          >
            <Eye className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="font-semibold text-lg">Realtime Monitoring</h4>
            <p className="text-gray-600 mt-2">
              Vercel पर live demo – आप हर step पर हमारा काम देख सकते हैं।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border rounded-lg shadow-md"
          >
            <Rocket className="mx-auto text-orange-500 mb-4" size={40} />
            <h4 className="font-semibold text-lg">Fast Results</h4>
            <p className="text-gray-600 mt-2">
              हम आपको 15 दिनों में visible result देना शुरू कर देते हैं।
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-24 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Grow Your <span className="text-orange-500">Fan Following</span>
          </h2>
          <p className="text-gray-600">
            Instagram ho, Facebook ho ya YouTube — hum aapko har platform pe
            grow karne mein madad karte hain.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaInstagram />,
              title: "Instagram Services",
              desc: "Instagram Followers, Likes, Views & More",
            },
            {
              icon: <FaFacebookF />,
              title: "Facebook Services",
              desc: "Page Followers, Likes, Views & More",
            },
            {
              icon: <FaTwitter />,
              title: "X/Twitter Services",
              desc: "Followers, Likes, Views & More",
            },
            {
              icon: <FaLinkedinIn />,
              title: "LinkedIn Services",
              desc: "Followers, Post Likes & Views",
            },
            {
              icon: <FaYoutube />,
              title: "YouTube Services",
              desc: "Subscribers, Likes, Views & More",
            },
            {
              icon: <FaTelegramPlane />,
              title: "Telegram Services",
              desc: "Members, Post Views & Reactions",
            },
            {
              icon: <FaTiktok />,
              title: "TikTok Services",
              desc: "Followers, Likes, Views & More",
            },
            {
              icon: <FaSpotify />,
              title: "Spotify Services",
              desc: "Plays, Followers, Listeners",
            },
            {
              icon: <FaSnapchatGhost />,
              title: "Snapchat Services",
              desc: "Snap Score, Followers & More",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="text-orange-500 text-3xl">{item.icon}</div>
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <small className="text-gray-600 text-sm">{item.desc}</small>
              </div>
            </div>
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
            Grow your presence – let us handle your social boost. हम आपकी
            Digital Branding को अगले लेवल तक ले जाएंगे।
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

export default SocialMediaGainer;
