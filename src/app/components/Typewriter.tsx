import { useEffect, useState } from 'react';

type TypewriterProps = {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
};

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = '|',
  className = ''
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[wordIndex] ?? '';

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            window.setTimeout(() => {
              setIsDeleting(true);
            }, delayBetweenWords);
          }
        } else if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentWord, delayBetweenWords, isDeleting, speed, words.length]);

  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => window.clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <span className={`inline-block ${className}`}>
      <span>{displayText}</span>
      {cursor && (
        <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}
