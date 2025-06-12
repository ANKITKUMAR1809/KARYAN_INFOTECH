import React from "react";

const HighlightsGrid = ({ items = [], bg = "white" }) => {
  return (
    <section className={`w-full bg-${bg}  py-12 px-4 md:px-8`}>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%]"
          >
            {item.icon && <div className="mb-4">{item.icon}</div>}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4"
              />
            )}
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

export default HighlightsGrid;
