import React from "react";
import TypingText from "../components/TypingText";
import TabbedPrograms from "../components/TabbedPrograms";
import LearningHighlights from "../components/LearningHighlights";
import HighlightsSection from "../components/HighlightsSection";
import HighlightsGrid from "../components/HighlightsGrid";
import HomeImg from '../assets/internship.png'

const Home = () => {
  const audienceHighlights = [
    {
      title: "Students",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/9-1.png",
    },
    {
      title: "Working Professionals",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/10-1.png",
    },
    {
      title: "Freelancer",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/11-1.png",
    },
  ];
  const audienceItems = [
    {
      title: "Career Shifters",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/12-1.png",
    },
    {
      title: "Parents",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/13-1.png",
    },
    {
      title: "Dreamers",
      description: "Focused training designed to deliver measurable success.",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/14-1.png",
    },
  ];

  return (
    <div>
      <section className="w-full flex justify-center items-center bg-white">
        <img src={HomeImg} alt="" />
        <div className="max-w-4xl text-center absolute text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            India’s <span className="text-orange-600">No.1 Platform for</span>{" "}
            Digital Services &amp; 
            <br />
            Practical Education
          </h2>
        </div>
      </section>
      <section className="w-full flex justify-center bg-white py-10 px-4">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Transform Your Career With
          </h2>
        </div>
      </section>
      <section className="w-full bg-white py-10 px-4 flex justify-center">
        <div className="max-w-4xl w-full text-center space-y-6">
          <TypingText />

          <h4 className="text-lg md:text-xl font-medium">
            <strong className="text-2xl text-black">40,000+</strong> learners
            already have! When will you?
          </h4>

          <a
            href="https://zinmatt.com/course"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Find the right program for you
          </a>
        </div>
      </section>
      <section className="flex justify-center align-center">
        <h1 className="md:text-4xl text-xl text-center font-bold">KARYAN's INTERNSHIP PROGRAM</h1>
      </section>
      <div>
        <TabbedPrograms />
      </div>
      <div className="flex justify-center items-center bg-white py-10 px-4">
        <h3 className="text-4xl font-bold pb-4">Why Karyan?</h3>
      </div>
      <div>
        <LearningHighlights />
        <HighlightsSection />
      </div>
      <div className="flex flex-col justify-center items-center py-10 px-4">
        <h3 className="text-4xl font-bold text-center">
          Who is <span className="text-orange-500">KARYAN</span> For?
        </h3>
        <div className="w-2/12 h-0.5 bg-black mt-4"></div>
      </div>
      <div>
        <HighlightsGrid items={audienceHighlights} bg="white" />
      </div>
      <div>
        <HighlightsGrid items={audienceItems} bg="white" />
      </div>
    </div>
  );
};

export default Home;
