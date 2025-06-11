import React from "react";
import { Users, BookOpen, MessageCircle, Group } from "lucide-react";

const features = [
  {
    title: "Live Classes",
    description: "Learn directly from experts in real-time interactive sessions.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/1-2.png",
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Practical Learning",
    description: "Apply what you learn instantly with hands-on training.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/2-2.png",
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Live Q&A",
    description: "Get your doubts cleared instantly by industry mentors.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/3-2.png",
    icon: <MessageCircle className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Community Access",
    description: "Be part of an active learner group to grow and collaborate.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/4-2.png",
    icon: <Group className="w-6 h-6 text-orange-500" />,
  },
];

const LearningHighlights = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-24 h-24 object-contain mb-4"
            />
            {/* Optional: show icon above image if needed */}
            {/* <div className="mb-3">{feature.icon}</div> */}

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningHighlights;
