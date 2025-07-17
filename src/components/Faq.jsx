import { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where is your company located?",
      answer:
        "Our company, 3K ARYAN Infotech, is located in Patna, Bihar. We offer IT services including web development, digital marketing, and design solutions.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can contact us at +91 87095 50781 or email us at info@sakwebtech.com. We are available Monday to Saturday.",
    },
    {
      question: "What kind of services does 3K ARYAN Infotech provide?",
      answer:
        "We provide web development, app development, graphic design, digital marketing, SEO, and IT consulting services tailored to clients' needs.",
    },
    {
      question: "Do you offer training or internships for students?",
      answer:
        "Yes, 3K ARYAN Infotech offers internships and project-based training in web development, UI/UX design, and digital marketing, ideal for students and freshers.",
    },
    {
      question: "Is your training beginner-friendly?",
      answer:
        "Absolutely! Our training is suitable for beginners and includes step-by-step guidance, real-time projects, and personalized mentorship.",
    },
    {
      question: "Will I receive a certificate after completing the training?",
      answer:
        "Yes, all successful trainees receive a certificate from 3K ARYAN Infotech that is recognized and helpful for job applications and freelance work.",
    },
    {
      question: "Can I visit your office in person?",
      answer:
        "Yes, you are welcome to visit our office in Patna. Just contact us beforehand to schedule an appointment so we can assist you properly.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-orange-600 font-semibold">[ FAQ ]</p>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-10">
          Get answers to common questions about 3K ARYAN Infotech and our services for students and businesses.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 bg-gray-100 font-medium focus:outline-none"
              onClick={() => toggle(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
