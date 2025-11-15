import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = [
  "from-cyan-400 via-blue-500 to-purple-600",
  "from-green-400 via-teal-500 to-cyan-600",
  "from-pink-400 via-rose-500 to-red-600",
  "from-yellow-400 via-orange-500 to-red-600",
  "from-purple-400 via-pink-500 to-rose-600",
];

const TextChange = () => {
  const texts = [
    "Hi, I'm Md Shafayat Hossain ",
    "I Build Interactive Websites ",
    "Frontend Developer ",
    "Passionate Coder ",
    "Creative Designer "
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
        setCurrentText(texts[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === texts[index].length) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 2000);
        }
      } else {
        setCurrentText(texts[index].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
          setColorIndex((colorIndex + 1) % colors.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, pause, texts, colorIndex]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className={`text-transparent bg-clip-text bg-gradient-to-r ${colors[colorIndex]} font-black text-3xl md:text-4xl lg:text-5xl tracking-tight select-none leading-tight`}>
        {currentText}
        <motion.span
          className="ml-1 inline-block w-1 h-16 bg-current"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </h1>
    </motion.div>
  );
};

export default TextChange;