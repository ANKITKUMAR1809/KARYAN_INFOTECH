import React from 'react';

const highlights = [
  {
    title: "Result Driven",
    description: "Focused training designed to deliver measurable success.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/5-2.png",
  },
  {
    title: "Mentor Support",
    description: "Personalized guidance at every step of your journey.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/6-2.png",
  },
  {
    title: "AI Integrated",
    description: "Master AI tools and stay ahead today.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/7-1.png",
  },
  {
    title: "Certification",
    description: "Receive Your Government Recognized Certificate Today.",
    image: "https://zinmatt.com/wp-content/uploads/2025/05/8-1.png",
  },
];

const HighlightsSection = () => {
  return (
    <section className="w-full bg-white  py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800  mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600  text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
