// components/WhatsAppFloatingButton.jsx
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const phoneNumber = '7091060239';

  const options = [
    { label: 'Know About Services', message: 'Hi, I want to know about your services.' },
    { label: 'Know About Courses', message: 'Hi, I want to know about your courses.' },
    { label: 'Know About Internship', message: 'Hi, I want to know about your internship program.' },
  ];

  const handleClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/91${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowOptions(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {showOptions && (
        <div className="bg-white shadow-lg rounded-xl p-2 space-y-2 w-56">
          {options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleClick(opt.message)}
              className="w-full text-left px-4 py-2 rounded hover:bg-green-100 text-sm font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
