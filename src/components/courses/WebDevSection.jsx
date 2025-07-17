import React from "react";
import {
  Code2,
  Laptop,
  BadgeCheck,
  Briefcase,
  FileCheck2,
  BookOpenCheck,
  Users,
  Rocket,
  BrainCircuit,
  School,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const websiteCourses = [
  {
    track: "PHP Stack",
    plans: [
      {
        name: "Basic",
        duration: "2 Month",
        features: [
          "HTML, CSS, JS",
          "Bootstrap",
          "Hosting + Portfolio",
          "1 Project",
        ],
      },
      {
        name: "Advanced",
        duration: "4 Months",
        features: ["PHP & MySQL", "CRUD & Contact Form", "2 Projects"],
      },
      {
        name: "Pro",
        duration: "6 Months",
        features: [
          "Dynamic PHP Site",
          "Admin Panel",
          "Payment Gateway",
          "Internship Letter",
        ],
      },
    ],
  },
  {
    track: "MERN Stack",
    plans: [
      {
        name: "Basic",
        duration: "2 Month",
        features: ["HTML, CSS, Tailwind", "JS Basics", "1 Static Project"],
      },
      {
        name: "Advanced",
        duration: "6 Months",
        features: ["React + Routing", "Express + MongoDB", "2 Projects"],
      },
      {
        name: "Pro",
        duration: "8 Months",
        features: [
          "Full MERN Projects",
          "Auth + Dashboards",
          "Internship Letter",
        ],
      },
    ],
  },
];

const WebDevelopmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://server.3karyaninfotech.in/api/contact",
        formData
      );

      if (response.status === 201) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-zinc-50 text-blue-950 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
            Launch Your Career with Web Development at KIEC 🚀
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto text-lg">
            Learn MERN stack, build real-world projects, and become
            placement-ready in just 4-6 months with our expert-led program.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto my-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-6">
            Watch Our Demo Class 🎥
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wGunLNO-P4k?si=-D03BOl1Hgl17ybt"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-10">
            Full Stack Technologies Covered
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-zinc-700">
            {[
              "MERN Stack (MongoDB, Express, React, Node.js)",
              "PHP & MySQL",
              "Python & Django",
              "Java with Spring Boot",
              "HTML, CSS, JavaScript, Tailwind CSS",
              "Git, GitHub, Deployment, Netlify/Vercel",
            ].map((tech, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/10 border border-white/30
                 text-blue-950 p-6 rounded-xl shadow-lg text-center font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Overview */}
        <div className="bg-white p-10 rounded-3xl shadow-xl animate-fade-in-up">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            MERN Stack Syllabus Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-10 text-zinc-700">
            <ul className="space-y-2 list-disc list-inside text-left">
              <li>HTML5, CSS3, Flexbox, Grid, Responsive Design</li>
              <li>JavaScript (ES6+), DOM, Events, Fetch API</li>
              <li>React.js – Hooks, Routing, Context API, Redux</li>
              <li>Tailwind CSS & Bootstrap</li>
              <li>Project 1: Responsive Portfolio Website</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside text-left">
              <li>Node.js, Express.js, RESTful APIs</li>
              <li>MongoDB & Mongoose ORM</li>
              <li>Authentication (JWT, Sessions)</li>
              <li>Deployment (Render, Vercel, Netlify)</li>
              <li>Project 2: Full Stack Blog / E-commerce App</li>
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
            🌐 Website Designing Course
          </h2>

          {websiteCourses.map((course, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-950">
                {course.track}
              </h3>
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
                    {course.plans.map((plan, j) => (
                      <tr key={j} className="border-t border-gray-300">
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
                            href={`https://wa.me/917091060239?text=I'm%20interested%20in%20the%20${plan.name}%20${course.track}%20Web%20Designing%20course`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 justify-center hover:bg-orange-300 bg-orange-200 rounded-lg w-1/2 py-2"
                          >
                            <FaWhatsapp size={22} className=" text-green-500"/> <span className="text-lg font-semibold text-blue-950">Enroll Now</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Course Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-in-up bg-zinc-100 ">
          {[
            {
              icon: (
                <BadgeCheck className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Certificate of Completion",
              desc: "Government-verified certificate on course completion.",
            },
            {
              icon: (
                <Briefcase className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Placement Assistance",
              desc: "Resume building, mock interviews, and job referrals.",
            },
            {
              icon: (
                <BookOpenCheck className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Project-Based Learning",
              desc: "4+ real-world projects with expert mentorship.",
            },
            {
              icon: (
                <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              ),
              title: "Personal Mentorship",
              desc: "1-on-1 sessions to solve doubts and track progress.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              {item.icon}
              <h4 className="text-xl font-bold mb-2 text-zinc-800">
                {item.title}
              </h4>
              <p className="text-zinc-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bonus Info Section */}
        <div className="bg-orange-100 p-10 rounded-3xl text-center shadow-md">
          <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-orange-500 mb-2">Why Wait?</h3>
          <p className="text-zinc-700 max-w-3xl mx-auto text-lg">
            Thousands of students trust KIEC. Whether you're a beginner or
            switching careers, we guide you step by step.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-zinc-800">
            Ready to Become a Developer?
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-lg">
            Enroll in Bihar’s most advanced and practical Web Development
            Course.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-6" id="contact">
        <a
          href="https://wa.me/917091060239?text=Hi%20KIEC%2C%20I%20want%20to%20know%20more%20about%20Digital%20Marketing%20Course"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <i className="fab fa-whatsapp"></i> Chat on WhatsApp
        </a>

        <a
          href="mailto:contact@kiec.3karyaninfotech.in?subject=Website%Designing%20Course%20Inquiry"
          className="text-orange-500 hover:bg-orange-500 hover:text-white border-orange-500 border-2 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <i className="fas fa-envelope"></i> Send Email
        </a>
      </div>
      <div
        className="bg-white mt-10 p-10 rounded-3xl shadow-xl flex flex-col justify-center items-center"
        id="query"
      >
        <div className="my-6">
          <h2 className="text-orange-500 text-lg md:text-2xl text-center font-semibold">
            What you need is here?
          </h2>
        </div>
        <form className="space-y-4 md:w-1/2 w-full" onSubmit={handleSubmit}>
          {submitted ? (
            <p className="text-green-600 font-semibold text-center">
              ✅ Your message has been sent!
            </p>
          ) : (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                required
              />
              <input
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
