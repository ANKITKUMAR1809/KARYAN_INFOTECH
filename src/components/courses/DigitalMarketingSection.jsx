import React from "react";
import {
  Users,
  Rocket,
  Globe,
  LineChart,
  Megaphone,
  BadgeCheck,
  BookOpenCheck,
  Briefcase,
  TrendingUp,
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
      "Intro to Digital Marketing",
      "SEO, SMM Basics",
      "Google Tools",
      "1 Live Project",
      "Certificate",
    ],
  },
  {
    name: "Advanced",
    duration: "4 Months",
    features: [
      "Everything in Basic",
      "Email Marketing",
      "Paid Ads",
      "2 Live Projects",
      "Interview Prep",
    ],
  },
  {
    name: "Pro",
    duration: "6 Months",
    features: [
      "Everything in Advanced",
      "Google Ads",
      "Affiliate Marketing",
      "Internship Letter",
    ],
  },
];
const DigitalMarketingSection = () => {
  return (
    <section className="bg-zinc-50 text-blue-950 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
            Master Digital Marketing at KIEC 🎯
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-lg">
            Become a certified Digital Marketer in 3-5 months. Learn SEO, SEM,
            Social Media, Analytics, Copywriting and work on real-world
            campaigns with industry experts.
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

        {/* Course Features - Glassmorphism Cards */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-12">
            What You'll Learn
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 mb-3" />,
                title: "SEO & SEM",
                desc: "Learn how to rank websites & run Google Ads campaigns.",
              },
              {
                icon: <Megaphone className="w-8 h-8 mb-3" />,
                title: "Social Media Marketing",
                desc: "Grow brands using Instagram, Facebook, and LinkedIn.",
              },
              {
                icon: <LineChart className="w-8 h-8 mb-3" />,
                title: "Google Analytics",
                desc: "Track, analyze, and optimize user behavior.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 mb-3" />,
                title: "Performance Marketing",
                desc: "Run ROI-driven ads on Meta, YouTube, and more.",
              },
              {
                icon: <BookOpenCheck className="w-8 h-8 mb-3" />,
                title: "Copywriting & Funnels",
                desc: "Write copy that converts and build sales funnels.",
              },
              {
                icon: <Users className="w-8 h-8 mb-3" />,
                title: "Influencer & Email Marketing",
                desc: "Build lasting connections and loyal customers.",
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

        {/* Detailed Syllabus */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Digital Marketing Course Syllabus Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-zinc-700">
            <ul className="space-y-2 list-disc list-inside">
              <li>Introduction to Digital Marketing</li>
              <li>Search Engine Optimization (On-page & Off-page)</li>
              <li>Google Search Console & Analytics</li>
              <li>Keyword Research & Competitor Analysis</li>
              <li>Search Engine Marketing - Google Ads</li>
              <li>Social Media Marketing - Facebook, Instagram, LinkedIn</li>
              <li>Content Marketing & Blogging</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email Marketing with Mailchimp</li>
              <li>Influencer Marketing Strategy</li>
              <li>Lead Generation Techniques</li>
              <li>Copywriting for Ads & Landing Pages</li>
              <li>WhatsApp & Telegram Marketing</li>
              <li>Affiliate Marketing & Freelancing</li>
              <li>3 Live Projects + Weekly Assignments</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="p-4 md:p-8 bg-white text-blue-950"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
            📈 Digital Marketing Course
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
                        href={`https://wa.me/917091060239?text=I'm%20interested%20in%20your%20${plan.name}%20Digital%20Marketing%20course`}
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

        {/* Certification & Career */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: (
                <BadgeCheck className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Verified Certification",
              desc: "Industry-recognized certificate from KIEC.",
            },
            {
              icon: (
                <Briefcase className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Placement Support",
              desc: "Job referrals, resume help & interview prep.",
            },
            {
              icon: (
                <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Hands-on Projects",
              desc: "Work on 3+ live marketing campaigns.",
            },
            {
              icon: (
                <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Mentorship",
              desc: "1-on-1 sessions with digital marketing mentors.",
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
            Hear From Our Students
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-zinc-800">
            {[
              {
                name: "Aman Verma",
                review:
                  "I landed a job as a Digital Marketing Executive within a month of completing this course! KIEC’s mentors were extremely helpful.",
                rating: 5,
              },
              {
                name: "Neha Sharma",
                review:
                  "From SEO to Meta Ads, everything was covered practically. Real campaigns helped me build my confidence.",
                rating: 5,
              },
              {
                name: "Rahul Raj",
                review:
                  "The certificate and internship opportunity made my resume stand out. Definitely worth it!",
                rating: 4.5,
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

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            Ready to Dominate Digital Marketing?
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-lg">
            Join KIEC’s most practical & job-oriented Digital Marketing Course
            today.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">
            Start Learning Today
          </button>
        </div>

        {/* Contact Help */}
        <div className="bg-white border border-orange-100 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4">
          <MessageCircleMore className="text-orange-500 w-10 h-10" />
          <h4 className="text-xl font-bold text-zinc-800">
            Need Help or Have Questions?
          </h4>
          <p className="text-zinc-600 max-w-md">
            Contact us via WhatsApp or email. We’re always ready to assist you
            with career guidance, curriculum queries, or fee structure.
          </p>
          <button className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition">
            Talk to Counselor
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        <a
          href="https://wa.me/917091060239?text=Hi%20KIEC%2C%20I%20want%20to%20know%20more%20about%20Digital%20Marketing%20Course"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <i className="fab fa-whatsapp"></i> Chat on WhatsApp
        </a>

        <a
          href="mailto:contact@kiec.3karyaninfotech.in?subject=Digital%20Marketing%20Course%20Inquiry"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <i className="fas fa-envelope"></i> Send Email
        </a>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
