import React, { useState } from "react";
import video from "../assets/video.png";
import webDev from "../assets/webDev.png";
import digitalMarketing from "../assets/digitalMarketing.png";
import graphic from "../assets/graphic.png";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "tab1",
    label: "Digital Marketing",
    image: digitalMarketing,
  },
  {
    id: "tab2",
    label: "Web Development",
    image: webDev,
  },
  {
    id: "tab3",
    label: "Video Editing",
    image: video,
  },
  {
    id: "tab4",
    label: "Graphic Designing",
    image: graphic,
  },
];

const TabbedPrograms = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full bg-white py-10 px-4">
      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 border-2 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-orange-600 text-white shadow-md border-orange-600"
                : "bg-white text-blue-950 border-black hover:bg-orange-500 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto text-center">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <div className="relative w-full">
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full rounded-2xl shadow-lg object-cover"
                />

                {/* Apply Now Button */}
                <div className="md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 flex justify-center mt-4 md:mt-0">
                  <Link
                    to="/apply"
                    className="bg-white text-blue-950 px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base border shadow hover:bg-gray-100 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabbedPrograms;
