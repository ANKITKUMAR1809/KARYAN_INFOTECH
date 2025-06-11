import { useEffect, useState } from 'react';

const rotatingTexts = [
  "KARYAN INFOTECH",
  "Live Classes",
  "100% Internship",
  "Live Projects",
  "Job Assistance",
  "Gov. Approved Certificate",
  "Hands-On Support"
];

const TypingText = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = rotatingTexts[index];
    let typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % rotatingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <h3 className="text-2xl md:text-3xl font-bold text-center min-h-[3rem]">
      <span className="text-orange-600">{currentText}</span>
      <span className="border-r-2 border-orange-600 animate-pulse ml-1"></span>
    </h3>
  );
};

export default TypingText;
