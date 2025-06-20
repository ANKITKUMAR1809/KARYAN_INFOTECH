import React, { useEffect, useState } from "react";
import axios from "axios";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://kiec.3karyaninfotech.in//api/starter",
        formData
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", mobile: "", email: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
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
        {submitted ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Thank you! Your details have been submitted.
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
            >
              {loading ? "Submitting..." : "Enroll Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
