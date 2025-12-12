import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const type = () => {
      setCurrentText(prev => {
        if (isDeleting) {
          return word.substring(0, prev.length - 1);
        } else {
          return word.substring(0, prev.length + 1);
        }
      });
    };

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === word) {
      // Finished typing, pause then delete
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(type, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`${className} inline-flex items-center`}>
      {currentText}
      <span className="w-[3px] h-[1em] bg-secondary ml-1 animate-pulse" />
    </span>
  );
};

export default Typewriter;