import React, { useState, useEffect } from "react";

const colors = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-purple-500 via-indigo-500 to-blue-500",
  "from-green-400 via-teal-400 to-cyan-400",
  "from-pink-600 via-purple-600 to-indigo-600",
];

const TextChange = () => {
  const texts = [
    "Hi, I'm Md Shafayat hosan",
    "I build interactive websites",
    "I am a frontend developer",
    "Welcome to my portfolio",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(texts[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === texts[index].length) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1500);
        }
      } else {
        // Deleting backward
        setCurrentText(texts[index].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
          setColorIndex((colorIndex + 1) % colors.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, pause, texts, colorIndex]);

  return (
    <h1
      className={`text-transparent bg-clip-text bg-gradient-to-r ${colors[colorIndex]} font-extrabold text-3xl md:text-5xl tracking-tight select-none`}
    >
      {currentText}
      <span className="animate-blink">|</span>

      <style>{`
        .animate-blink {
          animation: blink 1.2s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0 }
        }
      `}</style>
    </h1>
  );
};

export default TextChange;
