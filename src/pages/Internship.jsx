import React from "react";
import Certificate from "../assets/internship/certificate.jpg";
import { useNavigate } from "react-router-dom";
const Internship = () => {
  const navigate = useNavigate();
  const internshipData = [
    {
      title: "Technology",
      subtitle: "BASED INTERNSHIP",
      items: [
        "Frontend Internship",
        "Backend Internship",
        "Full Stack Internship",
        "C Internship",
        "C++ Internship",
        "Java Internship",
        "Python Internship",
        "Graphics Internship",
        "Web Development Internship",
        "Digital Marketing Internship",
      ],
    },
    {
      title: "Course",
      subtitle: "BASED INTERNSHIP",
      items: [
        "B.Sc. (IT) Internship",
        "B.E. Internship",
        "B.Tech. Internship",
        "Engineering Internship",
        "BCA Internship",
        "BBA Internship",
        "MCA Internship",
        "MBA Internship",
      ],
    },
    {
      title: "Duration",
      subtitle: "BASED INTERNSHIP",
      items: [
        "Two Weeks Internship",
        "Four Weeks Internship",
        "Six Weeks Internship",
        "Eight Weeks Internship",
        "Three Months Internship",
        "Four Months Internship",
        "Six Months Internship",
        "Nine Months Internship",
        "One Year Internship",
      ],
    },
    {
      title: "Special",
      subtitle: "INTERNSHIP",
      items: [
        "Summer Internship",
        "Winter Internship",
        "First Year Internship",
        "Second Year Internship",
        "Final Year Internship",
      ],
    },
  ];

  return (
    <>
      {/* Top Banner Image */}
      <div className="bg-gradient-to-l from-black to-orange-500 flex flex-col md:flex-row justify-around items-center px-6 py-12 gap-8 md:gap-0">
        <div className="relative w-full md:w-auto h-60 md:h-80">
          <img
            src={Certificate}
            alt="Certificate"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            💡{" "}
            <span className="text-orange-300 font-bold">
              Ready to shine in the tech world?
            </span>
            <br />
            Join our{" "}
            <span className="text-orange-300 font-bold">
              exclusive internship program
            </span>{" "}
            and gain hands-on experience with real-world projects.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Learn directly from industry experts, build a powerful portfolio,
            and earn a
            <span className="text-orange-200 font-semibold">
              {" "}
              certificate that sets you apart.
            </span>
            <br />
            No matter your skill level, we’ll help you grow into a confident
            developer!
          </p>
          <p className="mt-4 text-lg md:text-xl font-bold text-orange-100">
            🌟 Start your journey with us — learn, build, and get certified!
          </p>
        </div>
      </div>

      <section className="bg-white py-16 px-6 md:px-16 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Internship in Bihar —
              <span className="text-orange-500">
                {" "}
                3K ARYAN Infotech Education Centre
              </span>
            </h1>
          </div>

          <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              <strong className="text-orange-500 font-semibold">
                3K ARYAN Infotech
              </strong>{" "}
              has gained a trustworthy reputation among the{" "}
              <strong className="text-orange-500 font-semibold">
                top Internship Services Providing Companies in Patna Bihar
              </strong>
              .
            </p>

            <p>
              We provide internships in a wide range of{" "}
              <strong className="text-orange-500 font-semibold">
                Software Development Technologies
              </strong>{" "}
              such as:{" "}
              <span className="block mt-2 font-medium text-gray-800">
                PHP, MySQL, C, C++, C#, Java, JSP, ASP, .NET, Python, MVC,
                Android, SQL, Oracle, etc.
              </span>
            </p>

            <p>
              The company also offers hands-on training in{" "}
              <strong className="text-orange-500 font-semibold">
                ASP.NET, WPF/WCF, Joomla, Wordpress, HTML, XML, CSS, JavaScript
              </strong>{" "}
              with live project experience.
            </p>

            <p>
              Internship durations range from 2 weeks to 24 months, with special{" "}
              <strong className="text-orange-500 font-semibold">
                4-week and 6-week Summer & Winter Internship Programs
              </strong>{" "}
              available.
            </p>

            <p>
              <strong className="text-orange-500 font-semibold">
                3K ARYAN Infotech
              </strong>{" "}
              is widely recognized as a leading{" "}
              <strong className="text-orange-500 font-semibold">
                Internship Program Institute Company in Patna
              </strong>
              , and each successful intern receives an official{" "}
              <strong className="text-orange-500 font-semibold">
                Internship Certificate
              </strong>{" "}
              upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Categories Grid Section */}
      <div className="w-full bg-zinc-100 px-6 md:px-10 lg:px-14 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-orange-500 mb-12 leading-tight">
          JOIN THE BEST INTERNSHIP COMPANY IN PATNA BIHAR !!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {internshipData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-500 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-orange-500 text-white p-6 text-center rounded-t-xl">
                <h2 className="text-2xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm opacity-90">{section.subtitle}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="py-2 px-4 rounded-md hover:bg-orange-100 transition-colors duration-200 cursor-pointer text-gray-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md"
                    onClick={() => navigate("/apply")}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Internship;
