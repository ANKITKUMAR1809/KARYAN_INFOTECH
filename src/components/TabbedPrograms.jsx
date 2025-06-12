import React, { useState } from 'react';

const tabs = [
  {
    id: 'tab1',
    label: 'Digital Marketing',
    image: 'https://zinmatt.com/wp-content/uploads/2025/05/6-10.png',
  },
  {
    id: 'tab2',
    label: 'Web Development',
    image: 'https://zinmatt.com/wp-content/uploads/2025/05/9-5.png',
  },
  {
    id: 'tab3',
    label: 'Video Editing',
    image: 'https://zinmatt.com/wp-content/uploads/2025/05/7-8.png',
  },
  {
    id: 'tab4',
    label: 'Graphic Designing',
    image: 'https://zinmatt.com/wp-content/uploads/2025/05/10-6.png',
  },
];

const TabbedPrograms = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full bg-white py-10">
      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap gap-3 px-4 pb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 border-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === tab.id
                ? 'bg-orange-600 text-white shadow-md'
                : 'bg-white text-black border-black hover:bg-orange-500 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-4">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="text-center">
              <div className="relative w-full max-w-4xl mx-auto">
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full rounded-2xl shadow-lg"
                />

                {/* Buttons */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10 max-md:static max-md:flex-col max-md:items-center max-md:mt-4">
                  <a
                    href="/brochure.pdf"
                    download
                    className="bg-white text-black px-5 py-3 rounded-lg font-semibold border shadow hover:bg-gray-100"
                  >
                    Download Brochure
                  </a>
                  <a
                    href="/learn-more"
                    className="bg-black text-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-800"
                  >
                    Learn More
                  </a>
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
