import React, { useEffect, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative animate-slideInUp shadow-xl">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-center mb-2">
          🚀 Start Learning Today
        </h2>
        <h3 className="text-xl text-center font-semibold mb-4">
          Join Our{" "}
          <span className="text-orange-500">
            Advanced Digital Marketing Program
          </span>
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Get access to live sessions, real projects, and internship
          opportunities.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
