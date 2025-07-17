import React from "react";
import { BadgeCheck, FileCheck2, Users, BookOpenCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const plans = [
  {
    name: "Basic",
    duration: "2 Month",
    features: [
      "Photoshop Basics",
      "Canva Pro",
      "Post Design (Reels, Ads)",
      "1 Portfolio Project",
    ],
  },
  {
    name: "Advanced",
    duration: "4 Months",
    features: [
      "Illustrator Basics",
      "Banner, Logo, Branding",
      "Motion Graphics Intro",
      "2 Projects + Review",
    ],
  },
  {
    name: "Pro",
    duration: "6 Months",
    features: [
      "Full Adobe Suite",
      "Social Media Pack",
      "Portfolio + Internship Letter",
      "Freelancing Guide",
    ],
  },
];
const GraphicDesigningSection = () => {
  return (
    <section className="bg-zinc-50 text-blue-950 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            Master Graphic Designing with KIEC 🎨
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-lg">
            Unleash your creativity with industry-level tools and design
            principles. Learn from professionals, build an impressive portfolio,
            and become a certified Graphic Designer in 4-6 months.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto my-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-6">
            Watch Demo Class 🎥
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-MRtam8iiic?si=KpbVQNBrhUSBGaHr&controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* Tools You’ll Learn */}
        <div>
          <h3 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
            Industry Tools You'll Master
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Adobe Photoshop",
              "Adobe Illustrator",
              "CorelDRAW",
              "Figma",
              "Canva Pro",
              "Lightroom",
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition transform"
              >
                <h4 className="text-lg font-semibold text-zinc-800">{tool}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Overview */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Graphic Designing Syllabus Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-zinc-700">
            <ul className="space-y-2 list-disc list-inside">
              <li>Design Principles & Typography</li>
              <li>Color Theory & Branding</li>
              <li>Photoshop Basics to Advanced</li>
              <li>Logo Design, Mockups, Posters</li>
              <li>Social Media Creatives</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Illustrator for Vector Design</li>
              <li>Layout Design (Magazine, Flyers)</li>
              <li>Portfolio Building</li>
              <li>Figma UI/UX Basics</li>
              <li>Project 1: Brand Identity Design</li>
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
            🎨 Graphic Designing Course
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
                        href={`https://wa.me/917091060239?text=I'm%20interested%20in%20your%20${plan.name}%20Graphic%20Designing%20course`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center hover:bg-orange-300 bg-orange-200 rounded-lg w-1/2 py-2 px-2"
                      >
                        <FaWhatsapp size={22} className=" text-green-500"/> <span className="text-lg font-semibold text-blue-950">Enroll Now</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center">
            <BadgeCheck className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              Certificate of Completion
            </h3>
            <p className="text-zinc-600 max-w-sm">
              Receive a government-recognized certificate validating your
              skills.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <BookOpenCheck className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">Project-Based Learning</h3>
            <p className="text-zinc-600 max-w-sm">
              Complete 4+ real-world design projects during the course.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">1-on-1 Mentorship</h3>
            <p className="text-zinc-600 max-w-sm">
              Get expert guidance & feedback from professionals in the field.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FileCheck2 className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">Job Preparation Support</h3>
            <p className="text-zinc-600 max-w-sm">
              Resume building, interview prep & portfolio reviews for placement
              readiness.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 bg-orange-50 p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-zinc-700">
            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-orange-500">
              <p>
                "KIEC’s Graphic Design course helped me land a freelance job
                just 2 months in. The projects & mentors are incredible!"
              </p>
              <p className="mt-2 font-bold text-orange-500">— Aditi Sharma</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-orange-500">
              <p>
                "As someone from a non-design background, I loved the structure
                and support. Now I run my own design page on Instagram!"
              </p>
              <p className="mt-2 font-bold text-orange-500">— Ravi Raj</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            Ready to Design Your Future?
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Enroll today and become a professional Graphic Designer with KIEC.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/917091060239?text=Hi%20KIEC%2C%20I%20want%20to%20know%20more%20about%20Graphic%20Designing%20Course"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:contact@kiec.3karyaninfotech.in"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigningSection;
