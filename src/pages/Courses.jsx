import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import WebDevSection from "../components/courses/WebDevSection";
import DigitalMarketingSection from "../components/courses/DigitalMarketingSection";
import GraphicDesigningSection from "../components/courses/GraphicDesigningSection";
import VideoEditingSection from "../components/courses/VideoEditingSection";
import { Helmet } from "react-helmet-async";
const Courses = () => {
  // State to manage the selected course

  const ourCourses = [
    "Web Development",
    "Digital Marketing",
    "Graphic Designing",
    "Video Editing",
  ];
  const [courses, setCourses] = useState(ourCourses[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title>
          IT Training in Patna | Photoshop, Video Editing & Marketing Courses
        </title>
        <meta
          name="description"
          content="Join skill-based IT courses at 3K Aryan Infotech – Photoshop, video editing, and digital marketing training with demo classes & real project guidance in Patna."
        />
        <meta
          name="keywords"
          content="Photoshop course Patna, video editing training Bihar, digital marketing training Patna, demo class in Patna"
        />
      </Helmet>

      <nav className="md:bg-gradient-to-r from-black to-orange-500 text-white p-4 flex md:flex-row flex-col justify-between items-center">
        <div
          className={
            " md:flex md:flex-row flex-col justify-center items-center gap-4" +
            (isDropdownOpen ? " flex" : " hidden")
          }
        >
          {ourCourses.map((course, index) => (
            <button
              key={course}
              className={`text-orange-500 font-semibold transition-all duration-200 ${
                courses === course ? "text-xl" : "text-lg md:text-white"
              }`}
              onClick={() => setCourses(course)}
            >
              {course}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {isDropdownOpen ? (
                <X className="text-blue-950 w-8 h-8" />
              ) : (
                <Menu className="text-blue-950 w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {courses === ourCourses[0] && <WebDevSection />}
      {courses === ourCourses[1] && <DigitalMarketingSection />}
      {courses === ourCourses[2] && <GraphicDesigningSection />}
      {courses === ourCourses[3] && <VideoEditingSection />}
    </div>
  );
};

export default Courses;
