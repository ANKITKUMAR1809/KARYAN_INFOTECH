import React from "react";
import {
  Scissors,
  Video,
  Music,
  Palette,
  BadgeCheck,
  Briefcase,
  Rocket,
  Users,
  Star,
  MessageCircleMore,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    duration: "2 Month",
    features: [
      "Intro to Video Editing",
      "Premiere Pro / CapCut Basics",
      "Transitions, Text, Music",
      "1 Short Project",
      "Certificate",
    ],
  },
  {
    name: "Advanced",
    duration: "4 Months",
    features: [
      "Everything in Basic",
      "Color Grading & Sound Design",
      "Motion Graphics (AE Intro)",
      "2 Client-style Projects",
      "Portfolio Review",
    ],
  },
  {
    name: "Pro",
    duration: "6 Months",
    features: [
      "Full Adobe Suite (PR + AE)",
      "Cinematic Editing + Reels",
      "Wedding & Travel Projects",
      "Internship Letter + Freelance Setup",
    ],
  },
];

const VideoEditingSection = () => {
  return (
    <section className="bg-zinc-50 text-blue-950 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
            Become a Pro Video Editor at KIEC 🎬
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-lg">
            Master video editing tools like Premiere Pro, After Effects, CapCut,
            and DaVinci Resolve. Create YouTube, Reels, Ads & more—100%
            practical!
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
              Enroll Now
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-full font-semibold shadow-sm transition">
              View Free Demo
            </button>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-12">
            What You'll Learn
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8 mb-3" />,
                title: "Editing Tools",
                desc: "Premiere Pro, CapCut, VN, DaVinci—learn fast & pro tools.",
              },
              {
                icon: <Scissors className="w-8 h-8 mb-3" />,
                title: "Cutting & Sequencing",
                desc: "Smooth cuts, storytelling transitions, timeline mastery.",
              },
              {
                icon: <Music className="w-8 h-8 mb-3" />,
                title: "Sound Design",
                desc: "Background score, SFX syncing, voice cleanup.",
              },
              {
                icon: <Palette className="w-8 h-8 mb-3" />,
                title: "Color Grading",
                desc: "Cinematic LUTs, skin tone correction, video mood setting.",
              },
              {
                icon: <Rocket className="w-8 h-8 mb-3" />,
                title: "Motion Graphics",
                desc: "Text animations, intros, logo reveals using AE.",
              },
              {
                icon: <Users className="w-8 h-8 mb-3" />,
                title: "Client & Freelance Projects",
                desc: "Wedding edits, reels, YouTube intros, ads.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-xl p-6 rounded-2xl text-zinc-800 text-center hover:scale-105 transition-all"
              >
                <div className="text-orange-500">{card.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-sm text-zinc-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Table */}
        <motion.div
          className="p-4 md:p-8 bg-white text-blue-950"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
            🎬 Video Editing Course Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-gray-100 rounded-md shadow">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="text-left p-3">Plan</th>
                  <th className="text-left p-3">Duration</th>
                  <th className="text-left p-3">Features</th>
                  <th className="text-left p-3">Enroll</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr key={i} className="border-t border-gray-300">
                    <td className="p-3 font-medium">{plan.name}</td>
                    <td className="p-3">{plan.duration}</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside space-y-1">
                        {plan.features.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3">
                      <a
                        href={`https://wa.me/917091060239?text=I'm%20interested%20in%20your%20${plan.name}%20Video%20Editing%20course`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center hover:bg-orange-300 bg-orange-200 rounded-lg w-1/2 py-2 px-2"
                      >
                        <FaWhatsapp size={22} className=" text-green-500" />{" "}
                        <span className="text-lg font-semibold text-blue-950">
                          Enroll Now
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Career Support */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: (
                <BadgeCheck className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Certification",
              desc: "Verified certificate after project completion.",
            },
            {
              icon: (
                <Briefcase className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Career Guidance",
              desc: "Resume support, job referrals, freelancing setup.",
            },
            {
              icon: (
                <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Real Projects",
              desc: "Reel editing, YouTube ads, wedding demo work.",
            },
            {
              icon: (
                <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "1-on-1 Mentorship",
              desc: "Feedback & doubt-solving directly from instructors.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {card.icon}
              <h4 className="text-lg font-bold mb-2">{card.title}</h4>
              <p className="text-sm text-zinc-600">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-orange-50 py-12 px-6 rounded-2xl">
          <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
            Student Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-zinc-800">
            {[
              {
                name: "Deepak Joshi",
                review:
                  "I started with zero knowledge and now I edit videos for influencers and brands. Best course with practical focus!",
                rating: 5,
              },
              {
                name: "Sneha Patel",
                review:
                  "Freelancing projects came right after the Pro plan. The support team is superb!",
                rating: 4.5,
              },
              {
                name: "Aarav Singh",
                review:
                  "Hands-on learning, real software, real projects. Portfolio helped me land my first editing job.",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-xl border border-white/30 p-6 rounded-xl shadow"
              >
                <div className="text-orange-500 mb-2">
                  <Star className="inline w-5 h-5" /> {t.rating} / 5
                </div>
                <p className="italic text-zinc-700">“{t.review}”</p>
                <div className="mt-3 font-semibold text-zinc-900">
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white border border-orange-100 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4">
          <MessageCircleMore className="text-orange-500 w-10 h-10" />
          <h4 className="text-xl font-bold text-zinc-800">
            Still have questions?
          </h4>
          <p className="text-zinc-600 max-w-md">
            Message us on WhatsApp and we’ll guide you with the best plan for
            your goals!
          </p>
          <a
            href="https://wa.me/917091060239?text=Hi%2C%20I'm%20interested%20in%20the%20Video%20Editing%20Course"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-600 transition"
          >
            Talk to Counselor on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoEditingSection;
