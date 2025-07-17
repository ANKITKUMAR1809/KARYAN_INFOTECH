import React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactImg from "../assets/KARYAN_CONTACT.png";
import axios from "axios";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    try {
      const response = await axios.post(
        "https://server.3karyaninfotech.in/api/contact",
        formData
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Contact 3K Aryan Infotech | Book Services or Demo Class in Patna
        </title>
        <meta
          name="description"
          content="Get in touch with 3K Aryan Infotech – for IT services, business consultation, or demo class booking. Call, WhatsApp or visit our Patna office today."
        />
        <meta
          name="keywords"
          content="Contact IT company in Patna, book demo class Bihar, reach 3K Aryan Infotech"
        />
      </Helmet>

      <section
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://zinmatt.com/wp-content/uploads/2025/05/Indias-No-1-Digital-Marketing-Institute-4-1.png')",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Contact
        </h2>
      </section>

      <section className="w-full bg-zinc-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Info
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            <span className="text-orange-500">Contact</span> &amp; Join Together
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Got questions? We’ve got answers. Let’s connect.
          </p>
        </div>
      </section>

      <section className="w-full bg-zinc-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {/* Location */}
          <div className="flex flex-col items-start space-y-2 bg-white py-6 px-4 rounded-md">
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500 w-6 h-6" />
              <div>
                <h3 className="text-sm text-gray-500">Location</h3>
                <p className="font-semibold">Visit Us At</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Address: Ashok Nagar road no.5, Kankarbagh,Patna 20 Bihar,India
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start space-y-2 bg-white py-6 px-4 rounded-md">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 w-6 h-6" />
              <div>
                <h3 className="text-sm text-gray-500">Call Us</h3>
                <p className="font-semibold">Make A Call</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">+91 7091060239</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start space-y-2 bg-white py-6 px-4 rounded-md">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 w-6 h-6" />
              <div>
                <h3 className="text-sm text-gray-500">Drop A Line</h3>
                <p className="font-semibold">Mail Address</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 ">
              infoaman@3karyaninfotech.com <br />
            </p>
          </div>

          {/* Office Hours */}
          <div className="flex flex-col items-start space-y-2 bg-white py-6 px-4 rounded-md">
            <div className="flex items-center gap-3">
              <Clock className="text-orange-500 w-6 h-6" />
              <div>
                <h3 className="text-sm text-gray-500">Office Hour</h3>
                <p className="font-semibold">Opening Time</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Mon – Sat 10AM – 6PM <br />
              Sunday (Closed)
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-200  px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={contactImg}
              alt="KARYAN"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 space-y-6 ">
            {/* Headings */}
            <h2 className="text-2xl font-bold text-orange-500 flex justify-center items-center gap-2 bg-white rounded-full w-1/2 mx-auto py-2 px-4 shadow-md">
              <span className="text-lg">🟠</span> Contact Info{" "}
              <span className="text-lg">🟠</span>
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 ">
              <span className="text-orange-600">Reach</span> & Get in Touch With
              Us!
            </h3>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitted ? (
                <p className="text-green-600 font-semibold text-center">
                  ✅ Your message has been sent!
                </p>
              ) : (
                <>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                    required
                  />
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
