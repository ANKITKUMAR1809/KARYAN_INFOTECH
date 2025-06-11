import React from "react";
import { CheckCircle } from "lucide-react";

const TimelineCard = ({ year, title, points, image }) => {
  return (
    <div className="relative flex flex-col items-center text-left max-w-md w-full bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition duration-300">
      {/* Year Badge */}
      <div className="absolute -left-4 top-6 bg-orange-500 text-white font-semibold px-4 py-1 text-sm rounded-full shadow-md">
        {year}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

      <ul className="space-y-3 mb-4">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed">
            <CheckCircle className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl shadow-sm border border-gray-100"
        />
      )}
    </div>
  );
};

const Roadmap = () => {
  const roadmapData = [
    {
      year: "2022",
      title: "It All Started After Lockdown",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/4-8.png",
      points: [
        "Manish Sir and Randheer Sir lost their jobs during the lockdown.",
        "The idea was born — help people learn in-demand skills and earn from home.",
        "Affiliate marketing helped onboard 400–500 learners in a year.",
        "Lack of team/strategy caused a temporary halt.",
        "After research, they realized Digital Marketing is a core skill.",
      ],
    },
    {
      year: "2023",
      title: "Testing, Learning & Expanding",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/2-9.png",
      points: [
        "Started with a 30-Day Digital Marketing Course.",
        "Evolved into 45 and then 60 days based on feedback.",
        "Built confidence with consistent student results.",
        "The need for a structured program and team became clear.",
      ],
    },
    {
      year: "2024",
      title: "Structured Growth & Team Expansion",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/Untitled-design-11.png",
      points: [
        "Launched 3-Month Live Program.",
        "Expanded team to 30–35 and shifted to 4-Month model.",
        "Trained 4,000–5,000 students this year.",
        "Zinmatt gained strong brand trust.",
      ],
    },
    {
      year: "2025",
      title: "Stronger Than Ever",
      image: "https://zinmatt.com/wp-content/uploads/2025/05/4-8.png",
      points: [
        "Now a team of 60+ members and bigger office space.",
        "Continue 4-Month Advanced Program.",
        "Thousands of students enrolled monthly.",
        "Hosted massive 16-Hour Marketing Marathon.",
        "Mission: Empower 1L+ students by 2026.",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
       

        <div className="relative flex flex-col gap-16 items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-orange-400 via-orange-100 to-transparent z-0" />

          {roadmapData.map((data, index) => (
            <div
              key={index}
              className={`relative z-10 w-full flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                }`}
              >
                <TimelineCard
                  year={data.year}
                  title={data.title}
                  points={data.points}
                  image={data.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
