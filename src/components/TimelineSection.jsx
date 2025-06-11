import React from "react";

const TimelineCard = ({ year, points }) => (
  <div className="bg-white rounded-xl p-6 max-w-md font-sans shadow-md border border-gray-200">
    <h3 className="text-xl font-bold mb-4">{year}</h3>
    <ul className="list-none p-0 m-0 space-y-2">
      {points.map((point, idx) => (
        <li key={idx} className="relative pl-6 text-sm leading-relaxed">
          <span className="absolute left-0 text-black font-bold">✔</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const RoadmapCircle = ({ number, style = {} }) => (
  <div className="relative flex flex-col items-center">
    <div
      className="w-10 h-10 bg-orange-600 text-black rounded-full flex items-center justify-center font-bold text-lg z-10"
      style={style}
    >
      {number}
    </div>
    {number !== 4 && (
      <div className="w-0.5 bg-gradient-to-b from-black via-transparent h-72"></div>
    )}
  </div>
);

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2022 – It All Started After Lockdown",
      points: [
        "When everyone was facing layoffs, so were we. Manish Sir and Randheer Sir lost their jobs after the lockdown.",
        "That’s when the idea was born — 'Why not create something that helps people learn in-demand skills and earn from home?'",
        "Online earning was booming. Platforms like Bizgurukul and LeadsGuru were rising.",
        "They started with Affiliate Marketing, selling courses with commission. Managed to onboard 400–500 learners in a year.",
        "But due to lack of proper strategy, team, and growth knowledge, that model didn’t sustain.",
        "Took a 2–3 month break to rethink.",
        "Deep market research revealed: Digital Marketing was a real skill every business needed."
      ],
      image: "https://zinmatt.com/wp-content/uploads/2025/05/4-8.png"
    },
    {
      year: "2023 – Testing, Learning & Expanding",
      points: [
        "Started with a 30-Day Digital Marketing Course",
        "Then extended to 45 Days, and later to 60 Days based on learner feedback.",
        "Gained confidence through consistent results.",
        "Realized: We now need a team and a longer, structured program."
      ],
      image: "https://zinmatt.com/wp-content/uploads/2025/05/4-8.png"
    },
    {
      year: "2024 – Structured Growth & Team Expansion",
      points: [
        "Launched a well-prepared 3-Month Live Digital Marketing Program",
        "Expanded our office space and hired a full-time team of 30–35 people",
        "Within 6 months, moved to a 4-Month Advanced Program",
        "This year, 4,000–5,000 students completed the course successfully",
        "Zinmatt became a trusted brand in skill-based education."
      ],
      image: "https://zinmatt.com/wp-content/uploads/2025/05/Untitled-design-11.png"
    },
    {
      year: "2025 – Stronger Than Ever",
      points: [
        "Now a family of 60+ team members",
        "Moved into a bigger office to accommodate growing operations",
        "Continuing with the 4-Month Advanced Program, helping thousands each month",
        "Hosting high-impact sessions like the 16-Hour Digital Marketing Marathon",
        "Vision: Empower 1,00,000+ learners with real digital skills by 2026"
      ],
      image: "https://zinmatt.com/wp-content/uploads/2025/05/2-9.png"
    }
  ];

  return (
    <section className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 py-10 px-4">
      <div className="flex flex-col items-center">
        {[1, 2, 3, 4].map((num, idx) => (
          <RoadmapCircle key={num} number={num} style={{ marginLeft: idx % 2 === 0 ? 0 : 10 }} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {timelineData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            <TimelineCard year={data.year} points={data.points} />
            <img src={data.image} alt="Timeline visual" className="max-w-sm rounded-xl shadow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;