import React, { useEffect, useState } from "react";
import axios from "axios";
import applyPic from "../assets/99days.jpg";

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

  const closePopup = () => setShowPopup(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://server.3karyaninfotech.in/api/starter",
        formData
      );
      if (response.status==201) {
        setSubmitted(true);
        setFormData({ name: "", mobile: "", email: "" });
        alert("Thank you! Your details have been submitted.");
        setTimeout(() => {
          closePopup();
        }, 2000);
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
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl w-2/1 max-w-4xl p-4 md:p-6 relative flex flex-col md:flex-row items-center gap-6 animate-slideInUp border border-white/30">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-0 right-0 text-gray-700 hover:text-red-500 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image */}
        <div className="hidden md:w-1/2 md:flex">
          <img
            src={applyPic}
            alt="Apply Now"
            className="rounded-xl object-cover w-full max-h-auto"
          />
        </div>

        {/* Form Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-1">
            🚀 Start Your Demo Class
          </h2>
          <h3 className="text-lg font-semibold text-center mb-3">
            Join Our{" "}
            <span className="text-orange-500">99₹ Demo Class</span>
          </h3>
          <p className="text-sm text-gray-600 text-center mb-6">
            See Our Teaching Style, Our Technique To Get Admission.
          </p>

          {submitted ? (
            <p className="text-green-600 text-center font-medium">
              ✅ Thank you! Your details have been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 rounded-lg"
              >
                {loading ? "Submitting..." : "Enroll Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
