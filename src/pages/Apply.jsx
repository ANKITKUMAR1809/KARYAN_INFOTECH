import React, { useState } from "react";
import applyPic from "../assets/apply.png"; // Assuming you have an image for the apply section
import axios from "axios";
const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendQuery = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kiec.3karyaninfotech.in//api/send",
        formData
      );

      if (response.status === 201) {
        alert("Your query has been sent successfully!");
      } else {
        alert("Failed to send your query. Please try again later.");
      }
    } catch (error) {
      alert(
        "An error occurred while sending your query. Please try again later."
      );
      console.error("Error sending query:", error);
    }

    e.target.reset(); // Optional: This clears the form visually
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={applyPic}
            alt="Apply Illustration"
            className="w-72 h-72 object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Apply Now</h2>

          <form className="space-y-5" onSubmit={sendQuery}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                onChange={handleChange}
                value={formData.mobile}
                placeholder="Mobile Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apply;
