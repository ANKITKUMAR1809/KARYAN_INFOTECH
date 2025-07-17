import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
    internship: "",
    duration: "",
    college: "",
    year: "",
    startDate: "",
    batch: "",
    aadhar: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post("https://your-api-link.com/api/students", formData);
      if (res.status === 201) {
        setSuccessMsg(`Registration successful! Your registration no will be emailed or available soon.`);
        setFormData({
          email: "",
          name: "",
          mobile: "",
          internship: "",
          duration: "",
          college: "",
          year: "",
          startDate: "",
          batch: "",
          aadhar: "",
          address: "",
        });
      }
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Student Registration
      </h2>

      {successMsg && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
          {successMsg}
        </div>
      )}

      {errorMsg && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
          {errorMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        noValidate
      >
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="10-digit mobile"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Aadhar Number</label>
          <input
            type="number"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your Aadhar number"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Internship</label>
          <input
            type="text"
            name="internship"
            value={formData.internship}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Internship title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="E.g., 1 Month"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">College</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            placeholder="College name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            placeholder="Year of study"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Batch</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
            placeholder="Batch info"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Full address"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-1/3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
