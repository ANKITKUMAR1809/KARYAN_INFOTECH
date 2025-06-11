import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import TimelineSection from "../components/TimelineSection";
import Roadmap from "../components/Roadmap";
const AboutUs = () => {
  return (
    <div>
      <section className="w-full bg-white dark:bg-black flex flex-col items-center relative">
        {/* Top Banner Image */}
        <img
          src="https://zinmatt.com/wp-content/uploads/2025/05/Indias-No-1-Digital-Marketing-Institute-1-1.png"
          alt="India's No.1 Digital Marketing Institute"
          className="w-full  mx-auto mb-8 object-contain"
        />

        {/* About Us Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white dark:text-white absolute top-1/2 transform -translate-y-1/2">
          About Us
        </h2>
      </section>

      <section className="w-full bg-white dark:bg-black py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Who we are?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Shaping Careers Through Real-World Training, One Learner at a Time.
          </p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-black py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              We are{" "}
              <span className="text-orange-600">
                India’s Fastest-Growing Practical EdTech
              </span>{" "}
              Platform.
            </h2>

            {/* Mobile Image */}
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/Advanced-Digital-Marketing-with-AI.png"
              alt="Karyan Infotech"
              className="block lg:hidden w-full h-auto"
            />

            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Empowering thousands of learners with{" "}
              <strong>100% free live training</strong>, Karyan Infotech blends
              expert-led guidance with real-world tools to deliver{" "}
              <strong>job-ready digital marketing skills</strong>.
              <br />
              Our mission? To make <strong>
                industry-relevant education
              </strong>{" "}
              accessible, affordable, and fully hands-on — preparing you to
              stand out, earn better, and lead confidently in the digital space.
            </p>

            <a
              href="#"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition"
            >
              Talk to Career Expert
            </a>
          </div>

          {/* Right Image (Hidden on Mobile) */}
          <div className="flex-1 hidden lg:block">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/Advanced-Digital-Marketing-with-AI.png"
              alt="Karyan Infotech"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4 bg-white text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          {/* Headings */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              LEARNER SUPPORT & SUCCESS
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold">
              What gives us
              <br />
              <span className="text-orange-500">an edge?</span>
            </h2>
          </div>

          {/* Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-sm font-medium"
          >
            <Phone size={18} />
            Get Started with KARYAN
          </Link>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full px-4">
            {[
              {
                highlight: "40,000+",
                subhead: "Students",
                desc: "Trusted by thousands who took the first step toward digital success",
              },
              {
                highlight: "20+",
                subhead: "Module",
                desc: "Comprehensive curriculum built for every marketing skill",
              },
              {
                highlight: "Hand-Holding",
                subhead: "Support",
                desc: "Personalized mentoring and guidance at every stage of your journey",
              },
              {
                highlight: "100%",
                subhead: "Internship",
                desc: "Real-world industry experience with guaranteed internship opportunities",
              },
              {
                highlight: "Job",
                subhead: "Assistance",
                desc: "Resume support, mock interviews, and direct hiring leads",
              },
              {
                highlight: "Result Oriented",
                subhead: "Sessions",
                desc: "Practical sessions designed to deliver measurable student outcomes",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md bg-white text-center transition hover:shadow-lg"
              >
                <div className="text-orange-500 text-xl font-bold">
                  {card.highlight}
                </div>
                <div className="text-lg font-semibold mt-2">{card.subhead}</div>
                <div className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-12 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Mission Box */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/1-4.png"
              alt="Zinmatt"
              className="w-40 h-40 object-contain mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower every learner with practical, job-ready digital
                skills by offering free, tool-based training programs in digital
                marketing, SEO, content writing, and more — regardless of their
                background or academic history.
              </p>
            </div>
          </div>

          {/* Vision Box */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/2-5.png"
              alt="Vision"
              className="w-40 h-40 object-contain mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become India’s most trusted career-building platform, where
                students not only learn but also gain the tools, mentorship, and
                industry access they need to build a successful digital future.
              </p>
            </div>
          </div>

          {/* Our Values Box */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/3-6.png"
              alt="Zinmatt"
              className="w-40 h-40 object-contain mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Zinmatt, we value accessibility, practical learning, and
                continuous support — empowering every learner with real tools,
                expert guidance, and job-ready skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-6xl font-semibold text-center">Our Journey</h3>
      </div>
      <div>
        <Roadmap />
      </div>

      <section className="w-full bg-gradient-to-br from-white to-orange-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/Untitled-design-12-1.png"
              alt="Mentor Illustration"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>

          {/* Center Content */}
          <div className="w-full lg:w-1/3 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
              Let’s Talk About Your Future.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our mentors are here to guide you through every step of your
              digital career. Whether you’re just starting out or planning your
              next move, we’ll help you choose the right path with expert
              training and tool access.
            </p>
            <a
              href="#"
              className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Connect With an Advisor
            </a>
          </div>

          {/* Right Image (hidden on mobile) */}
          <div className="w-full lg:w-1/3 hidden lg:block">
            <img
              src="https://zinmatt.com/wp-content/uploads/2025/05/Untitled-design-13-1.png"
              alt="Mentorship Graphic"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
